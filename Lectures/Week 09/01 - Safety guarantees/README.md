# Safety Guarantees

Planned topics include formal verification, robustness certificates, provable guarantees for neural networks, runtime monitoring, and statistical versus worst-case guarantees.

Add lecture notes, readings, and timestamped transcripts here as the course progresses.

## Further reading

- [TorchLean](https://github.com/lean-dojo/TorchLean) — a Lean 4 framework for specifying, executing, and verifying neural networks. Its verification workflows include robustness bounds and checked certificates; the result applies to the model, input region, property, and trust assumptions that are explicitly represented.
- [TorchLean: Formalizing Neural Networks in Lean](https://arxiv.org/abs/2602.22631) — the project paper, with examples in certified robustness, PINN residual bounds, and neural-controller verification.
- [Reluplex: An Efficient SMT Solver for Verifying Deep Neural Networks](https://arxiv.org/abs/1702.01135) — an early example of formal verification for neural networks.
- [AI Safety for Mathematicians](https://mathforaisafety.org/) — mathematical background and research context.
- [Fields–PrincInt postdoctoral research directions](https://www.mathjobs.org/jobs/FIELDS/PDFAI) — includes formal verification methods for AI safety.
- [Chapter 3.3: Robustness](https://www.aisafetybook.com/textbook/robustness) and [Chapter 4: Safety Engineering](https://www.aisafetybook.com/textbook/safety-engineering) — supplementary context on robustness, risk analysis, and safety engineering.

## Related case study: feature steering

- [Golden Gate Claude](https://www.anthropic.com/news/golden-gate-claude) is a useful comparison with formal verification: Anthropic amplified an interpretable feature and observed a strong change in Claude's outputs. This demonstrates an intervention, but does not prove that a model satisfies a safety property across inputs or contexts. It was a 24-hour research demo and is no longer available.
- [Evaluating feature steering: A case study in mitigating social biases](https://www.anthropic.com/research/evaluating-feature-steering) examines potential benefits and limitations of feature steering.
