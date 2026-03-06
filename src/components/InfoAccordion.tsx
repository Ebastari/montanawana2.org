type InfoAccordionProps = {
  title: string;
  content: string | string[];
};

const InfoAccordion = ({ title, content }: InfoAccordionProps) => {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.12em] text-emerald-200">
        {title}
      </summary>
      {Array.isArray(content) ? (
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300 md:text-base">
          {content.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{content}</p>
      )}
    </details>
  );
};

export default InfoAccordion;
