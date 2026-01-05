"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "AI Teacher Platform",
        description: "An AI-powered educational platform featuring interactive AI avatars for personalized lessons and course management.",
        tags: ["React", "Python", "AI", "Education"],
        links: { github: "https://github.com/ADI14M/ai-teacher-platform", demo: "https://ai-teacher-platform-one.vercel.app/login" },
    },
    {
        title: "Real-Time Big Data System",
        description: "Streamed real-time stock & BTC data via Spark Structured Streaming. Containerized pipeline with Docker and integrated yFinance & Binance APIs.",
        tags: ["Python", "Kafka", "Spark", "Docker"],
        links: { github: "#", demo: "#" },
    },
    {
        title: "Stock Prediction & Sentiment Tool",
        description: "Built LSTM model with ~75% accuracy. Integrated FinBERT for financial report signal extraction and Twitter sentiment analysis.",
        tags: ["LSTM", "HuggingFace", "FinBERT", "Python"],
        links: { github: "https://github.com/ADI14M/Gen-AI-ML-based-stock-market-prediction", demo: "#" },
    },
    {
        title: "LogLLM Anomaly Detection",
        description: "Embedded parsed logs into ChromaDB and trained LSTM for sequence anomaly detection using LangChain retrieval pipelines.",
        tags: ["LangChain", "ChromaDB", "LSTM", "LLM"],
        links: { github: "https://github.com/ADI14M/LogLLM", demo: "#" },
    },
    {
        title: "d-chat (Decentralized Chat)",
        description: "Secure chat app using MetaMask auth, AES-256 for encryption, and IPFS/Filecoin for decentralized file storage.",
        tags: ["Solidity", "IPFS", "Ethereum", "React"],
        links: { github: "#", demo: "#" },
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground">
                        A selection of projects exploring AI, Big Data, and Web3.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <Link href={project.links.github} className="text-muted-foreground hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </Link>
                                    <Link href={project.links.demo} className="text-muted-foreground hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
