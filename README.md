<div align="center">

# 📖 sci-story-skill

**Turn research ideas into reviewer-defensible top-conference papers.**

A three-layer paper engineering skill — mined from **102 best papers** (NeurIPS · ICML · ICLR · CVPR · ICCV · ECCV, 2021–2026) — that plans the science before writing a single sentence.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Best Papers](https://img.shields.io/badge/Best%20Papers-102-blue.svg)](#-knowledge-base)
[![Venues](https://img.shields.io/badge/Venues-6-orange.svg)](#-knowledge-base)
[![Years](https://img.shields.io/badge/Years-2021--2026-purple.svg)](#-knowledge-base)
[![Patterns Mined](https://img.shields.io/badge/Patterns-84%2B-red.svg)](#-knowledge-base)
[![Python](https://img.shields.io/badge/Python-3.9%2B-yellow.svg)](scripts/download_corpus.py)

*Works as a [ZCode](https://zcode.ai) skill · runs fully offline on its bundled knowledge base*

</div>

---

## Why

Strong papers are not "many experiments + sophisticated method + polished English". They are a complete argument chain:

```text
Important Problem → Real Research Gap → Non-trivial Insight → Necessary Method
→ Precise Claims → Targeted Evidence → Coherent Experiments
→ Reviewer-Defensible Conclusions → Clear Technical Writing
```

**sci-story-skill optimizes this entire chain** — and repairs the most common AI-writing failure: *run experiments → observe something → invent a story → write the Introduction as if it were the original hypothesis*.

## How it works

```text
        102 BEST-PAPER CORPUS  (102 Paper DNA profiles + pattern libraries)
                    │
                    ▼
          ┌──────────────────┐   "Don't write the paper yet."
          │  L1 CORPUS MINER │    Mine how best papers build gaps,
          └────────┬─────────┘    claims, evidence and defenses.
                   ▼
          ┌──────────────────┐   Idea → Problem → Gap → Insight → Hypothesis
          │ RESEARCH         │   → Claims → Evidence → Experiment matrix.
          │ ARCHITECT        │   🔒 Story Lock: new experiments may support
          └────────┬─────────┘   the locked story — never silently rewrite it.
                   ▼
          ┌──────────────────┐   3 reviewer personas + attack matrix,
          │ REVIEWER & EDITOR│   rejection risks (R1–R7), minimum-cost fixes,
          └────────┬─────────┘   then — and only then — technical English.
                   ▼
            FINAL MANUSCRIPT
```

| Layer | Directory | Superpower |
|---|---|---|
| **1 · Corpus Miner** | [`01-corpus-miner/`](01-corpus-miner/) | Paper DNA schema + pattern libraries with hard frequencies (`X/102`) |
| **2 · Research Architect** | [`02-research-architect/`](02-research-architect/) | 🔒 Story Lock · falsification module (H vs H′ + minimal discriminating experiment) · claim–evidence map · RQ1–RQ7 experiment matrix |
| **3 · Reviewer & Editor** | [`03-reviewer-editor/`](03-reviewer-editor/) | Attack matrix (Critical → Minor) · rejection simulation · P0–P3 priority (science before English, always) |

## 🚀 Quick start

```bash
git clone https://github.com/<you>/sci-story-skill.git
ln -sfn "$(pwd)/sci-story-skill" ~/.agents/skills/sci-story-skill   # register globally
```

Then just talk to your agent — the skill triggers on any paper-related task:

| You say | You get |
|---|---|
| *"MODE B: I want to do training-free token merging guided by attention"* | 📦 RESEARCH STORY DIAGNOSIS box → falsifiable hypothesis → rival-excluding experiment → 🔒 story lock |
| *"MODE F: review this draft"* | 3 simulated reviews + attack matrix + rejection risks, calibrated to what real best papers get away with |
| *"MODE H: polish this section"* | Claim-calibrated English — wording never stronger than the evidence |

**9 modes**: `A` corpus mining · `B` research idea · `C` paper architecture · `D` claim–evidence audit · `E` experiment planning · `F` reviewer attack · `G` revision · `H` technical English · `I` final audit.

## 🧠 Knowledge base

Everything below ships **inside the repo** — no downloads needed:

| Asset | Size | Sample finding |
|---|---|---|
| 🧬 `knowledge/paper-dna/` | 102 YAML profiles | one-sentence thesis, paradigm→gap→insight chain, numbered claims/experiments, intro rhetoric sequence, pre-baked reviewer defenses |
| 📐 `knowledge/patterns/narrative-patterns.md` | 21 patterns | "hidden-assumption exposure" opens **92/102** best papers; **zero** papers rest on a single central claim (median 3–4) |
| 🎯 `knowledge/patterns/claim-patterns.md` | 16 patterns | central-claim levels: comparative 62% ≫ causal 20% · generalization 14% |
| 🔬 `knowledge/patterns/evidence-patterns.md` | 18 patterns + 40-item genre checklist | matched-baseline comparisons in **77/102**; multi-seed reporting 47/102 |
| 🧪 `knowledge/patterns/experiment-patterns.md` | 16 patterns | "experiment families ≈ claim count" (mean 3.4); rival-exclusion controls 22/102 |
| 🛡️ `knowledge/patterns/reviewer-patterns.md` | 13 patterns | proactive conceded-limitations **97/102**; even best papers carry 1–3 accepted residual risks |
| 📊 `knowledge/examples/comparative-2021-2026.md` | 1 report | CV argues by *capability coverage*, ML argues by *belief reversal*; 5 storytelling archetypes (DPO, Emergent-Mirage, Chinchilla, UniAD, ViT-Registers) |

## 📚 The corpus (optional)

The 102 PDFs (772 MB) are **gitignored** — the skill works without them. To mine *future* papers (e.g. NeurIPS 2026), fetch the corpus from the per-paper source map:

```bash
python3 scripts/download_corpus.py          # resumable, sources in knowledge/corpus-manifest.tsv
```

## Repository layout

```text
.
├── SKILL.md                  # orchestrator: system spec, Story Lock, Mode A–I routing
├── 01-corpus-miner/          # L1 · mining doctrine + library specs
├── 02-research-architect/    # L2 · diagnosis, falsification, architecture engines
├── 03-reviewer-editor/       # L3 · attack, repair, polish engines
├── knowledge/                # 🧠 102 DNA + 5 pattern libraries + comparative report
├── scripts/download_corpus.py
└── .agents/skills/sci-story-skill  # discovery symlink (repo root = skill root)
```

## Principles

> Claim Strength ≤ Evidence Strength · never convert observation into causality silently ·
> language polish always comes **after** scientific repair (no P3 while P0 is open) ·
> evidence labeled Known / Observed / Inferred / Hypothesized / Recommended ·
> never fabricate evidence, citations, or reviews · Story Lock blocks post-hoc storytelling.

## License

[MIT](LICENSE) © 2026 SaltGardenia

---

<div align="center">
<sub>If this helps your paper survive Reviewer 2, consider ⭐ the repo.</sub>
</div>
