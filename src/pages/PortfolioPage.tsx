import SectionHeader from '../components/SectionHeader';

const PortfolioPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="Portfolio"
        title="Proyek Impact"
        description="Dampak nyata dari solusi teknologi kami"
      />

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">Montana Ai Pro</h3>
          <p className="mt-3 text-sm text-slate-300">Implementasi Pemanfaatan AI di Lahan Bekas Tambang Di PT Energi Batubara Lestari.</p>
          <ul className="mt-4 space-y-2 text-sm text-emerald-200">
            <li>600 Hektare Terpantau</li>
            <li>Rp600.000.000 Penurunan Kerugian Perusaan</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">UMKM Peternakan Karang Pucung</h3>
          <p className="mt-3 text-sm text-slate-300">Digitalisasi operasional peternakan dengan sistem monitoring real-time.</p>
          <ul className="mt-4 space-y-2 text-sm text-emerald-200">
            <li>100+ Peternak Terintegrasi</li>
            <li>500+ Ternak Terpantau</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">Ruang Kuliah Digital</h3>
          <p className="mt-3 text-sm text-slate-300">Platform edukasi kehutanan untuk mahasiswa dengan AI assistant.</p>
          <ul className="mt-4 space-y-2 text-sm text-emerald-200">
            <li>10+ Modul Available</li>
            <li>500+ Mahasiswa</li>
          </ul>
        </article>
      </div>
    </main>
  );
};

export default PortfolioPage;
