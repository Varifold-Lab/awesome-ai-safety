# Research, Advocacy, and Scaling

*A readable companion to [Lecture 02](https://www.youtube.com/watch?v=-XmDvvHqfLI). Edited from YouTube's auto-generated English captions; it is not a verbatim transcript. Timestamps link to the recording.*

## Why both research and action matter

The lecture opens by revisiting a question from the previous session: should people focus on policy and advocacy, or on technical AI safety research? The speaker uses the history of the Manhattan Project as an analogy. When scientists faced a potentially catastrophic physical risk, they could make a calculation using an established theory. AI researchers face a different problem: we do not yet have a sufficiently complete theory of intelligence or neural networks to calculate many long-term risks with comparable confidence.

The lecture does not present research and policy as competing choices. Regulation and communication may reduce risk or buy time, while better understanding of AI systems is needed to make more informed judgments. The uncertainty cuts both ways: it is a reason to investigate, rather than proof that a particular outcome will occur.

## Scaling laws and changing compute allocations

The technical discussion turns to empirical scaling relationships: how language-model loss changes as model size, training data, and compute change. [Kaplan et al.'s scaling laws](https://arxiv.org/abs/2001.08361) describe a set of empirical regularities that helped shape expectations about how to allocate training compute. The lecture then contrasts those results with the later Chinchilla analysis, which emphasizes training on more tokens for a given model size.

The practical lesson is that a model's parameter count alone does not determine its capability. Compute allocation between model size and data matters, and conclusions depend on the range of models and training runs used to fit the scaling relationship. The lecture discusses Kaplan around [recording](https://www.youtube.com/watch?v=-XmDvvHqfLI) and compares the Kaplan and Chinchilla results.

## References

- [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) — Jared Kaplan et al. (2020).
- [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556) — Jordan Hoffmann et al. (2022), commonly known as the Chinchilla paper.

## Full lecture text

The text below retains the complete available caption content and groups caption fragments into paragraphs for easier reading. Automatic captioning and translation errors may remain.

What's more convenient for people to start uh uft time than after then exactly or 5 minutes in between the two in between. >> Good. Um okay so let me >> exact is better otherwise people are confused.

That's right. So, just 10. Okay, let's let's do that. So, uh I don't see any comments from people on Zoom about whether um you can hear stuff. >> Yes. Oh, thank you. Okay, great. [snorts] Um so, just a little bit more philosophy before we do uh a little bit of math. uh because there was some really nice discussion, some very nice questions uh last time and uh so I just wanted to kind of quickly go over that. So if you guys have seen uh the movie Oppenheimer

uh then there's a there is an interesting moment in there where uh uh Edward Teller suggests to uh Openheimr in uh 1942 I believe that uh there's a possibility of starting a chain reaction in the nitrogen and they might you know when they do the training test they might actually set the atmosphere on fire and so in the movie Oppenheimer goes to Einstein uh and you know describes this possibility, asks him for advice and uh uh uh Einstein says uh well this is very serious. If you you know figure out that

this is indeed something that can happen then of course you shouldn't do it but moreover you should tell the Nazis that this is something that can happen. So they don't do it because you know the thing is so important that you should even collaborate with the Nazis.

uh and then he tells them to go to a different physicist who actually understands the math and sit down and carefully check. Uh so so the conversation with uh Einstein didn't happen. They invented it for the movie. But you know everything else did actually happen. uh Edward Teller did uh kind of consider that possibility did suggest that to Openheimr and Openheimer did take uh a train all the way from Berkeley to Michigan to talk to Arthur Compton and they sat down and they spent the whole day calculating uh and

figuring out whether something like that can happen or not and and then they uh kind of convince themselves that it's not going to happen that it's safe there will not be a chain reaction that sets the whole atmosphere on fire and destroys all life on Earth and and uh later Compton wrote in his in his memoirs that indeed you know they were really worried and if it turned out that there was a risk like that and yes certainly they would have to collaborate with the Nazis to to to kind of not do that. So okay so what's what's the moral

of the story? So, so the uh uh many many people last time, a few people last time kind of uh uh brought up this um you know question about um you know advocacy versus uh uh research and and and and and the analogy here is now a bunch of people uh uh AI AI scientists are telling us that there's you know very large risk uh associated to developing AI and we would really like to take a train to someone and sit down with them and calculate and you know figure out whether the risks are large or maybe they're not large and

uh maybe nobody should do it or maybe we can do it in a particular safe way. But unfortunately we do not have a scientific theory like they had scientific theory of uh nuclear physics. We do not have scientific theory of uh intelligence uh of uh you know uh neural networks and uh and so we cannot do that calculation and that's that's kind of a big difference and so so there is you know a big debate in the AI safety community about working on policy versus working on technical uh

AI safety uh questions And I I don't have an answer. I do think that advancing AI regulation is very important uh for reducing catastrophic risk from AI. Uh so there are small things that you know that we can do. If we think that this is important, we can write to our MP. Uh we can you know talk to our friends and discuss this and try to understand the issues better.

uh at the same time uh you know even very good regulation probably just buys us some time and eventually we would need to have some kind of clarity around these issues. Um and uh even if there's no good regulation uh there is still huge amount of uncertainty and uh there is still likelihood that we have some time right that some uh worst types of catastrophes won't happen until until some time and and and so in this case we do need to do the research and uh uh and finally uh good progress in understanding the systems is really

helpful for informing regulation. Um so these are you know some of the points why I think uh this is a difficult large problem and people should be working on it from different angles and every person should decide for themselves what what's what's the best approach but I think any way in which we can reduce uncertainty and increase our understanding our understanding of things will be very helpful and especially as scientists we should try to be honest not try to you know uh make claims and predict ictions

that we think uh uh you know will guide society in some particular way we want but we should actually talk about things the way we understand them in the most honest way. I think that's a more uh effective strategy long term and unfortunately there is just so much uh uncertainty that that it's difficult for us u you know to uh uh to uh give very good uh policy prescriptions and reducing that uncertainty is would be super super crucial. So that's my little spiel in the beginning. Um anyone has comments, disagreements?

Okay. So this is I think part of the motivation about uh uh working uh on AI safety and and I guess another part is that uh if you forget about you know uh risks to us and and and and how will it will affect us and just think about from a purely curiosity point of view this time is super super exciting. It's like the beginning of 20th century when you had all of this uh you know Michaelelsson Moly experiments you had black body radiation you had um a lot of you know very exciting interesting new information but the theories weren't

there yet and now it's even more exciting we have all of these interesting empirical observations about intelligence about language about uh fundamental questions you know we thought about for hundreds of years and could resolved and now we may be on the verge of resolving them because we have this new experimental information and and it would be really you know interesting to try to understand them.

So yeah >> I I have some policy versus uh safety type discussion questions. So that we have so much risk uh and you uh put up the picture from Oenheimer if if you can compare that kind of risk compared with that kind of risk then um isn't it wise like some politicians say that we should just completely stop training this and that and we have the science science should be funded any training that happens maybe it could still be used for scientific purposes but then is the are the companies

argument that we cannot actually improve scientific understanding without training in the way they currently fit which things aging that can become dangerous. What's the company's argument against? >> Yes.

>> Uh this type of uh reason that they should only train for scientific progress. >> Mhm. Yeah. So I absolutely agree with you. The main difficulty is coordination. The problem is that um yeah the argument is that yes it would be great if everyone stopped but we don't believe the others will stop so we might as well continue >> then that's why you should collaborate with others are the American and Chinese uh researcher not collaborating enough

>> that's right that's that's why you should have international agreement that's why international agreement is really crucial Yeah, that's that's that's all the problem, you know, coordination. There are people who disagree who think the risks are uh you know, exaggerated and we should just uh continue. But it seems that there's a huge fraction of uh employees at AI companies who think we should stop apparently including even their CEOs.

Um but uh but it's a difficult coordination problem. So for example, AI 240 we discussed last time is you know about what it would take to make this coordination happen in the situation where the US and China don't believe each other and that's why you know the whole of this we have all of these mechanisms for installing uh you know monitors into the hardware and having groups monitoring each other. So it's it's fairly complicated in terms of logistics.

Okay. Any other comments? Okay. And so some of the very interesting uh observations uh made about uh uh LLMs um include uh this scaling loss results from uh 2020 and uh some of them a little bit earlier, some of them a little bit later. Um and and and uh I talked a few years ago to uh uh to someone who I went to grad school with uh who who worked at OpenAI at the time and his perspective was uh that you know really seeing the scaling loss convinced

him that scaling is the way to go that you can predictably improve performance of uh LLMs by just increasing compute and data and you know we just need to pour money into it and you know that things will happen uh that things will improve uh so so I think it's an interesting uh result to to look over and it's also a result where we still don't have complete uh understanding of why uh scaling laws have these exponents we have a few different perspectives on why uh this is the case but um we don't have

a complete picture yet so just to describe the setup we have a language model uh uh with uh We can uh take uh any uh sentence. You can break it into parts which are called tokens. Uh each token could be a full word, a part of a word or you know a comma or a space depending on how you break it.

Um and so then the training is very simple. You give uh a collection of tokens and you try to predict uh the next token. uh you produce a probability distribution over next tokens and uh that should follow it and then you com compare with the next word that appears there. And so uh you can think of the uh large language model as uh being parameterized by some very large uh dimensional vector which corresponds to all of the weights of the neural network.

Okay. So, so what is the loss? Uh how do we measure how bad we predict it? We take uh the average of negative logs of the probabilities of our probability output compared to the actual output that uh uh that is in the training data. And so training will try to minimize this quantity. So in particular it will try to maximize the probability that the output uh >> S is training data.

>> Uh so here S is the training data. Yes. >> So so let me so so so so what are the two things the three things that kind of uh uh determine what we have in in the neural network. the the big parameters are the model size. D is the number of uh tokens the training data and then C is uh how many floatingoint operations we use uh during training and uh you can relate uh so this is what actually they did in the in Klan paper they observed that uh okay uh so there's no point in uh if you make some simplifying assumptions about not taking

the same uh tokens and uh doing gradient update on them uh the same number uh several times. If you just you know use all of your tokens uh that you have in the training data and you for each one of them you do a gradient uh uh update then you can relate uh the num the model size and uh the amount of training data you have to uh the number of floating point operations that you have. So you have a few of them for a forward pass and then you have uh a few more for the uh for the computation of the gradient for back

propagation. And so then the question was how to uh correctly allocate this limited compute resource uh you know between uh the model size and the training data. Should you take make the model larger and the training data smaller or should you make the model smaller the training uh data larger? And they found spec uh concrete very nice curves. So these are uh uh log law plots.

Uh so these correspond to uh uh the loss. And if you fix uh the other two and see and try to understand how the uh uh loss changes as you scale uh one of these parameters, you see a very nice uh power law where the dependence is say the data set size to the power of minus some positive number, right? And it looks like a line on a log log plot.

Uh so so that was uh really um interesting uh that that it kind of held across different architectures and uh across different uh scaling regimes and seemed like that there is some underlying reason for this to be true. And also very useful from the perspective that you can uh uh train a small model with small uh number of uh data points and then you can figure out what the line is and you can predict where where the next point will have to go.

So we don't have complete understanding of why this hold and in fact Kaplan's uh empirical laws were later updated in this Hoffman chinchilla paper that's also in the reading material they found that uh if you do uh experiments on bigger models and uh you do uh training a little bit differently you don't uh you stop at a different time then actually you can find uh a different slope slope that's better than this one.

So they made more accurate uh predictions but kind of the general result uh has been replicated by many people. So I wanted to talk a little bit about some uh theories of of of why these types of scaling loss might hold. So let me move this and stop this. Oh no, I think I need to um Let me turn the lights on.

>> I'm not sure where his lights are. The light switch is on the outside of the classroom. >> Oh, thank you so much. Okay. So, uh any questions? Uh So uh so we have some uh input space x uh let's say we have some probability distribution on the input space and uh we want to learn a function f from the input space x into r.

And so our uh neural network um is a collection of many uh many many uh parameters uh many weights but uh in the end what you get is some kind of function from the input to the output right so theta is going to be in some space r to the n where n is some large number corresponding to the number of uh weights and so It's a map here and uh we will want to measure how different uh our function uh

corresponding to our neural network is from the desired function. So we have some way of measuring loss. So the loss corresponding to parameter theta uh we will take it to be 1/2 the L2 norm of the difference. So uh so this is different from the negative log likelihood loss that that uh we have for LLMs.

uh however it's actually much easier to do theoretical kind of computations on this loss and if uh and and you can for example what you can do so so different from the loss uh theta being the station negative log P >> uh don't worry. So the output is some probability distribution. Uh however what you what you can uh do is uh you know but if you pick a particular type of uh probability distribution which is just

uh normalized uh Gaussian e to the minus uh F theta of x squig you normalize by sigma squared. Then if you plug that in then what you'll get is uh the same up to an additive constant has to be square.

So it's a particular type of simplification that we're making here. Okay. And so we are >> again what is Thanks. This is >> this is this is a function we want to learn. So so we assume that our probability distribution is just you know Gaussian with some >> so f theta is is the output neural network and fstar is the correct thing we want to learn is is the target function. Is this a realistic assumption

on like text data that it becription desributed in this way? >> Uh not not not not really actually. I mean um I mean it it dep I mean the very idea of having you know one correct answer one correct continuation is is a little bit suspect.

>> It is an assumption. Yeah. >> Uh mean square error. So this is MS MSK MSK loss. >> It's kind of hard to see the bottom. >> Okay. Sorry. Uh yeah, I'm I'll try not not right there. Okay. And uh so how are we uh optimizing over parameters? Well, we use gradient descent.

And so what really is happening is a stochastic version of a dis of of a discrete version of gradient flow. But we will use uh here continuous limit just just the gradient flow uh where the derivative of the parameter with respect to time is just equal to negative uh gradient of the loss of Um and okay so it will actually be convenient to make some changes here.

Let me define g theta of t as um of x as the difference between f theta of t minus far. I mean equivalently you can you can imagine that you're trying to learn the zero function although it's maybe not not so interesting in this case. Um and so okay so then we can re rewrite uh the uh gradient theta of uh the loss as okay so this is gradient of 12 integral / x of g theta uh of t of x d mu.

If you assume enough regularity here then we can differentiate inside the integral and so then we will have integral here g uh t of x g theta of t of x times the gradient of uh f theta of x or actually I could I could just write Give me that. Okay.

>> Uh, I'm missing a square here. You should go d theta tx equals the difference from the distribution. What is x? So uh so these are x's and this is this is t. So so x is the input function. So so x x is the in input uh data, right? And and t is a type parameter.

We're trying to train uh our neural network. So it's changing with time. Um okay. So then uh we observe the following. So we want to try to understand uh how does our uh neural network function changes uh with with respect to time how does it evolve. So we take the derivative of uh gt of x. So that's just the difference between our output and far.

And well uh so that's uh so uh right so so so this is uh you know so g depends on the parameter theta which depends on t. So here we have chain rule. So it's going to give us a a gradient of theta of t g t g t g t g t g t g t g t g t g t g t g t g t g t g t g t g t g t g t g t g t uh theta of t x of theta of t.

Now what we can do is we can substitute uh this expression. So this is going to be minus gradient theta of t g theta of t x uh times the gradient of theta of l t. Uh then we can uh put this in here. So that's going to be minus uh gradient uh theta g theta t uh x gradient integral gradient g of theta of G X prime uh G

prime D mu X prime and then we can take the integral out uh to get radant theta g theta T of X gradient G theta of T X prime G that's okay >> uh well Uh uh so we know that the derivative of the uh parameter is minus loss but the loss is uh I mean I I erased it but uh uh no I did it's right here right so the the loss is in

is the integral right over all x prime still element on j x but it's just otherwise that x appears twice >> yes so we are integrating over a different it's a different dummy variable right so we're integrating over all uh yeah so the rate of change of of of the parameter corresponds to uh uh >> to the to the gradient of l but l is the integral over uh over the difference between f ofx and okay so so now this is the same thing as uh so this is the same thing okay I'm I'm writing here and it's hard to see

but uh and they also told me not to write here uh okay uh so let me let me still write this but uh what I want to say is just uh we can now replace g with F uh because they only defer by a constant uh in theta.

My terrible writing doesn't help either. Uh but uh okay. So now let's give this thing a name. Uh so this is x x prime. Let's call this k uh x comma x prime. And so then we can uh rewrite.

the derivative of uh our uh output network in terms of this operator. That's going to be just minus k x prime of g to x prime d mx. Okay.

And we can actually uh give uh this operator a name. So if you have uh so defined operator t uh where if you apply t to some s then that's just uh integral of uh k x GB, you need a negative operator.

>> Uh, do I want do I want the negative for the operator actually? Uh, uh, no, I uh maybe I do not. Yeah, I don't think I I do want the negative.

>> Yeah, completely external. These two are equal. these two linear products. H. So, so the way we define G uh we define G theta of T of X to be just the difference between uh our uh output neural network function and some fixed function the one that we want to learn the target function that we don't know what it is.

I mean we here here in these expressions we know but uh uh as we start the training we want to converge there and because we're taking gradients with respect to the parameter it doesn't change with the parameter and it disappears.

>> Okay. >> So in order to find this operator t we still need to fix f and f star like the the one we have the one we want to learn because it's uh in the definition of k just put a different size that could be the difference between something else.

>> Uh that's right. So they uh so this operator K does depend on uh our neural network. It's it's it's an operator that's dependent on our neural network and it's also dependent on time. Yes. So we can think about it as a time dependent uh as a time dependent operator.

Uh so this turns out to be a very uh nice way of thinking about uh about this problem. Uh so then you can describe the uh uh trajectory of your uh uh now let's just applying this uh operator to it. uh and and and and this is a very nice operator. You can see that it is uh symmetric.

You can see that uh it is actually positive semidefinite. So so t is positive semidefinite. Let me actually maybe write that down. So uh so if you apply t to uh if you take l2 norm of t pi uh subsi well that's going to give you uh so that's integral t s p s p s p s p s p s p s p s p s p s p of x s of x du of x. Uh,

well, that's really going to be a double integral of kt uh x x prime s uh x prime s of x d mu of x d mu of x prime. And and then you can rewrite that as uh uh just the dot product of uh s of x gradient theta f theta of x uh d mux dotproduct with um s x prime gradient. So that's just going to be the norm

of uh well but these two things are the same. This is just going to be norm. So this to be greater than zero. So we have that t is a uh self adjint uh positive definite operator.

Is is this okay? I scribbled down there. >> K some kind of a >> Yes. So K uh so K they call it the kernel and uh it's a very useful thing you know to to approximate your neural network and in fact so there's a particular observation uh that uh goes way back to the 90s uh in you know by people in this department that if you take uh the width of neural network very large then uh and if you make the learning rate kind of slow compared to the width of the neural network. Uh then this K becomes converges to a constant

kernel. And so you can think of your learning as just learning with this particular constant kernel. And so then all you need to understand is how different IEN values functions of this kernel are are alert.

>> Well, you come up the K being large or small means what? is large means that moving X kind of is opposite of just kind of it's exponents right and then >> right yes so it's a kind of a correlation between between you know moving in one direction and the other direction for different inputs yes that's right so which inputs are kind of you know pushing in the same direction and which inputs are are are pushing in different directions exactly and and so it's uh convenient to assume that it's also compact so we will assume

that uh kxx x prime uh is less than infinity. So that means that t is a compact operator. And then a spectral theorem tells us that uh we have uh a sequence of values that are converging to zero.

So lambda 1 of t greater equal than lambda 2 of t greater equal than lambda 3 of t with uh finite multiplicities uh uh all greater equal to zero uh and accumulating to zero um and uh and we have corresponding bases value zero Yes, if it's uh it's yeah if it's uh yeah yeah yeah that can happen uh if you have a particularly simple curtain yeah

and we have a corresponding basis of functions See? Okay. And so now we can uh rewrite the key objects uh that we want to understand as uh linear combinations of these functions and uh use a spectral approach to kind of understand how learning happens. And we'll see that uh it leads to some kind of uh power law uh scaling law for the loss.

Uh okay. So, [clears throat] so we can write the prime our target function f ofx as uh a linear combination from x to infinity of uh a a 18 and uh so so here we're now making a a serious simplification a serious simplifying assumption is that we will assume that uh KT and that that that's TT and

therefore all of the uh values and again function is frozen in time. And so this is indeed something that happens in particular regimes of uh uh training uh neural networks. They're not the most interesting ones, but they're kind of the easiest ones to analyze. And what usually people do is they analyze this regime where this uh operator is is fixed with time and then they add various perturbations uh to understand how uh what can we do when it's actually evolving. So, so this regime is known as

neural tangent kernel regime and this uh k or t is uh called neural tangent kernel and the igen values the sorry the igen functions of this operator are often called features or some something you know sometimes you multiply it by square root of the uh value and you call that feature But so various things derived from this functions are called features.

And so the regime where this operator is changing is called feature learning regime. And it's more interesting and we know that it's important that neural networks do that that uh feature learning is happening. Uh but usually the first step to to to develop theory is to look at this uh more simple uh anti-kime brings something.

>> Oh, I'm not sure. >> Not it could be it could be helpful but not for I don't think it's you know for complicated um yeah maybe there is a way of thinking about it the right way but I'm not sure.

Anyone has Yeah. And when is this frozen in time approximation valve? Is it in the infinite width limit? >> That's right. Very very large width limit uh compared to uh to the amount of of data. So actually what are we looking at here? So what is t? How is it related to everything else? Well, we can think about it as being very closely related to data. So we're really thinking about uh fixing some number of parameters and then trying to understand how scaling happens as we increase data and uh the training time is our proxy for for how

much data we have. number of training steps is is is something that uh we measure data with. uh and and we are here we're in the situation where uh the width is very very large and the uh gradient descent step is small compared to the to the width and also so in practice this is kind of associated with memor memorization and uh you know the feature learning is more associated with generalization.

Okay. So uh so then we can just explicitly solve uh this equation. So we have uh we can write uh we can get rid of the t's here, right? So yeah, sorry. Yes. So exactly we're getting rid of the t. So we just have a linear combination. So here a k is the uh l2 projection of uh f onto of tk onto uh it's it's a projection of our map onto

the function onto into specific function and so let's uh write down basis Yes. Yes. Yes. That follows from the properties of self adjoint operators. Now, uh we do need to assume that far lies does not you know uh lies entirely in the um uh in the complement of the uh uh of the kernel of K.

Um okay. Uh so let me define R K of T to be the projection of GT over FK in L2. Uh yeah. So, so, so let me erase that and just so, so what exactly are we trying to solve? Well, we're solving this specific very simple problem. We're looking at uh dt of g theta of t of x = 2 minus tg.

That's that's the OD that we want to solve. Uh now we define r k of t to be uh gtk l2. Uh so that can be written as you know sum of uh so so gt can be written as uh sum of our case t pk of x And so all we need to do now is solve is solve an OD for for RK which is quite straightforward.

So the derivative of RK of T is uh can be written as the derivative of GT effective PK the L2 norm that well now we can substitute minus T uh GT So that's now minus GT TK because of self adjointness.

Now we know that FK is an igen function of T. So we get uh minus lambda K gt. K 2 and that's just minus lambda K R K 2 that look okay.

So we get a assuming that the uh kernel is frozen. we get the simple OD uh whose solution is now uh R K of T is the value of RK at 0 time E to the lambda KT and okay so let's assume uh that uh Our f at point zero f of zero of x was just zero just a zero function assume we start uh learning from the zero function uh for simplicity then uh we have that uh r k of t is equal to uh minus a k it's the coefficient of far e to the negative

lambda kt So we are you know exponentially approaching the correct uh uh function the correct the correct component in the projection onto the uh space of of k. And so we can write down uh an expression for or g t minus sorry I hard to measure manage the board here minus summation k a k uh e to the minus lambda kt dk Okay.

Okay. And then f of t ft the actual network that we've learned is uh a k * 1 - uh e minus lambda k tk questions here. >> Okay. So let me just write down what we get from this. Uh let me erase >> yeah this a zero function then there should be one term the space.

So >> yes >> it's a zero function. So for example like one is a1 is con >> if if we start from from the zero function in the beginning. >> Yeah. But but our loss is zero minus f star right so our loss is um so our loss then in the beginning will be just the l2 norm of far uh so so then here's a a proposition that's not hard to uh

to uh to get from from this is that uh so claim Okay. Was satisfies L of F theta of T. Uh okay. So I I forgot to put down the assumptions. So suppose we have information about how values decay and how the uh aks decay. So if uh lambda k decays like k to the minus alpha and uh a k squared uh decays like uh k ^ minus1 minus alpha beta

then we have a simple power law or scaling law for for loss it's going to decay like t the R minus beta is training time. And so the proof idea is just to break the IGEN functions into two groups depending on how large the IGEN values are. Uh right. So, so let's uh so let's take this cut of m to be the uh the integer part + 1 of t ^ 1 / alpha and then consider uh values of k that are larger compared to m and uh values of k that are small

compared to m. And what what you'll see is that you know for large for values that are large compared to m uh this uh this term is so so this term is going to be bounded away from zero. It's not uh so you're not going to learn this uh those functions. you're not going to learn these modes. But for smaller than m, you will learn those modes and then you can separately understand what the loss looks like for for the uh functions where you're close to uh uh to to the correct function and for those where you're far away to the correct function

and this will give you a particular uh scaling block. Yeah, >> there different way to see that it will not depend on alpha but in rescaling that makes it dependent on that. >> Yes. So they are kind of tied here, right? So so so the uh so you have a rate rate of decay for functions for values and for uh uh you know for the projections of the target that you learned. You kind of need both in order to determine what the uh what the decay looks like. But does that answer your question?

>> Not really. >> Not really. Okay. Sure. Yeah. >> Okay. So, next week uh we will have uh a guest lecture by Anson Hur on Wednesday uh about epoch's work on uh modeling capabilities. Please give me your uh feedback. We can do you know various styles of directions various styles of I'm experimenting a little bit. So today I tried blackboard talk not sure how that went if it was very useful for you or if more you know slides talks are are um interesting and we will talk a little

bit more about various theories of deep learning and then later we will talk about we will move into mechanistic interpretability and geometry of activations that's that's
