"use client";

import { motion } from "framer-motion";

const experience = [
    {
        company: "Quddle LLC",
        role: "SDE-1",
        period: "Remote, USA",
        description: [
            "Created Agentic AI systems and autonomous AI agents.",
            "Developed and fine-tuned custom AI models for production use cases.",
        ],
    },
    {
        company: "InUnity LLP",
        role: "Branding & Marketing Intern",
        period: "On-site, Mangalore",
        description: [
            "Supported brand initiatives and executed creative marketing campaigns.",
            "Translated technical value propositions into customer-facing materials.",
        ],
    },
    {
        company: "ME-RIISE Foundation",
        role: "Executive Lead",
        period: "Student Organization",
        description: [
            "Lead organization efforts for state-level hackathons.",
            "Managed teams and coordinated event logistics.",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Experience</h2>
                </motion.div>

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                            <div className="mb-2">
                                <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                                <span className="text-primary font-medium text-sm">{job.role}</span>
                                <span className="text-muted-foreground text-sm ml-4">• {job.period}</span>
                            </div>

                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                {job.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
