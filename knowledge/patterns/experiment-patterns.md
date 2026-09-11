# Experiment Pattern Library — best-paper corpus

Corpus: N = 102 Paper DNA files (NeurIPS 2021–2025, ICML 2023–2026, ICLR 2022–2026, CVPR 2022–2026, ICCV 2021/2023/2025, ECCV 2022/2024; oral/award/best-paper caliber). Mined 2026-09-11 from `experiments` (RQ mapping, setup, baseline) and `narrative.experiments_strategy` of all 102 files. 97/102 papers carry explicit experiment entries; 5 have none (3 position papers, 2 pure-theory papers); ~12 more are theory-led, where "experiments" are theorem corroboration or a single validation run.

Headline statistic: best papers run **few experiments** — mean 3.4 experiment families per paper (median 3, range 1–7) — but every family names the claim(s) it supports (97/97 experiment-bearing papers in this corpus encode an explicit experiment→claim map). Experiment count ≈ central-claim count; the "table count ≈ claim count" hypothesis is confirmed.

## TOP PATTERNS (quick reference)

| # | Name | Frequency | One-line summary |
|---|---|---|---|
| P001 | Claim-Mapped Experiment Core | 97/97 exp-bearing (frequent) | 3–5 experiment families, each tagged to named claims; no orphan tables |
| P002 | RQ1-Anchored Benchmark-First | ~35/102 (common) | Main-objective benchmark opens the section; mechanism and generality follow |
| P003 | Necessity Ablation Ladder | 54/102 (common) | Component-removal ablation, rows named after the deleted part |
| P004 | Scaling-and-Sweep Doctrine | ~55/102 (common→frequent) | Size/data/hyperparameter sweeps with fitted curves as first-class evidence |
| P005 | Generalization Battery | 59/102 (common) | Unseen datasets / zero-shot / transfer / cross-architecture as a standard block |
| P006 | Efficiency Accounting | 42/102 (common) | Runtime/memory/FLOPs/cost columns woven into the main tables, not an appendix |
| P007 | Fairness Demonstration | 40/102 (occasional) | Matched parameters/compute, retrained baselines, unified reproduction, disclosed gestures |
| P008 | Mechanism Probe | 34/102 (occasional) | Dedicated why-does-it-work analysis (KL, entropy, Jacobian, attention, probing) |
| P009 | Rival-Exclusion Discriminating Control | 22/102 (occasional) | A control set up to kill the *competing* explanation, not just to show necessity |
| P010 | Signature Negative Result | 25/102 (occasional) | An honest failure/boundary condition run deliberately, often as the closing experiment |

---

## 1. Corpus statistics

### 1.1 RQ coverage (papers whose experiments explicitly answer each RQ)

| RQ | Question | Papers | % of N=102 | Class |
|---|---|---|---|---|
| RQ1 | Does the method improve the primary objective? | 68 | 67% | frequent |
| RQ3 | Why does it work? | 42 | 41% | common |
| RQ4 | Does it generalize? | 41 | 40% | common |
| RQ5 | Is it efficient? | 26 | 25% | occasional |
| RQ2 | Does the central mechanism cause the improvement? | 15 | 15% | rare* |
| RQ6 | How robust is it? | 8 | 8% | exceptional* |
| RQ7 | Where does it fail? | 2 | 2% | exceptional* |

\* Caveat: these counts read the DNA's literal `RQx` labels, and the labeling is loose — RQ2-style component ablations are frequently tagged RQ3/RQ4 by the annotator, and robustness/failure work is often folded into RQ4/RQ6-flavored entries. Re-counted **by content** (§1.3 ablation distribution), RQ2 coverage is effectively ~50% (necessity ablations in 54 papers) and RQ6 ~25% (robustness/attack/seed experiments in 25). RQ7 as a dedicated experiment remains genuinely rare; failure discussion usually lives in prose (limitations), not experiments.

Coverage by paper archetype: typical full paper = RQ1 + RQ2/3 + RQ4 (3 RQs); theory-led papers answer only RQ3-flavored corroboration; new-capability papers (Genie, UniSim, SPAD imaging) answer RQ1-by-demonstration and skip RQ2.

### 1.2 Typical RQ orderings

Five ordering archetypes (overlapping; counted from `experiments_strategy` across all 102 files):

