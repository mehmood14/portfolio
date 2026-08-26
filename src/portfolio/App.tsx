// src/portfolio/App.tsx

import { Routes, Route } from "react-router-dom";
import { WorkPage } from "./WorkPage";
import { ExperiencePage } from "./ExperiencePage";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { HomePage } from "./HomePage";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}
