import SectionHeader from '../components/SectionHeader';

const EnvironmentalMonitoringPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="Environmental Monitoring"
        title="Environmental Intelligence System"
        description="Produk andalan PT Montana Wana Teknologi untuk pemantauan lingkungan berbasis AI"
      />

      <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-emerald-200">Environmental Monitoring Dashboard v1.0</h3>
        <ul className="mt-3 grid gap-3 text-sm text-slate-300 md:grid-cols-2 md:text-base">
          <li>1250 Lokasi Terpantau</li>
          <li>94 % Indeks Kesehatan</li>
          <li>12 Sensor Aktif</li>
          <li>8 Risiko Terdeteksi</li>
        </ul>
      </section>

      <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-emerald-200">GeoTagging System</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
          <li>• Foto dengan koordinat otomatis</li>
          <li>• Timestamp terverifikasi</li>
          <li>• Watermark lokasi</li>
          <li>• Export CSV/Excel/KMZ</li>
        </ul>
      </section>

      <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-emerald-200">Environmental Health</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
          <li>• Kualitas udara</li>
          <li>• Kelembaban tanah</li>
          <li>• Indeks vegetasi (NDVI)</li>
          <li>• Data curah hujan</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-emerald-200">AI Environmental Analytics</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
          <li>• Deteksi perubahan tutupan lahan</li>
          <li>• Prediksi degradasi</li>
          <li>• Analisis risiko longsor</li>
          <li>• Monitoring reklamasi tambang</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-emerald-200">Platform Teknologi</h3>
        <p className="mt-3 text-sm text-slate-300 md:text-base">
          AI-driven monitoring system dengan dashboard real-time: Montana AI Dashboard v2.0, 1250 Sensor Aktif, 98 % Uptime, 2.4 TB Data/hari, 47 AI Predictions.
        </p>
      </section>
    </main>
  );
};

export default EnvironmentalMonitoringPage;
