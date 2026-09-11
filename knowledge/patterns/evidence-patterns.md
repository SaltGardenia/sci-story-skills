# Evidence Pattern Library (Layer 1 — Stage 3)

Corpus: 102 best-paper Paper DNA files (`knowledge/paper-dna/`) — NeurIPS 2021–2025 (incl. D&B track), ICML 2023–2026 (incl. position tracks), ICLR 2022–2026, CVPR 2022–2026, ICCV 2021/2023/2025, ECCV 2022/2024. **N = 102.** Mining date: 2026-09-11. Mined from `claims` (evidence classes + pointers), `experiments` (E-ids, RQ mapping, setup/baseline/interpretation), and `narrative.experiments_strategy` of every DNA file (all 102 read; none modified).

Frequency classes: frequent ≥60% · common 40–59% · occasional 15–39% · rare 5–14% · exceptional <5%.

## Master tally (claims+experiments regions, measured across all 102 files)

| Evidence marker | Papers | Class |
|---|---|---|
| Comparative-class claims ("beats/matches X") | 77/102 | frequent |
| Empirical-class evidence | 57/102 | frequent |
| Theoretical-class claims (incl. Theorem/Lemma/Prop pointers) | 53/102 | frequent |
| Efficiency/runtime/memory evidence (runtime, latency, FLOPs, speed, qps, FPS) | 51/102 | common |
| Statistical rigor reporting (seeds, CIs, bootstrap, std, significance) | 47/102 | common |
| Transfer/generalization evidence (zero-shot, unseen, cross-dataset, OOD) | 46/102 | common |
| Mechanistic-class claims | 46/102 | common |
| Descriptive-class claims | 46/102 | common |
| Component ablation evidence (incl. "w/o"-style leave-one-out rows) | 44/102 | common |
| Practical-class claims | 42/102 | common |
| Generalization-class claims | 43/102 | common |
| Causal-class claims | 31/102 | occasional |
| Toy/synthetic controlled testbeds | 31/102 | occasional |
| Benchmark-suite evaluation framing | 31/102 | occasional |
| Scaling evidence (scaling laws/curves, power laws, IsoFLOP) | 27/102 | occasional |
| Quality-vs-cost frontier framing (frontier/Pareto/trade-off) | 23/102 | occasional |
| Qualitative-class evidence (tagged figures) | 18/102 | occasional |
| Oracle / upper-bound anchoring | 17/102 | occasional |
| Negative or boundary results recorded as support | 15/102 | occasional |
| Split-hygiene / leakage-control evidence (held-out, disjoint, withheld) | 15/102 | occasional |
| Human / user evaluation (study, judges, annotators, MTurk) | 12/102 | rare |
| Theory corroboration / assumption-check experiments | 12/102 | rare |
| Intervention experiments on the hypothesized cause | 11/102 | rare |
| Hardware / real-world physical validation (wet lab, robots, optical prototype) | 7/102 | rare |

## TOP PATTERNS (quick reference for Layers 2–3)

| ID | Pattern | Freq | One-line use |
|----|---------|------|--------------|
| P001 | Evidence-Density Pyramid | ~80/102 | Concentrate 4–6 independent evidence pieces on the central claim; 1–2 on peripheral claims. |
| P002 | Component-Ablation Ladder | 44/102 | One "w/o X" row per claimed mechanism; the main table is the claim-to-evidence map. |
| P003 | Parity-Then-Win Ordering | 11/102 | First answer the reader's objection (parity on quality), then win on the real axis (cost/simplicity/stability). |
| P004 | Matched-Comparison Discipline | 34/102 | Pre-empt "unfair baseline" by matching budgets/parameters and saying so in setup or caption. |
| P005 | Diagnosis-Before-Treatment | 12/102 | Establish the mechanism on a toy/analysis before the method; the fix then looks inevitable. |
| P006 | Mechanism Probe | ~15/102 | One small experiment showing the internal signal behaves as the hypothesis predicts, not just final metrics. |
| P007 | Escalating External Validity | ~12/102 | Benchmark → ablation → zero-shot → human study → real world; each rung answers a stronger objection. |
| P008 | Evaluator Validation Study | 12/102 | When an automatic judge/metric carries the headline, validate it against humans before using it. |
| P009 | Honest Negative / Boundary Result | 15/102 | Record where the method fails, openly, and use it to delimit the claim and rule out rivals. |
| P010 | Preemptive Overhead Accounting | 12/102 | Give the method's own cost its own table/figure before the reviewer asks for it. |

---

## Genre Evidence Checklist (feeds Layer 2 experiment design and Layer 3 missing-evidence hunting)

Aggregated from all 102 papers: what evidence pieces reviewers of THIS genre expect, per claim type. Counts = corpus papers whose DNA shows that piece demanded or supplied. Layers 2/3 should treat every piece below the claim type being made as "expected unless explicitly scoped out".

### A. Comparative / performance claims — "our method beats X" (made centrally or supportingly by 77/102 papers)

1. **Head-to-head against the strongest available baseline, including the incumbent paradigm.** 77/102 papers supply a baseline comparison table; reviewer_defense repeatedly names "weakest baseline" as the top vulnerability (NeurIPS 2023 DPO concedes its PPO-on-Anthropic-HH comparison was an external checkpoint it could not improve). Best papers run or reproduce the strongest rival under their own protocol (ICML 2026 JustGRPO re-reproduces all diffusion-RL baselines in a unified protocol, Table 2, because quoted Table 1 numbers are non-identical settings).
2. **Multi-task / multi-dataset breadth (≥2 benchmarks or ≥2 model families).** 31/102 frame benchmark suites explicitly; single-benchmark results are a named vulnerability (NeurIPS 2024 STDE: "empirical scope confined to PINN-style residual losses"; NeurIPS 2024 VAR: "ImageNet class-conditional benchmark only").
3. **Statistical reporting: multiple seeds, CIs, variance.** 47/102. Gold standard set by NeurIPS 2021 Agarwal (100 runs/algorithm where the field used 5; IQM + bootstrap CIs); 3 seeds is the common floor (ICLR 2022 BMG Atari, ECCV2022 DC, ICCV2023 Zhang ControlNet). Few-run point estimates with no variance are a reviewable offense in this corpus.
4. **Matched-compute / matched-parameter comparison note.** 34/102 explicitly. See P004.
5. **Ablation tying the gain to the claimed components.** 44/102. A win without attribution reads as "engineering stacking" — the exact attack CVPR 2023 UniAD pre-empts with its ID-0-vs-ID-12 ablation ("this is not a simple stack of tasks").
6. **Qualitative examples alongside the table.** 18/102 tag qualitative evidence as a claim class; in generation/CV papers (Imagen, ControlNet, VAR, DreamFusion) galleries are primary evidence for quality claims. ControlNet shows "6 un-cherry-picked samples" per cell as an integrity signal.
7. **Runtime/efficiency column in the main results.** 51/102 carry efficiency evidence; CVPR 2025 VGGT puts a runtime column in every task table so the speed-accuracy claim is continuously visible.
8. **Human evaluation when output quality is subjective.** 12/102 run human studies; among generation papers it approaches a norm (NeurIPS 2022 Imagen side-by-side preference with 95% CIs; ICCV 2023 ControlNet AUR study; CVPR 2024 generative image dynamics 80.9% preference; ICML 2024 VideoPoet 5-dimension study with a pre-registered motion-explicit prompt bank). In-house rater pools are a named caveat every time.
9. **Contamination / split hygiene.** 15/102 state leakage-controlled splits or zero-shot protocols explicitly (NeurIPS 2022 ProcTHOR, ICML 2024 VideoPoet zero-shot protocol to avoid benchmark-training contamination, ICML 2025 CollabLLM withheld prompts, ICCV2023 Wei withheld validation prompts).

