import React from 'react';
import { motion } from 'motion/react';

const reasons = [
    {
        title: "Engineering First",
        desc: "Every decision begins with architecture rather than implementation."
    },
    {
        title: "AI Native",
        desc: "Artificial Intelligence is integrated where it creates measurable business value."
    },
    {
        title: "Built Around Your Business",
        desc: "No generic software. Every system is designed specifically for your organization."
    },
    {
        title: "Long-Term Thinking",
        desc: "Technology should remain valuable for years—not months."
    },
    {
        title: "Direct Collaboration",
        desc: "Clients work directly with engineers throughout the project."
    },
    {
        title: "Modern Engineering",
        desc: "We combine software engineering, AI, research, and product thinking into one disciplined process."
    }
];

export function Why() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 max-w-2xl glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none">
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">WHY IV BITS</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary uppercase tracking-tight">
                            Why Organizations Choose IV BITS
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 glass-card bg-white/30 backdrop-blur-md rounded-none hover:border-accent/40 transition-all duration-300 group"
                            >
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-primary mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                                    {index + 1}
                                </div>
                                <h4 className="text-xl font-light tracking-wide text-primary mb-4">{item.title}</h4>
                                <p className="text-sm font-light text-secondary leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
