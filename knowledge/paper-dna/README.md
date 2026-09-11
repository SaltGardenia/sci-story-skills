# knowledge/paper-dna/ — Paper DNA database

Layer 1 (MODE A, Stage 2) writes one YAML file per analyzed paper here.

- Naming: `<VENUE><YEAR>-<firstauthor>-<slug>.yaml` (slug ≤ 5 words, kebab-case), e.g. `NeurIPS2023-rafailov-direct-preference-optimization.yaml`.
- Schema and extraction rules: `../../01-corpus-miner/paper-dna.md`.
- Every field needs a locator (section/paragraph/table) or an explicit `inferred` marker.
- First line of each file: `# thesis: ...` (the one-sentence central story, master §9).

Downstream consumers: Layer 1 Stage 3 (pattern mining) and Layer 2 (narrative strategy selection).
