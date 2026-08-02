import React from 'react';
import { motion } from 'motion/react';

const caps = [
    {
        title: "Artificial Intelligence",
        desc: "Intelligent systems that automate repetitive work, improve decision-making, and enhance customer experiences.",
        items: [
            "AI Employees", "AI Voice Agents", "Knowledge Systems", "Internal AI Assistants",
            "Document Intelligence", "Workflow Automation", "AI Chatbots", "Business Intelligence Assistants"
        ]
    },
    {
        title: "Enterprise Applications",
        desc: "Software engineered around the way organizations actually operate.",
        items: [
            "Enterprise Resource Planning (ERP)", "Customer Relationship Management (CRM)",
            "Human Resource Management (HRMS)", "Inventory Management", "Sales Management",
            "Operations Platforms", "Internal Business Portals", "Custom Business Applications"
        ]
    },
    {
        title: "Digital Products",
        desc: "Modern software products built for performance, scalability, and exceptional user experience.",
        items: [
            "Corporate Websites", "SaaS Platforms", "Customer Portals", "E-Commerce Platforms",
            "Web Applications", "Mobile Applications", "Internal Dashboards", "Administrative Portals"
        ]
    },
    {
        title: "Intelligent Automation",
        desc: "Software designed to eliminate repetitive work and streamline business processes.",
        items: [
            "Business Workflow Automation", "Approval Systems", "Process Digitization",
            "Report Generation", "Data Processing", "Business Integrations"
        ]
    },
    {
        title: "Research & Innovation",
        desc: "Emerging technologies are constantly changing the way businesses operate. We actively research, prototype, and experiment with intelligent systems to ensure every solution benefits from modern engineering practices.",
        items: [
            "Artificial Intelligence", "Large Language Models", "Autonomous AI Agents",
            "Machine Learning", "Computer Vision", "Generative AI", "Human–Computer Interaction"
        ]
    }
];

export function Capabilities() {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-border/50">
            <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 max-w-2xl glass-panel p-8 md:p-10 bg-white/30 backdrop-blur-md rounded-none">
                        <h2 className="text-[10px] font-light tracking-[0.3em] text-accent uppercase mb-4">CAPABILITIES</h2>
                        <h3 className="text-3xl md:text-5xl font-extralight text-primary mb-6 uppercase tracking-tight">ENGINEERING CAPABILITIES</h3>
                        <p className="text-secondary font-light leading-relaxed">
                            Technology should function as one connected ecosystem—not a collection of disconnected applications.<br /><br />
                            We engineer digital systems that help organizations operate more efficiently, make better decisions, and grow with confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caps.map((cap, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4) }}
                                className={`group p-8 glass-card bg-white/30 backdrop-blur-md rounded-none hover:border-accent/40 transition-all duration-300 flex flex-col h-full ${index === caps.length - 1 ? 'lg:col-span-2' : ''}`}
                            >
                                <div className="flex items-start justify-between mb-6 border-b border-white/10 pb-4">
                                    <h4 className="text-xl font-light text-primary tracking-wide">{cap.title}</h4>
                                    <span className="text-[11px] font-light font-mono text-secondary tracking-widest group-hover:text-accent/50 transition-colors">0{index + 1}</span>
                                </div>

                                <p className="text-sm text-secondary font-light leading-relaxed mb-8">
                                    {cap.desc}
                                </p>

                                <ul className="space-y-3 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                    {cap.items.map((item) => (
                                        <li key={item} className="text-sm text-primary/90 font-extralight flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-border group-hover:bg-accent/50 transition-colors shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
