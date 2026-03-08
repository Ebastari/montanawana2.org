import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState, type TouchEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

type RouteSeo = {
  title: string;
  description: string;
  schema: object;
  keywords?: string;
  path?: string;
};

const baseUrl = 'https://montanawana.org';
const logoUrl = `${baseUrl}/logo-montana.png`;
const defaultKeywords =
  'PT Montana Wana Teknologi, Ekosistem Montana AI, UMKM Peternakan, Edukasi Digital, Konsultasi Perizinan, Smart Forestry, Monitoring Lingkungan';

const routeSeoMap: Record<string, RouteSeo> = {
  '/': {
    title: 'PT Montana Wana Teknologi | Ekosistem Montana AI',
    description: 'Ekosistem Montana AI untuk kehutanan, UMKM peternakan, edukasi digital, monitoring lingkungan, dan transformasi data berbasis teknologi.',
    keywords:
      'Ekosistem Montana AI, PT Montana Wana Teknologi, solusi AI Indonesia, UMKM peternakan digital, edukasi digital kehutanan',
    path: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'PT Montana Wana Teknologi',
      url: baseUrl,
      publisher: {
        '@type': 'Organization',
        name: 'PT Montana Wana Teknologi',
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
        },
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  },
  '/about-company': {
    title: 'Tentang Perusahaan | PT Montana Wana Teknologi',
    description: 'Profil umum PT Montana Wana Teknologi, identitas perusahaan, KBLI, visi misi, dan pernyataan tanggung jawab.',
    keywords: 'tentang PT Montana Wana Teknologi, profil perusahaan teknologi lingkungan, visi misi Montana Wana',
    path: '/about-company',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Company - PT Montana Wana Teknologi',
      url: `${baseUrl}/about-company`,
    },
  },
  '/founder': {
    title: 'Founder | Agung Laksono',
    description: 'Profil Agung Laksono sebagai CEO dan Founder PT Montana Wana Teknologi, inovator teknologi lingkungan berbasis AI.',
    keywords: 'Agung Laksono, founder PT Montana Wana Teknologi, CEO teknologi lingkungan',
    path: '/founder',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Agung Laksono',
        jobTitle: 'CEO dan Founder',
        worksFor: {
          '@type': 'Organization',
          name: 'PT Montana Wana Teknologi',
        },
      },
    },
  },
  '/konsultasi-perizinan': {
    title: 'Konsultasi Perizinan | PT Montana Wana Teknologi',
    description: 'Layanan konsultasi IPPKH, AMDAL, SLO, SIMPEL, RUPH, RKT, RKU, dan perizinan kehutanan lainnya.',
    keywords: 'konsultasi perizinan kehutanan, AMDAL, IPPKH, jasa perizinan lingkungan',
    path: '/konsultasi-perizinan',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Konsultasi Perizinan Kehutanan dan Lingkungan',
      provider: {
        '@type': 'Organization',
        name: 'PT Montana Wana Teknologi',
      },
      areaServed: 'Indonesia',
    },
  },
  '/solutions': {
    title: 'Solusi | Ekosistem Montana',
    description: 'Daftar solusi Ekosistem Montana: Smart Forestry, monitoring lingkungan, geospatial analytics, AI consulting, dan platform digital terintegrasi.',
    keywords: 'solusi ekosistem montana, smart forestry, geospatial analytics, AI consulting Indonesia',
    path: '/solutions',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Solusi Komprehensif PT Montana Wana Teknologi',
      url: `${baseUrl}/solutions`,
    },
  },
  '/umkm-peternakan': {
    title: 'UMKM Peternakan | Ekosistem Montana',
    description: 'Digitalisasi UMKM peternakan melalui platform aset digital, monitoring real-time, geotagging, dan penguatan ekonomi berbasis data.',
    keywords: 'UMKM peternakan, platform aset digital peternakan, digitalisasi peternak, Montana UMKM',
    path: '/umkm-peternakan',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Livestock Digital Asset Platform',
      provider: {
        '@type': 'Organization',
        name: 'PT Montana Wana Teknologi',
      },
    },
  },
  '/edukasi-digital': {
    title: 'Edukasi Digital | Open Digital Forestry Campus',
    description: 'Platform Ruang Kuliah Digital untuk kehutanan, lingkungan, dan AI dengan sistem semester 1-8 serta sertifikasi digital.',
    keywords: 'edukasi digital, ruang kuliah digital, pembelajaran kehutanan berbasis teknologi',
    path: '/edukasi-digital',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Open Digital Forestry Campus',
      provider: {
        '@type': 'Organization',
        name: 'PT Montana Wana Teknologi',
      },
    },
  },
  '/environmental-monitoring': {
    title: 'Environmental Monitoring | Montana AI',
    description: 'Environmental Intelligence System untuk monitoring lingkungan berbasis AI, geotagging, analytics, dan dashboard real-time.',
    keywords: 'monitoring lingkungan AI, environmental intelligence system, dashboard lingkungan real-time',
    path: '/environmental-monitoring',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Environmental Monitoring Dashboard v1.0',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
    },
  },
  '/publikasi-teknologi': {
    title: 'Publikasi Teknologi Montana AI | Monitoring Vegetasi dan Reklamasi Lahan',
    description:
      'Publikasi ilmiah populer mengenai inovasi Montana AI untuk monitoring vegetasi, reklamasi lahan, analisis kesehatan tanaman, dan dokumentasi antarmuka sistem.',
    keywords:
      'publikasi teknologi montana ai, monitoring vegetasi, reklamasi lahan, analisis kesehatan tanaman, publikasi ilmiah populer',
    path: '/publikasi-teknologi',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Publikasi Teknologi Montana AI untuk Monitoring Vegetasi dan Reklamasi Lahan',
      author: {
        '@type': 'Person',
        name: 'Agung Laksono',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PT Montana Wana Teknologi',
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
        },
      },
      datePublished: '2026-03-08',
      dateModified: '2026-03-08',
      inLanguage: 'id-ID',
      url: `${baseUrl}/publikasi-teknologi`,
    },
  },
  '/portfolio': {
    title: 'Portofolio | Proyek Impact Montana',
    description: 'Proyek impact PT Montana Wana Teknologi di bidang reklamasi tambang, digitalisasi peternakan, dan edukasi kehutanan.',
    keywords: 'portofolio montana wana, proyek digitalisasi peternakan, proyek reklamasi tambang',
    path: '/portfolio',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Portfolio Proyek Impact PT Montana Wana Teknologi',
      url: `${baseUrl}/portfolio`,
    },
  },
  '/sustainability': {
    title: 'Keberlanjutan | KomESG',
    description: 'Komitmen keberlanjutan PT Montana Wana Teknologi dalam aspek Environmental, Social, dan Governance.',
    keywords: 'keberlanjutan ESG, KomESG, tata kelola lingkungan sosial',
    path: '/sustainability',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Sustainability KomESG PT Montana Wana Teknologi',
      url: `${baseUrl}/sustainability`,
    },
  },
  '/roadmap': {
    title: 'Roadmap | Peta Jalan Pengembangan',
    description: 'Strategic Roadmap PT Montana Wana Teknologi dari foundation, scaling AI, hingga ekspansi nasional ekosistem digital.',
    keywords: 'roadmap montana wana, peta jalan transformasi digital, strategi ekspansi AI',
    path: '/roadmap',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Strategic Roadmap PT Montana Wana Teknologi',
      url: `${baseUrl}/roadmap`,
    },
  },
  '/contact': {
    title: 'Kontak | PT Montana Wana Teknologi',
    description: 'Kontak PT Montana Wana Teknologi untuk kolaborasi teknologi kehutanan, peternakan, dan monitoring lingkungan.',
    keywords: 'kontak montana wana teknologi, kolaborasi teknologi lingkungan, konsultasi montana AI',
    path: '/contact',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Kontak PT Montana Wana Teknologi',
      url: `${baseUrl}/contact`,
    },
  },
};

