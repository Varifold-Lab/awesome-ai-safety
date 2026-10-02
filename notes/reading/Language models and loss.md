# Language Models and Loss

A language model predicts a distribution over the next token. Its training objective measures how much probability it assigns to the continuations that actually occur. These definitions connect prediction, compression, and scaling.

## Before you begin

Finite probability distributions and logarithms are enough to begin.

## A language model is a conditional distribution

Tokenization encodes text as a sequence of elements of a finite vocabulary $V$. A token can be a word, part of a word, or punctuation. Given the preceding tokens (the context $c$), a model with parameters $\theta\in\mathbb{R}^N$ produces

$$
p_\theta(\cdot\mid c)\in\Delta(V),\qquad
\Delta(V)=\left\{q:V\to[0,1]\;\middle|\;\sum_{v\in V}q(v)=1\right\}.
$$

Here $N$ counts model parameters; $|V|$ counts possible next tokens. They are different quantities. The dot in $p_\theta(\cdot\mid c)$ leaves the token argument open, so the expression denotes a whole distribution. Filling in a token gives a number: for the context “The capital of France is”, an illustrative value is $p_\theta(\text{Paris}\mid c)=0.6$, assuming Paris is one token.

During training, the parameters change. During generation, the model selects a next token, appends it to the context, and repeats. Sampling from the distribution is one generation rule; selecting a high-probability token is another.

## The observed next token is the training target

A dataset of prediction positions is written

$$
S=\{(c_i,y_i)\}_{i=1}^m.
$$

The target $y_i$ is the next token actually present in the text after context $c_i$, not a token sampled from the model. The average negative log-likelihood is

$$
L_S(\theta)=-\frac{1}{m}\sum_{i=1}^{m}\log p_\theta(y_i\mid c_i).
$$

The logarithm is natural, so the loss is measured in nats per token. A model is penalized for assigning low probability to what actually occurred:

| Probability assigned to the observed token | Negative log-likelihood |
| --- | --- |
| $0.9$ | $0.105$ |
| $0.6$ | $0.511$ |
| $0.01$ | $4.605$ |

## Why logarithms and cross-entropy appear

For a token sequence with its preceding tokens as context, the chain rule gives

$$
p_\theta(y_1,\ldots,y_m)=\prod_{i=1}^{m}p_\theta(y_i\mid y_1,\ldots,y_{i-1}).
$$

Taking a logarithm turns this product into a sum. Minimizing its negative therefore maximizes the sequence likelihood; dividing by $m$ expresses the result per token. No independence assumption between successive tokens is needed for this chain-rule factorization.

At a particular prediction position, write the observed target as a one-hot distribution $q_i(v)=\mathbf{1}\{v=y_i\}$. Its cross-entropy with the model distribution is

$$
H(q_i,p_\theta(\cdot\mid c_i))
=-\sum_{v\in V}q_i(v)\log p_\theta(v\mid c_i)
=-\log p_\theta(y_i\mid c_i).
$$

This explains why the average loss is also called *cross-entropy*. A one-hot training target records the observed token; it does not assert that the underlying language distribution has only one possible continuation.

## What lower loss tells us

Training approximately minimizes loss on the training text. Evaluation measures the same quantity on held-out text that was excluded from training. Lower test loss means better average probabilistic prediction on that text; it does not by itself establish safety or improved performance on every downstream task.

This supplies the response variable for scaling laws: how does held-out loss change as model size $N$, training tokens $D$, and training compute $C$ grow?

## Continue reading

Read [scaling and compute](Scaling%20and%20compute.md) to study the trade-off between parameters and training data. [Generalization and learning dynamics](Generalization%20and%20learning%20dynamics.md) asks why performance on the training data transfers to new inputs.
