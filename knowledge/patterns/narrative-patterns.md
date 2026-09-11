# Narrative Pattern Library (Layer 1 — Stage 3)

Corpus: 102 best-paper Paper DNA files (`knowledge/paper-dna/`) — NeurIPS 2021–2025 (incl. D&B track), ICML 2023–2026 (incl. outstanding/position), ICLR 2022–2026 (outstanding), CVPR 2022–2026, ICCV 2021/2023/2025, ECCV 2022/2024. **N = 102.** Mining date: 2026-09-11. Mined from `narrative.introduction_roles/move`, `related_work_strategy`, `gap.*`, `insight.*`, `claims`, `reviewer_defense`, `writing` of every DNA file (all 102 read; none modified).

Frequency classes: frequent ≥60% · common 40–59% · occasional 15–39% · rare 5–14% · exceptional <5%.

## TOP PATTERNS (quick reference for Layers 2–3)

| ID | Pattern | Freq | One-line use |
|----|---------|------|--------------|
| P001 | Hidden-Assumption Exposure | 92/102 | Name the implicit assumption prior work makes, then break it — the single most reliable gap move in this corpus. |
| P013 | Claim-Family Framing | 94/102 | Never ship one lonely contribution; 2–6 explicit central claims (median 3–4), each pre-mapped to evidence. |
| P012 | Named-Mechanism Branding | 84/102 | Coin a memorable name for the central mechanism/effect; it becomes the paper's conceptual currency. |
| P009 | Closed-Form Identity (rewrite-is-the-method) | 24/102 | Rewrite the objective so the rewrite itself is the method; derivation is checkable, so reviewers can't call it a heuristic. |
| P011 | Single-Mechanism Reduction | 22/102 | Reduce many scattered tricks/paradigms to one principle; unity reads as depth. |
| P010 | Artifact Diagnosis | 19/102 | Show the phenomenon is a byproduct of procedure/measurement X, not nature — then the fix falls out. |
| P003 | Paradox/Tension Framing | 16/102 | Stage two desirable properties as incompatible; the method reconciles them. |
| P021 | Diagnosis-Then-Minimal-Fix | 12/102 | Detective-story shape: concrete anomaly → culprit isolated → one-line fix. |
| P004 | Metric-Artifact Argument | 13/102 | Argue the gap is an artifact of how the field measures; measurement reform becomes the contribution. |
| P014 | Intro-Signed Evidence Contract | 15/102 | Pre-announce numbered questions/predictions/desiderata in the intro, then settle them section by section. |

Anti-pattern instances (method-first intro, results-dump intro, buried limitations, circular self-proposed metrics, post-hoc explanation) are at the end — none is frequent among best papers, and each observed instance shows the mitigation that saved it.

---

## Family A — Gap construction

```text
Pattern P001
---------------------------
Name:                  Hidden-Assumption Exposure
Frequency:             92 / 102 (frequent, 90%)
Typical structure:     Existing paradigm credited → its implicit premise stated ("prior work assumes X") → X broken → gap is now inevitable
Most common domains:   All (ML theory, generative models, LLM, CV, embodied AI, datasets, position papers)
Typical evidence:      A named core assumption in the paradigm block (often quoted verbatim from prior work) plus a demonstration — toy example, counterexample, or measurement — that the assumption fails
Why it works:          The reviewer's prior is that incremental work attacks outputs; exposing an assumption reframes every prior method as conditioned on a premise nobody checked, so the gap feels discovered rather than manufactured.
Observed in:           NEURIPS 2023 — Emergent Abilities mirage (assumption: metric tracks behavior); NEURIPS 2023 — DPO (assumption: preference optimization is RL); ICCV 2023 — ControlNet (assumption: new control needs pretraining-scale finetuning); NEURIPS 2022 — Chinchilla (assumption: parameter-limited scaling); ICLR 2024 — ViT registers (assumption: high-norm tokens are noise); CVPR 2022 — pick & solve (assumption: solver must find all solutions); ICML 2024 — Genie (assumption: controllability needs action labels); NEURIPS 2025 — limit of RLVR (assumption: RLVR elicits new strategies); ICML 2026 — JustGRPO (assumption: arbitrary-order flexibility is essential); CVPR 2025 — VGGT (assumption: feed-forward nets handle only pairs + post-optimization); plus ~82 further papers across all venues.
Caveats:               Upper-bound-ish count: `paradigm.core_assumption` is a mined DNA field, so the pattern is unusually salient in this corpus; a strict reading (assumption explicitly named AND shown false in the intro) still covers roughly 60–70 papers. Fails when the assumption is strawmanned — reviewers check whether any serious prior work actually holds it.
```

```text
Pattern P002
---------------------------
Name:                  Failure-Case Opening
Frequency:             6 / 102 (rare)
Typical structure:     Concrete failure instance (anecdote, statistic, incident, or rendered dialogue) → generalized problem → method as the fix
Most common domains:   LLM evaluation/alignment, generative tools, security/privacy
Typical evidence:      A vivid, verifiable specific: "only ~10% of Pick-a-Pic images are artifact-free" (CVPR 2024), a rendered failure dialogue (ICML 2025 CollabLLM Fig. 2), a documented leak incident (ICML 2024 DP position: Peter W. in GPT-2, Copilot private key), a named anomaly (ICLR 2024 registers: DINOv2 fails at LOST)
Why it works:          A concrete failure creates an itch the reader wants scratched before any method appears; it converts an abstract problem into an observed event nobody can deny.
Observed in:           CVPR 2024 — Rich human feedback (10% clean statistic); ICCV 2023 — ControlNet (creative trial-and-error pain); ICLR 2024 — ViT registers (LOST anomaly); ICLR 2026 — LLMs lost in conversation (90→65 headline); ICML 2025 — CollabLLM (optimism-essay vignette); ICML 2024 — DP public pretraining position (memorization incidents)
Caveats:               Rare precisely because it needs an undeniable, non-cherry-picked failure; backfires if the failure is anecdotal (n=1) or if competitors can show the failure is already solved. Never let the failure case substitute for the systematic evidence.
```

