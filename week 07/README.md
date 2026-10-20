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

If the page has no `<h1>`, try another element that exists.

For example:

```js
document.querySelector("p")
```

What else could you change?

---

# Part 5 — Variables

So far, we have been giving instructions directly.

But sometimes we want to remember something so we can use it again.

We can create a **variable**.

```js
let message = "Hello, world!";
```

Now try:

```js
console.log(message);
```

Change the value:

```js
message = "Something new";
```

Then:

```js
console.log(message);
```

A variable gives us a name for a value.

We can use it to store text, numbers, elements, and other kinds of information.

---

## Variables Can Refer to Elements

Try:

```js
let heading = document.querySelector("h1");
```

Now:

```js
heading.style.color = "purple";
```

And:

```js
heading.textContent = "I changed this with JavaScript!";
```

Instead of searching for the heading each time, we can refer to it through our variable.

If you repeat a `let` declaration in the same console session, you may get an error. Reassign the existing variable or use a new name.

---

# Part 6 — Finding Elements by ID

HTML elements can have IDs.

For example:

```html
<h1 id="title">A Strange Website</h1>
```

JavaScript can find that specific element:

```js
document.getElementById("title")
```

And change it:

```js
document.getElementById("title").style.color = "red";
```

Or:

```js
document.getElementById("title").textContent = "The Story Has Changed";
```

We can also save the element in a variable:

```js
let title = document.getElementById("title");

title.style.backgroundColor = "yellow";
title.textContent = "A New Beginning";
```

This is one of the ways JavaScript can interact with the **Document Object Model**, or **DOM**.

The DOM is the browser's representation of the page as a structure of objects that JavaScript can access and change.

---

# Exercise 1 — A Small Intervention

Choose a webpage you have created.

Open it in the browser and experiment using the console.

Try to change at least three things.

For example:

- Change a heading
- Change a background
- Hide an element
- Change an image
- Change a font
- Change the size of something
- Change the text of a paragraph

Some possible experiments:

```js
document.querySelector("p").style.fontSize = "30px";
```

```js
document.querySelector("img").style.borderRadius = "50%";
```

```js
document.querySelector("h1").textContent = "A Different Story";
```

```js
document.querySelector("footer").style.display = "none";
```

If a selector does not find an element, JavaScript cannot change it. Inspect your HTML and try a selector that matches something on the page.

What can you change without editing the original files?

What happens when you reload?

---

# Part 7 — Moving from the Console to a JavaScript File

The console is useful for experimentation.

But if we want our instructions to be part of our website, we need to save them.

Just as we have connected HTML to CSS, we can connect HTML to JavaScript.

## Create a Small Project

Create a folder containing:

```text
first-javascript/
├── index.html
├── style.css
└── script.js
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First JavaScript Experiment</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>

<body>

  <main>
    <h1 id="title">A Quiet Beginning</h1>

    <p id="message">
      Nothing unusual has happened yet.
    </p>

    <button id="change-button">
      What happens if I click?
    </button>
  </main>

</body>
</html>
```

### style.css

```css
body {
  font-family: Arial, sans-serif;
  background: #f0eee8;
  color: #222;
  margin: 0;
  padding: 60px;
}

main {
  max-width: 700px;
  margin: auto;
}

button {
  padding: 12px 20px;
  cursor: pointer;
}
```

### script.js

```js
console.log("My JavaScript file is connected!");

let title = document.getElementById("title");
let message = document.getElementById("message");

title.style.color = "darkgreen";

message.textContent = "Something has already changed.";
```

Open the HTML page in your browser.

What happens?

Now open the console.

Do you see the message from your JavaScript file?

---

# Part 8 — Making Something Happen on a Click

We have changed elements when the page loads.

But what if we want something to happen **after a visitor does something**?

We can listen for an event.

Add this to `script.js`:

```js
let button = document.getElementById("change-button");

button.addEventListener("click", function() {

  title.textContent = "You Changed the Story!";

  message.textContent = "The page responded to your action.";

  document.body.style.backgroundColor = "lightblue";

});
```

Save your file.

Reload the page.

Click the button.

What happened?

We have introduced something important:

**An event can trigger instructions.**

The browser notices an action, and JavaScript tells it what to do.

---

# Exercise 2 — Give the Page a Secret

Using the starter project, create a small interaction.

Your page should have something that changes when a visitor clicks.

Perhaps:

- A message is revealed
- A title changes
- A background transforms
- An object disappears
- A new instruction appears
- A page changes its mood
- A visitor discovers something unexpected

Try combining at least two changes.

For example:

```js
button.addEventListener("click", function() {

  title.textContent = "The Secret Is Out";

  title.style.color = "crimson";

  message.textContent = "You were not supposed to find this.";

});
```

Then experiment.

What else can you change?

What happens if you change the order of the instructions?

Can you make the interaction feel like part of a story?

---

# What Have We Discovered?

Today we encountered several new ideas:

**JavaScript** — a programming language that can give instructions to the browser.

**Console** — a place to experiment with JavaScript and inspect what happens.

**Variables** — names that let us store and reuse values.

**DOM** — the browser's representation of the webpage that JavaScript can interact with.

**Selectors** — ways to find elements in the document.

**Properties** — values associated with objects that we can read or change.

**Events** — things that happen, such as a click, that JavaScript can respond to.

We have only begun.

Next week, we will explore these ideas more deeply and discover how JavaScript can help us create more complex behaviors.

---

# Field Notes

Reflect on both parts of today's class.

### Midterm Encounters

- What did you notice while visiting other websites?
- What did visitors discover in yours?
- How did the finished website compare with your original proposal?
- What might you revise after seeing someone else encounter it?

### First JavaScript Experiments

- What surprised you about changing a webpage from the console?
- What happened when you reloaded?
- What is the difference between changing a CSS file and changing an element through JavaScript?
- What was the first instruction you wrote that made something happen?
- What did you discover through experimentation?
- What would you like to make the browser do next?

---

# Homework

## 1. Midterm Reflection

In your Field Notes, write a short reflection on your midterm experience.

Consider your original design, the finished website, and what happened when others visited it.

What did you learn from the process?

## 2. First JavaScript Experiment

Continue exploring the small JavaScript project we started in class.

Create a webpage that changes in response to a visitor's action.

Your experiment should include:

- [ ] An HTML page
- [ ] A linked JavaScript file
- [ ] At least one variable
- [ ] At least one element selected through JavaScript
- [ ] At least one change to the page
- [ ] At least one click event
- [ ] A short explanation in your Field Notes of what you tried and discovered

Save the experiment in your course repository.

You do not need to make a polished project.

This is an experiment.

### Tutorials & Resources

Explore these as needed while experimenting:

- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/) — Quick examples to try and modify.
- [MDN — JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) — An introduction to adding interactivity to webpages.
- [MDN — Manipulating Documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) — Finding and changing HTML elements with JavaScript.

Save your experiment in your course repository.

You do not need to make a polished project. This is an experiment.

## 3. Optional Reading

Continue exploring:

[What Is Code? — Paul Ford](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/#lets-begin)

As you read, consider not only what the essay explains about programming, but how its website design helps communicate those ideas.

---

**Next Week — Making Things Happen: JavaScript Foundations**

We will continue investigating how instructions, variables, events, and decisions can transform what happens in the browser.
