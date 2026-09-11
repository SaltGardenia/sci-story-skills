# Story Architecture — narrative blueprint, section architecture, Story Lock

Used after the diagnosis is accepted (Modes B/C). Input: confirmed Problem → Gap → Insight → Core Claim. Output: paper narrative architecture + locked story.

## 1. Narrative blueprint from corpus patterns

1. Read `knowledge/patterns/narrative-patterns.md` (if mined). Pick the gap-construction and story-shape patterns that fit this project, and record the choice with a reason ("failure-case opening fits because the limitation is concrete and demonstrable").
2. If libraries are unmined, fall back to the textbook chain (§7) and flag that the choice is un-validated by corpus evidence.
3. Choose the **narrative strategy** explicitly: what the reader must believe before seeing the method, and which paragraph delivers it. The Introduction role sequence is decided HERE, not during writing.

## 2. One-sentence chain (master §9) — restate and freeze

Six sentences (Problem / Gap / Insight / Method / Evidence / Significance) + the thesis. These become the skeleton every section must serve. If any later section cannot be traced to one of the six, the section is a candidate for cutting.

## 3. Section architecture

Produce a per-section plan (not prose):

| Section | Function | Must establish | Pattern used | Claims served |
|---|---|---|---|---|
| Abstract | §29 engine | What/Why/How/How well/Why it matters | Problem→Gap→Insight→Method→Evidence→Implication | C-core |
| 1 Intro | role sequence decided in §1 | gap real, insight non-obvious | chosen narrative patterns | C-core |
| 2 Related Work | §17 engine | position in the landscape | direction→paradigm→methods→limitation→gap→our position | novelty claims |
| 3 Method | §18 engine | necessity + principle, then formulation | Motivation→Principle→Formulation→Algorithm→Complexity→Validation | mechanistic claims |
| 4 Experiments | §13/§19 engines | claim-by-claim evidence | RQ matrix order | all claims |
| 5 Discussion/Limitations | pre-defense | conceded limitations + mitigation | reviewer-patterns.md | defensibility |

Method architecture per component: WHY → NECESSITY → PRINCIPLE → FORMULATION → IMPLEMENTATION → ASSUMPTIONS → VALIDATION. Never introduce an equation before its conceptual role is stated.

## 4. Title / Abstract / Contributions (engines §28–30)

- Title: generate 2–3 candidates across Descriptive / Problem-oriented / Insight-oriented / High-impact types; score each on accuracy, specificity, memorability, novelty signal, searchability, absence of hype; recommend one.
- Abstract: write to the six-slot structure; verify it answers What/Why/How/How well/Why it matters; no section summarization.
- Contributions: each as Contribution → Novelty → Evidence triple; engineering details are not contributions; prefer bottleneck-naming form.

## 5. STORY LOCK

Once the user confirms this architecture, write `story-lock.yaml` next to the user's project files:

```yaml
story_lock:
  created: <date>
  project: <user project name/path>
  thesis: "This paper shows that ___ because ___, and therefore proposes ___."
  chain:
    problem: <one sentence>
    gap: <one sentence>
    insight: <one sentence>
    method: <one sentence>
    evidence: <one sentence>
    significance: <one sentence>
  core_claims:
    - id: C1
      claim: <...>
      level: <comparative/mechanistic/...>
      required_evidence: <evidence class + what counts>
  narrative_strategy: <chosen gap/story patterns, one line each>
  locked_by_user: true
```

Lock semantics (master §44):
- Every future experiment must map to a locked claim's `required_evidence` or an explicitly listed attack defense.
- New experiments that create *new* explanations are flagged `POST-HOC STORY RISK` and require either an explicit re-lock (recorded with reason and date) or deletion of the new interpretation.
- The lock file travels with the project; Layer 3 reads it before every review/revision pass.

## 6. Paper reconstruction (master §24) — for existing drafts

If the input is a draft, do not polish. Run: Extract Claims → Extract Evidence → Identify Central Story → Reconstruct Gap → Reconstruct Insight → Reorganize Method → Reorganize Experiments → Rewrite Sections → Polish Language. Deliver **scientific restructuring** and **language editing** as two separate work products, clearly labeled.
