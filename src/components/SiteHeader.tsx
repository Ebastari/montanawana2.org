import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/about-company' },
  { label: 'Pendiri', to: '/founder' },
  { label: 'Perizinan', to: '/konsultasi-perizinan' },
  { label: 'Solusi', to: '/solutions' },
  { label: 'UMKM', to: '/umkm-peternakan' },
  { label: 'Edukasi', to: '/edukasi-digital' },
  { label: 'Publikasi', to: '/publikasi-teknologi' },
  { label: 'Portofolio', to: '/portfolio' },
  { label: 'Peta Jalan', to: '/roadmap' },
  { label: 'Kontak', to: '/contact' },
];

const SiteHeader = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030807]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-3 md:px-10">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[linear-gradient(155deg,rgba(3,8,7,0.88),rgba(7,20,16,0.68))] px-3 py-2">
          <NavLink to="/" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
            <img
              src="/logo-montana.png"
              alt="Logo Montana Wana Teknologi"
              className="h-8 w-8 rounded-md border border-emerald-300/35 bg-white/90 p-0.5 object-contain"
            />
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200 sm:inline">
              Montana Wana
            </span>
          </NavLink>

          <nav className="ml-auto hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.1em] transition ${
                    isActive
                      ? 'border border-emerald-300/35 bg-emerald-300/15 text-emerald-200'
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-site-navigation"
            className="ml-auto inline-flex rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200 transition hover:border-emerald-200 hover:bg-emerald-300/15 xl:hidden"
          >
            {isMobileMenuOpen ? 'Tutup' : 'Menu'}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-site-navigation" className="border-t border-white/10 bg-[#02070b]/95 px-6 py-4 md:px-10 xl:hidden">
          <nav className="grid gap-2 sm:grid-cols-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg border px-3 py-2 text-sm uppercase tracking-[0.1em] transition ${
                    isActive
                      ? 'border-emerald-300/35 bg-emerald-300/15 text-emerald-200'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
