# SomaLab WordPress Theme — Setup Instructions

## Files Included

```
somalab/
├── assets/
│   ├── images/
│   │   ├── hero-image.jpg
│   │   ├── coach-portrait.jpg
│   │   ├── somalab-logo.png
│   │   ├── merch-tshirt.jpg
│   │   ├── merch-hoodie.jpg
│   │   ├── merch-bottle.jpg
│   │   ├── merch-tote.jpg
│   │   ├── blog-nutrition.jpg
│   │   ├── blog-wellness.jpg
│   │   └── blog-breakfast.jpg
│   └── js/
│       └── main.js
├── front-page.php      ← Homepage (hero, why us, how it works, coach, reviews, CTA)
├── page-about.php      ← About page (founder story, mission, credentials, values)
├── page-services.php   ← Services & pricing (5 service cards, FAQ, booking steps)
├── page-store.php      ← Merch store (4 products)
├── page-blog.php       ← Blog listing (uses WP posts with featured post layout)
├── header.php          ← Navbar with logo, nav links, Book Now CTA, mobile menu
├── footer.php          ← 4-column footer, disclaimer, legal, copyright
├── index.php           ← Fallback for standard WP post loop
├── functions.php       ← Theme setup, Customizer settings, auto-page creation
├── style.css           ← Full CSS with theme header
└── screenshot.png      ← (add your own 1200×900 screenshot)
```

## Installation

1. **Zip the folder**: Select all files inside `wordpress-theme/`, zip them into `somalab.zip`
2. **Upload**: WordPress Admin → Appearance → Themes → Add New → Upload Theme → choose `somalab.zip`
3. **Activate**: Click "Activate"

## After Activation

The theme **automatically creates** these WordPress pages on activation:
- **About** (uses `page-about.php` template)
- **Services** (uses `page-services.php` template)
- **Store** (uses `page-store.php` template)
- **Blog** (uses `page-blog.php` template)

### Set your Homepage
1. Go to **Settings → Reading**
2. Select **"A static page"**
3. Set **Homepage** = your front page (or leave as default)

### Set up Navigation
1. Go to **Appearance → Menus**
2. Create a new menu, add pages: Home, About, Services, Store, Blog
3. Assign to **"Primary Menu"** location

### Customizer Settings
Go to **Appearance → Customize** to edit:
- **Hero Section**: Badge text, heading, description, background image, Calendly URL
- **Coach Section**: Portrait image, heading, bio paragraphs
- **CTA Section**: Heading and text
- **Footer**: Tagline, contact email, phone, location, Instagram, Facebook, ABN

### Upload Logo
**Appearance → Customize → Site Identity → Logo**

## Images
All images from the original site are bundled in `assets/images/`. They are used as defaults when no Customizer image is set. Upload your own via the Customizer to replace them.

## Blog Posts
Create WordPress posts normally — they'll appear on the Blog page with featured images, categories, and excerpts in the card layout.
