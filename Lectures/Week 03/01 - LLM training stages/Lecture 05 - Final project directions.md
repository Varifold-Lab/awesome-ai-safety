# Final Project Directions — Lecture 05

**Lecture date: September 28, 2026 (Week 03).**

Reconstructed from seven screenshots of the Google Docs project handout shown in Lecture 05, including the final project requirements, nine research directions, and reference links. The handout preserves the screenshot wording, with line breaks combined and mathematical notation formatted; the summary sections provide an editorial overview. Obscured or missing text is marked. This document covers only the project introduction, not the complete Lecture 05 transcript. The original Google Docs has not been accessed.

Course: [Fields Academy Mathematics for AI Safety (MAT1510)](https://www.fields.utoronto.ca/activities/26-27/SGC-safety).

## Slack

[Open the course Slack invitation](https://join.slack.com/t/mathforaisafe-bfl9952/shared_invite/zt-4b6urfk50-xu50bG8tXEjTvbOokfNEog)

The wrapped URL was joined and checked against screenshots 1 and 2. The invitation's current validity has not been verified.

## Project requirements (summary)

- Projects may be completed individually or in groups. Auditors are also encouraged to choose a project and conduct research through hands-on work.
- The final product may be a paper, an in-person presentation, a GitHub repository, or a combination of these formats.
- The main goal is to produce research results that help make the world safer. Intermediate goals may include submitting a paper to a conference or journal, or publishing a research post on platforms such as Alignment Forum or LessWrong.
- Students are encouraged to use the best available LLMs, but remain responsible for the correctness and novelty of their work.
- **By the end of October**, tell the instructor what you are working on and complete some initial steps. The screenshots do not specify a final submission deadline.
- If experiments require compute, ask the instructor in advance about reimbursement up to an agreed amount. If substantial compute is needed, the instructor will try to help find resources. Reimbursement requires asking first.
- Use the course Slack to find teammates and discuss projects.
- The nine directions are suggestions, and the instructor will update them as the course progresses. Other topics are welcome, but should first be discussed by email, including an explanation of how the research will help make the world safer.

## Overview of the nine research directions

This table summarizes the handout; the reconstructed wording and references follow below.

| Direction | Topic | Central questions | Methods or focus |
| --- | --- | --- | --- |
| 1 | Recursive self-improvement (RSI) | How can RSI models be improved? Will compute bottleneck a software intelligence explosion? What early signs should regulators monitor? | AI R&D feedback loops, CES models, and the parameter $\rho$. The opening paragraph is partly obscured. |
| 2 | Multi-agent interactions | Can mathematical toy models describe the swarm behavior reported in the OpenAI–Hugging Face incident mentioned in the handout? | Swarms of agents and dynamical systems. |
| 3 | Interpretability of the eNTK spectrum | Why do leading eNTK eigenspaces align with learned features? Why does spectral evolution track grokking? How does the method scale? | Spectral analysis, mean field theory, theoretical explanation, and scaling. |
| 4 | Feature manifolds | Which feature manifolds occur in LLM activation spaces? Can they be found systematically or without supervision? | Representation geometry, manifold discovery, and unsupervised methods. |
| 5 | Personality splitting in LLMs | What happens when conversational preferences learned through RLHF conflict with execution preferences learned through RLVR? How can failures of the “talky” part to control the “cody” part be described and measured? | Context-dependent reinforcement learning and consistency between dialogue and execution. |
| 6 | AIXI and formal alignment problems | Which failures involving reward tampering, shutdown resistance, self-modification, and non-embedded agency can be stated as theorems about AIXI or its computable approximations? What is lost in approximation? | Bayesian reinforcement learning, Solomonoff priors, AIXItl, MC-AIXI, logical induction, and embedded agency. The original heading has no title. |
| 7 | Asymptotic regimes in generalization bounds | When data, width, and depth grow together, how do their relative growth rates change generalization theory? What happens when cosine activation is replaced by other activation functions, or depth is increased? | NTK and mean field limits, singular learning theory, and joint scaling. |
| 8 | Corrigibility | How can an agent be trained to have incentives to accept corrections to its objective? | Incentives and training methods for accepting goal updates. |
| 9 | Phase transitions | Can models of grokking and in-context learning extend to other groups, deeper student-teacher models, or the formation of induction heads? | Statistical physics, feature learning, phase transitions, group structure, and student-teacher models. |

## English handout reconstruction

### Final projects for the Fields Academy Mathematics for AI Safety course (MAT1510)

[Course page](https://www.fields.utoronto.ca/activities/26-27/SGC-safety)

- You can work on projects individually or in groups.
- Even if you are just auditing the course I encourage you to pick a project and work on it. The best way to learn is through doing.
- The final product can look like a paper, in-person presentation, github repo, or all of these things.
- You should be ambitious and aim to produce results that will make the world safer. That is the main goal. A good intermediate goal could be a paper that you submit to a conference or a journal, or a blogpost on your research (e.g. on [Alignment Forum](https://www.alignmentforum.org/) or LessWrong).
- You are encouraged to use the best available LLMs. You are responsible for the correctness and novelty of your work.
- By the **end of October** you should tell me what you are working on and make some first steps.
- If you believe you need compute to run experiments for your project, I can reimburse your expenses up to some amount (ask me first), or if you need a lot of compute, I will try to find it for you.
- Look for teammates and discuss projects on Slack: [course invitation](https://join.slack.com/t/mathforaisafe-bfl9952/shared_invite/zt-4b6urfk50-xu50bG8tXEjTvbOokfNEog).

The following directions are just suggestions. I will update the list as we cover more topics. You are welcome to work on something completely different, but please email me first to discuss your project. In your email please explain how your work will contribute to making the world safer.

### Direction 1: RSI

Improving models of Recursive Self-Improvement.

*[Reconstruction note: the next paragraph is partly obscured by subtitles and player controls in screenshots 1–2. Readable fragments discuss whether a software intelligence explosion will be bottlenecked by compute, and relate this to the value of rho in the CES model from Anson Ho's guest lecture. Its exact wording, and any intervening text before screenshot 3, cannot be fully recovered.]*

What are the early signs of RSI that regulators should be on the look out for?

Some sources:

- [The software intelligence explosion debate needs experiments — Epoch AI](https://epochai.substack.com/p/the-software-intelligence-explosion)
- [Will compute bottlenecks prevent a software intelligence explosion? — Tom Davidson](https://www.lesswrong.com/posts/XDF6ovePBJf6hsxGj/will-compute-bottlenecks-prevent-a-software-intelligence-1)

### Direction 2: models of multi-agent interactions

Developing good models of “swarms of agents”. Goal: construct mathematical toy models that describe some of the phenomena in multi-agent interactions observed in the OpenAI - Huggingface incident in the summer. One direction could be to use techniques from dynamical systems.

### Direction 3: interpretability of eNTK spectrum

Interpretability via the eNTK spectrum. The empirical neural tangent kernel

$$
K(x,x') = \nabla_\theta f(x) \cdot \nabla_\theta f(x')
$$

gives a closed-form kernel approximation to the trained network. Lin (2025) shows that in toy models (Toy Models of Superposition, modular addition MLP and transformer, and in the newest version a small Gemma model) the top eigenspaces of the eNTK align with the features the network uses, and that the evolution of the spectrum tracks the grokking transition. Questions: how can we explain these phenomena theoretically (e.g. using mean field theory techniques)? How does this method scale?

Reference: [Feature Identification via the Empirical NTK — Jennifer Lin, arXiv:2510.00468](https://arxiv.org/abs/2510.00468).

### Direction 4: feature manifolds

Find examples of feature manifolds in the space of activation vectors of LLMs. How does one search for them systematically? Is there an unsupervised way of finding them?

Source: [Interpretability and Feature Manifolds — MAISI](https://maisi.org/research/directions/interpretability-feature-manifolds).

### Direction 5: personality splitting in LLMs

Reinforcement learning is very context specific; for example, in RLHF an LLM may learn to be agreeable and in RLVR it may learn that it can solve programming tasks more effectively if it is coding in a particular way. What happens if in deployment the two contexts collide (e.g. a user asks the LLM to solve a programming task in a “disfavored” way). Some researchers claim they observe the “talky” part of an LLM not being able to control the “cody” part.

How can we mathematically describe and measure this general phenomenon?

Source: [The Talker Does Not Control The Doer (in Current AIs) — Eliezer Yudkowsky](https://www.lesswrong.com/posts/cJX2ssssGoYqnijwi/the-talker-does-not-control-the-doer-in-current-ais).

### Direction 6

AIXI is Hutter's definition of an optimal Bayesian reinforcement-learning agent: it acts to maximize expected reward under a Solomonoff prior over environments. It is uncomputable but serves as a mathematical idealization of a superintelligent agent, and many safety failure modes can be stated precisely in this framework. Questions: Which of the standard alignment problems (wireheading / reward tampering, resisting shutdown, self-modification, the fact that AIXI is not “embedded” in its environment) can be formalized as theorems about AIXI or its computable approximations? What is lost when passing from AIXI to computable variants (AIXItl, MC-AIXI)?

[Hutter's AIXI paper](https://www.hutter1.net/publ/uaitas.pdf)

Another computable approximation to Solomonoff induction: **Logical Induction**.

*[Link note: the screenshot shows the hyperlink text “Logical Induction” but not its destination. A matching paper entry is supplied here: [Logical Induction, arXiv:1609.03543](https://arxiv.org/abs/1609.03543).]*

[Embedded Agency (full-text version)](https://www.lesswrong.com/posts/i3BTagvt3HbPMx6PN/embedded-agency-full-text-version)

### Direction 7: Different asymptotic regimes in generalization bounds

One can derive generalization bounds for parametric Bayesian models in the asymptotic limit of very large data, or very large depth or width of a neural network (the later can actually be done in different ways, depending on how you scale the last layer; two most useful ways of doing it are known as NTK limit and mean field theory limit). In the limit the expression often simplifies and can used to guide our intuition about why neural networks generalize well. If one tries to scale several things at the same time, then the result will change depending on the relative speed of scaling. Understanding how the limits change is very useful.

One example in this direction is the analysis of mean field theory and singular learning theory in this paper:

[Vandermonde asymptotics and scale-aware singular learning — Dmitry Vaintrob](https://dmitryvaintrob.com/clean_paper1_scale_aware_v3_2.pdf)

Note that is done for one particular activation function (cos). How does the result change for other activation functions? What happens when we increase depth?

Another example is Rubin, Davidovich & Ringel, “Mitigating the Curse of Detail: Scaling Arguments for Feature Learning and Sample Complexity” (ICLR 2026, arXiv:2512.04165).

[Paper entry: arXiv:2512.04165](https://arxiv.org/abs/2512.04165)

### Direction 8: Corrigibility

How does one train an agent that is incentivized to make corrections to its objective?

Sources:

- [Corrigibility](https://intelligence.org/files/Corrigibility.pdf)
- [Corrigibility Transformation: Constructing Goals That Accept Updates — Rubi Hudson, arXiv:2510.15395](https://arxiv.org/abs/2510.15395)

### Direction 9: Phase transitions

Grokking as a phase transition: [arXiv:2310.03789](https://arxiv.org/abs/2310.03789).

In-context learning as a phase transition: [arXiv:2405.11751](https://arxiv.org/abs/2405.11751).

Question: can we push these theoretical models to explain more phase transitions in neural networks? For example, can the method of Rubin-Seroussi-Ringel be generalized to NNs models learning other groups (not just modular addition)? What happens in the simple student-teacher setting when we increase the number of layers?

Can phenomena that occur at larger scales (for example, formation of “induction heads”) be explained using similar arguments?

## Source and reconstruction notes

The handout text is based on the screenshots. Full reference titles and author names were added to link labels after checking the source sites on October 2, 2026. These checks identify the references; they do not verify every research claim or event mentioned in the handout.

- Direction 1 preserves the clearly visible opening sentence. An editorial note summarizes the readable fragments of the obscured paragraph.
- Direction 6 has a number but no title in the screenshots. Its topic label in the overview is an editorial summary.
- The Logical Induction destination and Direction 7's arXiv link were supplied during reconstruction.
- Direction 9's references are [Grokking as a First Order Phase Transition in Two Layer Networks](https://arxiv.org/abs/2310.03789) and [Asymptotic theory of in-context learning by linear attention](https://arxiv.org/abs/2405.11751).
- The Slack URL was checked against two screenshots. The web tool could not access the invitation page, so its current validity remains unverified.
