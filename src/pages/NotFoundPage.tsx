import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center md:px-10">
      <p className="text-sm uppercase tracking-[0.22em] text-emerald-300">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Halaman Tidak Ditemukan</h1>
      <NavLink to="/" className="mt-6 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950">
        Kembali Ke Home
      </NavLink>
    </main>
  );
};

export default NotFoundPage;
