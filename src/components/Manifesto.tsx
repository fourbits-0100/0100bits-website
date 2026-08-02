import React from 'react';
import { motion } from 'motion/react';

const lines = [
    "Technology shapes how organizations communicate, operate, and grow.",
    "That responsibility deserves more than writing code.",
    "It deserves thoughtful engineering.",
    "We believe software should outlive technology trends.",
    "Artificial Intelligence should empower people.",
    "Architecture should simplify future decisions.",
    "Businesses deserve systems that become stronger over time—not more complicated.",
    "Every solution we engineer should create lasting value.",
    "Every line of code should have purpose.",
    "Every decision should support the future of the organization."
];

export function Manifesto() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-20 shadow-2xl">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full glass-panel p-8 md:p-14 bg-white/30 backdrop-blur-md rounded-none"
                    >
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-6">MANIFESTO</h2>
                        <h3 className="text-4xl md:text-6xl font-extralight text-primary uppercase tracking-tight mb-12">
                            Engineering Is Responsibility.
                        </h3>

                        <div className="space-y-6 text-lg md:text-xl font-extralight text-secondary leading-relaxed mb-16">
                            {lines.map((line, idx) => (
                                <p key={idx} className={idx === 2 || idx === 6 ? "text-primary" : ""}>
                                    {line}
                                </p>
                            ))}
                        </div>

                        <div className="pt-12 border-t border-white/10">
                            <p className="text-xl md:text-3xl font-extralight tracking-wide text-primary">
                                We don't build software for launch day.<br />
                                <span className="text-accent mt-4 block font-normal">We engineer systems for the next decade.</span>
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
