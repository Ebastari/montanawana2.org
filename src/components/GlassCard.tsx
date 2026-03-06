import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.article>
  );
};

export default GlassCard;
