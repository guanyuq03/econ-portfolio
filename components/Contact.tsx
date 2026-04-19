import { Mail, Link } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "qu.gu@northeastern.edu",
    href: "mailto:qu.gu@northeastern.edu",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/guanyuqu",
    href: "https://www.linkedin.com/in/guanyuqu/",
    Icon: Link,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)]">
            Get in Touch
          </h2>
          <p className="text-sm text-[var(--muted)] mt-1 max-w-md">
            Open to research collaborations, internships, and full-time
            opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {contacts.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 px-6 py-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)] transition-colors group"
            >
              <div className="p-2 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--gold)]">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] mb-0.5">{label}</p>
                <p className="text-sm font-medium text-[var(--fg)] group-hover:text-[var(--primary)] transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
