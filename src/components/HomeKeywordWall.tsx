const homeKeywords = [
  'Montana Wana Teknologi',
  'Montana AI',
  'Artificial Intelligence',
  'Environmental Intelligence',
  'Sustainability',
  'Konsultasi Kehutanan',
  'Reklamasi Lahan',
  'Rehabilitasi Ekosistem',
  'UMKM Digital',
  'Ekonomi Lokal',
  'Smart Forestry',
  'Geospatial Analytics',
  'Remote Sensing',
  'Monitoring Vegetasi',
  'IoT Sensor',
  'Climate Risk',
  'Carbon Monitoring',
  'Biodiversity',
  'ESG Reporting',
  'Data Geospasial',
  'Machine Learning',
  'Deep Learning',
  'Predictive Model',
  'Dashboard Real-Time',
  'Digital Transformation',
  'Smart Farming',
  'Hydroponic',
  'Pertanian Presisi',
  'Pemetaan Lahan',
  'Peta Interaktif',
  'GIS Platform',
  'Drone Survey',
  'Satellite Imagery',
  'Land Restoration',
  'Mine Closure',
  'Mine Reclamation',
  'Environmental Monitoring',
  'Regulatory Compliance',
  'Perizinan Lingkungan',
  'Strategi Keberlanjutan',
  'Audit Lingkungan',
  'Penilaian Risiko',
  'Risk Mitigation',
  'Supply Chain Hijau',
  'Circular Economy',
  'Nature-Based Solutions',
  'Forest Governance',
  'Conservation Tech',
  'Data Science',
  'Automation',
  'Cloud Platform',
  'Digital Ecosystem',
  'Smart Village',
  'Desa Gunung Telu',
  'Peternakan Digital',
  'Livestock Platform',
  'Data Populasi Ternak',
  'Pemantauan Kesehatan',
  'Tracking Pakan',
  'Geo-Tagging',
  'RWA',
  'Web3',
  'Blockchain',
  'NFT',
  'Fractional Ownership',
  'Smart Contract',
  'Transparansi Data',
  'Akses Pembiayaan',
  'Investasi Terverifikasi',
  'Inovasi Pedesaan',
  'Pemberdayaan Masyarakat',
  'Akar Rumput',
  'Keadilan Ekonomi',
  'Inklusi Digital',
  'Marketplace Lokal',
  'Ekspor Produk Desa',
  'Platform Kolaborasi',
  'Open Data',
  'Tech for Impact',
  'Green Technology',
  'Future of Forestry',
  'Sustainable Mining',
  'Low Carbon Strategy',
  'Carbon Credit',
  'Environmental KPI',
  'Operational Excellence',
  'AI Consulting',
  'AI for Nature',
  'AI for Communities',
  'Decision Intelligence',
  'Model Validasi',
  'Data Governance',
  'Digital Public Value',
  'Social Innovation',
  'Sistem Terintegrasi',
  'Platform Terbuka',
  'Knowledge Hub',
  'Riset dan Pengembangan',
  'Akademisi',
  'Regulator',
  'Peternak',
  'Investor',
  'Pembeli',
  'Pemulihan Lahan',
  'Keamanan Pangan',
  'Ketahanan Desa',
  'Monitoring Air',
  'Kualitas Tanah',
  'Early Warning',
  'Impact Measurement',
  'Digital Twin',
  'Platform Nasional',
  'Satu Data Lingkungan',
  'Blue-Green Infrastructure',
  'Sustainable Future',
  'Indonesia Emas 2045',
  'Montanawana.org',
  'Konsultasi.montanawana.org',
  'Reklamasi.montanawana.org',
  'Umkm.montanawana.org',
  'Ai.montanawana.org',
];

const rows = [homeKeywords.slice(0, Math.ceil(homeKeywords.length / 2)), homeKeywords.slice(Math.ceil(homeKeywords.length / 2))];

const HomeKeywordWall = () => {
  return (
    <section id="ecosystem-preview" className="keyword-open-section relative mb-20 overflow-hidden py-8 md:py-14">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_20%,rgba(30,64,175,0.24),transparent_38%),radial-gradient(circle_at_48%_48%,rgba(16,185,129,0.18),transparent_46%),linear-gradient(180deg,#02070d,#03100f)]" />

      <div className="relative">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/90">Montana Ecosystem Atlas</p>

        <div className="mt-6 flex justify-center">
          <div className="globe-orb" aria-hidden="true">
            <div className="globe-earth-map" />
            <div className="globe-cloud-map" />
            <div className="globe-shade" />
            <div className="globe-highlight" />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-slate-200/90 md:text-base">
          Jaringan solusi Montana Wana menghubungkan kehutanan, reklamasi, UMKM, dan AI dalam satu ekosistem berkelanjutan.
        </p>

        <div className="mt-8 space-y-3 pb-2">
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`keyword-lane ${rowIndex % 2 === 0 ? 'keyword-lane-left' : 'keyword-lane-right'} ${rowIndex % 2 === 1 ? 'pl-4 md:pl-8' : ''}`}
              style={{ animationDuration: `${56 + rowIndex * 4}s` }}
            >
              {[0, 1].map((loop) => (
                <div key={`loop-${rowIndex}-${loop}`} className="keyword-lane-group" aria-hidden={loop === 1}>
                  {row.map((word) => (
                    <span
                      key={`${word}-${loop}`}
                      className="inline-flex rounded-md border border-white/15 bg-slate-900/55 px-2 py-1.5 text-[10px] font-medium tracking-[0.03em] text-slate-100 shadow-[0_8px_18px_-12px_rgba(0,0,0,0.8)] md:text-[10px]"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeKeywordWall;