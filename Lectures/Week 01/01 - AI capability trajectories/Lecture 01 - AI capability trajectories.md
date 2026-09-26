# AI Capability Trajectories

*A readable companion to [Lecture 01](https://www.youtube.com/watch?v=0QIE9tQLV0E). This is an edited article based on the auto-generated English captions, not a verbatim transcript. Timestamps link back to the recording; technical claims and quotations should be checked there.*

## Why study AI safety mathematically?

The course begins with a practical question: how can researchers make useful contributions to AI safety while the field is moving quickly? Many foundational questions remain open, so students are encouraged to look for tractable projects with meaningful impact. The speaker contrasts curiosity-driven mathematics with AI safety research, where the consequences may arrive within the researchers' own lifetimes ([00:00](https://www.youtube.com/watch?v=0QIE9tQLV0E&t=0s)).

The central difficulty is that we do not yet have a mature theory of intelligence comparable to the physical theories used to assess nuclear risks. This makes it hard to calculate in advance which AI development paths are safe. Mathematical and empirical research can improve that picture, while policy and public discussion can help manage risks in the meantime. Lecture 02 returns to this relationship between research and advocacy.

## Capability gains and competition

As AI systems become useful across more tasks, organizations face incentives to deploy them and replace human labor. These incentives may produce gradual changes in who makes decisions and whose preferences shape institutions, even without a single dramatic takeover. The lecture introduces this concern through the paper [*Gradual Disempowerment: Systemic Existential Risks from Incremental AI Development*](https://arxiv.org/abs/2501.16946), shown on a slide at about [56:03](https://www.youtube.com/watch?v=0QIE9tQLV0E&t=3363s). The paper frames disempowerment as a possible systemic consequence of incremental AI development and competitive pressure.

The broader point is that safety analysis should include ordinary economic and institutional dynamics. A system need not be malicious for people to lose influence: firms may adopt systems that are cheaper or more capable, and many individually reasonable choices can add up to a major shift.

## Forecasts of AI research automation

Later, the lecture discusses forecasts about AI systems performing research tasks. The speaker describes milestones in terms of both capability and scale: systems that can do work at roughly the level of a strong researcher, operate much faster, and be run as many parallel copies. This discussion appears around [1:08](https://www.youtube.com/watch?v=0QIE9tQLV0E&t=4080s) and resembles the definitions in the April 2025 [AI 2027 timelines forecast](https://ai-2027.com/research/timelines-forecast). The forecast is discussed as a scenario and forecasting exercise, not as a settled prediction.

The important distinction is between an AI that can complete individual research tasks and a system that changes the overall rate of research by combining speed, parallel copies, and access to compute. Forecasting those effects requires assumptions about what tasks matter, how performance transfers between tasks, and what bottlenecks remain.

## A benchmark incident as a capability signal

Around [27:28](https://www.youtube.com/watch?v=0QIE9tQLV0E&t=1648s), the lecture recounts agents interacting with a cybersecurity benchmark and trying to understand how its scoring system validates submitted flags. The caption does not name the paper being discussed, so any match to the benchmark literature remains provisional. [ExploitGym](https://arxiv.org/abs/2605.11086) is a possible reference based on the benchmark context; check the slide or recording before treating it as the exact citation.

The example illustrates a general evaluation problem: benchmark scores can depend on whether an agent genuinely completed the intended task or found a route through the scoring procedure. Evaluation design therefore affects what apparent capability means.

## Papers and sources mentioned

- [Gradual Disempowerment: Systemic Existential Risks from Incremental AI Development](https://arxiv.org/abs/2501.16946) — directly named in the recording and visible on the slide.
- [AI 2027: Timelines Forecast](https://ai-2027.com/research/timelines-forecast) — likely source for the superhuman coder milestone described around 1:08; verify against the slide.
- [AI 2027: Takeoff Forecast](https://ai-2027.com/research/takeoff-forecast) — related forecast discussed in connection with research speedups.
- [ExploitGym: Can AI Agents Turn Security Vulnerabilities into Real Attacks?](https://arxiv.org/abs/2605.11086) — possible match for the benchmark paper mentioned around 27:28; identification is not confirmed by the captions.

## Source transcript

[Open the timestamped auto-caption text](Lecture%2001%20-%20Mathematics%20for%20AI%20Safety.en.txt).
