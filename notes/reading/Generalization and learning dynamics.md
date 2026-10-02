# Generalization and Learning Dynamics

Fitting the observations leaves two questions: which function does learning select, and how does that function behave on new inputs? Kernel dynamics and Bayesian prediction give two mathematical ways to separate these questions.

## Before you begin

Read [language models and loss](Language%20models%20and%20loss.md) and [scaling and compute](Scaling%20and%20compute.md). Gradients, eigenvalues, and basic linear algebra are useful below.

## Training fit and generalization

For data drawn from a distribution $q$, the population loss is an expectation over $q$. Empirical loss averages over the finite training sample. A learning algorithm sees the sample, while its usefulness depends on behavior beyond that sample.

[Zhang et al.](https://arxiv.org/abs/1611.03530) demonstrated that neural networks can fit randomized labels. A network that fits meaningful labels therefore has enough expressivity to fit some datasets with no useful predictive structure. Expressivity and training accuracy alone cannot explain the difference between learning a transferable pattern and memorizing observations.

Architecture, initialization, optimization, and regularization affect which fitting solutions are selected. A **hard inductive bias** excludes some functions; a **soft inductive bias** allows them but gives some solutions greater preference. [Wilson's account of soft inductive biases](https://arxiv.org/abs/2503.02113) develops this distinction. A rich hypothesis class can still support good prediction if learning favors appropriate solutions within it.

## Kernel dynamics and spectral learning

For a scalar network output $f_\theta(x)$, define the empirical neural tangent kernel

$$
K_\theta(x,x')=\nabla_\theta f_\theta(x)\cdot\nabla_\theta f_\theta(x').
$$

Under gradient flow, this kernel describes how a parameter update driven by one input changes the prediction at another. In an idealized population model with squared loss, suppose the kernel remains fixed. Its integral operator is

$$
(Tg)(x)=\int K(x,x')g(x')\,d\mu(x'),
$$

where $\mu$ is the input distribution. For target $f_*$ and error $e_t=f_t-f_*$, the dynamics are

$$
\partial_t e_t=-Te_t.
$$

If $T$ has an orthonormal eigenbasis with $T\phi_k=\lambda_k\phi_k$ and $e_0=\sum_k a_k\phi_k$, then

$$
e_t=\sum_k a_k e^{-\lambda_k t}\phi_k,
\qquad \|e_t\|_{L^2(\mu)}^2=\sum_k a_k^2e^{-2\lambda_k t}.
$$

Large-eigenvalue modes are learned faster. Zero-eigenvalue components cannot be removed by these fixed-kernel dynamics. This is why the target's alignment with the kernel matters as much as the kernel spectrum itself. The [NTK framework](https://arxiv.org/abs/1806.07572) supplies the connection to sufficiently wide networks under its parameterization and assumptions.

### How a power law arises

Assume $\lambda_k\asymp k^{-\alpha}$ and $a_k^2\asymp k^{-1-s}$, with $\alpha,s>0$. The transition between learned and largely unlearned modes occurs around $t\lambda_k\approx1$, or $k\approx t^{1/\alpha}$. The unlearned tail scales as

$$
\sum_{k\gtrsim t^{1/\alpha}}k^{-1-s}\asymp t^{-s/\alpha}.
$$

A corresponding bound on the other modes gives the same order for the total error. This is an illustrative mechanism for a power law, conditional on the spectrum and target coefficients. It does not derive their decay rates from arbitrary real-world data.

The calculation concerns training time in a population model. Interpreting it as a data-scaling law requires further assumptions about sampling fresh observations and optimization. It does not by itself give a scaling law in parameter count. In feature-learning regimes, the kernel changes during training, so a fixed-kernel explanation has a limited domain.

## Bayesian prediction and log-loss

Take a countable hypothesis class with prior weights $w(h)$ and predictive distributions $p_h$. After observations $x_{1:n}$, Bayes' rule gives

$$
w(h\mid x_{1:n})=\frac{w(h)p_h(x_{1:n})}{M(x_{1:n})},
\qquad M(x_{1:n})=\sum_h w(h)p_h(x_{1:n}).
$$

The next prediction averages over this posterior:

$$
p_B(x_{n+1}\mid x_{1:n})=\sum_h w(h\mid x_{1:n})p_h(x_{n+1}\mid x_{1:n}).
$$

Log-loss has a coding interpretation: $-\log_2 p(x)$ is an idealized description length in bits. Frequent events receive shorter descriptions. For a true distribution $q$, the excess expected log-loss from predicting with $p$ is

$$
\mathbb E_q[-\log p(X)]-\mathbb E_q[-\log q(X)]
=D_{\mathrm{KL}}(q\|p).
$$

KL divergence is nonnegative and generally asymmetric. It measures the extra expected coding cost from using the wrong distribution.

### A bound that depends on the prior

Suppose the class contains the true distribution as $h_*$. Because every summand is nonnegative,

$$
M(x_{1:n})\geq w(h_*)q(x_{1:n}).
$$

The cumulative expected excess log-loss therefore satisfies

$$
R_n=\mathbb E_q\log\frac{q(X_{1:n})}{M(X_{1:n})}
\leq-\log w(h_*).
$$

The chain rule identifies $R_n$ with the sum of expected one-step excess losses. The bound concerns their total; it does not say that every successive prediction improves. Dividing by $n$ bounds average regret per observation.

An idealized complexity prior favors short descriptions, with weights proportional to $2^{-K(h)}$, where $K(h)$ is the length of a shortest prefix-free program describing the hypothesis. Then the bound is controlled by the description length of the true hypothesis, up to normalization and the choice of coding system. This illustrates how a very large class can be combined with a preference for simpler explanations. Kolmogorov complexity and universal induction are uncomputable, so the argument is not a practical neural-network training algorithm. [Hutter's treatment of universal prediction](https://www.hutter1.net/publ/uaitas.pdf) provides further background.

## Parametric models and singular learning

For a continuous family $p_\theta$, the mixture becomes

$$
Z_n=\int p_\theta(x_{1:n})\pi(\theta)\,d\theta.
$$

A single true parameter typically has zero prior mass, so the discrete domination argument cannot be reused with a positive weight at that point. The relevant quantity is prior mass near parameters that predict almost as well as the truth.

In a correctly specified, identifiable, regular $d$-dimensional model with a positive prior near the true parameter and nondegenerate local curvature, the familiar leading cumulative-regret penalty is $(d/2)\log n$. These conditions matter: neural-network parameterizations can contain symmetries and many equivalent parameters, making the local geometry singular.

[Singular learning theory](https://arxiv.org/abs/1208.6338) replaces the ordinary dimension coefficient with a real log canonical threshold determined by the local model geometry. Lower-order terms can also change. This gives a reason to examine the shape and volume of low-loss parameter regions rather than relying on parameter count alone. It does not establish that any large neural network will generalize well.

## Transitions and open questions

Grokking refers to delayed improvement on held-out examples after training examples have already been fitted. A model can also improve its log-loss while its classification accuracy stays fixed: accuracy records which answer wins, while log-loss still responds to its probability. In-context learning raises a different question about using examples in the input context without updating the model's weights during that prediction.

The research questions include explaining spectral changes during feature learning, comparing NTK and mean-field limits, and extending models of phase transitions to other groups or deeper networks. Read [representations and interpretability](Representations%20and%20interpretability.md) for the feature connection and [research directions](Research%20directions.md#learning-theory) for concrete questions and references.
