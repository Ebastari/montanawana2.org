type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <header className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      <p className="text-sm leading-relaxed text-slate-300 md:text-base">{description}</p>
    </header>
  );
};

export default SectionHeader;
