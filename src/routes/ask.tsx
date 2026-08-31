import { FormEvent, useState } from "react";
import { ArrowUpRight, CornerDownLeft } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ThreadlineShell } from "@/components/layout/threadline-shell";
import { threadEvents } from "@/lib/threadline-data";

export const Route = createFileRoute("/ask")({
  head: () => ({
    meta: [
      { title: "Ask the Thread — Project Atlas" },
      { name: "description", content: "Ask an evidence-grounded question about Project Atlas." },
      { property: "og:title", content: "Ask the Thread — Project Atlas" },
      { property: "og:description", content: "Ask an evidence-grounded question about Project Atlas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AskPage,
});

function AskPage() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuestion = question.trim();
    if (nextQuestion) setSubmitted(nextQuestion);
  }

  return (
    <ThreadlineShell>
      <section className="py-8 sm:py-10">
        <p className="font-mono text-xs text-slate">fig. 04 · evidence-grounded inquiry</p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl">Ask the thread</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">Ask about a decision, a source, or the current state. Answers stay close to the record.</p>
      </section>
      <form onSubmit={handleSubmit} className="border border-ink/15 bg-paper/70 p-5 sm:p-6">
        <label htmlFor="question" className="font-mono text-xs text-slate">your question</label>
        <textarea id="question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="When did the team decide on Firebase?" rows={4} className="mt-3 w-full resize-none border-0 border-b border-line bg-transparent py-2 text-base text-ink outline-none placeholder:text-slate/70 focus:border-teal" />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button type="submit" variant="ink"><ArrowUpRight size={15} /> Ask the record</Button>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate"><CornerDownLeft size={12} /> enter to run</span>
        </div>
      </form>
      {submitted ? (
        <section className="mt-8 border-t border-ink/15 pt-6">
          <p className="font-mono text-xs text-teal">answer · grounded in {threadEvents.length} dated nodes</p>
          <h2 className="mt-2 font-serif text-2xl">The record points to Firebase.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">“{submitted}” maps to the 19 February WhatsApp thread, where the team says JWT is taking too long and proposes switching to Firebase. The 8 March repository log confirms the change in implementation.</p>
          <div className="mt-5 border-l-2 border-teal pl-4 font-mono text-[10px] text-slate">whatsapp-thread.txt · 2026-02-19<br />github-log.json · 2026-03-08</div>
        </section>
      ) : (
        <section className="mt-10 border-t border-ink/15 pt-5">
          <p className="font-mono text-xs text-slate">try asking</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["When did the team decide on Firebase?", "What is still unverified?", "Which payment provider is current?"].map((prompt) => (
              <button key={prompt} type="button" onClick={() => setQuestion(prompt)} className="border border-line px-3 py-2 text-left text-sm text-slate transition-colors hover:border-teal hover:text-teal">{prompt}</button>
            ))}
          </div>
        </section>
      )}
    </ThreadlineShell>
  );
}