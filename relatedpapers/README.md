# Related Safety Papers

An annotated reading list of papers related to the course topics. These are links to the papers and preprints; add reading notes or project ideas alongside this index as the course progresses.

## Capabilities and scaling

- [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) — studies empirical scaling relationships between model size, data, compute, and language-model loss.
- [Training Compute-Optimal Large Language Models (Chinchilla)](https://arxiv.org/abs/2203.15556) — shows that compute-optimal language-model training requires scaling training tokens along with model size. Discussed alongside Kaplan et al. in Lectures 02 and 03.
- [Forecasting time to automated superhuman coders (AI 2027 Timelines Forecast)](https://ai-2027.com/research/timelines-forecast) — April 2025 forecast of timelines for superhuman AI coders, including the 30-times-as-many, 30-times-faster researcher milestone discussed in Lecture 01 around 1:08.
- [Takeoff Forecast (AI 2027)](https://ai-2027.com/research/takeoff-forecast) — companion April 2025 forecast discussed in Lecture 01's discussion of AI research speedups.
- [ExploitGym: Can AI Agents Turn Security Vulnerabilities into Real Attacks?](https://arxiv.org/abs/2605.11086) — the benchmark paper apparently referenced in Lecture 01 around 27:28 when discussing scoring and flag validation. The caption does not name the paper; identification is based on the incident and benchmark context, so verify against the recording.

## Generalization and learning theory

- [Understanding Deep Learning Requires Rethinking Generalization](https://arxiv.org/abs/1611.03530) — Zhang et al. (2017); demonstrates that neural networks can fit randomized labels, challenging classical intuitions about generalization. Discussed in Lecture 03 around 1:03:38.
- [Deep Learning is Not So Mysterious or Different](https://arxiv.org/abs/2503.02113) — Andrew Gordon Wilson (2025); develops an account of deep learning in terms of soft inductive biases. This appears to be the “soft inductive bias” reading mentioned near the end of Lecture 03.

## AI risk and development trajectories

- [Gradual Disempowerment: Systemic Existential Risks from Incremental AI Development](https://arxiv.org/abs/2501.16946) — Jan Kulveit, Raymond Douglas, Nora Ammann, Deger Turan, David Krueger, and David Duvenaud (2025); analyzes how competitive pressures during incremental AI development could reduce human influence. Mentioned in Lecture 01 around 56:03 and shown on the slide in the provided screenshot.

## References needing identification

- Lecture 03 around 41:35 describes a recent paper measuring the neural tangent kernel spectrum during training and tracking learned eigenfunctions. The auto-caption does not preserve the title or authors, and I could not identify it confidently; add once the slide or recording reference is checked.

## Representations and interpretability

- [Sky sphere representation in language models](https://arxiv.org/abs/2607.27092) — Yevgeny Liokumovich and A. Berdnikov (2026 preprint); geometric representations in language models.
- [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/index.html) — studies how neural networks represent more features than they have dimensions.
- [Towards Monosemanticity: Decomposing Language Models With Dictionary Learning](https://transformer-circuits.pub/2023/monosemantic-features/index.html) — sparse feature decomposition in language models.
- [A Mathematical Framework for Transformer Circuits](https://transformer-circuits.pub/2021/framework/index.html) — foundations for mechanistic interpretability.
- [Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) — large-scale feature extraction and analysis.
- [Golden Gate Claude](https://www.anthropic.com/news/golden-gate-claude) — Anthropic's 24-hour research demo of steering Claude 3 Sonnet by amplifying an interpretable Golden Gate Bridge feature; a control example, not a formal safety proof.
- [Evaluating feature steering: A case study in mitigating social biases](https://www.anthropic.com/research/evaluating-feature-steering) — evaluates potential benefits and limitations of steering features in Claude 3 Sonnet.

## Multi-agent interaction

- [Cooperative and uncooperative institution designs: Surprises and problems in open-source game theory](https://arxiv.org/abs/2208.07006) — Andrew Critch, Michael Dennis, and Stuart Russell; studies strategic interaction when agents can inspect one another's programs.

## Scalable oversight

- [Measuring Progress on Scalable Oversight for Large Language Models](https://arxiv.org/abs/2211.03540) — proposes empirical ways to study human supervision with model assistance.
- [AI Safety via Debate](https://www.alignmentforum.org/posts/Br4xDbYu4Frwrb64a/writeup-progress-on-ai-safety-via-debate-1) — introduces debate as a method for eliciting supervision signals.
- [Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision](https://arxiv.org/abs/2312.09390) — studies supervision of stronger models using weaker supervisors.

## Safety guarantees

- [TorchLean: Formalizing Neural Networks in Lean](https://arxiv.org/abs/2602.22631) — a Lean 4 framework for neural-network specification, execution, and verification; demonstrated on certified robustness, PINN residual bounds, and neural-controller verification. See the [TorchLean project](https://github.com/lean-dojo/TorchLean) and its [verification overview](https://torchlean.org/docs/verification/overview) for implementation details and trust boundaries.
- [Reluplex: An Efficient SMT Solver for Verifying Deep Neural Networks](https://arxiv.org/abs/1702.01135) — an early example of formal verification for neural networks.

## Agency and decision theory

- [Quantifying stability of non-power-seeking in artificial agents](https://arxiv.org/abs/2401.03529) — Evan Ryan Gunter, Yevgeny Liokumovich, and Victoria Krakovna (2024 preprint); studies when non-shutdown-avoiding behavior remains stable under changes in an environment.
- [The Off-Switch Game](https://arxiv.org/abs/1510.08187) — a decision-theoretic model of corrigibility and shutdown incentives.
