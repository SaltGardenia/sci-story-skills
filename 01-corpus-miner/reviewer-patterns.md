# Reviewer Defense Pattern Library — mining spec

Output file: `knowledge/patterns/reviewer-patterns.md`. Mines how best papers **pre-defend** against reviewers — the attacks they anticipate and where they answer them.

## 1. What to extract per paper (into Paper DNA `reviewer_defense`)

- **Anticipated attacks**: questions the paper answers before any reviewer asks. Find them by looking for: "One might argue…", "A natural question is…", "Note that this does not…", explicit scope disclaimers, controls added purely to rule out a rival explanation, discussion of failure cases, limitations conceded proactively.
- **Pre-defense placement**: which section absorbs which attack (intro preview / setup text / ablation / discussion / limitations section).
- **Conceded limitations**: what the authors openly admit, and what they say about why it doesn't undermine the core claim — the strongest papers concede narrowly and specifically.

## 2. Attack taxonomy (master §20–21)

Severity ladder for classifying both mined attacks and live reviewer simulations:

`Critical` (invalidates a central claim) · `Major` (requires new evidence or scope reduction) · `Moderate` (weakens but survivable) · `Minor` (presentation)

Standard attack families to check every paper against:
missing baselines · weak ablations · unfair comparisons · unsupported claims · confounding variables · overclaiming · novelty ("is this just X?") · necessity ("would a simpler method do?") · generalization · mechanism-not-demonstrated · cherry-picked experiments.

## 3. Pre-defense patterns to mine

- **Rival-exclusion control**: an experiment whose only purpose is to kill an alternative explanation ("gains are not just extra parameters").
- **Scope carve-out**: explicitly stating the regime where the claim holds — placed *before* the reviewer draws a broader reading.
- **Simple-baseline conquest**: including the trivial/simple method and beating it, so the necessity attack (R3) dies early.
- **Naming the limitation before the reviewer does** (with mitigation).
- **Definitional defense**: redefining a contested term precisely (e.g., what "training-free" means) so the attack becomes a non-attack.
- **Trade-off honesty**: presenting the accuracy/cost or quality/diversity trade-off as a finding rather than hiding it.

## 4. Rejection taxonomy (master §22) — mining angle

For each corpus paper, ask: given its vulnerabilities, what is its most plausible rejection reason R1–R7, and how did the authors reduce that risk? This calibrates Layer 3's rejection simulation with real best-paper behavior (i.e., what residual risk even accepted papers carry).

## 5. Defense decision ladder (master §23)

For every major attack: (1) existing evidence answers it → point to it; (2) wording clarification answers it → re-scope the sentence; (3) new experiment needed → cheapest discriminating experiment; (4) claim too strong → weaken to match evidence; (5) claim unsupportable → remove. Record which rung best papers chose for which attack class.

## Entry format

`P00X` format (narrative-patterns.md §2) with `Placement:` = the section where the pre-defense typically lives.
