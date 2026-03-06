import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type PermitSlide = {
  title: string;
  narrative: string;
};

const permitSlides: PermitSlide[] = [
  {
    title: 'IPPKH',
    narrative:
      'Deskripsi perizinan Izin Pinjam Pakai Kawasan Hutan (IPPKH) mencakup pendampingan menyeluruh dari kajian awal lokasi, verifikasi kelengkapan dokumen teknis, hingga strategi pemenuhan ketentuan regulasi lintas instansi. Tim kami membantu memastikan rencana kegiatan non-kehutanan tetap selaras dengan prinsip perlindungan kawasan hutan, sehingga proses pengajuan lebih terarah, risiko koreksi berulang dapat ditekan, dan keputusan perizinan dapat dicapai dengan lebih efisien.',
  },
  {
    title: 'AMDAL',
    narrative:
      'Pendampingan AMDAL kami dirancang untuk memperkuat kualitas dokumen dan argumentasi teknis agar selaras dengan karakter proyek serta sensitivitas lingkungan setempat. Fokus layanan mencakup identifikasi dampak penting, penyusunan rencana pengelolaan dan pemantauan, serta pengawalan komunikasi teknis pada tahapan evaluasi agar proses berjalan lebih cepat dan akuntabel.',
  },
  {
    title: 'Perizinan Lingkungan SLO',
    narrative:
      'Untuk kebutuhan Social License to Operate (SLO), kami menata dokumen kepatuhan operasional dan narasi keberterimaan sosial secara terpadu. Pendekatan ini membantu perusahaan membangun kepercayaan pemangku kepentingan, menjaga kesinambungan operasi, serta memperkuat kesiapan dalam audit internal maupun eksternal tanpa membebani tim lapangan dengan proses administratif yang berulang.',
  },
  {
    title: 'RKU dan RKT',
    narrative:
      'Penyusunan Rencana Kerja Usaha (RKU) dan Rencana Kerja Tahunan (RKT) dilakukan berbasis data operasional, target produksi, dan prinsip keberlanjutan jangka panjang. Kami memastikan setiap rencana memiliki keterukuran yang jelas, selaras dengan kebijakan kehutanan yang berlaku, serta dapat dieksekusi secara realistis di lapangan melalui tahapan implementasi yang terstruktur.',
  },
];

const LicensingConsultationPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % permitSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16 md:px-10 md:py-20">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/bjH9DYS6/pexels-zelch-30596256.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(0,0,0,0.78),rgba(0,0,0,0.58),rgba(0,0,0,0.8))]" />

      <section className="mx-auto grid min-h-[78vh] max-w-7xl items-center" aria-label="Narasi perizinan otomatis">
        <div className="relative min-h-[360px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/90">Konsultasi Perizinan</p>

          {permitSlides.map((slide, index) => (
            <article
              key={slide.title}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                activeSlide === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
              }`}
            >
              <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{slide.title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-[1.02rem]">{slide.narrative}</p>
            </article>
          ))}

          <div className="absolute bottom-16 left-0 flex items-center gap-3">
            {permitSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition ${activeSlide === index ? 'w-8 bg-emerald-300' : 'w-2.5 bg-white/45 hover:bg-white/75'}`}
                aria-label={`Tampilkan ${slide.title}`}
                aria-current={activeSlide === index}
              />
            ))}
          </div>

          <Link
            to="/contact"
            className="absolute bottom-0 left-0 inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-emerald-300/70 hover:bg-white/20"
          >
            Konsultasi Detail
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LicensingConsultationPage;
