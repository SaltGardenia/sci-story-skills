# Claim Pattern Library (Layer 1 — Stage 3)

Corpus: 102 best-paper Paper DNA files (`knowledge/paper-dna/`) — NeurIPS 2021–2025 (incl. D&B track), ICML 2023–2026 (incl. outstanding/position), ICLR 2022–2026 (outstanding), CVPR 2022–2026, ICCV 2021/2023/2025, ECCV 2022/2024. **N = 102.** Mining date: 2026-09-11. Mined from `claims` (level tags, `importance` flags, evidence pointers), `paper.thesis`, `narrative`, and `reviewer_defense.vulnerabilities` of every DNA file (all 102 read; none modified).

Frequency classes: frequent ≥60% · common 40–59% · occasional 15–39% · rare 5–14% · exceptional <5%.

Headline statistic: the corpus carries **369 central claims** (median 4 per paper, mode 4, range 2–6); only 2/102 papers ship a single central claim. The dominant central-claim level is **comparative** (61% of papers), and the most common multi-claim architecture is **comparative + enabler** (accuracy claim paired with a simplicity/speed/data-efficiency claim as a *separate* central claim). Iron-rule violations are almost absent: where evidence is thin, best papers hedge, scope, or downgrade the claim (patterns C012–C015).

## TOP PATTERNS (quick reference for Layers 2–3)

| ID | Pattern | Freq | One-line use |
|----|---------|------|--------------|
| C001 | Claim-Family with Pre-Mapped Evidence | 94/102 | Ship 3–5 central claims (never 1), each pre-wired to a named table/figure/theorem — median 4 central claims per best paper. |
| C002 | Comparative-Plus-Enabler Pair | 31/102 | Pair the accuracy claim with a *separate* central claim on simplicity, speed, or data-efficiency; parity alone rarely carries a best paper. |
| C008 | Dual-Currency Paper | 25/102 | Back one central claim with a theorem and another with a benchmark — two currencies, each spent where it is strongest. |
| C003 | Self-Scoping Claim | 23/102 | Bake the scope into the claim sentence itself ("in the data-constrained regime", "with no 3D data") — the claim then cannot be attacked outside its stated regime. |
| C010 | Mechanism-Attribution Claim | 21/102 | Make "the gain comes from M" its own central claim, ablation-backed — never let the mechanism ride silently on the headline number. |
| C004 | Negative/Impossibility Headline | 20/102 | Lead with what cannot be done or what fails ("not learnable", "remediations are inadequate"); a proven ceiling is a contribution. |
| C007 | "First" Priority Claim | 17/102 | Claim priority precisely and narrowly ("first ... trained in an unsupervised manner from unlabelled videos"), not generically. |
| C006 | Bottleneck-Naming Contribution | 14/102 | Name the field's bottleneck explicitly and make removing it the contribution ("the bottleneck is the training interface, not the architecture"). |
| C013 | Time-Indexed Claim | 13/102 | Scope volatile claims with "current" ("current RLVR does not elicit...") so the claim stays true even as the field moves. |
| C009 | Reframe-Not-Invent | 12/102 | Claim novelty as a *new explanation* of a known phenomenon, sometimes explicitly disclaiming a new mechanism. |

Anti-pattern instances (circular self-proposed metrics, headline-on-weak-baseline, proprietary-evaluation dependence, bound-vs-estimate conflation) are at the end — each was *survived* by the paper in question via a named mitigation, which is the transferable part.

---

## Corpus statistics

### Central-claim volume

| Central claims per paper | Papers |
|---|---|
| 2 | 8 |
| 3 | 39 |
| 4 | 41 |
| 5 | 12 |
| 6 | 2 |

Total 369 central claims / 102 papers (median 4). 100/102 papers have ≥2 central claims; 94/102 have ≥3.

### Claim-level distribution of central claims (papers whose central claims include level L)

| Level | Papers | Share | Class |
|---|---|---|---|
| comparative | 62/102 | 61% | frequent |
| theoretical | 42/102 | 41% | common |
| descriptive | 30/102 | 29% | occasional |
| practical | 24/102 | 24% | occasional |
| mechanistic | 21/102 | 21% | occasional |
| causal | 20/102 | 20% | occasional |
| generalization | 14/102 | 14% | rare |

Central-claim token counts (multi-level claims counted once per level): comparative 143 · theoretical 112 · descriptive 69 · practical 52 · mechanistic 37 · causal 35 · generalization 20. Reading: best papers claim *comparisons* at the center and *theorems* as the second currency; causal, mechanistic, and practical claims are present but subordinated; generalization claims are the rarest central level — and when present, the most hedged (C012).

Data-quality caveat: 34/102 files carry no explicit level tag on some or all central claims (miner inconsistency, concentrated in ICML 2023–2026 and position tracks); these were hand-classified from claim text and evidence pointers for the table above. Treat ±3 papers as tagging noise.

### Evidence classes backing central claims (paper-level, from `claims[].evidence` pointers)

| Evidence class | Papers (central claims backed) |
|---|---|
| Named theorem / proposition / lemma | 30/102 |
| Controlled comparison table/figure (benchmark suite vs named baselines) | ~90/102 (default currency; implicit in `comparative` claims) |
| Ablation cited in the claim's own evidence pointer | 13/102 (undercount — ablations often live in `method`/`experiments` fields rather than the claim's EV line; see C010) |
| Human study / human raters | 10/102 |
| Real-world deployment, hardware prototype, or wet-lab validation | 6/102 |
| Meta-analysis / corpus statistics | 5/102 (schaeffer, agarwal, koch, zhao-diversity, jiang) |

