import SectionHeader from './SectionHeader';

const faqItems = [
  {
    q: 'Siapa Agung Laksono?',
    a: 'Agung Laksono adalah CEO dan Founder PT Montana Wana Teknologi, inovator di bidang teknologi lingkungan dengan fokus pengembangan platform monitoring berbasis AI.',
  },
  {
    q: 'Apa itu PT Montana Wana Teknologi?',
    a: 'PT Montana Wana Teknologi adalah Perseroan Perorangan yang bergerak di bidang teknologi digital, pengembangan aplikasi, konsultasi manajemen, serta jasa penunjang kehutanan.',
  },
  {
    q: 'Apa itu Ekosistem Montana?',
    a: 'Ekosistem Montana adalah jaringan platform digital yang mencakup montanawana.org, konsultasi, reklamasi, UMKM, dan AI untuk mendukung transformasi digital berkelanjutan.',
  },
  {
    q: 'Apa fitur utama platform Montana?',
    a: 'Fitur utama meliputi Smart Forestry Platform, Environmental Monitoring, Geospatial Analytics, AI Consulting Services, Livestock Digital Platform, dan Ruang Kuliah Digital.',
  },
  {
    q: 'Bagaimana cara menghubungi PT Montana Wana Teknologi?',
    a: 'Anda dapat menghubungi melalui email agunglaksono@montanawana.org, telepon +62 811 2222 0044, atau kantor di Banjarbaru, Kalimantan Selatan.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="reveal-section py-24 md:py-32">
      <SectionHeader
        eyebrow="FAQ"
        title="Pertanyaan Yang Sering Diajukan"
        description="Informasi penting tentang Agung Laksono, PT Montana Wana Teknologi, Ekosistem Montana, dan fitur-fitur platform kami."
      />

      <div className="space-y-4">
        {faqItems.map((item) => (
          <details key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <summary className="cursor-pointer text-base font-semibold text-white">{item.q}</summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
