# knowledge/patterns/ — corpus pattern libraries

Layer 1 (MODE A, Stage 3) maintains five libraries here, one file per pattern family:

- `narrative-patterns.md` — gap construction, observation→insight, story shapes, intro role sequences
- `claim-patterns.md` — claim levels & scoping, contribution framing, novelty types, calibration moves
- `evidence-patterns.md` — evidence classes per claim level, evidence density, genre evidence checklists
- `experiment-patterns.md` — RQ taxonomy coverage, ablation types, baseline-fairness demonstrations
- `reviewer-patterns.md` — pre-defense patterns, attack families, defense ladder calibration

Entry format: the `P00X` block defined in `../../01-corpus-miner/narrative-patterns.md` (Name / Frequency X-of-N / Structure / Domains / Evidence / Why it works / Observed in ≥2 papers / Caveats). Frequency classes: frequent ≥60%, common 40–59%, occasional 15–39%, rare 5–14%, exceptional <5%.

Rules: no entry without a count; no count without N; every pattern cites ≥2 concrete corpus papers; single-paper observations belong in `../examples/` as `candidate`.