The EV-prefix census among explicitly-tagged claims reads: `comparative` 29, `theoretical` 26, `empirical` 21, `ablation` 3, `qualitative` 2, plus singletons (`benchmark audit`, `case study`, `hardware demonstration`, `controlled comparison`, `decompositional`). Notably, **negative evidence** (failed remediations, inadequate baselines, impossibility) is deliberately surfaced as central-claim evidence in ~20 papers (C004), e.g. ICLR 2026 lost-in-conversation's Table 2–3 negative-results grid and NeurIPS 2023 mirage's metric-swap re-analysis.

---

## Family A — Contribution framing

```text
Pattern C001
---------------------------
Name:                  Claim-Family with Pre-Mapped Evidence
Frequency:             94 / 102 (frequent, 92%) — 100/102 have ≥2; only 2/102 ship a single central claim
Typical structure:     Contribution list of 3–5 central claims, each typed (comparative/theoretical/...) and each pre-wired to a named experiment, table, figure, or theorem; supporting claims form a second, explicitly lower tier
Canonical form:        "C<i>: <comparative claim> — evidence: Table k"; "C<j>: <theoretical claim> — evidence: Theorem k"; 3–6 of these, median 4
Most common domains:   All (no domain dependence; position papers compress to 3–4 commitments but keep the family shape)
Typical evidence:      One-to-one experiment→claim mapping; best papers run ~3.4 experiment families for ~3.6 central claims — evidence density ≈ claim density
Why it works:          A reviewer can verify every contribution against a specific artifact without hunting; a single claim forces the paper's fate onto one experiment, while a family with pre-mapped evidence makes rejection require rejecting several independent lines.
Observed in:           NEURIPS 2023 — DPO (3 central: comparative, practical, theoretical — each with named tables/theorems); CVPR 2025 — VGGT (4 central, Table 1–6 mapping); ICLR 2025 — Shallow safety alignment (6 central, all evidence-pointed); NEURIPS 2021 — Statistical precipice (6 central); ICLR 2026 — LLMs lost in conversation (5 central incl. a negative-results claim); NEURIPS 2022 — EDM (4 central)
Caveats:               The family must be a *family*, not a heap — weak papers list 5 contributions and support 1. The 2-paper exception (single central claim) works only when the claim is a field-level refutation (mirage-style) or an impossibility theorem.
```

```text
Pattern C002
---------------------------
Name:                  Comparative-Plus-Enabler Pair
Frequency:             31 / 102 (occasional, 30%)
Typical structure:     Central claim 1: parity/superiority on quality vs SOTA. Central claim 2 (independent, separately evidenced): same quality at N× less cost/data/latency, or with a removed prerequisite (no RL loop, no labels, no post-processing, training-free)
Canonical form:        "X matches or beats Y" + "while <removing cost/complexity prerequisite>" — stated as two central claims, each with its own evidence
Most common domains:   Generative models, LLM alignment/training, diffusion, 3D vision, optimization
Typical evidence:      Quality table + a second artifact: latency/FLOPs table, data-fraction curve, hyperparameter-robustness sweep, or a "no-X-required" ablation
Why it works:          Reviewers discount pure leaderboard wins as ephemeral; the enabler claim converts the result into a *practical regime change* that survives the next benchmark cycle. It also pre-answers "why not just use Y?" — because Y costs 10–500× more or needs what this method doesn't.
Observed in:           NEURIPS 2023 — DPO (comparative + "no sampling, almost no tuning"); CVPR 2025 — VGGT (SOTA + 0.2 s vs ~10 s); ICLR 2022 — Analytic-DPM (quality + training-free, 20–80× speedup); ICML 2024 — SEDD (beats GPT-2 + 32× fewer network evaluations); NeurIPS 2024 — Rho-1 (gains + matches DeepSeekMath with 3% of tokens); ICCV 2021 — Swin (accuracy + real-latency table)
Caveats:               The enabler claim needs its own evidence — a latency table, a data-efficiency curve — not an assertion in prose. Fails when the enabler is entangled (e.g., headline FID achieved *with* DPO post-training, ICML 2024 SD3's own conceded confound) or when the speedup baseline is unimproved (see anti-pattern AP-C2).
```

```text
Pattern C003
---------------------------
Name:                  Self-Scoping Claim
Frequency:             23 / 102 (occasional, 23%) — conservative grep of claim text; true prevalence higher since scopes often sit in thesis lines
Typical structure:     The scope qualifier is INSIDE the claim sentence, not a separate limitations paragraph: regime ("in the data-constrained regime"), resource condition ("using only 10 labeled examples", "with no 3D training data"), or mechanism condition ("provided one chooses an increasing Pareto-optimal pruning fraction")
Canonical form:        "In <regime>, <claim>" / "<claim>, using only <resource>" / "<claim> without <prerequisite>"
Most common domains:   Scaling-law papers, few-shot/efficiency papers, theory (assumption-scoped theorems), position papers
Typical evidence:      The scoped claim is evidenced exactly at the stated regime; papers often add a second experiment showing behavior *outside* the regime (NLP deviation in koch; DenseNet null result in DiffStride)
Why it works:          A scoped claim is falsifiable and therefore safe: the reviewer cannot refute it with a counterexample outside the stated regime, and the scope itself reads as experimental maturity. Unscoped superlatives invite the strongest attack; self-scoped ones invite none.
Observed in:           NeurIPS 2023 — Data-constrained scaling ("up to 4 epochs... negligible changes"); ICLR 2023 — Visual token matching ("with 10 labeled examples (<0.004% of full supervision)"); NeurIPS 2022 — Data pruning ("provided one chooses an increasing Pareto optimal pruning fraction"); ICML 2023 — D-Adaptation ("for this class... without additional multiplicative log factors"); ICLR 2024 — Registers ("training with register tokens removes high-norm artifacts entirely for supervised, text-supervised, and self-supervised models")
Caveats:               Over-scoping deflates the contribution ("so it only works in a toy regime"). Best papers scope the *claim* while maximizing the *evidence* breadth — scope the sentence, not the ambition. Time-indexed scoping is a special case (C013).
```