```text
Pattern P003
---------------------------
Name:                   Paradox / Tension Framing
Frequency:              16 / 102 (occasional)
Typical structure:      Two desirable properties staged as incompatible (quality vs modes, flexibility vs reasoning, robustness vs efficiency) → diagnosis of why they collide → method reconciles them
Most common domains:    Generative models, LLM training/decoding, evaluation methodology, theory
Typical evidence:       A measured curve or toy model exhibiting the trade-off, then an intervention showing both properties achieved
Why it works:           Reviewers reward papers that dissolve a dilemma the field had accepted as inevitable ("pick two of three"); the reconciliation is itself the novelty argument.
Observed in:            NEURIPS 2024 — Autoguidance (CFG quality vs mode-dropping); ICML 2025 — token ordering in MDMs (training complexity vs inference flexibility); ICML 2026 — JustGRPO (flexibility vs reasoning potential); NEURIPS 2023 — DPO (alignment quality vs RL complexity); ICLR 2025 — AlphaEdit (edit efficacy vs preservation); ICML 2023 — H-divergence (IPM vs f-divergence families); ICLR 2024 — geometry-adaptive generalization (memorization vs quality); ICLR 2024 — never train from scratch (scratch-benchmark failure vs foundation-model reality); ICLR 2021/22 — rliable (robustness vs statistical efficiency of mean vs median); NeurIPS 2021 — MAUVE (Type I vs Type II errors)
Caveats:                 The tension must be shown, not asserted — best instances measure the trade-off first (autoguidance's 2D toy, JustGRPO's Pass@k curves). Backfires when the "paradox" is a strawman nobody believes in.
```

```text
Pattern P004
---------------------------
Name:                   Metric-Artifact Argument
Frequency:              13 / 102 (rare)
Typical structure:      Field-level phenomenon/belief → traced to the measurement instrument → alternative metric/control dissolves the phenomenon → measurement reform as contribution
Most common domains:    LLM scaling/evaluation, RL evaluation, privacy, benchmarks
Typical evidence:       Re-analysis under alternative metrics (emergence under linear metrics), control conditions (CONCAT vs sharded), statistical re-analysis (IQM vs point estimates), benchmark-audit tables (DP position's Transfermania vs Privacyland)
Why it works:           If the instrument is wrong, every result downstream is in question — this gives the paper license to overturn published findings without attacking any single paper, and reviewers love falsification-with-a-fix.
Observed in:            NEURIPS 2023 — Emergent abilities mirage; ICLR 2026 — LLMs lost in conversation (episodic evaluation); NEURIPS 2021 — Statistical precipice (point-estimate evaluation); NEURIPS 2022 — Chinchilla (fixed-schedule artifact in Kaplan et al.); ICML 2024 — DP public pretraining position (overlap benchmarks measure representation learning, not private learning); NEURIPS 2021 — MAUVE (single-KL proxies inadequate); NeurIPS 2023 — DecodingTrust (benign-prompt evaluation insufficient); NeurIPS 2023 — ClimSim (offline metrics do not predict online stability); NEURIPS 2025 — limit of RLVR (average metrics hide the pass@k boundary)
Caveats:                Requires genuinely independent evidence lines (intervention + meta-analysis + induction, as in the mirage paper); a single re-measurement reads as cherry-picking. Time-indexed claims ("current RLVR", "current benchmarks") age quickly.
```

```text
Pattern P005
---------------------------
Name:                   Scaling-Projection Argument
Frequency:              5 / 102 (exceptional)
Typical structure:      Quantified pain of the current trend (power law cost, data exhaustion deadline, data-scale disparity) → the wall the trend hits → method/resource that crosses the wall
Most common domains:    Data-centric LLM training, data-centric vision, RL scaling
Typical evidence:       Concrete numbers on the wall: 3%→2% error = 10× data; "unique data exhausted by 2024"; 100K condition images vs 5B pretraining images; RL's "few bits of feedback"
Why it works:           A wall with a date on it creates urgency and positions the paper as the only exit; it converts an efficiency improvement into a necessity claim.
Observed in:            NEURIPS 2022 — Beyond scaling laws data pruning; NeurIPS 2023 — Scaling data-constrained LMs; ICCV 2023 — ControlNet (data-scale disparity); NeurIPS 2022 — LAION-5B (public data 20× behind private); NeurIPS 2025 — 1000-layer self-supervised RL
Caveats:                Highly dependent on the trend holding; projections are the first thing reviewers attack (Chinchilla's own data-availability assumption was immediately challenged). Do not use unless the wall is arithmetic, not speculative.
```

