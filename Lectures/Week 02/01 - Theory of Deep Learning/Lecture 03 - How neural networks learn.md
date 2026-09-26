# How Neural Networks Learn

*A readable companion to [Lecture 03](https://www.youtube.com/watch?v=q_Dj4-QNJV8). The source is YouTube's English auto-translation of automatically generated Arabic captions. This article smooths the prose but cannot repair technical errors in the source; use the recording and slides to verify details.*

## A broad field with open questions

The lecture surveys several approaches to understanding deep learning rather than claiming to give a complete theory. It touches on learning theory, neural network generalization, optimization, neural tangent kernels, and training dynamics. The speaker encourages students to focus on questions they find tractable and interesting, since the field is too broad to cover fully in one session.

## Scaling and training data

The lecture revisits Kaplan's scaling-law work and the Chinchilla result. These papers ask how loss changes with compute, model size, and training data. Chinchilla's analysis considers a broader range of training runs and argues that, at a fixed compute budget, many models had been trained on too few tokens relative to their parameter count.

This is an empirical account of training behavior, not a complete explanation of why neural networks generalize. Scaling laws help describe regularities and inform resource allocation, while theoretical work asks why those regularities arise and when they should be expected to continue.

## Neural networks can fit randomized labels

Classical intuitions often suggest that a highly expressive model should overfit and generalize poorly. The lecture uses Zhang et al.'s CIFAR experiments to challenge that simple picture: neural networks can fit training data even after labels are randomized. This shows that fitting the training set alone does not explain generalization.

The result does not mean that neural networks always generalize well. Instead, it motivates closer study of the biases introduced by architecture, optimization, initialization, and training data. Which solutions are favored among the many functions that fit the observations?

## Soft inductive biases and training dynamics

Near the end, the lecture describes a “soft inductive bias”: rather than ruling out complex solutions entirely, learning can favor simpler solutions while still allowing a large function class. The linked reading appears to be Andrew Gordon Wilson's [*Deep Learning is Not So Mysterious or Different*](https://arxiv.org/abs/2503.02113), but the auto-translation does not preserve the citation title clearly.

The lecture also mentions recent work tracking the neural tangent kernel spectrum during training and relating its eigenfunctions to what the model has learned. The caption does not identify that paper. Its title and authors should be added after checking the corresponding slide or recording.

## References

- [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) — Jared Kaplan et al. (2020).
- [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556) — Jordan Hoffmann et al. (2022).
- [Understanding Deep Learning Requires Rethinking Generalization](https://arxiv.org/abs/1611.03530) — Chiyuan Zhang et al. (2017).
- [Deep Learning is Not So Mysterious or Different](https://arxiv.org/abs/2503.02113) — Andrew Gordon Wilson (2025); likely the soft-inductive-bias reading mentioned near the end.

## Full lecture text

The text below retains the complete available English auto-translation and groups caption fragments into paragraphs. The source captions were automatically generated in Arabic; translation and technical errors may remain.

Okay, let's begin. I'm going to turn up the volume here. Yes, this is our third lecture. Let me start with some advertisements. Firstly, we have a regular seminar from 1:00 to 2:00, usually in person on Mondays.

Today's lecture is presented by Ruby Hudson and is titled "Transforming Correctability: Building Goals That Accept Updates" . There is a problem with AI security, which is that if you train a program to be adept at accomplishing various goals, you may realize at some point that the goal you taught it is not the goal you want it to achieve.

Therefore, you want to be able to modify the goal. However, if you are training a program that is very determined to achieve the original goal, it may not accept a change of goal during training.

So, how do you create a training protocol, goal, or entire system so that you can modify the goals during the process? This is known as rectifiability, and Ruby will talk about one approach to solving this rectifiability problem. This is a summary of his speech. Well, actually, I realized that I wanted to put a Zoom link for our seminar, because it wasn't

on the Fields website . Okay, I'll do that later. correct. If you attend the seminars of the Mathematics Department, you will find them on the website .

amazing! Thank you very much. Thank you, Brian. Good. Another announcement is that we will be hosting a lecture on Wednesday by Anson Ho from Epoch AI, in which he will talk about Epoch AI’s work in modeling ability pathways. Well, you can read some of their works. I sent a link in the ads.

You can look at their various research papers and think about questions you might want to ask them. Yes, Paulina. Yes, maybe. Yes, actually, I need to make sure of it.

By default, everything is recorded, yes. Okay, excellent. So, our plan for this week, in the overall outline of the course, was to cover learning theories, especially deep learning theories. Perhaps it was a bit ambitious to cover the entire theory of deep learning in one week . So, we'll see which parts we'll be able to discuss.

But it will be somewhat incomplete, and there will not be a perfect match between what I will talk about in the lecture and what is suggested in the reading materials. So, this is a broad field, and I think it makes sense to focus on the things you find interesting and try to understand them as much as possible without trying to understand everything.

I will focus on some things that I find interesting and important at this moment, but since I am relatively new to this field, these things may not be the most important in theory from a safety perspective. But the general analogy we are using here is that we are, in a way , in a situation similar to that of physics in the early twentieth century, where we had

interesting observations, such as the photoelectric effect and the Michelson-Morley experiments , but still lacked a complete understanding and interpretation . We do not have a perfect theory that allows us to think about thinking machines, and it would really be helpful to make progress in this theory from an AI safety perspective to understand the risks and challenges.

So, what are the different experimental observations? Okay, we talked a little about the laws of measurement last time . I will give an overview of what we discussed in the previous lecture. Then, of course, this observation is the most prominent, because it is the fundamental observation of how deep learning works. The neural network is trained on specific data, and then operates with

high efficiency on data it has never seen before. It generalizes excellently. This somewhat contradicts the prevailing intuition in the previous theory, which assumed that it was difficult to generalize things well, while it was surprisingly easy to make these systems generalize well. It is not wrong to say that it contradicts the theory, because

the theory was focusing on the wrong things in the wrong situations. She was very pessimistic about the things that could be learned and the things that could not be learned, and that is what we will discuss today.

There are some other interesting observations. Again, it is still not entirely clear how important each of them is, especially with regard to safety. Therefore, an interesting observation about data understanding that has attracted a lot of attention is that when a model is trained on certain tasks, it may achieve perfect accuracy on the test set, and then continue to

learn. Therefore, the error rate is not equal to the accuracy rate. It achieves perfect accuracy in every example on the test set, yet the error rate continues to decrease.

The model continues to learn, then its performance in the test declines, and the scores on the unseen data suddenly drop. Therefore , this stage occurs where the model achieves perfect accuracy on the training set, but not on the test set, and then a sudden shift occurs. This can be described as a phase transition, and indeed, there are some

physical theories that explain the similarities between this transition and phase transitions in physics. From a safety perspective, it may be important to understand how these sudden shifts occur.

When does a neural network suddenly become more efficient at performing a task compared to its previous one? Finally, there are many other interesting phenomena related to the structures found within neural networks, which we usually call " features". There is a striking similarity between neural networks with different structures and trained

on different data, which is known as the Platonic representation hypothesis. There is a great deal of linearity in these features , which is known as the linear representation hypothesis. There are interesting effects where many concepts become intertwined, which is known as unconscious learning.

Another type of phase transition is known as contextual learning, where a set of examples is presented to the model about what you want to infer, and the model can draw inferences from these examples without actually having to be trained.

Therefore, an interesting inference does indeed take place in the weights of the overtrained model . This is what small models or models in the early stages of training do not show, and then suddenly begin to show contextual learning, and can also be described as a kind of phase shift. So, there are all these interesting phenomena about which we have some partial theories

, but not a complete understanding. These are the phenomena I would like to discuss. I'm not sure we'll be able to discuss them all today . Today we will focus only on the laws of analogy and generalization, and perhaps we will touch on contextual understanding and contextual learning later. Yes.

Well, well, it's more like...the intuition is that , you know, if you learn a new language, you can sit down and understand its grammar. But this is not how humans actually learn. They hear things and memorize them, then suddenly things become clear and they understand the rules of grammar, right ? They understand the rules behind the

many examples they have seen. This is what this word is trying to describe. At first, the model memorizes things as they are, and continues to memorize, then suddenly things become clear and the true rule behind the examples is understood. Good. So, the question is: where did the word "grokking" come from? Why is it called by this name?

I think the definition of the word " grokking" by... oh, interesting. It's called "grok". Okay . There was a sub-community of hackers, and they adopted this word to mean "understanding" or " assimilation". Okay. Okay. Okay . Okay. Oh, wonderful. I didn't know that. Are there any other questions? Good. Okay . I will make sure to repeat the

questions from now on. Good. So, last time we talked about the laws of measurement, which was an observation that, in particular, they were very influential for large language models , but they also apply to other types of neural networks that learn other types of

things; But for large language models , their importance lay in the fact that they looked at a very wide range , didn't they? Then the "Chinchilla" paper looked at a larger range than the "Kaplan " paper. They found a significant decrease in loss on a logarithmic scale with increasing computational power, or amount of data, or number of

parameters. These factors can be considered interrelated. When a fixed amount of computing power is reached, it becomes a trade-off between the amount of data used for training and the number of parameters.

Computing can be considered equal to a constant multiplied by the size of the data multiplied by the number of parameters. Good? This result was very significant historically, and we wanted to study some of the theories that explain it. We still do not have one comprehensive theory that explains everything, but we have studied a simplified model, and although this model does not describe

the laws of measurement in the most important cases, it appears in many theories. Therefore, I thought it would be good to bring it up. Okay, we've looked at the difference between the objective function, you know, when you start training, you don't know what it is yet. Interesting.

Do I need to click to start playing the video? no? cancellation? Close it. I am waiting. Good. Is everything alright? Can everyone see? I think so, yes, I think that's true. They are being registered.

Good. So, what exactly are we looking at? Okay, we're looking at the difference between...okay. The one on the laptop. Should I turn it on ? Yes. Is this...? Thank you very much.

Good. Thank you. correct. Good. So, what's going on ? We think of this , you know, as a large parameter space where each...in a space... we have a parameter space of dimensions N, and for each...θ, we constrain a function fθ. So, this will be some function from the data point space to R. So, this is the problem we want to learn, and we want to find a

way to converge θ to the objective function f*. Now, what we do is we start with a random point in the parameter space. We distort our parameters in the direction of minimizing loss.

correct? We look at the loss gradient with respect to the parameter θ. And we pay it. So, we don't know. Does this depend only on training data or on all possible data?

It's just training data . Therefore, X is the training data. Okay, I mean training data and testing data. Yes . So, we want to define our function later on the test data as well, right? So, F is ...is that how it will be calculated?

correct. Therefore, this is a perfect approximation; we cannot calculate L on all the existing data. Therefore, we use experimental loss and experimental gradient. correct. correct.

So, here we completely ignore the important question that we will address in Part 2 about the difference between training loss and test loss, because measurement loss seems so similar that we do not see a difference between them. This is what we will explain in the second part, why losing a training session and losing a

test are so similar . So, this is the data . So, this is the equation we want to use to develop our neural network. What they noticed is that if we define a certain function K for two inputs, which we call the neural tangent kernel, it is a function that depends on your position in the parameter space at θ, looks at the gradient F of one input data point and the

gradient F of the other, and then takes the dot product between them. This type of measurement measures how similar the sensitivity of gradients are to different data points. Next, we can use this function to rewrite the gradient flow. Therefore, θ equals - and after some calculations we performed earlier , it can be written as follows: The derivative of G

with respect to T equals - this operator applied to GT, where the operator integrates GT with respect to KT. Therefore, K really does depend on θ. But θ depends on t. But this may be true. Yes, then it is k( θ). This is correct. This is correct. It should be k(θ), but since we are thinking of it along this path, you are right. Perhaps this is not accurate. Alex, do

you have a question? Yes. If you know θ, you can calculate it. Yes, you can calculate it. Yes, it's that simple. At each θ you can calculate. Yes. Therefore, we put T because we care about what happens along the path. exactly. Yes.

Good? So why was this an interesting rewording? Well, it allows us to solve this equation explicitly because we can then write the eigenvalues ​​of the operator T. We have shown that this operator T is self-conjugated, positively determined, and compressed.

Okay, let's assume they are compact if we assume that the integral of K is X. So, the question is: Is X usually a subset of RNs with a Liebig measure? Okay, yes, that's how we can think about our data points. Well, not necessarily...yes, we don't want the Liebig scale.

We probably want some kind of limited scale. Anything that fades into infinity. Therefore, we want it to be, generally, a kind of space of possibilities. Therefore, we can write the set of eigenfunctions of T.

We can look at the projections of the objective function onto the various eigenfunctions. This is an L2 projection. Then, this leads to an ordinary differential equation , the solution of which is the sum of the eigenfunctions where the constant in the foreground converges to the projection of each eigenfunction of the objective functions f* , and the rate of convergence controls the eigenvalue.

Yes. Therefore, we can consider a specific choice of eigenvalue decay coefficients, objective function coefficients and their projections. If we choose an alpha greater than zero and some values ​​of s greater than zero, and we want the objective function to have a finite L2 criterion, then s must be positive. correct? Otherwise, it is not an L2 function. Well , with these options

for diminishing, we get a very good power law for loss. This is what we explained earlier, and you can write it in this format. Yes. We never explained anything about the structure of this formula. correct.

So, how do we incur this loss? Are these assumptions that indicate it has a good structure that we know about? correct. We made no assumptions about the structure except that we know it changes with the flow of the gradient, right? It could be something as simple as a linear grid.

Yes. Yes. It assumes that your network learns well. correct. correct. So, there is an implicit assumption that I include here, which is that the solution lies within the scope of the self-functions of the video call.

Well, actually, the target function falls within the range of eigenfunctions of this operator, right? So, if you have an architecture that can only learn linear functions, such as deep linear networks , what you will learn is the best linear approximation, right? Therefore, the condition will not be met. But if the tangent kernel contains the

target function within its range of self-functions, we expect it to learn. It seems to me that by manipulating these functions on λK and AK, I can get almost any L2 error by choosing different decay rates for these two functions. Is there any reason why this is a realistic assumption? We will address that. Yes, we will address that. We will come

to some observations. I think it is not entirely clear how realistic this assumption is, although we do see it in some cases. I mean, with the exception of this assumption, this shouldn't happen in real-life data.

It appears that what is happening in some real-life data is puzzling, you know, for large linear learning models in a feature learning system.

Okay, I'll explain the proof a little. It's in the notes. The ordinary differential equation we have is the difference between f(θ) minus the objective function projected onto the self function.

Therefore, the gradient flow will give us this simple differential equation. We assume that our initial function equals zero, just for simplicity. If we assume something else , there will be a small correction factor here.

Therefore, the solution to this differential equation is an exponential function. Okay, we write the solution for all the differences between f(θ) and f(θ) and this is what we will get. We will obtain that f(θ) converges to f(θ) with eigenvalue-controlled decay . This is what we get for losing. We can now try to understand, depending on the sizes of the eigenvalues, which of

these eigenfunctions are learned and which are not for a given time value t. We want to understand, we want to deduce a standard law in t. Therefore, the appropriate option is to consider m to be equal to the integer part plus one of t raised to the power of one over α. Well , this leads to t multiplied by σk, where k is less than or equal to a constant in the case that k is

greater than or equal to m. Therefore, we can divide the total into two parts. The part where t is large, where k is greater than m. here. Then this exponential function −t multiplied by λk is bounded away from zero, so it will be a constant value.

The loss in this tail becomes greater than the sum of k from m to infinity, k raised to the power of negative one minus S. Therefore, we can use that, by substituting the sum with the integral, we can use, we can, we can find a minimum loss. Therefore, we will get T raised to the negative power of S divided by α, up to a constant value.

correct? And remember that Alpha, right? It represented the decay of eigenvalues, and S represented the decay of objective function projections onto eigenfunctions. Well, in short, if we have intrinsic values, well, well, that's decay...did you understand correctly? Let me go back . Or have I confused the two? Well, Alpha

was...yes, that's right. Alpha was the intrinsic value. Therefore, alpha is the erosion of intrinsic values. Sorry, no. You are right. So, this is the decay of state A, and this is the decay of the lambda state of the eigenvalues.

Well, what we have is that if the subjective values...well, if the projections are fading too quickly, that's a problem. correct? Then this constant becomes small, making learning difficult. correct?

Good. Yes. Sorry, I was confused for a moment. Is this the right way to think about it? Learning happens quickly if this number is large, right? So this will be a quick mile.

Therefore, this number will be large if the alpha K decay is fast , so we will be able to learn it while the lambda K decay is small. Well, similarly, you can find a higher term than K equals one by simply substituting it with an integral, and again, if you perform the integration, you will get the same result up to the

decay of the constant minus S divided by alpha. Are there any questions here? Yes. Can we do the same for the law of measurement with the number of coefficients?

Well, that's a great question. So, this is a law of measurement. Sorry. So, the question was: can we apply the same argument to the number of transactions? Well, this is a measurement law for training time, and we consider training time to be an indicator of the number of data points because it is pointless to assume that we do not reuse the same data.

So, at each training step , we take some data, update the training, then take more different data in the next batch, and so on. For this reason, we consider the number of training steps to be proportional to the number of data points.

This leads to a law of measurement for the amount of data we have available. But we have another law of measurement for the number of transactions. I think you need a different argument here, don't you ? In fact, I don't see how you can get a spectral argument similar to...

where? On the computer? correct . Oh, right. correct. correct . correct. So, you calculate, in short, this is about how reverse diffusion works . You calculate the number of times you need to pass through your network, and the number of floating-point operations you need to calculate the gradient. correct?

Therefore, I think you need two times for forward passage and four times for reverse diffusion. So, I will propose a law of measurement, you know, and an explanation of the law of measurement with respect to the number of transactions, but perhaps this will not be entirely satisfactory. I am not sure if we have a satisfactory answer to the law of measurement with respect to the number of transactions.

correct. correct. Well, that's exactly what we do. So, what does this quantity T raised to the power α represent? It is, you know, those patterns, those functions, that represent the transition from those functions in the K eigenfunction space that have been learned to those that have not been learned. This is the quantity e raised to the power of -2tλk. This leads

to the measurement law t raised to the power -s s/α. In some cases, these values ​​can be calculated, and we can determine the power law we obtain from this , and whether it matches what we actually see for training loss in these examples. Therefore, it is difficult to do this for language models.

So, what Bartholomew Nasuto and Pellevan did was study the problem of image classification using the CIFAR dataset, and then they calculated the decay of the kernel's eigenvalues upon initialization. The second graph is supposed to measure the value of alpha K. In fact, this point is the projection of the kernel's eigenfunction, where it is projected onto the eigenfunctions. Next, we calculate the

amount of the remaining loss, that is, the loss that cannot be explained by the eigenvalues ​​up to K. Looking at the first K eigenvalue , we obtain the eigenvalue K. Therefore, position K represents the eigenfunction number K of the antimatter K.

Now, we consider the amount of loss that cannot be explained by projections onto the first K eigenfunctions . There is some inconsistency here at the end, but this is related to the fact that you have a limited number of images. Therefore, this will be a matrix of finite order, where its eigenvalues ​​are calculated.

This appears to follow the pattern K minus αK minus 1 minus S, and these DK values ​​can be calculated . Do you put λK or AK? Can you explain what an AK is again?

Okay, I mean, the correct target function that correctly classifies the images . So, here you are given objects, such as pictures of cats, tables, and dogs, and the task is to determine whether the object is an animal or something else, or something like a table. You have a simple classification task, then the program takes the first K eigenfunction and drops it, calculates the NTK, looks at the

first K eigenfunction of the NTK, and measures how well the graph matches the sum of the AKs values. correct. correct. From this, you can deduce the shape of the AK values.

correct. From these two methods, you can calculate the expected loss, and you will get a loss that is not too severe, and it seems to be what you see at the beginning of the learning process.

So, this is the slope they calculate, and when you start training a convolutional neural network on this classification task, the initial slope matches well with the diminishing effect you see in the loss function. Then, they have a particular theory about how the neural tangent nucleus begins to develop and change, using what they call dynamic mean field theory .

Then, they are able to predict the second tendency of what they call the feature learning system when the neural tangent nucleus begins to change. Finally, there is this third step where they learn best, and they do not have a good theory for this. For this faster learning, we don't have a good explanation. Yes.

Fall or rise? What are these curves? Okay, okay, okay, we look at...that's actually a great question. I don't remember, umm, what gamma values ​​are. Um, do you have any information about her somewhere? Yes, I'll come back to that later.

Thank you. The question was: What is a Gamma contract? Do you have any other questions? Good. Hmm, that's right. For this part, we do n't have, um, a good theory of how that happened.

Now, it will be interesting to try to understand how this happens, what happens with intrinsic values ​​and with AK projections of large language models. Hmm, I think this is still not well understood. There is a very recent research paper from the spring or summer in which they attempted to calculate both the spectrum and the neural tangent nucleus at each specific point in training. So

, they calculated the NTK, you know, not at the initialization , but where we are. They are trying to measure this T* point , where you move from, you know, to, sorry, K* , this kind of transition between the eigenfunctions you have learned and those you have not learned.

So, this is a kind of measure of that. There appears to be a similarity between how training loss decreases and how the number of self-functions you learn decreases.

It appears that the smallest self-value learned is smaller in larger models than in smaller models. Here, the color corresponds to the size of the model. It appears that there is a decline of this kind. It will appear that it is rising again. Okay .

This is correct. Okay. Is this the small thing? Hmm. Yes, they do. This is very interesting. The comment was that it looked like it was finally coming back up . Okay, the last one, the other one, no, even the other one. This is correct.

This may be a result of the measurement method. Well, that's interesting . This is correct. Therefore, for large language models , we still do not , you know, have some kind of spectral theory that would predict measurement loss. correct. correct.

So, this is it...how do they describe it? The average of the standard intrinsic values seen by the loss gradient. So, this thing tries to measure the K* point where it moves from those eigenfunctions that you have learned to those eigenfunctions that you have not learned. So, you look at your gradient and project it onto the first K eigenvalue, and you look at how much the

gradient is in the directions of the eigenvalues ​​and eigenfunctions that you have not yet seen. Is this clear? Good. correct. Here we talked about the measurement law for T, which is the training time or the number of training steps, which we can consider to be approximately proportional to the number of data points. There was a question about the measurement laws for the number of

parameters. There is a very simple observation regarding how the number of parameters for a ReLU neural network relates to the dimensions of the dataset. So, if you imagine that your data is generated by sampling from a multidimensional space , you do not have access to that specific multidimensional space, but you suspect that its dimensions are much smaller than the overall dimensions of the

data space. Therefore, you suspect there is some kind of structure in it. Imagine, then, that there is a multidimensional space here with intrinsic dimensions D. And you can divide this multidimensional space into small parts. Small parts with a diameter of approximately eight, the number of small parts you will need, because the dimension of the multidimensional space

is D, will be M raised to the power of negative one over T. Think of a square ; If I divide it into small squares of size H, the number of squares will be, as you know, M multiplied by H², which is close to the size of a square, so M equals, therefore H equals, M² minus one half. Good?

Now, what we want is to know a function defined on this fork. We have this X-junction, and we want to know the function R. If we assume that this function is sufficiently irregular, C², we can derive a good approximation by assuming that we have learned the value of this function at each small square, and we have learned the slope of each function at each small square.

This will tell us how to approximate the entire function. Okay, let me review that quickly. Well, if you have a function like this, then in each box you learn the value, i.e., the slope. Therefore, you can approximate it with a high-precision multi-segment linear function .

The error will be of order h squared. Specifically, the error square will be of order h to the power of 4. Now, ReLU networks are networks defined by multi-segment linear functions. Therefore, ReLU is simply a function like this. What you can do with the ReLU network is that if you have approximately n coefficients, you can define a multi-segment linear function with approximately n different slopes, and

the sum of n functions of this form. So, if you want to define a function that has a different slope on n different patches, you will need a constant that depends on the dimension, i.e., approximately n coefficients. This gives you directly that the loss decreases on the image -4/V. This is a simple observation that allows you to relate the assumed dimension of the fork from which the samples are taken to the decrease in loss

in the case of a large amount of data and a sufficiently large number of transactions. Do you have any comments? There are doubts about some of the foundations. I don't know if I have any questions.

This is a very simple observation , but an interesting one. Again, we haven't touched on this topic much so far . In particular, for example, with regard to language models, it is not clear whether they should be considered as a sample taken from a limited, multidimensional space . Perhaps it makes more sense for pictures. In this

way, you can gain an intuitive understanding of things by looking at the measurement laws of various problems and relating them to the dimensions of the assumed multidimensional space. Yes, this is correct. This is in a particular system where you already have, you know, where you have enough data, right? It assumes that you have enough parameters for the approximation to be good enough

here. Therefore, it is a certain type of system that you might hope to see if there is a lot of data. Well, as you know, the measurement laws we noted in Kaplan and Chinchilla's paper relate to training the optimal performance of larger models , i.e., models trained on larger amounts of data. Therefore, during

training, we notice many changes in appearance . But once we reach that point, the optimal point, we see a measurement law that applies to all these different models. Good. Now , I would like to move on to the next topic, which is generalization. Do you have any other questions about the previous part? Good. The question you would like

answered is: Does our neural network learn a function ? Yes, we probably have a set of data points, and that is the training set. Okay , then we want to test how well he performs on some other points that we haven't seen in training. Yes, we want our model to have a sufficient number of degrees of freedom so that it can adapt to the

data, right? So, if we get something like this, it might not be a very good approximation. On the other hand, if we have a lot of degrees of freedom, we may get a very good model at matching these specific points. But it will not be as good an approximation as a model with fewer degrees of freedom. correct? Therefore,

the model that chooses the simplest approximation ignores some of the noise we see . So, the problem that worries us is the lack of compatibility. We do not have sufficient complexity in the class of functions we are studying, but we may also be concerned about hypercompatibility. We have excess complexity, and therefore we fit well with the data we saw in training,

but we do not choose a simpler solution that generalizes well to the data we did not see . A good way to write this is to analyze the loss into its parts that correspond to bias and variance. Okay, let's take a short break and do that. There is a useful calculation of probability that relates the expected value of the difference between a random variable and a constant, the

variance of that variable, and the square of the difference between the expected values. I think many of you have seen that. So, let me write this. So, if we look at the expected value of (I don't know). Let's assume we use the random variable Z. This is a random variable. Now, we subtract a constant C, then square the result, and the result is the variance of Z, which is simply the

expected value of the difference between Z and the standard Z squared, plus the expected value of Z minus C squared. Did you see that? It is not difficult to prove. All you have to do is add and subtract. We add up the expected value of Z and subtract it , then square the result, so the mixed term is zero. Because it will be the expected value of Z minus the expected value

of Z. Okay? If we use this identity twice, we can write Y here as f(x) plus ε. ε is a random variable, and f(x) is a random variable. If you repeat this process twice, you will get the following expression: You will get the expected value of your samples from your data, less the determined value of f(X)²,

plus the variance limit, which is the difference between f(X) and the expected value of f(X)² , plus the noise limit variance. So, what does this expression tell you? The first limit tells you how far your prediction is from the expected value relative to the specified value. The second limit tells you how much the contrast fluctuates, and the last limit is the noise.

There is a beautiful illustration from Scott Foreman's lectures, which you can understand in the following way. So , if you have low contrast and low bias, it means you are hitting the target with high accuracy.

If you have low bias and high variance, it means the prediction is correct, but the data are widely sparse. Now, if you have high bias and low variance, you are far from the goal, but the data is somewhat focused.

When you have high variance and high bias, the data is sparse and its average is inaccurate. Good. So, the idea is that in many cases, there is a balance between these two things. correct? The more complex the function class , if you are trying to optimize in a very high complexity class, the more accurately you will be able to find a function that approximates the

data points . Therefore, your bias will fade away because the more you look at larger and larger categories of functions, the more you will be able to find functions that fit your training data very well.

However, once you have functions of very high complexity, a problem will arise , which is that they will over- customize. It will cover every point in the training data, making it more scattered. This will cause the solution to become scattered, and therefore increase the error due to increased variance.

Therefore, the concern is that this conflicts with general intelligence, because general intelligence is supposed to solve complex problems. Therefore, it should be in the category of complex functions.

But, when you are in the category of complex functions, you will, as you know, start to match your data very well, which will increase the error rate due to variance, and therefore, as you know, this will make you learn complex solutions instead of simple, well-generalizable solutions.

Is this a rule of inference or is it a type of theoretical connection? Well, this is a rule of inference that you can prove as a theory in certain categories of learning processes. This heuristic rule governed much of statistical learning theory in the 1990s and early 2000s, making people really concerned

about the increasing complexity of the classes of functions that could be used. This somewhat contradicted the idea of gradualism. The larger the models, the more complex they become , and therefore they are not expected to generalize well. Therefore, we strive to minimize the overall error as much as possible, and we seek the optimal balance between excessive complexity and low complexity. Interestingly, neural networks do not adhere to this

principle. An interesting example is a research paper by Zhang et al., published in 2017. This paper addressed the problem of classifying images from a CIFAR dataset. The researchers studied neural networks, especially convolutional neural networks, as well as fully connected multilayer neural networks (MLPs).

They studied different structures, first training them on the problem of classifying images correctly, and then introducing random elements to them. For example, they randomly switched the classifications during training. Instead of learning that dogs are dogs and cats are cats, the image descriptions were randomly swapped. Isn't that so? What is

interesting is that neural networks of the same size were able to learn this case of random classifications and randomly switched data with complete efficiency. They even studied some random changes in the pixels in these images.

In all these cases, the neural networks were able to achieve zero loss for all probabilities. In other words, yes, on training data. So, in short, there is sufficient capacity in the network to learn anything about this data.

Obviously, if random classifications are used, the loss of generalization, or the loss of testing, will be significant, won't it? Because there is no way to predict the actual classification of data that has never been seen before. So, what's interesting here is that it appears that two different types of learning occur when using

random data that has no structure, in which case the model is large and expressive enough to retain everything. However , when given real-life images, it does not choose one of the many solutions that perfectly fit the training data , but do not work at all on the test data. Instead, he chooses a solution that works on

training data and also works on test data. correct? Therefore, there are a very large number of possible algorithms that he could have come up with that would give him zero loss on the training data.

The vast majority of them would result in a very large loss on the test data, and he does not choose them. Instead, he chooses solutions that work well. Isn't this good?

So, the observation is that something interesting is happening here, which contradicts the inferential rules relating to this trade-off between complexity and variance. Good. This is what I mentioned earlier. The test error rises to nearly 90% on random data, but in training...so, let me talk a little about the

general question: why would we expect that to be possible? What general theory of learning tells us about this problem ? How can an algorithm be created that learns in a way that generalizes well to invisible data?

Suppose we have a set of data points taken from a real distribution, and we want to guess this real distribution. Our task is, given these n data points, to predict xn+1.

Let's assume we have a class of algorithms, and different distributions depending on h. So, h tells us how to choose a probability distribution and predict the next x value . The standard method is through the Bayesian update rule.

We look at the given data and say that the probability of our hypothesis class depends on how accurately it predicts the data we have seen, multiplied by a prior probability distribution for all hypothesis classes.

This is the standard basic update rule. We then assign this subsequent probability distribution to all classes of hypotheses. The prediction we make based on the data we have seen is the sum or integration of all classes of hypotheses weighted by our subsequent probability distribution. For each hypothesis, we give it a weight based on how accurately it predicts the data

we have seen, and then we sum the results for all categories of hypotheses. Good? So that you can think of this as an iterative process. You have seen K data points. It determines your subsequent probability distribution. Then you see the next data point that updates your subsequent probability distribution while using the base rule. And so on.

Good? Good. So, how do we measure the quality of our performance in this process ? We look at the negative logarithm of the probability that we assign to the next data point.

The probability is defined using the baseline of previous data points. Therefore , the negative logarithm is a good function. So, this is the logarithm of 1 divided by PB. Yes, so, as you know, this is decreasing. So, what you're trying to say is that if you want to reduce this quantity, it means you want to reduce the element of surprise when you see the

next data point. Therefore , if the probability is low, the loss will be very large. This is what we don't want. But there is another way to think about it: why is the logarithm important, or any other function we have talked about?

That's what I wanted to say. This is why this option is important, as there is a relationship between probability and encoding. Suppose you have a set of events and you want to describe each event using a particular alphabet, or language with a limited number of elements, and you want to give a description for each event. And you want this description to be brief. Therefore, for events that occur

frequently, you want to give a brief description. For events that occur rarely, you want to give them longer descriptions. So that you use the fewest possible characters when describing what is happening. There is a way to achieve that.

Well, there is a theory in cryptography that states that it is possible to encode a countable set of events, with a description length of a fixed value, depending on whether you use the natural logarithm or the binary logarithm (1/PB). There is a simple technical assumption here, which is the use of certain symbols called prefix-free symbols

, so that part of the description of one event is not part of the description of another event. Otherwise, it will become confusing. So, what we can think about here is that we are trying to reduce the length of a particular event's encoding.

Therefore, this relates to the issue of reducing the probability of the next event, i.e. maximizing the probability of the next event, for our prediction model , and finding a very compact way to describe events. This, in a way, makes the prediction problem similar to the pressure problem. There is also Shannon's theory, which states

that you can find such encoding, while Shannon's theory of information states that this is the best you can do. So, for any encoding or any probability distribution, how can I express that ? Well, for that, I want to say that the expected value of the encoding length will be greater than or equal to the expected value of the logarithm (1/

Q), where Q is the true probability of the distribution of data points or events. So, if you are monitoring events and writing down what happened and want to know the expected length, the shortest expected length it can be is when using Kraft encoding. Therefore, Kraft encoding is optimal in this regard.

Yes. Is there a question? Oh , sorry. I don't know what's going on here, but let me click here. Good. So, this is the loss that we will take into account, and we can think of this loss as the length of the encoding of the events that we see. Therefore, we can define regret.

Therefore, if we predict the next event with its true probability, there will be a certain expected length and an expected loss. We cannot achieve better results than that, and we cannot surpass Shannon's entropy.

However, we can compare the difference between our Bayesian prediction and the true prediction. This is regret. Regret looks at the expected difference between true prediction and Bayesian prediction. I don't know why I write in words, it's easier in form.

One logarithm divided by probability/data, and one logarithm divided by the true distribution. correct. We assume that in our category of hypotheses, there is one specific hypothesis that describes what happens. Do you have any questions yet ?

I noticed that you did not include the initial hypothesis in your explanation. This result suggests that this thing will eventually grow, and that will depend on your initial hypothesis. Therefore, instead of an initial hypothesis, we have a prior probability distribution for all hypotheses. It is included here, it is there, it is hidden in Bayes. This is the pre-probability distribution (P

<sub>PH</sub>). Does this indicate that the sample size (N) becomes large , and it doesn't matter what this predisposition is? If so, it depends on the category of hypotheses. So, I'll explain that in a little while. What category of hypotheses do we want to study? Good.

Before that, let me mention another useful concept in statistics known as scale divergence. I think people have different levels of familiarity with it. For some, Colback-Lipper spacing is a very familiar concept , and not overly complicated.

However, the idea is that when moving from one probability distribution to another, this corresponds to a change in the way events are encoded. You can measure the increase in the number of characters resulting from this. This is precisely what the Colback-Lipper divergence measures.

He looks at the expected difference between the lengths of the symbols. You have this, and it's related to the true probability distribution Q. So, you look at the expected value with respect to Q of the logarithm of the ratio between Q for X and P for X. As you can see, it's not symmetric , but it's somewhat like measuring the distances between two probability distributions.

This is called spacing. Therefore, it is always greater than or equal to zero, and equal only if and only if the probability distributions outside the zero measure set match. Good.

We can think of it as the cost of moving from the true probability distribution to another probability distribution P for X. Now let's define a particular class of hypotheses.

We will define a very large class of all computable functions. We consider all computable functions that give us a probability distribution. This is of course an infinite category, something extremely complex. Therefore, if this balance of bias and complexity, prejudice and variance is correct, or according to this argument, then a

very large set of assumptions will lead to bad regret. However, we will see that it does not . Therefore , we now use Kolmogorov complexity as a predisposition to the set of hypothesis classes. Again, for technical reasons, we want the program to be prefix-free , so we are looking for programs that do not include other programs as subprograms. It's a slightly different way of

writing different programs. We basically want to find every computable function and write the smallest prefix-free program that calculates that function. This will be the initial probability distribution. And again, according to Kraft's principle, if we define it in this way, the integral or sum on all classes of hypotheses will be less than or

equal to one. You can resize it to be a true probability distribution, but in reality, being less than or equal to one is convenient for us. Do you have any questions yet? Therefore, we will consider them all as computable functions , which makes perfect sense . We want to use Occam's principle.

Of the various hypotheses that describe the data we have seen, we want to choose the simplest one, where simplicity is measured by the length of the program that describes this hypothesis. Now, let's move on here. We have an almost intuitive observation, which is that we have a good limit for regret. Therefore, we can write the Bayesian probability distribution for

the data we have seen. This will be the sum of the categories of hypotheses. We assume that among them there exists a computable function that describes the probability distribution. Therefore, it will include the true probability distribution.

Because we assume positive values, this distribution is greater than or equal to one of the limits of the sum. This means that when considering regret here, the expected logarithm of the difference will be limited by (the negative logarithm of the prior logarithm of this hypothesis), and this is Kolmogorov's complexity.

So, if we use this Bayesian prediction rule with the Solomonov predisposition, which states that we must set the preprobability for each hypothetical class to be 2 to the negative power of Kolmogorov's complexity, i.e., 2 to the negative power of the length of the program describing it, it tells us that after the points of observation, we get the worst that can happen, which is Shannon's entropy,

which is impossible to reduce , in addition to this limit, which is Kolmogorov's complexity. So, this means that if the thing we are trying to learn is a relatively short, computable function with a short description, then this argument will certainly lead us there.

correct. Therefore, N is regret. This is the difference after N data points. Yes. What you were saying is less than that for all N? Okay, sorry, that's the expectation, right? So, this is the expectation of regret after ...well, I mean, so you...so you...so the actual loss, right? So what is Shannon entropy? Yes, let's continue . Okay, N is the size of

...so N is the size of D. So, if I go back to...correct. Yes , it is a prediction on...drawing N different predictions from the same probability distribution. I think it's similar to N, so...

okay. Because I have a fixed limit, but I have some N limits, the subsequent limits will become smaller and smaller and smaller . So, in a sense, I am learning.

So, what is PE? PE is... correct. So, PB is Bayesian ...well, maybe I should say what XT is? This is...well, we have a set of data points X1 up to XT minus 1, XT. correct? We've seen this before. Well, I mean, I expected to say there's no way to get a big PE, but it's going the

opposite way. Yes. correct. correct. Yes. Okay , where are we...okay, okay. Yes, yes, perhaps I will explain that later. Good. So, in the context of this explanation, what I would like to convince you of is that there is a way that enables us to reason with a very large class of extremely complex hypotheses, and yet get little regret. This is the claim. The difficulty

here is that we do not know how to calculate Kolmogorov's complexity. It is an uncomputationally unfeasible function, but we hope somehow to have short programs for the types of problems that neural networks learn. What neural networks actually do is a kind of weighting of solutions in a way that penalizes longer solutions. This is correct. This is correct. That's

exactly the argument. So, what you're trying to say is that instead of restricting the function complexity class , you allow very large levels of complexity, but you penalize larger complexities with a coefficient that decreases as complexity increases.

This is known as organization. In the reading material, there is a link to a research paper called this soft inductive bias. correct? It is a special type of punishment for more complex programs, and is closely related to the punishment of large weights in a neural network. Let me talk a little, I'm not sure if I'll be able to

explain it, but let me talk about somewhat different cases . So, what is closest to what actually happens in neural networks is the case where we get a large parameter space containing theta values, and we assign a function to each theta value , or we can also think of assigning a certain probability distribution that corresponds to the theta value.

This is a somewhat different situation . Instead of a countable set of hypotheses, we now have a connected space. This space lies in Euclidean space R N. Wait a minute, I'll put D here. Sorry, D. Now, we can define a similar Bayesian story, where we try, based on the observation we have seen, to update the probability distribution

in an attempt to find the true probability distribution. Let's assume that this real probability distribution actually exists in our parameter space. Therefore, there is a certain theta value that corresponds to this true probability distribution.

Okay, so let's start with some pre- probability distributions on θ. However, we have the same prediction rule here . We look at the probability of θ occurring, and we want it to be proportional to how accurate this data is that we have seen. So, this is the set of points X1 to Xn, as predicted by this parameter, right? Therefore, this will be the product of the probabilities of

X1, given θ from 1 to n. Here we have a normalization constant that ensures that this subsequent probability distribution is indeed a probability distribution. Therefore, if you calculate the value of this normalization constant, you will get this result. As you know, you want the integral of π here to be equal to one . If you think about this constant of unity, you will find that it is a very important element

. So, one way to think about it is this: you have, looking at the parameter space and the probability distribution, the prior probability distribution of that space tells you how surprised you are to see the data you have seen. correct? So, it is actually, you know, what your model says about the probability of that data.

Now, there is another way to see it. You can write the negative logarithm of the end as the sum of the negative logarithms of the Bayesian prediction probabilities for the next XT value given the previous data points you have seen.

Therefore, we can think of this as our Bayesian prediction about seeing these data points. Or as the expected length of the code that describes these data points. Similarly , as before, we can define regret as the expected value of this ratio between the true probability distribution of seeing these data points

and ZN. Good. You can now try to understand how this regret depends on the parameter space. The claim that Risanin proved is the following: When N approaches infinity, the probability distribution, i.e., the real P, and then the subsequent P, will begin to resemble more and more the Gaussian distribution centered at the

real probability, and will converge somewhat to a delta function centered at the real probability. You can actually calculate regret when n approaches infinity, and this depends on the dimension of the parameter space and the number of data points in it. Therefore, there are some important assumptions that Risanin makes here, the first of which is that the true probability lies

in our fundamental space, and that the Kolmogorov- Lieber divergence, as we move away from the true probability, changes in a distinctive way. The Kolmogorov-Lyber divergence matrix is strictly positive. Yes, I think so. excellent.

Thank you. Good. Good. This was a kind of learning argument for Bayesian induction using Kolmogorov complexity. correct? Now, we have a different class of objects here. We have a parametric family of probability distributions with a given dimension . This is now a connected family, not a countable one. We are now updating the

subsequent probability distribution on this n-dimensional connected space, which is a countable space. This is a different procedure from the ideal Solomonov extrapolation procedure . Therefore, this leads to a worse degree of regret , which now depends on the dimension of the parameter space with which we started , under this assumption. This is bad news for us

compared to Kolmogorov's extrapolation and Solomonov's extrapolation, as regret increases with the increasing complexity and remoteness of the parameter space. This is unfortunate. There are some caveats we note here, namely the case of having a very large number of data points. This is one of the observations.

Another point to note is that we assume the existence of a single, specific probability distribution in the parameter space. The further we move away from this probability distribution, the more the Colback- Lieber divergence appears to be quadratic.

Similarly, the Hessian matrix for Colback-Lypper divergence also appears quadratic. Neither of these seems to apply perfectly to neural networks. One can try to understand the reason, and which reason is most important. One reason is that we do not look at the case where the data volume is much larger than the number of parameters . It is usually larger,

but we are probably still outside of that range, where we see this convergent behavior. Another reason why this type of pessimism might be practically incorrect is that the assumption that the Hessian matrix is ​​perfectly positive is not realized, or at least not realized at the level of real-world errors. Therefore, there is a different result from Watanabe, which does not assume that the

Hessian matrix is entirely positive as we move away from the true value of the coefficient. Instead , we assume that there may not be just one subrange, but the entire subrange of true values, which corresponds to true probability distributions. Then there is a subrange or subset or something somewhat complex that we might have

. He then noted that in this case, when the Hessian matrix may have zero eigenvalues, the regret depends in an interesting way on the precise nature of how the Colback-Lieber divergence decays as we move away from this probability distribution. In particular, the main limit depends on what is called the real logarithm threshold, which determines

how the size of the region under the curve of the Colback- Lieber divergence function changes as we move away from it. Therefore, it is a kind of measure of flatness as we move away from the subset corresponding to the true distribution, where we must consider how the size of the area changes. So , in particular, in the simple case where we have a dimensioned multidimensional space

, and a sub-dimensional space D minus λ, and the perpendicular dimension is λ, you will see that the effective dimension is λ. If the Morse boat function is zero, and if the Colback -Liebherr divergence of the Morse boat function is zero on the subspace, and becomes positive as we move away from it , then the Hessian matrix is

strictly positive in the direction perpendicular to it. Then you will notice exactly this. You will see this dimension which complements the subspace dimension D. This may be another reason why neural networks learn so well in some cases. So, let me stop here.