1. **RQ1 → RQ2/3 → RQ4/5 (benchmark-first, textbook)** — ~35 papers. Main benchmark vs strongest baselines opens; component ablations immediately after; generality/efficiency last. (Swin ICCV 2021, NCI NeurIPS 2022, VAR NeurIPS 2024, VGGT CVPR 2025, DPO NeurIPS 2023.)
2. **Diagnosis/mechanism-first (inverted)** — ~15 papers. The phenomenon or the joint ablation comes *before* the SOTA table because the thesis is the explanation, not the leaderboard. (UniAD CVPR 2023 — giant Table 2 joint ablation before per-task SOTA; Darcet ICLR 2024 — characterize artifacts before remediation; Agarwal NeurIPS 2021 — diagnose evaluation before prescribing; AutoGuidance NeurIPS 2024 — toy mechanism, then records.)
3. **Prediction → verification arc** — ~18 papers. Insight section states numbered falsifiable predictions; each experiment section restates the prediction it tests. (Schaeffer NeurIPS 2023, Sorscher NeurIPS 2022, Chinchilla NeurIPS 2022, Muennighoff NeurIPS 2023, Kadkhodaie ICLR 2024, Amos ICLR 2024.)
4. **Escalating-realism ladder** — ~20 papers. Synthetic/theory-check → small real → frontier scale → out-of-distribution; each rung defends against a different attack (artifact? scale? robustness?). (Kim-token-ordering ICML 2025, Chandra NeurIPS 2022, CollabLLM ICML 2025, Twisted-SMC ICML 2024, Nagarajan ICML 2025.)
5. **Claim-mirroring order** — ~22 papers. Experiment order duplicates the claim list order ("predict well, then improve generation"); strategy lines say "maps one-to-one onto" claims. (RAHF CVPR 2024, VTM ICLR 2023, BrickGPT ICCV 2025, Rho-1 NeurIPS 2024.)

Also observed: capability-demonstration-first (new-capability papers open with the demo, quantification second — Genie ICML 2024, SPAD ICCV 2023, UniSim ICLR 2024, D4RT CVPR 2026) and deliberate strong-to-weak ordering ending on a negative result to build trust (1000-layer RL NeurIPS 2025).

### 1.3 Ablation-type distribution (papers whose experiments contain each type)

| Ablation type | Papers | Class | Signature instances |
|---|---|---|---|
| Necessity (remove component → drops) | 54 | common | Leave-one-loss-out (VGGT), remove-each-of-5-components (NCI), configs A→F ladder (EDM), w/o Matching vs w/o Adaptation (VTM), module-inclusion 13-row table (UniAD) |
| Scaling study (size/data/compute curves) | ~55 | common→frequent | Chinchilla 400+ models; VAR 18M–2B power-law fit; Genie 40M–2.7B; Muennighoff epoch sweeps |
| Mechanism probe (why it works) | 34 | occasional | Per-token KL (Qi), Jacobian eigendecomposition (Kadkhodaie), entropy-at-forks (JustGRPO), attention-sink share (Gated Attention) |
| Sensitivity sweep (hyperparameter response) | 25 | occasional | Autoguidance weight×capacity×EMA grid; DiffStride d0 sweep 10⁻¹⁶..10⁻²; CFG churn parameters (EDM) |
| Robustness / attack / seeds | 25 | occasional | Adversarial self-attack section (Kirchenbauer §7), 3–100 run subsampling (Agarwal), GCG/prefill batteries (Qi) |
| Interaction (factors together) | ~12 | rare | 2×2 factorial SPT×init (Amos); non-linearity×sparsity controls (Gated Attention); depth×width×actor×critic grid (1000-layer RL); n×p phase plane (Bonnaire) |
| **Rival-exclusion discriminating control** | 22 | occasional | See P009 |
| Efficiency/cost experiment | 42 | common | See P006 |

Interaction ablations are the scarcest sophisticated type (~12%) — when present they are usually the paper's signature causal probe.

### 1.4 Baseline-fairness demonstrations (40 papers)

Demonstration forms actually used, in decreasing frequency:
- **Matched capacity/compute**: parameter-matched expansion baselines (Gated Attention NeurIPS 2025: more KV heads/experts as controls; 1000-layer RL: parameter-matched depth/width grid; GD-WL ICLR 2023: 500k-parameter budget for all 20+ architectures; Genie: tokenizers at matched params).
- **Same-data retraining of baselines**: "all baselines retrained on the same data" (Generative Image Dynamics CVPR 2024); baselines given the authors' own stability analysis (BrickGPT ICCV 2025).
- **Strengthen-the-baseline-then-compare**: JAX rewrite + parallelization attributed layer-by-layer before crediting STDE (Shi NeurIPS 2024); re-evaluation under the competitor's protocol (Agarwal NeurIPS 2021); self-reproduced unified comparison table alongside heterogeneous published numbers (JustGRPO ICML 2026).
- **Matched evaluation budgets**: variance compared at equal function evaluations (RODEO NeurIPS 2022); same frames/compute (UniAD).
- **Fairness gestures inside captions/protocols**: baseline decoding heads removed in the speed comparison (D4RT CVPR 2026); motion-explicit prompt bank disclosed as an anti-still-bias safeguard (VideoPoet ICML 2024); analytic sampling without temperature scaling disclosed (SEDD ICML 2024); runtime column in every task table (VGGT).
- **Fairness-as-result**: blind parity test vs industrial-scale training (ControlNet ICCV 2023: detection precision 0.52 = chance).
- **Disclosed unfairness**: CLIP evaluation flagged as favoring own representation (DreamFusion ICLR 2023).

