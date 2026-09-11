# Reviewer Defense Pattern Library — best-paper corpus (N = 102)

Corpus: 102 best/oral/spotlight papers from NeurIPS 2021–2025, ICML 2023–2026, ICLR 2022–2026, CVPR 2022–2026, ICCV 2021/2023/2025, ECCV 2022/2024. Mined 2026-09-11 from Paper DNA `reviewer_defense` (strengths / vulnerabilities / anticipated_attacks) and `narrative` fields. Frequency classes: frequent ≥60%, common 40–59%, occasional 15–39%, rare 5–14%, exceptional <5%.

Headline finding: **every one of the 102 best papers pre-defends.** Explicit "is this just X?" novelty preemption appears in ~78/102 papers; a conceded-limitations passage exists in ~97/102 (only ~5 papers, e.g. ICCV 2023 ControlNet, have no main-text limitations at all). The dominant placement pattern: *claims are pre-answered with evidence already in the paper* (Rung 1 of the defense ladder), while the handful of attacks that would demand new evidence at rebuttal are pre-paid as purpose-built controls during experiment design.

## TOP PATTERNS (quick reference)

| # | Pattern | Frequency | One-line mechanism |
|---|---------|-----------|--------------------|
| P001 | Nearest-Neighbor Differentiation ("just X?" killed early) | ~78/102 frequent | Name the closest prior, state the delta on 1–4 axes, back it with a head-to-head row |
| P002 | Rival-Exclusion Control | ~65/102 frequent | One-factor control experiment whose only job is to kill "it's just extra params/compute/exploration" |
| P003 | Conceded-Limitations Passage | ~97/102 frequent | Concede narrowly with named numbers, pair each concession with a mitigation or scope bound |
| P004 | Mechanism-Tied Ablation Ladder | ~55/102 common | Every named design element gets a row/figure, so the causal claim is not attackable as correlation |
| P005 | Intro-Preemptive Placement | ~30/102 occasional | Intro or footnotes answer the predictable practicality/scope questions before the method appears |
| P006 | Scope Carve-Out | ~28/102 occasional | Define the regime where the claim holds (often a footnote on the first strong adjective) |
| P007 | Trade-off Honesty | ~22/102 occasional | Surface the cost as a measured finding with its own table, framed as a knob, not hidden |
| P008 | Strongest-Baseline Discipline | ~18/102 occasional | Strengthen the baseline (parameter-match, add your own technique) before beating it |
| P009 | Honest Negative Result | ~13/102 rare | Report the null finding, explain it, and use it to block the adjacent attack |
| P010 | Definitional Defense | ~12/102 rare | Attach a precise definition to the contested term at first use so the attack targets a straw version |

---

## Residual-risk calibration (spec §4): what vulnerabilities even best papers carry

Aggregated from the `vulnerabilities` fields of all 102 DNA files. Each paper's vulnerabilities were assigned to families; counts below are family instances (a paper can contribute to 1–4 families; ~157 instances across 102 papers, ≈1.5 per paper).

