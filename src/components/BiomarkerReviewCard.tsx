import { motion } from "framer-motion";
import somalabLogo from "@/assets/somalab-logo.png";

interface Marker {
  name: string;
  status: string;
  statusColor: string;
  /** dot position as percentage along the bar (0-100) */
  dot: number;
  dotColor: string;
}

const markers: Marker[] = [
  { name: "Iron stores", status: "Worth a look", statusColor: "#C85A12", dot: 22, dotColor: "#C85A12" },
  { name: "Vitamin D", status: "In range", statusColor: "#2F7D5B", dot: 55, dotColor: "#2F7D5B" },
  { name: "B12", status: "In range", statusColor: "#2F7D5B", dot: 62, dotColor: "#2F7D5B" },
  { name: "Fasting glucose", status: "In range", statusColor: "#2F7D5B", dot: 48, dotColor: "#2F7D5B" },
];

const RangeBar = ({ dot, dotColor }: { dot: number; dotColor: string }) => (
  <div className="relative h-2 rounded-full" style={{ backgroundColor: "#EFEAE0" }}>
    {/* healthy range zone */}
    <div
      className="absolute top-0 h-full rounded-full"
      style={{ left: "35%", width: "35%", backgroundColor: "#CFE3DD" }}
    />
    {/* result dot */}
    <div
      className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-sm"
      style={{ left: `${dot}%`, backgroundColor: dotColor }}
    />
  </div>
);

export const BiomarkerReviewCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[460px] mx-auto lg:mx-0"
    >
      <div
        className="bg-card rounded-3xl border p-6 sm:p-8"
        style={{ borderColor: "#E4DDCF" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 className="font-heading text-2xl text-foreground">
            Your SomaLab review
          </h3>
          <img
            src={somalabLogo}
            alt="SomaLab logo"
            className="h-8 w-8 object-contain shrink-0"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="text-xs text-muted-foreground mb-6">Example layout only</p>

        {/* Marker rows */}
        <div className="space-y-5">
          {markers.map((marker) => (
            <div key={marker.name}>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span className="font-body text-sm font-medium text-foreground">
                  {marker.name}
                </span>
                <span
                  className="font-body text-xs font-medium"
                  style={{ color: marker.statusColor }}
                >
                  {marker.status}
                </span>
              </div>
              <RangeBar dot={marker.dot} dotColor={marker.dotColor} />
            </div>
          ))}
        </div>

        {/* Next step box */}
        <div
          className="mt-7 rounded-xl p-4"
          style={{ backgroundColor: "#F6F3EE" }}
        >
          <p className="font-body text-sm text-foreground/90 leading-relaxed">
            <span className="font-medium">Next step:</span> iron-rich meals built
            around foods you already enjoy, rechecked in 12 weeks.
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        Illustration only. A Biomarker Review is an educational interpretation of
        your results and is not a medical diagnosis.
      </p>
    </motion.div>
  );
};
