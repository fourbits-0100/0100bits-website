import { motion } from "motion/react";
import { ChevronRight, Settings, Cpu, Shield, Zap } from "lucide-react";
import { useState } from "react";

export function About() {
    const [activePhilosophy, setActivePhilosophy] = useState(0);

    const philosophies = [
        { title: "Engineering over Coding", desc: "Writing lines of code is easy. Building resilient systems that thrive under uncertainty is engineering. We focus on the architecture, not just the syntax." },
        { title: "Intelligence over Automation", desc: "Automation makes things faster; intelligence makes them smarter. We don't just script tasks—we build AI-driven cognition into the core of your business." },
        { title: "Partnership over Projects", desc: "We are not vendors dropping off a deliverable. We are your fractional engineering team, invested in the long-term success and scaling of the system." },
        { title: "Systems over Features", desc: "Features decay. Systems evolve. We design holistic, decoupled architectures that adapt to new requirements without breaking legacy flows." }
    ];

    return (
        <div className="pb-32 text-center md:text-left">
            {/* Hero */}
            <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-5xl z-10"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[110px] font-extralight tracking-tighter text-white leading-[0.9] mb-8">
                        Engineering<br /><span className="text-white/60">Beyond Software.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-secondary font-light max-w-3xl mx-auto leading-relaxed">
                        IV BITS exists to engineer intelligent digital systems that help organizations solve meaningful problems, operate efficiently, and grow with confidence.
                    </p>
                </motion.div>
            </section>

            {/* Section 1: Why We Exist */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="h-px w-24 bg-accent/50 mx-auto mb-12"></div>
                    <h2 className="text-3xl md:text-5xl text-white font-extralight tracking-wide mb-12 uppercase">Why We Exist</h2>

                    <div className="max-w-4xl mx-auto space-y-12">
                        <p className="text-2xl md:text-4xl text-white/90 font-light leading-snug">
                            Technology should simplify complexity—<br className="hidden md:block" />not create it.
                        </p>
                        <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
                            We founded IV BITS around one fundamental belief:
                        </p>
                        <p className="text-3xl md:text-5xl text-white font-extralight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
                            Software should outlive trends.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Section 2: Our Philosophy */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <h2 className="text-2xl text-white/50 font-light tracking-[0.2em] uppercase mb-16 px-4">Our Philosophy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {philosophies.map((phil, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onMouseEnter={() => setActivePhilosophy(i)}
                            className={`p-8 rounded-3xl border transition-all duration-700 cursor-default ${activePhilosophy === i ? 'bg-white/10 border-white/20 shadow-2xl scale-105 z-10' : 'bg-surface/30 border-white/5 hover:bg-white/5'}`}
                        >
                            <h3 className={`text-2xl font-light mb-6 tracking-wide ${activePhilosophy === i ? 'text-white' : 'text-white/60'}`}>
                                {phil.title.split(' over ').map((t, idx) => (
                                    <span key={idx}>
                                        {t}{idx === 0 && <br />}
                                        {idx === 0 && <span className="text-[12px] uppercase tracking-widest text-accent mt-2 block">over</span>}
                                    </span>
                                ))}
                            </h3>
                            <p className={`text-sm font-light leading-relaxed transition-opacity duration-500 ${activePhilosophy === i ? 'text-white/80 opacity-100' : 'text-white/40 opacity-0 md:opacity-40'}`}>
                                {phil.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 3: The Name */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5 flex items-center justify-center">
                    <div className="text-[400px] font-black text-white/[0.02] leading-none tracking-tighter absolute -rotate-12 select-none">IV</div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[60px] md:text-[120px] font-extralight text-white mb-8 tracking-tighter">IV</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto">
                            <div>
                                <div className="h-px w-full bg-accent mb-6"></div>
                                <h3 className="text-lg text-white font-light tracking-widest uppercase mb-4">Roman Numeral</h3>
                                <p className="text-sm text-secondary font-light">Rooted in history, structure, and foundational strength.</p>
                            </div>
                            <div>
                                <div className="h-px w-full bg-accent mb-6"></div>
                                <h3 className="text-lg text-white font-light tracking-widest uppercase mb-4">Four Founders</h3>
                                <p className="text-sm text-secondary font-light">Different expertise. One singular engineering culture.</p>
                            </div>
                            <div>
                                <div className="h-px w-full bg-accent mb-6"></div>
                                <h3 className="text-lg text-white font-light tracking-widest uppercase mb-4">Building Blocks</h3>
                                <p className="text-sm text-secondary font-light">The essential units required to architect massive systems.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: How We Think */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl text-white font-extralight tracking-tight mb-24">How We Think</h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central CPU Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/20 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-2 md:flex justify-between relative z-10 gap-8 md:gap-4">
                        {[
                            { id: "01", name: "Understand", icon: <Settings className="w-5 h-5 text-accent" /> },
                            { id: "02", name: "Research", icon: <Cpu className="w-5 h-5 text-white/50" /> },
                            { id: "03", name: "Architect", icon: <Zap className="w-5 h-5 text-accent" /> },
                            { id: "04", name: "Engineer", icon: <Settings className="w-5 h-5 text-white/50" /> },
                            { id: "05", name: "Deploy", icon: <Shield className="w-5 h-5 text-accent" /> },
                            { id: "06", name: "Improve", icon: <ChevronRight className="w-5 h-5 text-white/50" /> }
                        ].map((step, i) => (
                            <motion.div
                                key={step.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    {step.icon}
                                </div>
                                <div className="text-[10px] text-accent font-light tracking-[0.2em] mb-2">{step.id}</div>
                                <div className="text-sm md:text-base text-white font-light tracking-wide">{step.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Manifesto */}
            <section className="py-40 px-6 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-[80px] font-extralight text-white leading-tight tracking-tighter mb-16">
                        We believe<br />engineering is an act of responsibility.
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary font-light max-w-3xl mx-auto leading-relaxed">
                        The code we write today powers the critical operations of tomorrow. We don't take shortcuts. We don't chase hype. We build robust, elegant solutions that endure the test of scale and time.
                    </p>
                </motion.div>
            </section>

            {/* Section 6: Looking Forward */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl font-extralight text-white mb-8 tracking-tight">Looking Forward.</h2>
                        <p className="text-lg text-secondary font-light leading-relaxed mb-8">
                            We are actively investing our engineering resources into independent R&D, exploring the frontiers of local AI operations, open-source infrastructure, and next-generation product design.
                        </p>
                        <a href="/work" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors tracking-widest text-[11px] uppercase">
                            Explore Our Work <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {['Research', 'Open Source', 'Next-Gen AI', 'Edge Compute'].map((item) => (
                            <div key={item} className="p-8 glass-card rounded-2xl flex flex-col justify-end min-h-[160px]">
                                <span className="text-white font-light tracking-wide">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
