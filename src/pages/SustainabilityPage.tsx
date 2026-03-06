import SectionHeader from '../components/SectionHeader';

const SustainabilityPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="Sustainability"
        title="KomESG"
        description="Komitmen kami terhadap masa depan yang berkelanjutan"
      />

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
          <p className="text-4xl font-semibold text-emerald-300">85%</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Environmental</h3>
          <p className="mt-2 text-sm text-slate-300">Pencapaian target pengurangan emisi dan pelestarian ekosistem</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
          <p className="text-4xl font-semibold text-emerald-300">92%</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Social</h3>
          <p className="mt-2 text-sm text-slate-300">Kesejahteraan komunitas lokal dan pengembangan kapasitas</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
          <p className="text-4xl font-semibold text-emerald-300">88%</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Governance</h3>
          <p className="mt-2 text-sm text-slate-300">Transparansi dan akuntabilitas dalam tata kelola perusahaan</p>
        </article>
      </div>
    </main>
  );
};

export default SustainabilityPage;
