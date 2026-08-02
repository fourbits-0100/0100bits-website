import { motion } from "motion/react";
import { ArrowRight, Server, Smartphone, Globe, Workflow, Database, Bot } from "lucide-react";

const solutions = [
    {
        id: "websites",
        title: "Business Websites",
        subtitle: "High-performance digital presence.",
        desc: "We don't use templates. We build headless, blazing-fast web applications that serve as the premium front door to your business. Integrated with your CMS of choice and optimized for global edge delivery.",
        icon: <Globe className="w-8 h-8 text-white" />,
        capabilities: ["Headless CMS", "Edge Rendering", "Complex Interactions", "Analytics Integration"],
        renderText: "WebGL & Edge Render"
    },
    {
        id: "ai",
        title: "AI Employees",
        subtitle: "Cognition integrated into your operations.",
        desc: "Deploy autonomous systems that read emails, query databases, structure CRM data, and generate reports. Including Voice AI Agents capable of handling human-like phone calls in real-time.",
        icon: <Bot className="w-8 h-8 text-white" />,
        capabilities: ["Voice Agents", "RAG Pipelines", "Autonomous Triaging", "Report Generation"],
        diagram: ["Email", "LLM Processing", "CRM Update", "Action"]
    },
    {
        id: "enterprise",
        title: "Enterprise Platforms",
        subtitle: "Mission-critical internal systems.",
        desc: "Custom ERPs, huge internal dashboards, and operational software that breaks away from off-the-shelf limitations. Built on robust Postgres databases with intense security architectures.",
        icon: <Database className="w-8 h-8 text-white" />,
        capabilities: ["RBAC Security", "Real-time Metrics", "Audit Logging", "Complex Workflows"],
        renderText: "Command Center UI"
    },
    {
        id: "mobile",
        title: "Mobile Applications",
        subtitle: "Native performance, engineering precision.",
        desc: "iOS and Android applications built for high usage. We handle offline syncing, local device databases, and heavy background processing seamlessly.",
        icon: <Smartphone className="w-8 h-8 text-white" />,
        capabilities: ["React Native / Flutter", "Local First", "Push Notifications", "Hardware Access"],
        renderText: "Mobile Execution"
    },
    {
        id: "cloud",
        title: "Cloud Infrastructure",
        subtitle: "Architecture that scales infinitely.",
        desc: "Serverless deployments, Docker swarms, and Kubernetes architectures carefully designed to reduce cost while handling unpredictable scale spikes.",
        icon: <Server className="w-8 h-8 text-white" />,
        capabilities: ["AWS / GCP", "Infrastructure as Code", "Auto-scaling", "Zero-downtime Deployments"],
        diagram: ["Client", "Load Balancer", "Microservices", "Replicas"]
    },
    {
        id: "automation",
        title: "Workflow Automation",
        subtitle: "Eliminating the mundane.",
        desc: "Custom scripting and integrations tying together your fragmented SaaS applications into one continuous, automated data pipeline.",
        icon: <Workflow className="w-8 h-8 text-white" />,
        capabilities: ["API Integrations", "Webhook Parsing", "Data Transformation", "Event-driven Actions"],
        diagram: ["Trigger", "Serverless Function", "Data Sync", "Notification"]
    }
];

export function Solutions() {
    return (
        <div className="pb-32 bg-black text-white">
            {/* Hero */}
            <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-5xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[100px] font-extralight tracking-tighter mb-8 leading-none">
                        Engineering<br />Digital Systems.
                    </h1>
                    <p className="text-xl md:text-3xl text-secondary font-light max-w-3xl mx-auto leading-relaxed">
                        Every organization is unique.<br className="hidden md:block" />
                        The systems supporting it should be too.
                    </p>
                </motion.div>
            </section>

            {/* Solutions Fullscreen Sections */}
            <div className="flex flex-col">
                {solutions.map((sol, index) => (
                    <section key={sol.id} className="min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center border-b border-white/5 relative overflow-hidden">
                        {/* Background elements */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
                            <div className="w-[800px] h-[800px] rounded-full border border-white"></div>
                            <div className="absolute w-[600px] h-[600px] rounded-full border border-white"></div>
                        </div>

                        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.8 }}
                                className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                                    {sol.icon}
                                </div>
                                <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-4">{sol.title}</h2>
                                <h3 className="text-2xl text-accent font-light tracking-wide mb-8">{sol.subtitle}</h3>
                                <p className="text-xl text-secondary font-light leading-relaxed mb-12">
                                    {sol.desc}
                                </p>

                                <div className="mb-12">
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-6">Capabilities</h4>
                                    <ul className="grid grid-cols-2 gap-y-4">
                                        {sol.capabilities.map(cap => (
                                            <li key={cap} className="flex items-center gap-3 text-sm font-light text-white/80">
                                                <div className="w-1 h-1 rounded-full bg-accent"></div>
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a href="#contact" className="inline-flex items-center gap-3 text-sm font-light tracking-widest uppercase hover:text-accent transition-colors">
                                    Discuss this solution <ArrowRight className="w-4 h-4" />
                                </a>
                            </motion.div>

                            {/* Visual Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}
                            >
                                <div className="aspect-[4/3] rounded-3xl bg-surface/50 border border-white/10 p-8 flex flex-col justify-between overflow-hidden relative group">
                                    {/* Abstract render placeholder */}
                                    {sol.renderText && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                                            <div className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-black">
                                                {sol.renderText}
                                            </div>
                                        </div>
                                    )}

                                    {/* Flow Diagram */}
                                    {sol.diagram && (
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between">
                                                {sol.diagram.map((node, i) => (
                                                    <div key={node} className="flex flex-col md:flex-row items-center gap-4 w-full">
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            transition={{ delay: i * 0.2 + 0.5 }}
                                                            className="px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-xs font-light whitespace-nowrap"
                                                        >
                                                            {node}
                                                        </motion.div>
                                                        {i < sol.diagram.length - 1 && (
                                                            <motion.div
                                                                initial={{ scaleX: 0 }}
                                                                whileInView={{ scaleX: 1 }}
                                                                transition={{ delay: i * 0.2 + 0.6 }}
                                                                className="h-4 w-px md:h-px md:w-full bg-accent/50 origin-left"
                                                            ></motion.div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="relative z-10">
                                        <span className="text-[10px] uppercase font-mono tracking-widest opacity-50">SYS_{index + 1} / STATUS: ONLINE</span>
                                    </div>
                                    <div className="relative z-10 flex justify-end">
                                        <span className="font-mono text-xs opacity-30">ENCRYPTED</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
