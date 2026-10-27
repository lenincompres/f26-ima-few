# Week 08 — The Page Becomes an Interface

## Question

**How can a webpage remember information, respond to choices, and change what it shows?**

Last week we began giving the browser instructions: selecting elements, changing their text and styles, and responding to clicks.

This week we take a step further. Instead of writing a separate instruction for every element, we can **organize information**, **repeat actions**, and let a page respond to what a visitor chooses.

We will work with **objects, arrays, and the DOM** to turn a static collection of content into a small interactive experience.

---

## We Explore

- JavaScript values, variables, and a quick review of events
- Objects: grouping related information
- Arrays: keeping collections of things
- Accessing values with dot notation and brackets
- Selecting and updating elements in the DOM
- Creating elements and adding them to the page
- Using functions and loops to avoid repetition
- Connecting a visitor's action to changes in what appears

**Guiding idea:** HTML provides a place for content; JavaScript can decide which content appears there and when.

---

# 1. Return to an Interaction

Open the JavaScript experiment you made last week. Show someone what changes when they interact with it.

Ask yourselves:

- What information is written directly into the HTML?
- What changes through JavaScript?
- What happens when you click twice?
- What would become difficult if you wanted ten different messages or objects instead of one?

Today we'll explore a way to handle that last question.

---

# 2. An Object: One Thing, Several Details

Imagine a small archive of mysterious objects. We could describe one object like this:

```js
const artifact = {
  name: "The Glass Key",
  origin: "Unknown",
  year: 1893,
  description: "It opens a door that nobody has found."
};
```

An **object** groups related information using named **properties**.

Try these in the console:

```js
artifact.name
artifact.year
artifact.description
```

We can use a property in an instruction:

```js
document.querySelector("h1").textContent = artifact.name;
```

### Try It

Invent an object of your own. Give it at least four properties. It might describe a place, character, creature, memory, artifact, or event.

Change an element on your page using one of those properties.

**Notice:** The data and the way we display it can be separate.

---

# 3. An Array: A Collection of Things

What if our archive has more than one object?

```js
const artifacts = [
  {
    name: "The Glass Key",
    description: "It opens a door that nobody has found."
  },
  {
    name: "The Blue Map",
    description: "Its coastlines change after sunset."
  },
  {
    name: "The Silent Bell",
    description: "It rings only in photographs."
  }
];
```

An **array** stores an ordered collection. Each item above is an object.

Try:

```js
artifacts[0]
artifacts[1].name
artifacts.length
```

JavaScript starts counting array positions at **0**.

Now try changing which item appears on the page:

```js
document.querySelector("h1").textContent = artifacts[1].name;
```

What would happen if we could show all three items without writing three separate HTML cards?

---

# 4. The DOM: Making Elements Appear

The **Document Object Model (DOM)** is the browser's representation of the webpage. JavaScript can select existing elements, change them, or create new ones.

Suppose your HTML contains:

```html
<section id="archive"></section>
```

In your linked `script.js`, try:

```js
const archive = document.getElementById("archive");

const card = document.createElement("article");
card.textContent = "An object has appeared.";

archive.appendChild(card);
```

The `<article>` did not need to be written into the original HTML. JavaScript created it.

Try creating a heading and a paragraph inside the card:

```js
const heading = document.createElement("h2");
heading.textContent = artifacts[0].name;

const description = document.createElement("p");
description.textContent = artifacts[0].description;

card.replaceChildren(heading, description);
```

**Experiment:** Change `artifacts[0]` to `artifacts[2]`. What changes? What stays the same?

---

# 5. Repetition: One Instruction, Many Items

We can use a loop to do something for every item in an array.

```js
archive.replaceChildren(); // Clear earlier content

for (const item of artifacts) {
  const card = document.createElement("article");
  const title = document.createElement("h2");
  const description = document.createElement("p");

  title.textContent = item.name;
  description.textContent = item.description;

  card.append(title, description);
  archive.appendChild(card);
}
```

Now the same instructions create a card for each object in the collection.

Add another object to the array. Reload.

Do you have to write new HTML for the new card?

---

# 6. Exercise — An Archive That Answers Back

Build a small **collection of at least three things**. Your collection could be real, invented, serious, playful, personal, or strange.

It might be an archive of imaginary objects, a field guide, a cast of characters, a collection of places, a set of recommendations, or something entirely different.

### Your page should:

1. Store the collection in an **array of objects**.
2. Display information from the collection in the DOM.
3. Include at least one **visitor action** that changes what appears.
4. Use CSS to give the collection a clear visual voice.

One possible interaction is a button that reveals the next item:

```html
<h1 id="item-name"></h1>
<p id="item-description"></p>
<button id="next">Next discovery</button>
```

```js
const artifacts = [
  { name: "The Glass Key", description: "It opens an unseen door." },
  { name: "The Blue Map", description: "Its coastlines change." },
  { name: "The Silent Bell", description: "It rings in photographs." }
];

const nameElement = document.getElementById("item-name");
const descriptionElement = document.getElementById("item-description");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showArtifact() {
  const artifact = artifacts[currentIndex];
  nameElement.textContent = artifact.name;
  descriptionElement.textContent = artifact.description;
}

nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % artifacts.length;
  showArtifact();
});

showArtifact();
```

The `%` operator here helps us return to the first item after the last one.

**This is one possibility, not a required design.** You might instead make a collection of clickable cards, a filter, a random discovery, or a reveal.

### Test with a Visitor

Let someone explore without explaining first.

- Do they understand what can be interacted with?
- Does the page respond as they expect?
- What do they try to do that your interface does not yet support?
- What does their behavior reveal about your design?

---

# 7. A Few Useful Debugging Habits

- Open **DevTools → Console** and read errors carefully.
- Use `console.log(artifacts)` or `console.log(currentIndex)` to inspect values.
- Check whether your selector actually finds an element.
- Remember that `artifacts[0]` is the first item.
- If JavaScript runs before the HTML exists, use `<script src="script.js" defer></script>` in the document's `<head>`.
- Change one thing at a time and test again.

When you get an error, try to find out what it is telling you before replacing the whole solution.

---

# Field Notes

**What changes when the content of a website becomes something JavaScript can organize and display?**

You might write about:

- A difference you noticed between an object and an array
- Something that surprised you about creating elements through JavaScript
- A bug you investigated and what it revealed
- How you decided what your visitor could do
- What another person tried when they encountered your interface
- A moment when the code became easier—or harder—to understand
- An interaction you now want to create

---

# Homework — Extend Your Collection

Continue the **Archive That Answers Back** experiment, or adapt its ideas to a different concept.

- [ ] Store at least **five items** in an array of objects.
- [ ] Use JavaScript to display content from the collection.
- [ ] Include at least one interaction that changes what the visitor sees.
- [ ] Use functions and/or a loop where they help avoid repeated instructions.
- [ ] Style the experience intentionally with CSS.
- [ ] Ask someone to try it and make one revision based on what you observe.
- [ ] Commit and push your work to your course repository (`week-08`).
- [ ] Add a link and your discoveries to your Field Notes.

You do **not** need to use an external API or load JSON yet. We will connect our interfaces to information from outside the page in Week 09.

## Tutorials & References

- [W3Schools — JavaScript Objects](https://www.w3schools.com/js/js_objects.asp) — quick experiments with properties
- [W3Schools — JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp) — working with collections
- [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) — understanding the browser's document model
- [MDN — `document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) — creating elements with JavaScript
- [MDN — `addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) — responding to events

**Next week — Connecting to the World: Web Apps, APIs & JSON.**
