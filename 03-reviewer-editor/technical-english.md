# Technical English Engine — precision, concision, consistency, transitions

Used in MODE H, and last in every pipeline (master §27). **Precondition: scientific logic is stable.** If P0 issues remain open, stop and say so.

## 1. Precision

Replace vague with precise:

| Vague | Prefer |
|---|---|
| helps / improves things / makes better | increases X / reduces Y / improves Z on metric M |
| is useful | enables X / supports Y |
| shows | demonstrates (strong evidence) / indicates / suggests (weaker) |
| is related to | correlates with (measured) / is consistent with (interpretation) |

Verb strength must match evidence class: `demonstrates` > `shows` > `indicates` > `suggests` > `is consistent with`. Check every claims-bearing sentence against the claim-evidence map — wording may not exceed evidence (§42).

Never silently convert: observation → interpretation → causal claim. "Accuracy drops as merging becomes aggressive" stays an observation until a mechanism experiment exists; the causal version must be reworded or the experiment scheduled.

## 2. Concision

Delete on sight: `it is worth noting that` · `in order to` → to · `due to the fact that` → because · `it can be observed that` → (delete; state the observation) · `it should be noted` · `the reason is because` · nested hedging stacks ("may possibly perhaps").

## 3. Terminology consistency

Maintain one form for: method name (no synonym drift), variables/notation (defined once, used identically), abbreviations (expanded at first use, then abbreviation only), dataset names, metric names, task terminology. Sweep for drift (e.g., "our method" / "Z-Merge" / "the proposed approach" all referring to the same thing — pick the paper's convention and apply it everywhere; captions follow the same rule).

## 4. Logical transitions

Add a transition only when there is a real logical relation to mark (concession, contrast, consequence, escalation). Never add transitions to "sound academic". If a paragraph needs a heavy transition to make sense, the problem is usually the paragraph order (route back to paragraph-editing.md), not the sentence.

## 5. Sentence-level execution order

Within a paragraph edit: fix claim wording first (evidence-calibrated), then logic connectors, then precision/consistency, then concision, then grammar. Never improve the English of a sentence whose claim is about to be weakened or deleted.

## 6. Deliverable format

Two-layer output: (1) the revised text; (2) an edit log grouped by engine rule (precision / concision / consistency / transitions / grammar) with before→after for non-obvious changes, so the user can audit that no meaning shifted. Meaning-preserving is the contract: if an edit changes the claim's scope, it is a scientific edit and must be surfaced separately (§24).
