import React from 'react';
import { motion } from 'motion/react';

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: [
            "Every engagement begins with understanding.",
            "Before discussing technology, we study the organization itself."
        ],
        items: ["Business Processes", "Operational Challenges", "Current Systems", "Goals", "Stakeholders", "Growth Plans"]
    },
    {
        num: "02",
        title: "Architecture",
        desc: [
            "Technology decisions should never be accidental.",
            "We design a scalable foundation before development begins."
        ],
        items: ["System Architecture", "Data Models", "Application Structure", "Security Planning", "User Experience", "Technology Selection"]
    },
    {
        num: "03",
        title: "Engineering",
        desc: [
            "Our engineers transform architecture into reliable software."
        ],
        items: ["Backend Engineering", "Frontend Engineering", "Artificial Intelligence", "Database Engineering", "Quality Assurance", "Performance Optimization", "Deployment"]
    },
    {
        num: "04",
        title: "Evolution",
        desc: [
            "Engineering never truly finishes.",
            "Technology should continuously improve alongside the business."
        ],
        items: ["Continuous Improvements", "New Features", "Performance Optimization", "AI Enhancements", "Maintenance", "Long-Term Support"]
    }
];

export function Methodology() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 max-w-2xl glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none">
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">PROCESS</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary mb-6 uppercase tracking-tight">ENGINEERING METHODOLOGY</h3>
                        <p className="text-secondary font-light leading-relaxed">
                            Every successful software system follows a disciplined engineering process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group p-8 glass-card bg-white/30 backdrop-blur-md rounded-none hover:border-accent/40 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <h4 className="text-2xl font-extralight text-primary tracking-wide">{step.title}</h4>
                                    <span className="text-[11px] font-light font-mono text-accent tracking-widest">{step.num}</span>
                                </div>

                                <div className="space-y-2 mb-8">
                                    {step.desc.map((d, i) => (
                                        <p key={i} className="text-sm text-secondary font-light leading-relaxed">{d}</p>
                                    ))}
                                </div>

                                <ul className="space-y-3 mt-auto">
                                    {step.items.map((item) => (
                                        <li key={item} className="text-sm text-primary/90 font-extralight flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-border group-hover:bg-accent/50 transition-colors shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
