import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const technologies = ['AI Monitoring', 'Satellite Mapping', 'IoT Sensors', 'Environmental Data Platform'];

const Technology = () => {
  return (
    <section id="technology" className="reveal-section py-24 md:py-32">
      <SectionHeader
        eyebrow="Technology"
        title="Mesin Teknologi Untuk Eksplorasi Lingkungan Presisi"
        description="Ekosistem teknologi kami dirancang modular, realtime, dan dapat berkembang lintas sektor dari kehutanan hingga infrastruktur energi." 
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <GlassCard className="relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.35),_transparent_55%)]" />
              <p className="relative text-lg font-semibold text-white">{tech}</p>
              <p className="relative mt-3 text-sm text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl turpis. Duis non urna sed turpis consequat accumsan.
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
