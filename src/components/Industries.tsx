import React from 'react';
import { motion } from 'motion/react';

const industryList = [
    "Manufacturing", "Healthcare", "Education", "Retail",
    "Finance", "Professional Services", "Hospitality", "Logistics",
    "Real Estate", "Construction", "Startups", "Growing Enterprises"
];

export function Industries() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none sticky top-24"
                        >
                            <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">INDUSTRIES</h2>
                            <h3 className="text-3xl font-extralight text-primary mb-6 uppercase tracking-tight">
                                Organizations We Engineer For
                            </h3>
                            <p className="text-secondary font-extralight leading-relaxed mb-6">
                                Every industry operates differently.
                            </p>
                            <div className="p-4 border-l-2 border-accent bg-white/10">
                                <p className="text-sm text-primary font-mono font-light leading-relaxed">
                                    Our engineering adapts to the organization—not the other way around.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {industryList.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="p-6 glass-card bg-white/30 backdrop-blur-md rounded-none hover:border-accent/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-center cursor-default h-full"
                            >
                                <span className="text-primary font-light tracking-wide">{industry}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