| Family | Count | Canonical corpus examples |
|--------|-------|---------------------------|
| A. Evidence-scale / external-validity gap (small models, toy tasks, single benchmark/domain, leap to frontier by analogy) | ~34 | ICML 2023 Min-Degree Bias (d=15–30 Boolean functions); ICLR 2024 GAHB (small UNets, low-res CelebA); NeurIPS 2024 VAR (ImageNet class-conditional only); ICML 2024 Twisted SMC (33M–355M models, T=15) |
| B. Evaluation-instrument fragility (proxy metrics weakly correlated with perception, LLM judges, self-proposed benchmarks, embedding dependence) | ~21 | NeurIPS 2023 DPO (GPT-4-as-judge prompt sensitivity); ICML 2024 VideoPoet (FVD/CLIPSIM weak correlation, internal raters); ICLR 2024 Walk-Jump (self-proposed DCS benchmark, circularity risk); NeurIPS 2021 MAUVE (embedding inductive biases conceded) |
| C. Compute / cost / memory admission (training cost, inference latency, scaling ceilings) | ~20 | CVPR 2025 VGGT (1.2B params, 64 A100 × 9 days, quadratic attention memory conceded); ICLR 2022 DiffStride (DFT overhead, TPU static-graph breakage); NeurIPS 2022 EDM (~250 MWh disclosed); ICCV 2025 BrickGPT (40.8 s median, up to 100 rollbacks) |
| D. Incomplete mechanism / causal residual (phenomenon observed but not fully explained, mechanism hypothesized not proven) | ~17 | ICLR 2024 Registers ("we have not been able to fully determine which aspects of the training led to the appearance of artifacts"); ICLR 2024 GAHB (GAHB never formally defined; architectural origin "presumably"); NeurIPS 2025 Gated Attention (no theory of why non-linearity helps; sink→long-context link "we hypothesize"); ICCV 2023 ControlNet ("sudden convergence" unexplained) |
| E. Theory assumption load / theory–practice gap (load-bearing idealizations, bounds conservative, no implementation) | ~15 | ICML 2025 Conformal-BQ (i.i.d. calibration and loss bound B are load-bearing, candidly stated); ICML 2023 D-Adaptation (convex deterministic only); ICML 2026 FORS (no implementation, rejection-loop cost untested); ICLR 2022 Neural Collapse (λ=0, unconstrained features) |
| F. Proprietary / closed-stack reproducibility limits (internal data, withheld weights, vendor APIs, disclosure constraints) | ~13 | ICML 2024 VideoPoet (Google-internal raters + proprietary pipeline); NeurIPS 2022 Imagen (no release); ICML 2024 Genie (model/data withheld); ICML 2024 Layer Stealing (results withheld/estimated under responsible disclosure); ICLR 2025 Shallow Safety (no access to Llama-2 alignment pipeline) |
| G. Human-study scale & rater anchoring (small N, internal annotators, one rater pool) | ~11 | ICCV 2023 ControlNet (12 users, 20 sketches); CVPR 2024 Rich Human Feedback (6 annotators, 100 prompts); CVPR 2024 Generative Image Dynamics (30-video human study); NeurIPS 2024 PRISM (English-speaking crowdworkers, task incentives) |
| H. Comparison-fairness residual (weakest baseline in one cell, confounded absolute comparisons, non-identical settings) | ~10 | NeurIPS 2023 DPO (PPO baseline checkpoint they could not improve); ICML 2024 SD3 (data-filtering choices confound absolute comparisons vs prior art); NeurIPS 2023 ClimSim (cross-paper error comparisons invalid due to resolution); ECCV 2024 Freeform Pixels (identical small inference networks for baselines) |
| I. Concurrent-work / novelty adjacency conceded | ~9 | ECCV 2022 PDC (candid note crediting concurrent [43]); NeurIPS 2025 Diffusion-Dynamical-Reg (Favero et al. overlap acknowledged); ICLR 2025 Learning Dynamics (Razin et al. 2025 aligned); NeurIPS 2024 VAR (MagViT-2 footnote, "for the first time" snapshot-sensitive) |
| J. Adversarial / robustness residual (attacks outside threat model, adaptive attacks remain) | ~7 | ICML 2023 Watermark (stronger paraphrasers outside threat model); ICLR 2025 Shallow Safety (19.0% AdvBench remains; adversarial fine-tuning conceded); ECCV 2022 PDC (transfer-attack-only, no adaptive attacks); ECCV 2024 Freeform Pixels ("does not prove a minimalist camera guarantees privacy") |

**Calibration for Layer 3 (reviewer simulation):**
1. **Residual risk is normal at the top.** The median best paper carries 1–3 vulnerability families; 0 of 102 papers are vulnerability-free. A reviewer simulation that finds only one family-B/C/D-class weakness should not escalate it to a reject — best papers survive these routinely because the central claim rests on redundant, mutually independent evidence.
2. **What accepted papers do NOT carry:** (a) an undisclosed confound sitting on the central causal claim (always either controlled — P002 — or conceded — P003); (b) a missing simple-baseline check on the necessity question; (c) a silent overclaim beyond the evidence (always hedged or carved out). If a simulated review finds one of these, it is a genuine Major/Critical.
3. **Concession pattern to imitate:** strongest papers concede *narrowly and specifically* — named numbers ("success rate 26–39%"), named failure regimes ("fisheye, extreme rotations"), each paired with a mitigation, scope bound, or an argument why the core claim stands. Vague blanket concessions ("more evaluation is needed") are rare in this corpus.
4. **Severity ladder mapping of residuals:** family A/B/G instances typically read as Moderate (survivable with strong margins elsewhere); family C instances are Moderate when the paper's differentiator is not speed, Major when it is; family D instances are Moderate when framed as "hypothesis" with an intervention backing the practical claim, Major when the mechanism IS the claim; family H and J instances are the ones most likely to be graded Major at rebuttal time — which is exactly why best papers pre-pay them (P008, and adversarial self-testing, see Candidates).

