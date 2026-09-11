# Narrative Pattern Library — mining spec

Output file: `knowledge/patterns/narrative-patterns.md` (maintained by Layer 1 Stage 3). This document defines what to mine and the entry format.

## 1. Introduction rhetorical roles (master §7)

Label each introduction paragraph with exactly one dominant role:

`Context` · `Importance` · `Problem` · `Existing paradigm` · `Existing success` · `Limitation` · `Failure mode` · `Research gap` · `Observation` · `Insight` · `Proposed solution` · `Evidence preview` · `Contribution`

Record the full role sequence per paper in Paper DNA (`narrative.introduction_roles`). The default textbook chain is `Context → Problem → Importance → Existing paradigm → Limitation → Gap → Insight → Solution → Evidence → Contribution` — **do not force papers into it**; the deviations are the findings.

## 2. Pattern entry format (hardcore mode)

```text
Pattern P00X
---------------------------
Name:                  <memorable name, e.g. Limitation-Driven Narrative>
Frequency:             <X / N papers> (<frequency class: frequent/common/occasional/rare/exceptional>)
Typical structure:     <role/mechanism sequence, arrows>
Most common domains:   <CV / ML / 3D Vision / Generative AI / ...>
Typical evidence:      <what kind of evidence usually accompanies it>
Why it works:          <the reviewer-psychology reason, 1–2 sentences>
Observed in:           <≥2 concrete papers: VENUE YEAR — short title>
Caveats:               <when it fails or backfires>
```

Rules: a pattern needs ≥ 2 corpus papers; single-paper observations go to `knowledge/examples/` marked `candidate`. Update X and N after every mining run. Frequency classes: frequent ≥ 60%, common 40–59%, occasional 15–39%, rare 5–14%, exceptional < 5%.

## 3. What to mine

### 3.1 Gap-construction patterns
How do best papers make a gap feel real? Candidate mechanisms to verify with counts:
- Hidden-assumption exposure (name the assumption prior work implicitly makes, then break it)
- Failure-case opening (a concrete failure example before any method talk)
- Paradox / tension framing (two desirable properties appear incompatible; the method reconciles them)
- Metric-artifact argument (the gap is an artifact of how the field measures — e.g., emergent-abilities-as-mirage)
- Scaling-projection argument (current trend will hit a wall; the paper builds the wall-crossing method)

### 3.2 Observation→Insight patterns
How do authors get from an observation to a conceptual claim?
- Empirical-regularity → law (measure many settings, propose the law)
- Closed-form identity (an optimization/objective can be rewritten; the rewrite *is* the method — cf. reparameterization arguments)
- Artifact diagnosis (a phenomenon is shown to be a byproduct of procedure X, not nature)
- Single-mechanism reduction (many tricks reduce to one principle)

### 3.3 Contribution framing patterns
- Bottleneck naming ("we identify X as the key bottleneck") vs mechanism naming vs benchmark/dataset framing
- One central contribution vs a claim family with explicit sub-claims

### 3.4 Story shape patterns
- Simplicity-trade narrative ("as good as X, far simpler")
- Parity-then-differentiator (prove parity on quality, win on cost/simplicity)
- Theory-then-corollary (insight is a theorem; the algorithm is a corollary)
- Dataset/benchmark papers: need→construction→validation→finding order

### 3.5 Anti-patterns (from §32, observed instances)
Module dumping, result dumping, method-first introduction, post-hoc storytelling, citation dumping — each with at least one observed negative example and why it weakens the argument.

## 4. Comparative analysis (master §34)

When the user asks to compare papers (e.g., "compare all 2024 generative-model best papers"), analyze along: problem framing, gap construction, insight formulation, contribution framing, method abstraction, experiment architecture, evidence density, reviewer defense, writing precision. Output the five pattern classes: Common / Strong / Exceptional / Anti-Pattern / Domain-Specific. Never copy distinctive wording — patterns are argument moves.
