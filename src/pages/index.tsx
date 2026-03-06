import Hero3D from '../components/Hero3D';
import HomeKeywordWall from '../components/HomeKeywordWall';
import MontanaWanaServices from '../components/MontanaWanaServices';

const whatsappNumber = '6281122220044';
const whatsappMessage = encodeURIComponent('Halo PT Montana Wana Teknologi, saya ingin konsultasi lebih lanjut terkait layanan yang tersedia.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const HomePage = () => {
  return (
    <main className="relative overflow-x-hidden bg-[#030807] text-white">
      <Hero3D onExplore={() => document.getElementById('ecosystem-preview')?.scrollIntoView({ behavior: 'smooth' })} />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <HomeKeywordWall />

        <div id="services-preview">
          <MontanaWanaServices />
        </div>

        <section className="rounded-3xl border border-emerald-300/25 bg-[linear-gradient(145deg,rgba(16,185,129,0.16),rgba(3,7,11,0.72))] p-6 shadow-[0_25px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl md:p-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200">Konsultasi Cepat</p>
          <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Hubungi Tim Montana via WhatsApp</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
            Klik tombol di bawah untuk langsung terhubung ke WhatsApp PT Montana Wana Teknologi. Anda akan diarahkan ke aplikasi WhatsApp dengan nomor 0811-2222-0044.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Chat WhatsApp Sekarang
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