```text
Pattern C004
---------------------------
Name:                  Negative / Impossibility Headline
Frequency:             20 / 102 (occasional, 20%)
Typical structure:     The headline central claim is that something CANNOT be done, DOES NOT hold, or IS an artifact: impossibility theorem, learnability barrier, "remediations are inadequate", "X does not elicit Y", "bounds are vacuous", or a matching lower bound
Canonical form:        "X is not learnable / cannot express / does not improve / is likely a mirage — proven/measured via <control or construction>"
Most common domains:   Learning theory, LLM evaluation/measurement methodology, alignment analysis, scaling-law analysis
Typical evidence:      Impossibility theorems with explicit counterexample constructions; matching upper+lower bounds; control conditions that dissolve the phenomenon (CONCAT control, metric-swap re-analysis); negative-results grids (remediation A recovers 15–20%, B fails at T=0)
Why it works:          A proven ceiling or demonstrated artifact is unattackable by "try harder" — it redirects the field rather than competing within it, and the reviewer's cost of checking a counterexample construction is low. It also converts the paper's own negative experiments from weakness into evidence.
Observed in:           NEURIPS 2022 — OOD detection learnability (not PAC-learnable in the total space); NEURIPS 2023 — Emergent abilities mirage (evaporate upon metric change); NEURIPS 2025 — Limit of RLVR (RLVR does not elicit beyond base; pass@k evidence); ICLR 2026 — LLMs lost in conversation (known remediations inadequate — Tables 2–3); ICML 2024 — CMI memorization (CMI bounds are vacuous for optimal SCO learners); NEURIPS 2021 — Markov reward expressivity (impossibility + realization algorithms); ICLR 2026 — Succinctness (no expressive-power deficit — refutes a belief); ICLR 2023 — GD-WL (MPNNs/GSN/CWN/GraphSNN cannot solve any biconnectivity problem)
Caveats:               Requires genuinely airtight evidence (control + construction + induction, mirage-style) — a single failed remediation reads as a strawman. Impossibility claims are also hostage to definitions: reviewers attack the formalization (cf. NeurIPS 2025 RLVR's conceded k=256 proxy). The claim must be about a *class* of methods, not one weak instance.
```

```text
Pattern C005
---------------------------
Name:                  Resource-Plus-Finding Stack
Frequency:             9 / 102 (rare, 9%) — all D&B-track or dataset-centric papers
Typical structure:     Central claim 1: the resource exists at scale with unprecedented property P (largest, first dense ratings, census-representative). Central claim 2–3: empirical findings the resource enables (ranking sensitivity, failure modes) — the resource is never the whole story
Canonical form:        "We release X, the largest/first <resource>" + "and use it to show <finding that was previously unmeasurable>"
Most common domains:   Datasets & benchmarks tracks (NeurIPS D&B), evaluation methodology
Typical evidence:      Resource statistics tables + at least one headline empirical finding produced by the resource; often a validation study of the resource itself (annotator agreement, rater calibration)
Why it works:          A bare resource claim invites "and what did we learn?"; the finding claim gives the resource immediate scientific yield, and the resource gives the finding a permanent artifact. Each covers the other's weakness.
Observed in:           NeurIPS 2022 — LAION-5B (largest dataset + scale-matters finding: 2B beats 400M at equal compute); NeurIPS 2023 — ClimSim (largest hybrid-physics dataset + offline-metrics-don't-predict-online finding); NeurIPS 2024 — PRISM (representative feedback dataset + rankings-shift-with-population finding); NeurIPS 2023 — DecodingTrust (first trustworthiness suite + GPT-4-jailbreak-sensitivity finding); NeurIPS 2025 — INFINITY-CHAT (first dense-preference resource + Artificial Hivemind finding)
Caveats:               The finding must be robust to the resource's known biases (PRISM concedes crowdworker-only, cardinal-scale issues in the same paper). D&B papers are graded on validation: a resource without an evaluation-quality claim (annotator agreement, filter audit) reads as unvetted.
```