## Defense decision ladder — observed rung choices (spec §5)

Distribution over ~250 mined preemption moves in `anticipated_attacks`:
- **Rung 1 (point to existing evidence): ~70%.** The overwhelming default. "Preempted by Table 6 / Fig. 10 / Thm 1." Implication: pre-defense is mostly an *experiment-design and presentation* decision, not a writing decision — the evidence must exist before the writing can point at it.
- **Rung 2 (re-scope wording / definition / hedge): ~20%.** Scope carve-outs (P006), definitional defenses (P010), calibrated hedges (Schaeffer: "may not be a fundamental property"; Yue: "current RLVR methods").
- **Rung 3 (cheapest discriminating experiment): ~8%.** Chosen pre-submission when the rival explanation could not be killed with existing evidence: parameter-matched controls, compute-tied appendices, CONCAT controls, shared-buffer experiments. Best papers *pre-pay* Rung-3 costs for precisely the attacks that would otherwise require new evidence during rebuttal.
- **Rung 4 (weaken claim to match evidence): ~2%.** Deliberate claim downgrades: Wijmans ("the story is a bit nuanced"); Koch (interpretive Matthew-effect claim "explicitly beyond the data"); Frey (scope bounded to antibodies).
- **Rung 5 (remove claim): rare (<1%).** Observed only as dropping a sub-claim after negative internal experiments (Kim/VTM: reconstruction loss removed "after negative initial experiments" — disclosed as a deliberate choice).

Attack-family → rung mapping observed:
- "Is this just X?" (novelty) → Rung 1 differentiation + head-to-head row; Rung 3 only when no discriminating evidence exists.
- Necessity ("would a simpler method do?") → Rung 3 (simple-baseline conquest, P009-entry below).
- Confounding / alternative explanation → Rung 3 (rival-exclusion control, P002).
- Overclaiming / generalization → Rung 2 (scope carve-out) + Rung 4 (concede with mitigation).
- Cost / efficiency → trade-off honesty (measure, disclose, frame as knob).
- Mechanism-not-demonstrated → Rung 3 (mechanism ablation) or Rung 4 ("hypothesis" framing backed by one intervention — Darcet).
- Cherry-picking → Rung 3 (un-cherry-picked qualitative grids — ControlNet Fig. 8; disclosed prompt-bank selection — VideoPoet §5.3).
- Unfair comparisons → Rung 3 (strengthen the baseline first, P008).
- Concurrent work / novelty adjacency → Rung 2 (candid note + axis-by-axis delta).

---

## Pattern entries (grouped by pre-defense mechanism)

Pattern P001
---------------------------
Name:                  Nearest-Neighbor Differentiation ("is this just X?" killed before it is asked)
Frequency:             ~78 / 102 papers (frequent)
Typical structure:     cite the closest prior → state the exact delta on 1–4 named axes (mechanism / scope / guarantee / setting) → immediately point to a head-to-head table, ablation, or theorem that makes the delta measurable
Placement:             related-work block that ends in the limitation the paper removes; or first mention of the rival in intro/method; the evidence pointer lives in the experiments section
Most common domains:   all domains; universal across theory, systems, and generative-AI papers
Typical evidence:      a table row or ablation where the "just X" method appears under its own name and loses (ControlNet-lite vs ControlNet; CrossDiT vs MM-DiT; config B/C vs D/E/F in EDM)
Why it works:          reviewers pattern-match every paper to its nearest neighbor; if the authors state and measure the delta themselves, the novelty question becomes verification instead of discovery — and the reviewer's alternative framing never gets written down first
Observed in:           ICCV 2023 — ControlNet ("just an adapter" → T2I-Adapter/ControlNet-lite rows); ICML 2024 — SEDD ("just D3PM" → difference traced to the objective); NeurIPS 2024 — VAR ("just RQ-Transformer" → raster vs parallel within-scale); ICLR 2025 — AlphaEdit ("Adam-NSCL recycled" → covariance null-space reduction + editing-specific term); NeurIPS 2023 — DPO (Theorem 1 closes the "special case" hole); NeurIPS 2025 — Gated Attention ("just NSA/Switch Heads" → isolation argument + parameter-matched baselines)
Caveats:               if the delta is only structural with no discriminating experiment, preemption reads as assertion and invites the attack back; concurrent-work adjacency needs a candid credit note (ECCV 2022 — PDC apologizes for overlap, converting it into a transparency point)

