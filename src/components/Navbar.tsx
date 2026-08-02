import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/solutions" },
  { name: "WORK", href: "/work" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 lg:top-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-4rem)] lg:max-w-[1280px] z-50 rounded-2xl lg:rounded-full bg-surface/70 backdrop-blur-2xl border border-white/10 px-6 lg:px-8 py-3 shadow-2xl flex items-center justify-between"
      >
        <Link to="/" className="flex flex-col items-start leading-none cursor-pointer group">
          <div className="flex items-end gap-1">
            <span className="text-3xl font-extralight tracking-tighter text-white group-hover:text-accent transition-colors duration-500">IV</span>
            <span className="text-[10px] font-light tracking-[0.4em] text-white/70 mb-1">BITS</span>
          </div>
          <div className="flex items-center gap-2 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="h-[1px] w-4 bg-accent/70"></div>
            <span className="text-[7px] font-light tracking-[0.3em] text-accent/90 uppercase">Built Together</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1.5 p-1.5 glass-card rounded-full">
          {navLinks.map((link) => {
            const active = location.pathname === link.href || (link.href === '/solutions' && location.pathname === '/services');
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-5 py-2 rounded-full text-[11px] font-light tracking-[0.15em] transition-all duration-300 ${active
                  ? "text-white bg-white/10 shadow-lg border border-white/5"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex flex-shrink-0 items-center">
          <Link to="/contact" className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-gradient-to-r from-accent to-accent-hover text-white text-[11px] font-light uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:shadow-[0_0_30px_rgba(0,85,255,0.6)]">
            <span className="translate-x-1 group-hover:-translate-x-1 transition-transform duration-300">LET'S BUILD</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-32 px-6 flex flex-col lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-light tracking-widest block py-2 ${active ? 'text-accent' : 'text-white/70 hover:text-white'}`}
                  >
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                      {link.name}
                    </motion.div>
                  </Link>
                )
              })}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-10 py-4 bg-accent hover:bg-accent-hover text-white rounded-full text-sm tracking-widest font-light flex items-center gap-2 shadow-[0_0_30px_rgba(0,85,255,0.4)] block w-max"
                >
                  LET'S BUILD <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
