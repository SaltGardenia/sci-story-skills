// Bilingual content for the showcase page.
export const content = {
  zh: {
    htmlLang: 'zh-CN',
    nav: {
      architecture: '架构',
      modes: '模式',
      knowledge: '知识库',
      quickstart: '快速上手',
      github: 'GitHub',
    },
    hero: {
      badge: '基于 102 篇最佳论文 · 2021–2026',
      title: '把研究想法，写成经得起审稿的顶会论文',
      subtitle:
        'sci-story-skill 是一个三层论文工程系统——先规划科学，再落笔成文。它修复 AI 写作最常见的失败：先跑实验、看到现象、再编故事，然后把引言写得像一开始就有的假设。',
      ctaPrimary: '查看快速上手',
      ctaSecondary: 'GitHub 仓库',
      chainLabel: '强论文不是「实验多 + 方法复杂 + 英语漂亮」，而是一条完整的论证链：',
      chain: [
        '重要问题', '真实空白', '非平凡洞见', '必要方法',
        '精确主张', '对位证据', '连贯实验', '可辩护结论', '清晰写作',
      ],
    },
    layers: {
      title: '三层架构',
      subtitle: '从语料中挖掘规律，用它规划科学故事，再以审稿人视角攻击与修复。',
      items: [
        {
          id: 'L1',
          name: '语料挖掘器',
          dir: '01-corpus-miner/',
          desc: '从最佳论文中提取底层科学论证——绝不总结成「问题/方法/结果」。产出 Paper DNA 与叙事、主张、证据、实验、审稿防御、技术写作六大模式库，并附硬性频次（X/102）。',
          tag: 'Paper DNA · 模式库',
        },
        {
          id: 'L2',
          name: '研究架构师',
          dir: '02-research-architect/',
          desc: '先不写论文。把想法转化为 问题 → 空白 → 洞见 → 假设 → 主张 → 证据 → 实验矩阵 的完整链条，配合证伪模块与对手排除实验。',
          tag: '🔒 Story Lock · 证伪 · 实验矩阵',
        },
        {
          id: 'L3',
          name: '审稿人 & 编辑',
          dir: '03-reviewer-editor/',
          desc: '三位审稿人人设 + 攻击矩阵（Critical → Minor）+ 拒稿风险模拟（R1–R7）+ 最小代价修复。科学修复之后——且仅之后——才做英语润色。',
          tag: '攻击矩阵 · P0–P3 优先级',
        },
      ],
      lock: {
        title: '🔒 Story Lock：故事锁定机制',
        body: '一旦「问题 → 空白 → 洞见 → 核心主张」确定并锁定，后续新增实验必须回答：它验证的是锁定的假设，还是事后新编的解释？后者会被标记为 POST-HOC STORY RISK——实验可以支持或攻击故事，但永远不能悄悄改写它。',
      },
    },
    modes: {
      title: '九种工作模式',
      subtitle: '对 skill 说一句话即可触发，每个模式对应一层能力。',
      items: [
        { id: 'A', name: '语料挖掘', desc: '最佳论文 → Paper DNA + 模式库' },
        { id: 'B', name: '研究想法', desc: '想法 → 可证伪假设 + 对位实验' },
        { id: 'C', name: '论文架构', desc: '研究 + 结果 → 完整叙事结构' },
        { id: 'D', name: '主张-证据审计', desc: '草稿 → 主张-证据矩阵' },
        { id: 'E', name: '实验规划', desc: '方法 + 主张 → RQ1–RQ7 矩阵' },
        { id: 'F', name: '审稿攻击', desc: '论文 → 3 份审稿 + 拒稿风险' },
        { id: 'G', name: '科学修改', desc: '审稿意见 → 证据感知的修改计划' },
        { id: 'H', name: '技术英语', desc: '定稿 → 措辞永不超过证据' },
        { id: 'I', name: '终审审计', desc: '近终稿 → 科学+逻辑+语言全面审计' },
      ],
    },
    knowledge: {
      title: '离线知识库',
      subtitle: '全部资产随仓库分发，无需下载即可运行。',
      stats: [
        { value: '102', label: '最佳论文 DNA' },
        { value: '6', label: '顶级会议' },
        { value: '84+', label: '已挖掘模式' },
        { value: '2021–26', label: '时间跨度' },
      ],
      libraries: [
        { name: '📐 叙事模式库', size: '21 条', finding: '「隐藏假设暴露」式开篇出现在 92/102 篇最佳论文；没有一篇只依赖单一核心主张（中位数 3–4 个）。' },
        { name: '🎯 主张模式库', size: '16 条', finding: '核心主张层级：比较型 62% ≫ 因果型 20% · 推广型 14%。' },
        { name: '🔬 证据模式库', size: '18 条 + 40 项清单', finding: '77/102 使用对位基线比较；仅 47/102 报告多种子。' },
        { name: '🧪 实验模式库', size: '16 条', finding: '「实验族数 ≈ 主张数」（均值 3.4）；对手排除对照仅 22/102。' },
        { name: '🛡️ 审稿防御库', size: '13 条', finding: '主动坦承局限 97/102；即便是最佳论文也带着 1–3 个可接受的残余风险。' },
      ],
    },
    principles: {
      title: '核心原则',
      items: [
        '主张强度 ≤ 证据强度',
        '绝不悄悄把观察改成因果',
        '科学修复永远先于语言润色（P0 未清，不做 P3）',
        '证据必须标注：已知 / 观测 / 推断 / 假设 / 建议',
        '绝不伪造证据、引用或审稿意见',
      ],
    },
    quickstart: {
      title: '快速上手',
      step1: '克隆并链接到 skill 目录',
      step2: '直接和你的 Agent 对话，skill 会在任何论文相关任务上自动触发',
      examples: [
        { say: '「MODE B：我想做注意力引导的免训练 token 合并」', get: '研究故事诊断 → 可证伪假设 → 对手排除实验 → 🔒 故事锁定' },
        { say: '「MODE F：帮我审一下这篇草稿」', get: '3 份模拟审稿 + 攻击矩阵 + 拒稿风险，以真实最佳论文的标准校准' },
        { say: '「MODE H：润色这一节」', get: '按主张校准的英语——措辞永不超过证据' },
      ],
      copied: '已复制',
      copy: '复制',
    },
    footer: {
      line: '如果它帮你的论文挺过了 Reviewer 2，欢迎点亮 Star ⭐',
      license: 'MIT License · © 2026 SaltGardenia',
    },
  },

  en: {
    htmlLang: 'en',
    nav: {
      architecture: 'Architecture',
      modes: 'Modes',
      knowledge: 'Knowledge',
      quickstart: 'Quick Start',
      github: 'GitHub',
    },
    hero: {
      badge: 'Mined from 102 best papers · 2021–2026',
      title: 'Turn research ideas into reviewer-defensible papers',
      subtitle:
        'sci-story-skill is a three-layer paper engineering system — it plans the science before writing a single sentence. It repairs the most common AI-writing failure: run experiments, observe something, invent a story, then write the Introduction as if it were the original hypothesis.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'GitHub repo',
      chainLabel: 'Strong papers are not “many experiments + a clever method + polished English” — they are one complete argument chain:',
      chain: [
        'Important problem', 'Real gap', 'Non-trivial insight', 'Necessary method',
        'Precise claims', 'Targeted evidence', 'Coherent experiments', 'Defensible conclusions', 'Clear writing',
      ],
    },
    layers: {
      title: 'Three-Layer Architecture',
      subtitle: 'Mine patterns from the corpus, use them to plan the science, then attack and repair it like a reviewer.',
      items: [
        {
          id: 'L1',
          name: 'Corpus Miner',
          dir: '01-corpus-miner/',
          desc: 'Extracts the underlying scientific argument of best papers — never a problem/method/result summary. Produces Paper DNA plus six pattern libraries (narrative, claim, evidence, experiment, reviewer-defense, writing) with hard frequencies (X/102).',
          tag: 'Paper DNA · Pattern libraries',
        },
        {
          id: 'L2',
          name: 'Research Architect',
          dir: '02-research-architect/',
          desc: 'Does not draft the paper yet. Turns an idea into a complete chain — problem → gap → insight → hypothesis → claims → evidence → experiment matrix — with a falsification module and rival-excluding experiments.',
          tag: '🔒 Story Lock · Falsification · Experiment matrix',
        },
        {
          id: 'L3',
          name: 'Reviewer & Editor',
          dir: '03-reviewer-editor/',
          desc: 'Three reviewer personas + an attack matrix (Critical → Minor) + rejection simulation (R1–R7) + minimum-cost fixes. Science is repaired first — and only then — does technical English get polished.',
          tag: 'Attack matrix · P0–P3 priority',
        },
      ],
      lock: {
        title: '🔒 Story Lock',
        body: 'Once “problem → gap → insight → core claim” are agreed and locked, every new experiment must answer: does it verify the locked hypothesis, or is it a story invented after the fact? The latter is flagged POST-HOC STORY RISK — experiments may support or attack the story, never silently rewrite it.',
      },
    },
    modes: {
      title: 'Nine Working Modes',
      subtitle: 'Just talk to your agent — one phrase per mode triggers the matching layer.',
      items: [
        { id: 'A', name: 'Corpus Mining', desc: 'Best papers → Paper DNA + pattern libraries' },
        { id: 'B', name: 'Research Idea', desc: 'Idea → falsifiable hypothesis + rival-excluding experiment' },
        { id: 'C', name: 'Paper Architecture', desc: 'Research + results → complete narrative structure' },
        { id: 'D', name: 'Claim–Evidence Audit', desc: 'Draft → claim–evidence matrix' },
        { id: 'E', name: 'Experiment Planning', desc: 'Method + claims → RQ1–RQ7 matrix' },
        { id: 'F', name: 'Reviewer Attack', desc: 'Paper → 3 reviews + rejection risks' },
        { id: 'G', name: 'Scientific Revision', desc: 'Reviews → evidence-aware revision plan' },
        { id: 'H', name: 'Technical English', desc: 'Stable draft → wording never stronger than evidence' },
        { id: 'I', name: 'Final Audit', desc: 'Near-final → science + logic + language audit' },
      ],
    },
    knowledge: {
      title: 'Offline Knowledge Base',
      subtitle: 'Everything ships inside the repo — the skill runs with no downloads.',
      stats: [
        { value: '102', label: 'Paper DNA profiles' },
        { value: '6', label: 'Top venues' },
        { value: '84+', label: 'Mined patterns' },
        { value: '2021–26', label: 'Year span' },
      ],
      libraries: [
        { name: '📐 Narrative patterns', size: '21 entries', finding: '“Hidden-assumption exposure” opens 92/102 best papers; zero papers rest on a single central claim (median 3–4).' },
        { name: '🎯 Claim patterns', size: '16 entries', finding: 'Central-claim levels: comparative 62% ≫ causal 20% · generalization 14%.' },
        { name: '🔬 Evidence patterns', size: '18 + 40-item checklist', finding: 'Matched-baseline comparisons in 77/102; multi-seed reporting in only 47/102.' },
        { name: '🧪 Experiment patterns', size: '16 entries', finding: '“Experiment families ≈ claim count” (mean 3.4); rival-exclusion controls in 22/102.' },
        { name: '🛡️ Reviewer-defense patterns', size: '13 entries', finding: 'Proactive conceded limitations in 97/102; even best papers carry 1–3 accepted residual risks.' },
      ],
    },
    principles: {
      title: 'Core Principles',
      items: [
        'Claim strength ≤ evidence strength',
        'Never silently convert observation into causality',
        'Science is repaired before language — no P3 while P0 is open',
        'Evidence is labeled Known / Observed / Inferred / Hypothesized / Recommended',
        'Never fabricate evidence, citations, or reviews',
      ],
    },
    quickstart: {
      title: 'Quick Start',
      step1: 'Clone and link the skill into your skills directory',
      step2: 'Then just talk to your agent — the skill triggers on any paper-related task',
      examples: [
        { say: '“MODE B: I want training-free token merging guided by attention”', get: 'Research-story diagnosis → falsifiable hypothesis → rival-excluding experiment → 🔒 story lock' },
        { say: '“MODE F: review this draft”', get: '3 simulated reviews + attack matrix + rejection risks, calibrated to what real best papers get away with' },
        { say: '“MODE H: polish this section”', get: 'Claim-calibrated English — wording never stronger than the evidence' },
      ],
      copied: 'Copied',
      copy: 'Copy',
    },
    footer: {
      line: 'If this helps your paper survive Reviewer 2, consider starring the repo ⭐',
      license: 'MIT License · © 2026 SaltGardenia',
    },
  },
}
