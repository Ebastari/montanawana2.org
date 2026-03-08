import { Link } from 'react-router-dom';

const featureItems = [
  'Kamera observasi tanaman (Montana Camera)',
  'Analisis kesehatan tanaman berbasis warna (NDVI-like analysis)',
  'Pemetaan lokasi pengamatan',
  'Pencatatan metadata observasi',
  'Dashboard visualisasi data vegetasi',
];

const architectureItems = [
  'modul pengambilan citra',
  'modul analisis vegetasi',
  'modul penyimpanan metadata',
  'modul visualisasi peta',
];

const publicationPdfFileId = '1Kq72Kr46YYishzUpDbZjrMN9F-q2lk1t';
const publicationPdfDownloadUrl = `https://drive.google.com/uc?export=download&id=${publicationPdfFileId}`;
const publicationPdfPreviewUrl = `https://drive.google.com/file/d/${publicationPdfFileId}/preview`;

const TechnologyPublicationPage = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <article className="overflow-hidden rounded-3xl border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.8),rgba(3,8,7,0.92))] shadow-[0_20px_80px_rgba(2,6,23,0.45)]">
        <header className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.16),transparent_58%)] px-6 py-10 md:px-12 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Publikasi Inovasi Teknologi</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Publikasi Teknologi Montana AI untuk Monitoring Vegetasi dan Reklamasi Lahan
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5">Penulis: Agung Laksono</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5">Tanggal Publikasi: 8 Maret 2026</span>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
            Tulisan ini disusun sebagai artikel ilmiah populer yang menjelaskan bagaimana Montana AI dirancang, diuji di lapangan, dan
            digunakan untuk mendukung monitoring vegetasi secara lebih terukur.
          </p>
        </header>

        <div className="space-y-8 px-6 py-8 md:px-12 md:py-12">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-emerald-200">1. Pendahuluan</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              Pengembangan Montana AI berangkat dari kebutuhan yang sangat praktis di lapangan: bagaimana memastikan proses monitoring
              vegetasi dan reklamasi lahan dapat dilakukan secara konsisten, tercatat rapi, dan mudah ditelusuri kembali. Selama ini,
              evaluasi pertumbuhan tanaman sering bergantung pada catatan manual dan dokumentasi yang tidak seragam. Melalui pendekatan
              berbasis citra tanaman, Montana AI membantu tim lapangan membaca kondisi vegetasi dengan indikator yang lebih objektif.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-emerald-200">2. Deskripsi Sistem</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              Montana AI merupakan platform yang menghubungkan tiga proses utama dalam satu alur kerja: pengambilan citra tanaman,
              analisis warna vegetasi, dan pemetaan titik observasi berdasarkan koordinat geografis. Dengan alur ini, setiap data tidak
              hanya berupa angka, tetapi juga memiliki konteks lokasi dan bukti visual yang saling menguatkan.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-emerald-200">3. Fitur Utama Sistem</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-200 md:text-base">
              {featureItems.map((item) => (
                <li key={item} className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-emerald-200">4. Arsitektur Sistem</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              Secara naratif, arsitektur Montana AI disusun dalam modul-modul yang saling melengkapi dari hulu ke hilir. Modul
              pengambilan citra merekam kondisi tanaman di titik pengamatan. Data ini lalu diproses pada modul analisis vegetasi untuk
              mengekstrak indikator warna. Selanjutnya, modul penyimpanan metadata menyimpan informasi teknis observasi agar jejak data
              tetap utuh. Hasil akhirnya ditampilkan melalui modul visualisasi peta sehingga pembacaan kondisi lapangan menjadi lebih
              mudah dipahami.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {architectureItems.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-slate-200 md:text-base">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-emerald-200">5. Implementasi Teknologi</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              Dari sisi implementasi, Montana AI dikembangkan menggunakan TypeScript dan React untuk memastikan antarmuka tetap responsif
              dan kode lebih terstruktur. Di sisi analisis, pemrosesan citra digital digunakan untuk membaca karakteristik visual
              tanaman, lalu dipadukan dengan peta interaktif agar posisi observasi dapat dilihat secara langsung. Kombinasi ini membuat
              sistem cukup kuat untuk kebutuhan operasional, sekaligus fleksibel untuk pengembangan tahap berikutnya.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-emerald-200">6. Dokumentasi Antarmuka Sistem</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              Pada halaman ini ditampilkan contoh antarmuka Montana AI, mulai dari kamera tanaman untuk akuisisi data lapangan, peta
              observasi untuk validasi titik pengamatan, hingga dashboard analisis vegetasi untuk melihat ringkasan kondisi tanaman.
              Dokumentasi ini dimaksudkan sebagai gambaran implementasi awal yang mudah dipahami oleh tim teknis maupun nonteknis.
            </p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/45 p-4 md:p-6">
              <figure className="rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.75),rgba(3,8,7,0.92))] p-3 md:p-5">
                <img
                  src="https://i.ibb.co.com/HLFy3K4J/Chat-GPT-Image-8-Mar-2026-17-41-42.png"
                  alt="Dokumentasi antarmuka Montana Camera AI untuk monitoring vegetasi dan reklamasi lahan"
                  loading="lazy"
                  className="mx-auto h-[74vh] max-h-[980px] min-h-[480px] w-full rounded-lg object-contain"
                />
              </figure>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.32fr_0.68fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-emerald-300">Publikasi Teknologi</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-white md:text-[2rem]">
                    Publikasi Teknologi Montana AI untuk Monitoring Vegetasi dan Reklamasi Lahan
                  </h3>
                  <p className="mt-3 border-b border-white/10 pb-3 text-base text-slate-200">
                    <span className="text-emerald-300">Agung Laksono</span>
                    <span className="text-slate-400"> - Penulis Utama</span>
                  </p>

                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                    <table className="w-full text-left text-[15px] text-slate-200">
                      <thead className="bg-slate-800/70 text-[11px] uppercase tracking-[0.11em] text-emerald-300">
                        <tr>
                          <th className="px-3 py-2 font-medium">Metadata</th>
                          <th className="px-3 py-2 font-medium">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10 bg-slate-900/45">
                        <tr>
                          <td className="px-3 py-2 text-slate-300">Nama Penulis</td>
                          <td className="px-3 py-2 text-white">Agung Laksono</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-slate-300">Tanggal Publikasi</td>
                          <td className="px-3 py-2 text-white">8 Maret 2026</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-slate-300">Jenis Dokumen</td>
                          <td className="px-3 py-2 text-white">Artikel ilmiah populer teknologi</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-slate-300">Status File</td>
                          <td className="px-3 py-2">
                            <span className="inline-flex rounded bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                              Tersedia
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <aside className="rounded-xl border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(2,6,23,0.7),rgba(3,8,7,0.86))] p-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-emerald-300">Akses PDF</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">Jika diperlukan, file dapat diunduh atau direview pada tab baru.</p>
                  <div className="mt-3 grid gap-2">
                    <a
                      href={publicationPdfDownloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-emerald-300/45 bg-emerald-300/15 px-3 py-2 text-xs font-semibold text-emerald-100 transition hover:bg-emerald-300/25"
                    >
                      PDF Download
                    </a>
                    <a
                      href={`https://drive.google.com/file/d/${publicationPdfFileId}/view`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-white/35 hover:bg-white/10"
                    >
                      PDF Review
                    </a>
                  </div>
                </aside>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
              <div className="border-b border-white/10 bg-slate-900/55 px-4 py-3 md:px-5">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300">PDF Review</p>
                <h4 className="mt-1 text-lg font-semibold text-white">Pratinjau Dokumen Publikasi</h4>
              </div>
              <iframe
                title="Review PDF Publikasi Montana AI"
                src={publicationPdfPreviewUrl}
                className="h-[620px] w-full"
                allow="autoplay"
              />
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <figure className="rounded-xl border border-white/10 bg-slate-900/45 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300">Contoh Antarmuka</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Kamera Tanaman</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">Antarmuka pengambilan citra dengan parameter observasi lapangan.</p>
              </figure>
              <figure className="rounded-xl border border-white/10 bg-slate-900/45 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300">Contoh Antarmuka</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Peta Observasi</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">Visualisasi titik pengamatan berbasis koordinat geografis.</p>
              </figure>
              <figure className="rounded-xl border border-white/10 bg-slate-900/45 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300">Contoh Antarmuka</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Dashboard Vegetasi</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">Ringkasan indikator kesehatan tanaman untuk monitoring berkala.</p>
              </figure>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-emerald-200">7. Tujuan Pengembangan</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              Tujuan utama pengembangan Montana AI adalah meningkatkan transparansi, akurasi, dan akuntabilitas dalam kegiatan monitoring
              vegetasi, khususnya pada pengelolaan lingkungan dan reklamasi lahan. Ketika data lapangan tercatat secara digital dan
              terhubung dengan lokasi observasi, proses evaluasi menjadi lebih sistematis serta lebih mudah dipertanggungjawabkan.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-emerald-200">8. Penutup</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              Publikasi ini disusun sebagai dokumentasi awal pengembangan teknologi Montana AI sekaligus bukti publikasi inovasi sistem
              sebelum proses pengajuan perlindungan kekayaan intelektual. Ke depan, dokumen ini diharapkan menjadi dasar komunikasi
              ilmiah yang lebih terbuka bagi para pihak yang terlibat dalam penguatan teknologi monitoring vegetasi di Indonesia.
            </p>
          </section>
        </div>
      </article>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          to="/environmental-monitoring"
          className="inline-flex rounded-full border border-emerald-300/35 bg-emerald-300/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200 transition hover:border-emerald-200 hover:bg-emerald-300/25"
        >
          Lihat Solusi Environmental Monitoring
        </Link>
        <Link
          to="/portfolio"
          className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 transition hover:border-white/35 hover:text-white"
        >
          Jelajahi Portofolio
        </Link>
      </div>
    </main>
  );
};

export default TechnologyPublicationPage;
