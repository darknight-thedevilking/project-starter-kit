import { Link } from "@tanstack/react-router";
import { FileText, GitBranch, HelpCircle, ListTree, Scale, Download } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { project } from "@/lib/threadline-data";

const navItems = [
  { to: "/", label: "Overview", icon: ListTree },
  { to: "/timeline", label: "Thread", icon: GitBranch },
  { to: "/truth", label: "Truth", icon: Scale },
  { to: "/contradictions", label: "Contradictions", icon: FileText },
  { to: "/ask", label: "Ask", icon: HelpCircle },
] as const;

export function ThreadlineShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-paper font-sans text-ink antialiased">
      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8 sm:py-10 lg:px-10">
        <header className="border-b border-ink/15 pb-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Link to="/" className="font-mono text-xs text-teal transition-colors hover:text-ink">
                Threadline
              </Link>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-serif text-3xl leading-none sm:text-4xl">{project.name}</span>
                <span className="font-mono text-[10px] text-slate">case / {project.id}</span>
              </div>
              <p className="mt-2 text-sm text-slate">{project.description}</p>
            </div>
            <div className="flex items-start justify-between gap-5 sm:text-right">
              <div>
                <p className="font-mono text-xs text-slate">source trail</p>
                <p className="mt-1 font-mono text-xs text-ink">
                  {project.sourceCount} sources · reconciled {project.reconciled}
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={() => window.print()} title="Print the current dossier">
                <Download size={13} strokeWidth={1.7} />
                <span className="hidden sm:inline">Print dossier</span>
              </Button>
            </div>
          </div>
          <nav aria-label="Case views" className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                activeProps={{ className: "text-teal" }}
                inactiveProps={{ className: "text-slate" }}
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-ink"
              >
                <Icon size={14} strokeWidth={1.7} />
                {label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="mt-14 flex flex-col gap-2 border-t border-ink/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] text-slate">Reconciled from {project.sourceCount} conflicting sources</p>
          <p className="font-mono text-[10px] text-teal">record status: living</p>
        </footer>
      </div>
    </main>
  );
}