```text
Pattern P006
---------------------------
Name:                   Guiding-Question Gap (boxed question)
Frequency:              12 / 102 (rare)
Typical structure:      Context → the central question stated verbatim, often literally boxed/displayed → entire paper organized as the affirmative or disjunctive answer
Most common domains:    Theory (learning theory, optimization, sampling), empirical science of deep learning, benchmark audits
Typical evidence:       The question itself is the contract; evidence sections answer its clauses one by one
Why it works:           A sharp displayed question is falsifiable and memorable; reviewers grade the paper against its own question, and a clean answer reads as completeness.
Observed in:            NEURIPS 2022 — OOD detection learnability (boxed formal question); NeurIPS 2023 — DP auditing one run (displayed one-line question); ICML 2026 — FORS high-accuracy sampling (boxed sampler question); NEURIPS 2025 — limit of RLVR (displayed disjunctive question); NEURIPS 2025 — superposition neural scaling (boxed Question); ICLR 2023 — emergence of maps (quoted question); CVPR 2023 — planning-oriented AD (quoted design question); CVPR 2025 — VGGT (escalating "can nets eschew geometry?"); NeurIPS 2024 — PRISM (four interrogatives organize the paper); ICML 2024 — dataset diversity position (how defined/operationalized/validated?)
Caveats:                 Only works if the question is genuinely open and the answer is clean; a question with a hedged or partial answer invites "you didn't answer your own question" reviews. Theory papers use it most safely.
```

```text
Pattern P007
---------------------------
Name:                   Capability-Matrix Gap (the empty cell)
Frequency:              12 / 102 (rare)
Typical structure:      Design space or prior-work landscape tabulated (rows = competitors, columns = required properties) → exactly one empty row/column = the paper's position → table does the arguing
Most common domains:    Systems/generative models, embodied AI, computational imaging, game theory, benchmark papers
Typical evidence:       A Table 1-style capability or complexity matrix where the paper is the only full row (D4RT's Table 2, Genie's video-only × controllable table, SPAD's regime table, FTRL sample-complexity table)
Why it works:           A matrix converts a subjective novelty claim into a checkable statement; reviewers verify the empty cell themselves and the "first to combine X and Y" claim is pre-proven.
Observed in:            CVPR 2026 — D4RT; ICML 2024 — Genie; ICCV 2023 — passive ultra-wideband SPAD; ICCV 2025 — BrickGPT (field enumeration with blocking assumptions); ICLR 2023 — GD-WL (architecture × biconnectivity cross); ICML 2023 — Balanced FTRL (bound ladder table); NeurIPS 2022 — on-demand multi-distribution learning (paradigm × bounds grid); ICML 2024 — twisted SMC (loss-taxonomy table); ICML 2025 — CollabLLM (capability-gap table); NeurIPS 2022 — EDM (prior methods reframed as rows)
Caveats:                Every column choice is a claim; reviewers attack omitted columns and gerrymandered property definitions ("why is 'on-demand decoding' a column?"). The matrix must include the strongest concurrent work, or the empty cell is fraudulent.
```

## Family B — Observation → Insight

```text
Pattern P008
---------------------------
Name:                   Empirical-Regularity → Law
Frequency:              12 / 102 (rare)
Typical structure:      Measure a regularity across many settings/models/data → name the regularity as a law or bias → derive predictions and a fix from it
Most common domains:    Science-of-deep-learning, scaling laws, generative models, LLM analysis
Typical evidence:       Cross-setting measurements that collapse or repeat (400+ runs in Chinchilla/data-constrained scaling; τ/n curve collapse; Fourier-mass trajectories; pass@k crossings across all families)
Why it works:           A law outlives its measurements — it predicts, which lets the paper's final section test the law instead of defending a method.
Observed in:            NEURIPS 2022 — Chinchilla compute-optimal law; NeurIPS 2023 — data-constrained scaling (repetition value decay); ICML 2023 — min-degree bias (Fourier-mass concentration); ICLR 2024 — geometry-adaptive harmonic basis (denoiser convergence); NeurIPS 2025 — implicit dynamical regularization (two-timescale law); CVPR 2024 — generative image dynamics (exponential power spectrum); NEURIPS 2025 — limit of RLVR (cross-family pass@k crossing); ICML 2026 — JustGRPO (Pass@k scaling); ICLR 2025 — shallow safety alignment (KL budget concentration); NeurIPS 2024 — Rho-1 (token-loss four-category dynamics); ICLR 2026 — LLMs lost in conversation (aptitude/unreliability decomposition); NeurIPS 2025 — gated attention (30-variant scan → G1 law)
Caveats:                Laws stated from few settings or small models get "does it transfer to frontier scale?" attacks; the best instances pre-state falsifiable predictions (data pruning's numbered predictions) or measure across model families before naming the law.
```

