import React from 'react';
import { motion } from 'motion/react';

const researchAreas = [
    "Artificial Intelligence",
    "Large Language Models",
    "Machine Learning",
    "Computer Vision",
    "Autonomous AI Agents",
    "Developer Productivity",
    "Human–Computer Interaction",
    "Enterprise Automation"
];

export function Research() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none h-full flex flex-col"
                            >
                                <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">RESEARCH</h2>
                                <h3 className="text-3xl md:text-5xl font-extralight text-primary mb-8 uppercase tracking-tight leading-tight">
                                    Engineering Beyond Client Projects
                                </h3>

                                <div className="space-y-6 text-secondary font-light leading-relaxed flex-1">
                                    <p>
                                        Innovation doesn't stop after deployment.
                                    </p>
                                    <p>
                                        Alongside client work, we continuously research emerging technologies, build internal products, develop reusable engineering frameworks, and explore new ways intelligent software can improve organizations.
                                    </p>
                                    <div className="p-6 border-l-2 border-accent bg-white/10 mt-6">
                                        <p className="text-sm text-primary font-mono font-light leading-relaxed">
                                            Research allows us to build solutions that are prepared for tomorrow—not just today.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="p-8 md:p-10 glass-card bg-white/30 backdrop-blur-md rounded-none h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-[200px] text-white/5 font-bold leading-none select-none pointer-events-none">
                                    R
                                </div>
                                <h4 className="text-xl font-light text-primary tracking-wide mb-8">Current areas of exploration include</h4>
                                <ul className="space-y-6 relative z-10">
                                    {researchAreas.map((area, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="flex items-center gap-4 text-primary/90 font-extralight"
                                        >
                                            <div className="w-1.5 h-1.5 bg-accent/60 shrink-0" />
                                            <span className="text-lg tracking-wide">{area}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
