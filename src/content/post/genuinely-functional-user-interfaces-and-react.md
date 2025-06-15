---
title: Genuinely Functional User Interfaces and React
description: Some tips while using DiscriminatorColumn
publishDate: 10 Oct 2013
tags: ["frontend", "react", "functional programming", "software"]
---

In a jungle of user interface frameworks, all trying to replicate the patterns that work on the server, React, created by Facebook, has brought to fore some ideas that can change UI development forever.

[Genuinely Functional User Interfaces](http://conal.net/papers/genuinely-functional-guis.pdf) is a paper written by Antony Courtney and Conal Elliott (of FRP fame) which describes a formal model of user interfaces which defines GUIs compositionally as Signal Transformers.

We will see how these two are similar.

I had read this paper a few months ago and React was open sourced just a few weeks later. After a quick glance at the React home page I sensed that it is very closely related to this paper and thus I started digging into the library for more information.

Quite surprisingly my web searches for articles relating these two came up empty. The more I looked into React, the more it looked like a implementation of formal model presented in the paper and I patiently waited for someone to recognize this connection. Surely the React team must be knowing about this, so why wasn't it mentioned. Were my conclusions wrong? Was I seeing this connection only because I came across them at almost the same time?

I don't believe that to be the case and below I will provide a mapping between the concepts present in them.

## React library

Let us start with a small description of React. Of course it will be better if you check out their site and study the examples. Below are most important points to note about React are:

- React is component based and these components can be composed to build new components.
- All components can receive data from outside (which they cannot mutate) and update their state.
- This internal state is converted to object that can be rendered. This conversion is specified declaratively by the component creator. On every state change the view is re-rendered automatically (and efficiently) by React.
- Every component has a render function which returns a lightweight DOM representation. It is called by the library whenever a component's state changes to keep the state and the UI in sync.
- There are no models or any other kind of domain layer in React. It only focuses on the view, which is a good decision for a library introducing such new ideas to the mainstream. You can connect it to other libraries/frameworks such as Backbone to handle the domain logic.

React is not a MVC framework and the React does not even use the word framework. As their tag-line says "A JavaScript library for building user interfaces".

## Genuinely Functional User Interfaces

Now let me introduce you to the ideas of the paper "Genuinely Functional User Interfaces". The authors present a UI library Fruit for Haskell based on a formal model they develop in the paper. The key concepts to understand about Fruit and the formal model are:

It uses the concept of Signals, which are continuous time-varying values. A popular example being the mouse's current position (x, y). There is another concept of Events which is just a discretization of the Signal concept, so we will ignore it completely. FRP also uses these concepts.

A concept of Signal Transformer is introduced in the paper which is function from Signal to Signal. They convert a Signal to some other Signal after some processing.

A GUI is introduced as a Signal Transformer which takes a pair of Signals and outputs another pair of Signals.

```haskell
type GUI a b = (GUIInput, a) → (Picture, b)
```

Quoting from the paper:

> A GUI a b is a signal transformer that takes a graphical
> input signal (GUIInput) paired with an auxiliary semantic
> input signal (a) and produces a graphical output signal
> (Picture) paired with an auxiliary semantic output signal (b).

## The Connection

Now we are ready to form a mapping between the concepts in them:

| React                                                         | Fruit                                |
| ------------------------------------------------------------- | ------------------------------------ |
| Component                                                     | GUI                                  |
| Browser Input                                                 | GUIInput                             |
| Data coming through props                                     | auxiliary semantic input signal (a)  |
| Lightweight DOM representation returned from render function. | Picture                              |
| Any data sent to other components                             | auxiliary semantic output signal (b) |

As we see above there is deep connection between them and understanding this connection will help us understand both of them better.

I will be writing about extending these ideas in future, in the meantime please comment on the benefits we can draw from this.
