import SectionHeader from '../components/SectionHeader';

const ContactPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="Contact"
        title="Mari Berkolaborasi"
        description="Siap bersama-sama membangun masa depan teknologi berkelanjutan"
      />

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-emerald-200">Hubungi Kami</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300 md:text-base">
            <li>Alamat: Jl. Perambaian III Gg. Kestela 1, Banjarmasin</li>
            <li>Email: Agunglaksono@montanawana.org</li>
            <li>Phone: +62 811 2222 0044</li>
          </ul>
        </article>

        <form className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <input className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white" placeholder="Nama" />
          <input className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white" placeholder="Perusahaan" />
          <input className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white" placeholder="Email" />
          <select className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white">
            <option>Pilih layanan...</option>
            <option>Smart Forestry Platform</option>
            <option>Livestock Digital Platform</option>
            <option>Ruang Kuliah Digital</option>
            <option>Environmental Monitoring</option>
            <option>Blockchain Traceability</option>
            <option>AI Consulting</option>
            <option>Geospatial Analytics</option>
            <option>Lainnya</option>
          </select>
          <textarea rows={4} className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white" placeholder="Pesan" />
          <button type="submit" className="rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950">Kirim Pesan</button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
