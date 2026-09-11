# Idea Analysis — diagnosis, falsification, central story

Used in MODE B (research idea) and as the entry step of Modes C/D/E. **No paper writing happens in this file.**

## 1. RESEARCH STORY DIAGNOSIS box (default first output)

Always open with this box (ASCII, as designed in the hardcore spec):

```text
┌─────────────────────────────────────────────┐
│ RESEARCH STORY DIAGNOSIS                    │
└─────────────────────────────────────────────┘

Existing paradigm:  <how the field currently thinks about / solves this>
        ↓
Problem:            <what breaks in practice, concretely>
        ↓
Gap:                <what remains unresolved and why prior fixes don't cover it>
        ↓
Observation:        <the evidence or reasoning that reveals the gap>
        ↓
Hypothesis:         <what should be true if the insight is correct>
        ↓
Method:             <the mechanism that tests / operationalizes the hypothesis>
        ↓
Core claim:         <the one claim the paper will stake everything on>
        ↓
Required evidence:  <the evidence a skeptical reviewer would demand>
```

Rules:
- Each row is 1–2 lines. If a row needs a paragraph, the story is not crisp yet — say that.
- If a row is missing (e.g., the user has a method but no gap), leave it visibly empty and name it as the risk.
- Tag rows: `Known` (user-provided), `Inferred` (your reasoning), `Hypothesized`. Never pass Inferred off as Known (§39).
- After the box, list `Assumptions:` (what you presumed) and `What would change this diagnosis:` — then ask at most the 1–2 high-value questions that matter (§38).

## 2. Full analysis fields (master §8)

When the user wants depth beyond the box, expand each: Research Problem; Why It Matters; Existing Paradigm; Limitation; Research Gap; Central Observation; Central Insight; Hypothesis; Method; Falsifiable Predictions; Claims; Evidence; Reviewer Attacks (preview — full simulation is Layer 3).

## 3. Falsification module (master §33) — mandatory

For the idea, produce:

```text
Falsifiable hypothesis:      <H: specific, testable>
Alternative hypothesis:      <H': the boring rival explanation>
Minimal discriminating experiment:  <cheapest experiment whose outcome separates H from H'>
Expected outcome if H true:  <...>
Expected outcome if H' true: <...>
Interpretation rule:         <what we may conclude under each outcome — no more>
```

Example shape (from the spec's token-merging scenario):
- H: attention-derived concentration guides compression allocation better than fixed budgets.
- H': the gain merely comes from selecting a more favorable effective compression ratio.
- Discriminating experiment: matched-rho comparison — equalize the effective compression ratio and re-measure.

This module is what blocks post-hoc storytelling: decide NOW what result would mean the idea is wrong.

## 4. Central Story Test (master §9)

Write and show the user:
- Thesis: "This paper argues/shows that ______ because ______, and therefore proposes ______."
- One-sentence Problem / Gap / Insight / Method / Evidence / Significance — and verify the six form a coherent chain (each sentence should follow from the previous).

If the thesis cannot be written without hedging, output `STORY INCOMPLETE` and diagnose exactly which chain link is missing. Do not proceed to architecture until resolved or the user explicitly accepts the risk.

## 5. Idea quality verdict

End the analysis with an honest verdict block:

```text
STRENGTHS:      <what is genuinely strong>
WEAKNESSES:     <real problems — novelty, necessity, feasibility>
NOVELTY TYPE:   <conceptual / algorithmic / theoretical / empirical / engineering — §31>
VERDICT:        <proceed / proceed-with-rescope / needs-rethink — and why>
NEXT STEP:      <story lock → claim-evidence map → experiment matrix>
```
