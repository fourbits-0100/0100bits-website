import { Routes, Route } from "react-router-dom";
import { GridBackground } from "./components/GridBackground";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Solutions } from "./pages/Solutions";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent/30 selection:text-primary">
      <GridBackground />
      <Navbar />

      <main className="relative z-10 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
