# Representations and Interpretability

Understanding a model requires identifying the features it uses and testing what role they play in its behavior. Activation geometry, sparse decompositions, and kernel spectra offer complementary views of this structure.

## Before you begin

Read [generalization and learning dynamics](Generalization%20and%20learning%20dynamics.md), especially the kernel definition and spectral calculation. Linear algebra is useful throughout.

## Finding structure in learned representations

An activation vector is a point in a high-dimensional representation space. A meaningful feature need not coincide with one neuron or one coordinate. The [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/index.html) study how a network can represent more features than it has dimensions. [Sparse dictionary learning](https://transformer-circuits.pub/2023/monosemantic-features/index.html) attempts to recover feature decompositions from activations.

A linear probe tests whether a chosen attribute is predictable from the representation. Successful prediction provides evidence that information is available there. Further experiments are needed to establish whether the network uses that information in the behavior being studied.

## Features in the kernel spectrum

The empirical neural tangent kernel compares parameter gradients at different inputs. Its leading eigenspaces describe prominent directions of variation in how the network can change its outputs. [Lin's feature-identification study](https://arxiv.org/abs/2510.00468) motivates asking when these eigenspaces align with learned features and how the spectrum evolves during grokking.

This connects interpretation to training dynamics: if a spectral change accompanies a behavioral transition, can a model explain both? Theoretical explanation and evidence that the method scales are separate open questions. The [interpretability research questions](Research%20directions.md#representations-and-interpretability) include the toy models, small-model setting, and proposed extensions.

## Feature manifolds

Some attributes may be organized as a geometric family rather than a single feature direction. A feature manifold describes structured variation in activation space, such as a curved set of representations associated with a continuously changing attribute.

The [feature-manifold research direction](https://maisi.org/research/directions/interpretability-feature-manifolds) asks for examples, systematic search methods, and unsupervised discovery. A useful study must distinguish meaningful structure from patterns introduced by the choice of inputs, layer, or projection. Discovery also leaves the question of what computation the structure supports.

## From identifying a feature to intervening

Activation steering changes an internal representation and observes the resulting behavior. If $f=g\circ h$, a steering vector $v$ with strength $\alpha$ produces

$$
f_{\alpha,v}(x)=g(h(x)+\alpha v).
$$

A target effect can coexist with changes in unrelated outputs. A probe that detects an attribute may also fail to identify a selective intervention for changing it. Evaluations should therefore measure the target behavior, side effects, and dependence on the input distribution.

The [certified activation steering proposal](../../projects/certified-activation-steering.md) asks when changing one output can preserve another over an explicit input region. A formal guarantee needs a specified model, property, input set, and arithmetic assumptions. The [safety guarantees bibliography](../../relatedpapers/README.md#safety-guarantees) supplies verification references; the [research practice examples](Research%20practice.md#activation-steering) provide a smaller empirical starting point.

## Continue reading

Use the [representations and interpretability bibliography](../../relatedpapers/README.md#representations-and-interpretability) for the primary readings. Continue with [agency and interaction](Agency%20and%20interaction.md) when your question concerns the connection between representations, stated preferences, and executed behavior.
