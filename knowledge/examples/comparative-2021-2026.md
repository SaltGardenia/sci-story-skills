# Comparative Analysis of the Best-Paper Corpus, 2021–2026 (§34 dimensions)

**Corpus:** 102 Paper DNA files — NeurIPS 2021–2025 (41), ICML 2023–2026 (27), ICLR 2022–2026 (21), CVPR 2022–2026 (7), ICCV 2021/2023/2025 (4), ECCV 2022/2024 (2). Year distribution: 2021 n=9, 2022 n=24, 2023 n=20, 2024 n=23, 2025 n=20, 2026 n=6.
**Method:** all 102 DNA files read; every count below is over this N unless a subset is named. Patterns are argument moves, never reused wording (§34). Ambiguous classifications are marked `judgment:`.

---

## 1. CV-family vs ML-family (13 vs 89 papers)

CV = CVPR/ICCV/ECCV best papers (7+4+2). ML = NeurIPS/ICML/ICLR. The two families build and defend arguments with visibly different default moves.

### 1.1 Problem framing

- **CV papers frame a design problem; ML papers frame a belief problem.** 6/13 CV papers (46%) open by constructing a design space or capability matrix and positioning the paper as the missing cell — UniAD's Fig. 1 taxonomy of standalone/MTL/end-to-end designs (CVPR 2023), D4RT's Table 2 capability matrix where it is the only method filling all columns (CVPR 2026), VGGT positioning simultaneously against optimization pipelines and single-task large models (CVPR 2025). In ML, the equivalent move appears in 17/89 (19%); the ML default instead targets a community belief or an implicit assumption (e.g., DPO attacks "preference optimization must be cast as RL", NeurIPS 2023; Yue et al. test "RLVR discovers new reasoning patterns", NeurIPS 2025).
- **CV papers state the problem as a quoted question more often**: 6/13 (46%) vs 20/89 (22%) in ML — e.g., UniAD's verbatim "how to design the pipeline in favor of planning?", VGGT's "can nets eschew geometry entirely?", ControlNet's "can we enable finer-grained spatial control?" (ICCV 2023). The CV question is almost always an *engineering* question ("how should X be designed?"); the ML question is almost always an *existential* one ("does X actually work / is X learnable / is X real?" — e.g., the boxed questions in Fang et al. OOD learnability, NeurIPS 2022; Steinke et al. single-run auditing, NeurIPS 2023; Yue et al., NeurIPS 2025).
- **Efficiency is a first-class CV claim**: 5/13 CV papers (38%) carry a headline speed/latency/cost claim (VGGT's seconds-vs-optimization; ControlNet's consumer-5218 training; the µs-scale Scranton solver, CVPR 2022; D4RT's 5–15× decoding speedup) vs 22/89 (25%) in ML, where efficiency is usually a supporting claim rather than the thesis.

### 1.2 Gap construction

| Gap mechanism | CV (of 13) | ML (of 89) |
|---|---|---|
| Capability matrix / taxonomy gap ("no prior method fills all columns") | 6 (46%) | 17 (19%) |
| Ablation-defined gap (prior designs fail a joint ablation) | 6 (46%) | 21 (24%) |
| Explicit quoted question in intro | 6 (46%) | 20 (22%) |
| Paradox / tension framing (two desiderata appear incompatible) | 0 (0%) | 21 (24%) |
| Surprise / counter-intuitive observation as the hook | 0 (0%) | 19 (21%) |
| Mechanism diagnosis ("why does X behave this way") | 3 (23%) | 31 (35%) |
| Metric / measurement-artifact critique | 2 (15%) | 25 (28%) |

- **CV never argues from paradox; ML almost always has it available.** No CV best paper in the corpus opens with "two desirable properties appear incompatible"; the ML corpus has 21 such papers (DiffStride reconciling discrete output shape with trainable stride, ICLR 2022; SEDD reconciling diffusion quality with autoregressive-caliber likelihood, ICML 2024; Kim et al. reconciling MDM training hardness with inference flexibility, ICML 2025). CV gap construction is *coverage-based* (a matrix with an empty cell) or *failure-based* (a named artifact or error mode); ML gap construction is *belief-based* (an assumption, expectation, or metric that turns out to be wrong).
- **CV failure evidence is visual, ML failure evidence is statistical.** CV papers open on qualitative failure modes with named artifact classes (Imagen's competitor artifacts; D4RT showing MegaSaM duplicating moving entities before any table; Generative Image Dynamics, CVPR 2024). ML papers open on a measured anomaly: a crossing pass@k curve (Yue, NeurIPS 2025), a 39% degradation number front-loaded in the intro (Laban et al., ICLR 2026), a 10× norm outlier (Darcet et al., ICLR 2024).
- **Shared across both families:** failure-mode/anomaly openings are the single most common gap device corpus-wide (53/102, 52%), and CV uses it at the same rate as ML. This is the one gap mechanism that is truly venue-agnostic.

### 1.3 Experiment architecture and evidence

- **CV runs the "prove the philosophy" ablation.** The strongest CV papers invert the conventional ordering: UniAD places its 13-row joint ablation (Table 2) *before* the per-task SOTA tables because the thesis is a design philosophy, not benchmark bragging (CVPR 2023); D4RT shows competitors' qualitative failures before any quantitative table (CVPR 2026); ControlNet leads with a user study because the task is human-facing (ICCV 2023). 6/13 CV papers make the ablation the argumentative core vs 21/89 (24%) in ML.
- **ML runs the "prove the belief wrong" sweep.** The characteristic ML evidence objects are the controlled frontier (DPO's 22-run reward-KL sweep, NeurIPS 2023), the cross-model scaling sweep (Chinchilla's 400+ runs, NeurIPS 2022; Muennighoff et al.'s 400+ runs, NeurIPS 2023), and the mechanism probes (per-token KL, ICLR 2025; probing/decoding experiments, ICLR 2023).
- **Evidence density is similar; claim mix is not.** Corpus-wide averages: 5.1 claims and 3.2 experiments per paper. CV claim lists lean comparative+practical; ML claim lists lean theoretical+mechanistic (corpus-wide claim-type totals: comparative 130/520, theoretical 90, descriptive 45, mechanistic 43, causal 24; theoretical claims are concentrated in the ML family).

`judgment:` the CV sample is small (13) and skewed toward system/3D/generative winners; "CV argues by coverage, ML argues by belief" should be read as a tendency of *system-flavored* best papers, not a law of the venue.

---

## 2. Paper types: method vs theory vs dataset/benchmark vs position vs analysis

`judgment:` boundaries are fuzzy (many method papers contain a theorem; several analysis papers ship a method). Classification below follows each DNA's dominant contribution type.

### 2.1 Method papers (~55–60 papers; the majority in every venue)

- **Gap:** usually a limitation of the current paradigm's *procedure* (RLHF's pipeline complexity, NeurIPS 2023; CFG's entangled effects, NeurIPS 2024) or a missing capability cell (§1.1).
- **Insight form:** most often a *reframe of what the object of study is* — "your language model is secretly a reward model" (NeurIPS 2023), "the guiding model is a bad version of itself, not an unconditional model" (NeurIPS 2024), "the autoregressive unit is a scale, not a token" (NeurIPS 2024), "treat the optimizer as part of the computation graph" (NeurIPS 2022). The insight is a one-line change of perspective that makes the method look inevitable.
- **Evidence plan:** controlled comparison first, ablation to bind each design element to one claim, then generality breadth. Anticipated attacks are handled by *including the cheap baseline* (Preferred-FT throughout DPO's experiments; Proactive Base in CollabLLM, ICML 2025; spectral-pooling fixed-stride twin in DiffStride, ICLR 2022).

### 2.2 Theory papers (~20; overwhelmingly ICLR/ICML/NeurIPS)

Named exemplars of the type's two gap strategies:
- **Closure-of-a-bound gap:** the gap is a quantified hole between known bounds that this paper closes at the optimal rate. Fiegel et al. build the entire intro as a rate ladder across four prior algorithms, each tagged with its exact O(·), ending at two explicit questions (ICML 2023); Chase et al. close a 30-year Ω(log d)–(2/3)d gap at Θ(√d) (NeurIPS 2025); Chen et al. (FORS) box the question and answer it with a theorem hierarchy where the prior lower bound proves "the algorithm, not the analysis, must change" (ICML 2026); Bergstrasser et al. invert a settled expressive-equivalence verdict by importing the classical notion of *succinctness* (ICLR 2026).
- **Reframe-the-question gap:** convert an algorithmic question into a definitional one — "is my detector good?" becomes a learnability question over (domain space, hypothesis space) pairs (Fang et al., NeurIPS 2022); "how do GNNs compare?" becomes "separation power is a syntactic property of the expression" (Geerts et al., ICLR 2022).
- **Evidence architecture:** 5/102 corpus papers have zero experiments (Geerts ICLR 2022; Chen ICML 2026; Hazra ICML 2025; Kim ICML 2025; Ball ICML 2026); theory papers substitute *predictive coverage of prior art* (recovering known results as corollaries, Geerts) or *tightness* (every lower bound paired with a matching upper bound, Attias et al. ICML 2024) as their validation. When experiments exist, they are verification-shaped: predictions stated in theory, then each checked (Ren et al., ICLR 2025; Yue et al., NeurIPS 2025).
- **Reviewer defense is theorem-shaped:** "is this just X?" is answered by proving optimality (Analytic-DPM, ICLR 2022), by scope footnotes, or by a negative result explaining why the bound cannot easily be improved (Papernot et al., ICLR 2022, Appendix D).

### 2.3 Dataset/benchmark papers (10 clear + 2 `judgment`)

Clear: ATOM3D (NeurIPS 2021), ProcTHOR (NeurIPS 2022), MineDojo (NeurIPS 2022), LAION-5B (NeurIPS 2022), DecodingTrust (NeurIPS 2023), ClimSim (NeurIPS 2023), PRISM (NeurIPS 2024), INFINITY-CHAT (NeurIPS 2025), RichHF-18K (CVPR 2024), plus Koch et al.'s dataset-ecosystem study (NeurIPS 2021, meta-science rather than a resource). `judgment:` BrickGPT (ICCV 2025) is a method paper with a benchmark folded in; Kirk et al. PRISM straddles dataset and position.

- **The gap is quantified as an access or coverage deficit before any argument:** LAION-5B opens with a table showing a >20× size gap between the largest public and private datasets — "the 20× gap is the gap" (NeurIPS 2022); ProcTHOR quantifies embodied-AI's scene scarcity against vision/NLP's billions of samples (NeurIPS 2022); RichHF-18K escalates through existing metrics, each dismissed for the same missing property (localization), which sets up "rich" as the missing axis (CVPR 2024).
- **Story shape:** need → construction → validation → finding. The best of them contribute a *finding*, not just a resource: DecodingTrust's "GPT-4 is better normally and worse under manipulation" double-edged-sword result (NeurIPS 2023); PRISM's stated-vs-contextual preference divergence (NeurIPS 2024); INFINITY-CHAT's cross-model "Artificial Hivemind" collapse (NeurIPS 2025); Koch et al.'s concentration dynamics (NeurIPS 2021). A benchmark whose only claim is "we built it" does not appear in the corpus.
- **Reviewer defense is ethics/robustness-shaped:** dedicated safety sections (LAION-5B §7), stale-results preemption via open toolkits (DecodingTrust), "you're helping attackers" white-hat arguments, and human-agreement studies validating the resource's own metric (MineDojo Table 2).

### 2.4 Position papers (5, all ICML position track 2024–2026)

Tramer et al. on DP + public pretraining (ICML 2024), Zhao et al. on dataset diversity (ICML 2024), Hazra et al. on AI safety and the future of work (ICML 2025), Kim et al. on peer review (ICML 2025), Ball et al. on alignment as a censorship toolkit (ICML 2026). Plus `judgment:` Qi et al.'s shallow safety alignment (ICLR 2025) behaves as a position paper with an unusually strong empirical spine.

- **The gap is a field-level narrative that must be broken.** Tramer et al. quote the community's victory lap ("getting close to 'solving' private learning") and pivot with an explicit challenge; Ball et al. open with an identity challenge to the alignment community's self-image and deploy the nuclear-physics dual-use analogy to make an uncomfortable claim respectable.
- **Evidence is an audit, not an experiment.** Tramer et al.'s benchmark list "functions like a results table"; Zhao et al. audit 135 datasets for undefined value-laden claims; Hazra et al. carry the burden with externally verifiable events (job-post statistics, lawsuits); Ball et al. footnoted journalism and legislation. Persuasive burden = verification sources, not benchmarks.
- **Defense is steelman-then-rebut:** each position paper names the strongest objection and answers it in a dedicated section (Hazra's "labor markets self-correct"; Ball's §6.1 "alignment should be stopped"; Tramer's "the data was already public"). Pre-commitments ("we do not call for halting alignment", Ball) fence off the extreme reading.

### 2.5 Analysis / measurement papers (~12)

Schaeffer et al.'s emergent-abilities mirage (NeurIPS 2023), Agarwal et al.'s statistical precipice (NeurIPS 2021), Darcet et al.'s registers (ICLR 2024), Kadkhodaie et al. (ICLR 2024), Amos et al. (ICLR 2024), Wijmans et al. (ICLR 2023), Qi et al. (ICLR 2025), Ren et al. (ICLR 2025), Yue et al. (NeurIPS 2025), Bonnaire et al. (NeurIPS 2025), Chinchilla (NeurIPS 2022) and Muennighoff et al. (NeurIPS 2023) `judgment:` on the latter two, which are scaling *studies* whose deliverable is a corrected law rather than a system.

- **Their gap is always a measurement artifact or an unexplained phenomenon**, and their signature move is *diagnosis before cure*: Agarwal et al. establish each failure mode with a 100-run case study before prescribing any statistic; Darcet et al. identify the culprit (high-norm recycled tokens) before naming the fix; Karras et al. literally title a section "Why does CFG improve image quality?" and answer it with a 2D toy model before introducing autoguidance (NeurIPS 2024).
- **They have the strongest preemptive defense in the corpus** because their whole contribution is an alternative explanation: Schaeffer et al. preempt "emergence might be real under changed power laws" in related work; Yue et al. preempt "base-model pass@k wins are lucky guesses" with manual CoT checks and unit-test-verified code results.

---

## 3. Time evolution 2021 → 2026

Every claim below is grounded in the per-year distributions and the named files.

1. **The LLM progressively takes over the corpus.** Papers whose field is LLM/alignment/language modeling: 0/9 (2021) → 1/24 (2022, Chinchilla) → 5/20 (2023: DPO, watermark, mirage, Scaling Data-Constrained LMs, DecodingTrust) → 5/23 (2024: Rho-1, debate, VideoPoet `judgment: video`, PRISM, AutoGuidance `judgment: diffusion`) → 9/20 (2025: AlphaEdit, shallow safety, learning dynamics, superposition scaling, gated attention, 1000-layer RL, RLVR limit, hivemind, Bonnaire `judgment: diffusion-theory`) → 3/6 (2026: succinctness transformers, lost-in-conversation, JustGRPO). Framing shifted accordingly: 2021's winners assume nothing about LLMs; by 2025–2026 the *default reader* is assumed to care about reasoning, alignment, and multi-turn interaction.
2. **Scaling-law narratives have an arc: wonder → correction → limitation.** 2021–2022 wonder and optimization (Chinchilla: the field was misallocating compute; data pruning: beat the power law). 2023–2024 refinement (repetition value decays predictably, NeurIPS 2023; validation loss as a scaling predictor for T2I, ICML 2024). 2025–2026 demystification (superposition mechanistically explains the 1/width law, NeurIPS 2025; RLVR "does not elicit new reasoning beyond the base model" measured via pass@k, NeurIPS 2025). The same structure recurs: a field-level trend is quoted, then corrected with a controlled sweep (400+ runs in both Chinchilla and Muennighoff et al.), then eventually diagnosed as an artifact or a bounded effect.
3. **Metric-artifact and evaluation-critique gaps rise steadily and dominate the LLM era.** Measurement-critique vocabulary appears in 27/102 papers overall, but the LLM-era cluster is dense: emergent abilities as a metric artifact (NeurIPS 2023), scratch-training underestimating long-context architectures (ICLR 2024), episodic evaluation flaw producing a 39% multi-turn degradation (ICLR 2026), homogeneity invisible to point-estimate preference evaluation (NeurIPS 2025), pass@k coverage vs average accuracy (NeurIPS 2025), single-scalar feedback as an impoverished signal (CVPR 2024). `judgment:` partly a real shift in how the field argues, partly a selection effect — best-paper committees increasingly reward papers that correct the community's measuring sticks.
4. **Position/safety papers arrive only after 2023.** Zero position papers before ICML 2024; then five in three years (Tramer 2024, Zhao 2024, Hazra 2025, Kim 2025, Ball 2026), plus the safety-diagnosis line (watermark ICML 2023 → shallow safety ICLR 2025). Their rhetorical apparatus (steelman sections, "Why Now?" subheadings, formal definitions of stakeholders) does not exist anywhere in the 2021–2022 corpus.
5. **Generative-media papers peak in 2022–2024 and then cede to analysis-of-LLMs.** Generative/diffusion/video best papers: 1 (2021, Moser flow) → 4–5 (2022: Imagen, EDM, Riemannian SGM, ProcTHOR-adjacent) → concentrated 2023–2024 (DreamFusion, SD3, VideoPoet, VAR, Generative Image Dynamics, Genie) → thinning by 2025–2026. In parallel, "science of the model" papers (registers, autoguidance, gated attention, learning dynamics, diffusion memorization dynamics) grow — by 2024–2025 the best papers increasingly *explain* systems rather than build them.
6. **Intros become more results-forward.** 2021–2022 intros typically end at a contribution list; 2024–2026 intros increasingly pre-disclose findings with evidentiary verbs: Yue et al.'s four bolded findings (NeurIPS 2025), Liu et al.'s "Main results/messages" triad inside the introduction (NeurIPS 2025), Qi et al.'s three-contribution preview with measurements attached (ICLR 2025), Khan et al.'s findings list before any method (ICML 2024). The intro is expected to carry evidence, not just intent.
7. **Interaction/multi-turn becomes a topic of its own in 2025–2026** (CollabLLM's next-turn rewards, ICML 2025; lost-in-conversation's sharded evaluation, ICLR 2026) — the corpus's newest recurring failure mode ("models do fine alone, break in conversation") is already generating its own measurement-critique papers.

---

## 4. The five best storytelling archetypes

One method paper, one artifact-refutation, one field-correction, one CV philosophy paper, one detective story — chosen to span the corpus's argumentative range.

### 4.1 The Simplification Identity — DPO (NeurIPS 2023, Rafailov et al.)

The archetype for "the method was hiding inside the objective." Story engine: a closed-form identity (the KL-constrained optimum inverted to express reward in terms of policy) does triple duty — it *is* the gap evidence (the derivation shows the reward model is unnecessary), *is* the method (a binary cross-entropy loss), and *is* the defense (Theorem 1 closes "is it just a special case?"). The thesis line ("your language model is secretly a reward model") becomes a section title, welding title, insight, and paper architecture into one object. Evidence plan: attack the paradigm's *complexity* rather than its output quality, then prove parity-plus on the paradigm's own objective (a 22-run reward-KL frontier where DPO strictly dominates PPO) before any real-task benchmark. This is why the paper reads as inevitable rather than competitive.

### 4.2 The Artifact Refutation — Emergent Abilities Are a Mirage (NeurIPS 2023, Schaeffer et al.)

The archetype for "the phenomenon is the measuring stick." Story engine: quote the field's most prestigious claim verbatim (Anderson's "More Is Different", Wei et al.'s emergence definition), pivot in one sentence ("we call into question"), then show >92% of BIG-Bench emergence claims co-occur with exactly two nonlinear/discontinuous metrics. The evidence plan is the paper's real genius — three independent lines at escalating strength (intervention on one metric family; population-level meta-analysis; deliberate synthesis of a "mirage" from smooth curves), so refuting any one line leaves the others standing. The move converts a hot phenomenon into a methodology lesson, which is precisely what makes it committee-proof.

### 4.3 The Field Correction — Chinchilla (NeurIPS 2022, Hoffmann et al.)

The archetype for "everyone is making the same expensive mistake." Story engine: quote the incumbent rule precisely (Kaplan et al.'s 5.5×/1.8×) so the reader feels the size of the error, formalize the question as constrained optimization on page one, then run a prediction→verification arc — estimate the frontier, predict a 4×-smaller/4×-longer model beats Gopher at equal compute, and execute the prediction as the falsification test. The methodological critique (fixed 130B-token LR schedules biased prior estimates) is itself a contribution, defended by Fig. A1. Best papers in this archetype are *falsifiable predictions about the field*, not systems.

### 4.4 The Philosophy-First System — UniAD (CVPR 2023, Hu et al.)

The CV archetype for "the architecture is the minimal instantiation of an argument." Story engine: build a two-axis design space where every prior design fails planning either by isolation or omission, pose the central question verbatim, and answer it with a *philosophy* ("planning-oriented") before any architecture appears. The evidence plan inverts convention: the 13-row joint ablation (naive-MTL baseline ID-0 → full ID-12, one codebase) is the headline table, placed before the per-task SOTA tables, because the thesis is about design philosophy; each module section opens with the limitation it replaces. Defense is preemption by ablation row: "just engineering stacking" → ID-0 vs ID-12; "why not direct regression?" → Exp.10 vs Exp.12; "perception suffers?" → Exp.1–3.

### 4.5 The Detective Story — Vision Transformers Need Registers (ICLR 2024, Darcet et al.)

The archetype for "we found the culprit." Story engine: open on a concrete anomaly (DINOv2 "surprisingly incompatible" with LOST), generalize it (supervised ViTs too), then walk the reader through the measurements that identify the mechanism (high-norm tokens appearing mid-training, recycled as global-information scratchpads) *before* naming the fix. The fix is then minimal by construction — add register tokens and the pathology "is isolated, not created" — so the method needs no benchmark heroics to be convincing: no-regression checks plus one resurrected downstream task (LOST, Table 3) suffice. This is the strongest template for analysis papers: mechanism identification is the contribution; the method is the receipt.

---

## 5. Implications for paper writing (rules of thumb, each grounded in counts)

1. **Open on a failure or anomaly, not on importance.** 53/102 (52%) of best papers open with a concrete failure mode, artifact, or measured anomaly before any method talk — the single most universal device in the corpus, equally common in CV (Imagen's artifact classes, D4RT's competitor failure modes) and ML (the pass@k crossover, NeurIPS 2025). Importance sentences alone are cheap; failure evidence is what makes the gap feel real.
2. **Name the hidden assumption and break it in one sentence.** The ML corpus's default insight is a perspective swap ("secretly a reward model", NeurIPS 2023; "the autoregressive unit is a scale", NeurIPS 2024; "publicly accessible is not privacy-neutral", ICML 2024). 25/89 ML papers carry an explicit unification/reframe move. If your insight cannot be stated as "stop treating X as A; treat it as B", the narrative is not yet found.
3. **Preempt the cheap baseline by including it, not by arguing.** The dominant reviewer defense in method papers is the *presence* of the obvious alternative as a baseline or ablation row: Preferred-FT throughout DPO (NeurIPS 2023), Proactive Base in CollabLLM (ICML 2025), the fixed-stride spectral-pooling twin in DiffStride (ICLR 2022), rejection-sampling-only in BrickGPT (ICCV 2025), consultancy-with-optimized-consultants in debate oversight (ICML 2024). Roughly a third of all anticipated attacks in the DNA files are answered this way.
4. **Bind every design element to exactly one claim with one ablation row.** The strongest papers map claims ↔ evidence one-to-one (UniAD's Table 2 rows; EDM's config ladder A→F, NeurIPS 2022; VAR's ablation placed to serve the paradigm claim, NeurIPS 2024). The corpus average is 5.1 claims on 3.2 experiment blocks — fewer, larger, claim-indexed experiments beat a pile of tables.
5. **If your contribution is a correction, quote the error precisely and predict something falsifiable.** Chinchilla quotes Kaplan's exact multipliers and pre-announces Chinchilla-as-falsification (NeurIPS 2022); the mirage paper quotes the emergence definition verbatim (NeurIPS 2023); Muennighoff et al. disqualify the only prior multi-epoch evidence for lacking a control (NeurIPS 2023). Corrections earn trust by precision about what was wrong.
6. **For systems/empirical papers, put the philosophy ablation before the leaderboard.** In both families, the papers that win on *design theses* front-load the joint ablation (UniAD's Table 2 before SOTA tables, CVPR 2023; Amos et al.'s onion structure reproducing-then-scaling, ICLR 2024) and add runtime columns to every table when speed is claimed (VGGT, CVPR 2025; D4RT, CVPR 2026). Benchmark bragging alone never carries a best paper in this corpus.
7. **For theory papers, make the introduction carry the theorem and the validation strategy.** Theory winners state the result informally on page one (Bubeck et al., NeurIPS 2021; Chen et al.'s boxed question, ICML 2026), and validate by predictive coverage of prior art or matched bounds (Geerts ICLR 2022 with zero experiments; Attias ICML 2024 pairing every lower bound with its upper bound). 22/102 papers pose the central question as an explicit (often boxed) displayed question — and 5/102 prove zero experiments are survivable only when the theorem structure itself is the evidence.
8. **Concede the strongest objection in the paper, in its own section.** 19/102 papers contain an explicit concession/negative-result passage placed where the reviewer would look (DPO's six open questions, NeurIPS 2023; DreamFusion's reverse-KL mode-seeking concession, ICLR 2023; Yue et al.'s "current RLVR" scoping, NeurIPS 2025; Sorscher et al.'s boundary-condition experiments, NeurIPS 2022), and all five position papers run dedicated steelman sections. Conceding a limitation and showing it implies a stronger property is a recurring winning move (Abbe et al. pre-conceding bias fade/correction as boundary conditions, ICML 2023).
