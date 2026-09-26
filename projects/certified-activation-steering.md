# When Can Activation Steering Change One Behavior Without Changing Another?

**Status:** Draft proposal for review  
**Working title:** Certified Local Effects of Activation Steering in Small Neural Networks  
**Course connections:** Week 2 (deep learning theory), Week 5 (representation geometry), Week 6 (interpretability and steering), and Week 9 (safety guarantees)

## One-sentence summary

Study when an intervention on a network's hidden activations can change a chosen output while preserving another output, and give checkable guarantees over a bounded set of inputs.

## Research question

Suppose a trained network represents two simple attributes. We add a vector to an intermediate activation to change the prediction for one attribute. **Under what conditions can we guarantee that the intended prediction changes and the other prediction remains correct for every input in a specified region?**

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

1. **Construct a controlled task.** Generate two balanced binary attributes from a low-dimensional input. Train a small shared ReLU network with two output heads. Put the steering intervention before at least one later nonlinear layer, so activation-region changes can matter.
2. **Choose steering directions.** Start with a difference-of-means direction from held-out examples of the target attribute. Compare it with a random direction and a direction chosen without a guard constraint. Keep the model, direction, strength, and evaluation sets separate to avoid selecting a direction on the test examples.
3. **Measure effects.** Across several strengths, report target success, guard accuracy, and the fraction of test points showing an unwanted guard change. Include examples where steering succeeds and where it fails.
4. **Certify small regions.** For selected held-out inputs, attempt to bound both margins over input boxes. Report the largest radius certified for the joint property, and compare that with adversarial search for counterexamples. A failed certificate is marked **inconclusive** unless a counterexample is found.
5. **Explain the geometry.** In a region with a fixed ReLU activation pattern, derive how the two output margins depend on the steering direction. Test whether useful directions align with the target margin while having a small effect on the guard margin. Examine what changes when the intervention crosses a ReLU boundary.

The first version can be completed with synthetic data and a small network on a laptop. One additional public dataset or a small open model is an optional extension after the controlled case works.

**Minimum viable result:** One two-head network, one useful steering direction, one nonzero input box for which the joint property is proved or soundly checked, and a comparison with a random direction. A full language-model experiment and a Lean formalization are extensions, not prerequisites for the pilot.

## Proposed research contribution

A successful term project could provide one or more of the following:

- A sufficient condition for the joint target-and-guard property in a fixed activation region, together with a counterexample showing why the condition fails across region boundaries.
- A verified or auditable certificate for a small steered network and input box, with every assumption stated: model weights, intervention layer, steering vector, strength, input region, arithmetic semantics, and output predicate.
- An empirical map of the trade-off between steering strength, target effect, guard effect, and certifiable radius, with random and unconstrained directions as baselines.

The contribution will be evaluated against the existing steering and neural-network verification literature. If a general theorem is already known, the project can focus on a clearer special case, a new counterexample, or a reproducible comparison of certification methods.

## Tools and materials needed

| Need | Minimal choice | Purpose |
| --- | --- | --- |
| Model and experiments | Python, PyTorch, synthetic two-attribute data | Train a small network and apply steering vectors. |
| Verification baseline | Interval bounds or exact enumeration of activation regions for a tiny network | Check local output properties and distinguish proof from failed search. |
| Proof checking | Lean 4 and [TorchLean](https://arxiv.org/abs/2602.22631), if its supported semantics and checker match the experiment | Explore a machine-checkable result after the mathematical property is stable. |
| Research context | The [course outline](https://www.fields.utoronto.ca/activities/26-27/SGC-safety), [Golden Gate Claude](https://www.anthropic.com/news/golden-gate-claude), [steering side-effect study](https://arxiv.org/abs/2608.11227), and [TorchLean verification documentation](https://lean-dojo.github.io/TorchLean/examples/verification/) | Define the gap and document the tool's trust boundary. |

TorchLean's examples distinguish candidate output bounds from a theorem about the network's semantics. The proposal will use the word **certified** only when the required soundness argument or checked theorem covers the actual model, graph, weights, arithmetic, input region, and predicate.

The pilot needs basic linear algebra, PyTorch, and the ability to inspect a small verification procedure. CPU training should be sufficient for the synthetic task; no paid model API or private dataset is required. Lean experience would be useful for the later formalization stage.

## Work plan and decision points

| Stage | Goal | Decision point |
| --- | --- | --- |
| Early course | Read the core papers; implement the two-attribute task and establish baseline accuracy. | Can the model learn both attributes reliably? |
| Representation and interpretability weeks | Construct steering vectors, measure target and guard effects, and test the fixed-region geometric prediction. | Is there a nontrivial target/guard trade-off to explain? |
| Safety-guarantees week | Prove or check the joint local property for small input boxes; search for counterexamples outside them. | Can any nonzero input radius be certified under explicit soundness assumptions? |
| Final project | Write the theorem or counterexample, report the experimental comparison, and release a reproducible example. | Does the result add something beyond existing side-effect measurements and standard verification examples? |

If steering has no useful range in the first task, simplify the data or network and explain why. If interval bounds cannot certify a property that empirical search suggests is true, compare tighter bounds or exact enumeration on an even smaller network. These outcomes can still identify a meaningful limitation of the method.

## Expected deliverables

- A concise report with the formal property, literature comparison, method, results, and limitations.
- Reproducible code, model weights, generated data, and a fixed list of evaluation inputs.
- At least one certified example or an explicit counterexample, with a clear distinction between the two.
- A short presentation suitable for the course's project weeks.

## Open questions for review

- Should the guard property preserve a binary label, bound a logit change, or both?
- Is the main contribution a mathematical condition, a machine-checked certificate, or an empirical study of when certificates are informative?
- Should the optional extension use a small language model, or would a second controlled dataset give a cleaner test?

**Project status:** Candidate. The scope and novelty claim should be revised after an initial literature review and a small pilot experiment.