### B. Mechanistic claims — "the gain comes from X" (46/102 mechanistic-class claims)

1. **Component ablation with leave-one-out rows.** 44/102. The row set should mirror the mechanism list one-to-one (ICCV 2021 Swin Table 4 maps onto §3's named design elements; NeurIPS 2025 gated attention isolates position/sparsity/non-linearity across 30 variants).
2. **Intervention on the hypothesized cause, not just removal.** 11/102 run true interventions: NeurIPS 2024 autoguidance constructs synthetic compatible/mismatched degradations (benefit appears iff degradations match — the causal claim isolated); ICLR 2025 shallow-safety constrains early-token drift during SFT (ASR stays low); NeurIPS 2025 superposition uses the weight-decay dial to move superposition causally; NeurIPS 2025 1000-layer RL decouples collector from learner (deep learner only helps with deep collector).
3. **Internal-signal probe.** ~15/102 (see P006): per-token KL depth (ICLR 2025 shallow safety), fork-token entropy (ICML 2026 JustGRPO), Jacobian eigenvectors (ICLR 2024 geometry-adaptive generalization), loss-category tracking (NeurIPS 2024 Rho-1), first-token attention share (NeurIPS 2025 gated attention), base-model perplexity of RL outputs (NeurIPS 2025 limit of RLVR).
4. **Observation→interpretation pairing.** Mechanistic results are stated as observation ("KL is concentrated on the first few tokens", Fig. 1) followed by interpretation ("alignment is shallow; this also explains why SFT/RLHF pipelines induce it") — ICLR 2025 Qi; "sharpening, not expansion" — NeurIPS 2025 Yue. Interpretation sentences that outrun the probe are the standard reviewer attack.
5. **The mechanism section earns the method section.** In diagnosis-first papers (12/102, P005), the mechanism evidence appears BEFORE the method; reviewers can then check each design decision against the diagnosed cause (autoguidance, registers, shallow safety, JustGRPO).

### C. Causal / attribution claims — "X causes Y" (31/102 causal-class claims)

1. **Everything-else-matched intervention.** 34/102 supply matched/fair comparisons; the phrase "ceteris paribus" appears verbatim (ICLR 2022 BMG Atari: same agent updates, only the meta-objective differs). NeurIPS 2022 Chinchilla's key move is attributing Kaplan's wrong law to a matched-LR-schedule confound (Fig. A1).
2. **Dose-response sweep of the cause.** 17/102 run sweeps as causal evidence: epochs (NeurIPS 2023 data-constrained), houses 10→10K (NeurIPS 2022 ProcTHOR), sharding granularity 2–8 (ICLR 2026 lost-in-conversation: "any multi-turn underspecification triggers it"), prefill length k (ICLR 2025 shallow safety), guidance weight/EMA grids (NeurIPS 2024 autoguidance), stack height (NeurIPS 2022 hyperoptimizer towers).
3. **Rival-explanation exclusion via purpose-built controls.** The corpus has a small set of model control designs: CONCAT single-turn control (ICLR 2026: sharding vs underspecification separated), autoencoder/synthetic-language controls (NeurIPS 2022 Kumar: "any auxiliary loss helps" defused by uniform-vs-selective effects), untrained-agent memory (ICLR 2023 Wijmans), epoch-matched pruning analysis (NeurIPS 2022 Sorscher App. J), parameter-matched expansion baselines (NeurIPS 2025 gated attention).
4. **Necessity AND sufficiency where possible.** Best practice: show the component is needed (ablation) and that adding it alone rescues (ICLR 2025 AlphaEdit: one projection line added to MEMIT/PRUNE/RECT gives +28–43% — plug-in sufficiency across the family).

### D. Generalization claims — "works beyond the training setting" (43/102)

1. **Zero-shot / unseen-distribution evaluation.** 46/102 carry transfer evidence. Canonical forms: OOD input distribution (DPO: TL;DR → CNN/DailyMail), unseen tasks (MineDojo open-vocabulary zero-shot), unseen benchmarks entirely (VGGT evaluated on datasets unseen by all methods; ProcTHOR zero-shot transfer beating SoTA on 3 benchmarks).
2. **Cross-architecture AND cross-domain.** 9/102 test cross-architecture transfer explicitly (NeurIPS 2024 Rho-1 self-reference without curated data; CVPR 2024 RAHF: reward model trained on Stable Diffusion images improves a different generator, Muse — architecture mismatch deliberately built in; ICLR 2024 SPT across model classes × init × pretraining factorial).
3. **Scaling axis as generalization evidence.** 27/102 include scaling curves (performance vs model/data/compute); Chinchilla, LAION (2B > 400M at fixed compute), VAR (Pearson −0.998), ProcTHOR, data-constrained scaling. A single-scale win leaves the "will it hold at scale?" objection open.
4. **A named boundary case or negative transfer result.** The credible generalization claim includes where it stops: offline RL shows no depth benefit (NeurIPS 2025 1000-layer RL: "little evidence... depth-4 baselines often best"); no headroom on BIDMC (ICLR 2024 SPT); document translation sharded shows no degradation (ICLR 2026 — defines the effect's task boundary); OpenCLIP registers slightly worse (ICLR 2024 Darcet, counter-case analyzed in appendix).
5. **Deliberate-mismatch validation over easy same-family validation.** The strongest instances test on the thing the method was NOT built for (iccv2023 Wei: dead time and SPAD arrays stress the theory's boundary conditions by design).

### E. Practical / efficiency claims — "cheaper, faster, simpler, stable" (42/102 practical; 51/102 carry efficiency evidence)

1. **Wall-clock and memory measured, not just FLOPs.** Only 4/102 explicitly report wall-clock; the lesson case is ICCV 2021 Swin Table 5 (sliding-window attention looks fine in FLOPs, loses 2.5–40× in real latency). Reviewers treat FLOPs-only efficiency claims as incomplete.
2. **Quality-vs-cost frontier, not single-point wins.** 23/102 report frontiers: FID-vs-NFE (NeurIPS 2022 EDM), generative-perplexity vs network evaluations (ICML 2024 SEDD, log-log linear Pareto), accuracy vs pixel count (ECCV 2024 minimalist vision: 4 freeform pixels ≈ 32×32 baseline), effective time εt = µt/ρ (CVPR 2022 minimal problems), pass@k vs k (NeurIPS 2025 RLVR limit — the crossing curve IS the finding).
3. **Hardware/compute disclosure.** 7/102 disclose hardware and cost explicitly (NeurIPS 2022 EDM ~250 MWh disclosed; CVPR 2025 VGGT 64 A100 × 9 days; ICCV 2023 ControlNet one 3090Ti vs industrial A100 cluster with blind parity test); absence is a standard meta-review complaint at this tier.
4. **The method's own overhead, preemptively.** 12/102 (P010): +1–2% per stack level (hyperoptimizer), 23% memory/34% time (ControlNet Fig. 4), per-batch time table (AlphaEdit), runtime accounting with a concession when the news is bad (NCI: "inference speed needs to be improved", §5 — honesty converts a weakness into a scoped limitation).
5. **Stability evidence for training claims.** When the claim is "stable training" (gated attention, SEDD, QK-norm in SD3), the evidence is loss-spike elimination, divergence thresholds (baseline diverges at LR 8e-3, gated converges), and attention-entropy tracking — not accuracy alone.

### F. Theoretical claims — "we prove X" (53/102 theoretical-class; 34/102 point to Theorem/Lemma/Propositions as evidence)

1. **Formal statement + proof, with the informal version in the intro.** The corpus pattern: informal theorem in §1, formal statement + proof sketch in main text, full proof in appendix (Bubeck, DPO Theorem 1, AlphaEdit null-space guarantee, analytic-DPM).
2. **Matching upper and lower bounds / tightness construction.** 8/102 explicitly claim tightness; the strongest theory papers close the gap: Haghtalab 2022 (collaborative learning), Chase 2025 (quadratic transductive gap, both directions), Attias 2024 (CMI lower bounds against matching upper bounds by construction), Fiegel 2023 (rate ladder completed). Bubeck 2021 adds a tightness remark showing the law is essentially best possible.
3. **Corroboration experiment / worked example.** 12/102 (P014): Monte-Carlo verification of the theory's predictions with CIs (Abel 2021), exactly solvable examples with quantitative failure probabilities (Benarous 2022: 1/2, 29/32), theory-predicted vs empirical agreement (Kirchenbauer 2023: predicted 142.2 vs empirical 159.5 green tokens; ICLR 2024 dWJS: derived σc ≈ 0.51 matches hyperparameter search).
4. **Assumption-check experiment.** Theorems rest on assumptions; best papers measure them: central-path decomposition negligibility (ICLR 2022 Han Fig. 2), eNTK stability across training (ICLR 2025 Ren App. C), λ≈0 and zero-mean caveats listed per theorem.
5. **Recovery of prior results as special cases.** 21/102 — validation by predictive coverage of prior art (Rodeo recovers DisARM/ARMS settings; TL recovers GIN/GCN bounds and answers open problems; conformal-CRC recovered as special cases of the BQ framework; STDE encompasses SDGD/HTE). A framework that recovers known results makes the new results credible.
6. **Exact-complexity comparison table against prior art.** Theory papers position via a table of rates/blockers (Haghtalab Table 1; FORS improvement list; Wei regime-comparison Table 1 in imaging). Each prior line is tagged with its precise disqualifier.

### G. Cross-cutting evidence disciplines (apply to every claim type)

1. **Evaluator validity (12/102).** Any automatic judge carrying a headline needs its own validation experiment: GPT-4-vs-human agreement (DPO §6.4: "agrees about as often as humans agree with each other"), MineDojo F1 vs human labels (97.4–100), debate-judge calibration and rejection curves (Khan 2024), 25-annotator dense preference with robustness tables (INFINITY-CHAT 2025), MAUVE's full battery (face validity → robustness → human BT correlation).
2. **Oracle / upper-bound anchoring (17/102).** Include a row that bounds what is achievable: Clairvoyant Bug (Wijmans), all-anchors oracle B1 (Hruby), expert-judge top-line (Khan), ground-truth reward PPO-GT (DPO), oracle-based probing (Wei 2023). This converts "is 76% good?" into "76% of a known ceiling".
3. **Negative results as support (15/102).** See P009 — controls that fail, hypotheses rejected, remedies inadequate; each is used to rule out a rival explanation or delimit scope.
4. **Leakage/split hygiene (15/102)** and **hardware disclosure (7/102)** as above; both are checklist failures when absent.
5. **Interpretation-discipline moves.** Observation vs interpretation sentence pairing ("X decreased" → "consistent with..."); explicit alternative exclusion ("gains are not attributable to extra parameters, since parameter-matched..."); scope-limiting closers ("initial evidence" — DPO; "speculative" — Bubeck; "possibly CMP-specific" — Abel; "current RLVR" — Yue, deliberately time-indexed and falsifiable). These are the difference between a result and an overclaim, and reviewer_defense.vulnerabilities shows reviewers check exactly this seam.

---

## Pattern entries

```text
Pattern P001
---------------------------
Name:                  Evidence-Density Pyramid
Frequency:             ~80 / 102 (frequent; strict co-occurrence of component ablation AND mechanism/probe evidence in 42/102, rising to ~80 when scaling, qualitative, or efficiency channels are added)
Typical structure:     Central claim ← main table + ablation + mechanism probe + scaling/transfer + qualitative + cost accounting (4–6 independent pieces); supporting claims ← 1–2 pieces; peripheral claims ← a single number or sentence
Most common domains:   All experimental genres; weakest in pure theory papers (where density concentrates in theorem count + corollary coverage)
Typical evidence:      The paper's abstract claims are each backed by ≥2 distinct evidence channels; the DNA claim blocks show 5–8 claims with evidence pointers, of which the 2–4 central claims carry most pointers
Why it works:          Reviewers attack the load-bearing claim; concentration means the strongest attack still hits 3+ independent lines, any one of which survives. Diffuse density (every claim equally thin) reads as breadth over depth.
Observed in:           NEURIPS 2022 — EDM (framework + sampler-on-frozen-models + ablation ladder A→F + churn analysis + SOTA); NEURIPS 2024 — Autoguidance (toy mechanism + synthetic-degradation causal test + records + ablation + qualitative transfer); NEURIPS 2025 — Gated attention (30-variant scan + dense scaling + three mechanism interventions + long-context payoff); ICCV 2023 — ControlNet (user study + zero-conv ablation + benchmark + data-scaling + industrial parity); contrast: ICLR 2022 — Tensor language (pure theory: density = theorem hierarchy + recovered prior results)
Caveats:               Peripheral claims with zero evidence are attack surface too — the pyramid needs a floor (one pointer per claim). Overloading the central claim with >7 pieces invites "kitchen sink" readings.
```

```text
Pattern P002
---------------------------
Name:                  Component-Ablation Ladder
Frequency:             44 / 102 (common)
Typical structure:     Main results table → immediately adjacent ablation table with one leave-one-out row per claimed design element ("w/o X") → each row read back onto a named mechanism
Most common domains:   All experimental genres (ML systems, CV, LLM, embodied AI, generative models)
Typical evidence:      "w/o"-style rows; cumulative configuration ladders (config A→F); ablations embedded in the main table
Why it works:          The ablation table is a contract: every mechanism named in the method section must appear as a removable row. Reviewers use it to verify the causal story without re-running anything.
Observed in:           ICCV 2021 — Swin Transformer (Table 4 maps one-to-one onto §3 design elements: shift, position bias, attention impl); NEURIPS 2022 — NCI (Table 3 ablations "woven immediately after the main result"); CVPR 2023 — UniAD (13-row Table 2 joint ablation placed BEFORE SOTA tables — inverted ordering serving the thesis); ICCV 2025 — BrickGPT (single main table doing triple duty: baselines, stability-augmented baselines, own ablations); NEURIPS 2022 — EDM (cumulative configs A→F isolating each design change)
Placement:             Dominant placement: immediately after the main results table. Variant: dedicated ablation section at the end (Swin §4.4, CVPR 2024 generative image dynamics Table 2). Inverted variant: ablation first because the thesis IS the design philosophy (UniAD). Deliberately-last variant: VAR places ablation after benchmarks so the paradigm claim stands on external comparisons first.
Caveats:               Ablations of components nobody claimed are noise; every row needs a claimed mechanism behind it. Cumulative ladders confound interactions unless a factorial variant exists (NeurIPS 2024 STDE's factorized ablation, ICLR 2024 SPT 2×2×2 factorial).
```

```text
Pattern P003
---------------------------
Name:                  Parity-Then-Win Ordering
Frequency:             11 / 102 (rare)
Typical structure:     "as good as X on the axis X is judged on" (parity table/curve) → "and strictly better on cost/simplicity/stability" (the win axis) — objection answered before it forms
Most common domains:   Efficiency-oriented methods (optimization, inference, alignment simplification, sampling), simplicity-trade narratives
Typical evidence:      A parity statement in the abstract ("as well as or better than"), then a win quantified on the real axis (20–80× speedup, no tuning, one line of code)
Why it works:          The reviewer's first objection to a simpler method is "surely it loses quality"; presenting parity first removes the objection, so the cost win lands as pure surplus. Presenting the win first invites "at what quality cost?".
Observed in:           NEURIPS 2023 — DPO ("as well as or better" + no RL loop, no sampling, almost no tuning); ICML 2023 — D-Adaptation (matches grid-searched LR on 12 problems + zero hyperparameters); ICLR 2022 — Analytic-DPM (comparable/better quality + 20–80× fewer steps); CVPR 2022 — Hard minimal problems (deliberately low per-sample success rate, wins on effective time εt in RANSAC); NEURIPS 2022 — RSGM ("marginally better on most datasets" + cheaper to train/evaluate); ICCV 2023 — ControlNet (blind test: consumers cannot distinguish it from industrial-scale training); NEURIPS 2023 — Privacy auditing (single run vs hundreds — explicit compute/tightness trade sentence)
Placement:             Abstract claim sentence + first results subsection. The parity evidence is usually a frontier curve (reward-KL, FID-vs-NFE), not a single point.
Caveats:               Parity must be shown on the incumbent's own metric and strongest setting — DPO's controlled frontier experiment compares on the exact objective both methods claim to optimize. A parity claim on a weak baseline version backfires badly.
```

```text
Pattern P004
---------------------------
Name:                  Matched-Comparison Discipline
Frequency:             34 / 102 (occasional; implicit in nearly all comparative papers, explicit match statements in 34)
Typical structure:     Comparison table → explicit note in setup or caption: parameter-matched / compute-matched / schedule-matched / protocol-matched → confound named and controlled
Most common domains:   Scaling studies, architecture comparisons, RL, LLM training
Typical evidence:      Parameter/FLOP counts next to each row; matched LR schedules; unified reproduction of baselines; oracle-bounded comparisons
Why it works:          "Unfair baseline" is the most common reviewer attack on wins; pre-matching and SAYING SO converts the comparison from adversarial to administrative.
Observed in:           NEURIPS 2022 — Chinchilla (matched LR schedules; the mismatch IS Kaplan's error, Fig. A1); ICLR 2022 — BMG (ceteris-paribus Atari: at L=1 same data and gradients, only the meta-objective differs); NEURIPS 2025 — 1000-layer RL (35M vs 2M parameter counts in the depth-vs-width claim); NEURIPS 2025 — Gated attention (parameter-matched expansion baselines: more KV heads/experts); ICML 2024 — SD3 (61-variant controlled study, fixed optimizer/architecture/samplers); ICLR 2026 — JustGRPO (self-reproduced baselines under one protocol); NEURIPS 2024 — STDE (honest-baseline design: baselines strengthened BEFORE comparison, gains attributed layer by layer)
Placement:             Setup text and table captions; sometimes a dedicated fairness paragraph (D4RT removes baseline decoding heads in the speed comparison "for fairness").
Caveats:               Matching on one axis (parameters) while differing on another (data) is worse than no match — reviewers check the second axis. Never match so hard the baseline is crippled (see strawman attacks).
```

```text
Pattern P005
---------------------------
Name:                  Diagnosis-Before-Treatment
Frequency:             12 / 102 (rare)
Typical structure:     Symptom/anomaly measured → mechanism isolated on a toy or via analysis → fix derived from the mechanism → fix validated causally
Most common domains:   Science-of-deep-learning papers, interpretability, alignment, evaluation methodology
Typical evidence:      A characterization section (curves, probes, toy model) that precedes and motivates the method; each design decision traceable to a diagnosed cause
Why it works:          A fix derived from a diagnosed cause looks inevitable rather than tuned; reviewers can check the diagnosis independently, so the method inherits its credibility.
Observed in:           NEURIPS 2024 — Autoguidance (§3 establishes WHY CFG works on a 2D toy before proposing the method); ICLR 2024 — ViT registers (characterize artifacts → hypothesis → fix → no-regression check); ICLR 2025 — Shallow safety (diagnose per-token KL shallowness → two interventions follow); ICML 2026 — JustGRPO (entire §3 diagnosis justifies the minimal AR-scaffold method); NEURIPS 2021 — Agarwal (diagnosis before prescription); NEURIPS 2024 — Rho-1 (§2.1 motivating measurement precedes the method)
Placement:             Method-adjacent sections before the method; abstract often carries the diagnosis sentence ("we show that X is caused by Y").
Caveats:               The diagnosis must be shown quantitatively (a measured trade-off or signal), not asserted; backfires if the fix then fails to track the diagnosis — the failure reflects on the mechanism claim itself.
```

```text
Pattern P006
---------------------------
Name:                  Mechanism Probe
Frequency:             ~15 / 102 (occasional)
Typical structure:     After ablations show THAT it works → one small experiment shows the internal signal behaves as the hypothesis predicts (probe, transplant, synthetic control, signal decomposition)
Most common domains:   LLM analysis, interpretability, RL, generative models, representation analysis
Typical evidence:      Per-token KL/entropy traces, attention-share measurements, memory transplants between agents, synthetic-degradation construction, perplexity of outputs under a base model, Jacobian eigenstructure
Why it works:          Ablations prove necessity; probes prove the story. "It works and we know why" is the strongest two-sentence defense a results section can have.
Observed in:           ICLR 2023 — Emergence of maps (memory transplant into probe agent: SPL 85.0 vs 71.1 empty-memory control — direct evidence for implicit maps); NEURIPS 2024 — Autoguidance (synthetic compatible/mismatched degradations: benefit iff degradations match); ICML 2026 — JustGRPO (fork-token entropy collapse under arbitrary order); NEURIPS 2025 — Limit of RLVR (perplexity of RL outputs under the base model + solvable-set contingency: 0.0% RL-only solves on AIME24); ICLR 2025 — Shallow safety (per-token KL + prefill-length ASR curve); NEURIPS 2022 — Hyperoptimizer towers (stack height vs initialization robustness); NEURIPS 2022 — Kumar (compression-correlation probe: human text length correlates with library-program length, R=0.18, not primitive-only)
Placement:             A dedicated "analysis"/"why it works" subsection after ablations; in diagnosis-first papers (P005) it moves before the method. Sometimes appendix (DPO gradient analysis + App. Table 3).
Caveats:               Probes are suggestive, not conclusive — pair with an intervention (remove the signal, watch the effect disappear: NS-sigmoid and shared-gate controls in gated attention). A probe that contradicts the hypothesis must be reported (gated attention: "massive activations are not a prerequisite for attention sinks").
```

```text
Pattern P007
---------------------------
Name:                  Escalating External Validity
Frequency:             ~12 / 102 (rare)
Typical structure:     Controlled benchmark → ablation/mechanism → zero-shot or cross-domain → human study → real-world physical deployment; each rung answers a stronger objection than the last
Most common domains:   Human-facing systems (agents, alignment, protein design), computational imaging, robotics
Typical evidence:      A closing experiment outside the simulator/benchmark: wet lab, robots, hardware prototype, or a large human study
Why it works:          Simulated benchmarks answer "does it work?"; human and physical validation answer "does it matter?". The escalation builds trust that simulated gains are not simulator artifacts.
Observed in:           ICML 2025 — CollabLLM (simulated benchmarks → reward ablation → zero-shot transfer → 201-participant randomized user study); ICML 2024 — Debate (LLM judges → 6,476 human judgements with calibration analysis); ICLR 2024 — dWJS (in silico → 277 wet-lab syntheses at 97.5% expression → functional binding rates); ICCV 2025 — BrickGPT (benchmark → dual-robot-arm + manual assembly); ECCV 2024 — Minimalist vision (simulation → printed-transparency hardware); ICCV 2023 — SPAD imaging (simulation → optical hardware demonstrations); ICML 2024 — Genie (scaling → qualitative play → agent transfer to unseen CoinRun)
Placement:             Final experiment sections; the human/physical study is the closing act before the conclusion.
Caveats:              Most expensive pattern; partial escalation is fine if the missing rung is named as a limitation. Human studies need pre-registered protocols and CIs or they become attack surface (12-user studies in ControlNet draw exactly this comment).
```

```text
Pattern P008
---------------------------
Name:                  Evaluator Validation Study
Frequency:             12 / 102 (rare; near-mandatory subset norm: whenever the headline metric is an automatic judge or learned metric)
Typical structure:     Headline results use judge J → dedicated experiment validates J against human gold standard (agreement/calibration) → optionally a robustness sweep over J's own hyperparameters
Most common domains:   LLM alignment/evaluation, generative models, RL with learned rewards
Typical evidence:      GPT-4-vs-human agreement rates, F1 vs human labels, Bradley-Terry correlations, judge calibration/rejection curves, inter-human agreement baseline
Why it works:          GPT-4-as-judge and learned metrics are the era's weakest evidentiary link; validating the evaluator converts the whole results section from contestable to citable. Skipping it is the top methodological objection for judge-dependent papers.
Observed in:           NEURIPS 2023 — DPO (§6.4: GPT-4 agrees with humans about as often as humans agree with each other — 272/122/199 respondents); NEURIPS 2022 — MineDojo (MineCLIP success judgment F1 97.4–100 vs human labels, defusing the circularity attack); NEURIPS 2021 — MAUVE (face validity → robustness to every approximation choice → human BT correlation 0.952 — the ascending ladder); ICML 2024 — Debate (judge calibration; rejecting low-confidence judgements retains 65% of questions at 94% accuracy); NEURIPS 2025 — INFINITY-CHAT (25-annotator dense preference data + threshold-sweep robustness)
Placement:             Usually the last experiment subsection ("evaluation validity"), sometimes woven in at the point the judge is introduced. MAUVE variant: the validation IS the paper.
Caveats:               Validation must come before or with — not after — judge-based conclusions. Judges validated on the same distribution they later judge on still draw distribution-shift objections.
```

```text
Pattern P009
---------------------------
Name:                  Honest Negative / Boundary Result
Frequency:             15 / 102 (occasional)
Typical structure:     Main wins → a controlled setting where the method fails or does not help → failure attributed to a mechanism → claim scoped accordingly
Most common domains:   Scaling/RL, LLM evaluation, generative models, methods with regime-dependence
Typical evidence:      Explicit negative rows in main tables, dedicated negative-result subsections, disclosed engineering compromises
Why it works:          A self-reported boundary converts the reviewer's discovery into the authors' contribution; it also rules out rival explanations ("gains are not X, because when we removed X the method still...") and makes the positive claims falsifiable-looking and thus credible.
Observed in:           NEURIPS 2025 — 1000-layer RL (offline RL: "little evidence that increasing depth improves performance" + disclosed actor-512 compromise); ICLR 2026 — Lost in conversation (remedies inadequate: SNOWBALL recovers only 15–20%, T=0 leaves ~30% unreliability — patches help marginally is itself a finding); NEURIPS 2023 — Privacy auditing ("we lose on tightness" Discussion with idealized-settings analysis of where and why); ICML 2023 — Balanced FTRL ("algorithms all seem to have comparable performances in practice" — theory-practice divergence admitted in one honest figure); ICLR 2024 — Registers (OpenCLIP counter-case analyzed in appendix §C); ICML 2025 — Marginal score matching (star-count sweep showing exactly when the variational method stops winning — used to explain the mechanism)
Placement:             Dedicated Discussion/Limitations sections; strongest instances keep negatives in the MAIN results table (gated attention reports null gating axes G3/G4/G5 in the main table).
Caveats:               Negatives must be controlled, not anecdotal — an unexplained failure invites "maybe you tuned it wrong". Pair every negative with the mechanism it supports or the scope it delimits.
```

```text
Pattern P010
---------------------------
Name:                  Preemptive Overhead Accounting
Frequency:             12 / 102 (rare)
Typical structure:     Method section or results table carries the method's own cost (memory %, time %, dollars, queries, GPU-hours) before any reviewer asks
Most common domains:   Systems/architecture papers, efficiency methods, security (cost accounting), large-scale training
Typical evidence:      Overhead figures (Fig. 4f: +1–2% per stack level), memory/time columns, cost-per-attack tables, energy disclosures
Why it works:          "What does it cost?" is a guaranteed objection for any method claiming gains; answering it first with a number (even an unfavorable one) removes the objection and signals engineering seriousness.
Observed in:           NEURIPS 2022 — Hyperoptimizer (Fig. 4f: runtime +1–2% per level — "given its own figure to preempt the efficiency objection" per experiments_strategy); ICCV 2021 — Swin (Table 5: real latency, not just FLOPs); NEURIPS 2024 — STDE (memory tables: the only method that runs at 1M dimensions — memory IS the win); NEURIPS 2022 — NCI (Table 5 efficiency + honest concession that serving speed "needs to be improved"); ICCV 2023 — ControlNet (Fig. 4: 23% extra memory, 34% extra time); CVPR 2025 — VGGT (runtime column in every task table); ICML 2024 — Stealing LLM layer (cost accounting in USD as the core experimental language); CVPR 2026 — D4RT (accuracy-speed frontier with fair head-removal)
Placement:             Dedicated efficiency subsection or columns in every results table; security variant: cost as the primary metric axis (Table 4).
Caveats:               Only works when the number is defensible; disclosing overhead you then fail to justify needs the honest-concession companion move (NCI's three named deployment blockers).
```

```text
Pattern P011
---------------------------
Name:                  Quality-vs-Cost Frontier
Frequency:             23 / 102 (occasional)
Typical structure:     Sweep a budget axis (steps, NFE, pixels, samples k, data size, capacity) → plot quality against it → position the method on the frontier; often the frontier shape IS the finding
Most common domains:   Generative models, sampling/inference, imaging hardware, evaluation methodology
Typical evidence:      FID-vs-NFE curves, pass@k curves, accuracy-vs-pixel-count, generative-perplexity Pareto frontiers, accuracy-speed frontiers
Why it works:          Single-point comparisons favor whichever budget the authors picked; a frontier shows the method dominates across the whole budget range and lets practitioners find their own operating point. Crossing curves (base model surpassing RLVR at high k) can carry an entire paper's thesis.
Observed in:           NEURIPS 2022 — EDM (sampler gains at low NFE on frozen models); ICML 2024 — SEDD (log-log linear Pareto frontier: 32× fewer evaluations at matched quality); CVPR 2022 — Hard minimal problems (effective time εt = µt/ρ collapses speed and success into one axis); ECCV 2024 — Minimalist vision (4 freeform pixels ≈ 32×32 baseline); NEURIPS 2025 — Limit of RLVR (crossing pass@k curves: base +9% at k=128); ICML 2026 — D4RT (200+ FPS pose accuracy frontier); NEURIPS 2023 — Data-constrained scaling (loss vs epochs law with a predictable cliff)
Placement:             Main figure(s); abstract quotes frontier endpoints ("FID 1.36 at 35 NFE").
Caveats:               Frontier comparisons require matched evaluation protocols on every point; unaudited budget axes (e.g., extra epochs at equal iterations — Sorscher's App. J concession) silently distort the frontier.
```

```text
Pattern P012
---------------------------
Name:                  Theory Corroboration + Assumption-Check Experiment
Frequency:             12 / 102 (rare; the norm for theory-led papers that include any empirics)
Typical structure:     Theorem → worked example/simulation whose observable quantities are derived FROM the theorem → measured agreement (or disagreement, flagged) → assumptions individually checked
Most common domains:   Learning theory with experiments, statistical physics of learning, optimization, watermarking/measurement theory
Typical evidence:      Theory-predicted vs empirical numbers (142.2 vs 159.5 green tokens), scaling collapses predicted by theory (τ/n collapse ↔ ψ_n scaling), assumption-negligibility measurements (Fig. 2 decomposition terms), Monte-Carlo verification with CIs
Why it works:          A theory that makes a quantitative prediction which then lands within noise is unanswerable; checking assumptions separately protects the theorem from its own idealizations.
Observed in:           ICML 2023 — Watermark (Theorem 4.2 predicts empirical green-token counts and z-growth; "the information-theoretic framework is predictive, not just descriptive"); ICLR 2022 — Neural collapse MSE (Fig. 2 checks the central-path assumption across 5 datasets × 3 networks); ICLR 2025 — Ren (App. C verifies eNTK stability — "a checked, not merely assumed, condition"); NEURIPS 2025 — Bonnaire (numerics and analytics cross-validated via shared scaling collapse); NEURIPS 2021 — Abel (Monte-Carlo expressivity fractions with CIs + explicit "possibly CMP-specific" caveat); ICML 2025 — Prediction-vs-access (German labor data reproduces the theorem's structure "where none of these assumptions hold")
Placement:             Immediately after the theorem statement; full assumption audits in appendix.
Caveats:               Agreement in a toy regime does not transfer automatically — the best instances pick experiments that stress the theory's boundary conditions (dead time, arrays, NLOS in SPAD imaging).
```

```text
Pattern P013
---------------------------
Name:                  Sanity-Check Visual Placement
Frequency:             ~17 / 102 (occasional; two distinct placements)
Typical structure:     (a) Intuition-BEFORE: qualitative/toy figure in intro or method builds the expectation the quantitative table later confirms; (b) Confirm-AFTER: qualitative gallery after the main table converts numbers into perceivable quality
Most common domains:   (a) analysis/mechanism papers; (b) generation/CV papers
Typical evidence:      Toy-model figures (2D densities, search trees, spectrum plots), sample galleries, attention maps, un-cherry-picked sample grids
Why it works:          (a) primes the reader to parse the table as confirmation rather than evaluate it cold; (b) anchors abstract metrics (FID, IS) in something a reviewer can see, defusing "metrics don't capture quality".
Observed in:           BEFORE: NEURIPS 2024 — Autoguidance (Figs. 1–2 toy mechanism precede everything); ICML 2026 — JustGRPO (Fig. 1 toy search trees match the later quantitative result); NEURIPS 2023 — Mirage (Fig. 2 toy model before every empirical section); CVPR 2024 — Generative image dynamics (Fig. 2 power-spectrum data plot grounds the representation choice before architecture); NEURIPS 2025 — Bonnaire (Fig. 1 1D score illustration). AFTER: ICCV 2023 — ControlNet (galleries + un-cherry-picked 6-sample grids); NEURIPS 2022 — Imagen; NEURIPS 2021 — Moser Flow; NEURIPS 2024 — VAR (Fig. 8 zero-shot visual grid)
Placement:             (a) intro/method; (b) results, immediately after the headline table. Domain split: mechanism papers place visuals early; generation papers place them late.
Caveats:               Galleries invite cherry-picking accusations unless sampling is disclosed (ControlNet's un-cherry-picked batches; Wei's per-experiment photon budgets). A toy figure that oversimplifies the real setting can be turned against the paper.
```

```text
Pattern P014
---------------------------
Name:                  Oracle / Upper-Bound Anchoring
Frequency:             17 / 102 (occasional)
Typical structure:     Results table includes an oracle, expert, clairvoyant, or theoretical-ceiling row → method's score read against a known ceiling instead of in absolute terms
Most common domains:   Embodied AI, probing/interpretability, oversight, security, efficiency methods
Typical evidence:      Oracle baselines (Clairvoyant Bug SPL 46.0, B1 all-anchors, PPO-GT with ground-truth reward, expert-judge top-line 92.5%, oracle-based probing upper bound), performance-gap-recovered metrics (PGR 60%)
Why it works:          "Is 76% good?" is unanswerable in isolation; against a ceiling it becomes "76% of what is achievable", which is a defensible scientific statement and quantifies remaining headroom honestly.
Observed in:           ICLR 2023 — Emergence of maps (Clairvoyant Bug oracle; "memories as valuable as having vision" calibrated against best sighted agents); CVPR 2022 — Hard minimal problems (B1 oracle bounds what any anchor set could achieve); NEURIPS 2023 — DPO (PPO-GT oracle: DPO strictly dominates even with ground-truth rewards); ICML 2024 — Debate (expert judge toplines + 60% performance-gap-recovered); NEURIPS 2025 — CollabLLM-adjacent Genie (oracle BC with real actions as upper bound, matched with 200 samples); ICCV 2023 — SPAD (oracle-based probing bounds algorithmic losses)
Placement:             Baseline row in the main table; headroom statements in discussion.
Caveats:               Oracles must be genuinely upper-bounding; a weak oracle invites "your ceiling is too low". Ceiling-relative framing can mask absolute weakness (zero-shot Habitat 9% success in ProcTHOR).
```

```text
Pattern P015
---------------------------
Name:                  Scaling Curve as Legitimacy Evidence
Frequency:             27 / 102 (occasional)
Typical structure:     Performance vs a resource axis (model size, data, compute, houses, epochs) → smooth power law / monotone trend → extrapolation or "scale pays" conclusion; methodology copied from established protocols (Kaplan/Hoffmann)
Most common domains:   LLM scaling, dataset papers, generative models, embodied AI, RL
Typical evidence:      Log-log fits with reported exponents and correlation coefficients, IsoFLOP profiles, three-approach triangulation, phase diagrams
Why it works:          A clean scaling law signals the effect is systematic rather than seed luck, and licenses extrapolation beyond tested budgets — the closest thing this corpus has to a physical law.
Observed in:           NEURIPS 2022 — Chinchilla (three independent estimation approaches; 400+ runs with bootstrap uncertainty); NEURIPS 2022 — ProcTHOR (10→100→1K→10K houses, monotone); NEURIPS 2023 — Data-constrained scaling (half-life R_D* ≈ 15); NEURIPS 2024 — VAR (Pearson ≈ −0.998, "solid" evidence the paradigm emulates LLM scalability); NEURIPS 2022 — LAION (2B > 400M at fixed compute — the justification for building 5B); NEURIPS 2025 — Superposition (α_m = 0.91 ± 0.04 across four LLM families + Chinchilla cross-check 0.88 ± 0.06)
Placement:             Dedicated scaling section or main figure; abstract quotes the exponent.
Caveats:               Scaling measured on proxy metrics (loss, not FID) draws validity objections; fits extrapolated beyond tested range are attack surface (Chinchilla's curvature noted in its own Appendix E; the data-constrained law "significantly underestimates" diverging runs).
```

```text
Pattern P016
---------------------------
Name:                  Scope-Limited Claim with Named Boundary
Frequency:             10 / 102 (rare; hedged claim sentences at claim level, beyond boilerplate limitations sections)
Typical structure:     The claim sentence itself carries its evidence class ("initial evidence", "speculative", "may be") and/or names the regime where it holds ("current RLVR", "in the regimes tested", "possibly CMP-specific")
Most common domains:   Papers whose central finding is a refutation or an extrapolation
Typical evidence:      Hedged claim text in abstract/conclusions; explicit alternative-exclusion clauses; falsifiability framing (time-indexed claims)
Why it works:          Reviewers attack overclaiming, not underclaiming; a claim pre-scoped to its evidence cannot be refuted by showing the boundary — the boundary was part of the claim. Time-indexed hedges ("current X") convert a limitation into a standing research program.
Observed in:           NEURIPS 2023 — DPO (OOD transfer called "initial evidence" by the authors themselves); NEURIPS 2021 — Bubeck (ImageNet implication labeled "speculative" with caveats enumerated before the numbers); NEURIPS 2023 — Mirage ("may be creations of the researcher's choices" — only the weaker claim is needed, §7 hedge); NEURIPS 2025 — Limit of RLVR ("current RLVR" — deliberately time-indexed and falsifiable); NEURIPS 2021 — Abel ("trends flagged as possibly CMP-specific"); NEURIPS 2023 — Data-constrained (law "significantly underestimates" diverging runs, stated where the law is presented)
Placement:             Claim sentences in abstract/intro, interpretation fields of experiments, and the conclusion closer ("this suggests, at least in the regimes tested...").
Caveats:               Hedging the central claim while the title overclaims creates an internal inconsistency reviewers notice. Hedge only where evidence is genuinely one-step short of the claim.
```

```text
Pattern P017
---------------------------
Name:                  Main-Table-Doubles-As-Ablation
Frequency:             6 / 102 (rare)
Typical structure:     One table simultaneously carries baselines, ablations, and baseline-plus-your-mechanism augmentations — the causal chain visible at a glance
Most common domains:   Methods with pluggable components; papers whose thesis is a single mechanism
Typical evidence:      Rows like "+ our stability analysis" appended to competitor baselines; config ladder in the main table (A→F); component columns in the main comparison
Why it works:          Splits the reader's table-reading into one pass instead of two, and pre-answers "would the baseline plus your trick suffice?" — the strongest form of the plug-in sufficiency claim.
Observed in:           ICCV 2025 — BrickGPT (baselines, baselines + authors' stability analysis, own ablations in Table 1: post-hoc conversion of SOTA mesh models still loses to end-to-end); NEURIPS 2024 — Autoguidance (Table 1 rows "- Same EMA", "- Reduce training only", "- Reduce capacity only" make the main table an ablation table); NEURIPS 2022 — EDM (Table 2 configs A→F); CVPR 2023 — UniAD (Table 2 is both ablation and thesis proof)
Placement:             Main results table.
Caveats:               Requires careful row design; done clumsily it obscures the SOTA comparison. Only works when the ablation axis and the comparison axis are the same quantity.
```

```text
Pattern P018
---------------------------
Name:                  Diagnosis-Paper Evidence Triad
Frequency:             ~6 / 102 (rare)
Typical structure:     Intervention on one family → population-level meta-analysis → deliberate construction/induction of the phenomenon; three independent lines converge on the same attribution
Most common domains:   Science-of-measurement papers (metric artifacts, evaluation methodology)
Typical evidence:      Metric-change causal tests within fixed task-model pairs, hand-annotated corpus statistics, constructive induction (creating the phenomenon to prove the mechanism)
Why it works:          Refuting a field-level belief requires ruling out every alternative attribution; three mutually independent evidence lines make the refutation robust to any single-line objection.
Observed in:           NEURIPS 2023 — Mirage (E1–E2 metric intervention; E3–E4 BIG-Bench meta-analysis: 2 metrics account for >92% of claims; E5 induction in vision autoencoders — "sharpness is a property of the measurement, transferable across domains"); NEURIPS 2021 — Agarwal (100-run case study → cross-benchmark re-analysis of published results → synthetic-lift detectability); ICLR 2026 — Lost in conversation (15-model breadth → A/U decomposition → behavioral root-cause appendix → remedy grid)
Placement:            Sequenced sections, each opening by restating the prediction it tests.
Caveats:               Expensive; requires the three lines to be genuinely independent (the mirage paper's strengths section spells out why they are).
```

---

## Candidates (single-paper observations — promote to patterns if re-observed)

```text
Candidate E-01 (synthetic-lift detectability design) — NEURIPS 2021 Agarwal: inflate one real experiment by a known effect size ℓ%, then measure how many runs are needed to detect it. Turns "how much evidence does this claim need" into a measurable quantity — the corpus's only explicit evidence-calibration experiment.
Candidate E-02 (purpose-built control per claim) — ICLR 2023 Wijmans: every mechanism claim gets its own control condition (memoryless agent, untrained-agent memory, zero-memory probe), and no gradients flow from probes into the agent, avoiding circularity. A template for interpretability-style evidence hygiene.
Candidate E-03 (within-pair metric-intervention + induction) — NEURIPS 2023 Schaeffer: change ONLY the metric on the same task-model pairs (emergence "disappears" under Brier score), then constructively induce never-seen emergence in vision autoencoders. The induction half proves the mechanism can create the phenomenon, not just remove it.
Candidate E-04 (RQ→analysis one-to-one mapping) — NEURIPS 2021 Koch: three RQs announced in the intro map one-to-one onto three analyses; case studies (retracted MS-Celeb-1M) convert regression statistics into memorable concrete instances.
Candidate E-05 (three-method triangulation) — NEURIPS 2022 Chinchilla: three independent estimation approaches converge on the same law; the disagreement between the paper's methods and prior work is itself localized to a named methodological confound (fixed LR schedule).
Candidate E-06 (audit-as-experiment for position papers) — ICML 2024 Tramèr / ICML 2024 Zhao / ICML 2026 Ball: position papers substitute documented-incident lists, benchmark-overlap audits, and a coded 135-dataset corpus for experiments; the audit table functions as the results table, and naming (Transfermania/Privacyland) creates a falsifiable shared question.
Candidate E-07 (effective-time metric) — CVPR 2022 Hruby: εt = µt/ρ collapses success rate and runtime into one comparability axis, letting a low-success-rate solver win honestly; accompanied by the compensation experiment (4× more RANSAC samples restores parity with the high-success incumbent).
Candidate E-08 (offline→online validity demonstration) — NeurIPS 2023 ClimSim: shows offline metrics mislead by exhibiting the MLP that crashes online within two months despite competitive offline skill; the pipeline's real payoff is the online section, introduced by re-warning that offline metrics mislead.
Candidate E-09 (unsupervised monitoring metric) — ICML 2024 Khan: Elo-advantage of correct-vs-incorrect debaters in self-play serves as a ground-truth-free proxy for judge accuracy — deployment-ready monitoring derived from the experimental apparatus itself.
Candidate E-10 (ascending evidentiary-value ladder) — NEURIPS 2021 Pillutla (MAUVE): face validity (metric reproduces known properties) → robustness (every approximation choice swept) → gold-standard correlation (human BT study). Ordered by increasing evidentiary value; a reusable template for metric papers.
Candidate E-11 (honest-baseline strengthening) — NEURIPS 2024 Shi (STDE): reimplement and parallelize the baseline BEFORE comparing, then attribute gains layer by layer (JAX vs PyTorch, parallelization, mixed-mode). The headline >1000× is against the unimproved baseline and the strengthened-baseline number (10×) is reported alongside — self-defusing the strawman attack.
Candidate E-12 (theory-practice cross-validation via shared scaling collapse) — NEURIPS 2025 Bonnaire: numerics and analytics run in parallel tracks and cross-validated through a shared collapse variable (τ/n in experiments ↔ ψ_n/Δt in theory). The strongest observed form of Pattern P012.
```

---

## Data-quality notes for Layers 2–3

- Counts were measured over the `claims` + `experiments` regions of all 102 DNA files (template fields like `narrative`/`reviewer_defense` excluded to avoid inflation). Whole-file counts run higher for mechanism/limitation vocabulary because those are template-standard.
- Ten files (ICLR 2024 Amos/Darcet/Frey/Kadkhodaié/Yang, ICLR 2025 Fang/Qi/Ren, ICLR 2026 Bergstrasser/Laban) use YAML block scalars; their claim/setup text was re-read raw, so no paper was skipped, but word-level counts for those files rely on the re-read sections.
- Class tags (comparative/mechanistic/causal/...) reflect the DNA authors' tagging vocabulary; a paper can carry an untagged instance of a class. Treat counts as lower bounds for "expected", upper bounds for "supplied".
- `human evaluation` (12/102) is a genre-conditional requirement: among generation/subjective-quality papers it is near-mandatory; among theory papers it is irrelevant. Apply the checklist per claim type, not per paper.
