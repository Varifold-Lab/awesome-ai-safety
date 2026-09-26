# How Neural Networks Learn

*A readable companion to [Lecture 03](https://www.youtube.com/watch?v=q_Dj4-QNJV8). The source is YouTube's English auto-translation of automatically generated Arabic captions. This article smooths the prose but cannot repair technical errors in the source; use the recording and slides to verify details.*

## A broad field with open questions

The lecture surveys several approaches to understanding deep learning rather than claiming to give a complete theory. It touches on learning theory, neural network generalization, optimization, neural tangent kernels, and training dynamics. The speaker encourages students to focus on questions they find tractable and interesting, since the field is too broad to cover fully in one session ([03:20](https://www.youtube.com/watch?v=q_Dj4-QNJV8&t=200s)).

## Scaling and training data

The lecture revisits Kaplan's scaling-law work and the Chinchilla result. These papers ask how loss changes with compute, model size, and training data. Chinchilla's analysis considers a broader range of training runs and argues that, at a fixed compute budget, many models had been trained on too few tokens relative to their parameter count ([12:06](https://www.youtube.com/watch?v=q_Dj4-QNJV8&t=726s)).

This is an empirical account of training behavior, not a complete explanation of why neural networks generalize. Scaling laws help describe regularities and inform resource allocation, while theoretical work asks why those regularities arise and when they should be expected to continue.

## Neural networks can fit randomized labels

Classical intuitions often suggest that a highly expressive model should overfit and generalize poorly. The lecture uses Zhang et al.'s CIFAR experiments to challenge that simple picture: neural networks can fit training data even after labels are randomized. This shows that fitting the training set alone does not explain generalization ([1:03:38](https://www.youtube.com/watch?v=q_Dj4-QNJV8&t=3818s)).

The result does not mean that neural networks always generalize well. Instead, it motivates closer study of the biases introduced by architecture, optimization, initialization, and training data. Which solutions are favored among the many functions that fit the observations?

## Soft inductive biases and training dynamics

Near the end, the lecture describes a “soft inductive bias”: rather than ruling out complex solutions entirely, learning can favor simpler solutions while still allowing a large function class. The linked reading appears to be Andrew Gordon Wilson's [*Deep Learning is Not So Mysterious or Different*](https://arxiv.org/abs/2503.02113), but the auto-translation does not preserve the citation title clearly ([1:31:57](https://www.youtube.com/watch?v=q_Dj4-QNJV8&t=5517s)).

The lecture also mentions recent work tracking the neural tangent kernel spectrum during training and relating its eigenfunctions to what the model has learned ([41:35](https://www.youtube.com/watch?v=q_Dj4-QNJV8&t=2495s)). The caption does not identify that paper. Its title and authors should be added after checking the corresponding slide or recording.

## References

- [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) — Jared Kaplan et al. (2020).
- [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556) — Jordan Hoffmann et al. (2022).
- [Understanding Deep Learning Requires Rethinking Generalization](https://arxiv.org/abs/1611.03530) — Chiyuan Zhang et al. (2017).
- [Deep Learning is Not So Mysterious or Different](https://arxiv.org/abs/2503.02113) — Andrew Gordon Wilson (2025); likely the soft-inductive-bias reading mentioned near the end.

## Source transcript

[Open the timestamped English auto-translation](Lecture%2003%20-%20Mathematics%20for%20AI%20Safety.en.txt).
