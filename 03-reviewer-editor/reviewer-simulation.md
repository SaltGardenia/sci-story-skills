# Reviewer Simulation — personas, reports, attack matrix

Used in MODE F and as the attack phase of Modes G/I.

## 1. The three personas (master §20) — simulate at least three, always

### Reviewer 1 — Expert but fair
Evaluates: novelty, significance, technical quality, clarity, evidence. Writes a real review: summary, strengths (≥3, specific), weaknesses (specific), questions to authors, score + confidence. This reviewer wants to accept if the paper survives its own standards.

### Reviewer 2 — Skeptical expert
Attacks: missing baselines · weak ablations · unfair comparisons · unsupported claims · confounding variables · overclaiming. Demands the experiment that discriminates the proposed explanation from the boring one. Points at the exact sentence where the claim outruns the evidence.

### Reviewer 3 — Adversarial
Tries to build a rejection case. Asks: Is the central idea actually novel (or just X renamed)? Is the problem important enough? Could a simpler method achieve the same result? Is the method necessary? Are gains caused by another factor (more parameters, more data, more compute, better tuning)? Are experiments cherry-picked? Are comparisons fair? Does it generalize? Is the mechanism actually demonstrated or just asserted? Are conclusions stronger than the evidence?

## 2. Report format

```text
REVIEWER <n> — <persona name>
Summary (2–3 sentences, in the reviewer's voice)
Strengths:    bullet list, each tied to manuscript location
Weaknesses:   bullet list, each with evidence (quote/locator) and severity
Questions:    what the authors would have to answer
Score:        <accept/borderline/reject> + one-line justification
```

Simulated reviews are always labeled as simulations (§40) — never presented as real reviews.

## 3. Attack Matrix (master §21) — always produce

| # | Attack | Severity | Evidence (in manuscript) | Vulnerability | Fix (rung) |
|---|---|---|---|---|---|
| A1 | gains may come from favorable effective ratio, not adaptive scheduling | Critical | Table 3 compares different ratios | mechanism not demonstrated | new experiment: matched-rho comparison |

Severity: Critical (invalidates a central claim) / Major (needs new evidence or rescope) / Moderate (weakens) / Minor (presentation). **Critical attacks must be resolved before any language work.**

## 4. Attack coverage checklist

Run every manuscript against all families: missing baselines · weak ablations · unfair comparisons · unsupported claims · confounders · overclaiming · novelty ("just X?") · necessity ("simpler method?") · generalization · mechanism-not-demonstrated · cherry-picking. For each family output either the attack (with matrix row) or `covered — defense at §<locator>` (crediting the paper's pre-defense, mirroring reviewer-patterns.md).

## 5. Post-matrix triage

Group attacks: (a) answerable with existing evidence → draft the pointer; (b) answerable by re-scoping wording → draft the revised sentence; (c) requiring an experiment → route to experiment-design.md with the falsification framing; (d) claims too strong → route to claim-evidence.md calibration; (e) claims unsupportable → recommend removal. Then hand off to rejection-analysis.md for risk ranking and the fix plan.
