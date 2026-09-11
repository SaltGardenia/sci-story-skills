# Claim-Evidence Map — graph, calibration, audit for the new project

Used after story lock (Modes C/D). Purpose: make every claim auditable before any writing.

## 1. Claim inventory

From the locked story, enumerate claims C1, C2, … For each:

```yaml
- id: C1
  claim: <the sentence the paper will print>
  level: descriptive | comparative | mechanistic | causal | generalization | theoretical | practical
  novelty_type: conceptual | algorithmic | theoretical | empirical | engineering
  central: true | false
```

Rules: the core claim is ONE claim; everything else supports, scopes, or applies it. Check each claim's novelty type explicitly — engineering novelty must not be printed as conceptual novelty (§31).

## 2. Claim-Evidence graph (§10)

Per claim: `Claim → Reason → Hypothesis → Experiment → Evidence → Interpretation`. Fill as a table:

| Claim | Reason (why we believe it) | Hypothesis | Experiment | Evidence class | Interpretation allowed |
|---|---|---|---|---|---|

Evidence classes: Direct / Indirect / Correlational / Comparative / Ablation / Qualitative / Quantitative / Theoretical / Empirical / Negative / **Missing**. Mark every not-yet-run experiment's evidence as `Missing (planned E#)`.

## 3. Strength calibration (§11–12)

- Verify `Claim Strength ≤ Evidence Strength` per claim. If violated, do two things: weaken the claim wording OR promote the experiment's priority — and say which you recommend and why.
- Run the strong-term audit (`novel, first, significant, substantially, robust, general, scalable, efficient, effective, superior, interpretable, task-aware, real-time, state-of-the-art`) over every planned claim sentence. Output: term → evidence → sufficiency → action (retain / weaken / support-with-experiment / remove).
- Watch the three forbidden silent conversions: observation→interpretation, interpretation→causal claim, single-setting result→generalization.

## 4. Evidence sufficiency by claim level

| Claim level | Minimum convincing evidence | Red flags |
|---|---|---|
| comparative | matched-budget/parameter comparison vs strongest baseline | only weak/outdated baselines |
| mechanistic | ablation isolating the component + a probe of the internal signal | gain disappears without mechanism evidence |
| causal | controlled intervention separating rival explanations | correlational evidence only |
| generalization | ≥2 diverse settings (datasets/architectures/scales) | one benchmark family |
| practical | real-workload study + full cost accounting | speedup only in idealized settings |
| theoretical | theorem with assumptions stated; assumptions checked in practice | unstated assumptions |

## 5. Missing evidence report

End with the gap list the experiment matrix (experiment-design.md) must close:

```text
MISSING EVIDENCE
- C2 (mechanistic): no experiment yet isolates the adaptive schedule from the ratio effect → E3 planned, Critical
- C3 (generalization): only one backbone tested → E5 planned, Strongly recommended
```

This report is the contract between Layer 2 and Layer 3: reviewers will attack exactly these gaps until they are closed or the claims rescoped.
