import { NavLink } from 'react-router-dom';

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-14 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl space-y-10 px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
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
        </div>

        <p className="text-center text-xs text-slate-500">© {new Date().getFullYear()} PT Montana Wana Teknologi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