```text
Pattern P009
---------------------------
Name:                   Closed-Form Identity (rewrite-is-the-method)
Frequency:              24 / 102 (occasional)
Typical structure:      Standard objective/operation → exact algebraic rewrite (reparameterization, projection, duality, decomposition) → the rewritten form IS the new method → corollary properties (guarantees, speed, stability) fall out
Most common domains:    Generative models (diffusion/flow), optimization, probabilistic ML, statistical tools, LLM alignment
Typical evidence:       A derivation reviewers can check line by line (DPO's change of variables; Analytic-DPM's optimal variance from the score; freeform pixel = first network layer; (P−I)h as control variate; operator = tensor contraction; score-entropy gradient identity; timestep-sampling = loss-reweighting equivalence)
Why it works:           An exact identity removes the "heuristic vs principled" argument entirely — the method cannot be dismissed as a trick because it is a theorem, and the diff (one line changed) visualizes the contribution.
Observed in:            NEURIPS 2023 — DPO ("secretly a reward model"); ICLR 2022 — Analytic-DPM; ECCV 2024 — minimalist freeform pixels; ICML 2024 — Genie latent actions; ICLR 2022 — H-divergence; NeurIPS 2022 — RODEO Stein CVs; NeurIPS 2024 — STDE; ICML 2025 — marginal score matching; ECCV 2022 — partial distance correlation; ICML 2023 — D-Adaptation (lower-bounding D); ICML 2026 — FORS Bernoulli factory; NeurIPS 2021 — Moser flow; NeurIPS 2022 — EDM denoiser-score identity; ICLR 2023 — DreamFusion SDS; ICLR 2024 — walk-jump; ICML 2025 — Bayesian conformal quadrature; ICML 2024 — SEDD score entropy; ICML 2024 — SD3 weighting equivalence; ICML 2025 — token ordering (MDM loss = infilling mixture); ICLR 2025 — squeezing decomposition; ICLR 2025 — AlphaEdit null-space constraint; ICCV 2023 — SPAD probing identity; ICML 2024 — stealing the last layer (rank lemma); NeurIPS 2022 — Riemannian SGM (DSM identity)
Caveats:                Only counts papers where the rewrite is load-bearing (the method), not cosmetic algebra; borderline cases (subsumption proofs, reduction lemmas) excluded, so the true population is somewhat larger (~30). Risk: an identity that was "already known" (DPO faced "it's just a special case") needs an equivalence-class theorem as armor.
```

```text
Pattern P010
---------------------------
Name:                   Artifact Diagnosis
Frequency:              19 / 102 (occasional)
Typical structure:      Accepted phenomenon or belief → controlled measurements isolate the cause → cause is a byproduct of procedure/measurement, not nature → minimal fix or reframe follows
Most common domains:    Science-of-deep-learning, LLM evaluation, generative models, representation analysis
Typical evidence:       An intervention that flips the phenomenon (registers removing high-norm tokens; CONCAT control restoring 95% performance; degraded-copy guidance isolating truncation; metric switch erasing "emergence")
Why it works:           "It's not nature, it's the procedure" is the highest-leverage sentence in a paper: it explains scattered prior reports at once and makes the fix feel inevitable rather than engineered.
Observed in:            NEURIPS 2023 — Emergent abilities mirage; ICLR 2024 — ViT need registers; NEURIPS 2021 — statistical precipice; ICLR 2024 — never train from scratch; NEURIPS 2022 — Chinchilla (schedule artifact); ICLR 2025 — shallow safety (prefix-suppression shortcut); ICML 2025 — learning dynamics squeezing; ICML 2025 — token ordering; ICML 2026 — JustGRPO (fork bypassing); NeurIPS 2025 — gated attention (routing confound removed); NEURIPS 2025 — limit of RLVR (sharpening, not expansion); NeurIPS 2025 — implicit dynamical regularization; ICML 2023 — min-degree bias (length-generalization failures explained); ICLR 2025 — superposition (1/m exponent explained); NeurIPS 2024 — Autoguidance (CFG benefit = truncation); ICLR 2023 — DreamFusion (failure traced to U-Net Jacobian); NeurIPS 2022 — Imagen (guidance failure = train-test mismatch); NeurIPS 2023 — DecodingTrust (GPT-4 paradox = double-edged instruction following); ICML 2024 — DP position (private-learning "success" = benchmark overlap)
Caveats:                The diagnosis must be causal, not correlational — registers' clean intervention and mirage's three independent evidence lines are the gold standard. Partial diagnoses ("we have not fully determined…") are fine if conceded; overclaiming a mechanism invites destructive rebuttals.
```

```text
Pattern P011
---------------------------
Name:                   Single-Mechanism Reduction
Frequency:             22 / 102 (occasional)
Typical structure:      Many scattered methods/tricks/paradigms → shown to be points in one space or instances of one principle → new method derived from the principle
Most common domains:    Generative models, probabilistic ML, evaluation metrics, architecture analysis, systems
Typical evidence:       A unifying formalism that recovers prior methods as special cases (EDM's Table 1; twisted-SMC loss taxonomy; conformal+CRC as Bayesian quadrature; one query interface yielding five outputs; one dataset interface fusing five dataset types)
Why it works:           Unity reads as understanding; a field that looks like a zoo of tricks becomes a design space, and the paper owns the axes.
Observed in:            NEURIPS 2022 — EDM diffusion design space; ICML 2024 — twisted SMC (RLHF/red-teaming/infilling → one equation); ICML 2025 — Bayesian conformal (CRC+SCP recovered); ICLR 2022 — H-divergence (IPM+f-div unified); NeurIPS 2021 — MAUVE (Type I/II → one frontier); ECCV 2022 — distance correlation (four applications, one primitive); ICLR 2025 — squeezing (many finetuning pathologies → one effect); ICLR 2025 — shallow safety (four exploit literatures → one construct); ICML 2023 — AIR bandit framework; NeurIPS 2022 — multi-distribution learning (three paradigms unified); ICLR 2022 — tensor language GNN toolbox; NeurIPS 2024 — STDE (any operator, one estimator); ICML 2025 — marginal score matching (SM family variants); ICML 2024 — SD3 (61 formulations, one comparable objective); CVPR 2023 — UniAD (six tasks → one planning-oriented design); ICLR 2024 — UniSim (five dataset types → one interface); CVPR 2023 — VisProg (tasks → one program-generation mechanism); CVPR 2025 — VGGT (four 3D outputs → one multi-task net); CVPR 2026 — D4RT (five outputs → one query interface); ICLR 2023 — VTM (arbitrary tasks → one matching mechanism); NeurIPS 2025 — implicit dynamical regularization (memorization → one mechanism); ICML 2026 — FORS (two sampling literatures → one primitive)
Caveats:                Unification without new capability is "just a survey"; each recovered special case must either be reproduced or improved. Also fails if the unified space omits an important outlier method that refuses the axes.
```

