import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import InfoAccordion from '../components/InfoAccordion';

const kbliItems = [
  '02409 - Jasa Penunjang Kehutanan Lainnya',
  '62012 - Aktivitas Pengembangan Aplikasi E-Commerce',
  '62019 - Aktivitas Pemrograman Komputer Lainnya',
  '63122 - Portal Web dan/atau Platform Digital Komersial',
  '70209 - Aktivitas Konsultasi Manajemen Lainnya',
];

const AboutCompanyDetailPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="About Company"
        title="Profil Perusahaan"
        description="Halaman kedua menu Tentang berisi detail perusahaan PT Montana Wana Teknologi."
      />

      <div className="mb-8">
        <Link
          to="/about-company"
          className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 transition hover:border-emerald-300/70 hover:text-emerald-200"
        >
          Kembali ke Visi Misi
        </Link>
      </div>

      <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.15em] text-emerald-300">Bentuk Usaha</p>
          <p className="mt-2 text-sm font-semibold text-white">Perseroan Perorangan</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.15em] text-emerald-300">Modal Usaha</p>
          <p className="mt-2 text-sm font-semibold text-white">Rp1.000.000,00</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.15em] text-emerald-300">Fokus</p>
          <p className="mt-2 text-sm font-semibold text-white">Kehutanan, Lingkungan, Digital</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.15em] text-emerald-300">Lokasi</p>
          <p className="mt-2 text-sm font-semibold text-white">Banjarbaru, Kalimantan Selatan</p>
        </article>
      </section>

      <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-emerald-200">Profil Umum Perusahaan</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              PT Montana Wana Teknologi adalah Perseroan Perorangan yang bergerak di bidang teknologi digital, pengembangan aplikasi,
              konsultasi manajemen, serta jasa penunjang kehutanan. Perusahaan ini didirikan untuk menjawab kebutuhan transformasi digital,
              khususnya pada sektor kehutanan, lingkungan, dan manajemen berbasis teknologi informasi, dengan pendekatan profesional,
              adaptif, dan berorientasi solusi.
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              Dengan mengintegrasikan teknologi aplikasi, sistem informasi, dan platform digital, PT Montana Wana Teknologi berkomitmen
              mendukung efisiensi operasional, transparansi data, serta pengambilan keputusan yang akurat bagi mitra usaha dan pemangku
              kepentingan.
            </p>
          </article>
        </div>
      </section>

      <section className="mb-8 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-emerald-200">Identitas Perusahaan</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
            <li>Nama Perseroan: PT Montana Wana Teknologi</li>
            <li>Bentuk Usaha: Perseroan Perorangan</li>
            <li>Modal Usaha: Rp1.000.000,00</li>
            <li>
              Alamat Kantor: Jalan Perambaian III Gg. Kestela 1 RT 030 RW 007 Kelurahan Sungai Ulin, Kecamatan Banjarbaru Utara Kota
              Banjarbaru, Kalimantan Selatan
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-emerald-200">Bidang Kegiatan Usaha</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
            {kbliItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-emerald-200">Pernyataan Tanggung Jawab</h3>
        <div className="mt-4 space-y-3">
          <InfoAccordion
            title="Komitmen Kepatuhan"
            content="Pendiri menyatakan bahwa seluruh data Perseroan telah diisi dengan benar dan bersedia menaati seluruh ketentuan hukum yang berlaku terkait Perseroan Perorangan serta peraturan perundang-undangan lainnya."
          />
          <InfoAccordion
            title="Persetujuan Elektronik"
            content="Pernyataan pendirian ini telah disetujui secara elektronik oleh Pemohon."
          />
        </div>
      </section>
    </main>
  );
};

export default AboutCompanyDetailPage;
