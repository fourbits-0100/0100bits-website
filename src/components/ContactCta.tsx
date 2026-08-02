import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
    "Initial Consultation",
    "Discovery Workshop",
    "Project Planning",
    "Architecture Discussion"
];

export function ContactCta() {
    const navigate = useNavigate();

    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-16 shadow-2xl">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">CONTACT</h2>
                        <h3 className="text-4xl md:text-6xl font-extralight text-primary uppercase tracking-tight mb-8">
                            Let's Engineer<br />What's Next.
                        </h3>
                        <p className="text-secondary font-light leading-relaxed mb-6 max-w-lg">
                            Whether you're building an AI platform, modernizing internal operations, launching a digital product, or exploring a new business idea, we'd like to understand your organization before discussing technology.
                        </p>
                        <p className="text-primary font-light border-l-2 border-accent pl-4 mb-10">
                            Because the best software begins with understanding.
                        </p>

                        <button
                            onClick={() => navigate('/contact')}
                            className="px-8 py-4 bg-primary text-background font-mono uppercase text-sm hover:bg-accent hover:text-white transition-colors flex items-center gap-4"
                        >
                            Start the Conversation
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel p-10 bg-white/30 backdrop-blur-md rounded-none"
                    >
                        <h4 className="text-xl font-light text-primary mb-8 border-b border-white/10 pb-4">Connect Worldwide</h4>

                        <div className="space-y-6 mb-12">
                            <div>
                                <p className="text-[10px] font-mono tracking-widest text-secondary mb-1">EMAIL</p>
                                <a href="mailto:fourbits0100@gmail.com" className="text-primary hover:text-accent font-light transition-colors">
                                    fourbits0100@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] font-mono tracking-widest text-secondary mb-1">LOCATION</p>
                                <p className="text-primary font-light">Vadodara, Gujarat, India</p>
                                <p className="text-xs text-secondary mt-1 tracking-wider uppercase">Available Worldwide</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] font-mono tracking-widest text-secondary mb-4 uppercase">Process Journey</p>
                            <ul className="space-y-3">
                                {steps.map((step, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm font-light text-primary/80">
                                        <span className="w-4 h-4 rounded-full border border-accent/50 flex flex-col items-center justify-center shrink-0" />
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