### 1.5 Figure 1 census (recorded for ~35/102 papers)

| What Figure 1 shows | Share (of recorded) | Examples |
|---|---|---|
| Headline result / teaser (key curve or sample gallery) | ~40% | Imagen samples (NeurIPS 2022); DreamFusion gallery (ICLR 2023); SEDD Pareto frontier (ICML 2024); Rho-1 headline gain (NeurIPS 2024); 1000-layer RL scaling curve (NeurIPS 2025); SPAD 9-orders-of-magnitude demo (ICCV 2023) |
| Concept / mechanism / theoretical picture | ~35% | CFG-as-truncation toy densities (AutoGuidance NeurIPS 2024); two-timescale phase diagram (Bonnaire NeurIPS 2025); toy-vs-LLM point juxtaposition (Superposition NeurIPS 2025); search-tree cartoon (Limit of RLVR NeurIPS 2025); Type-I/II error taxonomy (MAUVE NeurIPS 2021); Alice–Bob thought experiment (Abel NeurIPS 2021) |
| Observation / diagnosis anomaly | ~15% | Per-token KL concentration (Qi ICLR 2025); train/test transition curves (Kadkhodaie ICLR 2024); two-cluster collapse ("time is a river") (Hivemind NeurIPS 2025); leakage-demo curve (Papernot ICLR 2022) |
| Design-space / taxonomy map | ~10% | solve-&-pick vs pick-&-solve flowchart (Hruby CVPR 2022); standalone/MTL/end-to-end design space (UniAD CVPR 2023); framework map (Dataset Diversity ICML 2024); Allocation/Return axes (Muennighoff NeurIPS 2023) |
| Method/pipeline overview | ~10% | Data+model pipeline (RAHF CVPR 2024); 4-part numbered pipeline (CollabLLM ICML 2025); full system before equations (NCI NeurIPS 2022) |

Reading: when Figure 1 is a *result*, it is the single most load-bearing number; when it is a *concept*, it is drawn so the mechanism is visible before any equation. Theory-adjacent best papers prefer the concept/anomaly Figure 1; systems and generation papers prefer the teaser.

---

## 2. Pattern entries

```
Pattern P001
---------------------------
Name:                  Claim-Mapped Experiment Core
Frequency:             97 / 97 experiment-bearing papers (frequent; 95% of corpus)
Typical structure:     3–5 experiment families, each tagged supported_claim: Ck; claim list written
                       before experiments; no orphan tables, no claim without a family
Most common domains:   all venues and fields — universal
Typical evidence:      main table per central claim; mean 3.4 families (median 3, max 7) for ~5 claims
Why it works:          reviewers audit claim→evidence coverage; a short, fully-mapped section reads as
                       confidence, while long unmapped sections read as hope. Few-but-mapped also
                       concentrates reviewer attention on the paper's strongest ground.
Observed in:           ICCV 2023 — ControlNet (E1–E5 → C1–C5); NeurIPS 2024 — Visual Autoregressive
                       Modeling (benchmark→scaling→zero-shot→ablation, each row tagged); ICLR 2025 —
                       AlphaEdit (explicitly numbered RQs 1–4 as subsections)
Caveats:               fails when a central claim is only qualitatively supported (capability papers);
                       the map is an argument, not proof — reviewers attack the mapping itself.
Matrix position:       the whole experiments section; enforced at the level of section organization
```

```
Pattern P002
---------------------------
Name:                  RQ1-Anchored Benchmark-First Ordering
Frequency:             ~35 / 102 (common)
Typical structure:     RQ1 main benchmark vs strongest baselines → RQ2/3 component ablations →
                       RQ4 generality → RQ5 efficiency; ablations woven immediately after the
                       headline table, not pooled at the end
Most common domains:   CV (Swin, VGGT, VAR), IR (NCI), LLM alignment (DPO), optimization (D-Adaptation)
Typical evidence:      SOTA table with runtime column; ablation table named after removed components
Why it works:          answers the reviewer's first question (is it better?) before asking for attention;
                       placing ablations adjacent to the main result lets the reader attribute the win
                       while the numbers are still in view
Observed in:           ICCV 2021 — Swin Transformer (3 benchmark sections then a mapped ablation
                       section); NeurIPS 2022 — Neural Corpus Indexer (Tables 1–2 → ablation Table 3 →
                       analysis); NeurIPS 2023 — DPO (controlled objective → real tasks → OOD)
Caveats:               invites "incremental benchmark paper" readings for insight-led papers; papers
                       whose contribution is an explanation should invert the order (see P015).
Matrix position:       opening of the experiments section; sets the section's skeleton
```

