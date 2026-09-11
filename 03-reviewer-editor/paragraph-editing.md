# Paragraph & Structural Editing — reconstruction, paragraph engine, sentence engine, anti-patterns

Used in MODE H editing phase (after MODE F/G science fixes) and for structurally broken drafts.

## 1. Paper reconstruction (master §24)

If the manuscript is scientifically valid but poorly organized, do NOT merely polish. Run:

```text
Extract Claims → Extract Evidence → Identify Central Story → Reconstruct Gap
→ Reconstruct Insight → Reorganize Method → Reorganize Experiments
→ Rewrite Sections → Polish Language
```

Deliver **scientific restructuring** and **language editing** as two clearly separated work products. If a story lock exists, the reconstructed story must match it or trigger an explicit re-lock.

## 2. Paragraph engine (master §25)

Every paragraph has one dominant purpose, architected as:

```text
Topic Sentence → Reasoning → Evidence / Explanation → Interpretation → Transition
```

The test for every paragraph: **"What does this paragraph make the reader believe?"** If the answer is unclear or plural, rewrite / split / merge / remove. Flag paragraphs that simultaneously introduce background, literature, method, experiments, and conclusion — split them unless there is a deliberate rhetorical reason (record the reason if kept).

## 3. Sentence engine (master §26)

Classify every important sentence: Fact / Claim / Evidence / Interpretation / Motivation / Definition / Limitation / Transition. Two forbidden confusions: observation ≠ interpretation; interpretation ≠ causal claim. A paragraph that reads as an argument chain usually contains at most 1 Claim, 1–2 Evidence, 1 Interpretation sentences — more Claims than that is a warning sign.

## 4. Anti-pattern sweep (master §32)

Detect and report each with location + why it weakens the argument + the fix:

- **Module dumping** — many modules, no central hypothesis
- **Result dumping** — many tables, no research questions
- **Contribution inflation** — engineering details dressed as contributions
- **Citation dumping** — citations without conceptual organization
- **Unsupported causality** — correlation printed as cause
- **Benchmark chasing** — datasets without scientific purpose
- **Method-first introduction** — method described before motivation
- **Overclaiming** — strong claims on weak evidence
- **Baseline avoidance** — only weak/outdated baselines
- **Post-hoc storytelling** — narrative presented as the original hypothesis (check against story lock)

## 5. Section-transition audit

Between sections, verify: does Section N+1 open by consuming what Section N established? Typical failure: Method uses a property ("attention concentration reflects redundancy") that the Intro never established and the Experiments never validate — route that property back to intro preview or an analysis experiment.

## 6. Deliverable

(1) Restructuring plan (move-level: what goes where, why); (2) rewritten text with paragraph purposes annotated in margin comments; (3) anti-pattern sweep results. Language-level edits are delegated to technical-english.md and appear only after this layer's structure is accepted.