## Family C — Contribution framing

```text
Pattern P012
---------------------------
Name:                   Named-Mechanism Branding
Frequency:             84 / 102 (frequent, 82%)
Typical structure:      Central insight → coined compact name ("squeezing effect", "pick & solve", "GAHB", "shallow alignment", "Artificial Hivemind") → the name is used in abstract, intro, section titles, and reviewer-defense
Most common domains:    All families; weakest in pure benchmark releases
Typical evidence:       The branded term appears in the thesis line and central_insight; often also in anticipated_attacks (reviewers adopt the name, which frames the debate)
Why it works:           A name compresses the insight into one memory slot; reviewers, follow-up papers, and citations all route through it, and the dichotomies it implies (pick & solve vs solve & pick) pre-frame comparisons.
Observed in:            CVPR 2022 — pick & solve; CVPR 2023 — planning-oriented; CVPR 2024 — spectral volumes / rich feedback; ICLR 2024 — registers, GAHB; ICLR 2025 — squeezing, shallow safety alignment; ICML 2026 — flexibility trap / fork tokens; NEURIPS 2025 — Artificial Hivemind, implicit dynamical regularization; ICML 2024 — Transfermania vs Privacyland; ICML 2025 — first/last-mile PAR; NeurIPS 2021 — statistical precipice; NEURIPS 2023 — emergence mirage, DPO; ICML 2023 — watermark green list; ICLR 2026 — lost in conversation; and ~69 further papers.
Caveats:                Counted conservatively: only coined concepts carrying the thesis (not mere system names) — the true prevalence including system branding is ~95/102. Bad names (generic, overbroad, or hyped) do more harm than no name; the name must survive being quoted by a critic.
```

```text
Pattern P013
---------------------------
Name:                   Claim-Family Framing (never a single claim)
Frequency:             94 / 102 (frequent, 92%)
Typical structure:      Contributions enumerated as 2–6 explicit central claims, each tagged with its evidence type; supporting claims handle robustness, generality, and cost
Most common domains:    All
Typical evidence:       DNA claims blocks: no paper has exactly one central claim; central-claim counts range 2–6 (median 3–4); totals range 4–13
Why it works:           A claim family distributes reviewer risk — if one claim is contested, the others carry the paper — and each claim names its own evidence, which is exactly the reviewer's scoring rubric.
Observed in:            NEURIPS 2021 — statistical precipice (6 central); ICLR 2025 — shallow safety (6 central); ICCV 2021 — Swin (3 central × 3 tasks); CVPR 2023 — VisProg (4 central incl. new tasks); ICML 2024 — SD3 (formulation study + architecture + scaling study); CVPR 2025 — VGGT (accuracy + speed + backbone transfer); and 88 further papers.
Caveats:                Counted from the DNA `claims` coding (miner judgment on "central"); raw counts may shift ±1 on re-coding. Failure mode: a claim family with no load-bearing hierarchy reads as padding — best papers keep exactly one claim "central of central" (the thesis) and mark the rest supporting.
```

```text
Pattern P014
---------------------------
Name:                   Intro-Signed Evidence Contract
Frequency:             15 / 102 (occasional)
Typical structure:      Intro pre-announces numbered open questions / testable predictions / desiderata → body settles them in the same order → conclusion checks the contract off
Most common domains:    Science-of-deep-learning, data-centric papers, theory, few-shot/universal-method papers
Typical evidence:       Five numbered open questions answered section-by-section (data pruning); desiderata as acceptance criteria (VTM); four bolded findings each carrying its evidentiary verb (RLVR limit); RQ list with one subsection per RQ (AlphaEdit)
Why it works:           The contract converts reading into verification: reviewers experience the paper as delivering exactly what was promised, which is the strongest possible completeness signal.
Observed in:            NEURIPS 2022 — data pruning (5 predictions mirrored by §4); ICLR 2023 — VTM (desiderata measured); NEURIPS 2025 — limit of RLVR (four bolded findings); ICLR 2025 — AlphaEdit (RQ1–RQ4); NeurIPS 2021 — dataset life (3 RQs = 3 analyses); ICML 2023 — min-degree bias (4 numbered contributions incl. boundary conditions); ICML 2026 — JustGRPO (two stated hypotheses mapped to experiments); ICLR 2024 — never train from scratch (evidence program); ICML 2023 — Balanced FTRL (two explicit questions); NeurIPS 2023 — DP auditing (Procedure/Analysis/Results preview); ICLR 2026 — succinctness (program a/b/c); ICLR 2024 — VTM-style upper-bound framing in NeurIPS 2022 — ATOM3D (hypothesis woven into results); NeurIPS 2025 — gated attention (findings preview); NeurIPS 2021 — rliable (case-study promise then tools)
Caveats:                The contract is binding — an unsettled numbered item is a gift to reviewers. Use only when the evidence plan is fully resourced; otherwise pre-announce fewer items.
```

