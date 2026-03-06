import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/index';
import AboutCompanyPage from './pages/AboutCompany';
import AboutCompanyDetailPage from './pages/AboutCompanyDetailPage';
import FounderPage from './pages/FounderPage';
import LicensingConsultationPage from './pages/LicensingConsultationPage';
import SolutionsPage from './pages/SolutionsPage';
import UmkmPeternakanPage from './pages/UmkmPeternakanPage';
import EdukasiDigitalPage from './pages/EdukasiDigitalPage';
import EnvironmentalMonitoringPage from './pages/EnvironmentalMonitoringPage';
import PortfolioPage from './pages/PortfolioPage';
import SustainabilityPage from './pages/SustainabilityPage';
import RoadmapPage from './pages/RoadmapPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-company" element={<AboutCompanyPage />} />
          <Route path="/about-company/detail" element={<AboutCompanyDetailPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/konsultasi-perizinan" element={<LicensingConsultationPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/umkm-peternakan" element={<UmkmPeternakanPage />} />
          <Route path="/edukasi-digital" element={<EdukasiDigitalPage />} />
          <Route path="/environmental-monitoring" element={<EnvironmentalMonitoringPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
