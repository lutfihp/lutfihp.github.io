export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Lutfi Prasetya
        </span>
        <span className="font-mono text-xs text-muted">
          Built with Next.js · Tailwind · deployed on GitHub Pages
        </span>
      </div>
    </footer>
  )
}
