# Paper DNA — schema and extraction guide

One YAML file per paper in `knowledge/paper-dna/`. Naming: `<VENUE><YEAR>-<firstauthor>-<slug>.yaml`.

## Schema (master §5)

```yaml
paper:
  venue:          # NeurIPS | ICML | ICLR | CVPR | ICCV | ECCV
  year:
  field:          # e.g. generative models / LLM alignment / 3D vision
  task:
  problem:        # the exact problem addressed — in the authors' terms, quoted or tightly paraphrased
  importance:     # why the community should care — as argued by the paper, not by you
  source:         # abstract | intro | full | partial
  inferred: [ ]   # list of fields below that are your inference, not the paper's statement

paradigm:
  existing_approach:   # how the field currently solves it
  core_assumption:     # the hidden or explicit assumption prior work rests on
  limitation:          # the specific bottleneck / failure mode that remains

gap:
  unresolved_problem:  # what exactly remains open
  evidence_for_gap:    # how the paper justifies the gap (empirical? logical? citation pattern?)

insight:
  observation:         # the empirical or theoretical observation that motivates the work
  central_insight:     # the conceptual realization — one sentence
  hypothesis:          # what follows if the insight is correct

method:
  conceptual_change:   # what has to be seen differently for this method to make sense
  mechanism:           # the mechanism that operationalizes the hypothesis
  formulation:         # key formal object(s), in words + the main equation if central

claims:
  - id: C1             # C1, C2, ... keep stable across the corpus
    claim:             # verbatim-calibrated claim, with its strength (descriptive/comparative/...)
    importance:        # central | supporting | peripheral
    evidence:          # evidence type + where (table/figure/theorem)

experiments:
  - id: E1
    research_question: # which RQ (RQ1–RQ7, see experiment-patterns.md) or the paper's own framing
    setup:
    baseline:
    result:
    interpretation:
    supported_claim:   # C-id

narrative:
  introduction_roles:  # e.g. [Context, Existing success, Failure mode, Gap, Insight, Solution, Contribution]
  introduction_move:   # 2–4 sentences: how the intro actually argues, not what it contains
  related_work_strategy:   # landscape map? chronological? contrast-based?
  method_strategy:         # motivation-first? principle-first? formulation-first?
  experiments_strategy:    # which RQ order, how ablations are woven in
  conclusion_strategy:

reviewer_defense:
  strengths:           # what makes this paper hard to attack
  vulnerabilities:     # real weak spots a reviewer could hit
  anticipated_attacks: # attacks the authors preempt, and where (quote + locator)

writing:
  paragraph_patterns:  # notable recurring paragraph architectures in THIS paper
  transition_patterns: # how sections/paragraphs are connected
  terminology_patterns:# naming discipline, notation choices worth imitating
```

## Extraction procedure

1. **Locate, don't guess.** Every non-obvious field needs a locator: `§1 para 3`, `Fig. 2`, `Table 4`, `§5.2`.
2. **Distinguish voices.** `importance` is the paper's argument, not your assessment — your assessment belongs in `reviewer_defense.vulnerabilities` or a separate note.
3. **The insight field is the hardest.** Test: would a reader who only read the intro's insight sentence be able to predict the method's shape? If not, you have captured a summary, not an insight.
4. **Claims are what the paper commits to.** Use the paper's own wording for `claim`, then tag the strength level. Do not strengthen or soften silently.
5. **One-sentence thesis** (master §9) goes at the top as a comment: `# thesis: This paper shows that ___ because ___, and therefore proposes ___.` If you cannot fill it, the DNA is incomplete — note which link of the chain is missing.
6. If the full text is unavailable, fill from abstract+intro and set `paper.source` accordingly; do not guess method internals.

## Worked example (compact)

```yaml
# thesis: This paper shows that LLM alignment can be done by directly optimizing the
# policy against a preference model without a separate reward-model training phase,
# because the reward model is implicitly the language model itself, and therefore
# proposes Direct Preference Optimization (DPO).
paper:
  venue: NeurIPS
  year: 2023
  field: LLM alignment
  task: preference alignment of LLMs
  problem: aligning LLMs with human preferences efficiently and stably
  importance: RLHF is the standard but is complex, unstable, and sample-hungry (§1)
  source: full
paradigm:
  existing_approach: RLHF — fit a reward model, then RL (PPO) against it (§1, §2)
  core_assumption: preference optimization must be cast as reinforcement learning
  limitation: RL phase is complex, unstable, hyperparameter-sensitive (§1)
gap:
  unresolved_problem: can preference learning be done without the RL loop at all?
  evidence_for_gap: analytical derivation showing a closed-form reparameterization exists (§4)
insight:
  observation: the RLHF objective with a KL constraint has a closed-form optimal policy
  central_insight: the reward function can be reparameterized in terms of the optimal policy, so the reward model and the policy are the same object (§4)
  hypothesis: substituting the reparameterization yields a simple classification loss on preferences that matches RLHF quality
method:
  conceptual_change: stop treating reward and policy as separate trainable objects
  mechanism: DPO loss — maximum-likelihood classification on preference pairs (§4, Eq. 7)
  formulation: negative log-sigmoid of the log-ratio difference between policy and reference on chosen vs rejected responses
claims:
  - id: C1
    claim: DPO matches or exceeds RLHF quality on standard benchmarks
    importance: central
    evidence: comparative — Tables 1–2
  - id: C2
    claim: DPO is simpler, more stable, and cheaper than PPO-based RLHF
    importance: central
    evidence: comparative + efficiency accounting (§5, Table 3)
experiments:
  - id: E1
    research_question: RQ1 — does DPO improve the primary objective?
    setup: controlled preference-learning benchmarks (§5.1)
    baseline: PPO-based RLHF under matched budgets
    result: equal or better win rates
    interpretation: the reparameterization loses nothing in practice
    supported_claim: C1
narrative:
  introduction_roles: [Context, Existing paradigm, Limitation, Gap, Insight preview, Solution, Contribution]
  introduction_move: establish RLHF as the paradigm, attack its complexity (not its quality), then promise simplicity at no cost — the gap is engineering pain, the insight is mathematical identity
  related_work_strategy: two-line landscape (RLHF vs preference learning) each ending in the limitation DPO removes
  method_strategy: derivation-first — the insight is a theorem, the algorithm is a corollary
  experiments_strategy: quality parity first (RQ1), then simplicity/efficiency as the differentiator (RQ5)
  conclusion_strategy: restate the identity insight, generalize beyond LLMs
reviewer_defense:
  strengths: derivation is self-contained; parity claims are backed by matched comparisons
  vulnerabilities: evaluation breadth relative to RLHF literature
  anticipated_attacks: "is DPO just a special case?" — answered by deriving the general objective first (§4)
writing:
  paragraph_patterns: intro paragraphs each end by setting up the next question
  transition_patterns: "having established X, we now ask Y"
  terminology_patterns: one name (DPO) used without abbreviation drift; "reference policy" fixed throughout
```
