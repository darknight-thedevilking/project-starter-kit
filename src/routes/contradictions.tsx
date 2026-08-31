import { createFileRoute } from "@tanstack/react-router";
import { ThreadlineShell } from "@/components/layout/threadline-shell";
import { ContradictionResolution } from "@/components/threadline/contradiction-resolution";

export const Route = createFileRoute("/contradictions")({
  head: () => ({
    meta: [
      { title: "Contradictions — Project Atlas" },
      { name: "description", content: "Resolve the open contradictions in Project Atlas's evidence record." },
      { property: "og:title", content: "Contradictions — Project Atlas" },
      { property: "og:description", content: "Resolve the open contradictions in Project Atlas's evidence record." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContradictionsPage,
});

function ContradictionsPage() {
  return (
    <ThreadlineShell>
      <section className="py-8 sm:py-10">
        <p className="font-mono text-xs text-slate">fig. 03 · human review</p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl">Where the record disagrees</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">Two source pairs need a human decision. Resolve a contradiction when the newest evidence reflects the project’s actual direction.</p>
      </section>
      <ContradictionResolution />
    </ThreadlineShell>
  );
}