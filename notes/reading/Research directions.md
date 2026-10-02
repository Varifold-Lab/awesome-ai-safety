# Research Directions

Choose a question by subject and the background it needs. The nine questions below cover learning theory, representations, research feedback, objectives, and collective behavior. They are starting points for investigation; a novelty claim requires checking related work.

## Learning theory

Start with [generalization and learning dynamics](Generalization%20and%20learning%20dynamics.md), including the distinction between fixed-kernel dynamics and feature learning.

### Asymptotic regimes in generalization bounds

One can derive generalization bounds for parametric Bayesian models in the asymptotic limit of very large data, or very large depth or width of a neural network (width limits depend on the parameterization and scaling of the last layer; two useful regimes are the NTK and mean-field limits). In the limit the expression often simplifies and can be used to guide our intuition about why neural networks generalize well. If one tries to scale several things at the same time, then the result will change depending on the relative speed of scaling. Understanding how the limits change is very useful.

One example in this direction is the analysis of mean field theory and singular learning theory in this paper:

[Vandermonde asymptotics and scale-aware singular learning — Dmitry Vaintrob](https://dmitryvaintrob.com/clean_paper1_scale_aware_v3_2.pdf)

The analysis is done for one particular activation function (cos). How does the result change for other activation functions? What happens when we increase depth?

Another example is Rubin, Davidovich & Ringel, “Mitigating the Curse of Detail: Scaling Arguments for Feature Learning and Sample Complexity” (ICLR 2026, arXiv:2512.04165).

[Paper entry: arXiv:2512.04165](https://arxiv.org/abs/2512.04165)

### Phase transitions

Grokking as a phase transition: [arXiv:2310.03789](https://arxiv.org/abs/2310.03789).

In-context learning as a phase transition: [arXiv:2405.11751](https://arxiv.org/abs/2405.11751).

Question: can we push these theoretical models to explain more phase transitions in neural networks? For example, can the method of Rubin-Seroussi-Ringel be generalized to NNs models learning other groups (not just modular addition)? What happens in the simple student-teacher setting when we increase the number of layers?

Can phenomena that occur at larger scales (for example, formation of “induction heads”) be explained using similar arguments?

## Representations and interpretability

Read [representations and interpretability](Representations%20and%20interpretability.md) for the connection between features, geometry, and interventions.

### Interpretability of the eNTK spectrum

Interpretability via the eNTK spectrum. The empirical neural tangent kernel

$$
K(x,x') = \nabla_\theta f(x) \cdot \nabla_\theta f(x')
$$

gives a closed-form kernel approximation to the trained network. Lin (2025) shows that in toy models (Toy Models of Superposition, modular addition MLP and transformer, and in the newest version a small Gemma model) the top eigenspaces of the eNTK align with the features the network uses, and that the evolution of the spectrum tracks the grokking transition. Questions: how can we explain these phenomena theoretically (e.g. using mean field theory techniques)? How does this method scale?

Reference: [Feature Identification via the Empirical NTK — Jennifer Lin, arXiv:2510.00468](https://arxiv.org/abs/2510.00468).

### Feature manifolds

Find examples of feature manifolds in the space of activation vectors of LLMs. How does one search for them systematically? Is there an unsupervised way of finding them?

Source: [Interpretability and Feature Manifolds — MAISI](https://maisi.org/research/directions/interpretability-feature-manifolds).

## AI research feedback

Read [capabilities and AI research feedback](Capabilities%20and%20AI%20research%20feedback.md), especially the growth model and compute-bottleneck assumptions.

### Recursive self-improvement

Develop models of recursive self-improvement and investigate whether experimental compute limits software progress. A central modeling question is how cognitive work and compute substitute for one another in a CES production model.

The originating paragraph is partly obscured in the available screenshots, so its full wording cannot be recovered. The clearly visible question is: what early signs of recursive self-improvement should regulators monitor?

- [The software intelligence explosion debate needs experiments — Epoch AI](https://epochai.substack.com/p/the-software-intelligence-explosion)
- [Will compute bottlenecks prevent a software intelligence explosion? — Tom Davidson](https://www.lesswrong.com/posts/XDF6ovePBJf6hsxGj/will-compute-bottlenecks-prevent-a-software-intelligence-1)

## Objectives, correction, and execution

Read [agency and interaction](Agency%20and%20interaction.md) for formal objectives, approximation, and incentives to accept correction.

### AIXI, approximation, and alignment

AIXI is Hutter's definition of an optimal Bayesian reinforcement-learning agent: it acts to maximize expected reward under a Solomonoff prior over environments. It is uncomputable but serves as a mathematical idealization of a superintelligent agent, and many safety failure modes can be stated precisely in this framework. Which of the standard alignment problems (wireheading / reward tampering, resisting shutdown, self-modification, the fact that AIXI is not “embedded” in its environment) can be formalized as theorems about AIXI or its computable approximations? What is lost when passing from AIXI to computable variants (AIXItl, MC-AIXI)?

[Hutter's AIXI paper](https://www.hutter1.net/publ/uaitas.pdf)

[Logical Induction](https://arxiv.org/abs/1609.03543) provides a related framework for reasoning under logical uncertainty. It should not be treated as a direct computable implementation of the Solomonoff prior.

The Logical Induction paper link is an editorial addition; the original hyperlink destination was not visible.

[Embedded Agency (full-text version)](https://www.lesswrong.com/posts/i3BTagvt3HbPMx6PN/embedded-agency-full-text-version)

### Corrigibility

How does one train an agent that is incentivized to make corrections to its objective?

Sources:

- [Corrigibility](https://intelligence.org/files/Corrigibility.pdf)
- [Corrigibility Transformation: Constructing Goals That Accept Updates — Rubi Hudson, arXiv:2510.15395](https://arxiv.org/abs/2510.15395)

### Personality splitting in language models

Reinforcement learning is very context specific; for example, in RLHF an LLM may learn to be agreeable and in RLVR it may learn that it can solve programming tasks more effectively if it is coding in a particular way. What happens if in deployment the two contexts collide (e.g. a user asks the LLM to solve a programming task in a “disfavored” way). Some researchers claim they observe the “talky” part of an LLM not being able to control the “cody” part.

How can we mathematically describe and measure this general phenomenon?

Source: [The Talker Does Not Control The Doer (in Current AIs) — Eliezer Yudkowsky](https://www.lesswrong.com/posts/cJX2ssssGoYqnijwi/the-talker-does-not-control-the-doer-in-current-ais).

## Multi-agent behavior

Begin with [agency and interaction](Agency%20and%20interaction.md#from-one-agent-to-many). Game theory and dynamical systems provide possible modeling tools.

### Models of agent swarms

Developing good models of “swarms of agents”. Goal: construct mathematical toy models that describe some of the phenomena in multi-agent interactions observed in the OpenAI - Huggingface incident in the summer. One direction could be to use techniques from dynamical systems.

The incident is a motivating example named in the source material; its event details have not been independently established here.

## From a question to a study

Use [research practice](Research%20practice.md) for small experiments and formal models, or [developing proposals](../../projects/README.md) to specify assumptions, baselines, and deliverables. The [related papers](../../relatedpapers/README.md) provide broader background.
