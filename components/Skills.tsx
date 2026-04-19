interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "R", "SQL", "TypeScript"],
  },
  {
    category: "Data & ML",
    skills: ["pandas", "NumPy", "scikit-learn", "PyTorch", "HuggingFace"],
  },
  {
    category: "Visualization",
    skills: ["Plotly", "Matplotlib", "Seaborn", "Tableau"],
  },
  {
    category: "Tools & Infra",
    skills: ["Git", "GitHub", "Jupyter", "Docker", "PostgreSQL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--card)]">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-2">
            Toolkit
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)]">Skills</h2>
          <p className="text-sm text-[var(--muted)] mt-1">
            Technologies and tools I work with
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-[var(--fg)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
