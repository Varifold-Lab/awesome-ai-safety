# Research, Advocacy, and Scaling

*A readable companion to [Lecture 02](https://www.youtube.com/watch?v=-XmDvvHqfLI). Edited from YouTube's auto-generated English captions; it is not a verbatim transcript. Timestamps link to the recording.*

## Why both research and action matter

The lecture opens by revisiting a question from the previous session: should people focus on policy and advocacy, or on technical AI safety research? The speaker uses the history of the Manhattan Project as an analogy. When scientists faced a potentially catastrophic physical risk, they could make a calculation using an established theory. AI researchers face a different problem: we do not yet have a sufficiently complete theory of intelligence or neural networks to calculate many long-term risks with comparable confidence ([01:00](https://www.youtube.com/watch?v=-XmDvvHqfLI&t=60s)).

The lecture does not present research and policy as competing choices. Regulation and communication may reduce risk or buy time, while better understanding of AI systems is needed to make more informed judgments. The uncertainty cuts both ways: it is a reason to investigate, rather than proof that a particular outcome will occur.

## Scaling laws and changing compute allocations

The technical discussion turns to empirical scaling relationships: how language-model loss changes as model size, training data, and compute change. [Kaplan et al.'s scaling laws](https://arxiv.org/abs/2001.08361) describe a set of empirical regularities that helped shape expectations about how to allocate training compute. The lecture then contrasts those results with the later Chinchilla analysis, which emphasizes training on more tokens for a given model size.

The practical lesson is that a model's parameter count alone does not determine its capability. Compute allocation between model size and data matters, and conclusions depend on the range of models and training runs used to fit the scaling relationship. The lecture discusses Kaplan around [13:45](https://www.youtube.com/watch?v=-XmDvvHqfLI&t=825s) and compares the Kaplan and Chinchilla results around [16:20](https://www.youtube.com/watch?v=-XmDvvHqfLI&t=980s).

## References

- [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) — Jared Kaplan et al. (2020).
- [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556) — Jordan Hoffmann et al. (2022), commonly known as the Chinchilla paper.

## Source transcript

[Open the timestamped auto-caption text](Lecture%2002%20-%20Mathematics%20for%20AI%20Safety.en.txt).
