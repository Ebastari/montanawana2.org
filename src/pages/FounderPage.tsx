import SectionHeader from '../components/SectionHeader';
import InfoAccordion from '../components/InfoAccordion';
import { useMemo, useState } from 'react';

const founderImageCandidates = [
  'https://i.ibb.co.com/C3zwF6J7/foto-profil.png',
  'https://i.ibb.co/C3zwF6J7/foto-profil.png'
];

const FounderPage = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const fallbackImage = useMemo(() => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='900' viewBox='0 0 900 900'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='#0f172a'/><stop offset='1' stop-color='#0b3a32'/></linearGradient></defs><rect width='900' height='900' fill='url(#g)'/><circle cx='450' cy='360' r='160' fill='rgba(148,163,184,0.35)'/><rect x='210' y='560' width='480' height='210' rx='105' fill='rgba(148,163,184,0.35)'/><text x='50%' y='860' text-anchor='middle' fill='#a7f3d0' font-family='Arial,sans-serif' font-size='54'>Agung Laksono</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, []);

  const activeImage = founderImageCandidates[imageIndex] ?? fallbackImage;

  const handleImageError = () => {
    setImageIndex((value) => value + 1);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="Founder"
        title="Agung Laksono"
        description="CEO dan Founder PT Montana Wana Teknologi"
      />

      <section className="mb-8 flex flex-wrap gap-2">
        <span className="rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">CEO & Founder</span>
        <span className="rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Environmental Technology</span>
        <span className="rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">My Montana AI</span>
        <span className="rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Instiper Yogyakarta</span>
      </section>

      <section className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-[320px_1fr]">
        <img
          src={activeImage}
          alt="Agung Laksono"
          className="h-80 w-full rounded-2xl border border-emerald-300/25 object-cover shadow-[0_0_35px_rgba(45,212,191,0.25)]"
          onError={handleImageError}
        />
        <div>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            Agung Laksono adalah seorang inovator di bidang teknologi lingkungan yang menjabat sebagai CEO dan Founder PT Montana Wana Teknologi. Memiliki latar belakang pendidikan dari Institut Pertanian Stiper (Instiper), ia berhasil menggabungkan keahliannya sebagai pengembang aplikasi web dengan pemahaman mendalam tentang data lingkungan.
          </p>
          <div className="mt-4 space-y-3">
            <InfoAccordion title="Peran Strategis" content="1. Agung Laksono adalah CEO dan Founder PT Montana Wana Teknologi, perusahaan yang berfokus pada pengembangan solusi digital untuk sektor kehutanan, lingkungan, dan manajemen berbasis teknologi informasi." />
            <InfoAccordion title="Keahlian Teknologi" content="2. Berlatar belakang sebagai pengembang aplikasi web dengan spesialisasi pada data lingkungan dan sistem monitoring, Agung Laksono memiliki kompetensi dalam membangun platform digital yang terintegrasi, presisi, dan berbasis analitik." />
            <InfoAccordion title="Inisiatif My Montana AI" content="3. Salah satu inisiatif strategis yang dipimpinnya adalah pengembangan platform My Montana AI, sebuah sistem manajemen revegetasi dan monitoring lingkungan yang dirancang untuk mendukung pengelolaan data kehutanan secara lebih efisien, transparan, dan terukur." />
            <InfoAccordion title="Latar Pendidikan" content="4. Agung Laksono merupakan lulusan dari Institut Pertanian Stiper (Instiper) Yogyakarta, dengan latar pendidikan yang memperkuat pemahamannya terhadap sektor kehutanan dan lingkungan." />
            <InfoAccordion title="Arah Kepemimpinan" content="5. Di bawah kepemimpinannya, PT Montana Wana Teknologi diarahkan menjadi perusahaan teknologi yang inovatif, terpercaya, dan berkelanjutan dalam mendukung transformasi digital sektor kehutanan, lingkungan, dan bisnis berbasis data di Indonesia." />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-emerald-200">Timeline Karier & Inovasi</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-300 md:text-base">
          <li>Instiper Yogyakarta - pondasi sektor kehutanan dan lingkungan.</li>
          <li>Spesialisasi pengembangan aplikasi web dan data lingkungan.</li>
          <li>Pengembangan My Montana AI untuk monitoring revegetasi.</li>
          <li>Kepemimpinan transformasi digital di PT Montana Wana Teknologi.</li>
        </ul>
      </section>
    </main>
  );
};

export default FounderPage;
