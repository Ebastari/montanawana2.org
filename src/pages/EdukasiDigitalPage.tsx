import SectionHeader from '../components/SectionHeader';
import InfoAccordion from '../components/InfoAccordion';

const EdukasiDigitalPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="Open Digital Forestry Campus"
        title="Ruang Kuliah Digital"
        description="Platform kuliah online berbasis semester (1–8) untuk Kehutanan, Lingkungan, dan AI"
      />

      <div className="space-y-3">
        <InfoAccordion
          title="Sistem Semester 1-8"
          content={[
            '• Semester 1-2: Dasar Kehutanan & Ekologi',
            '• Semester 3-4: Silvikultur & GIS',
            '• Semester 5-6: Monitoring & AI Kehutanan',
            '• Semester 7-8: Proyek Riset & Capstone',
          ]}
        />
        <InfoAccordion
          title="Modul Interaktif"
          content={[
            '• Silvikultur & Manajemen Tegakan',
            '• Inventarisasi Hutan Digital',
            '• GIS & Remote Sensing',
            '• AMDAL & Sustainability',
            'Video Lecture',
            'Simulasi',
            'Auto Quiz',
          ]}
        />
        <InfoAccordion
          title="Field Practice System"
          content={['• Upload foto geo-tagging', '• Input DBH & tinggi pohon', '• Perhitungan volume otomatis', '• Identifikasi spesies berbasis AI']}
        />
        <InfoAccordion
          title="AI Forestry Assistant"
          content={['• Analisis data inventarisasi', '• Prediksi pertumbuhan tegakan', '• Simulasi risiko kebakaran', '• Identifikasi penyakit daun']}
        />
        <InfoAccordion
          title="Academic Progress Tracking"
          content={['• Tracking SKS & semester', '• Nilai & evaluasi otomatis', '• Dashboard progres belajar', '• Rekam jejak pembelajaran']}
        />
        <InfoAccordion
          title="Sertifikasi Digital"
          content={['• QR Code verification', '• Transkrip digital', '• Dapat dibagikan online', '• Rekam jejak transparan']}
        />
        <InfoAccordion
          title="Capstone Project"
          content={['• Proposal & review evaluator', '• Publikasi proyek digital', '• Integrasi data GIS', '• Portfolio profesional mahasiswa']}
        />
      </div>
    </main>
  );
};

export default EdukasiDigitalPage;