Pattern P002
---------------------------
Name:                  Rival-Exclusion Control
Frequency:             ~65 / 102 papers (frequent)
Typical structure:     name the rival explanation ("gains are just extra parameters / compute / exploration / better baselines") → run a purpose-built control that differs in exactly one factor → the alternative dies in a single row, figure, or appendix table
Placement:             ablation table or a dedicated control subsection; the compute-tied or matched-condition variants often live in an appendix
Most common domains:   empirical ML/CV/RL; rarer but present in theory papers (counterexample constructions)
Typical evidence:      one-factor-controlled experiment; parameter-matched baselines; compute-matched comparisons; oracle-matching behavioral clones
Why it works:          the confound objection is the most common Major attack and cannot be answered with prose at rebuttal; running the control pre-submission converts a would-be Major into a settled row
Observed in:           NeurIPS 2025 — 1000-Layer Self-Supervised RL (shared-buffer collector/learner control rejects the pure-explanation-data account); ICLR 2026 — LLMs Lost in Conversation (CONCAT and Translation controls separate sharding from turn structure); ICML 2024 — Genie (oracle-matching BC shows latent actions are functionally real); ICLR 2024 — Never Train from Scratch (compute-tied appendix: SPT gains persist at equal compute); CVPR 2023 — Planning-Oriented Autonomous Driving (Exp.10 vs Exp.12 kills "why not direct regression"); NeurIPS 2022 — Language-Program Inductive Biases (autoencoder and synthetic-language controls show selective, not generic, effects)
Caveats:               the control must be matched on exactly the confound a reviewer cares about; a mismatched control triggers the stronger version of the same attack ("your control was wrong too")

Pattern P003
---------------------------
Name:                  Conceded-Limitations Passage (naming the limitation before the reviewer does)
Frequency:             ~97 / 102 papers (frequent; near-universal). Placement split: dedicated Limitations/Discussion section or closing paragraph ~60/102; merged into a Discussion with mitigations ~20; appendix-only ~15; absent from main text ~5 (exceptional)
Typical structure:     concede narrowly and specifically (named numbers, named failure regimes) → pair each concession with a mitigation, a scope bound, or an explicit argument why the core claim stands
Placement:             Discussion/Limitations section; final conclusion paragraph; or appendix (appendix-only is reserved for concessions not load-bearing on the headline claim)
Most common domains:   all domains
Typical evidence:      quantified concessions ("success rate 26–39%", "19.0% AdvBench remains"), named failure regimes ("fisheye/panoramic images, extreme rotations")
Why it works:          a concession made by the authors costs nothing and signals calibrated self-assessment; the same weakness discovered by a reviewer costs a score and reads as either blindness or evasion
Observed in:           CVPR 2025 — VGGT (§5 Limitations with mitigations deferred to engineering guidance); NeurIPS 2023 — DPO (unusually candid six-question limitations paragraph); ICLR 2026 — LLMs Lost in Conversation (three-part limitations arguing the simulation is a benign testing ground that underestimates the effect); NeurIPS 2023 — Steinke (symmetrical "we win on runs, we lose on tightness" discussion); NeurIPS 2024 — Rho-1 (appendix-only scalability concession); ICCV 2023 — ControlNet (the exception: no main-text limitations, scope absorbed by outlook sentence)
Caveats:               conceding a weakness that is load-bearing for the central claim, without mitigation, converts a Minor into a Major; appendix-only placement of a headline-relevant weakness reads as burying it

