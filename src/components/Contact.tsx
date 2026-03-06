import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <section id="contact" className="reveal-section py-24 md:py-32">
      <SectionHeader
        eyebrow="Contact"
        title="Terhubung Dengan Tim PT Montana Wana Teknologi"
        description="Hubungi kami untuk konsultasi teknologi lingkungan, kolaborasi riset, atau eksplorasi implementasi di perusahaan Anda."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-lg font-semibold text-emerald-200">Detail Perusahaan</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300 md:text-base">
            <li>Alamat: Lorem ipsum dolor sit amet, Jakarta, Indonesia.</li>
            <li>Email: hello@montanawana.co</li>
            <li>Domain: www.montanawana.co</li>
          </ul>
        </motion.article>

        <motion.form
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Nama</span>
            <input
              type="text"
              placeholder="Lorem Ipsum"
              className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Email</span>
            <input
              type="email"
              placeholder="lorem@ipsum.com"
              className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Pesan</span>
            <textarea
              rows={4}
              placeholder="Lorem ipsum dolor sit amet..."
              className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Kirim Pesan
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
