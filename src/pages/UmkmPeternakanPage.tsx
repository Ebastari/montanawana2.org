import { useEffect, useMemo, useState } from 'react';

type NarrativeSlide = {
  image: string;
  title: string;
  text: string;
};

const fallbackNarrativeImage = 'https://i.ibb.co/rRT7pMRM/Chat-GPT-Image-6-Mar-2026-16-41-55.png';
const visionImage = 'https://i.ibb.co.com/35RWhKdQ/7.jpg';
const mapsAppLink = 'https://maps.app.goo.gl/LweKzNCtpPqCo8GV6';
const satelliteEmbedUrl = 'https://maps.google.com/maps?q=-7.4177217,108.8729732&t=k&z=15&output=embed';
const visionQuote =
  'Montana Wana Teknologi percaya bahwa masa depan teknologi tidak hanya boleh dimiliki oleh kota-kota besar, tetapi harus tumbuh dari desa, dari masyarakat akar rumput, dan dari mereka yang selama ini bekerja menjaga kehidupan.';

const narrativeSlides: NarrativeSlide[] = [
  {
    image: 'https://i.ibb.co/Qvxktydt/Whats-App-Image-2026-03-06-at-17-02-59.jpg',
    title: 'Menjembatani Teknologi dan Ekonomi Rakyat',
    text:
      'Di tengah percepatan transformasi digital, PT Montana Wana Teknologi hadir sebagai penggerak perubahan sosial untuk menjembatani inovasi teknologi dengan kebutuhan pelaku usaha kecil.',
  },
  {
    image: 'https://i.ibb.co/vvZkFCCt/5.jpg',
    title: 'Visi Ekonomi Digital yang Inklusif',
    text:
      'Perusahaan mengembangkan inisiatif agar UMKM dan komunitas lokal dapat masuk ke ekosistem modern. Teknologi diposisikan sebagai sarana pemberdayaan agar akses pasar, data, dan nilai ekonomi semakin luas.',
  },
  {
    image: 'https://i.ibb.co/Ld1M8FW7/4.jpg',
    title: 'Kolaborasi Akar Rumput Desa Gunung Telu',
    text:
      'Melalui kolaborasi bersama komunitas peternak Desa Gunung Telu, Montana Wana mendukung transformasi usaha tradisional menjadi lebih terhubung dengan infrastruktur digital.',
  },
  {
    image: 'https://i.ibb.co/ccv1MXxt/3.jpg',
    title: 'Model Inovasi RWA dan NFT',
    text:
      'Aset nyata peternakan seperti ternak, produksi pakan, dan ekosistem usaha desa diproyeksikan menjadi Real World Assets (RWA) yang direpresentasikan secara digital melalui NFT untuk membuka peluang pembiayaan baru.',
  },
  {
    image: 'https://i.ibb.co/1GQxD2bp/2.jpg',
    title: 'Blockchain untuk Transparansi dan Kepercayaan',
    text:
      'Blockchain digunakan sebagai alat transparansi, kepercayaan, dan distribusi nilai yang lebih adil. Komunitas peternak memperoleh bukti digital atas aset dan aktivitas ekonomi untuk membuka peluang kemitraan lebih luas.',
  },
  {
    image: 'https://i.ibb.co/VchF3cch/1.jpg',
    title: 'Teknologi Tinggi dari Desa untuk Masa Depan',
    text:
      'Visi PT Montana Wana Teknologi adalah memastikan teknologi tinggi tidak hanya dimiliki kota besar, tetapi menjadi kekuatan baru desa Indonesia. Transformasi digital sejati dimulai dari akar rumput.',
  },
];

const UmkmPeternakanPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [typedVisionQuote, setTypedVisionQuote] = useState('');
  const totalSlides = useMemo(() => narrativeSlides.length, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedVisionQuote(visionQuote.slice(0, index));

      if (index >= visionQuote.length) {
        window.clearInterval(timer);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setActiveSlide(index);
  const showPrev = () => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const showNext = () => setActiveSlide((prev) => (prev + 1) % totalSlides);

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <section
        className="relative mb-8 overflow-hidden"
        aria-label="Kata visioner Montana Wana"
      >
        <img
          src={visionImage}
          alt="Visi sosial Montana Wana Teknologi"
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackNarrativeImage;
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(0,0,0,0.82),rgba(0,0,0,0.58),rgba(0,0,0,0.78))]" />

        <div className="relative z-10 flex min-h-[60svh] items-center p-6 md:min-h-[68svh] md:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/90 md:text-xs">motto</p>
            <blockquote className="mt-4 text-[clamp(1.1rem,2.1vw,2rem)] font-semibold leading-[1.35] text-white md:mt-5">
              “{typedVisionQuote}
              <span className="ml-1 inline-block w-[0.6ch] animate-pulse text-emerald-200" aria-hidden="true">
                {typedVisionQuote.length < visionQuote.length ? '|' : ''}
              </span>
              ”
            </blockquote>
            <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-white/85 md:text-sm">CEO dan Pendiri PT Montana Wana Teknologi</p>
          </div>
        </div>
      </section>

      <section className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl" aria-label="Narasi Visi Sosial Montana Wana">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[320px] md:min-h-[480px]">
            {narrativeSlides.map((slide, index) => (
              <img
                key={slide.title}
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackNarrativeImage;
                }}
                className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                  index === activeSlide ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-105'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />
          </div>

          <div className="relative flex flex-col justify-between p-6 md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Narasi Visi Sosial</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">{narrativeSlides[activeSlide].title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">{narrativeSlides[activeSlide].text}</p>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {narrativeSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition ${index === activeSlide ? 'w-7 bg-emerald-300' : 'w-2.5 bg-white/30 hover:bg-white/50'}`}
                    aria-label={`Tampilkan slide ${index + 1}`}
                    aria-current={index === activeSlide}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrev}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-slate-200 transition hover:border-emerald-300/70 hover:text-emerald-200"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-slate-200 transition hover:border-emerald-300/70 hover:text-emerald-200"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 overflow-hidden rounded-2xl border border-emerald-300/20 bg-slate-950/50 p-4 md:p-6" aria-label="Peta satelit lokasi Gunungtelu">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300">Lokasi Lapangan</p>
            <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">Gunungtelu, Karangpucung (Satelit)</h3>
            <p className="mt-2 text-sm text-slate-300">Tampilan peta satelit untuk melihat konteks wilayah desa dan area sekitar program UMKM peternakan.</p>
          </div>
          <a
            href={mapsAppLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-emerald-300/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-300/10"
          >
            Buka di Google Maps
          </a>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
          <iframe
            src={satelliteEmbedUrl}
            title="Peta Satelit Gunungtelu"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full md:h-[520px]"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />
        </div>
      </section>
    </main>
  );
};

export default UmkmPeternakanPage;