```text
Pattern C006
---------------------------
Name:                  Bottleneck-Naming Contribution
Frequency:             14 / 102 (rare, 14%) — "bottleneck" named in DNA text; strict contribution-sentence form ≈ 8/102
Typical structure:     "The field assumes progress is blocked by A; we identify B as the actual bottleneck" → contribution = removing B → A-side improvements follow as corollaries
Canonical form:        "We identify <B> as the key bottleneck for <task>, and address it through <mechanism>"
Most common domains:   Hybrid modeling / scientific ML, meta-learning, data-centric ML, world models
Typical evidence:      A bottleneck-isolating comparison: with-B-removed vs with-A-removed, or a transfer experiment showing the presumed bottleneck (architecture, data) doesn't matter once B is fixed
Why it works:          Naming the true bottleneck reorganizes the field's effort allocation — it tells reviewers where the next five papers should go, which reads as leadership rather than increment.
Observed in:           NeurIPS 2023 — ClimSim ("the bottleneck is the training interface, not the ML architecture"); ICLR 2022 — Bootstrapped meta-learning (curvature is the meta-gradient bottleneck); ICML 2025 — Algorithmic creativity (next-token learning, not capacity, causes the creativity deficit); NeurIPS 2022 — Data pruning (the bottleneck is the pruning metric's quality, conceded and deferred); CVPR 2023 — UniAD (bottleneck is the lack of planning-oriented joint optimization); ICML 2024 — Genie (controllability was bottlenecked on action labels)
Caveats:               The bottleneck claim is a causal claim about a *field*, not just a system — it needs the isolating experiment (UniAD's Exp.0-vs-Exp.12 ladder), else it is an assertion. Fails when the "bottleneck" is one the paper is best positioned to sell.
```

---

## Family B — Novelty-type usage

```text
Pattern C007
---------------------------
Name:                  "First" Priority Claim
Frequency:             17 / 102 (occasional, 17%)
Typical structure:     A central claim asserting priority, always narrowed by qualifiers that make it defensible: "first ... trained in an unsupervised manner from unlabelled Internet videos", "first hyper-parameter free method ... without additional multiplicative log factors", "first approach for generating physically stable brick assembly from text"
Canonical form:        "The first <X> that <qualifier>" — qualifier does the defensive work
Most common domains:   Generative models, world models, optimization, text-to-3D, sampling theory
Typical evidence:      A comparison table enumerating prior paradigms (Genie's Table 1 class table) or a direct statement of what the nearest prior work lacks
Why it works:          Narrow "first" claims are cheap to verify and expensive to refute; the qualifier pre-emptively excludes the nearest competitors, so the priority claim survives the concurrent-work check.
Observed in:           ICML 2024 — Genie ("first generative interactive environment trained in an unsupervised manner from unlabelled videos"); ICCV 2025 — BrickGPT ("first physically stable brick assembly from text"); ICML 2023 — D-Adaptation ("first hyper-parameter free method for this class without additional log factors"); ICML 2026 — FORS ("first polylog(1/δ) sampler for general log-concave distributions using only gradient evaluations"); NeurIPS 2024 — VAR ("for the first time, GPT-style AR models surpass diffusion transformers"); NeurIPS 2021 — Moser Flow ("first flow models on general curved surfaces")
Caveats:               "First" is snapshot-sensitive (VAR concedes MagViT-2 in a footnote; frey flags concurrent work; bonnaire acknowledges Favero et al. overlap) — see anti-pattern AP-C7. Never claim "first" on the *outcome* ("first good X") — only on the *mechanism/regime* where precedence is checkable.
```

```text
Pattern C008
---------------------------
Name:                  Dual-Currency Paper (theorem + benchmark as separate central claims)
Frequency:             25 / 102 (occasional, 25%) — 25 of the 42 papers with a theoretical central claim also carry a comparative central claim
Typical structure:     Central claim 1 (theoretical): the mechanism is provably sound / the guarantee is tight / the representation is fully general — evidenced by theorem. Central claim 2 (comparative): the resulting method wins in practice — evidenced by benchmark tables. The theorem legitimizes the mechanism; the benchmark legitimizes the engineering
Canonical form:        "We prove <guarantee> (Theorem k)" + "X outperforms <baselines> on <suite> (Table k)" — both central, neither derived from the other
Most common domains:   Generative models (diffusion/discrete), LLM theory-adjacent work, optimization, privacy, RL theory with experiments
Typical evidence:      Theorem with stated assumptions + controlled benchmark; ideally a third claim connecting them (e.g., empirical slopes match theoretical exponents, ICLR 2024 GAHB)
Why it works:          Each currency covers the other's standard attack: the theorem kills "just a heuristic", the benchmark kills "doesn't work in practice". Reviewers forgives assumption gaps when the empirical claim stands on its own evidence.
Observed in:           NEURIPS 2023 — DPO (Theorem 1 generality + frontier comparisons); ICLR 2025 — AlphaEdit (null-space projection guarantee + +36.7% average boost); ICML 2024 — SEDD (score-entropy consistency + perplexity wins); ICLR 2022 — Analytic-DPM (analytic optimal variance + plug-and-play wins); NeurIPS 2022 — Chinchilla (compute-optimal frontier + Chinchilla beats Gopher); NeurIPS 2025 — Superposition scaling (regime theory + LM-head overlap measurements across OPT/GPT-2/Qwen/Pythia); ICLR 2024 — GAHB (bandlet near-optimality + measured PSNR slopes match theory)
Caveats:               The two currencies must be honestly linked: if the theorem's assumptions are far from the benchmark's regime (eNTK approximation in ICLR 2025 learning dynamics; UHAT-vs-softmax gap in ICLR 2026 succinctness), reviewers attack the bridge. A weak theorem pro-forma attached to a benchmark paper backfires.
```