const routeOrder = [
  '/',
  '/about-company',
  '/founder',
  '/konsultasi-perizinan',
  '/solutions',
  '/umkm-peternakan',
  '/edukasi-digital',
  '/environmental-monitoring',
  '/publikasi-teknologi',
  '/portfolio',
  '/sustainability',
  '/roadmap',
  '/contact',
];

const SiteLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const previousPathRef = useRef(location.pathname);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const previousPath = previousPathRef.current;
    const previousIndex = routeOrder.indexOf(previousPath);
    const currentIndex = routeOrder.indexOf(location.pathname);

    if (previousIndex >= 0 && currentIndex >= 0 && previousIndex !== currentIndex) {
      setDirection(currentIndex > previousIndex ? 1 : -1);
    }

    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    const fallback = routeSeoMap['/'];
    const seo = routeSeoMap[location.pathname] ?? fallback;
    const currentPath = seo.path ?? location.pathname;
    const currentUrl = `${baseUrl}${currentPath}`;
    const currentKeywords = seo.keywords ?? defaultKeywords;

    document.title = seo.title;

    const ensureMeta = (key: string, value: string, attr: 'name' | 'property'): void => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    ensureMeta('description', seo.description, 'name');
    ensureMeta('keywords', currentKeywords, 'name');
    ensureMeta('og:title', seo.title, 'property');
    ensureMeta('og:description', seo.description, 'property');
    ensureMeta('og:url', currentUrl, 'property');
    ensureMeta('og:site_name', 'PT Montana Wana Teknologi', 'property');
    ensureMeta('og:image', logoUrl, 'property');
    ensureMeta('twitter:title', seo.title, 'name');
    ensureMeta('twitter:description', seo.description, 'name');
    ensureMeta('twitter:card', 'summary_large_image', 'name');
    ensureMeta('twitter:image', logoUrl, 'name');

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    const schemaId = 'route-jsonld-schema';
    const existingSchema = document.getElementById(schemaId);
    if (existingSchema) {
      existingSchema.remove();
    }

    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(seo.schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [location.pathname]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>): void => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>): void => {
    if (!touchStartRef.current) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    touchStartRef.current = null;

    // Horizontal swipe switches page according to navbar order.
    if (absX < 90 || absX < absY * 1.2) {
      return;
    }

    const currentIndex = routeOrder.indexOf(location.pathname);
    if (currentIndex < 0) {
      return;
    }

    if (deltaX < 0 && currentIndex < routeOrder.length - 1) {
      setShowSwipeHint(false);
      setDirection(1);
      navigate(routeOrder[currentIndex + 1]);
      return;
    }

    if (deltaX > 0 && currentIndex > 0) {
      setShowSwipeHint(false);
      setDirection(-1);
      navigate(routeOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-[#030807] text-white" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <SiteHeader />
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 28 : -28, filter: 'blur(5px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: direction > 0 ? -24 : 24, filter: 'blur(4px)' }}
          transition={{ duration: 0.52, ease: 'easeInOut' }}
          className="relative"
        >
          <Outlet />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.05),transparent_45%)]" />
        </motion.div>
      </AnimatePresence>
      {showSwipeHint && (
        <div className="pointer-events-none fixed bottom-4 right-4 z-50 rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-emerald-200">
          Swipe kiri/kanan untuk pindah halaman
        </div>
      )}
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
