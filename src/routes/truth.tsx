import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ThreadlineShell } from "@/components/layout/threadline-shell";
import { StatusMark } from "@/components/threadline/status-mark";
import { StatusLabel } from "@/components/threadline/status-label";
import { claims } from "@/lib/threadline-data";

export const Route = createFileRoute("/truth")({
  head: () => ({
    meta: [
      { title: "Truth State — Project Atlas" },
      { name: "description", content: "Review the current, superseded, and unverified claims in Project Atlas." },
      { property: "og:title", content: "Truth State — Project Atlas" },
      { property: "og:description", content: "Review the current, superseded, and unverified claims in Project Atlas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TruthPage,
});

function TruthPage() {
  return (
    <ThreadlineShell>
      <section className="py-8 sm:py-10">
        <p className="font-mono text-xs text-slate">fig. 02 · living source of truth</p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl">What the record says now</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">Current claims are the newest supported line. Superseded values remain visible so the path to the answer is never lost.</p>
      </section>
      <section className="divide-y divide-ink/10 border-y border-ink/15">
        {claims.map((claim) => (
          <article key={claim.id} className="grid gap-5 py-6 sm:grid-cols-[1.2fr_1fr_160px] sm:items-center">
            <div className="flex items-start gap-3">
              <StatusMark status={claim.status} label={claim.status} />
              <div>
                <p className="font-mono text-xs text-slate">{claim.id} · {claim.subject}</p>
                <h2 className="mt-1 font-serif text-2xl">{claim.currentValue}</h2>
                {claim.previousValue ? <p className="mt-1 font-mono text-xs text-slate"><span className="strike">{claim.previousValue}</span> <span className="text-slate">was proposed earlier</span></p> : <p className="mt-1 font-mono text-xs text-ochre">needs another source to verify</p>}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] text-slate">evidence</p>
              <p className="mt-1 text-sm text-slate">{claim.evidence.join(" · ")}</p>
              <p className="mt-2 font-mono text-[10px] text-slate">last verified {claim.lastVerified}</p>
            </div>
            <div className="flex items-center justify-between gap-4 sm:block sm:text-right">
              <StatusLabel status={claim.status} />
              <p className="mt-2 font-mono text-xs text-slate">{Math.round(claim.confidence * 100)}% confidence</p>
            </div>
          </article>
        ))}
      </section>
      <div className="mt-10 flex items-start gap-3 border-t border-ink/15 pt-5">
        <CheckCircle2 size={17} className="mt-0.5 text-teal" strokeWidth={1.5} />
        <p className="max-w-xl font-serif text-lg leading-relaxed text-slate">The current picture is coherent on authentication and payment. PostgreSQL remains a credible proposal, not yet a confirmed fact.</p>
      </div>
      <p className="mt-8 flex items-center gap-2 font-mono text-xs text-teal"><ArrowRight size={14} /> Review open contradictions</p>
    </ThreadlineShell>
  );
}