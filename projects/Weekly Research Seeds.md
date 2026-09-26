# Weekly Research Seeds

These are small starting points for research, not finished project proposals. Each can be explored with a focused literature review, a small experiment or formal model, and a short report. Students should check related work before claiming novelty, then extend a seed into a question that can support a course project.

The course's weekly topics follow the [Fields Institute outline](https://www.fields.utoronto.ca/activities/26-27/SGC-safety). Most seeds below are designed to work with small models, public datasets, or toy mathematical examples; none should require training a frontier model.

## A lightweight weekly workflow

For each seed, aim to produce:

1. A precise research question and a testable hypothesis.
2. A minimal experiment, proof, or simulation with a baseline.
3. One result that could change the initial conclusion.
4. A one-page note: setup, result, limitations, and the next experiment.

Keep the weekly exercise small. A promising result can grow into the term project by adding stronger baselines, broader conditions, or a clearer theoretical explanation.

## Week 1 — AI capability trajectories

**Seed: When do capability forecasts fail under a change of metric?**

- **Question:** How sensitive is a simple capability trend extrapolation to the evaluation metric and the time window used to fit it?
- **Small study:** Choose one public evaluation with multiple dated model results. Fit two simple trend models using different time windows, then compare their held-out predictions and uncertainty.
- **Extend it:** Test whether model ranking or apparent progress changes when the evaluation is decomposed into task types, or compare trend extrapolation with a task-completion-time forecast.
- **Deliverable:** A reproducible notebook, forecast plot, and short note listing assumptions that make the forecast fragile.

## Week 1 — AI R&D automation and feedback loops

**Seed: Which bottleneck limits an AI research feedback loop?**

- **Question:** If AI speeds up one part of research, when does that increase end-to-end research output?
- **Small study:** Build a simple pipeline model with stages such as idea selection, experiment implementation, compute, evaluation, and interpretation. Use Amdahl's law or a queueing model to vary the speedup of one stage at a time.
- **Extend it:** Add uncertain task quality, review costs, or multiple parallel agents; identify the conditions under which more automated work stops increasing useful results.
- **Deliverable:** A small simulation and a clear diagram of the assumptions behind the feedback loop.

## Week 2 — Theory of deep learning

**Seed: How do data size and regularization affect memorization versus generalization?**

- **Question:** In a small controlled task, which changes make a neural network fit randomized labels, and which affect its performance on clean held-out examples?
- **Small study:** Train a small network on a standard toy or image dataset while varying label corruption and one regularization or optimization choice. Include a simple baseline and report both train and test performance.
- **Extend it:** Compare architectures or optimizers, or study whether the transition is gradual or abrupt as model size and data size change.
- **Deliverable:** A compact experiment with a preregistered prediction and plots of train and test error.

## Week 3 — LLM training stages

**Seed: What behavior changes after preference tuning, and what capability is lost?**

- **Question:** Does a lightweight preference-tuning method improve a target behavior while preserving unrelated capabilities?
- **Small study:** Use a small open model and a public or synthetic preference dataset. Compare a base model and one tuned model on a narrowly defined target behavior and a small set of capability and refusal checks.
- **Extend it:** Compare supervised fine-tuning with DPO, vary preference strength, or test whether the change generalizes to paraphrases and out-of-distribution prompts.
- **Deliverable:** A controlled evaluation table with examples of both improvements and regressions.

## Week 4 — Jailbreaking and adversarial attacks

**Seed: Which prompt-injection defenses survive harmless changes in wording?**

- **Question:** Does a defense work because it captures an attack pattern, or only because it recognizes a few familiar phrases?
- **Small study:** Create a small, benign test set for a toy retrieval-augmented assistant. Compare a baseline with one defense across paraphrases, reordered instructions, and irrelevant quoted text.
- **Extend it:** Measure the trade-off between attack resistance and task usefulness, or test transfer to a second model or retrieval setup.
- **Deliverable:** A small evaluation set, exact test protocol, and a failure analysis. Keep tests in an isolated toy setup and avoid collecting real credentials or targeting live systems.

## Week 5 — Geometry of neural activations

**Seed: Are simple interpretable features stable across paraphrases?**