```
Pattern P003
---------------------------
Name:                  Necessity Ablation Ladder
Frequency:             54 / 102 (common)
Typical structure:     full model → minus component A → minus B → ... ; rows literally named after
                       the removed part ("- Same EMA", "w/o Matching", "-w/o Resistance Distance");
                       cumulative A→F ladders when components were introduced sequentially
Most common domains:   CV, generative models, LLM architecture, embodied AI
Typical evidence:      one table; each row's drop attributed to the named design element
Why it works:          converts "we added many things" into "each thing pays"; preempts the
                       kitchen-sink attack, which is the default suspicion toward any multi-part method
Observed in:           NeurIPS 2022 — EDM (cumulative configs A→F isolating preconditioning/loss/
                       augmentation); ICLR 2024 — Vision Transformers Need Registers (leave-one-loss-out
                       + register-count sweep); CVPR 2023 — UniAD (13-row module-inclusion table where
                       ID-0 is the naive MTL baseline)
Caveats:               necessity ≠ sufficiency ≠ mechanism; a ladder alone cannot answer "why" —
                       best papers pair it with a probe (P008) or a discriminating control (P009)
Matrix position:       ablation subsection immediately after the main result, or (inverted papers)
                       as the opening table
```

```
Pattern P004
---------------------------
Name:                  Scaling-and-Sweep Doctrine
Frequency:             ~55 / 102 (common, near-frequent); scaling fits as primary evidence in ~15
Typical structure:     sweep an axis (params, data, epochs, shots, k, depth) → plot on log axes →
                       fit a law/curve → read a prediction off the fit → (sometimes) verify the
                       prediction at a new scale
Most common domains:   LLM scaling (Chinchilla, Muennighoff), generative models (SD3, VAR, Genie),
                       data pruning, RL (1000-layer)
Typical evidence:       power-law fits with reported exponents/CI; Pareto frontiers; pass@k curves
Why it works:          a fitted curve is portable knowledge — it predicts settings nobody trained;
                       reviewers treat a law as a contribution larger than any single benchmark win
Observed in:           NeurIPS 2022 — Chinchilla (400+ models, three independent estimation
                       methodologies converging); NeurIPS 2024 — VAR (scaling law across 6 orders of
                       magnitude of compute); NeurIPS 2025 — Limit of RLVR (pass@k to k=1024 as the
                       primary instrument)
Caveats:               fits extrapolate dangerously; best papers show collapse/curvature points and
                       state the fit's range; single-seed large sweeps draw statistics attacks
Matrix position:       dedicated subsection ("scaling laws", "analysis") or the main evidence itself
```

```
Pattern P005
---------------------------
Name:                  Generalization Battery
Frequency:             59 / 102 (common)
Typical structure:     unseen datasets (train on A, test on B) + zero-shot tasks + cross-architecture
                       transfer + downstream-backbone reuse; often a zero-shot row separated from a
                       fine-tuned row to isolate generalization from adaptation
Most common domains:   3D vision (VGGT, D4RT), foundation models (Swin, Registers), datasets &
                       benchmarks (LAION-5B, ProcTHOR)
Typical evidence:      transfer table; "unseen by all methods" protocol note; backbone-swap rows
Why it works:          distribution shift is the first defense of any baseline ("it overfits the
                       benchmark"); a battery converts that defense into a demonstrated property
Observed in:           CVPR 2025 — VGGT (CO3Dv2/RealEstate10K unseen by all methods, plus NVS and
                       tracking-backbone transfer as external validity); ICCV 2021 — Swin (four
                       detection frameworks, backbone swapped only); NeurIPS 2022 — MineDojo (27
                       unseen weather/lighting scenarios + open vocabulary)
Caveats:               transfer tasks must be chosen for difficulty, not convenience; one easy
                       zero-shot demo invites the cherry-picking charge — Registers answers it by
                       reporting the OpenCLIP counter-case in full
Matrix position:       second or third block of the experiments section; in foundation-model papers,
                       the main event
```

