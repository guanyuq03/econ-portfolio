import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
          {/* Headshot */}
          <div className="shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center overflow-hidden shadow-sm">
              {/* Replace with: <Image src="/headshot.jpg" alt="Guanyu Qu" fill className="object-cover" /> */}
              <span className="text-6xl select-none">👤</span>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-semibold text-[var(--gold)] mb-4 tracking-widest uppercase">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--fg)] leading-[1.1] mb-5">
              Guanyu Qu
            </h1>
            <p className="text-base font-medium text-[var(--primary)] mb-6 tracking-wide">
              Data Science &amp; Economics · Northeastern University
            </p>
            <p className="text-base text-[var(--muted)] leading-[1.8] max-w-lg">
              Senior undergraduate applying machine learning, data analysis, and
              economic reasoning to real-world problems. Recent work spans time
              series forecasting, NLP, clustering, and causal inference.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg border border-[var(--border)] text-[var(--fg)] text-sm font-medium hover:bg-[var(--card)] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <a href="#projects" aria-label="Scroll down" className="text-[var(--muted)] animate-bounce">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