- **Question:** Does a linear probe or sparse feature identify the same concept when the input meaning stays fixed but the wording changes?
- **Small study:** Choose one narrow concept and a set of matched paraphrases. Compare a probe or SAE feature's activation across layers and paraphrases, with unrelated concepts as controls.
- **Extend it:** Test another model, compare feature directions, or check whether the representation remains stable under a small distribution shift.
- **Deliverable:** A reproducible feature-stability analysis with carefully chosen positive and negative examples.

## Week 6 — Interpretability for control and alignment

**Seed: Does activation steering change only the intended behavior?**

- **Question:** When a representation is steered toward a target behavior, which other behaviors change as a side effect?
- **Small study:** On a small model, apply one documented steering direction at several strengths. Evaluate the target behavior, a few unrelated capabilities, and refusal behavior against an unsteered baseline.
- **Extend it:** Compare steering directions or layers, test paraphrase robustness, or investigate whether a probe that detects a feature can also predict the effect of the intervention.
- **Deliverable:** A steering-strength curve and a side-effect analysis; distinguish correlation from causal evidence.

## Week 7 — Game theory of multi-agent interactions

**Seed: How robust is cooperation to a change in the opponent population?**

- **Question:** Does a cooperation strategy learned against one mix of opponents remain cooperative or safe against a different mix?
- **Small study:** Simulate repeated matrix games with a few transparent tabular strategies. Train or select a strategy against one opponent distribution, then evaluate it against held-out strategies.
- **Extend it:** Add communication, commitment, or an institutional rule and measure when it helps or creates exploitable behavior.
- **Deliverable:** A simulation, payoff tables, and an explanation of which assumptions drive the outcome.

## Week 8 — Scalable oversight

**Seed: When does an AI-assisted judge help a weaker evaluator?**

- **Question:** Can decomposition or evidence retrieval help a weak judge assess answers from a stronger model, and when does it make the judge overconfident?
- **Small study:** Build a small set of questions with verifiable answers and deliberately plausible wrong answers. Compare direct judging with one assistance method; report accuracy and calibration.
- **Extend it:** Compare debate-style critique, decomposition, and retrieval, or vary the difficulty gap between answer generator and judge.
- **Deliverable:** An evaluation protocol, calibration plot, and error taxonomy. Keep answer quality separate from judge confidence.

## Week 9 — Safety guarantees

**Seed: What does a robustness certificate guarantee that an attack test does not?**

- **Question:** On a tiny ReLU classifier, how do certified bounds compare with empirical adversarial testing?
- **Small study:** Train a small model on a toy dataset, choose a perturbation radius and property, and compare a formal certificate with a standard attack over the same input region.
- **Extend it:** Formalize the same property in TorchLean, compare two verification methods, or examine how the certificate changes with model size and input radius.
- **Deliverable:** A minimal reproducible verification example that states the model, input region, property, and trusted assumptions.

## Week 10 — Agency and decision theory

**Seed: When does an agent resist shutdown in a small decision problem?**

- **Question:** How do the agent's utility and beliefs about future opportunities affect its choice when offered a shutdown option?
- **Small study:** Define a small finite-horizon decision problem and compare optimal policies under a few explicit utility and transition assumptions.
- **Extend it:** Add uncertainty, an intervention that changes the goal, or a causal model of how the agent's action affects the shutdown decision; search for counterexamples to a proposed intuition.
- **Deliverable:** A transparent decision model, policy comparison, and a short argument about which assumptions matter.

## Weeks 11–12 — Turn a seed into a research project

Use presentation preparation to convert the weekly exercise into a complete project:

- **Week 11:** State the research question, related work, method, strongest result, and largest limitation. Ask peers to identify missing baselines or alternative explanations.
- **Week 12:** Present the revised result, include a reproducibility package, and describe one follow-up that could falsify the main claim.

## How to extend a seed

Students can deepen a seed by changing one dimension at a time: use a stronger baseline, test distribution shift, formalize the assumptions, add uncertainty estimates, or seek a counterexample. A useful project need not use a large model. It should make a clear claim that is supported by a method another student can inspect and reproduce.
