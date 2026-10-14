import logo from "@/assets/somalab-logo.png";

const rows = [
  { name: "Iron stores", status: "Worth a look", flag: true, pos: 18 },
  { name: "Vitamin D", status: "In range", flag: false, pos: 58 },
  { name: "B12", status: "In range", flag: false, pos: 45 },
  { name: "Fasting glucose", status: "In range", flag: false, pos: 66 },
];

export const BiomarkerReviewCard = () => (
  <div className="w-full max-w-[460px] mx-auto">
    <div className="bg-soma-white rounded-3xl border border-soma-line p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-2xl font-normal text-soma-ink">Your SomaLab review</h3>
          <p className="font-body text-xs text-soma-muted mt-1">Example layout only</p>
        </div>
        <img src={logo} alt="" aria-hidden="true" className="h-8 w-auto" />
      </div>
      <div className="h-px bg-soma-line my-6" />
      <div className="space-y-6">
        {rows.map((r) => (
          <div key={r.name}>
            <div className="flex justify-between font-body text-sm mb-3">
              <span className="text-soma-ink font-medium">{r.name}</span>
              <span className={r.flag ? "text-soma-orange" : "text-soma-green"}>{r.status}</span>
            </div>
            <div className="relative h-1.5 rounded-full bg-soma-track">
              <div className="absolute inset-y-0 left-[30%] right-[25%] bg-soma-range rounded-full" />
              <span
                className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-soma-white shadow-sm ${
                  r.flag ? "bg-soma-orange" : "bg-soma-green"
                }`}
                style={{ left: `${r.pos}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-soma-note p-4 font-body text-sm text-soma-ink leading-relaxed">
        <span className="font-medium">Next step:</span> iron-rich meals built around foods you already enjoy,
        rechecked in 12 weeks.
      </div>
    </div>
    <p className="font-body text-xs text-soma-muted mt-3 leading-relaxed">
      Illustration only. A Biomarker Review is an educational interpretation of your results and is not a medical
      diagnosis.
    </p>
  </div>
);
