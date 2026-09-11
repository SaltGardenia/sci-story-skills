# Claim Pattern Library — mining spec

Output file: `knowledge/patterns/claim-patterns.md`. Defines how Layer 1 mines how best papers *state and scope* claims, and how Layer 2/3 apply the same standards.

## 1. Claim levels (master §11)

| Level | Example form | Evidence that suffices |
|---|---|---|
| descriptive | "X exhibits property P" | direct measurement on the studied objects |
| comparative | "X outperforms Y on Z" | matched comparison, fair protocol |
| mechanistic | "the improvement comes from component M" | ablation isolating M + mechanism probe |
| causal | "A causes B" | controlled intervention, not correlation |
| generalization | "X holds across tasks/domains/scales" | multi-setting evaluation with diversity |
| theoretical | "X has property P provably" | theorem + assumptions stated |
| practical | "X is usable in real workflow W" | real-workload study, cost accounting |

**Iron rule: Claim Strength ≤ Evidence Strength.** Never silently convert observation into interpretation into causality — these are three different claims needing three different evidence classes.

## 2. Claim-Evidence Graph (master §10)

Per claim: `Claim → Reason → Hypothesis → Experiment → Evidence → Interpretation`. Record evidence class:

`Direct / Indirect / Correlational / Comparative / Ablation / Qualitative / Quantitative / Theoretical / Empirical / Negative / Missing`

Negative evidence (failed controls, rejected hypotheses) is a pattern to mine — best papers report it deliberately.

## 3. Strong-term audit list (master §12)

Flag on sight: `novel, first, significant, substantially, robust, general, scalable, efficient, effective, superior, interpretable, task-aware, real-time, state-of-the-art`. For each occurrence record: claim id, evidence pointer, sufficiency verdict (sufficient / partially / unsupported), alternative explanations, and the action taken: `retain / weaken / support-with-experiment / remove`.

## 4. Contribution patterns to mine (master §30)

- Bottleneck-naming form: "We identify X as the key bottleneck and address it through Y."
- Claim-with-scope form: contribution sentences that carry their own scope ("on standard benchmarks", "without additional data").
- Contribution→novelty→evidence triple: each contribution must be checkable against all three.
- Engineering detail NOT promoted to contribution (mine how authors explicitly avoid this).

## 5. Novelty taxonomy (master §31)

When mining claims, tag the novelty type: Conceptual (new problem framing) / Algorithmic (new mechanism) / Theoretical (new analysis) / Empirical (new observation) / Engineering (new system). Record cases where the paper itself explicitly disambiguates (e.g., "our contribution is not a new architecture but a new explanation").

## 6. Overclaiming calibration

Mine how best papers *weaken* wording where evidence is thin: hedged verbs (`suggests`, `indicates`, `is consistent with`), explicit scope restatement, and "we do not claim" sentences. These negative-calibration moves are high-value patterns — record where they appear (usually: interpretation of ablations, discussion sections, and after strong benchmark claims).

## Entry format

Same `P00X` format as `narrative-patterns.md` (Name / Frequency / Structure / Domains / Evidence / Why it works / Observed in / Caveats), with the addition of a `Canonical form:` line quoting the claim-shaped sentence pattern (abstracted, not copied wording).