Pattern P004
---------------------------
Name:                  Mechanism-Tied Ablation Ladder
Frequency:             ~55 / 102 papers (common)
Typical structure:     every named design element from the method section gets its own ablation row or figure panel; the ablation is organized to mirror the claim structure, so each claim maps to a causal test
Placement:             experiments section, usually immediately after the main result; mechanism ablations sometimes precede benchmark tables
Most common domains:   CV/ML systems and architecture papers; generative models
Typical evidence:      ablation matrices (EDM's cumulative config ladder, ControlNet's Fig. 8 grid, BrickGPT's ablations embedded in the main table)
Why it works:          it forecloses the "correlation not causation" and "which part matters?" attacks; a reviewer cannot claim the gains come from untested knobs when every knob has a row
Observed in:           NeurIPS 2022 — EDM (configs B–F isolate hyperparameters, capacity, preconditioning, sampling); ICCV 2025 — BrickGPT (causal evidence for every mechanism via in-table ablations); NeurIPS 2024 — VAR (ablation row 2 alone shows the paradigm jump); ICML 2024 — SD3 (every architectural choice ablated before scaling); CVPR 2024 — Generative Image Dynamics ("ablation covers every named design element")
Caveats:               an ablation ladder that omits the one element a reviewer would doubt most looks evasive; the ladder must cover the load-bearing components named in the claims

Pattern P005
---------------------------
Name:                  Intro-Preemptive Placement
Frequency:             ~30 / 102 papers (occasional)
Typical structure:     the introduction (or its footnotes) pre-answers the predictable practicality, scope, or motivation questions — dataset sizes, GPU budgets, why this regime, why now — before the method section opens
Placement:             introduction paragraphs, intro footnotes, or literal subheadings in position papers
Most common domains:   systems papers with cost objections; position papers; theory papers with scope worries
Typical evidence:      concrete numbers placed early (100K vs LAION-5B in ControlNet); scope statements; "Why Now?"/"How is This New?" subheadings
Why it works:          first impressions anchor the review; a question answered before it forms never becomes a written weakness, and early numbers preempt the "is this practical?" reflex
Observed in:           ICCV 2023 — ControlNet (intro previews robustness and consumer-GPU feasibility, "pre-answering the practicality questions"); ICML 2023 — Min-Degree Bias (intro pre-concedes scope limits as boundary conditions); ICML 2026 — Censor's Toolkit ("Why Now?" and "How is This New?" as literal subheads preempting the two likely dismissals); NeurIPS 2022 — SGD Effective Dynamics (scope honestly bounded in the intro)
Caveats:               more than one or two preemptions crowds the story; preempting an objection nobody would raise wastes prime intro space

Pattern P006
---------------------------
Name:                  Scope Carve-Out
Frequency:             ~28 / 102 papers (occasional)
Typical structure:     define the regime where the claim holds — attached to the first strong adjective, often as a footnote — before any broader reading is possible; the carve-out is kept consistent with the abstract
Placement:             intro/footnotes primarily; repeated at the scope boundary near the discussion
Most common domains:   agent/world-model papers, theory papers, benchmark papers, negative-result papers
Typical evidence:      definitional footnotes ("universal = interface-level, not omni-capable"); explicit "we study X, not Y" sentences; threat-model statements
Why it works:          it converts an open-ended generalization attack into a checkable boundary question; reviewers attack claims, and a carved-out claim is smaller and true
Observed in:           ICLR 2024 — Universal Real-World Simulator (fn 1 defines "universal"); ICLR 2023 — Emergence of Maps (fn 1 + App. B.1 define "cognitive map" scope); ICML 2026 — JustGRPO (fn 1 scopes the finding to math/code vs order-dependent tasks); ICLR 2026 — Transformers Inherently Succinct (model scope fixed in §1 to preempt scope disputes); ICML 2023 — Watermark (threat model bounded to quality-maintaining attacks)
Caveats:               a carve-out that arrives after the headline claim, or contradicts the abstract, looks like retreat; carve-outs must survive quote-comparison against the abstract

Pattern P007
---------------------------
Name:                  Trade-off Honesty
Frequency:             ~22 / 102 papers (occasional)
Typical structure:     surface the cost (runtime, energy, memory, quality/diversity, distribution narrowing) as a measured finding with its own table or figure — often framed as an explicit knob the user can set
Placement:             dedicated columns in every results table (runtime); limitations section; or a named subsection
Most common domains:   efficiency-adjacent systems; generative models; anything with compute-heavy training
Typical evidence:      runtime columns on every table (VGGT); disclosed energy footprints (EDM's ~250 MWh); trade-off sweeps shown, not hidden (CollabLLM's w-sweep)
Why it works:          hidden costs are discovered by reviewers and read as bad faith; disclosed costs read as engineering maturity and often convert into a "knob" the paper gets credit for
Observed in:           CVPR 2025 — VGGT (every task table carries a runtime column so the speed-accuracy claim is continuously visible); ICLR 2022 — DiffStride (compute cost table + TPU caveat in the limitations paragraph); ICML 2025 — CollabLLM (forward-window tradeoff shown explicitly as a sweep); NeurIPS 2022 — RODEO (conclusions double as cost accounting with two named speed fixes); NeurIPS 2022 — EDM (compute footprint disclosed unprompted)
Caveats:               honesty about a trade-off on the central claim requires a compensating differentiator axis (speed, simplicity, robustness); a naked trade-off with no differentiator reads as the paper's summary weakness

Pattern P008
---------------------------
Name:                  Strongest-Baseline Discipline
Frequency:             ~18 / 102 papers (occasional)
Typical structure:     strengthen the baseline before comparing — parameter-matching, giving the baseline the authors' own technique, re-implementing/parallelizing it, or converging it properly — then win anyway
Placement:         ablation/comparison tables; the strengthening operation is usually stated in a table caption or a dedicated paragraph
Most common domains:   architecture and method papers where the "unfair comparison" rebuttal-stage objection is live
Typical evidence:      "+ our stability analysis" baseline rows; parameter-matched controls; retrained-on-own-data baselines
Why it works:          "the comparison was unfair" is the hardest objection to answer after acceptance-stage review; preempting it makes the margin itself the evidence
Observed in:           ICCV 2025 — BrickGPT (baselines given the authors' own stability analysis as augmentation, 88.4% vs 98.8%); NeurIPS 2024 — STDE (baselines parallelized and improved rather than strawmanned); NeurIPS 2024 — VAR (baseline uses the same VQVAE and training data, isolating the paradigm); NeurIPS 2025 — Gated Attention (parameter-matched controls throughout); ICML 2025 — Token Ordering (order-supervised ARMs via teacher forcing as the strongest possible ARM baseline)
Caveats:               expensive; reserve it for the one comparison the headline depends on; if the strengthened baseline nearly wins, the paper must have a diagnosis ready for why simple fails

Pattern P009
---------------------------
Name:                  Honest Negative Result
Frequency:             ~13 / 102 papers (rare)
Typical structure:     report a null/negative finding in the main text, explain it, and use it to block the adjacent attack ("X doesn't suffice, therefore Y is needed")
Placement:             experiments section or analysis subsection; occasionally the negative result IS the paper
Most common domains:   methodology papers; analysis papers; estimator papers
Typical evidence:       explained null comparisons (masked-vs-causal objectives nearly equivalent); negative results about rival methods (HTE's fourth-order ceiling)
Why it works:          a reported-and-explained negative proves the authors tested the obvious alternatives; it also functions as a wall against "wouldn't the simpler thing work?"
Observed in:           ICLR 2024 — Never Train from Scratch (masked vs causal shown nearly equivalent, blocking the objective-choice attack); ICML 2024 — STDE (the negative HTE result blocks "HTE suffices"); ICLR 2023 — DreamFusion (negative result + Jacobian analysis for naive loss minimization); NeurIPS 2025 — 1000-Layer Self-Supervised RL (offline and TD-method negative results show the authors are not overgeneralizing); NeurIPS 2025 — Limit of RLVR (the negative result is the paper, hedged to "current" methods)
Caveats:               negatives must be explained; an unexplained negative is a gift to reviewers and an invitation to doubt the positive results too

Pattern P010
---------------------------
Name:                  Definitional Defense
Frequency:             ~12 / 102 papers (rare)
Typical structure:     attach a precise, quotable definition to the contested term at first use (often a footnote), so that the anticipated attack targets a straw version and dissolves
Placement:             footnote at first use of the term; formal definition subsection; appendix for the full version
Most common domains:   agent/emergence papers, LLM-behavior papers, metric papers
Typical evidence:      footnote definitions ("training vs in-context learning"); operational definitions making a vague concept measurable (originality defined w.r.t. the exact training set)
Why it works:          many attacks are really terminological disputes; fixing the definition moves the fight onto ground the authors chose and makes the attack a non-attack
Observed in:           CVPR 2023 — VisProg (explicit footnote defining training vs in-context learning, making the no-training claim verifiable); ICLR 2023 — Emergence of Maps (cognitive-map definition, fn 1 + App. B.1); ICML 2025 — Seed-Conditioning (originality defined w.r.t. the exact training set, "quantifiable by construction"); NeurIPS 2024 — Rho-1 (excess-loss formulation distinguishes the method from plain perplexity filtering); ICLR 2024 — GAHB (generalization defined as model variance, "agnostic to model bias")
Caveats:               definitions that contradict community usage get attacked harder than the original term; the definition must read as clarification, not gerrymandering

Pattern P011
---------------------------
Name:                  Objection-to-Feature Reframing
Frequency:             ~8 / 102 papers (rare)
Typical structure:     accept the attack's premise openly and convert it into a motivation, an object of study, or a strength — the objection becomes part of the contribution
Placement:             discussion/limitations section; sometimes the introduction's methodological apology
Most common domains:   dataset papers, safety/alignment papers, analysis papers
Typical evidence:      embraced noise ("interpersonal disagreement is the object of study"); embraced artificiality ("akin to basic arithmetic for reasoning")
Why it works:          fighting an objection concedes it has force; absorbing it removes the fight entirely and often generates a second contribution
Observed in:           NeurIPS 2024 — PRISM (preferences noisy/contradictory → embraced, disagreement-preservation recommended before aggregation); ICLR 2025 — Shallow Safety (unnatural augmentation data → "essentially cover outlier cases" useful for deeper alignment); ICML 2025 — Seed-Conditioning (artificial tasks → methodological apology that converts artificiality into a feature); ECCV 2022 — PDC (concurrent overlap → candid credit note turned transparency point); ICLR 2026 — LLMs Lost in Conversation (adversarial-simulation objection → benign-testing-ground reframing that argues the effect is underestimated)
Caveats:               the reframed feature must be load-bearing elsewhere in the paper; pure spin, or reframing a flaw the evidence actually shows, backfires badly

Pattern P012
---------------------------
Name:                  Steelmanned Objection
Frequency:             ~9 / 102 papers (rare; concentrated in position/analysis papers)
Typical structure:     present the strongest opposing view in its best form, with named sources, in a dedicated subsection — then answer it with evidence or a determinate criterion
Placement:             dedicated "anticipated objections" discussion subsection; for position papers, an entire section (§4, §6)
Most common domains:   position papers, policy/ethics papers, field-critique papers
Typical evidence:      named opposing scholars engaged seriously; both extremes answered rather than strawmen; normative criteria giving objections determinate content
Why it works:          in argument-driven papers the reviewer's main question is "did they consider the obvious counter-argument?"; steelmanning converts the objection section into evidence of rigor
Observed in:           ICML 2025 — AI Safety Future of Work (§4.1 steelmans "labor markets self-correct" via Smith/Autor/Mokyr/Aghion before rebutting); ICML 2026 — Censor's Toolkit (§6.1–6.2 answers both "halt alignment" and "risks exaggerated" extremes); ICML 2024 — Dataset Diversity (§9 tackles anticipated objections head-on as named tensions); NeurIPS 2021 — Dataset Life (grants "benchmark concentration is healthy" then bounds it)
Caveats:               only for papers whose claim is an argument; in empirical papers, steelmanning the wrong objection burns space the evidence needs

Pattern P013
---------------------------
Name:                  Simple-Baseline Conquest
Frequency:             ~14 / 102 papers (rare)
Typical structure:     include the trivial variant (prompting only, rejection sampling only, off-the-shelf scorer, converged-from-scratch training) and beat it decisively, so the necessity attack dies at first contact
Placement:             first rows of the main comparison table; sometimes a dedicated baseline section
Most common domains:   LLM-method papers; agentic systems; training-recipe papers
Typical evidence:      a named simple baseline with its own number (Proactive Base; rejection-only = 24% stable; converged scratch baselines)
Why it works:          "would a simpler method do?" (the necessity/R3 attack) is fatal when unaddressed because the answer is obvious to try; including and beating the simple method makes the paper's necessity its own evidence
Observed in:           ICML 2025 — CollabLLM (Proactive Base prompting baseline shows partial but inferior gains); ICCV 2025 — BrickGPT (rejection sampling alone yields 24% stability — rollback is the load-bearing step); ICLR 2024 — Never Train from Scratch (converged scratch baselines guard against "just train longer"); CVPR 2024 — Rich Human Feedback (PickScore near-zero PLCC on plausibility kills "why not just PickScore?"); ICML 2024 — Debate (optimized consultants as the real baseline — and they actively degrade)
Caveats:               if the simple baseline nearly wins, including it backfires; the paper needs either a decisive gap or a diagnosis of exactly why the simple method fails

### Candidates (single-paper or thin-evidence observations; promote on re-mining)

- **Adversarial self-testing** (attack your own method before reviewers do): ECCV 2024 — Freeform Pixels (privacy evaluated adversarially, "trying to break it", with hedged language "tends to preserve privacy"); ICML 2023 — Watermark (paraphrase-attack section); ICLR 2025 — Shallow Safety (mitigations tested against the full attack taxonomy); ICML 2024 — Layer Stealing (defenses analyzed with deployed mitigations as validation). ~4–5 papers → exceptional. Needs ≥2 more to promote.
- **Disclosed-oracle comparison** (bound your own algorithmic loss against an oracle): ICCV 2023 — UWB Single-Photon Imaging (oracle-based comparison disclosed to bound algorithmic losses); CVPR 2022 — Hard Minimal Problems (B1 oracle-bounded evaluation with oracle coverage reported). 2 papers → candidate.
- **Open-problem close** (limitations converted into a precise research agenda, ending by widening): ICLR 2023 — GD-WL Biconnectivity (four named open problems); NeurIPS 2025 — Transductive Mistake Bounds ("Directions for Future Work" with three precise questions); ICML 2023 — Watermark (§9 enumerates open questions); NeurIPS 2021 — Markov Reward Expressivity (roadmap of relaxations, "ends by widening, not narrowing"). ~7 papers → rare; borderline entry, watch on re-mining.
- **Snapshot-dated claims flagged** (authors marking their own SOTA/record claims as time-indexed): NeurIPS 2022 — Procthor ("date-stamped leaderboard claims age quickly"); NeurIPS 2023 — DecodingTrust ("results will be stale" preempted by open toolkit); NeurIPS 2025 — Limit of RLVR ("current methods" hedge). ~3 papers → candidate.

## Cross-cutting placement summary (for Layer 3 assembly guidance)

- **Experiments section** absorbs the mechanical attacks: rival explanations (P002), necessity (P013), mechanism doubts (P004), fairness (P008). This is where most pre-defense evidence physically lives.
- **Discussion/Limitations** absorbs the residual-risk attacks: conceded failure regimes, cost admissions, scope bounds (P003, P006, P007).
- **Intro/footnotes** absorb the framing attacks: novelty adjacency, motivation doubts, early practicality questions (P005, P001's differentiation half).
- **Related work** absorbs "is this just X?" for papers where the delta is structural (each related-work block ends in the exact limitation removed — Swin Transformer, Analytic-DPM, Chinchilla, NCI).
- **Appendix** absorbs the pre-paid controls and concessions that support but do not headline (compute-tied comparisons, appendix limitations, extended attack suites). Rule of thumb from the corpus: anything load-bearing for the central claim never lives appendix-only.

## Caveats on this mining run

- Counts are tallies of DNA-file annotations (one per paper per mechanism); a mechanism appearing multiple times inside one paper counts once. Percentages are of N = 102.
- `anticipated_attacks` fields record attacks the DNA annotator judged preempted; papers may contain additional unannotated pre-defenses, so frequencies are lower bounds.
- Vulnerability-family counts (residual-risk table) involve judgment calls on multi-family vulnerabilities; family boundaries A/B/D/E in particular can overlap. Use the family ordering, not the exact integers, for calibration.
- Position papers (≈10 in corpus) are over-represented in the steelmanning and objection-reframing patterns; the frequent patterns (P001–P004) are robust across paper types.
