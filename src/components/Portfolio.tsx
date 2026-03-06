import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const projects = [
  'Smart Forest Compliance Dashboard',
  'Mine Reclamation Progress Intelligence',
  'Precision Crop Health Tracking',
  'Hydrology Risk Mapping Platform',
  'Carbon Footprint Insight Console',
  'Digital Twin of Protected Area',
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="reveal-section py-24 md:py-32">
      <SectionHeader
        eyebrow="Portfolio"
        title="Contoh Proyek Dan Implementasi"
        description="Beberapa inisiatif lintas sektor yang menunjukkan bagaimana data dan visual intelligence mengubah keputusan operasional menjadi lebih cepat dan akurat."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="mb-4 h-40 rounded-xl bg-[linear-gradient(135deg,rgba(16,185,129,0.45),rgba(6,95,70,0.3),rgba(15,23,42,0.3))] transition-transform duration-500 group-hover:scale-105" />
            <h3 className="text-sm font-semibold text-white md:text-base">{project}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in massa ut lorem dignissim fermentum.
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
