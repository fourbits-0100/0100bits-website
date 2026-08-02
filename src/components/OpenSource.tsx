import { motion } from 'motion/react';

export function OpenSource() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto text-center flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-6">OPEN SOURCE</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary uppercase tracking-tight">
                            Building Beyond Business
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl glass-panel p-10 md:p-14 bg-white/30 backdrop-blur-md rounded-none text-left"
                    >
                        <div className="space-y-8 text-lg font-light text-secondary leading-relaxed">
                            <p className="text-primary text-xl">
                                Engineering improves when knowledge is shared.
                            </p>
                            <p>
                                IV BITS develops reusable libraries, engineering tools, design systems, and open-source projects that strengthen both our own engineering process and the wider developer community.
                            </p>
                            <div className="p-6 border-l-2 border-accent bg-white/5">
                                <p className="text-primary font-extralight italic">
                                    Open source encourages better software, stronger collaboration, and continuous learning.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
