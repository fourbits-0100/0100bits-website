import React from 'react';
import { motion } from 'motion/react';

const philosophies = [
    {
        title: "Architecture First",
        desc: "Every system starts with careful planning."
    },
    {
        title: "AI Native",
        desc: "Artificial Intelligence is integrated where it creates meaningful value."
    },
    {
        title: "Built to Scale",
        desc: "Designed to support growth without sacrificing reliability."
    },
    {
        title: "Long-Term Partnership",
        desc: "Engineering continues long after deployment."
    }
];

export function Philosophy() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 max-w-2xl glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none">
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">MINDSET</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary uppercase tracking-tight">
                            Engineering Philosophy
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {philosophies.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 glass-card bg-white/30 backdrop-blur-md rounded-none hover:border-accent/40 transition-all duration-300"
                            >
                                <div className="w-12 h-1 bg-accent mb-6" />
                                <h4 className="text-xl font-light tracking-wide text-primary mb-4">
                                    {item.title}
                                </h4>
                                <p className="text-sm font-light text-secondary leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
