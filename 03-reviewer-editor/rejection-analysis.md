# Rejection Analysis & Defense — risk ranking, defense ladder, minimum-cost fixes

Used in MODE G (and after MODE F). Input: attack matrix + manuscript (+ story lock if present).

## 1. Rejection risk ranking (master §22)

Rank plausible rejection reasons, highest risk first:

- **R1 — Fatal scientific issue** (central claim invalid or already published)
- **R2 — Major evidence gap** (core claim unsupported at current evidence)
- **R3 — Novelty concern** (delta over prior work too small or mischaracterized)
- **R4 — Experimental weakness** (protocol, baselines, statistics)
- **R5 — Narrative weakness** (gap not convincing, story incoherent)
- **R6 — Clarity issue** (reader cannot follow the argument)
- **R7 — Minor presentation issue** (typos, formatting, wording)

For each risk: likelihood (high/medium/low), the reviewer most likely to raise it (persona from reviewer-simulation.md), and the earliest place in the pipeline it can be killed. Iron rule: never present R6/R7 as if they were R1–R4, and never let language polishing consume effort while R1–R4 risks are open.

## 2. Defense ladder per major attack (master §23)

For every Critical/Major attack, walk down and stop at the first rung that yields convincing evidence:

1. **Existing evidence answers it** → point to table/figure/section; draft the pointer sentence.
2. **Wording clarification answers it** → draft the re-scoped sentence (claim-evidence calibration).
3. **Additional experiment needed** → cheapest *discriminating* experiment (falsification framing), with its hypothesis and both outcome interpretations.
4. **Claim too strong** → weaken to exactly what the evidence supports; provide the revised claim sentence.
5. **Claim unsupportable** → recommend removal; note what the paper loses and whether the story survives (if not → story re-lock discussion).

Record the chosen rung and why higher rungs fail.

## 3. Minimum-cost fix plan

| Attack | Rung chosen | Action | Cost | Closes risk |
|---|---|---|---|---|
| A1 | 3 | matched-rho ablation | 1 GPU-day | R2, R4 |

Order the plan by risk×cost. State explicitly what remains open after the plan and the residual rejection risk (even best papers carry some — the corpus analysis in reviewer-patterns.md §4 calibrates what is acceptable).

## 4. Revision execution (scientific revision)

- Apply fixes in pipeline order: science → logic → claim-evidence → defensibility → structure → paragraphs → sentences → English.
- Any fix that changes Problem/Gap/Insight/Core Claim requires a **story re-lock** (`relock:` entry, date, reason) — otherwise the fix is post-hoc storytelling (§44).
- Deliver two documents: (1) **Revision Plan** (this analysis), (2) **Revised Manuscript** with changes locatable (summary of edits per section).

## 5. Rebuttal drafting (when responding to real reviews)

For each real reviewer point: classify (R1–R7), choose the defense rung, draft the response with evidence pointers, and state what manuscript change accompanies it. Never fabricate results in a rebuttal (§40); if the answer requires an experiment that cannot be run in the rebuttal window, propose the smallest honest commitment and rescope the claim meanwhile.
