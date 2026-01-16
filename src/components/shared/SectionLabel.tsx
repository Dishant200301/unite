interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gold font-bold">¬</span>
      <span
        className={`text-[12.5px] uppercase tracking-wide font-bold ${light ? "text-white" : "text-charcoal"
          }`}
      >
        {text}
      </span>
    </div>
  );
}