```
Pattern P006
---------------------------
Name:                  Efficiency Accounting as Continuous Evidence
Frequency:             42 / 102 (common)
Typical structure:     runtime/memory/FLOPs/queries/USD woven into main tables (a runtime column in
                       every task table) rather than quarantined in an appendix; speed-quality
                       trade-off plots as first-class figures
Most common domains:   CV systems (VGGT, D4RT), generative models (Analytic-DPM, SEDD, VAR), security
                       (Carlini), optimization (D-Adaptation)
Typical evidence:      FID-vs-NFE, accuracy-vs-FPS, queries-per-logit, wall-clock accuracy curves
Why it works:          "at what cost?" is the second reviewer question after "is it better?";
                       continuous accounting shows the win is a *frontier position*, not a point
                       achieved by unlimited compute
Observed in:           CVPR 2025 — VGGT (runtime column in every table); CVPR 2026 — D4RT
                       (tracks-per-FPS throughput benchmark, 18–300×); ICML 2024 — Stealing LLM
                       Layers (cost as the core experimental language: bits/logit, q/logit, USD)
Caveats:               hardware must be disclosed and held fixed; asymmetric accounting (own method
                       optimized, baselines not) is a fairness red flag — D4RT removes baseline
                       decoding heads precisely to defuse it
Matrix position:       columns inside main tables + one dedicated trade-off figure
```

```
Pattern P007
---------------------------
Name:                  Fairness Demonstration
Frequency:             40 / 102 (occasional, at the common boundary)
Typical structure:     an explicit device that equalizes a confound — parameter matching, same-data
                       retraining, matched evaluation budget, unified reproduction protocol, or a
                       fairness gesture stated in a table caption
Most common domains:   LLM architecture (Gated Attention), RL scaling, theory-with-experiments papers,
                       generative model comparisons
Typical evidence:      "parameter-matched expansion baselines", "all baselines retrained on the same
                       data", "500k parameter budget per architecture", self-reproduced Table 2
Why it works:          unequal-comparison attacks are the cheapest reviewer weapon; a visible
                       equalization device converts the fairness question from an objection into a
                       design feature the authors clearly anticipated
Observed in:           NeurIPS 2025 — Gated Attention (30-variant scan with parameter-matched
                       expansions; FFN-width-reduced parity); NeurIPS 2024 — STDE (baselines
                       strengthened with JAX rewrite + parallelization *before* comparison, gains
                       attributed layer by layer); ICML 2026 — JustGRPO (unified self-reproduction
                       protocol shoring up heterogeneous published numbers)
Caveats:               over-matching can handicap the own method (matched-to-baseline compute hides
                       the method's efficiency story); disclosure of residual unfairness (DreamFusion's
                       CLIP note) reads better than silent imperfection
Matrix position:       table captions, protocol paragraphs, and a dedicated fairness note where the
                       confound is worst
```

```
Pattern P008
---------------------------
Name:                  Mechanism Probe
Frequency:             34 / 102 (occasional)
Typical structure:     a dedicated analysis that visualizes or measures the claimed internal cause:
                       per-token KL, Jacobian eigenspectra, decode-time entropy at forks, attention-
                       sink share, loss–accuracy correlation, t-SNE of hidden states
Most common domains:   science-of-deep-learning papers, LLM analysis (Qi, Rho-1, RLVR), architecture
                       papers (Gated Attention)
Typical evidence:      analysis figures whose pattern matches the mechanism's prediction; often
                       cross-validated against an independent theory track
Why it works:          reviewers distinguish correlation from causation; showing the internal quantity
                       move exactly where the theory says converts "it works" into "it works for the
                       reason we said"
Observed in:           ICLR 2025 — Shallow Safety Alignment (per-token KL showing alignment lives in
                       the first tokens); NeurIPS 2024 — Rho-1 (selected-token loss follows a power
                       law with accuracy); NeurIPS 2025 — Diffusion Dynamical Regularization
                       (numerics and analytics cross-validated via τ/n collapse)
Caveats:               probes must be predictions, not post-hoc descriptions; a probe consistent with
                       anything explains nothing (Qi's KL figure works because it discriminates deep
                       vs shallow alignment)
Matrix position:       dedicated analysis section; in diagnosis-first papers, the opening
```

