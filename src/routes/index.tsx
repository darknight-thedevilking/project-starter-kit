import { createFileRoute } from "@tanstack/react-router";
import { TruthSnapshot } from "@/components/threadline/truth-snapshot";
import { SourceTrail } from "@/components/threadline/source-trail";
import { ContradictionResolution } from "@/components/threadline/contradiction-resolution";
import { ArtifactList } from "@/components/threadline/artifact-list";
import { ThreadlineShell } from "@/components/layout/threadline-shell";
import { project } from "@/lib/threadline-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Project Atlas — Threadline" },
      { name: "description", content: "Review Project Atlas's current truth state and source trail." },
      { property: "og:title", content: "Project Atlas — Threadline" },
      { property: "og:description", content: "Review Project Atlas's current truth state and source trail." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThreadlineShell>
      <section className="py-8 sm:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-slate">case overview</p>
            <h1 className="mt-1 font-serif text-3xl sm:text-4xl">The record, reconciled</h1>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate sm:text-right">A living source of truth assembled from the artifacts your team left behind.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-y-5 border-y border-ink/15 py-4 sm:grid-cols-4 sm:gap-0">
          <div><p className="font-mono text-[10px] text-slate">Sources</p><p className="mt-1 font-serif text-2xl">{project.sourceCount}</p></div>
          <div className="sm:border-l sm:border-line sm:pl-6"><p className="font-mono text-[10px] text-slate">Claims</p><p className="mt-1 font-serif text-2xl">{project.claimCount}</p></div>
          <div className="sm:border-l sm:border-line sm:pl-6"><p className="font-mono text-[10px] text-slate">Resolved</p><p className="mt-1 font-serif text-2xl text-teal">8</p></div>
          <div className="sm:border-l sm:border-line sm:pl-6"><p className="font-mono text-[10px] text-slate">Needs review</p><p className="mt-1 font-serif text-2xl text-rust">2</p></div>
        </div>
      </section>
      <TruthSnapshot />
      <SourceTrail />
      <ContradictionResolution preview />
      <ArtifactList />
    </ThreadlineShell>
  );
}
