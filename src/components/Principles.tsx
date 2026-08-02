import React from 'react';
import { motion } from 'motion/react';

const principles = [
    {
        title: "Design Before Development",
        details: [
            "Every successful product begins with thoughtful architecture.",
            "Writing code is only one part of engineering."
        ]
    },
    {
        title: "Business Before Technology",
        details: [
            "Technology exists to solve business problems.",
            "Understanding operations always comes before selecting frameworks."
        ]
    },
    {
        title: "Intelligence Before Automation",
        details: [
            "Automation saves time.",
            "Intelligence improves decisions.",
            "Our systems are engineered for both."
        ]
    },
    {
        title: "Simplicity Through Engineering",
        details: [
            "The simplest experiences are often backed by the most sophisticated engineering."
        ]
    },
    {
        title: "Long-Term Thinking",
        details: [
            "We build systems designed to evolve—not become obsolete."
        ]
    }
];

export function Principles() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 max-w-2xl glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none">
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">PRINCIPLES</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary uppercase tracking-tight">
                            The IV BITS Principles
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {principles.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 glass-card bg-white/30 backdrop-blur-md rounded-none hover:border-accent/40 transition-all duration-300 flex flex-col h-full"
                            >
                                <h4 className="text-xl font-light tracking-wide text-primary mb-6 border-b border-white/10 pb-4">
                                    {item.title}
                                </h4>
                                <div className="space-y-3 mt-auto">
                                    {item.details.map((detail, idx) => (
                                        <p key={idx} className="text-sm font-light text-secondary leading-relaxed">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
