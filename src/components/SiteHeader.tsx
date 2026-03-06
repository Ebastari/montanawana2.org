import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Company', to: '/about-company' },
  { label: 'Founder', to: '/founder' },
  { label: 'Konsultasi Perizinan', to: '/konsultasi-perizinan' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'UMKM Peternakan', to: '/umkm-peternakan' },
  { label: 'Edukasi Digital', to: '/edukasi-digital' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'Contact', to: '/contact' },
];

const SiteHeader = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030807]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl justify-end px-6 py-3 md:px-10">
        <button
          type="button"
          onClick={() => setIsNavVisible((value) => !value)}
          aria-label={isNavVisible ? 'Sembunyikan navigasi' : 'Tampilkan navigasi'}
          className="rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200 transition hover:border-emerald-200 hover:bg-emerald-300/15"
        >
          {isNavVisible ? 'Sembunyikan Menu' : 'Tampilkan Menu'}
        </button>
      </div>

      {isNavVisible && (
        <div className="mx-auto hidden max-w-7xl px-6 pb-3 md:px-10 lg:block">
          <nav className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.14em] transition ${isActive ? 'text-emerald-300' : 'text-slate-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {isNavVisible && (
        <nav className="flex gap-4 overflow-x-auto px-6 pb-4 lg:hidden md:px-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] transition ${isActive ? 'bg-emerald-300/20 text-emerald-300' : 'bg-white/5 text-slate-300'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
