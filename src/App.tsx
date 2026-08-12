import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { GridBackground } from "./components/GridBackground";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Solutions } from "./pages/Solutions";
import { Contact } from "./pages/Contact";
import AdminApp from "./admin/AdminApp";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen selection:bg-accent/30 selection:text-primary">
    <GridBackground />
    <Navbar />
    <main className="relative z-10 pt-16">
      {children}
    </main>
    <Footer />
  </div>
);

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 't' || e.key.toLowerCase() === 'y' || e.key.toLowerCase() === 'l')) {
        e.preventDefault();
        navigate('/admin/login');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/*" element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </>
  );
}