```
Pattern P009
---------------------------
Name:                  Rival-Exclusion Discriminating Control
Frequency:             22 / 102 (occasional)
Typical structure:     H: gain comes from X, rival: gain comes from Y → construct a control in which
                       Y is present but X absent (or vice versa) → result excludes Y → claim "the
                       gain is X, not merely Y"
Most common domains:   mechanism papers across all fields; the signature move of the corpus's
                       strongest causal arguments
Typical evidence:      a twin baseline identical in the rival factor: spectral pooling as the
                       fixed-stride twin of DiffStride; base models prefilled with refusal prefixes;
                       compatible-degradation synthetic guides; six RL algorithms on identical data
Why it works:          necessity ablations cannot distinguish "our mechanism" from "any perturbation
                       would do"; the discriminating control is the only experiment that *chooses
                       between explanations*, which is what a hypothesis-driven reviewer actually wants
Observed in:           ICLR 2022 — DiffStride (spectral pooling controls the Fourier-domain confound,
                       so gains are attributable to learned strides); NeurIPS 2025 — Limit of RLVR
                       (perplexity analysis + distillation contrast separates "sharpening" from
                       "new patterns"; 6-algorithm controlled comparison shows the limit is
                       paradigm-level, not algorithm-level); NeurIPS 2024 — AutoGuidance (synthetic
                       compatible/mismatched degradation pairs show error-similarity, not
                       conditional-vs-unconditional, is the operative ingredient); NeurIPS 2025 —
                       1000-layer RL (deep-collector/shallow-learner split separates exploration
                       from expressivity)
Caveats:               expensive to design; only pays when a rival explanation is *plausible and
                       nameable* — introduce the rival in the narrative first, or the control looks
                       paranoid; misidentifying the rival ruins the inference
Matrix position:       the pivotal experiment of the mechanism section; often the paper's signature
                       (Chandra's stack-height towers; Kadkhodaie's shuffled-pixel control)
```

```
Pattern P010
---------------------------
Name:                  Signature Negative Result / Boundary Condition
Frequency:             25 / 102 (occasional)
Typical structure:     a deliberately-run experiment where the method fails, reported in the main
                       text with interpretation; or a scope test ("does the effect survive X?")
                       that defines the phenomenon's boundary
Most common domains:   RL (1000-layer offline failure), LLM analysis (Lost in Conversation translation
                       control), architecture (Gated Attention's useless variants), security (Kirchenbauer's
                       attack section)
Typical evidence:      a flat/negative curve with an explanation; null-result rows kept in the main
                       table (G3/G4/G5 gating positions ≈ baseline)
Why it works:          a paper that hunts its own failure modes is trusted on its positive claims;
                       boundary conditions convert a fragile effect into a characterized phenomenon
Observed in:           NeurIPS 2025 — 1000-layer Self-supervised RL (honest offline-RL failure
                       delimiting the depth-scaling claim); ICLR 2026 — LLMs Lost in Conversation
                       (translation control defines task properties of the effect); NeurIPS 2024 —
                       Registers (OpenCLIP counter-case analyzed in an appendix, not hidden)
Caveats:               the failure must be interpreted, not just confessed — an unexplained failure
                       reads as fragility; one negative result per paper is a trust signal, five is
                       a résumé of weaknesses
Matrix position:       closing experiment of the section, or a boundary subsection after generality
```

```
Pattern P011
---------------------------
Name:                  Escalating-Realism Ladder
Frequency:             ~20 / 102 (occasional)
Typical structure:     exactly-evaluable synthetic / theory-check → small real task → frontier scale →
                       out-of-distribution; each rung labeled with the attack it retires
                       (artifact? scale? robustness?)
Most common domains:   LLM training/inference (token ordering, Twisted-SMC), optimization, RL
Typical evidence:      same protocol re-run at each rung; the final rung is the headline table
Why it works:          each rung removes one "yes, but" — "toy only", "small only", "in-distribution
                       only" — before the reviewer can think it
Observed in:           ICML 2025 — Token Ordering in Masked Diffusions (L&O-SAT theory check → 1.1B
                       pretrained text → Sudoku/Zebra head-to-head → LLaDA-8B → hard OOD puzzles);
                       ICML 2025 — CollabLLM (simulated benchmark → ablation → zero-shot → 201-person
                       human study); NeurIPS 2022 — Gradient Descent Is the Ultimate Optimizer
                       (MNIST → ResNet/Char-RNN → ResNet-152 transfer)
Caveats:               rungs must share the dependent variable or the ladder is a tour, not an
                       argument; the weakest rung sets the perceived floor — best papers put the
                       theory-check rung where its assumptions hold exactly
Matrix position:       section order itself; each subsection framed as one rung
```

