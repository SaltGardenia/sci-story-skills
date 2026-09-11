# Experiment Design — RQ matrix, prioritization, ablation plan, post-hoc guard

Used in MODE E and after claim-evidence mapping (Modes C/D). Input: locked story + claim-evidence map. Output: experiment matrix and execution priorities.

## 1. From claims to research questions

Never design experiments to fill tables. For every claim ask: **"What experiment would convince a skeptical reviewer?"** Derive the RQ set (RQ1–RQ7 taxonomy in experiment-patterns.md) and build the matrix:

| Claim | RQ | Experiment | Baseline | Metric | Expected Evidence | Value | Cost |
|---|---|---|---|---|---|---|---|
| C1 | RQ1 | main benchmark | strongest baseline, matched budget | task metric | parity or better | Critical | high |
| C2 | RQ2 | matched-rho ablation | fixed-budget variant at equal ratio | task metric at equal ratio | gain persists → mechanism; vanishes → rival explanation wins | Critical | medium |

## 2. Prioritization (§14): Reviewer Impact / Implementation Cost

- **Critical** — without it a major claim is unsupported. Run first.
- **Strongly recommended** — defuses a likely reviewer attack (from reviewer-patterns.md attack families).
- **Useful** — completeness.
- **Optional** — presentation only. Explicitly recommend AGAINST low-value experiments even when cheap, if they add tables without claims.

Report the priority ordering to the user with an estimate of what can be cut if compute is limited — and which cut breaks which claim.

## 3. Ablation plan (§15)

Every ablation must test a hypothesis: `Hypothesis → Controlled Variable → Changed Variable → Result → Interpretation → Claim Supported`. Type it: necessity / sufficiency / mechanism / sensitivity / interaction / robustness / efficiency. Prefer ablations that **discriminate between competing explanations** (H vs H' from the falsification module) over ablations that merely list components.

## 4. Baseline fairness pre-check (§16)

Before any comparison is designed, fix the protocol: backbone, pretraining, dataset, resolution, training regime, augmentation, inference protocol, batch size, hardware, metric, computational accounting, parameter count, training cost, inference cost. The matched dimensions must be stated in the paper (setup text or caption). Flag: unfair comparison risk, missing stronger baseline, cherry-picking risk, incompatible protocol. If the strongest baseline cannot be run, say so in the plan — reviewers assume the worst when the strongest baseline is absent.

## 5. Story-lock guard for every new experiment (§44)

When the user proposes or you propose an experiment AFTER the lock:

```text
EXPERIMENT: E<id>
SERVES:     C<id> required_evidence  |  ATTACK-DEFENSE: <attack id>  |  NONE
VERDICT:    IN-STORY  |  POST-HOC STORY RISK
```

- `IN-STORY`: verifies the locked hypothesis or defends a mapped attack → proceed.
- `POST-HOC STORY RISK`: it creates a new explanation after the fact. Options: (a) drop the new interpretation; (b) explicitly revise the story with the user and re-lock (`relock:` entry with date + reason). Never fold a new story silently into the draft.

## 6. Deliverable

The experiment plan ends with a mapping check: every locked claim has ≥1 Critical experiment; every Critical experiment supports a locked claim. Experiments supporting nothing get cut; claims supported by nothing get weakened or marked as future work.
