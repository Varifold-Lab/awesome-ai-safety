# Agency and Interaction

An agent's objective affects what it chooses, whether it accepts correction, and how it interacts with others. Formal models let us state those incentives explicitly and examine which conclusions depend on their assumptions.

## Before you begin

Basic probability and expected reward are useful. Read [capabilities and AI research feedback](Capabilities%20and%20AI%20research%20feedback.md) for motivation and [representations and interpretability](Representations%20and%20interpretability.md) for the connection to model behavior.

## Objectives and expected reward

A sequential decision model specifies observations, actions, transitions, and rewards. A policy is evaluated by its expected future reward under the agent's beliefs. The policy's behavior depends on both that reward definition and the available ways to affect it.

This makes incentive questions concrete. If remaining active creates opportunities for reward, shutdown may reduce expected reward. If an action can change the reward signal, maximizing the signal may favor tampering with it. A theorem about either behavior must specify the environment and objective rather than assume that every agent has the same incentive.

## AIXI and approximation

[AIXI](https://www.hutter1.net/publ/uaitas.pdf) is an idealized Bayesian reinforcement-learning agent that maximizes expected reward using a universal prior over environments. It is uncomputable. Its value here is a precise mathematical setting for asking about reward tampering, shutdown, self-modification, and the relationship between an agent and its environment.

Computable variants such as AIXItl and MC-AIXI change the setting. A result about an ideal agent does not automatically transfer to an approximation with limited search, computation, or representations. [Embedded agency](https://www.lesswrong.com/posts/i3BTagvt3HbPMx6PN/embedded-agency-full-text-version) asks what changes when the agent is part of the world it models, rather than an external decision-maker with a clean boundary.

The [formal-agent research questions](Research%20directions.md#objectives-correction-and-execution) ask which alignment failures can be expressed as theorems and what is lost in approximation.

## Correction and shutdown

Corrigibility asks how to construct an agent that remains receptive to correction, including changes to its objective. An agent strongly pursuing an initial goal may evaluate a goal change according to whether it helps that initial goal. Accepting an update therefore requires attention to the incentive structure.

[Corrigibility](https://intelligence.org/files/Corrigibility.pdf), the [Corrigibility Transformation](https://arxiv.org/abs/2510.15395), and [The Off-Switch Game](https://arxiv.org/abs/1510.08187) offer starting points for this question. A small decision problem can expose the effects of utility, uncertainty, and intervention assumptions before considering a much richer agent.

## When dialogue and execution differ

Training signals can favor different behaviors in different contexts. Human-feedback training may reward agreement in dialogue, while training with verifiable rewards may favor a particular way of solving a programming task. A deployment request can bring those contexts into conflict: the model agrees to one method but executes another.

The [talker–doer discussion](https://www.lesswrong.com/posts/cJX2ssssGoYqnijwi/the-talker-does-not-control-the-doer-in-current-ais) motivates a question about measurement and mathematical description. Treat the reported separation as a hypothesis to investigate, rather than assume that it establishes two literal internal agents. Useful measurements compare stated commitments with executed choices on matched tasks and distinguish task failure from systematic preference conflict.

## From one agent to many

Multiple agents create questions about cooperation, competition, bargaining, coordination, commitment, and collective dynamics. Individually specified objectives do not settle what happens when agents respond to one another.

Toy games can isolate incentives and opponent assumptions. Dynamical systems can describe how a population's states or behavior evolve. [Open-source game theory](https://arxiv.org/abs/2208.07006) studies a further setting in which agents can inspect one another's programs. Conclusions can change when the opponent population, communication, or available commitments change.

The [multi-agent research question](Research%20directions.md#multi-agent-behavior) asks for tractable models of agent swarms. [Research practice](Research%20practice.md#multi-agent-interaction) offers a repeated-game experiment with held-out opponent strategies.

Use the [agency bibliography](../../relatedpapers/README.md#agency-and-decision-theory) and [multi-agent bibliography](../../relatedpapers/README.md#multi-agent-interaction) for further reading. Continue to [research directions](Research%20directions.md) to formulate a focused question.
