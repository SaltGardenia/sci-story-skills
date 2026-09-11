# sci-story-skill

**三层科研论文工程系统**：从顶会最佳论文中挖掘科研叙事规律 → 用规律重构研究设计与论文架构 → 站在 reviewer 角度攻击、验证与精修。内置 102 篇最佳论文语料及其完整知识库，开箱即用。

> 核心理念：一篇强论文不是"多实验 + 复杂方法 + 好英文"，而是一条完整的论证链
>
> ```text
> Important Problem → Real Research Gap → Non-trivial Insight → Necessary Method
> → Precise Claims → Targeted Evidence → Coherent Experiments
> → Reviewer-Defensible Conclusions → Clear Technical Writing
> ```

---

## 仓库结构

仓库根目录即 skill 本体（已注册为全局 skill：`~/.agents/skills/sci-story-skill` → 本仓库）：

```text
.
├── SKILL.md                # 总入口 / Orchestrator（系统规范 §0–§45 + Story Lock + Mode 路由）
├── 01-corpus-miner/        # 第一层：语料挖掘（Paper DNA + 五大模式库）
├── 02-research-architect/  # 第二层：研究架构（idea → 故症诊断 → Story Lock → 实验/论文架构）
├── 03-reviewer-editor/     # 第三层：审稿与编辑（攻击 → 修复 → 段落 → 技术英语 → 终审）
├── knowledge/              # 知识库（见下）
│   ├── corpus/             # → 符号链接到 ../best-papers-2021-2026（102 篇 PDF，gitignore 不入库）
│   ├── corpus-manifest.tsv # 102 篇论文清单 + 每篇的下载来源 URL（随 git 分发）
│   ├── paper-dna/          # 102 份论文 DNA（YAML）
│   ├── patterns/           # 五大模式库（带 X/102 频次统计）
│   └── examples/           # 跨库比较报告
├── scripts/
│   └── download_corpus.py  # 一键重下 102 篇 PDF（可断点续传，按 manifest 来源）
├── best-papers-2021-2026/  # 102 篇最佳论文 PDF + README 索引（已 gitignore，仅本地）
└── README.md               # 本文件
```

> **论文 PDF 不入库，但不影响 skill 使用**：Layer 2/3（idea 分析、实验规划、审稿、润色）只依赖已入库的 `knowledge/paper-dna/`、`patterns/`、`examples/`。只有 MODE A 给"库外新论文"提取 DNA 时才需要 PDF——克隆后运行 `python3 scripts/download_corpus.py` 即可按 manifest 里的来源（arXiv/CVF/官方 proceedings，共 102 条）重新下载全部语料，或将 `knowledge/corpus` 符号链接指向你本地的 PDF 目录。

## 三层架构

| 层 | 目录 | 职责 | 关键机制 |
|---|---|---|---|
| **Layer 1 — Corpus Miner** | `01-corpus-miner/` | 从最佳论文中提炼科研叙事规律，不做内容总结 | Paper DNA schema（`paper-dna.md`）、P00X 模式条目（必须带 `X/N` 频次与 ≥2 个实例论文） |
| **Layer 2 — Research Architect** | `02-research-architect/` | 把 idea / 实验结果 / 草稿重构成科学故事 | **RESEARCH STORY DIAGNOSIS 框**（默认禁止直接写论文）、可证伪模块（H vs H′ + 最小判别实验）、**Story Lock**（故事锁定，杜绝 post-hoc storytelling） |
| **Layer 3 — Reviewer & Editor** | `03-reviewer-editor/` | Reviewer 攻击 + 科学修复 + 技术英语 | 固定八级顺序（科学正确性 → … → 技术英语）、三审稿人人格 + 攻击矩阵、R1–R7 拒稿风险、P0–P3 修复优先级 |

工作模式（自动路由）：**A** 语料挖掘 · **B** 研究想法 · **C** 论文架构 · **D** Claim-Evidence 审计 · **E** 实验规划 · **F** 审稿攻击 · **G** 修回 · **H** 技术英语 · **I** 终审。

## 知识库（已备好，开箱即用）

- **Paper DNA × 102**：每篇一个 YAML（thesis 单句、paradigm/gap/insight/method、带编号的 claims/experiments、Introduction 修辞角色序列、审稿防御、写作模式，全部带原文定位符）。覆盖 NeurIPS 2021–2025（41）、ICML 2023–2026（27）、ICLR 2022–2026（21）、CVPR 2022–2026（7）、ICCV 2021/23/25（4）、ECCV 2022/24（2），含官方 runner-up 与 Datasets & Benchmarks 赛道最佳。
- **五大模式库**（`knowledge/patterns/`，每条模式带 `X/102` 频次与实例论文）：
  - `narrative-patterns.md`（21 条）：隐藏假设暴露 92/102、Claim-Family 框架 94/102——没有一篇最佳论文只有单一核心主张（中位数 3–4 条）
  - `claim-patterns.md`（16 条）：中心主张层级分布 = 比较 62% > 理论 42% > 描述 30% > 实用 24% > 机制 21% > 因果 20% > 泛化 14%
  - `evidence-patterns.md`（18 条 + 40 项类型化学科证据清单）：最强基线匹配比较 77/102、留一消融 44/102、多种子报告 47/102
  - `experiment-patterns.md`（16 条）："实验族 ≈ 主张数"（均值 3.4）；区分竞争性解释的判别性对照 22/102
  - `reviewer-patterns.md`（13 条）：主动让步式 limitations 97/102；最佳论文平均仍带 1–3 类可接受的残余弱点（Layer 3 的风险标尺）
- **跨库比较报告**（`knowledge/examples/comparative-2021-2026.md`）：CV 靠能力覆盖讲故事、ML 靠信念反转讲故事；失败/反常开场是全场通用 gap 手段（52%）；五大叙事原型（DPO、Emergent-Mirage、Chinchilla、UniAD、ViT-Registers）。

## 使用

skill 已注册为全局 skill（`~/.agents/skills/sci-story-skill` → 本仓库），任何目录下均可触发。典型用法：

- **"用 MODE B 分析我的 idea：……"** → 输出 RESEARCH STORY DIAGNOSIS 框 + 可证伪分析 + 故事锁定（不会直接开始写论文）
- **"用 MODE F 审这篇稿子"** → 三审稿人报告 + 攻击矩阵（Critical 项解决前不做语言润色）
- **"运行 MODE A"** → 增量挖掘新论文（例如未来的 NeurIPS 2026），扩展 DNA 库与模式库

维护：新增论文放入 `best-papers-2021-2026/` 并更新其索引，然后运行 MODE A 的增量流水线即可；`paper-dna/` 与 `patterns/` 支持追加式更新。

## 原则（Skill 硬约束）

Claim Strength ≤ Evidence Strength；Never silently convert observation into causality；语言润色永远排在科学修复之后（P0 不清零不做 P3）；证据五级标注 Known / Observed / Inferred / Hypothesized / Recommended；不伪造证据、引用、审稿意见与结果；Story Lock 之内的新实验不得默默改写故事。