```
Pattern P012
---------------------------
Name:                  Prediction→Verification Arc
Frequency:             ~18 / 102 (occasional)
Typical structure:     insight section states numbered, falsifiable predictions → each experiment
                       subsection opens by restating the prediction verbatim → test → confirmation
                       (or honest deviation)
Most common domains:   science-of-ML (Schaeffer, Sorscher, Kadkhodaie), scaling laws (Chinchilla,
                       Muennighoff), learning dynamics (Ren)
Typical evidence:      prediction sentences echoed at section tops; predictions that could have failed
                       (Kadkhodaie's suboptimality prediction E5 confirmed the bias even where GAHBs
                       are suboptimal)
Why it works:          makes the paper read as hypothesis-testing rather than storytelling; also
                       makes any deviation informative instead of embarrassing
Observed in:           NeurIPS 2023 — Emergent Abilities of LLMs Are a Mirage (three predictions →
                       three evidence lines in escalating strength); NeurIPS 2022 — Chinchilla
                       (estimate frontier → state the Gopher-budget prediction → execute it);
                       NeurIPS 2022 — Beyond Scaling Laws (§4 mirrors §3's numbered predictions)
Caveats:               predictions must be pre-committed and specific; retrofitting predictions onto
                       already-run experiments is post-hoc storytelling and reviewers can smell it
Matrix position:       spans insight section → experiments section; the echo is the pattern
```

```
Pattern P013
---------------------------
Name:                  Capability-Demonstration Evaluation
Frequency:             ~15 / 102 (occasional)
Typical structure:     for genuinely new capabilities: qualitative demonstration (with photon budgets,
                       prompt banks, or protocol notes) as primary evidence → small quantitative
                       anchors (FVD, F1, success rate) → ablations on the enablers; baselines often
                       absent because none exist
Most common domains:   new-capability papers: world models (Genie, UniSim), computational imaging
                       (SPAD), text-to-3D (DreamFusion), video (VideoPoet), minimalist hardware (Klotz)
Typical evidence:      galleries, demo paragraphs with concrete budgets ("77,000 timestamps, ~3,000
                       photons/frame"), agent-use proofs (CoinRun transfer), physical assembly (BrickGPT)
Why it works:          when no baseline can do the task at all, a convincing demonstration *is* the
                       comparison; the trick is keeping the demo honest (un-cherry-picked batches,
                       disclosed prompt selection)
Observed in:           ICML 2024 — Genie (playable demonstrations headline; FVD/Δt-PSNR relegated to
                       ablations); ICCV 2023 — Passive Ultra-Wideband Single-Photon Imaging
                       (capability demos before quantitative comparisons, every demo carrying its
                       photon budget); ICLR 2024 — UniSim (simulator-as-environment proofs: RL in the
                       simulator, zero-shot real-robot transfer)
Caveats:               qualitative-first papers are maximally exposed to the cherry-picking attack;
                       mitigations that work: fixed sampling protocols, un-cherry-picked grids
                       (ControlNet Fig. 8), human studies as anchors (P014)
Matrix position:       opens the experiments section; quantitative anchors follow
```

```
Pattern P014
---------------------------
Name:                  Human Study as External-Validity Anchor
Frequency:             13 / 102 (rare)
Typical structure:     automatic metrics for scale → human study (user preference, MTurk ratings,
                       expert judgement) on the subset where human perception is the ground truth;
                       often includes a metric-validity check (does the automatic judge agree with
                       humans?)
Most common domains:   generative image/video models, LLM alignment, evaluation papers
Typical evidence:      pairwise preference with CIs (Imagen: 39.2% photorealism preference), blind
                       detection test at chance (ControlNet), 6476-judgement debate study with p-values
                       (Khan), 201-participant collaboration study (CollabLLM)
Why it works:          human-facing claims cannot be settled by FID; one well-designed human study
                       retires "but do people actually prefer it?" and doubles as evidence the
                       automatic metrics are meaningful
Observed in:           NeurIPS 2022 — Imagen (dual-track: COCO FID for comparability + human
                       preference as ground truth); ICML 2024 — Debate (LLM judges first — cheap and
                       controlled — human judges second — expensive and confirmatory); NeurIPS 2023 —
                       DPO (GPT-4-judge validity study showing it agrees with humans about as often
                       as humans agree with each other)
Caveats:               small-N studies (12 users) draw sample-size attacks; the metric-validation
                       variant is often worth more than the headline study — it licenses every other
                       number in the paper
Matrix position:       final block of the experiments section, or woven in as an evaluation-validity
                       subsection
```

