import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';

type RoadmapPhase = {
  id: string;
  title: string;
  period: string;
  startDate: string;
  targetDate: string;
  highlights: string[];
};

type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isDone: boolean;
};

const phases: RoadmapPhase[] = [
  {
    id: '01',
    title: 'Foundation & Product Validation',
    period: '0-12 Bulan',
    startDate: '2026-04-01T00:00:00+07:00',
    targetDate: '2027-03-31T23:59:59+07:00',
    highlights: [
      'Pengembangan sistem monitoring berbasis web',
      'Digitalisasi operasional UMKM peternakan',
      'Peluncuran platform edukasi versi beta',
      'Validasi model bisnis dan user testing'
    ]
  },
  {
    id: '02',
    title: 'Technology Scaling & AI Integration',
    period: 'Tahun 1-2',
    startDate: '2027-04-01T00:00:00+07:00',
    targetDate: '2028-03-31T23:59:59+07:00',
    highlights: [
      'Integrasi AI pada monitoring dan edukasi',
      'Pengembangan dashboard analytics',
      'Sistem sertifikasi digital terverifikasi',
      'Ekspansi pengguna skala regional'
    ]
  },
  {
    id: '03',
    title: 'National Expansion & Ecosystem Development',
    period: 'Tahun 2-3',
    startDate: '2028-04-01T00:00:00+07:00',
    targetDate: '2029-03-31T23:59:59+07:00',
    highlights: [
      'Ekspansi nasional',
      'Integrasi sistem investasi digital compliant',
      'Pengembangan teknologi berbasis smart automation',
      'Kolaborasi institusi dan industri'
    ]
  }
];

const getCountdown = (targetDate: string): CountdownValue => {
  const distance = new Date(targetDate).getTime() - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isDone: true };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    isDone: false
  };
};

const formatCountdown = (countdown: CountdownValue) => {
  if (countdown.isDone) {
    return 'Target fase sudah tercapai';
  }

  return `${countdown.days} hari ${String(countdown.hours).padStart(2, '0')} jam ${String(
    countdown.minutes
  ).padStart(2, '0')} menit ${String(countdown.seconds).padStart(2, '0')} detik`;
};

const getPhaseCompletion = (startDate: string, targetDate: string) => {
  const now = Date.now();
  const start = new Date(startDate).getTime();
  const target = new Date(targetDate).getTime();

  if (now <= start) {
    return 0;
  }

  if (now >= target) {
    return 100;
  }

  return Math.round(((now - start) / (target - start)) * 100);
};

const RoadmapPage = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTick((value) => value + 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const countdownMap = useMemo(() => {
    const map = new Map<string, CountdownValue>();
    phases.forEach((phase) => {
      map.set(phase.id, getCountdown(phase.targetDate));
    });
    return map;
  }, [tick]);

  const nextPhase = useMemo(() => {
    return phases.find((phase) => {
      const countdown = countdownMap.get(phase.id);
      return countdown && !countdown.isDone;
    });
  }, [countdownMap]);

  const nextPhaseCountdown = nextPhase ? countdownMap.get(nextPhase.id) : undefined;

  const completionMap = useMemo(() => {
    const map = new Map<string, number>();
    phases.forEach((phase) => {
      map.set(phase.id, getPhaseCompletion(phase.startDate, phase.targetDate));
    });
    return map;
  }, [tick]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="Roadmap"
        title="Peta Jalan Eksekusi"
        description="Roadmap ditampilkan sebagai jalur progres beranimasi agar langkah strategi lebih mudah dipantau dari fase fondasi hingga ekspansi nasional."
      />

      <section className="mb-10 rounded-2xl border border-emerald-300/20 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-sky-400/10 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-emerald-100">Countdown Target Terdekat</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cyan-200/90">
              Timeline Final Bisnis 2026-2029
            </p>
            <p className="mt-2 text-sm text-slate-200 md:text-base">
              {nextPhase
                ? `${nextPhase.id} - ${nextPhase.title}`
                : 'Semua target roadmap sudah tercapai.'}
            </p>
          </div>
          <p className="text-lg font-semibold text-cyan-200 md:text-2xl">
            {nextPhaseCountdown ? formatCountdown(nextPhaseCountdown) : 'Roadmap complete'}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <div className="pointer-events-none mb-8 md:hidden">
          <div className="relative h-24 rounded-2xl border border-white/10 bg-slate-950/50 px-4">
            <div className="absolute left-4 right-4 top-12 h-1 rounded-full bg-white/15" />
            <motion.div
              className="absolute top-[2.15rem] h-5 w-5 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.8)]"
              animate={{ left: ['1rem', 'calc(100% - 1rem)', '1rem'] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            {phases.map((phase, index) => {
              const progress = completionMap.get(phase.id) ?? 0;
              const left =
                phases.length > 1
                  ? `calc(1rem + ((100% - 2rem) * ${index / (phases.length - 1)}))`
                  : '50%';

              return (
                <div key={`${phase.id}-mobile-track`} className="absolute top-[2.05rem]" style={{ left }}>
                  <div className="-translate-x-1/2">
                    <div className="h-4 w-4 rounded-full border border-cyan-200/70 bg-slate-900/90" />
                    <p className="mt-3 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-100/90">
                      {phase.id} · {progress}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-8 top-8 hidden h-[calc(100%-4rem)] md:block">
          <div className="absolute left-1/2 h-full w-4 -translate-x-1/2 rounded-full bg-slate-900/70 shadow-inner shadow-black/30" />
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-white/10" />
          <motion.div
            className="absolute left-1/2 h-16 w-16 -translate-x-1/2 rounded-full border border-cyan-300/40 bg-cyan-300/15 blur-xl"
            animate={{ y: ['0%', '90%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.8)]"
            animate={{ y: ['0%', '92%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => {
            const countdown = countdownMap.get(phase.id);
            const completion = completionMap.get(phase.id) ?? 0;
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={phase.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative grid gap-4 md:grid-cols-2"
              >
                <div className={`${isEven ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
                      Fase {phase.id} · {phase.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">{phase.title}</h3>
                    <p className="mt-2 text-sm text-cyan-100/90">
                      Target: {new Date(phase.targetDate).toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                    <p className="mt-2 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm font-medium text-emerald-100">
                      {countdown ? formatCountdown(countdown) : '-'}
                    </p>
                    <div className="mt-3 rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-cyan-100/85">
                        <span>Progress Fase</span>
                        <span>{completion}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-900/70">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300"
                          initial={{ width: 0 }}
                          animate={{ width: `${completion}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-200 md:text-base">
                      {phase.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-emerald-200">Catatan Strategis</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
            <li>1. Validasi produk harus tuntas sebelum masuk fase scaling penuh.</li>
            <li>2. Legalitas dan compliance jadi prasyarat ekspansi investasi digital.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-emerald-200">Keunggulan Kompetitif</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
            <li>1. AI + environmental monitoring menjadi diferensiasi utama ekosistem.</li>
            <li>2. Pendekatan bertahap menjaga fokus pada produk yang nyata dan terpakai.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default RoadmapPage;