```text
Pattern C009
---------------------------
Name:                  Reframe-Not-Invent
Frequency:             12 / 102 (rare, 12%)
Typical structure:     The central contribution is a new *explanation or reframing* of a known phenomenon, often with an explicit disclaimer that no new architecture/mechanism is proposed: "your LM is secretly a reward model"; "registers isolate an existing behavior rather than create a new one"; emergent abilities are "creations of the researcher's choices, not a fundamental property"
Canonical form:        "X is not <assumed nature> but <reframing>" / "our contribution is not a new <artifact> but a new <explanation>"
Most common domains:   Science-of-deep-learning, representation analysis, evaluation methodology, LLM alignment
Typical evidence:      Diagnostic probes that make the reframing testable (memory transplant in blind navigation, norm distributions in registers, per-token KL in shallow alignment, Jacobian eigendecomposition in GAHB); explicit disambiguation sentence in intro or method
Why it works:          Explanation-novelty ages slower than artifact-novelty and cannot be scooped by an engineering variant; the explicit "not a new X" disclaimer disarms the "is this just Y?" attack by conceding it first.
Observed in:           NEURIPS 2023 — DPO ("Your language model is secretly a reward model" — a change of variables, not a new objective family); ICLR 2024 — ViT registers ("registers isolate the existing behavior rather than create a new one"); NEURIPS 2023 — Emergent abilities mirage (metric artifact, not model property); ICLR 2023 — Emergence of maps (blind agents' memory IS a map — capability reframing); ICLR 2025 — Shallow safety alignment (jailbreaks share one cause: KL spent on first tokens); NeurIPS 2025 — Superposition scaling (scaling-law exponent IS superposition geometry)
Caveats:               Reframing without a testable differential prediction reads as philosophy; each best instance ties the reframe to at least one experiment only the reframe predicts (e.g., CONCAT control in lost-in-conversation). Two corpus papers (darcet, schaeffer) make the disclaimer fully explicit; the other ten imply it.
```

```text
Pattern C010
---------------------------
Name:                  Mechanism-Attribution Claim
Frequency:             21 / 102 (occasional, 21%)
Typical structure:     A central claim asserting WHY the improvement happens ("the gain comes from component M / the effect is caused by property P"), evidenced by an ablation that isolates M plus often a probe of the claimed mechanism — the causal step is promoted to its own claim, never folded silently into the headline
Canonical form:        "<Component M> is necessary/essential: without it <metric> collapses to <level>" — with the ablation table cited in the claim itself
Most common domains:   Vision architectures, diffusion, LLM training, generative video
Typical evidence:     Component-removal ablations with large deltas (zero-conv removal in ControlNet; register removal in DINOv2; gate removal in Qiu 2025); mechanism probes (fork-token entropy in JustGRPO, attention-share drop for sinks, gradient decomposition in shallow alignment)
Why it works:          Reviewers' deepest question about any win is "would a simpler variant do as well?"; a central, ablation-backed attribution claim answers it before it is asked and protects the paper's interpretation from post-hoc re-explanation.
Observed in:           ICCV 2023 — ControlNet (zero convolutions are the load-bearing component — Fig. 8 ablation matrix); ICML 2026 — JustGRPO (mechanism = entropy degradation at forking tokens, Figs. 6–7); NeurIPS 2025 — Gated attention (effect attributable to non-linearity + input-dependent sparsity, Tables 3–4); ICLR 2023 — Visual token matching (matching AND adaptation both necessary — Table 2); NeurIPS 2024 — Autoguidance (gain attributable to fit-quality differential, not class-likelihood boosting); CVPR 2025 — VGGT (over-complete multi-task supervision causes the gain, Table 6)
Caveats:               The ablation must isolate ONE factor at matched budget, else the attribution is confounded (VTM's backbone confound; STDE's unimproved baseline — AP-C2). When the mechanism is only partly understood, best papers say so explicitly (darcet: "we have not been able to fully determine...") — claim the attribution only where the ablation supports it.
```

```text
Pattern C011
---------------------------
Name:                  Effect-Decomposition Claim
Frequency:             5 / 102 (exceptional, 5%)
Typical structure:     A headline effect is decomposed into components A and B, with a control showing the effect is (mostly) B, not A: "a minor loss in aptitude and a significant increase in unreliability"; "underspecification, not information sharding" (CONCAT control at 95.1% of FULL); "only 26% of tokens exhibit meaningful loss reduction"
Canonical form:        "The effect is not <intuitive cause A> but <component B> — control: <A-only condition ≈ full effect>"
Most common domains:   LLM evaluation, pretraining data analysis, experimental methodology
Typical evidence:      A purpose-built control condition (CONCAT vs SHARDED), a decomposition statistic (per-token KL, per-token-class loss), or a re-analysis that partitions the effect
Why it works:          Decomposition converts a black-box phenomenon into an actionable one — it tells the reader what to fix. The control that rules out the intuitive explanation is what makes it a claim rather than a conjecture.
Observed in:           ICLR 2026 — LLMs lost in conversation (aptitude vs unreliability split, CONCAT control); ICLR 2025 — Shallow safety alignment (KL concentrated in first tokens explains all exploit families); NeurIPS 2024 — Rho-1 (26% of tokens drive loss reduction; unselected-token reduction hurts); NEURIPS 2023 — Emergent abilities (effect = metric choice, not model property); NEURIPS 2021 — Statistical precipice (ranking flips = protocol differences, not algorithm differences)
Caveats:               Needs the negative control, else it is narration. The decomposition can also be attacked as partial (laban's four root causes are "correlational/qualitative" — conceded); pair it with a fix that targets component B specifically.
```

