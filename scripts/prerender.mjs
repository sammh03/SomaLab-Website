/**
 * Static prerender script — run AFTER `vite build` to generate fully-rendered
 * HTML for every route. Useful when deploying to Vercel/Netlify/Cloudflare for
 * maximum SEO and instant LCP. Lovable hosting serves the SPA build directly,
 * so this step is optional there.
 *
 * Usage:
 *   npm run build && node scripts/prerender.mjs
 *
 * Requires (install on demand):  npm i -D puppeteer
 *
 * What it does:
 *   1. Boots a tiny static file server against ./dist
 *   2. Launches headless Chromium and visits each route
 *   3. Waits for React + react-helmet-async to commit, then snapshots HTML
 *   4. Writes dist/<route>/index.html for each route
 *
 * The output is fully static, indexable HTML — no JS execution required by
 * crawlers to read the content.
 */

import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const ROUTES = ["/", "/about", "/services", "/contact", "/blog", "/store", "/privacy", "/terms"];
const DIST = resolve(process.cwd(), "dist");
const PORT = 4173;

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

if (!existsSync(DIST)) {
  console.error("✗ dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

// Static server with SPA fallback to index.html
const server = createServer(async (req, res) => {
  let urlPath = req.url.split("?")[0];
  let filePath = join(DIST, urlPath === "/" ? "/index.html" : urlPath);
  if (!existsSync(filePath) || !extname(filePath)) filePath = join(DIST, "index.html");
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "text/plain" });
    res.end(data);
  } catch {
    res.writeHead(404).end("not found");
  }
});

await new Promise((r) => server.listen(PORT, r));

let puppeteer;
try {
  puppeteer = (await import("puppeteer")).default;
} catch {
  console.error(
    "✗ puppeteer not installed. Run: npm i -D puppeteer  (then re-run this script)",
  );
  server.close();
  process.exit(1);
}

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();

for (const route of ROUTES) {
  const url = `http://localhost:${PORT}${route}`;
  console.log(`• prerendering ${route}`);
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
  // Give react-helmet-async one tick to commit head changes
  await page.evaluate(() => new Promise((r) => setTimeout(r, 50)));
  const html = await page.content();
  const outDir = route === "/" ? DIST : join(DIST, route);
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "index.html"), html);
}

await browser.close();
server.close();
console.log("✓ Prerender complete — dist/ now contains static HTML for all routes.");
