import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Founder = () => {
  return (
    <section id="founder" className="reveal-section py-24 md:py-32">
      <SectionHeader
        eyebrow="Founder"
        title="Kepemimpinan Dengan Perspektif Teknologi Berkelanjutan"
        description="PT Montana Wana Teknologi dipimpin oleh tim lintas disiplin yang menggabungkan riset lingkungan, data engineering, dan strategi bisnis." 
      />

      <motion.article
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-[280px_1fr]"
      >
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
          alt="Founder PT Montana Wana Teknologi"
          className="h-80 w-full rounded-2xl object-cover"
          loading="lazy"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-emerald-200">Aditya Montana, Founder & CEO</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate, nisl sit amet varius pulvinar, elit erat imperdiet eros, non fermentum arcu elit id sem. Donec feugiat ex in libero ultrices, at efficitur mauris tincidunt.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus sem sed ante interdum, at varius tortor ultricies. Curabitur tincidunt magna sed nulla iaculis vulputate.
          </p>
        </div>
      </motion.article>
    </section>
  );
};

export default Founder;
