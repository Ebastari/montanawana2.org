const fallbackImage = 'https://i.ibb.co/rRT7pMRM/Chat-GPT-Image-6-Mar-2026-16-41-55.png';

const serviceCards = [
  {
    title: 'Konsultasi Kehutanan',
    description:
      'Layanan konsultasi profesional terkait pengelolaan hutan, perizinan lingkungan, dan strategi keberlanjutan.',
    image: 'https://i.ibb.co/Cp4HYN99/pexels-readymade-3850588.jpg',
    link: 'https://konsultasi.montanawana.org',
  },
  {
    title: 'Reklamasi dan Rehabilitasi Lahan',
    description:
      'Program pemulihan lahan pascatambang dan kawasan terdegradasi untuk mengembalikan fungsi ekosistem.',
    image: 'https://i.ibb.co/bjXbVjMp/pexels-rachel-claire-4846396.jpg',
    link: 'https://reklamasi.montanawana.org',
  },
  {
    title: 'UMKM dan Ekonomi Lokal',
    description:
      'Mendukung pengembangan usaha masyarakat dan ekonomi lokal berbasis sumber daya alam berkelanjutan.',
    image: 'https://i.ibb.co.com/GvV3JknN/pexels-s-n-b-m-827240-1773181.jpg',
    link: 'https://umkm.montanawana.org',
  },
  {
    title: 'Montana AI',
    description:
      'Platform kecerdasan buatan untuk analisis lingkungan, pengolahan data geospasial, dan monitoring vegetasi.',
    image: 'https://i.ibb.co/fdWk4sPB/pexels-pixabay-41949.jpg',
    link: 'https://ai.montanawana.org',
  },
  {
    title: 'Montana Wana',
    description:
      'Ekosistem teknologi dan layanan lingkungan yang mengintegrasikan konsultasi, reklamasi, UMKM, dan kecerdasan buatan.',
    image: 'https://i.ibb.co/rRT7pMRM/Chat-GPT-Image-6-Mar-2026-16-41-55.png',
    link: 'https://montanawana.org',
  },
];

const MontanaWanaServices = () => {
  return (
    <section id="montana-services" className="relative mt-20" aria-labelledby="montana-services-heading">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-emerald-300/80">Montana Wana Ecosystem</p>
        <h2 id="montana-services-heading" className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Solusi Terhubung untuk Lingkungan dan Teknologi
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
          Jelajahi layanan utama Montana Wana melalui kartu interaktif. Setiap layanan membuka halaman khusus di tab baru untuk
          pengalaman eksplorasi yang lebih fokus.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map((service) => (
          <a
            key={service.title}
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 shadow-[0_20px_45px_-24px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/60"
            aria-label={`Buka layanan ${service.title}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  // Prevent broken cards when external image hosts reject hotlinking.
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackImage;
                }}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
            </div>

            <div className="relative p-5">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{service.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MontanaWanaServices;