import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AboutPage } from "../pages/about/AboutPage";
import { ContactPage } from "../pages/contact/ContactPage";
import { ExperiencePage } from "../pages/experience/ExperiencePage";
import { HomePage } from "../pages/home/HomePage";
import { WorkPage } from "../pages/work/WorkPage";
import { NotFoundPage } from "../pages/not-found/NotFoundPage";
import { ScrollToTop } from "../components/navigation/ScrollToTop";
import { ScrollToTopButton } from "../components/navigation/ScrollToTopButton";
import { usePageMetadata } from "./metadata";

export function App() {
  const location = useLocation();

  usePageMetadata(location.pathname);

  return (
    <>
      <ScrollToTop />
      <div key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <ScrollToTopButton />
      <Analytics />
    </>
  );
}