---

## Family C — Overclaiming-calibration moves

```text
Pattern C012
---------------------------
Name:                  Hedge-Where-Thin
Frequency:             8 / 102 (rare, 8%) — central-claim wording; 28/102 hedge or flag open problems in claims+reviewer_defense text
Typical structure:     Where the evidence class is weakest (OOD generalization, causal interpretation of correlational data, mechanism beyond the probe), the claim sentence itself downgrades: "may be", "suggests", "is consistent with", "initial evidence", "potentially because", "we hypothesize", "presumably"
Canonical form:        "<Observation> is consistent with / provides initial evidence for <interpretation>" — verb strength matched to evidence class
Most common domains:   Everywhere, but concentrated in generalization claims and mechanism interpretations
Typical evidence:      The hedged claim points to the weakest-evidence experiment in the paper — the hedge marks the exact location of the evidence ceiling, and is often echoed verbatim in reviewer_defense.vulnerabilities ("called 'initial evidence' by the authors themselves")
Why it works:          The reviewer's overclaiming detector fires on the gap between verb and evidence; a self-applied hedge removes the attack while costing almost nothing — and it reads as calibration, not weakness, when the strong claims elsewhere stay unhedged.
Observed in:           NEURIPS 2023 — DPO (OOD generalization claim: "initial evidence", authors' own label); NEURIPS 2023 — Emergent abilities (headline hedged: "may be creations of the researcher's choices... might likely be a mirage"); NEURIPS 2023 — DecodingTrust ("potentially because GPT-4 follows misleading instructions more precisely"); ICLR 2023 — Emergence of maps ("the story is a bit nuanced" — conceding the sighted-agent complication); NeurIPS 2025 — Gated attention ("we hypothesize" for the sink→long-context link); ICLR 2024 — GAHB ("presumably engendered" for the architectural origin)
Caveats:               Hedge only the claim that is actually thin — hedging the headline comparative claim while the tables are strong signals timidity. A hedge is a promise not to over-read; the paper must then not quietly over-read it in the conclusion.
```

```text
Pattern C013
---------------------------
Name:                  Time-Indexed Claim
Frequency:             13 / 102 (rare, 13%)
Typical structure:     Volatile claims are scoped to the current state of the field: "current RLVR", "current large language models are significantly under-trained", "current private learning benchmarks", "the current ecosystem... makes misuse increasingly likely" — the claim is dated by construction
Canonical form:        "Current <methods/benchmarks/models> <claim>" — implicit expiration date built into the claim
Most common domains:   LLM scaling/reasoning analysis, privacy, position papers, benchmark papers
Typical evidence:      The evidence is itself about current artifacts (specific model families, existing benchmarks); the index makes the claim immune to future falsification by better methods — the paper predicted the boundary, and crossing it confirms rather than refutes
Why it works:          An unindexed claim ("RLVR cannot elicit new reasoning") is falsifiable by the next paper and invites the "already outdated" review; the index converts future progress into confirmation of the paper's diagnosis of *why* the current generation fails.
Observed in:           NEURIPS 2025 — Limit of RLVR ("current RLVR" — conceded as time-indexed and falsifiable by the next algorithm generation); NeurIPS 2022 — Chinchilla ("current large language models are significantly under-trained"); ICML 2024 — DP position ("current private learning benchmarks likely overestimate..."); ICLR 2026 — LLMs lost in conversation (top models *as tested*); NeurIPS 2023 — Data-constrained scaling ("in the data-constrained regime"); NeurIPS 2023 — DecodingTrust (snapshot evaluation, conceded)
Caveats:               Over-indexing deflates impact ("so it's already obsolete?"). Best practice: index the *negative/limitation* claims, leave the mechanism claims unindexed, and state what evidence would cross the boundary (RLVR's k→∞ framing).
```

```text
Pattern C014
---------------------------
Name:                  Explicit Scope Denial ("we do not claim X")
Frequency:             5 / 102 (exceptional, 5%)
Typical structure:     The paper explicitly refuses a tempting stronger claim, usually adjacent to its headline result: "empirical support for this claim is beyond the scope of this paper"; "we are making a (subjective) moral argument"; "this does not prove that a minimalist camera guarantees privacy"; "the position is about intentional misuse, not abandoning safeguards"
Canonical form:        "We do not claim <stronger claim X>" — naming the tempting overreach and refusing it in one sentence
Most common domains:   Meta-science, position papers, hardware/privacy, any paper with a socially loaded headline
Typical evidence:      None needed — the move is definitional; it redirects the reader from the refused claim to the supported one
Why it works:          Reviewers test the strongest adjacent claim, not the stated one; refusing it explicitly removes the strawman the reviewer was about to build, and the refusal itself demonstrates claim-evidence discipline.
Observed in:           NEURIPS 2021 — Dataset life (Matthew-Effect claim: "empirical support for this claim is beyond the scope of this paper" — the interpretive claim is explicitly marked); ICML 2024 — DP position ("we are making a (subjective) moral argument", footnote 6); ECCV 2024 — Freeform pixels ("this does not prove that a minimalist camera guarantees privacy", §6.1); ICML 2025 — Algorithmic creativity (subjective dimensions "explicitly out of scope"); ICML 2026 — Censor's toolkit (scope commitment: alignment itself must not be halted)
Caveats:               The refusal must target a claim the paper could plausibly be read as making; refusing something nobody would infer is noise. This is the rarest calibration move in the corpus — most papers achieve the same effect implicitly via scope qualifiers (C003) or hedges (C012).
```

