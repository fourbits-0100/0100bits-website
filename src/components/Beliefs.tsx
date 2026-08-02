import React from 'react';
import { motion } from 'motion/react';

export function Beliefs() {
    const beliefs = [
        "Technology should adapt to businesses—not force businesses to adapt.",
        "Engineering should create clarity, not complexity.",
        "Artificial Intelligence should enhance human capability, not replace responsibility.",
        "Every system should be designed to evolve.",
        "Architecture matters more than trends.",
        "The best software feels invisible because it fits naturally into the way people work."
    ];

    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 max-w-2xl glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none">
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">CORE</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary uppercase tracking-tight">
                            What We Believe
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {beliefs.map((belief, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 glass-card bg-white/30 backdrop-blur-md rounded-none hover:border-accent/40 transition-all duration-300"
                            >
                                <p className="text-lg font-light text-primary leading-relaxed border-l-2 border-accent pl-6">
                                    {belief}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
