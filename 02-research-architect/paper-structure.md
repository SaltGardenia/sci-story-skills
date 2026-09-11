# Paper Structure — engines for each section

Used in MODE C once the science is stable (story locked, evidence mapped, matrix planned). These engines turn the architecture into section plans. Order matters: claims → evidence → structure → sentences.

## 1. Introduction engine (§7)

- Lay out paragraphs by rhetorical role (roles in narrative-patterns.md), using the chosen narrative strategy. Each paragraph: one role, one move.
- Gap must be *evidenced* inside the intro (observation, failure case, or logical argument) — not asserted.
- Insight must be stated as a sentence a reader could repeat after one read.
- End with contributions as Contribution→Novelty→Evidence triples (§30). No "we propose a novel framework".

## 2. Related Work engine (§17)

Forbidden: `A does X. B does Y. C does Z.` Required: `Research direction → Paradigm → Representative methods → Strength → Limitation → Gap → Our position`. Organize by research directions relevant to the gap, not by chronology. End each direction at the limitation THIS paper addresses. Never unfairly dismiss prior work — mischaracterizing related work is both unethical (§40) and a reviewer trap.

## 3. Method engine (§18)

Per component: WHY → NECESSITY → PRINCIPLE → FORMULATION → IMPLEMENTATION → ASSUMPTIONS → VALIDATION. Section flow: Motivation → Design Principle → Formulation → Algorithm → Implementation → Complexity → Validation. Rules: every equation is preceded by its conceptual role; every design choice names its alternative and why it lost; assumptions are stated where introduced, not buried.

## 4. Experiments section engine (§13, §19)

- Order sections by the RQ matrix, not by chronology of when experiments were run.
- Open with setup + fairness statement (matched dimensions from experiment-design.md §4).
- One subsection per RQ; every table/figure opens with its Question (§19: Question → Evidence → Observation → Interpretation → Claim); captions carry interpretation, not restatement of axes.
- Close with failure cases (RQ7) if the corpus genre expects them — a paper without a failure discussion invites the adversarial reviewer to supply one.

## 5. Title engine (§28)

Generate candidates in four types — Descriptive / Problem-oriented / Insight-oriented / High-impact (Insight + Problem + Method). Score: accuracy, specificity, memorability, novelty signal, searchability, absence of hype. Recommend one with reasons.

## 6. Abstract engine (§29)

Slots: Problem → Gap → Insight → Method → Main Evidence → Implication. Must answer What? Why? How? How well? Why does it matter? Verify claim wording matches the claim-evidence map exactly (the abstract is where overclaiming is born). No section-by-section summary.

## 7. Conclusion engine

Restate the central insight (not a results list), state the scope honestly, and give ONE forward direction that follows from the insight — not a wish list.

## 8. Anti-pattern sweep (§32)

Before handing the architecture to writing or Layer 3, sweep the plan for: module dumping · result dumping · contribution inflation · citation dumping · unsupported causality · benchmark chasing · method-first introduction · overclaiming · baseline avoidance · post-hoc storytelling. Each hit: location, why it weakens the argument, and the fix. This sweep is the last Layer-2 gate before Layer 3's attack phase.
