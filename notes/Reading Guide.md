# Reading Guide

Follow the concepts and prerequisites that connect the material. Each topic develops an explanation, identifies its assumptions, and points to the questions that follow.

## Build the mathematical foundations

Start here if you want to understand how models learn and what their measured performance means. Basic probability, linear algebra, and differentiation are useful throughout.

1. [Language models and loss](reading/Language%20models%20and%20loss.md): conditional distributions, training targets, negative log-likelihood, and cross-entropy.
2. [Scaling and compute](reading/Scaling%20and%20compute.md): how data, parameters, and compute relate to prediction loss.
3. [Generalization and learning dynamics](reading/Generalization%20and%20learning%20dynamics.md): why fitting training data leaves questions about unseen data, inductive bias, and learned features.

The topic pages contain the definitions, examples, and calculations directly, so you can follow this sequence without moving between source documents.

## Understand safety risks

Begin with [capabilities and AI research feedback](reading/Capabilities%20and%20AI%20research%20feedback.md) for the motivating questions about automation, incentives, and bottlenecks. Return to scaling when you need the technical background for claims about compute.

Then choose a question:

- **How can we understand and intervene in model behavior?** Read [representations and interpretability](reading/Representations%20and%20interpretability.md), drawing on learning dynamics and activation geometry.
- **How can agents remain responsive to human corrections?** Read [agency and interaction](reading/Agency%20and%20interaction.md), covering goals, corrigibility, and multi-agent behavior.
- **What can a guarantee actually establish?** Continue from interpretability to the [certified activation steering proposal](../projects/certified-activation-steering.md) and [safety guarantees bibliography](../relatedpapers/README.md#safety-guarantees).

## Find a research question

Use [research directions](reading/Research%20directions.md) to connect open questions to their conceptual prerequisites. The nine questions are grouped by subject and include their references.

The [research practice examples](reading/Research%20practice.md) and [project proposals](../projects/README.md) provide additional starting points. Check related work before treating a question as a novel contribution.

## Read the papers and join the discussion

Use [related papers](../relatedpapers/README.md) for an annotated bibliography and [discussion notes](README.md) for questions across topics. The homepage links to the source archive for checking original wording and provenance.
