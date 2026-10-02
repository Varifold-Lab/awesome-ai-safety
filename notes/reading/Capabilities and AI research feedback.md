# Capabilities and AI Research Feedback

AI capability affects which tasks can be automated and who retains control over the resulting decisions. If AI systems also automate AI research, improvements can feed back into the process that produces the next generation of systems.

## Before you begin

This is an entry point for the safety motivation. [Scaling and compute](Scaling%20and%20compute.md) supplies background for arguments about training budgets and algorithmic progress.

## Capability, incentives, and human influence

Organizations have incentives to adopt systems that perform useful work cheaply or quickly. As adoption spreads, decisions can shift toward automated systems, changing whose preferences shape institutions. [Gradual Disempowerment](https://arxiv.org/abs/2501.16946) studies how incremental development and competitive pressures could reduce human influence without requiring a single dramatic takeover.

This motivates studying economic and institutional dynamics alongside individual model behavior. A system need not have malicious intentions for its widespread use to produce an undesirable outcome. The safety question includes who sets goals, who can challenge decisions, and whether people can retain meaningful control as dependence grows.

Mathematical research and public action address different parts of this problem. Better models of learning and agency can make risk judgments more precise. Policy and communication can affect deployment incentives while that understanding develops. Uncertainty creates questions to investigate; it does not settle a particular forecast.

## What counts as evidence of capability?

A benchmark measures performance under a particular task definition, scoring rule, tool environment, and resource limit. An agent may complete the intended task, exploit a weakness in the scoring procedure, or benefit from information that would be unavailable in the intended setting. These possibilities have different implications even if the reported score is the same.

One source example concerns cybersecurity agents investigating how submitted flags are validated. The exact benchmark-paper identification remains provisional. The lesson is that evaluation needs to examine the route to success as well as the score. The [bibliography](../../relatedpapers/README.md#capabilities-and-scaling) records the uncertain identification separately from confirmed references.

Forecasts also depend on their chosen milestone. A system that matches one researcher on selected tasks differs from a deployment that runs many fast copies and increases useful research output. The [AI 2027 timelines](https://ai-2027.com/research/timelines-forecast) and [takeoff forecasts](https://ai-2027.com/research/takeoff-forecast) are examples of conditional forecasting exercises. Their dates depend on assumptions about task transfer, speed, scale, and remaining bottlenecks.

## From coding assistance to research automation

AI research includes choosing problems, writing code, running experiments, interpreting results, designing training procedures, and coordinating work. Faster implementation helps only to the extent that implementation limits the overall process. Human judgment, experiment compute, or evaluation may remain scarce.

For an elementary pipeline example, suppose an automatable stage uses fraction $f$ of the original completion time and becomes $a$ times faster. If all other stages stay unchanged, end-to-end speedup is

$$
\mathrm{speedup}=\frac{1}{(1-f)+f/a}.
$$

Even unlimited speed in that stage leaves the other stages. For $f=0.5$, the limiting speedup is two. This serial model is illustrative: real research pipelines also involve parallel work, dependencies, review costs, and varying quality. Measuring time saved is insufficient if the output is less useful or requires more checking.

## A software feedback loop

Software progress can improve the effective work obtained from a fixed hardware base. A feedback loop requires three links: AI produces useful research, that research improves AI systems, and the improved systems produce more useful research. Each link needs evidence.

A simple model makes the competition between feedback and diminishing returns visible. Let $S>0$ measure software productivity and $R$ effective research input. Consider

$$
\frac{\dot S}{S}=A R^\lambda S^{-\beta},
\qquad A,\lambda,\beta>0.
$$

The exponent $\lambda$ describes how research input affects progress; $\lambda<1$ allows diminishing returns to adding researchers. The factor $S^{-\beta}$ represents increasing difficulty as software improves. This is a stylized model, with the variables and normalization stated here explicitly.

Now assume that, at fixed hardware, AI research input grows proportionally to $S$. Closing that feedback loop gives

$$
\dot S=a S^{1+\lambda-\beta},\qquad a>0.
$$

| Relationship | Behavior of this model |
| --- | --- |
| $\lambda<\beta$ | Growth slows in proportional terms; $S$ grows polynomially. |
| $\lambda=\beta$ | Exponential growth. |
| $\lambda>\beta$ | The idealized solution diverges in finite time. |

For $p=\lambda-\beta>0$, the solution is

$$
S(t)=\bigl(S(0)^{-p}-pa t\bigr)^{-1/p}
$$

until the denominator reaches zero. The divergence describes the model's extrapolation. Physical constraints, delays, and changes in the production relationship would have to be considered before interpreting it as a real trajectory. A strong conclusion depends on both the estimated exponents and the assumption that research input can keep growing with software productivity.

## Compute bottlenecks and substitutability

Research often needs both cognitive work and experiments. If extra reasoning cannot replace an experiment, increasing the supply of automated researchers can leave experimental compute as the binding constraint.

A constant-elasticity-of-substitution model represents two inputs, cognitive labor $L$ and experimental compute $K$, as

$$
R(L,K)=\bigl(wL^\rho+(1-w)K^\rho\bigr)^{1/\rho},
\qquad 0<w<1.
$$

For positive inputs, the limit $\rho\to0$ is $L^wK^{1-w}$. At $\rho=1$, the inputs are perfect substitutes in this model. As $\rho\to-\infty$, output approaches the smaller input, like the number of shoe pairs obtainable from left and right shoes. For $\rho<0$, keeping one input fixed bounds the gain from increasing the other indefinitely.

These examples expose the empirical question: how much can better cognitive work substitute for experimental compute? Estimates from a narrow class of tasks may not transfer to the full research process. Delays from training, validation, hardware expansion, data collection, and coordination can weaken feedback even when the inputs are partially substitutable.

The [software intelligence explosion discussion](https://epochai.substack.com/p/the-software-intelligence-explosion) motivates experiments on these relationships. The [research directions](Research%20directions.md#ai-research-feedback) include improving these models and identifying early signals that could be monitored.

## Continue reading

Read [agency and interaction](Agency%20and%20interaction.md) to examine goals, correction, and collective behavior. [Research practice](Research%20practice.md) offers a small pipeline simulation and a forecast-sensitivity study.
