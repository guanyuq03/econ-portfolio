export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Guanyu Qu
        </p>
        <p className="text-xs text-[var(--muted)]">
          Data Science &amp; Economics · Northeastern University
        </p>
      </div>
    </footer>
  );
}
