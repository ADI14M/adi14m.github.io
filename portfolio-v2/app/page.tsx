import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/50 bg-secondary/20">
        <p>© {new Date().getFullYear()} Aditya M. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
