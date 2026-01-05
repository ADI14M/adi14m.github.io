"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
                        Portfolio
                    </h2>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                        Hi, I'm <span className="text-primary">Aditya M</span>
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
                        Developer · Data Engineer · ML Enthusiast
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105"
                        >
                            <span className="relative">View Work</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/resume.pdf"
                            className="group inline-flex items-center gap-2 bg-secondary text-secondary-foreground border border-border px-8 py-3 rounded-full font-semibold hover:bg-secondary/80 transition-all"
                            target="_blank"
                        >
                            <span>Download Resume</span>
                            <Download className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
