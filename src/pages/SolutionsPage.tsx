import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const solutions = [
  {
    title: 'Smart Forestry Platform',
    description: 'Sistem pemantauan hutan real-time dengan AI untuk deteksi dini dan pencegahan kerusakan.',
    tags: ['IoT Sensors', 'Satellite'],
  },
  {
    title: 'Blockchain Traceability',
    description: 'Sistem pelacakan transparansi rantai pasok kayu dan produk kehutanan.',
    tags: ['Web3', 'Smart Contract'],
  },
  {
    title: 'Carbon Credit Dashboard',
    description: 'Platform pemantauan dan perdagangan kredit karbon terintegrasi.',
    tags: ['ESG', 'Analytics'],
  },
  {
    title: 'AI Consulting Services',
    description: 'Konsultasi dan implementasi solusi AI untuk transformasi digital perusahaan.',
    tags: ['Machine Learning', 'Computer Vision'],
  },
  {
    title: 'Geospatial Analytics',
    description: 'Analisis spasial dan pemetaan untuk perencanaan hutan berkelanjutan.',
    tags: ['GIS', 'Remote Sensing'],
  },
  {
    title: 'Wildlife Monitoring',
    description: 'Sistem pemantauan satwa liar dengan camera trap dan AI identification.',
    tags: ['Computer Vision', 'Conservation'],
  },
  {
    title: 'Livestock Digital Platform',
    description: 'Platform digitalisasi UMKM peternakan dengan monitoring real-time dan tokenisasi aset.',
    tags: ['IoT', 'Web3 Ready'],
  },
  {
    title: 'Ruang Kuliah Digital',
    description: 'Platform edukasi kehutanan interaktif dengan AI assistant dan sertifikasi digital.',
    tags: ['E-Learning', 'AI Tutor'],
  },
  {
    title: 'Environmental Monitoring',
    description: 'Sistem pemantauan lingkungan berbasis AI dengan geo-tagging dan analytics.',
    tags: ['GIS', 'AI Analytics'],
  },
];

const SolutionsPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % solutions.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/C3BPyXKn/pexels-zelch-30596250.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(130deg,rgba(0,0,0,0.78),rgba(0,0,0,0.6),rgba(0,0,0,0.84))]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solutions"
          title="Solusi Komprehensif"
          description="Platform terintegrasi untuk manajemen hutan dan teknologi berkelanjutan"
        />

        <section className="relative min-h-[64vh]" aria-label="Slider solusi otomatis">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                activeSlide === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
              }`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/90">Ekosistem Montana AI</p>
              <h2 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{solution.title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white md:text-xl">{solution.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-emerald-200/35 bg-emerald-400/15 px-3 py-1 text-xs text-emerald-100 md:text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <div className="absolute bottom-16 left-0 flex items-center gap-3">
            {solutions.map((solution, index) => (
              <button
                key={solution.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition ${activeSlide === index ? 'w-8 bg-emerald-300' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
                aria-label={`Buka slide ${solution.title}`}
                aria-current={activeSlide === index}
              />
            ))}
          </div>

          <Link
            to="/portfolio"
            className="absolute bottom-0 left-0 inline-flex rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/20"
          >
            Lihat Detail Solusi
          </Link>
        </section>
      </div>
    </main>
  );
};

export default SolutionsPage;