```text
Pattern P015
---------------------------
Name:                   Bottleneck Naming
Frequency:             5 / 102 (exceptional)
Typical structure:      System/goal named → "the key bottleneck is X" (with evidence X is what blocks progress) → entire method aimed only at X
Most common domains:    Systems/scale papers, hybrid domain-ML, meta-learning, architecture
Typical evidence:       A decomposition showing X dominates cost/error (decoding is the bottleneck: O(T²HW); text encoder > image generator for scaling; data scarcity in hybrid climate simulation; curvature + myopia in meta-gradients)
Why it works:           Naming the bottleneck justifies narrowness: everything not aimed at X is explicitly out of scope, which pre-empts "why didn't you also do Y".
Observed in:            CVPR 2026 — D4RT (decoding bottleneck); NeurIPS 2022 — Imagen (text encoder is the scaling bottleneck); NeurIPS 2023 — ClimSim (data/workflow bottleneck, stated in thesis); ICLR 2022 — bootstrapped meta-learning (two named bottlenecks: curvature, myopia); ICLR 2024 — universal real-world simulator ("we focus on this exact bottleneck"); (term appears in 15 DNA files total, but only these 5 use it as the gap-defining move)
Caveats:                 Exceptional because it is high-risk: the bottleneck identification must be measured, not asserted, and a competitor can invalidate the paper by showing a different bottleneck dominates. Best when backed by an ablation isolating X.
```

```text
Pattern P016
---------------------------
Name:                   Benchmark/Dataset Framing (infrastructure as contribution)
Frequency:             9 / 102 (rare)
Typical structure:      Need (field blocked without the resource) → construction (protocol, scale, quality controls) → validation (replication or external anchors) → findings the resource uniquely enables
Most common domains:    Datasets & Benchmarks tracks, embodied AI, scientific ML, meta-science
Typical evidence:       Replication of closed-data results (LAION), scale ablation as the scientific core (ProcTHOR), online-coupling pipeline (ClimSim), dense annotations enabling distributional claims (INFINITY-CHAT), case studies as affordance demos (PRISM)
Why it works:           Framing the resource as "founding a datatype" (ATOM3D's atom-as-pixel analogy) or as the enabler of a new measurement class elevates infrastructure to discovery; findings-from-own-dataset pre-empt "just a data release" reviews.
Observed in:            NeurIPS 2021 — ATOM3D; NeurIPS 2022 — LAION-5B, ProcTHOR, MineDojo; NeurIPS 2023 — DecodingTrust, ClimSim; NeurIPS 2024 — PRISM; NeurIPS 2025 — INFINITY-CHAT; CVPR 2024 — RichHF-18K (dataset-first contribution ordering)
Caveats:                Validation must be external (replication, human agreement, online deployment) — self-referential metrics (proposing the metric you are measured by) is the classic weakness; see anti-pattern AP6. Findings sections are near-mandatory in this corpus: all 9 dataset best papers ship one.
```

## Family D — Story shape

```text
Pattern P017
---------------------------
Name:                   Simplicity-Trade Narrative
Frequency:             13 / 102 (rare)
Typical structure:      Incumbent achieves the target but at hidden cost (RL loop, retraining, tuning, code) → this paper matches the target with a radically simpler mechanism → simplicity itself is the claimed advance
Most common domains:    LLM alignment, model editing, optimization, data selection, generative fine-tuning
Typical evidence:       "Single line of code" (AlphaEdit), "your language model is secretly a reward model" (DPO), "reduces engineering complexity to a single hyperparameter" (walk-jump), "nearly free intervention" (Rho-1), zero-overhead (D-Adaptation), no retraining (Analytic-DPM, DreamFusion, VisProg, registers)
Why it works:           Reviewers systematically undervalue simplicity claims until they see parity evidence; the winning form is simplicity + a checkable equivalence/theorem so the simplicity is principled, not lazy.
Observed in:            NEURIPS 2023 — DPO; ICLR 2025 — AlphaEdit; NeurIPS 2022 — gradient descent ultimate optimizer; ICML 2023 — D-Adaptation; NeurIPS 2024 — Rho-1; ICLR 2023 — DreamFusion; NeurIPS 2023 — DP auditing (one run vs hundreds); ICML 2025 — token ordering (zero-training rescue); ICML 2026 — JustGRPO ("a return to simplicity"); ICLR 2024 — walk-jump; ICLR 2022 — Analytic-DPM; CVPR 2023 — VisProg (no task-specific training); ICLR 2024 — ViT registers (one-line fix)
Caveats:                Dies without parity numbers — "simpler and slightly worse" is a workshop paper. Also invites "it's just X" attacks; DPO needed Theorem 1 precisely for this.
```

```text
Pattern P018
---------------------------
Name:                   Parity-Then-Differentiator
Frequency:             9 / 102 (rare)
Typical structure:      Prove parity with the incumbent on the incumbent's own metric → then win on the axis the incumbent cannot follow (speed, cost, scale, controllability, breadth)
Most common domains:    Generative models, 3D vision, discrete diffusion, few-shot learning, retrieval
Typical evidence:       Blind parity test vs an industrial model (ControlNet), matched-quality + 10× speed (pick & solve, VGGT), likelihood parity + controllability (SEDD), matching supervised upper bounds at 10 shots (VTM), matching diffusion + LLM-protocol advantages (VideoPoet)
Why it works:           Parity removes the quality objection first, so the differentiator is evaluated on its own merits; leading with the differentiator instead triggers "quality tax" suspicion.
Observed in:            ICCV 2023 — ControlNet; CVPR 2022 — pick & solve; CVPR 2025 — VGGT; ICML 2024 — SEDD; ICLR 2023 — VTM; ICML 2024 — VideoPoet; ICLR 2022 — Analytic-DPM; ICLR 2023 — DreamFusion; ICLR 2022 — H-divergence (benchmark competence before application showcase)
Caveats:                Parity must be on the incumbent's home turf with their protocol — Imagen and SEDD explicitly adopt competitor evaluation to make this credible. If parity is partial, concede it inline (VTM's honest upper-bound framing) rather than hiding it.
```

