import React from 'react';
import { motion } from 'motion/react';

const outcomes = [
    {
        title: "Enterprise Operations Platform",
        desc: "A centralized system connecting inventory, operations, employees, reporting, and business intelligence into one intelligent platform."
    },
    {
        title: "AI Customer Operations",
        desc: "AI-powered assistants handling customer conversations, internal workflows, documentation, and support operations."
    },
    {
        title: "Intelligent Knowledge Platform",
        desc: "An internal AI assistant capable of understanding company documentation, policies, manuals, and operational knowledge."
    },
    {
        title: "Business Analytics Platform",
        desc: "Interactive dashboards transforming operational data into actionable insights for leadership teams."
    },
    {
        title: "Digital Customer Experience",
        desc: "High-performance websites and customer portals designed to strengthen brand credibility and improve customer engagement."
    }
];

export function Outcomes() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 max-w-2xl glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none">
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">OUTCOMES</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary mb-6 uppercase tracking-tight">ENGINEERING OUTCOMES</h3>
                        <p className="text-secondary font-light leading-relaxed">
                            Every engagement presents a unique engineering challenge.<br />
                            Rather than forcing organizations to adapt to software, we engineer software around the organization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {outcomes.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 glass-card bg-white/30 backdrop-blur-md rounded-none hover:border-accent/40 transition-all duration-300"
                            >
                                <h4 className="text-xl font-light tracking-wide text-primary mb-4 pb-4 border-b border-white/10">{item.title}</h4>
                                <p className="text-sm font-light text-secondary leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
