import { createFileRoute } from "@tanstack/react-router";
import { ThreadlineShell } from "@/components/layout/threadline-shell";
import { Timeline } from "@/components/threadline/timeline";
import { TruthSnapshot } from "@/components/threadline/truth-snapshot";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "The Thread — Project Atlas" },
      { name: "description", content: "Follow Project Atlas decisions from proposal to confirmed implementation." },
      { property: "og:title", content: "The Thread — Project Atlas" },
      { property: "og:description", content: "Follow Project Atlas decisions from proposal to confirmed implementation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <ThreadlineShell>
      <section className="py-8 sm:py-10">
        <p className="font-mono text-xs text-slate">fig. 01 · chronological evidence</p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl">The Atlas thread</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">Every decision is kept in context. Branches mark where the record changed direction; the newest evidence carries the current line.</p>
      </section>
      <TruthSnapshot />
      <Timeline focused />
    </ThreadlineShell>
  );
}