```text
Pattern P019
---------------------------
Name:                   Theory-Then-Corollary
Frequency:             14 / 102 (rare)
Typical structure:      The insight is stated as a theorem/characterization → the algorithm, bound, or practical estimator is derived as a corollary of the theorem, not designed alongside it
Most common domains:    Learning theory, optimization, sampling, statistical tools
Typical evidence:       Algorithm falls out of rearranging an inequality (D-Adaptation); proof reveals the operative ingredient which then dictates the framework (GD-WL distance injection); theorem → estimator pairs (Analytic-DPM); lower bound precedes and demands the algorithm (Balanced FTRL)
Why it works:           Corollary-shaped methods are perceived as inevitable — "the only way to get the guarantee" — which neutralizes the "why this design?" ablation burden.
Observed in:            ICML 2023 — D-Adaptation; ICLR 2023 — GD-WL; NeurIPS 2024 — STDE; ICML 2023 — AIR bandits; ICML 2026 — FORS; NeurIPS 2021 — Moser flow; ICLR 2022 — Analytic-DPM; ICML 2025 — marginal score matching; ICML 2025 — Bayesian conformal; NeurIPS 2021 — reward expressivity (constructive algorithms from characterization); NeurIPS 2022 — OOD learnability (iff-characterizations); NeurIPS 2025 — transductive mistake bounds (matching constructions); ICLR 2025 — squeezing (method follows from mechanism); ICML 2024 — SEDD (property grid before model assembly)
Caveats:                Theory papers without any algorithm must still show "predictive coverage" (tensor-language toolbox recovering known bounds) or they read as pure math; and a corollary algorithm with weak experiments (Balanced FTRL's "preliminary" games) concedes the practical fight.
```

```text
Pattern P020
---------------------------
Name:                   Dataset-Paper Arc (need → construction → validation → finding)
Frequency:             9 / 102 (rare; 9/9 of corpus dataset papers follow it)
Typical structure:      Field-level need → resource construction with quality protocol → external validation (replication/agreement/deployment) → findings only the resource enables → release as closing act
Most common domains:    Datasets & Benchmarks tracks, embodied AI, scientific ML, meta-science
Typical evidence:       All 9 dataset best papers: ATOM3D, LAION-5B, ProcTHOR, MineDojo, DecodingTrust, ClimSim, PRISM, INFINITY-CHAT, RichHF-18K
Why it works:           The order matches reviewer scoring for D&B tracks (resource quality first, novelty of findings second), and ending on findings converts infrastructure into science.
Observed in:            (same 9 papers)
Caveats:                Findings must be non-obvious and enabled by the resource's unique design (PRISM's linked profiles, ClimSim's online coupling); generic findings ("larger data helps") read as filler. Position papers and framework papers approximate but do not follow this arc.
```

```text
Pattern P021
---------------------------
Name:                   Diagnosis-Then-Minimal-Fix (detective story)
Frequency:             12 / 102 (rare)
Typical structure:      Concrete anomaly → measurements narrow suspects → culprit named and isolated (often via a clean intervention) → minimal fix introduced in a few sentences → generality check
Most common domains:    Representation analysis, LLM analysis, generative models, evaluation
Typical evidence:       ViT registers (anomaly → high-norm recycled tokens → registers fix); Autoguidance (§3 "Why does CFG improve image quality?"); shallow safety (four exploits → prefix shortcut → recovery data); JustGRPO (Pass@k anomaly → fork bypass → AR scaffold); rliable (diagnosis via 100-run case study → IQM treatment)
Why it works:           The reader reproduces the detective work, so the fix arrives already believed; the method's smallness becomes a feature because the diagnosis did the heavy lifting.
Observed in:            ICLR 2024 — ViT need registers; NeurIPS 2024 — Autoguidance; ICLR 2025 — shallow safety; ICML 2026 — JustGRPO; NeurIPS 2025 — gated attention; NEURIPS 2021 — statistical precipice; NeurIPS 2025 — implicit dynamical regularization; NEURIPS 2023 — emergence mirage; NeurIPS 2024 — Rho-1; NEURIPS 2025 — limit of RLVR; ICLR 2025 — AlphaEdit (defect-driven intro → one-line fix); ICLR 2025 — squeezing (verification-shaped)
Caveats:                Requires a genuinely surprising anomaly; if the "mystery" is well understood, the genre reads as theater. The fix must be proportionate — a huge mechanism after a small diagnosis breaks the aesthetic.
```

---

## Anti-patterns (observed instances in the corpus)

None of these is frequent among best papers — which is itself the finding — but each occurs, and each observed instance shows the mitigation that prevented a rejection.

**AP1 — Component dumping (module list without a unifying argument).**
Instances: NeurIPS 2022 NCI (four techniques stacked: query generation, PAWA, regularization…), ICML 2024 Genie (LAM → tokenizer → dynamics engineering exposition), NeurIPS 2022 MineDojo (three-pillar framework), ICLR 2024 UniSim (five dataset-conversion recipes before any model math).
Why it weakens: each component invites its own "is this novel?" attack, and the paper reads as an engineering report.
How the corpus papers survive it: every component is introduced by the named failure it fixes (NCI ties each technique to a specific DSI flaw; Genie derives the LAM from the information bottleneck), and ablations map 1:1 onto components. The lesson: component-first exposition is acceptable only when each component is causally defended.

