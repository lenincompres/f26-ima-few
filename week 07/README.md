# Week 07 — Midterm Encounters & Introduction to Code

## Questions

**What happens when someone else encounters what we have made?**

**What if we could give the browser instructions?**

Over the past five weeks, we have explored how HTML and CSS shape experiences in the browser.

Last class, we shared our midterm design proposals.

Today, we encounter the websites that emerged from those ideas.

Then we begin exploring something new: **code that can change a webpage while it is running.**

---

# Part 1 — Midterm Website Gallery

## Encountering the Work

Open our shared [Midterm Projects & Field Notes](https://github.com/lenincompres/f26-ima-few/wiki) directory.

Make sure your published website is linked and accessible.

Today we will visit each other's websites rather than give another round of presentations.

As a visitor, explore before asking the creator to explain.

Notice:

- What draws your attention?
- What do you understand without instructions?
- What makes you curious?
- Where do you go first?
- What do you try to click?
- What surprises you?
- What happens when you resize the browser?
- What feels different from the original design proposal?

As a creator, pay attention to how people encounter your work.

What did they notice that you did not anticipate?

What did they overlook?

What did they discover?

### A Question to Keep

**What is the difference between designing an experience and someone actually experiencing it?**

---

# Part 2 — What Is Code?

## A Website About Programming

Explore the opening of Paul Ford's interactive essay:

[**What Is Code? — Paul Ford, Bloomberg (2015)**](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/#lets-begin)

This is an unusually ambitious website about programming.

It is also an example of using the browser as a storytelling and explanatory medium.

We will not read the entire essay today.

Instead, explore a little and consider:

- What is this website trying to explain?
- How does it use the browser differently from an ordinary article?
- What role do interaction, illustration, and pacing play?
- How might its presentation help someone understand an unfamiliar idea?
- What does it make you curious about?

The essay is from 2015. Some details are dated, but its central questions remain interesting.

And now we can begin exploring one of those questions ourselves.

---

# Part 3 — Giving the Browser Instructions

Until now, we have primarily written HTML and CSS.

HTML gives a page structure.

CSS shapes its appearance.

But what if we want to tell the browser to **do something right now**?

Let's experiment.

## Open the Console

1. Open a website in Chrome.
2. Right-click and select **Inspect**.
3. Open the **Console** tab.
4. Try entering a JavaScript instruction.

For example:

```js
2 + 2
```

What happens?

Try:

```js
"Hello, browser!"
```

And:

```js
console.log("Hello, world!")
```

The console lets us experiment with JavaScript directly in the browser.

It is a place to give instructions, inspect results, and discover what happens.

You may need to allow pasting in DevTools before pasting code. Typing these short experiments yourself is a good place to begin.

---

# Part 4 — Changing the Page from the Console

The browser has already created a webpage from HTML and CSS.

JavaScript can interact with that page.

Try this in the console:

```js
document.body.style.backgroundColor = "red";
```

What changed?

Try another color:

```js
document.body.style.backgroundColor = "lightblue";
```

Or:

```js
document.body.style.fontFamily = "Georgia";
```

Or:

```js
document.body.style.transform = "rotate(2deg)";
```

You are not editing the original HTML or CSS files.

You are changing the page **as it exists in the browser right now**.

Reload the page.

What happens to your changes?

Why?

---

## The Document

In JavaScript, `document` represents the webpage.

We can use it to find and change elements.

For example:

```js
document.querySelector("h1")
```

This looks for the first `<h1>` element.

Try:

```js
document.querySelector("h1").style.color = "red";
```

Or:

```js
document.querySelector("h1").textContent = "Something Has Changed";
```

If the page has no `<h1>`, try another element that
