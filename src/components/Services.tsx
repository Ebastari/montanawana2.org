import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const serviceItems = [
  {
    title: 'Forestry Licensing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur sem vitae orci egestas, at luctus purus eleifend.',
  },
  {
    title: 'Mine Reclamation',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, urna vel sodales vestibulum, lectus lacus interdum dui.',
  },
  {
    title: 'Agriculture Monitoring',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt neque sed urna fermentum, non placerat sapien pulvinar.',
  },
  {
    title: 'Environmental Data Analytics',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo purus ac augue malesuada, quis congue nisl faucibus.',
  },
];

const Services = () => {
  return (
    <section id="services" className="reveal-section relative py-24 md:py-32">
      <SectionHeader
        eyebrow="Services"
        title="Solusi Terintegrasi Untuk Lanskap Industri Hijau"
        description="Kami menggabungkan engineering, science, dan insight berbasis data untuk membantu perusahaan bergerak cepat sekaligus patuh regulasi lingkungan."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {serviceItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <GlassCard className="h-full">
              <h3 className="mb-3 text-xl font-medium text-emerald-200">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
