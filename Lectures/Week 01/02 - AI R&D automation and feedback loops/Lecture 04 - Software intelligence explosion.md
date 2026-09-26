# Will Advanced AI Lead to an Explosion of Software Intelligence?

*A readable companion to [Lecture 04](https://www.youtube.com/watch?v=7AaNkZuYfmk). Edited from the English captions; this is a structured reading article, not a verbatim transcript. Claims about current lab plans reflect what the speaker reported at the time of recording.*

## The question: can AI accelerate AI research?

In this guest lecture, Anson Ho of Epoch AI asks what could happen if advanced AI systems automate a large share of AI research and development. The scenario of interest is a “software intelligence explosion”: AI systems improve the algorithms, data, and software used to build later systems, producing rapid capability gains without requiring a matching increase in physical compute infrastructure.

The lecture distinguishes this possibility from a broader growth in hardware. More chips and data centers can increase AI capability, but software improvements could increase the effective work produced by a fixed hardware base. Whether this becomes a rapid feedback loop depends on how much research work is automated and how strongly research output translates into better AI systems.

## What counts as automated research?

AI research is not a single task. It includes implementing experiments, analyzing results, choosing promising directions, designing training runs, and coordinating the work. Systems that perform coding or experiment implementation do not automatically automate the full research process. The speaker therefore treats progress toward automation as a set of milestones rather than a binary transition.

The key empirical questions include which tasks consume the most researcher time, how AI performance on those tasks is changing, and whether faster execution leads to more useful experiments or discoveries. A model may speed up routine implementation while leaving scarce human judgment or compute as the main bottleneck.

## Feedback loops and bottlenecks

For recursive improvement to become a strong feedback loop, several links must hold: AI must contribute useful research work; that work must improve future AI systems; and the improved systems must then contribute still more useful work. Delays, evaluation limits, hardware constraints, data availability, and coordination costs can weaken or slow the loop.

This framing helps separate “AI can help with research” from “AI automation will cause a rapid intelligence explosion.” The latter requires not only capable systems, but also a sufficiently strong relationship between research effort and capability gains, plus manageable real-world bottlenecks.

## How to reason about timelines

Forecasts of AI research automation depend on definitions. A forecast may ask when systems can match a human researcher on a bounded set of tasks, when labs can run many copies economically, or when systems can perform the full range of cognitive research work. Those thresholds imply different timelines and different safety implications.

The talk encourages examining the evidence behind such estimates: trends in task duration, evaluations of AI performance, estimates of research productivity, and the limits of extrapolating past trends. Treat timelines as conditional forecasts, with explicit assumptions, rather than precise dates.

## Reading note

The transcript available in the repository does not preserve paper titles or slide citations reliably. No specific paper is attributed here unless it can be confirmed from the recording or course materials. Add named references to [Related Safety Papers](../../../relatedpapers/README.md) as their citations are checked.

## Full lecture text

The text below retains the complete available caption content and groups caption fragments into paragraphs for easier reading. Automatic captioning and translation errors may remain.

Yes, great. Uh, yeah, so we're really excited to have guest speaker Anson from Epoch AI with us today. Anson will talk about the following: Will advanced AI lead to an explosion of software intelligence?

Just a sound check, can people hear me ? Okay, great. OK. Hey, hello everyone. Uh, just a quick introduction, I'm Anson. I work as a researcher at Epoch AI. And I've been thinking a little bit about tracking what's going on in cutting-edge AI labs, especially in

Silicon Valley, and how to try to develop cutting-edge AI. Uh, and the motivation for this conversation is really about what happens if they succeed in their vision of automating AI research and cause something like a software

intelligence explosion. So, we'll look into this. A starting point is to look at what these people are actually doing at cutting-edge AI labs like Anthropic and OpenAI.

Here is a tweet from Sam Altman, CEO of OpenAI. You know , OpenAI currently aims to fully automate AI research by March 2028. So, we're already seeing significant progress in automating math with AI, and as I'm sure you guys already know.

They previously set a goal of reaching the level of research intern by September 2026. And now they claim to have achieved it, according to their recent blog post.

And they say they are moving quickly toward that goal of fully automating the remaining tasks by March 2028 . And the question is , what will happen if they really succeed ? The idea is to try to trigger this process of recursive self-improvement.

It's kind of a science fiction thing that people have been talking about for a while now, where essentially AIs develop better AIs, which develop even better AIs, because they improve their own algorithms and data, recursively improve their software, until over time they achieve a

significant improvement in the capabilities of these AIs. In the most extreme case, this only happens in the software world , so you don't just improve chips and build more chips to further improve AI by building more data centers. Instead, it

happens with existing physical resources, and you just improve the software, and the intelligence and the number of these AIs just skyrocket. At least, that's what they claim.

An example of such a picture is the prefrontal AI model, where they are trying to compress or where this kind of dynamic compression of many years of AI progress in about 3 years.

So, over the last decade or the last 15 years of AI development, we've seen a shift from simple computer vision models that can recognize whether an image contains , for example, a cat or a dog. And to this day, we have AI models that are capable of contributing to solving

things like the Navier-Stokes problem . So, progress was extremely rapid. And if you get something like this feedback loop , people like the AI ​​Futures project claim that in their models you can get 15 years of this progress compressed into a narrow

time frame. So the stakes are really, really high if this actually happens. So there is huge potential for scientific and medical innovation. But at the same time, you might think, what if these AI systems didn't actually do the things we care about?

There is probably a motivation for this course . Uh, they might be out of sync with what we really care about. And there can also be a huge concentration of power.

Imagine millions of artificial intelligences in the hands of a small number of society participants. Uh, and they are coordinated on our own orders, even if we solve the coordination problem, there may be a huge concentration of power in a way that we

don't want, and it's not that our current institutions may not be able to support it. So the motivation is to try to figure out whether this feedback loop is actually happening, whether you can get this huge concentration of power, and

whether these coherence problems are getting significantly worse. So this is a chart that shows, for example, AI futures products, uh , AI futures model , where you get acceleration, and it accelerates maybe 15 years of progress to something like 3 years. Um, given the stakes, people are debating right now, uh,

just to give you an idea of how important this is, people all over the world, including AI, the question is whether the graph is linear with respect to the actual exponent . I think that... Well, I think for you it's linear, but your index corresponds to something that is...

Yes, there is a coincidence with me... Yes, it's... There's a general question, like what does the Y axis mean in AI? Uh, I think in this particular case there's not a very obvious interpretation of what the E 4 capability index means. I think you guys saw that in the previous lecture, right? Uh, yes, these

points are taken from actual data points. Uh, extrapolation into the future is done from the A 54 model predictions.

Uh, one way to try to interpret these data points is do you also know about the meter time horizon graph ? Yes, you can try to map this to the counter time horizon and the correlation is really high. Um, so you could try to interpret this as

if it corresponds to about a one-day time horizon. Um, but overall, yes, you can see that it's an exponential improvement over the time horizon. Yes, you can see that this is an exponential improvement over the time horizon, and it will be extremely important.

That's right. Well, given the stakes, if you really get huge improvements very quickly, people are debating what exactly should slow down. Um , recently, a lot of people at leading AI companies have made these, um, statements about trying to accelerate the

development of, potentially, um, halt or slow down the development of AI. Um, that includes people who are, um, CEOs of these big companies, like Dario Amodei of Anthropic, um, Sam Altman of OpenAI, Demis Hassabis of Google DeepMind, um, Elon Musk, um, who works with SpaceX AI. Um, Mark Zuckerberg was a little

more clear about whether he really thinks we should take a break. Um, I think he's saying that, uh, in practice, a lot of people will naturally want to slow down trying to solve the coordination problems, because coordination is something that's internalized in

the cost of trying to build AI systems development . Uh, and this also goes beyond the, uh, scope of tech CEOs . So, we have people like Bernie Sanders and Donald Trump expressing different views on the debate. I'll let you decide

who to believe. OK. So the big question is, will advanced AI, if we get to the point of automating AI research, lead to an explosion of software intelligence? Because we are starting from a point of view where this concept is very vague and difficult to understand.

For example, what does it mean for AI to improve its own software? How can we measure the capabilities of these systems? Can we try to build this and understand it more thoroughly? So my goal in this talk is to try to explain, uh, the very first attempts

to do this. Uh, what does the empirical data based on this model say? Uh, and also try to talk about some extensions of this basic model. Hmm, unfortunately I also have to say that our current understanding is terrible. So, hopefully some of you can help

improve this current state of affairs, which is not good. Okay, so the basic model of recursive self-improvement is to try to take this feedback loop where AI is improving and capture it with the most standard innovation model that there is. Namely, I am

talking about the Jones model from the theory of economic growth. Quick, raise your hands, who has heard of this model or knows about it?

Okay, great. Perfectly. Well, uh, it's actually not that difficult. It's like... uh, since you guys are mathematicians, you probably know this better than I do. Uh, but essentially, you take the left-hand side, you have the growth rate in...

Let me first define the variables. So S corresponds to us fixing the quality of the software and the variable S. Um, and we say that the growth rate will change over time, depending on the current level of the

software and the amount of research investment that you make. So you can imagine some kind of production function that turns research effort into software quality , and the change in S, like software quality, depends only on how much

research investment you make and on the current level. How much does it depend? Well, it depends on two exponents. So, lambda moves on to research efforts . It tells you that, um, if lambda is less than one, then, you know, if you

try to increase your research effort by a factor of 10, there 's a penalty because, you know, having 10 times more researchers in an AI company, you might only get about a threefold increase in, like, your benefits. Er, there is a certain penalty for

parallelization. People step on each other's feet. You won't get a perfect 10x increase in growth rate. And, uh, S here , if you have that kind of beta penalty, it essentially tells you that ideas are getting harder to find. So if you increase your supply of S, maybe that means there are

fewer of them, and less readily available fruit for you. And this reflects this effect. Alternatively, depending on the beta value, you may get some interaction effect. You know, Newton talked about how many of his discoveries were made through interactions with other

giants. Essentially, the beta value shows whether you get more of this effect where with more existing knowledge you can improve the quality of the software more, as opposed to just getting more and more

diminishing returns. So , this is a general, uh, STD. Are you thinking of a beta between zero and one or, uh, I guess, zero to one? Yes. Good.

So, this is like a basic model. Uh, and in this, uh , simple model, there is a condition for the explosion of software intelligence. Essentially, you need to derive the hyperbolic growth condition. So you just take that, and we say instead of usually you have research resources

that come from human labor. But in the context of the intellectual explosion, you could say that all of these research efforts are coming from artificial intelligence.

So you replace R from human labor to include the efforts of artificial intelligence. So it depends on the quality of the software and the amount of computation you need to perform to run these AI systems . So, essentially, I just mean that we're

plugging AI labor, AI workers , into this production function. You close the loop, and then you play with the symbols, and this is what you get. So if you ignore that, you're just looking at S. You know, the clear condition is what you want, and if you

get a hyperbolic growth condition, when lambda minus beta is greater than zero. Yes. Er , yes. That's true. Or equivalently you can say that lambda divided by beta is greater than one. Uh, and we often find it useful to define, um, this is lambda

divided by beta as R, for example, the parameter R, um, which is equal to, uh, which is called the return on research and development of artificial intelligence software. And there's a famous article, if you've heard of it, called, um, "Is it getting harder to find ideas in the innovation economy?" They're

trying to estimate, um, this parameter R for the economy as a whole, for example, for things like total factor productivity.

Typically, the value of this is around 0.3 for the entire economy. The idea is that actually, yes, uh, humanity innovates a lot over time , but new ideas are becoming harder to find. Uh, so the goal is to calculate this value of R. Depending on this value,

it tells us about the race between these two conditions, like how much can you increase, find new ideas as opposed to diminishing returns, and which one wins the race? This sets the condition for whether you get hyperbolic growth, like an explosion of software

intelligence, or just get diminishing returns and fading. So, great. We just simplified it all to one number, which is great. So how do we estimate R? I'll show you a naive approach, because the bigger the better, the more complicated, and I'm actually probably not that mathematically

strong to explain it. My colleagues did this work. But the naive approach essentially just assumes that you have a balanced growth path. Therefore, the rate of growth in software quality is constant. So we call this S divided by S as GS,

which is the growth rate of S. If we take the logarithms of both sides and differentiate with respect to time, we get this, and we rearrange, and we find that R is equal to the ratio of the growth rate of outputs, such as software quality , divided by the

growth rate of input research effort . Um, and this allows you to get a rough estimate, like an end-of-the- envelope estimate, of the R value for different areas.

So if we know the growth rate of software quality and the growth rate of research effort , then we know R. Um, a more sophisticated approach probably involves things like using maximum likelihood estimation and so on, like Bayesian

approaches. Um, using the full time series for S and R. Um, but I won't go into that. Um, okay. So, now that we have roughly figured out what we are trying to estimate and how we are going to try to estimate it, we need to know where to get the data, and that is what I will

focus on mainly because that is what I have been doing the most . So, the empirical basis of the RSI model. The first thing to answer is, well, we talked about this RSI model in the abstract, saying that there is such a thing as software quality. But what does this really mean?

One way to try to think about this in a standard way is maybe I should start with other kinds of algorithms in computer science.

Usually people like to talk about things like, you know, complexity, like O or N notation or something like that. But it's very difficult to do that for something like a neural network.

Therefore, it is difficult to identify algorithmic improvements in this way. Instead, a more common approach in machine learning is to say, how much less training computation is needed to achieve the same level of capability? So these are ineffective

improvements. If you need 10x less computation to achieve the same level of capability as GPT-4, that means you have a more efficient set of algorithms and data.

So you can choose a particular algorithm or data family, use it as a benchmark, and then define everything else from its perspective. So here's the idea. If you can define things this way, it allows you to get around this complexity of not being able to precisely

define the computational complexity of some arbitrary AI architecture . So you can think of it this way. Um, usually, um, there's a bunch of empirical work, um, that shows that um, AI algorithms have these kind of scaling models, like empirically

derived scaling dependencies that relate your training computations , this is on a logarithmic scale, um, to your capabilities on some metric. So here I'm just showing a stylized version of it. Um, and you can imagine it as a line. As training calculations increase,

you get better opportunities. So this explains why people have been buying such a ridiculous number of GPUs over time . Um, if you guys didn't know, for example, um, this year, the amount of data center spending that's mostly going to chips, um, in the US they're spending hundreds of billions of

dollars trying to get these chips, which as a percentage of US GDP is more than the Manhattan Project and the Apollo space program.

So, this is exactly the type of scale we're talking about. Um, but anyway, I'm getting off topic. This is a scaling dependency that links training computations to capabilities. Um, yes, mostly from investors. Um, yes.

Um, and um, yes. If you imagine an increase in efficiency, you can imagine a shift of this curve to the left. So you get a scaling curve, you improve algorithmic efficiency by reducing the amount of computation

required to achieve the same level of capability. Um , or you can think of it not as shifting things to the left, but as increasing the computation that you can get, the capabilities that you can get at the same level of computation. Um, yes. Have you seen cases of

shifts where our quality changes over time? That's a great question. I'll come back to this later. Um, but yeah, it doesn't have to be a parallel shift. Um, but as a starting point, um, we'll just look at that first. Um, uh, first of all, well, okay, yeah. This is one . But also, um, I

think it depends on the fact that it's kind of a fake. As if it wouldn't actually be perfectly linear in practice. It also won't be a parallel shift, as you pointed out. Um, but that's just a stylized thing to show, uh, at least locally, what we mean. Um, okay. So,

based on this picture, you might ask, what is the rate of progress of AI software, which we can define as how much less training computation is required to reach a given level of capability over time? And maybe you can average that across a few different

levels of capability. Uh, but the problem is that we don't do it publicly, at least outside of cutting-edge AI labs where everything is kept secret, uh, we don't have the data to get a good time series of these performance improvements over time.

Uh, I hope we can still try to get something like a growth rate by creating large data sets and trying to calculate that. Uh, a rough approximation here is that you take a typical scaling law, which looks something like this. So on

the left you have the cross- entropy loss, and you relate that to the calculations. Uh, with more calculations you get less loss. Um, and then you supplement that with, for example, the software efficiency coefficient S, and then typically you assume that this,

for example, grows exponentially over time, and you try to estimate, um, a parameter, for example, the exponent, uh, the coefficient in the exponent, uh , to try to determine the overall speed of software development. So, you need to

get a large dataset with training computations with the cross-entropy loss value of different models evaluated on validation sets . Er, or on test sets, that is. Uh, and you estimate, for example, alpha, and this is , for example, the exponent of K.

Use this to calculate the doubling time and so on. The problem is that when you do that, uh, because we have very little data on it, uh, you get very wide error bars.

So, the initial assessment that I tried to work on revealed something like a central assessment three times a year. Uh, but when I talk about uncertainty ranges, then, uh , it gets a little funny. So here is a graph that looks at several estimates in the literature.

So the initial estimate that I was talking about here, um, you go from something like two to, um, I should probably remember that.

It's more like 40 50 x. I don't know. This is really very huge. Uh, if you look at the upper and lower estimates given in each analysis, um, and the different estimates, they seem to fluctuate around something like, " Can people actually see these

numbers?" Okay, great. So, plausibly, you could get a central estimate of something like 10 x per year. So you need 10 times less computation to achieve the same level of capability, hmm, if you accept these numbers . But then they use slightly

different methodologies. Well , it depends on whether to consider models that involve distillation, methods like distillation , or synthetic data generation. Uh , and, uh, in general, it's very hard to say. In all cases, the uncertainty is very wide. Uh, what makes it worse is that

all of these assessments are applied to, ahem , prior learning. So, lately people have been developing, uh, reasoning models. So essentially all the models that we use today, models that help solve, for example, the

Jacobian conjecture or, like in the Navier- Stokes problem, are reasoning models, which means that they use a lot of reinforcement learning techniques to try to reason . And we don't capture this approach in our datasets because we don't know what calculations they

use to train these models. For example, if you remember from the previous slide, we need to know the number of calculations to estimate the contribution of the software, but we don't know those calculations. And again , another thing that makes this bad is that software progress

can be even faster in cutting-edge AI labs. So, the model that solved the Navier -Stokes problem, for example, is obviously an internal model that solved the problem within 3 days of training. Er, I mean, they haven't even graduated yet . And they

just use this model and try to solve the problem. Uh , that's a completely different matter. This is much more powerful than the best models available to us outside of Frontier Labs. So it's possible that software progress is even faster inside. Maybe it's just a tilt shift or

something, but I don't know. Uh, maybe we do n't know, uh, from the outside. OK. In any case, despite all these uncertainties, we can still say that we can try. Oh yes, go ahead.

Uh, just a quick assessment of the efficiency gains–is that like an assessment of what's happening, the gains that are happening?

Yes. What do you think? Uh, what happened in the past? Yes. Uh, so we can say, " Okay." Yes. Yes. R as S. But S said it depends on the training you use. So, I guess that means you think of R as the most model-dependent with the

highest performance you can get? Or how much educational computing is directly related to R? What do you think?

Uh, that's also a very good question. Uh, I would say the right way to think about it is not in terms of multiplying S by C. That was the basic model, which is probably wrong or clearly wrong conceptually in some respects. Hmm, it works under certain assumptions. But I'll come back to that a little later. Hmm, yes . So, we can

try to calculate , given that we know the approximate growth rate of S, very, very roughly. We can still try to calculate the value of R, i.e.

lower small R, because we can also try to determine the growth rate of researchers. Hmm, so we want to collect data on R metrics, like the number of researchers, which could be, for example, the number of published papers in a particular field, or maybe we can

look at the number of researchers in OpenAI over time and get a time series like that, and then try to estimate R. Hmm, and what you get using that approach is, again, very, very uncertain. Hmm, that's kind of funny, to be honest . But, uh, the

average scores, uh, sometimes you can find them higher than one, but you just can't clearly rule out that they're going to be, you know, lower than one or higher than one . It just crosses the line, uh, that we're interested in. Uh, what's more, uh, actually these estimates were

made using an old estimate that we had, about 3 times a year, of software progress. This is like an initial estimate, for example, for 2024. If we take the 10x per year estimate by eye, like in the graph on the previous slide, uh, it's possible that these profits will be several times higher,

because as we just saw, for example, R&amp; D profits, uh, this is a naive estimate, this is a ratio of growth rates. So, the growth rate of software divided by the growth rate of researcher investment. Uh, so if we triple the growth rate of software,

then R&amp; D revenues could also roughly triple. Uh, naively, this suggests that something like a software intelligence explosion is plausible. Although there are many problems, and I personally don't want to give it much weight because there are so

many problems with the methodology. So now it's time to build on the basic model, the basic picture that we have here, and break down some of the problems, try to solve some of them, and figure out what we can try to do. So, to address some of the

issues that I think have already been raised. First of all, you know, I think the biggest problems with the basic model are that it just doesn't take into account some important dynamic factors, like algorithmic efficiency depending on the scale of the

training computations , or maybe it doesn't take into account some important inputs to this production function of AI research and development. So, in particular, you might think that to discover new algorithms for greater software progress, you actually need to

do a lot of experiments using physical computer resources. It's not just a case of being smart. No matter how smart you are, maybe you just need to check something. Um, and if that's the case, then we need to consider, uh , R, like this

research input, including, uh, a certain amount of experimental calculations as input. So one article that attempts to do this is, uh, the work of my friends Parker and Cherol.

They try to quantify, uh, these bottlenecks by, uh, defining R as a function of the CES of computational cognitive work. Do you all know what CES is?

Is this some kind of economic sensation ? Good. Um, I think it's something like what it's called in math? It's like P. It's like a generalization of, for example, the harmonic mean and the arithmetic mean, and the geometric mean.

For example, what is it called? Is there a whiteboard I can use? Let's do it again? This little piece of board is also a whiteboard.

Oh, yes. Good. Hmm, hmm. So let's say there's something like X and Y. Or maybe I should use, like, Uh, let's do K. A.

But this happens all the time. Um, so there are two inputs. For example, let's call them K and L. Usually for economists this means capital and labor. Um, but okay.

Um, and then you'll usually have something like this. So you're generalizing, um, different kinds of similar averages. Um, I think mathematicians have something like this where instead of a string you have a P, and it's something I don't know what it's called.

Right? L P-norm? Good. But in this case it only applies to certain string values which are not the same for the norms you guys will be dealing with. Um, for example, the line in this case should go from minus infinity to one, I believe.

Um, if you have one, then that's like an ideal value, I should probably be careful. You can tell how good I am at this . Um, yes, within minus infinity it's at least, right? Um, in that case, it means that these two things complement each

other. Um, if you increase one of them significantly, if it's not a binding factor, for example, it's going to be about 1000, and this is just about one. Um, no matter how much you increase this, the total will not equal the sum, meaning the average of

this will not increase very much, because it is just limited by another factor. But if, for example, ψ is equal to one, then they are perfect substitutes. So it's kind of like if you increase this, everything will increase as well . And as a typical economic thought experiment here would be

: "Okay, maybe in the case where the string is equal to minus infinity , the result would be the number of pairs of shoes that you own." Um, and these could be the left shoes, and these could be the right shoes. And if you have a thousand left shoes and one right shoe, it doesn't matter how many

left shoes you have, you'll still have one pair of shoes. In the case of a substitute, it might be something like: "Maybe you only care about eating some fruit, for example ." And then, uh, you don't care if it's an apple or a pear, you just want to eat some fruit. And, uh, if you have more

apples and one pear, you'll still have more fruit. Uh, that's a stupid example, but that's the point of what I'm trying to talk about here. And in this case, you want to try to figure out, uh, in the case of what Parker and Shaw did, uh , you just replace it with experimental

computational and cognitive work. So, if the string value is less than zero, then these two things are complements, kind of like left and right shoes. Uh, and if that's the case, then one becomes a bottleneck for the other if you make one significantly larger. So, in the explosion of software intelligence, what that means is

that you significantly increase the intelligence of these AI systems , or you significantly increase the number of AI systems, but then you are limited in what you can experiment with. Uh, but then if you find that this string is greater than zero, then you're not limited. They are substitutes. You

can just, uh, uh , increase cognitive labor to infinity and everything will be fine. You will get a hyperbolic growth path. Steeply. Does this all make sense? Good.

If the string is less than zero, then increasing one to infinity doesn't really mean anything good. Then it should depend on that.

It just converges to a constant. Yes. That's right. Uh, there's also a special case where the row is zero, which, uh, if you use L' Hopital's rule, then it converges to Cobb-Douglas, which is something like, uh, like K to alpha, L to 1 minus alpha. Uh, yes. This is

left as an exercise for the reader. Good. So, in their baseline model, they find that the bottleneck here is, uh, quite weak. So, they discover that the string is actually greater than zero. Uh, if they just use experimental calculations and

constant work as input. Um, assuming that K instead of, for example, the number of, roughly, the total stock of experimental calculations, replace that with a number similar to the number of experiments at the limit or experiments close to the limit.

So you divide this input by, let's say, the scale of your training runs, then the bottleneck becomes quite strong, and the line becomes very, very , like... uh... It's... I don't know if it's the right term to use "very negative," but like "very negative." Uh-huh.

So, can you explain this last point? So, what do you mean by marginal scale? Uh , yes. So, uh, that's it .

So, there are two pictures. One picture is that you can just do a lot of experiments at the scale of GPT-2, which are very , very small. Uh, and you can use this to find innovations that you can transfer to your larger training

runs. Uh, but in practice, some people at Frontier Labs point out that, um, you really just need to...You don't know if it's going to scale well . Hmm, maybe this works well at the scale of GPT- 2, but if you try to apply it to GPT-6, it just breaks. It's like it doesn't really

work very well. This doesn't give you a significant increase in efficiency. Um, so, uh, maybe you need to do experiments close to, like , multiple scales and close to the scale that you're trying to implement it at to know if it's useful. Uh, and

so, in their, uh, model, I think they divide, uh, the total pool of R&amp;D computing resources by the size of, say, a training computer startup, and you get some kind of factor that says maybe you can generalize,

like, two orders of magnitude away from the limit, or maybe three orders of magnitude away from the limit. Uh, so if you make these adjustments, the computational bottleneck will become much stronger. Yeah, I would say something like Hmm. Interesting.

So, I think the evidence for the formula probably doesn't exist in the AI ​​world. Um, the model was derived in the context of a growth economy. And I think that's not, uh...It comes from a line of work, for example, endogenous growth theory. So, uh, I think...Hmm. Hmm. Yes , I'm not very familiar with

this part. I think they introduced some of these similar exponents. For example, Charles Jones introduced some of these exponents to correct for some unrealistic predictions if they were not taken into account.

For example, in some growth models. For example, I think one of the results was that in the pre-Italic versions of these models, if you increase research effort , you get a constant increase in growth rates. Er, so by doubling the number of researchers, you

get a double increase in growth rate forever. Uh , and I think he thought it was unrealistic, so he implemented something like a beta. Uh, about the lambda, I'm not exactly sure, uh, where exactly that comes from. Uh, I don't remember if this existed in

previous models as well. But yes, I can get back to you on this later. Uh...Okay. Um, yes, an example of this frontier experiment is Noam Brown, a researcher who says that you can try to take a lot of algorithmic innovations that are being introduced in

academia and try to apply them in laboratories at the frontier, but often these innovations don't actually work very well. So while they draw inspiration from academia, many innovations don't actually work at the edge of

possibility. Another problem with the model is that it doesn't make a very clear distinction between improving intelligence and increasing the amount of AI.

You can also see that this is a problem between...in the previous model we had research effort R equal to S*C. But it depends on what S and C actually are. In this case, I've talked a lot about S being the efficiency of training computations , but C could be about something

more like inference-based computation, so we're multiplying two things that aren't really... It's kind of a category error. Hmm , they're just... This is only true if you have something like...

the efficiency of training computations and inference... the efficiency of training and inference are perhaps linearly related in some way. In that case, you can apply the same setting and it will work in some way.

So one approach to try to get around this problem, to actually separate the inference modeling and the learning, is what is being done in the AI ​​Futures model. Which , in my opinion, is the best model of the explosion of software intelligence today.

Simply because they try to take all these things into account much more deeply. But then it gets much more complicated. There 's always a trade-off between complexity and capture dynamics versus how much you can actually estimate, like parameters, and how much you're making up. Hmm, and

they include...they separate instructional computation and inference computation . So, educational computing helps improve things like your...

You mean AI, I think it's AI 2027 first? Uh, this is an update to the AI ​​2027 model. Yes. Uh, they released an update last December. Um, and this is the model they were working on for things like the S 140. Um , so they're starting.

Educational computing increases the capabilities of models based on things like scaling laws, and they determine that they are trying to relate this to some abstract picture of research flavor . It's kind of like how well can you use

experiments? The conclusion is a separate thing that takes into account the amount of research effort you have. And then you just multiply your experiment by my research taste.

Hmm, that's quite difficult. I probably won't go into detail here. Um, but that's just one of the kinds of things you can do to try to solve this problem, like what do S and C actually correspond to in this research effort variable . Another problem

is that, as noted, we assume that S is like a single factor. This is always the same value at different scales of educational computing. So, in the previous image, we had the scaling law, and then we shifted it parallel. Um, and we said that if it's

parallel, then all the offsets are the same size, right? Horizontal scaling of computers is always the same size.

But then it's possible that you can change the slope. Um, in this case, models that are trained with more computational resources actually get a bigger performance boost , um, compared to models that are trained with less, like, less

computational resources. So, you get a bigger efficiency gain at scale with GPT-4 compared to scale with GPT-2. Um, as an option, you can also get a reduction in inclination. Hmm, all of this is possible. Lines may not be straight. Overall, it's more complicated, but we're

trying to cover things that help us get more conceptual clarity here. Um, one of the cases where this has happened in practice is the transition from recurrent networks like LSTM to modern transformer networks. So if you

flip the opportunity axis and look at the losses, you see these two scaling curves. So, this line corresponds to the losses for the transformer model. And this line is for LSTM. And you look at the computational resource gain, like how much less computational

resources you need to achieve the same level of loss. Um , it's less at smaller computational scales compared to larger computational scales. So, with a 10 on the 17th flop, it's about 26 times, and closer to 6.3 times when you're closer to, uh, 3*10 on the 15th flop. Um,

the general thing is that it may not be possible to define software quality as a single number. Um, and there are other reasons to believe that this might not be the case.

For example, yes. Yes, exactly. Aha. Um, and in general, maybe you can't cover all the capabilities on one axis or, for example, software quality on one axis. Um, these could be, uh, problems that could exist in general regardless of

scale. Um, so if you want to build a model to generalize this, that's also a potential idea. Um, another activity that people do to build on, uh, or work off of this basic RSI model is to try to collect empirical data. So

this includes data that will help determine the parameters of the model, but also give us indicators of the type: maybe we don't understand this model very well, but maybe we can find indicators of when this explosion of software intelligence will happen, if it will happen at all.

The folks at Frontier Labs, particularly at Anthropic, are trying to share more data about their internal R&amp;D process and indicators of improvement capabilities at Frontier Labs . Here's a graph that shows what, um, or the proportion of tasks that

are done, um, by Claude, um, as opposed to, say, humans at different levels of automation. So, there is some arbitrary scale from zero to five levels of automation.

The fourth level of automation here is growing significantly for Claude. And if you want a bold, heroic extrapolation, you know, you could say that level four automation is almost 100% by about 2027.

Sorry. When? Uh, sometime in 2027. It was something I judged by eye. Uh, but there's no AL5 here. There's no AL5 here, except maybe if you look very closely at this final result, I think. Uh , so we still have

some time. Uh, I think that's probably the area of research that I'm most concerned about personally, because I think it's very difficult to pinpoint exactly what these models are and, um, what the correct production function is without knowing a lot of the details of how

R&amp; D works. So getting information about, you know, the production function, sharing data about when it might actually happen, if it does happen, um, probably extremely useful . We also want to know, I think it's important for society

to know, whether we're going to get , you know, crazy superintelligence in 3 months . So, I think it's really important, and it's important for us outside of Frontier Labs to identify what metrics are most important for us to know. We are actively trying to collaborate with, for example, Anthropic and

OPI to share this information. So, it could be something like, we're trying to identify a set of leading indicators. Does the era's opportunity index increase by that much? How can we try to develop statistical tests to say that if this

acceleration is happening, then you will trigger this particular warning? Are there other types of indicators we can come up with? Can we obtain data to assess the most important parameters, such as the complementarity between experimental calculations and

the amount of labor? These things would be very useful for us. And we also want to make sure that these cutting-edge labs have incentives to try to share this. So we want third-party evaluators to make sure they're not just making things up. And we want to hold them

accountable to make sure we really know what's going on inside. So, you may have recently heard about companies like Meter and Accenture that conduct third-party assessments. Meter is particularly known for researching the Hugging Face hack. And we want to summarize this

because, as you know, there are active efforts underway right now, particularly at Meter, to try to do these embedded studies in labs to get information about improvements and refinements to capabilities over time.

If we can make this public, I think it will help me a lot personally. Okay, so those are the key takeaways. The basic RSI model is based on a growth theory model that captures growth or captures ideas that are getting harder to find and things like parallelization penalties.

The most important parameter here is R, for example, the return on software research and development , where the hyperbolic growth condition is that R is greater than 1. The empirical estimates are terrible, but they don't rule out, uh, an explosion of software intelligence. Uh, and there's

a lot of work, uh, that we can try to do to extend the basic model, including things like experimental computational bottlenecks, including this. Um, you know, capturing the difference between more intelligence and more workers, well,

scale-dependent algorithmic progress, and also what I'm most excited about is sharing data about RSI, uh, for the world so we can understand it better.

Good. Thank you. So, here it is, uh. What do you think about whether it's getting harder to find ideas now or not? Is there, I think, this is probably number one.

Number two: suppose the computer was a separate independent variable. What will happen to the computer now? Is there any evidence that this increase in intelligence will also lead to an increase in confusion? Uh -huh. So, uh, regarding the first question, are you referring to ideas that are becoming harder

to find in general, specifically in AI? I'm not saying we're trying to figure out whether r is greater than one. We can say that this is not true.

Oh, yes. Uh, so do you think the idea that there 's a ceiling on the amount of time that ideas run out on planet Earth is a good idea? What do you think about this ?

So, what is the answer to the question? Yes, okay. Um, you know, people in this company usually say that we should be like Bayesians, and we should provide probabilities for these estimates or something like that. For example, these companies, like the artificial intelligence community... Um, so I

think my personal confidence in the explosion of software intelligence is, um, maybe , somewhere around 20 to 25%. I think these computational bottlenecks are actually going to be quite important and mandatory. But, I think this is particularly high, and if it happens, it could be truly

crazy. My best guess for R, um, depends on the settings, but I think, um, I would guess a little above one, probably.

Um, that would be my personal belief on that. Um, I think it's just really hard to know unless we have more data on, um, time series of algorithm progress. So, we try to ask the lab to get it, provide it to us, or at least do

the work ourselves, and then just report it. Hmm, but that's my current, um, opinion on the matter. Hmm, how was the second question?

Yes. Yes. Oh, these are like ideas, so that's good. I have to say that ideas are definitely getting harder to find, but then, hmm, you can get ahead of that by having a lot more AI researchers or a lot smarter AI researchers. Hmm, hmm , and 25% chance that bottlenecks or, hmm, hmm, or ideas

are getting harder to find fast enough to overtake another factor that helps you find more ideas. Hmm, sorry, I got confused . 25% chance that , um, um, ideas aren't getting harder to find fast enough. So that's a 25% chance that

you'll get something like a hyperbolic growth path. Well, yes. So I think people often imagine something like people in the San Francisco Bay Area , you know, trying to be like everyone believes in this crazy superintelligence thing.

But actually, I would say that, um, the San Francisco crowd is more diverse compared to the rest of the world, maybe. I think people in this community believe everything from that it won't happen to that it will definitely happen 100%. So

I think it's hard to say what the average point of view is. I think among the people who are really concerned about the safety of AI, they probably give it more credence than I do. Yes, computational bottlenecks are probably easier to identify because it requires performing tasks in the physical

world. I think one of the biggest bottlenecks is how quickly you can scale , for example, to create new chips.

So in this area, you can look at TSMC, how many chip factories they have and how quickly they can scale it. Right now, I think they can probably keep up with the current rate of growth in computing, like, uh , I have to know that off the top of my head. Maybe three times a year, uh, increasing the number of

chips, but then, uh, it's very hard to make it hyperbolic. Uh, I think that, for that matter, support is becoming increasingly difficult because we're already spending hundreds of billions of dollars on capital expenditures. And if you want to sustain it further and accelerate it, it's just

really hard. Uh, if you can't improve efficiency, like, uh, do you know how many flops you can do, or flops per second you can do on this chip? Uh, it's possible, but I don't know much about how much AI accelerated it. I think there aren't

many at the moment. Er, er, yes , does that answer the question? Good. Yes. So, this is somehow related to the flow of assessments. Was there a lot of work to try to understand the original equipment manufacturers (OEMs)?

Hmm, not much. So, the Park and Chahud article was the main target of the evaluation. Hmm, but I think the bottleneck , again, is the data. So, I think they use almost all available public data to do this. Everything else is based on stories. It's like, "Oh, did Norm

Brown really think they were all in on this?" Uh, and it's just not very good for string evaluation. Hmm, yes. Uh, yes . So, I would like to ask a question about the overall bandwidth of the system. So, uh, what you suggested in the article is that you're getting

a lot less than you need to train the same performance model, right? And it's easy to put together, right? You just have the same model that you already have installed with the models, right?

But then you train for the same amount of time to get better performance. Isn't there a point when your human performance metrics stop working properly? How to work with a scale correctly? Why do we hold onto other assumptions that we

hold onto, essentially building a design axis that is simply not seen? This is essentially unlimited. So, uh , how about me, let's say, for people? I can see that you can...

IQ is missing. But I'm at 180 or 140. Do I know what you can compensate for? No. And the question is , how do the actual capabilities actually expand your assumptions about the extent of the cable?

Um, yes, interesting. So, I think that, um, basically there's no...I would say that measuring capabilities is not a solved problem.

Um, I think we don't really know how to do it in a way that makes it super solid. It's kind of like ...uh, there's a general question, like, how do you convert, into models of future AI? They are trying to convert, for example, capture intelligence in some

way in terms of research tasks. But no one really knows if it's unlimited because we don't have that kind of variation in data to observe what happens if you actually get there. So, really, it's kind of a guess.

Maybe that's how it will happen . And if you're skeptical about this , then maybe you should lower your trust in all of this. Um, I think that, um, you can try to look at things like, for example, in cases where we've seen extremely superhuman AIs, like in

chess, or, for example, can we try to learn something about how far they'll go before they plateau in their Elo, maybe as a way to try to, actually, form our assumptions about what's going to happen here.

Um, or you could try to do something like trying to estimate the maximum efficiency of software, like neural networks. Um, I don't know, I don't have any good way to do it. Um, but then, um, uh, in principle , maybe there's something you can do.

But really at this point, I would say there's really no good answer to that. And actually, I would say it's even worse because, um, opportunities aren't measured very well even today, I would say. As you know, Anthropic had this border security framework for

responsible scaling policies to try to determine , you know, when AI is at that level of biosecurity, like, do we need to keep it out? Do we need to change his precautions a little more? Um, and at some point, when the AI ​​got

good enough at biodefense, all the benchmarks were oversaturation and they couldn't, and despite the oversaturation they couldn't, it's kind of a case where if the AI ​​can meet that benchmark, you don't know if it can actually

help you create a bioweapon, but if it can't do that, you're pretty sure it can't . Um, it's kind of an exclusion, not that it tells you that it can, uh, that's the situation, and overall, these estimates, all the measurements of the possibilities that we have, are not

good enough to give us a really convincing answer, unfortunately. Hmm , but yes, this is the state of affairs. You can do something like chess. Yes, we are trying to do that. We try to do different things, including yellow things like this. Hmm, but I think there always has to be some game or

something common that's being tested, and it doesn't necessarily have to be completely valid in the real world. Maybe it's just something like this particular math thing, and it doesn't apply to all of my work, you know. That's right. Yes, yes.

I mean, yes. So, you mean that you don't really have very complete or not very complex benchmarks at the moment. Yes, this is a common problem in this industry. AI is just that every time you release a new benchmark, once AI reaches about 3% in the benchmark, you

can be sure that within the next 2 years it will reach about 90 percent. Uh, probably more than 1 year. Therefore, it is very difficult to find new benchmarks. Well, for, um ... Okay, maybe I'll have to go over this quickly, but, um, for Frontier Math, um, you know, we have...

So we interviewed a bunch of Fields Medalists, like Terry Tao, Timothy Gowers, and so on. And we're like, "Okay, try giving us some really, really hard problems." How long do you think this will last? And Terence Tao told us something like, "Well, I don't think AI will be able to

do this for at least 5 years, unless there's something like the Manhattan Project." And you know, they've already passed the entire benchmark. They passed a more difficult version of this benchmark. We released some open issues and they went through some of

them. You know, they also went through Stokes like never before . And indeed, given the amount of money we are investing, it's like we are working on the Manhattan Project. So, I think it's very difficult to continue to create and find more complex benchmarks that

will continue to exist.