**AP2 — Method-first introduction.**
Instance: ICLR 2024 walk-jump ("Method-first intro with an industrial-payoff twist" — two paragraphs of paradigm critique, then the formalism before any problem evidence).
Why it weakens: the reader has no failure or tension to anchor the design; the intro must be reverse-engineered by the reviewer.
Mitigation observed: the stakes paragraph (antibody discovery constraints) and wet-lab payoff carry the intro — viable when the method's value is self-evident to the subfield, risky anywhere else. Only ~1–3 clear corpus instances.

**AP3 — Results-dumping introduction.**
Instances: NeurIPS 2023 DecodingTrust (findings as per-perspective bullet catalogue before any method — deliberate for a benchmark paper), NeurIPS 2024 Rho-1 (results catalogue with self-reference numbers in the intro).
Why it weakens: numbers without an argumentative spine read as bragging; reviewers can't tell which number is the claim.
Mitigation observed: both papers are evidence-first genres (benchmark audit; empirical-regularity method), where the results ARE the contribution. For method papers, front-loading numbers (Laban's 90→65) works only as a single headline, never as a catalogue.

**AP4 — Post-hoc storytelling (explaining an inconvenient result after the fact).**
Instance: ECCV 2022 distance correlation (the ResNet-50 vs ResNet-152 information inversion "is explained post hoc" — flagged in the DNA as a vulnerability).
Why it weakens: a mechanism invented to fit an unexpected number is unfalsifiable; reviewers discount the entire analysis section. No best paper leans on post-hoc explanation for a central claim — it appears only in supporting analyses.

**AP5 — Buried or absent limitations.**
Instances: ICCV 2023 ControlNet ("no limitations/discussion of failure cases in main text"); ICCV 2025 BrickGPT (limitations deferred to appendices); ICLR 2022 H-divergence (paper ends with no conclusion section).
Why it weakens: reviewers supply the missing limitations themselves, uncharitably; the rebuttal then fights on the authors' weakest ground.
Context: these papers still won on overwhelming capability evidence — the corpus norm is the opposite (≈70% of DNA files show a dedicated limitations paragraph or limitations-in-conclusion; theory papers normalize "open problems as legacy" instead).

**AP6 — Circular self-proposed metrics.**
Instances: ICLR 2024 walk-jump (DCS is self-proposed and the primary benchmark — "circularity risk, partially mitigated by wet-lab calibration"); NeurIPS 2022 MineDojo (MineCLIP is both reward and success criterion on Creative tasks).
Why it weakens: the paper grades its own homework; every headline number inherits the metric's biases.
Mitigation observed: external ground truth layered on top (wet-lab expressibility; human-agreement subset). Without such an anchor, avoid proposing the evaluation you win under.

**AP7 — Unverifiable / proprietary evaluation.**
Instances: ICML 2024 VideoPoet (Google-internal raters, proprietary data pipeline); NeurIPS 2022 Imagen (no model release; internal raters; undisclosed data); ICML 2024 Genie (model/data withheld); CVPR 2026 D4RT (internal dataset mixture).
Why it weakens: claims rest on trust; reproducibility reviewers flag it, and comparisons to open baselines are contested.
Mitigation observed: heavy disclosure of everything short of the artifact (prompt banks, rating protocols, pinned model versions) — credibility through procedure when the artifact can't ship.

**Citation dumping — no clear instance.** The corpus conspicuously lacks citation-dumping intros. The dominant citation moves are purposeful: capability-threshold ladders (pick & solve), taxonomy tables (GD-WL, EDM, twisted-SMC), chronological genealogies with each entry tagged by its deficiency (transductive bounds, Balanced FTRL), and exclusion-by-constraint lists (VTM). Related-work sections that fail to end in "the cell this paper occupies" were not observed among these 102 winners.

---

## Candidates (single-paper observations; too thin for full entries)

- **Date-stamped leaderboard claims** — ProcTHOR results preview "as of 10am PT on June 14th, 2022" makes leaderboard claims auditable (also ages fast).
- **Pedagogical terminology section for cross-disciplinary readers** — ClimSim's "Concepts and Terminology" (§1.2) teaching Earth-science vocabulary to ML readers; recasts the contribution as community-bridging.
- **Adversarial self-attack as a dedicated section** — Kirchenbauer watermark (§7 "Attacking the watermark"): attacking your own method elevated to a contribution.
- **Reader-routing roadmap paragraph** — SPAD (routes reader types through the paper); also ICLR 2026 lost-in-conversation (routes to Implications). Borderline 2-paper; kept as candidate pending a third.
- **Pre-announced negative result in the contribution list** — STDE pre-announces that HTE cannot pass fourth order, strengthening positioning by advertising a falsifiable boundary.
- **Proposition→recommendation mirroring in position papers** — Hazra future-of-work (P1–P6 answered by R1–R6) makes a normative paper auditable.
- **Numbered worked-example paragraphs before formalism** — pick & solve (Example 1/2 ground manifold theory in a cubic); theory-paper pedagogy device.
- **Ethics/disclosure apparatus as narrative** — stealing-the-last-layer (impact statement inside the intro), Genie (responsibility/disclosure sections): the security/release posture itself becomes part of the argument.

---

*Maintenance: update X and N after every mining run (spec §2). Candidate observations graduate to full entries at ≥2 papers. Sources: all 102 files in `knowledge/paper-dna/`; no DNA file was modified during mining.*
