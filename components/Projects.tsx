import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "Time Series Diagnostics & Forecasting",
    description:
      "Diagnosed and fixed a broken ARIMA pipeline, corrected it to SARIMA, verified residuals using Ljung-Box tests, and modeled stock market volatility with GARCH(1,1). Built reusable forecasting and evaluation tools with strong statistical validation.",
    tags: ["Python", "statsmodels", "pandas", "matplotlib"],
    github:
      "https://github.com/guanyuq03/ECON5200-Applied-Data-Analytics-in-Economics/tree/main/Lab%2021",
  },
  {
    title: "FedSpeak Sentiment Analysis (NLP)",
    description:
      "Diagnosed and fixed a broken NLP pipeline, improved tokenization and sentiment measurement, and compared TF-IDF and embedding-based models to analyze FOMC documents and classify monetary policy tone.",
    tags: ["Python", "scikit-learn", "NLTK", "sentence-transformers"],
    github:
      "https://github.com/guanyuq03/ECON5200-Applied-Data-Analytics-in-Economics/tree/main/Lab%2023",
  },
  {
    title: "Causal Machine Learning with DML",
    description:
      "Fixed a broken Double Machine Learning implementation, estimated treatment effects using DoubleML and Random Forest, and analyzed heterogeneous treatment effects using Causal Forest methods.",
    tags: ["Python", "DoubleML", "EconML", "scikit-learn"],
    github:
      "https://github.com/guanyuq03/ECON5200-Applied-Data-Analytics-in-Economics/tree/main/Lab%2024",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.08] dark:hover:shadow-black/30 hover:border-[var(--primary)]">
      <div className="flex-1">
        <h3 className="text-base font-semibold text-[var(--fg)] mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-1 border-t border-[var(--border)]">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold)] hover:text-[var(--gold-hover)] transition-colors"
        >
          View Code
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-2">
            Work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)]">
            Selected Projects
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2 max-w-lg">
            Applied research at the intersection of econometrics, machine
            learning, and data engineering.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
