"use client";

import { motion } from "framer-motion";

const features = [
    {
        label: "Languages",
        items: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
    },
    {
        label: "Cloud & DevOps",
        items: ["AWS", "Docker", "Kafka", "PySpark", "CI/CD"],
    },
    {
        label: "Visualization",
        items: ["Tableau", "PowerBI", "Excel", "Matplotlib"],
    },
    {
        label: "Tools",
        items: ["Git", "VS Code", "Ubuntu", "Jupyter"],
    },
];

export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        A comprehensive toolkit for modern data engineering and full-stack development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm hover:shadow-glow"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-4">
                                {feature.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {feature.items.map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
