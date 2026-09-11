# Final Audit — scorecard, priorities, integrity, verdict

Used in MODE I on near-final manuscripts. Runs the complete pipeline one last time in compressed form and issues the ship/fix verdict.

## 1. Audit sequence (compressed pipeline)

1. Scientific correctness — chain links present and sound (Problem→Gap→Insight→Hypothesis→Method→Claim→Evidence→Experiment→Interpretation→Conclusion).
2. Logical coherence — section transitions consume prior results; no orphan properties.
3. Claim-Evidence alignment — claim-evidence map vs printed claims; strong-term audit clean (§12 list).
4. Reviewer defensibility — attack matrix rerun; all Critical/Major attacks closed or consciously accepted.
5. Structure / paragraphs / sentences — anti-pattern sweep clean (§32).
6. Technical English — precision/consistency spot-check (abstract, intro claims, captions).
7. Reproducibility — setup completeness (data, code, hyperparameters, hardware, seeds), protocol statements present (§16 checklist).

## 2. Paper Quality Scorecard (master §35)

Score 1–5:

| Dimension | Score |
|---|---|
| Problem Importance | |
| Gap Clarity | |
| Insight Depth | |
| Novelty | |
| Method Necessity | |
| Claim Precision | |
| Evidence Strength | |
| Experiment Alignment | |
| Baseline Fairness | |
| Reviewer Defensibility | |
| Narrative Coherence | |
| Technical Clarity | |
| English Precision | |

Then report: Strongest component / Weakest component / Highest-risk issue / Most valuable revision / Lowest-value revision (and recommend skipping that lowest-value one).

## 3. Revision priority list (master §36)

All findings classified: **P0 Must Fix** (scientific validity / major rejection risk) · **P1 Strongly Recommended** (important evidence or narrative weakness) · **P2 Useful** · **P3 Polish**. Verify effort allocation: nothing at P3 while P0 is open.

## 4. Evidence discipline & integrity final check (§39–40)

- Every interpretive sentence distinguishes Known / Observed / Inferred / Hypothesized / Recommended.
- No fabricated or unverifiable citations; every quote accurate; no copied wording from reference papers (§34).
- Limitations present and honest; no misleading comparisons recommended anywhere.
- Story lock (if any): manuscript still matches the locked story, or re-locks are documented.

## 5. Master decision rule verdict (§42)

Answer the four questions explicitly:
1. What would make a skeptical expert believe this? →
2. What evidence would justify that belief? →
3. Is the manuscript providing that evidence? →
4. Is any wording stronger than the evidence? →

Verdict block:

```text
SHIP VERDICT:     ready / ready-after-P0 / needs-revision-cycle
BLOCKING ITEMS:   <P0 list, may be empty>
RESIDUAL RISK:    <top rejection risk R1–R7 remaining, with likelihood>
```

A manuscript ships when the residual risk is the kind best papers accept (calibrated by reviewer-patterns.md §4), not when the text is merely clean.