```text
Pattern C015
---------------------------
Name:                  Named-Loss Pairing (win stated next to where the method loses)
Frequency:             11 / 102 (rare, 11%) observed at claim-adjacent prominence; the underlying concession is near-universal in `vulnerabilities` (~97/102 per the reviewer-defense library)
Typical structure:     A central or headline claim is immediately paired with a named, quantified loss: "wins on compute, loses on tightness — a 393× gap in δ"; "BIDMC shows no headroom — SPT not universally useful"; "no gain on DenseNets"; "SEDD Uniform notably weaker than Absorb"
Canonical form:        "<Method wins on <axis>>; it loses on <axis 2> by <quantified amount>" — the loss gets a number, not a shrug
Most common domains:   Privacy auditing, pretraining methods, architectures, generative models
Typical evidence:      The losing experiment is included and reported at the same precision as the winning one (same tables, same metrics)
Why it works:          Reporting the loss pre-empts the reviewer's counterexample hunt and establishes the paper as a trustworthy narrator — which raises, not lowers, the credibility of the win. The quantified loss also delineates the method's applicability boundary, which is what practitioners actually need.
Observed in:           NeurIPS 2023 — Privacy auditing one-run (393× δ-gap conceded in the abstract's neighborhood); ICLR 2024 — Never train from scratch (BIDMC no-headroom table kept in the main results); ICLR 2022 — DiffStride (no gain on DenseNets, hypothesized cause offered); ICML 2024 — SEDD (Uniform variant's weakness stated); NeurIPS 2022 — Riemannian SGM (real-data gains "marginal" — authors' word); ICLR 2025 — Shallow safety alignment (GCG robustness improves but remains 19.0%)
Caveats:               The loss must be genuinely material — pairing a trivial loss reads as manufactured humility. Never bury the loss in the appendix while claiming the win in the abstract; the pattern's value comes from the pairing's proximity.
```

```text
Pattern C016
---------------------------
Name:                  Evaluator-Legitimation Claim
Frequency:             10 / 102 (rare, 10%)
Typical structure:     Before (or alongside) leaning on an automatic judge or metric, a central or explicitly-supporting claim validates the evaluator itself: "GPT-4 agrees with humans about as often as humans agree with each other"; "MAUVE correlates better with human judgments than all compared metrics (ρ=0.95 vs 0.60)"; "MineCLIP agrees with ground-truth human judgment (F1 97.4)"
Canonical form:        "<Proxy evaluator> is valid because <agreement/correlation with human ground truth>" — evidence: human study, agreement table
Most common domains:   Text-to-image, text generation evaluation, RLHF/reward modeling, embodied AI with learned rewards
Typical evidence:      Human study with reported n (272 respondents in DPO; 6476 judgements in debate; 201 participants in CollabLLM), agreement statistics, or correlation against human preference rankings
Why it works:          Every proxy-metric result inherits the evaluator's validity; validating the evaluator upgrades the evidential class of ALL downstream comparative claims from correlational to near-direct, and removes the cheapest rebuttal ("LLM judges are biased").
Observed in:           NEURIPS 2023 — DPO (GPT-4-vs-human agreement study, §6.4); NEURIPS 2021 — MAUVE (human-correlation table vs all baselines); NeurIPS 2022 — MineDojo (MineCLIP F1 vs human judgment on Creative tasks); ICML 2024 — Debate (6476-judgement human study anchoring the LLM results); ICML 2025 — CollabLLM (201-participant randomized user study behind the LLM-judge numbers); NeurIPS 2022 — Imagen (human raters preferred over all models on DrawBench)
Caveats:               The validation must cover the regime actually evaluated (DPO concedes GPT-4 prompt sensitivity; CollabLLM concedes simulator users); a validation on easy cases does not license hard-case numbers. Self-proposed metrics validated only in-domain remain circular (AP-C1) — frey's wet-lab calibration is the gold standard.
```

---

## Anti-pattern instances (overclaiming patterns found in `reviewer_defense.vulnerabilities`)

Best papers are not free of overclaiming pressure — these are observed instances, each survived via a named mitigation. Counts are instances in the corpus, not paper-frequency classes.

**AP-C1 — Self-proposed metric as primary benchmark (6 instances).** DCS is self-proposed and primary (ICLR 2024 Walk-Jump Sampling — mitigated by wet-lab calibration: 270/277 designs expressed); MineCLIP is both reward and success criterion on Creative tasks (NeurIPS 2022 MineDojo — mitigated by human-labeled subset); PRISM's style/content confounds only weakly explained, R²=0.06 (NeurIPS 2024 — conceded, better methods called for); single-turn metrics reused multi-turn (ICLR 2026 lost-in-conversation — conceded, §9); unauditable CLIP-filter threshold propagates dataset biases (NeurIPS 2022 LAION-5B); FID-only evaluation (NeurIPS 2022 EDM — conceded §6). *Lesson: circularity is survivable only with an external calibration anchor.*

