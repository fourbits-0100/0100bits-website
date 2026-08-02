import React from 'react';
import { motion } from 'motion/react';

export function Intro() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none"
                    >
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">ABOUT</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary mb-8 uppercase tracking-tight leading-tight">
                            Engineering Intelligent Businesses.
                        </h3>

                        <div className="space-y-6 text-secondary font-light leading-relaxed">
                            <p className="text-lg text-primary/90">
                                IV BITS is an engineering company that designs and builds intelligent software systems for organizations that view technology as a long-term investment—not a short-term expense.
                            </p>
                            <p>
                                We believe software should do more than automate tasks. It should simplify operations, improve decision-making, connect people, and create measurable business value.
                            </p>
                            <p>
                                Our engineering combines software development, artificial intelligence, enterprise applications, product strategy, and modern user experiences into one disciplined process.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 border-l-2 border-accent bg-white/10">
                                <p className="text-sm text-primary font-mono font-light leading-relaxed">
                                    Every engagement begins with understanding the business.
                                </p>
                            </div>
                            <div className="p-6 border-l-2 border-accent bg-white/10">
                                <p className="text-sm text-primary font-mono font-light leading-relaxed">
                                    Every architecture is designed with longevity in mind.
                                </p>
                            </div>
                            <div className="p-6 border-l-2 border-accent bg-white/10">
                                <p className="text-sm text-primary font-mono font-light leading-relaxed">
                                    Every solution is engineered to grow alongside the organization it serves.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 border border-white/20 bg-white/5">
                            <p className="text-xl text-primary font-extralight leading-relaxed text-center">
                                We don't build software for the sake of technology.<br />
                                <span className="text-accent font-normal tracking-wide mt-2 block">We engineer technology that serves businesses.</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
