export type ClaimStatus = "current" | "superseded" | "conflicting" | "unverified";

export type Claim = {
  id: string;
  subject: string;
  currentValue: string;
  previousValue?: string;
  status: ClaimStatus;
  confidence: number;
  evidence: string[];
  lastVerified: string;
};

export type ThreadEvent = {
  id: string;
  number: string;
  date: string;
  source: string;
  sourceType: string;
  summary: string;
  detail: string;
  status: ClaimStatus;
  branch: "left" | "right";
  tags: string[];
};

export type Contradiction = {
  id: string;
  subject: string;
  older: string;
  newer: string;
  detail: string;
  sources: string[];
};

export const project = {
  organization: "Meridian Labs",
  name: "Project Atlas",
  id: "ATLAS-001",
  description: "Atlas mobile app build",
  sourceCount: 4,
  claimCount: 12,
  reconciled: "2026-03-11",
};

export const claims: Claim[] = [
  {
    id: "CLM-001",
    subject: "Authentication",
    currentValue: "Firebase",
    previousValue: "JWT",
    status: "current",
    confidence: 0.96,
    evidence: ["architecture.pdf", "whatsapp-thread.txt", "github-log.json"],
    lastVerified: "2026-03-08",
  },
  {
    id: "CLM-002",
    subject: "Payment",
    currentValue: "Razorpay",
    previousValue: "Stripe",
    status: "current",
    confidence: 0.91,
    evidence: ["architecture.pdf", "meeting-transcript.md", "github-log.json"],
    lastVerified: "2026-03-08",
  },
  {
    id: "CLM-003",
    subject: "Database",
    currentValue: "PostgreSQL",
    status: "unverified",
    confidence: 0.68,
    evidence: ["architecture.pdf"],
    lastVerified: "2026-02-14",
  },
];

export const threadEvents: ThreadEvent[] = [
  {
    id: "EVT-001",
    number: "01",
    date: "2026-02-14",
    source: "architecture.pdf",
    sourceType: "architecture brief",
    summary: "The reference stack is recorded",
    detail: "The architecture brief names JWT authentication, PostgreSQL, and Stripe as the planned stack for Atlas.",
    status: "superseded",
    branch: "left",
    tags: ["JWT", "PostgreSQL", "Stripe"],
  },
  {
    id: "EVT-002",
    number: "02",
    date: "2026-02-19",
    source: "whatsapp-thread.txt",
    sourceType: "conversation",
    summary: "Authentication changes direction",
    detail: "A project conversation records that JWT is taking too long and the team will switch authentication to Firebase.",
    status: "conflicting",
    branch: "right",
    tags: ["JWT", "Firebase"],
  },
  {
    id: "EVT-003",
    number: "03",
    date: "2026-02-24",
    source: "meeting-transcript.md",
    sourceType: "team meeting",
    summary: "Payments move to Razorpay",
    detail: "The meeting transcript records Stripe being deferred in favor of Razorpay for the regional launch.",
    status: "conflicting",
    branch: "left",
    tags: ["Stripe", "Razorpay"],
  },
  {
    id: "EVT-004",
    number: "04",
    date: "2026-03-08",
    source: "github-log.json",
    sourceType: "commit log",
    summary: "The implementation confirms the changes",
    detail: "Commits confirm Firebase authentication and the Razorpay integration are present in the Atlas repository.",
    status: "current",
    branch: "right",
    tags: ["Firebase", "Razorpay"],
  },
];

export const contradictions: Contradiction[] = [
  {
    id: "CON-001",
    subject: "Authentication",
    older: "JWT",
    newer: "Firebase",
    detail: "The architecture brief proposes JWT. A later conversation and repository commit establish Firebase as the current implementation.",
    sources: ["architecture.pdf", "whatsapp-thread.txt", "github-log.json"],
  },
  {
    id: "CON-002",
    subject: "Payment",
    older: "Stripe",
    newer: "Razorpay",
    detail: "The architecture brief lists Stripe. The team meeting and repository history establish Razorpay as the current provider.",
    sources: ["architecture.pdf", "meeting-transcript.md", "github-log.json"],
  },
];

export const artifacts = [
  { name: "architecture.pdf", type: "specification", date: "14 Feb", size: "1.2 MB" },
  { name: "whatsapp-thread.txt", type: "conversation", date: "19 Feb", size: "18 KB" },
  { name: "meeting-transcript.md", type: "meeting notes", date: "24 Feb", size: "8 KB" },
  { name: "github-log.json", type: "repository log", date: "08 Mar", size: "21 commits" },
];

export function getStatusLabel(status: ClaimStatus) {
  return {
    current: "current",
    superseded: "superseded",
    conflicting: "conflict",
    unverified: "unverified",
  }[status];
}