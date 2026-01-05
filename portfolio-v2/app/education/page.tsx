"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

export default function EducationPage() {
    const education = [
        {
            school: "Malnad College of Engineering",
            location: "Hassan, India",
            degree: "Bachelor of Engineering in Information Science and Engineering",
            score: "CGPA - 7.5",
            period: "Dec. 2022 – June 2026",
        },
        {
            school: "Sarvodaya PU College",
            location: "Tumkur, India",
            degree: "PCME",
            score: "Percentage - 72%",
            period: "June 2021 – April 2022",
        },
        {
            school: "Maruthi Vidya kendra",
            location: "Tumkur, India",
            degree: "CBSE",
            score: "Percentage - 70.2%",
            period: "2019 – 2020",
        },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent mb-4">
                            Education
                        </h1>
                        <p className="text-muted-foreground">
                            My academic journey and qualifications.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm hover:shadow-glow relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                    <div>
                                        <h2 className="text-xl font-bold text-foreground">{edu.school}</h2>
                                        <span className="text-sm text-primary font-medium">{edu.degree}</span>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <div className="text-sm text-muted-foreground">{edu.location}</div>
                                        <div className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded inline-block mt-1">{edu.period}</div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-border/30">
                                    <span className="text-sm font-semibold text-muted-foreground">Performance: </span>
                                    <span className="text-foreground">{edu.score}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