**AP-C2 — Headline multiple resting on a weak/unimproved baseline (5 instances).** STDE's ">1000× speed-up" is vs the unimproved PyTorch baseline; vs the strengthened baseline it is 10× (NeurIPS 2024 STDE — both numbers disclosed); PPO baseline on Anthropic-HH was an external checkpoint the authors "are unable to find a prompt... better than" (NEURIPS 2023 DPO); Pythia comparison confounded by forced tokenizer change (ICLR 2024 never-train-from-scratch — conceded); GQA evaluated on a self-created non-standard subset (CVPR 2023 VisProg — conceded); few-shot baselines use weaker backbones (ICLR 2023 VTM — confound admitted implicitly). *Lesson: state the strongest-baseline number next to the headline number.*

**AP-C3 — Proprietary/internal evaluation pipeline (6 instances).** Google-internal raters and data (ICML 2024 VideoPoet — "not reproducible"); internal human raters, no model release (NeurIPS 2022 Imagen); in-house rater pools (ICML 2024 SD3); internal dataset mixture, 64 TPU (CVPR 2026 D4RT); core comparisons partly evaluated in the simulator itself (ICLR 2024 universal simulator — conceded in table caption); no strong external generative baseline (ICML 2024 Genie). *Lesson: industrial papers compensate with scale + disclosure; academic papers cannot — do not import the pattern.*

**AP-C4 — Qualitative-figure support for a headline claim (4 instances).** Simulator quality "rests heavily on qualitative figures" (ICLR 2024); no strong quantitative baseline, playability shown qualitatively (ICML 2024 Genie); diversity claims "partly inferential" from FID (NeurIPS 2024 Autoguidance); control "dramatically improve performance" asserted with partial quantitative support (CVPR 2026 D4RT). *Lesson: keep qualitative claims descriptive-level; do not let them carry causal wording.*

**AP-C5 — Bound-vs-estimate conflation (3 instances).** "Beats GPT-2" rests on ELBO upper bounds vs AR estimates (ICML 2024 SEDD — conceded); privacy lower bound 393× looser than the metric it audits (NeurIPS 2023 one-run auditing — named-loss paired, C015); compute-optimal law estimated on smoothed training loss, extrapolated past 16B (NeurIPS 2022 Chinchilla — footnoted). *Lesson: the bound direction must be stated in the claim sentence, not only the appendix.*

**AP-C6 — Undefined key term inside a central claim (4 instances).** "Emergence" not rigorously defined yet used in the framing (NeurIPS 2025 1000-layer RL — anticipated the critique in its own vulnerabilities); "human-likeness" defined by one behavioral signature (NeurIPS 2022 language-program inductive biases — conceded); "diversity" deliberately left undefined (ICML 2024 position — *declared* inductive move, C014-adjacent); diversity-metric expressiveness conceded insufficient (NeurIPS 2025 INFINITY-CHAT). *Lesson: define the load-bearing term, or explicitly declare the definitional stance.*

**AP-C7 — Priority-snapshot risk ("first" vs concurrent work) (3 instances).** "For the first time" contested in a footnote by MagViT-2 (NeurIPS 2024 VAR); concurrent-work caveat frames the entire diffusion comparison (ICLR 2024 Walk-Jump); Favero et al. overlap acknowledged (NeurIPS 2025 dynamical regularization). *Lesson: pair every "first" (C007) with the concurrent-work footnote in the same paragraph.*

**AP-C8 — Evaluation scope narrower than the claim's implied domain (8 instances).** 20×20×20 grid, single brick height (ICCV 2025 BrickGPT); models capped at 6B (NEURIPS 2023 DPO); ≤7B, <100B tokens (NeurIPS 2024 Rho-1 — conceded "Scalability"); GPT-2 architecture, C4 only, ≤9B (NeurIPS 2023 data-constrained scaling); English-only, analytical tasks (ICLR 2026 lost-in-conversation); two 7B open models (ICLR 2025 shallow alignment); single task domain ~8000-token fiction (ICML 2024 debate); two academic benchmarks ≤320k docs (NeurIPS 2022 NCI). *Lesson: either shrink the claim to the scope (C003) or add one transfer experiment beyond the comfort zone.*

---

## Candidates (single-paper)

Observations seen in exactly one corpus paper; promote to patterns if they recur in the next mining run.

- **Deployment-Response as Evidence (ICML 2024 — Stealing LLM layer).** Real-world mitigations deployed by providers (OpenAI/Google patched APIs) serve as external validation that the attack claim is material — evidence class "adversary-world response" seen nowhere else.
- **Two-Sided Bound Sandwich (ICML 2024 — Twisted SMC).** Upper + lower bounds on log Z bracketing the truth, with the gap itself upper-bounding the KL — "we can tell you how wrong we are" as a central claim; distinct from single-direction guarantee claims.
- **Critical-Point Phase-Transition Claim (NeurIPS 2025 — 1000-layer RL).** Performance jumps at critical depths with qualitatively distinct policies per depth band — a phase-transition framing of a scaling curve; closest relative is NeurIPS 2022 SGD effective dynamics (fixed-point transitions), but the empirical-curve form is unique here.
- **Regression-Adjusted Observational Claim (NeurIPS 2021 — Dataset life).** A causal-flavored field-level claim (concentration rises) supported by regression controls rather than intervention — the only paper in the corpus whose central evidence is econometric rather than experimental or theoretical; explicitly refuses the stronger mechanism claim (C014).
- **Wet-Lab Ground-Truth Anchor (ICLR 2024 — Walk-Jump).** An in-vitro synthesis campaign used to validate a self-proposed computational metric — unique evidence class in the corpus; the template for rescuing AP-C1 circularity.
