import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

type AboutSlide = {
  label: string;
  title: string;
  description?: string;
  points?: string[];
};

const aboutSlides: AboutSlide[] = [
  {
    label: 'Ekosistem Montana Ai',
    title: 'Visi',
    description:
      'Menjadi perusahaan teknologi yang inovatif, terpercaya, dan berkelanjutan dalam mendukung transformasi digital sektor kehutanan, lingkungan, dan bisnis di Indonesia.',
  },
  {
    label: 'Ekosistem Montana Ai',
    title: 'Misi',
    points: [
      'Mengembangkan solusi teknologi yang aplikatif dan berdampak nyata.',
      'Mendukung efisiensi, transparansi, dan akurasi pengelolaan data.',
      'Memberikan layanan konsultasi dan pengembangan sistem yang profesional.',
      'Mendorong pemanfaatan teknologi digital untuk pembangunan berkelanjutan.',
    ],
  },
];

const AboutCompanyPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % aboutSlides.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/XkDhvgV6/pexels-zelch-30596311.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(130deg,rgba(0,0,0,0.78),rgba(0,0,0,0.62),rgba(0,0,0,0.82))]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Tentang Perusahaan"
          title="Visi dan Misi"
          description="PT Montana Wana Teknologi"
        />

        <section className="relative min-h-[64vh]" aria-label="Slider visi misi">
          {aboutSlides.map((slide, index) => (
            <article
              key={slide.title}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                activeSlide === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
              }`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/90">{slide.label}</p>
              <h2 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{slide.title}</h2>

              {slide.description && <p className="mt-5 max-w-3xl text-base leading-relaxed text-white md:text-xl">{slide.description}</p>}

              {slide.points && (
                <ul className="mt-5 max-w-3xl space-y-3 text-base leading-relaxed text-white md:text-xl">
                  {slide.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <div className="absolute bottom-16 left-0 flex items-center gap-3">
            {aboutSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition ${activeSlide === index ? 'w-8 bg-emerald-300' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
                aria-label={`Buka slide ${slide.title}`}
                aria-current={activeSlide === index}
              />
            ))}
          </div>

          <Link
            to="/about-company/detail"
            className="absolute bottom-0 left-0 inline-flex rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/20"
          >
            Klik Detail
          </Link>
        </section>
      </div>
    </main>
  );
};

export default AboutCompanyPage;
