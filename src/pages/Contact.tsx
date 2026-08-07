import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Mail, Globe, Terminal, Calendar, MapPin, Check } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export function Contact() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        industry: "",
        website: "",
        projectType: "",
        timeline: "",
        budget: "",
    });

    const projectTypes = ["Business Website", "AI Employee", "Enterprise Software", "Mobile App", "Automation", "Cloud Architecture"];
    const timelines = ["Immediately", "1 Month", "3 Months", "Flexible"];
    const budgets = ["Under $10k", "$10k - $50k", "$50k - $150k", "$150k+"];

    const handleNext = () => setStep(s => Math.min(s + 1, 5));

    const handleStep1Next = () => {
        if (!formData.name.trim()) {
            setFormError("Name is required.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            setFormError("Valid email is required.");
            return;
        }
        setFormError("");
        handleNext();
    };

    const submitEnquiry = async (budget: string) => {
        setFormData({ ...formData, budget });
        setIsSubmitting(true);
        setFormError("");

        const { error } = await supabase.from('enquiries').insert({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            industry: formData.industry,
            website: formData.website,
            project_type: formData.projectType,
            timeline: formData.timeline,
            budget: budget,
            status: 'new'
        });

        if (error) {
            console.error("Submission failed:", error);
            setFormError("Failed to submit enquiry. Please try again.");
            setIsSubmitting(false);
        } else {
            setIsSubmitting(false);
            handleNext();
        }
    };

    return (
        <div className="min-h-screen bg-black text-white relative flex flex-col">
            {/* Hero */}
            <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-8">
                        Let's Build<br />Together.
                    </h1>
                    <p className="text-xl text-secondary font-light leading-relaxed max-w-2xl mx-auto">
                        Whether you're exploring an idea or planning a massive digital transformation, we'd love to hear about it.
                    </p>
                </motion.div>
            </section>

            <section className="flex-grow px-6 pb-32 max-w-3xl mx-auto w-full">
                <div className="bg-surface/20 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

                    <div className="flex gap-2 mb-12">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= i ? 'bg-accent' : 'bg-white/10'}`}></div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                                <h2 className="text-3xl font-light tracking-wide mb-8">Tell us about yourself.</h2>
                                {formError && <div className="text-red-400 text-sm font-semibold">{formError}</div>}
                                <div className="space-y-6">
                                    <div>
                                        <label className="text-[10px] uppercase tracking-widest text-secondary block mb-2">Name *</label>
                                        <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-xl font-light focus:outline-none focus:border-accent transition-colors" value={formData.name} onChange={e => { setFormData({ ...formData, name: e.target.value }); setFormError(""); }} />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-widest text-secondary block mb-2">Email *</label>
                                        <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-xl font-light focus:outline-none focus:border-accent transition-colors" value={formData.email} onChange={e => { setFormData({ ...formData, email: e.target.value }); setFormError(""); }} />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-widest text-secondary block mb-2">Company Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-xl font-light focus:outline-none focus:border-accent transition-colors" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-widest text-secondary block mb-2">Industry</label>
                                        <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-xl font-light focus:outline-none focus:border-accent transition-colors" value={formData.industry} onChange={e => setFormData({ ...formData, industry: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-widest text-secondary block mb-2">Website (Optional)</label>
                                        <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-xl font-light focus:outline-none focus:border-accent transition-colors" value={formData.website} onChange={e => setFormData({ ...formData, website: e.target.value })} />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 className="text-3xl font-light tracking-wide mb-8">What are you trying to build?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => { setFormData({ ...formData, projectType: type }); setTimeout(handleNext, 300); }}
                                            className={`text-left p-6 rounded-2xl border transition-all ${formData.projectType === type ? 'bg-white/10 border-accent' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                                        >
                                            <span className="text-lg font-light">{type}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 className="text-3xl font-light tracking-wide mb-8">When do you need it?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {timelines.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => { setFormData({ ...formData, timeline: time }); setTimeout(handleNext, 300); }}
                                            className={`text-left p-6 rounded-2xl border transition-all ${formData.timeline === time ? 'bg-white/10 border-accent' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                                        >
                                            <span className="text-lg font-light">{time}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                <h2 className="text-3xl font-light tracking-wide mb-8">What is your expected budget?</h2>
                                {formError && <div className="mb-4 text-red-400 text-sm font-semibold">{formError}</div>}
                                <div className="grid grid-cols-1 gap-4">
                                    {budgets.map((budget) => (
                                        <button
                                            key={budget}
                                            disabled={isSubmitting}
                                            onClick={() => submitEnquiry(budget)}
                                            className={`text-left p-6 rounded-2xl border transition-all disabled:opacity-50 ${formData.budget === budget ? 'bg-white/10 border-accent' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                                        >
                                            <span className="text-lg font-light">{isSubmitting && formData.budget === budget ? 'Submitting...' : budget}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div key="step5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="text-center py-12">
                                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/50">
                                    <Check className="w-8 h-8 text-accent" />
                                </div>
                                <h2 className="text-3xl font-light tracking-wide mb-4">Project Initialized.</h2>
                                <p className="text-secondary font-light mb-12">Your enquiry has been received securely. We will be in touch shortly to discuss the architecture of your vision.</p>
                                <button onClick={() => window.location.href = '/'} className="px-8 py-4 bg-white text-black rounded-full text-[11px] uppercase tracking-widest font-semibold hover:bg-white/90 transition-colors flex items-center gap-3 mx-auto">
                                    Return Home
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {step < 5 && (
                        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                            <button
                                onClick={() => setStep(s => Math.max(s - 1, 1))}
                                disabled={isSubmitting}
                                className={`text-[10px] uppercase tracking-widest text-secondary hover:text-white transition-colors disabled:opacity-50 ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                            >
                                Go Back
                            </button>

                            <button
                                onClick={handleStep1Next}
                                disabled={isSubmitting}
                                className={`flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-light transition-colors group disabled:opacity-50 ${step !== 1 ? 'hidden' : ''}`}
                            >
                                Continue <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={isSubmitting}
                                className={`flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-light transition-colors group disabled:opacity-50 ${step !== 2 && step !== 3 ? 'hidden' : ''}`}
                            >
                                Skip Step <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </button>
                            <div className={`${step !== 4 ? 'hidden' : ''} text-[10px] text-secondary uppercase tracking-widest mr-4`}>
                                Almost done
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Alternative Contact & Location */}
            <section className="border-t border-white/5 bg-background">
                <div className="max-w-7xl mx-auto px-6 py-32">
                    <h3 className="text-3xl font-extralight tracking-tight mb-16 text-center">Alternative Channels</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
                        {[
                            { name: "Email", icon: <Mail className="w-6 h-6 text-white/50 mb-6" />, value: "build@ivbits.com" },
                            { name: "Website", icon: <Globe className="w-6 h-6 text-white/50 mb-6" />, value: "ivbits.com" },
                            { name: "Terminal", icon: <Terminal className="w-6 h-6 text-white/50 mb-6" />, value: "ssh ivbits.com" },
                            { name: "Meeting", icon: <Calendar className="w-6 h-6 text-white/50 mb-6" />, value: "Book a slot" }
                        ].map((contact, i) => (
                            <a key={i} href="#" className="p-8 rounded-3xl bg-surface/30 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group">
                                {contact.icon}
                                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">{contact.name}</div>
                                <div className="text-lg font-light text-white group-hover:text-accent transition-colors">{contact.value}</div>
                            </a>
                        ))}
                    </div>

                    {/* Location */}
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                            <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-2xl font-light mb-4">Engineering HQ</h3>
                        <p className="text-secondary font-light leading-relaxed">
                            Innovation Hub, Sector 4<br />
                            Global Deployment.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
