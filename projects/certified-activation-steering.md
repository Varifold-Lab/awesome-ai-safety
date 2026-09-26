# When Can Activation Steering Change One Behavior Without Changing Another?

**Status:** Draft proposal for review  
**Working title:** Certified Local Effects of Activation Steering in Small Neural Networks  
**Course connections:** Week 2 (deep learning theory), Week 5 (representation geometry), Week 6 (interpretability and steering), and Week 9 (safety guarantees)

## Abstract (proposal draft)

Activation steering changes a neural network's behavior by adding a vector to an internal representation, but an observed target effect does not establish that other outputs remain stable. We propose a Lean 4 study of selective steering in small networks with two output heads. Using TorchLean to represent the network and intervention, we will state a local property over an explicit input region: the intervention changes a target prediction while preserving a guard prediction. We will first analyze the geometry of this property within fixed ReLU activation regions, then construct concrete examples and counterexamples near region boundaries. We will attempt to check the resulting bounds or prove the property in Lean under stated model and arithmetic assumptions. Comparisons with unconstrained and random steering directions will show when selectivity is possible and when it fails. The intended result is a precise account of local steering guarantees and their trust boundaries, rather than a claim about unrestricted language-model safety.

## One-sentence summary

Study when an intervention on a network's hidden activations can change a chosen output while preserving another output, and give checkable guarantees over a bounded set of inputs.

## Research question

Suppose a small network represents two simple attributes. We add a vector to an intermediate activation to change the prediction for one attribute. **Under what conditions can we guarantee that the intended prediction changes and the other prediction remains correct for every input in a specified region?**

The first answer will concern a small ReLU network and a local input region. Any later experiment with a language model will be exploratory; the local network guarantee will not be described as a guarantee about free-form language behavior.

## Why this is interesting