```
Pattern P015
---------------------------
Name:                  Ablation-First Inversion
Frequency:             ~8 / 102 (rare)
Typical structure:     the joint ablation / mechanism table precedes the per-task SOTA tables, because
                       the thesis is the design philosophy, not the benchmark; sometimes the entire
                       section is a "roadmap" walked backwards from outcome to cause
Most common domains:   systems-with-a-thesis (autonomous driving), diagnosis papers (Darcet, Agarwal,
                       AutoGuidance, Qi)
Typical evidence:      a single giant ablation table as the scientific core; SOTA tables presented
                       as corollaries
Why it works:          when the contribution is an explanation, leading with benchmarks buries the
                       thesis under numbers the reader cannot yet interpret; inversion makes the
                       causal story the spine
Observed in:           CVPR 2023 — Planning-Oriented Autonomous Driving (13-row joint ablation before
                       per-task SOTA; "Roadmap toward safe planning" walks backwards from planning to
                       perception); ICLR 2024 — Vision Transformers Need Registers (characterize →
                       remediate → only then benchmark); NeurIPS 2021 — Deep RL Statistical Precipice
                       (diagnosis before prescription)
Caveats:                 risky with area chairs skimming for SOTA; needs a benchmark proof somewhere
                       (UniAD still wins every task) or it reads as evasion
Matrix position:       experiments-section skeleton, fully inverted
```

```
Pattern P016
---------------------------
Name:                  Minimal-Corroboration Theory Paper
Frequency:             ~8 / 102 (rare)
Typical structure:     theory carries the paper; "experiments" are one constructed demonstration or
                       Monte-Carlo check that the theory's qualitative predictions appear at
                       practical scales; explicitly flagged as corroboration, not competition
Most common domains:   learning theory, optimization, game theory, theory of transformers
Typical evidence:      one figure of the theory-predicted ordering (Fiegel: single figure, explicit
                       admission theory and practice diverge); simulation-vs-theorem overlay
                       (Ben-Arous, Even); synthetic gap demonstration (Abbe: coefficient traces showing
                       the MD bias happen)
Typical evidence note: tightness plays the role experiments play elsewhere — every lower bound paired
                       with a matching upper bound (Attias CMI)
Why it works:          reviewers of theory papers ask "is the theorem about the algorithm people
                       actually run?"; one honest corroboration figure answers it without pretending
                       to a benchmark study
Observed in:           ICML 2023 — Balanced FTRL for Game Trees (one figure, "Tweaked" variant
                       flagged as without tight guarantees); NeurIPS 2021 — Continuized Nesterov
                       (simulations relegated to appendix as confirmation); ICML 2023 — Self-Repellent
                       Random Walks (single graph, theory-predicted orderings verified)
Caveats:               corroboration must be at realistic scales and must include the settings where
                       the theory could fail (Abbe's "beyond the previous settings" section);
                       zero experiments with an empirical field is a desk-reject risk
Matrix position:       a short closing empirical section or appendix; never the main course
```

### Candidates (single-paper observations — promote if re-observed)

- **Cost-accounting-as-thesis** (ICML 2024 — Stealing LLM Layers): the security paper replaces accuracy tables entirely with economics (bits/logit, queries/logit, USD, responsible-disclosure caveats). Borderline P006; unique in degree.
- **Metric-artifact induction** (NeurIPS 2023 — Emergent Abilities Mirage): proves a measurement causes a phenomenon by *inducing* it on demand in a different domain (sharp "emergence" from a self-defined discontinuous metric on autoencoders). The strongest form of artifact diagnosis; a methodology, not yet a repeated pattern.
- **Adversarial self-attack as a named section** (ICML 2023 — Watermark LLM, §7 "Attacking the watermark"): attacking your own method becomes a contribution with its own threat model and defenses. Related to P010 but elevated to a section; also present in DecodingTrust (transfer attacks) — watch for promotion.
- **Prediction-instrument experiments** (NeurIPS 2021 — Deep RL Statistical Precipice, synthetic-lift design): inject a *known* effect size and measure whether the evaluation protocol can detect it — an experiment about the measuring instrument itself. Distinct from metric validation (P014); appeared once.
- **Downstream-payoff experiment** (does the method improve a *different* downstream task): UniSim (RL + VLM finetuning), Registers (LOST object discovery), VGGT (NVS + tracking-backbone), dWJS (wet-lab expression), BrickGPT (robotic assembly), LAION-5B (GLIDE/Stable Diffusion). Counted inside P005 here; may deserve its own entry in a larger corpus.
- **Live-evaluation lock-in** (NeurIPS 2024 — PRISM; ICML 2024 — Debate): experiments designed so the *sampling scheme itself* is a manipulated variable (welfare under 7 sampling schemes; static vs interactive judging). Prevalent in participatory-alignment papers only.

---

*Maintenance notes: X/N values are counts of papers whose `experiments`/`experiments_strategy` fields exhibit the pattern; RQ tallies read literal `RQx` labels and are annotated where content-based re-counts differ. Re-tally after every corpus expansion; keep frequency classes per narrative-patterns.md §2.*
