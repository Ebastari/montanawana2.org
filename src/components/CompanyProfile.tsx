import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const kbliItems = ['02409 - Jasa Penunjang Kehutanan Lainnya', '62012 - Aktivitas Pengembangan Aplikasi E-Commerce', '62019 - Aktivitas Pemrograman Komputer Lainnya', '63122 - Portal Web dan/atau Platform Digital Komersial', '70209 - Aktivitas Konsultasi Manajemen Lainnya'];

const solutionCards = [
  'Smart Forestry Platform',
  'Blockchain Traceability',
  'Carbon Credit Dashboard',
  'AI Consulting Services',
  'Geospatial Analytics',
  'Wildlife Monitoring',
  'Livestock Digital Platform',
  'Ruang Kuliah Digital',
  'Environmental Monitoring',
];

const CompanyProfile = () => {
  return (
    <section id="company-profile" className="reveal-section py-24 md:py-32">
      <SectionHeader
        eyebrow="Company Profile"
        title="PT Montana Wana Teknologi"
        description="Dokumen profil terstruktur untuk memperkenalkan perusahaan, founder, ekosistem digital, layanan, dan arah pengembangan strategis."
      />

      <div className="space-y-6">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-emerald-200">1. Profil Umum Perusahaan</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            PT Montana Wana Teknologi adalah Perseroan Perorangan yang bergerak di bidang teknologi digital, pengembangan aplikasi, konsultasi manajemen, serta jasa penunjang kehutanan. Perusahaan ini didirikan untuk menjawab kebutuhan transformasi digital, khususnya pada sektor kehutanan, lingkungan, dan manajemen berbasis teknologi informasi, dengan pendekatan profesional, adaptif, dan berorientasi solusi.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Dengan mengintegrasikan teknologi aplikasi, sistem informasi, dan platform digital, PT Montana Wana Teknologi berkomitmen mendukung efisiensi operasional, transparansi data, serta pengambilan keputusan yang akurat bagi mitra usaha dan pemangku kepentingan.
          </p>
        </article>

        <article className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-emerald-200">Identitas Perusahaan</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
              <li>Nama Perseroan: PT Montana Wana Teknologi</li>
              <li>Bentuk Usaha: Perseroan Perorangan</li>
              <li>Modal Usaha: Rp1.000.000,00</li>
              <li>
                Alamat Kantor: Jalan Perambaian III Gg. Kestela 1 RT 030 RW 007, Kelurahan Sungai Ulin, Kecamatan Banjarbaru Utara, Kota Banjarbaru, Kalimantan Selatan
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-emerald-200">Bidang Kegiatan Usaha (KBLI)</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
              {kbliItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-emerald-200">Visi</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              “Menjadi perusahaan teknologi yang inovatif, terpercaya, dan berkelanjutan dalam mendukung transformasi digital sektor kehutanan, lingkungan, dan bisnis di Indonesia.”
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-emerald-200">Misi</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
              <li>• Mengembangkan solusi teknologi yang aplikatif dan berdampak nyata</li>
              <li>• Mendukung efisiensi, transparansi, dan akurasi pengelolaan data</li>
              <li>• Memberikan layanan konsultasi dan pengembangan sistem yang profesional</li>
              <li>• Mendorong pemanfaatan teknologi digital untuk pembangunan berkelanjutan</li>
            </ul>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-emerald-200">Data Pendiri / Pemilik Usaha</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
            <li>Nama Lengkap: Agung Laksono</li>
            <li>Tempat, Tanggal Lahir: 30 Agustus 1998</li>
            <li>Alamat: Dusun Gunungtelu, RT 02 RW 02, Karang Pucung, Kabupaten Cilacap, Jawa Tengah</li>
            <li>NIK: 3302233008980003</li>
            <li>NPWP: 61.086.952.1-711.000</li>
            <li>Lihat Dokumen Legalitas</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
            Pendiri menyatakan bahwa seluruh data Perseroan telah diisi dengan benar dan bersedia menaati seluruh ketentuan hukum yang berlaku terkait Perseroan Perorangan serta peraturan perundang-undangan lainnya.
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-emerald-200">Profil Founder</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Agung Laksono adalah seorang inovator di bidang teknologi lingkungan yang menjabat sebagai CEO dan Founder PT Montana Wana Teknologi. Memiliki latar belakang pendidikan dari Institut Pertanian Stiper (Instiper), ia berhasil menggabungkan keahliannya sebagai pengembang aplikasi web dengan pemahaman mendalam tentang data lingkungan.
          </p>
          <ol className="mt-4 space-y-2 text-sm text-slate-300 md:text-base">
            <li>1. Agung Laksono adalah CEO dan Founder PT Montana Wana Teknologi, perusahaan yang berfokus pada pengembangan solusi digital untuk sektor kehutanan, lingkungan, dan manajemen berbasis teknologi informasi.</li>
            <li>2. Berlatar belakang sebagai pengembang aplikasi web dengan spesialisasi pada data lingkungan dan sistem monitoring, Agung Laksono memiliki kompetensi dalam membangun platform digital yang terintegrasi, presisi, dan berbasis analitik.</li>
            <li>3. Salah satu inisiatif strategis yang dipimpinnya adalah pengembangan platform My Montana AI, sebuah sistem manajemen revegetasi dan monitoring lingkungan.</li>
            <li>4. Agung Laksono merupakan lulusan dari Institut Pertanian Stiper (Instiper) Yogyakarta dengan pemahaman kuat terhadap sektor kehutanan dan lingkungan.</li>
            <li>5. Di bawah kepemimpinannya, PT Montana Wana Teknologi diarahkan menjadi perusahaan teknologi yang inovatif, terpercaya, dan berkelanjutan.</li>
          </ol>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-emerald-200">Solusi Komprehensif</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Platform terintegrasi untuk manajemen hutan dan teknologi berkelanjutan: All, Forestry, Peternakan, Edukasi, Lingkungan, Technology, Data & AI.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card, index) => (
              <motion.div
                key={card}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="rounded-xl border border-white/10 bg-slate-900/30 p-4 text-sm text-slate-200"
              >
                {card}
              </motion.div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-emerald-200">Monitoring Lingkungan & Platform Teknologi</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Environmental Monitoring Dashboard v1.0: 1250 Lokasi Terpantau, 94% Indeks Kesehatan, 12 Sensor Aktif, 8 Risiko Terdeteksi.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Montana AI Dashboard v2.0: 1250 Sensor Aktif, 98% Uptime, 2.4 TB Data/hari, 47 AI Predictions.
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-emerald-200">Portfolio Impact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
            <li>Montana AI Pro: Implementasi pemanfaatan AI di lahan bekas tambang di PT Energi Batubara Lestari.</li>
            <li>600 Hektare Terpantau, Rp600.000.000 Penurunan Kerugian Perusahaan.</li>
            <li>UMKM Peternakan Karang Pucung: 100+ Peternak Terintegrasi, 500+ Ternak Terpantau.</li>
            <li>Ruang Kuliah Digital: 10+ Modul Available, 500+ Mahasiswa.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-emerald-200">Strategic Roadmap</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
            <li>01 (0–12 Bulan): Foundation & Product Validation.</li>
            <li>02 (Tahun 1–2): Technology Scaling & AI Integration.</li>
            <li>03 (Tahun 2–3): National Expansion & Ecosystem Development.</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Catatan strategis: Jangan langsung lompat ke crypto sebelum sistem dasar stabil. Legalitas dan regulasi investasi harus dipastikan.
          </p>
        </article>
      </div>
    </section>
  );
};

export default CompanyProfile;