[Golden Gate Claude](https://www.anthropic.com/news/golden-gate-claude) shows that changing an interpretable activation can visibly alter model behavior. More recent work studies [side effects of activation steering](https://arxiv.org/abs/2608.11227) across behaviors. These motivate a sharper mathematical question: can we state exactly which target and non-target effects an intervention has under explicit assumptions?

This project joins the course's treatment of representation geometry, causal interventions, and formal verification. Its possible contribution is a small, precise account of when steering effects can be certified, when they can be refuted by a counterexample, and when a bound is merely too loose to decide. A literature review is required before claiming this as a novel result.

## Formal setup

Let a network be split at an intermediate layer as $f(x)=g(h(x))$. For a steering vector $v$ and strength $\alpha$, define the intervened network

$$
f_{\alpha,v}(x)=g(h(x)+\alpha v).
$$

The network has two output heads: a **target** head and a **guard** head. Each head has a binary logit margin for a specified desired label. Select a point where the unsteered network predicts the *opposite* target label while predicting the guard label correctly. For an input box $X=\{x:\lVert x-x_0\rVert_\infty\leq\varepsilon\}$, test the joint property

$$
\forall x\in X:\quad
m_{\mathrm{target}}(f(x))\leq -\delta_0,\quad
m_{\mathrm{target}}(f_{\alpha,v}(x))\geq\delta_1,\quad
m_{\mathrm{guard}}(f(x))>0,\quad
m_{\mathrm{guard}}(f_{\alpha,v}(x))>0.
$$

Here $\delta_0,\delta_1>0$ are target margins chosen before testing. The first two conditions establish a target-label change throughout the box; the last two preserve the selected guard label. A stronger extension would also bound the change in the guard score relative to the original network. These are **local output properties** of one specified model and intervention, not a general claim that steering is safe.

## Minimal study

1. **Construct a controlled task.** Define two binary attributes over a low-dimensional input and a small shared ReLU network with two output heads in Lean 4/TorchLean. Begin with explicit rational weights. Put the steering intervention before at least one later nonlinear layer, so activation-region changes can matter.
2. **Choose steering directions.** Compare a direction designed to change the target head while preserving the guard head with a random direction and a direction chosen without a guard constraint. A later experiment can derive a direction from separate development examples.
3. **Measure effects.** Across several strengths, evaluate target success and unwanted guard changes on a finite test set. Keep these observations separate from the universal property over an input box.
4. **Certify small regions.** For selected inputs, bound both margins over explicit input boxes using a TorchLean verification workflow. Check whether the bound is supported by a soundness theorem or a checked certificate for the exact model semantics. Report the largest radius actually certified; mark unsuccessful bound attempts **inconclusive** unless a counterexample is found.
5. **Explain the geometry.** In a region with a fixed ReLU activation pattern, prove how the two output margins depend on the steering direction. Construct a case where the intervention crosses a ReLU boundary and the fixed-region argument no longer applies.

The first version can be completed with a small network and exact coefficients in Lean 4. A trained network, public dataset, or small open model is an optional extension after the controlled case works.

**Minimum viable result:** One two-head network, one useful steering direction, and one nonzero input box for which the joint property is proved or soundly checked in Lean 4, together with a contrasting direction or counterexample. A full language-model experiment is outside the pilot scope.

## Proposed research contribution

A successful term project could provide one or more of the following:

- A sufficient condition for the joint target-and-guard property in a fixed activation region, together with a counterexample showing why the condition fails across region boundaries.
- A verified or auditable certificate for a small steered network and input box, with every assumption stated: model weights, intervention layer, steering vector, strength, input region, arithmetic semantics, and output predicate.
- An empirical map of the trade-off between steering strength, target effect, guard effect, and certifiable radius, with random and unconstrained directions as baselines.

The contribution will be evaluated against the existing steering and neural-network verification literature. If a general theorem is already known, the project can focus on a clearer special case, a new counterexample, or a reproducible comparison of certification methods.

## Tools and materials needed

| Need | Minimal choice | Purpose |
| --- | --- | --- |
| Model and steering | Lean 4 and [TorchLean](https://arxiv.org/abs/2602.22631) | Define and evaluate the small network and hidden-state intervention in one Lean-based environment. |
| Verification | TorchLean's supported bound and certificate workflows; Lean proofs for the fixed-region argument | Check local output properties and distinguish proof from failed search. |
| Optional experiment | Synthetic data and Python/PyTorch if useful for plots or a trained-weight extension | Compare steering directions beyond the first exact-weight examples. |
| Research context | The [course outline](https://www.fields.utoronto.ca/activities/26-27/SGC-safety), [Golden Gate Claude](https://www.anthropic.com/news/golden-gate-claude), [steering side-effect study](https://arxiv.org/abs/2608.11227), and [TorchLean verification documentation](https://lean-dojo.github.io/TorchLean/examples/verification/) | Define the gap and document the tool's trust boundary. |

TorchLean's examples distinguish candidate output bounds from a theorem about the network's semantics. The proposal will use the word **certified** only when the required soundness argument or checked theorem covers the actual model, graph, weights, arithmetic, input region, and predicate.

The pilot needs basic linear algebra, Lean 4, and familiarity with TorchLean's model and verification interfaces. It does not require a paid model API, private dataset, or large training run.

## Work plan and decision points

| Stage | Goal | Decision point |
| --- | --- | --- |
| Early course | Read the core papers; encode a two-head ReLU network and steering operation in Lean 4/TorchLean. | Are the network and intervention represented with explicit semantics? |
| Representation and interpretability weeks | Construct steering directions and prove a fixed-activation-region lemma. | Is there a nontrivial target/guard trade-off to explain? |
| Safety-guarantees week | Prove or check the joint local property for small input boxes; search for counterexamples outside them. | Can any nonzero input radius be certified under explicit soundness assumptions? |
| Final project | Present the Lean theorem or checked certificate, a counterexample or comparison, and a reproducible example. | Does the result add something beyond existing side-effect measurements and standard verification examples? |

If steering has no useful range in the first task, simplify the data or network and explain why. If interval bounds cannot certify a property that empirical search suggests is true, compare tighter bounds or exact enumeration on an even smaller network. These outcomes can still identify a meaningful limitation of the method.

## Expected deliverables

- A concise report with the formal property, literature comparison, method, results, and limitations.
- Reproducible Lean code, exact model weights, intervention parameters, and a fixed list of evaluation inputs.
- At least one certified example or an explicit counterexample, with a clear distinction between the two.
- A short presentation suitable for the course's project weeks.

## Open questions for review

- Should the guard property preserve a binary label, bound a logit change, or both?
- Is the main contribution a mathematical condition, a machine-checked certificate, or an empirical study of when certificates are informative?
- Should the optional extension use a small language model, or would a second controlled dataset give a cleaner test?

**Project status:** Candidate. The scope and novelty claim should be revised after an initial literature review and a small pilot experiment.
