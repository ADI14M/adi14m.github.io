"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
    const [state, handleSubmit] = useForm("YOUR_FORM_ID");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-20 bg-background text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-card p-8 rounded-2xl border border-primary/20 inline-block"
                    >
                        <h2 className="text-2xl font-bold text-primary mb-2">Message Sent!</h2>
                        <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Open for internships, open-source contributions, and data engineering roles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Email</h3>
                                <Link href="mailto:adityamsharma2010@gmail.com" className="text-muted-foreground hover:text-primary">
                                    adityamsharma2010@gmail.com
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Phone</h3>
                                <Link href="tel:+918277146493" className="text-muted-foreground hover:text-primary">
                                    +91-827-714-6493
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">LinkedIn</h3>
                                <Link href="https://linkedin.com/in/aditya-m-5200b0242/" target="_blank" className="text-muted-foreground hover:text-primary">
                                    linkedin.com/in/Aditya-M
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">GitHub</h3>
                                <Link href="https://github.com/ADI14M" target="_blank" className="text-muted-foreground hover:text-primary">
                                    github.com/ADI14M
                                </Link>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="Your Name"
                                required
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="your@email.com"
                                required
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="How can we collaborate?"
                                required
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Open for internships, open-source contributions, and data engineering roles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Email</h3>
                                <Link href="mailto:adityamsharma2010@gmail.com" className="text-muted-foreground hover:text-primary">
                                    adityamsharma2010@gmail.com
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Phone</h3>
                                <Link href="tel:+918277146493" className="text-muted-foreground hover:text-primary">
                                    +91-827-714-6493
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">LinkedIn</h3>
                                <Link href="https://linkedin.com/in/aditya-m-5200b0242/" target="_blank" className="text-muted-foreground hover:text-primary">
                                    linkedin.com/in/Aditya-M
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-4 rounded-full text-primary">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">GitHub</h3>
                                <Link href="https://github.com/ADI14M" target="_blank" className="text-muted-foreground hover:text-primary">
                                    github.com/ADI14M
                                </Link>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 bg-card p-8 rounded-2xl border border-border">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="How can we collaborate?"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
