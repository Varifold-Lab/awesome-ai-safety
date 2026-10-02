# Scaling and Compute

How should a fixed training budget be divided between a larger model and more data? Scaling laws describe how prediction loss changes with these resources and provide an empirical basis for that choice.

## Before you begin

Read [language models and loss](Language%20models%20and%20loss.md). Keep the distinction between training loss, held-out loss, and downstream performance in view.

## Three resources, one constraint

Let $N$ be the number of model parameters, $D$ the number of training tokens, and $C$ the training compute. For a dense transformer, a common approximation is

$$
C\approx 6ND.
$$

The constant estimates forward and backward computation; architecture and implementation affect the actual cost. At a fixed budget, increasing $N$ reduces the number of tokens that can be processed. A larger model may therefore receive less training. Compute-optimal training asks which pair $(N,D)$ gives the lowest held-out loss under this constraint.

## Empirical power laws

[Kaplan et al.](https://arxiv.org/abs/2001.08361) found power-law relationships between language-model cross-entropy loss and model size, data, and compute over the ranges they studied. Their compute-allocation result favored relatively large models trained on a comparatively modest amount of data, with training stopped before convergence.

[Hoffmann et al.'s Chinchilla analysis](https://arxiv.org/abs/2203.15556) revisited the allocation question using hundreds of training runs. It found that many large models had too few training tokens for their parameter counts. In their estimated optimal allocation, parameters and training tokens grow at roughly the same rate: doubling model size also calls for doubling training tokens. This is a result for their experimental regime, rather than a universal token-to-parameter ratio.

The two studies show why parameter count alone is insufficient to compare training choices. A smaller model trained on more data can outperform a larger model at the same training cost.

## An illustrative allocation calculation

A useful fitted form separates the loss contributions associated with model size and data:

$$
L(N,D)=E+AN^{-\alpha}+BD^{-\beta},
\qquad A,B,\alpha,\beta>0.
$$

Here $E$ is a fitted loss floor. This form is used in the [Chinchilla analysis](https://arxiv.org/abs/2203.15556); its constants and exponents must be estimated from training runs. It does not itself explain why the relationship holds.

To see the implied trade-off, substitute $D=C/(6N)$:

$$
L(N,C/(6N))=E+AN^{-\alpha}+B(6N/C)^\beta.
$$

Increasing $N$ lowers the first term while raising the second. Differentiating with respect to $N$ and setting the derivative to zero gives

$$
\alpha AN^{-\alpha}=\beta B(6N/C)^\beta.
$$

Consequently,

$$
N_{\mathrm{opt}}\propto C^{\beta/(\alpha+\beta)},
\qquad D_{\mathrm{opt}}\propto C^{\alpha/(\alpha+\beta)}.
$$

When the fitted exponents are close, both allocations grow approximately as $C^{1/2}$. The calculation makes the model's assumptions explicit and shows how changing an exponent changes the recommendation.

## What a scaling curve can establish

A fit describes an experimental regime: model family, data distribution, training procedure, and resource range. Extrapolating it assumes that the relevant relationships persist beyond that range. Data quality, data reuse, optimization choices, and architecture changes can alter the relationship.

Held-out loss measures average prediction quality on the evaluation text. Connecting a loss improvement to a particular capability requires a task evaluation. Connecting it to a safety property requires evidence about the behavior in question. A smooth loss curve can coexist with sharp changes in an accuracy metric or in a learned representation.

## From scaling to explanation

[Generalization and learning dynamics](Generalization%20and%20learning%20dynamics.md) develops a kernel example in which a power law follows from spectral assumptions. It also examines why training fit alone cannot explain performance on unseen data.

[Capabilities and AI research feedback](Capabilities%20and%20AI%20research%20feedback.md) asks how software improvements can change the work produced by a fixed hardware budget. The [capabilities and scaling bibliography](../../relatedpapers/README.md#capabilities-and-scaling) collects the primary readings.
