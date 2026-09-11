# Evidence Pattern Library — mining spec

Output file: `knowledge/patterns/evidence-patterns.md`. Mines how best papers assemble evidence: what counts as proof, in what order it is presented, and how much of it a claim needs.

## 1. Evidence classes (master §10)

`Direct / Indirect / Correlational / Comparative / Ablation / Qualitative / Quantitative / Theoretical / Empirical / Negative / Missing`

For each mined paper, the Paper DNA records per claim: evidence class + pointer (table/figure/theorem). The library aggregates: which claim levels get which evidence classes (see claim-patterns.md §1 table) and where exceptions occur.

## 2. Evidence-density patterns to mine

- **Evidence density** (§34 dimension): roughly how many independent evidence pieces back the central claim (main table + ablation + mechanism probe + qualitative + analysis), vs how few back peripheral claims. Best papers concentrate evidence on the core claim.
- **Parity-then-win ordering**: first show "no loss on X", then "large gain on Y" — the order is chosen so the reader's objection is answered before it forms.
- **Matched-comparison discipline**: best papers pre-empt the "unfair baseline" attack by explicitly matching budgets/parameters and saying so in the table caption or setup text.
- **Mechanism probe**: a small experiment that shows the internal signal behaves as the hypothesis predicts (not just that final metrics improve). Record where it appears relative to ablations.
- **Sanity-check visuals**: qualitative figures placed to build intuition BEFORE quantitative tables — or after, to confirm. Mine which order dominates per domain.
- **Negative results as support**: controls that failed, hypotheses rejected — recorded openly and used to rule out rival explanations.

## 3. Missing-evidence detection (feeds Layer 3)

From the corpus, build a checklist of evidence pieces reviewers of THIS genre expect, e.g. for efficiency claims: quality-vs-cost curve, wall-clock and memory accounting, hardware spec; for generalization claims: cross-dataset and cross-architecture transfer; for mechanism claims: ablation + probe. Each best-paper DNA contributes to this genre checklist; the aggregate becomes the standard Layer 2 uses when designing experiments (experiment-design.md) and Layer 3 when hunting missing evidence.

## 4. Interpretation discipline patterns

Mine how authors keep interpretation honest:
- observation sentence vs interpretation sentence pairing ("X decreased" → "consistent with the hypothesis that ...")
- explicit alternative-exclusion ("gains are not attributable to extra parameters, since ...")
- scope-limiting closers ("this suggests, at least in the regimes tested, ...")

## Entry format

`P00X` format (see narrative-patterns.md §2) with an added `Placement:` line — where in the paper the pattern typically appears (abstract / setup / results / discussion).
