import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

const founderImageCandidates = [
  'https://i.ibb.co.com/C3zwF6J7/foto-profil.png',
  'https://i.ibb.co/C3zwF6J7/foto-profil.png',
];

const founderSummary =
  'Agung Laksono adalah seorang inovator di bidang teknologi lingkungan yang menjabat sebagai CEO dan Pendiri PT Montana Wana Teknologi. Memiliki latar belakang pendidikan dari Institut Pertanian Stiper (Instiper), ia berhasil menggabungkan keahliannya sebagai pengembang aplikasi web dengan pemahaman mendalam tentang data lingkungan.';

const SiteFooter = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const fallbackImage = useMemo(() => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='980' viewBox='0 0 800 980'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='#0f172a'/><stop offset='1' stop-color='#052e2b'/></linearGradient></defs><rect width='800' height='980' fill='url(#g)'/><circle cx='400' cy='295' r='160' fill='rgba(148,163,184,0.4)'/><rect x='170' y='530' width='460' height='270' rx='120' fill='rgba(148,163,184,0.4)'/><text x='50%' y='915' text-anchor='middle' fill='#a7f3d0' font-family='Segoe UI,sans-serif' font-size='48'>Agung Laksono</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, []);

  const activeFounderImage = founderImageCandidates[imageIndex] ?? fallbackImage;

  const handleImageError = () => {
    setImageIndex((value) => value + 1);
  };

  return (
    <>
      <footer className="border-t border-white/10 bg-slate-950/80 py-14 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl space-y-10 px-6 md:px-10">
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <section className="rounded-2xl border border-white/10 bg-slate-900/35 p-5 md:p-6">
              <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300">PT Montana Wana Teknologi</p>
                  <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">Inovasi Lingkungan Berbasis Teknologi</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                    Memberdayakan masa depan kehutanan Indonesia melalui solusi digital yang presisi, transparan, dan berdampak nyata untuk masyarakat.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Navigasi</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li><NavLink to="/about-company" className="transition hover:text-emerald-200">Tentang Kami</NavLink></li>
                    <li><NavLink to="/solutions" className="transition hover:text-emerald-200">Solusi</NavLink></li>
                    <li><NavLink to="/portfolio" className="transition hover:text-emerald-200">Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className="transition hover:text-emerald-200">Kontak</NavLink></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Kontak</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>agunglaksono@montanawana.org</li>
                    <li>+62 811 2222 0044</li>
                    <li>Banjarbaru, Kalimantan Selatan</li>
                  </ul>
                </div>
              </div>
            </section>

            <article className="rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.06] p-4 md:p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">Founder Spotlight</p>
              <button
                type="button"
                onClick={() => setIsFounderModalOpen(true)}
                className="mt-3 w-full text-left"
                aria-label="Lihat detail profil Agung Laksono"
              >
                <div className="flex h-64 w-full items-center justify-center rounded-xl border border-emerald-300/30 bg-slate-900/65 p-3 shadow-[0_16px_40px_rgba(16,185,129,0.18)] transition duration-300 hover:scale-[1.01]">
                  <img
                    src={activeFounderImage}
                    alt="Agung Laksono"
                    onError={handleImageError}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              </button>
              <h4 className="mt-4 text-lg font-semibold text-white">Agung Laksono</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{founderSummary}</p>
              <button
                type="button"
                onClick={() => setIsFounderModalOpen(true)}
                className="mt-4 inline-flex items-center rounded-full border border-emerald-300/45 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-300/10"
              >
                Lihat Detail
              </button>
            </article>
          </div>

          <p className="text-center text-xs text-slate-500">© {new Date().getFullYear()} PT Montana Wana Teknologi. All rights reserved.</p>
        </div>
      </footer>

      {isFounderModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/75 p-4" role="dialog" aria-modal="true" aria-label="Detail Founder">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-emerald-300/30 bg-slate-900 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.75)] md:p-7">
            <button
              type="button"
              onClick={() => setIsFounderModalOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-200 transition hover:border-emerald-300/60 hover:text-emerald-100"
            >
              Tutup
            </button>

            <div className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-6">
              <div className="flex h-64 items-center justify-center rounded-xl border border-emerald-300/25 bg-slate-950/65 p-3 md:h-full">
                <img
                  src={activeFounderImage}
                  alt="Agung Laksono"
                  onError={handleImageError}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300">CEO dan Pendiri</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Agung Laksono</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">{founderSummary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300 md:text-base">
                  <li>Latar pendidikan: Institut Pertanian Stiper (Instiper).</li>
                  <li>Fokus keahlian: pengembangan aplikasi web dan data lingkungan.</li>
                  <li>Peran kepemimpinan: mendorong inovasi teknologi lingkungan yang aplikatif.</li>
                </ul>
                <NavLink
                  to="/founder"
                  className="mt-5 inline-flex rounded-full border border-emerald-300/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-300/10"
                  onClick={() => setIsFounderModalOpen(false)}
                >
                  Buka Halaman Founder
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteFooter;
