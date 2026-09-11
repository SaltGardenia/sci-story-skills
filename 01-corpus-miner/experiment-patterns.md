# Experiment Pattern Library — mining spec

Output file: `knowledge/patterns/experiment-patterns.md`. Mines how best papers design experiment sections: which questions they answer, in what order, and how tables/figures are tied to claims.

## 1. Research-question taxonomy (master §13)

| RQ | Question | Typical experiment |
|---|---|---|
| RQ1 | Does the method improve the primary objective? | main benchmark vs strongest baselines |
| RQ2 | Does the central mechanism *cause* the improvement? | component swap / controlled ablation |
| RQ3 | Why does the method work? | mechanism probe, analysis study |
| RQ4 | Does it generalize? | cross-dataset / cross-architecture / cross-scale |
| RQ5 | Is it efficient? | cost accounting: params, FLOPs, wall-clock, memory |
| RQ6 | How robust is it? | perturbation, hyperparameter sensitivity, seeds |
| RQ7 | Where does it fail? | failure-case study, limitation experiments |

For each mined paper, record in Paper DNA which RQs the experiments answer and in what order. The library then reports: typical RQ coverage per venue/field, and ordering patterns (e.g., RQ1 → RQ2 → RQ3 → RQ4 is common; some papers lead with RQ3 when the insight is the contribution).

## 2. Experiment value classes (master §14)

`Critical` (a major claim is unsupported without it) · `Strongly recommended` (defuses a likely reviewer attack) · `Useful` (completeness) · `Optional` (presentation). Mine which experiments best papers actually run vs skip — best papers run few experiments but each maps to a claim; the pattern "table count ≈ claim count" is worth verifying explicitly.

## 3. Ablation engine (master §15)

Every ablation tests a hypothesis: `Hypothesis → Controlled Variable → Changed Variable → Result → Interpretation → Claim Supported`. Classify ablations: necessity (remove it, performance drops) / sufficiency (component alone suffices) / mechanism (isolates why) / sensitivity (hyperparameter response) / interaction (components together) / robustness / efficiency. Mine: do best papers prefer ablations that **discriminate between competing explanations** (e.g., "is the gain from adaptive scheduling or merely from a different effective ratio?") — and how they set up such discriminating controls.

## 4. Baseline fairness checklist (master §16)

Backbone · pretraining · dataset · resolution · training regime · augmentation · inference protocol · batch size · hardware · metric · computational accounting · parameter count · training cost · inference cost. Mine how best papers *demonstrate* fairness (matched-budget tables, reimplementation notes, "all methods use the same backbone" captions) — these demonstrations are patterns, and they feed the Layer 3 fairness audit.

## 5. Figure/table engine (master §19)

Every figure/table answers a scientific question: `Question → Evidence → Observation → Interpretation → Claim`. Mine: how main tables are organized (grouping by RQ? by baseline strength? by setting?), how captions carry interpretation, and how Figure 1 is used (usually: the central story in one picture — record what exactly Figure 1 shows across the corpus: the insight? the method? the result?).

## Entry format

`P00X` format (narrative-patterns.md §2), with `Matrix position:` noting where in the experiment section the pattern lives.
