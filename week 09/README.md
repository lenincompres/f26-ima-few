# Week 09 — The Page Responds

## Question

**What changes when an audience can act and the page can answer?**

Last week, we explored how JavaScript can organize collections of information using objects and arrays, and how we can turn that information into elements on a webpage.

But an interface is more than something that displays information.

What if a visitor can make a choice?

What if the page remembers that choice while they are using it?

What if the same action produces different results depending on what happened before?

This week, we explore the relationship between **action, response, and consequence**.

---

## We Explore

- The Document Object Model (DOM)
- Selecting and changing HTML elements
- Classes, attributes, and content
- Event listeners
- Buttons, forms, and user input
- Conditions and changing state
- Creating and removing elements
- Feedback and affordances
- Designing meaningful interactions

---

# Part 1 — What Does the Page Invite You to Do?

Find a website with an interesting interaction.

Before using it, observe.

- What looks interactive?
- What do you expect to happen?
- What clues does the design provide?
- What happens when you interact?
- Does the response match your expectation?
- Does the interaction reveal something new?
- What happens if you repeat the action?

Think about the difference between a website that **contains buttons** and a website that **invites participation**.

---

# Part 2 — The DOM

When the browser reads HTML, it creates a structure of objects representing the document.

This is called the **Document Object Model**, or DOM.

JavaScript can find elements in that structure and change them.

For example:

```html
<h1 id="title">A Quiet Beginning</h1>

<p class="message">Nothing has happened yet.</p>
```

In JavaScript:

```js
const title = document.getElementById("title");

title.textContent = "Something Has Changed";
```

Or:

```js
const message = document.querySelector(".message");

message.style.color = "red";
```

We experimented with these ideas in the browser console.

Now we'll use them to build interfaces that respond to visitors.

---

# Part 3 — Events

An **event** is something that happens in the browser.

Examples include:

- A visitor clicks a button
- Someone types into a field
- A form is submitted
- A key is pressed
- An element receives focus
- A pointer moves over an element

JavaScript can listen for these events and respond.

```html
<button id="reveal">Reveal</button>

<p id="secret">The secret is hidden.</p>
```

```js
const button = document.getElementById("reveal");
const secret = document.getElementById("secret");

button.addEventListener("click", function() {
  secret.textContent = "The secret has been revealed.";
});
```

What happens when you click?

What happens when you click again?

Does the page have anything else to say?

---

# Exercise 1 — An Interface That Answers Back

Create a small webpage with a button and an element that changes when the button is clicked.

Begin with one response.

Then add a second possibility.

For example:

```js
let revealed = false;

button.addEventListener("click", function() {

  if (revealed) {
    secret.textContent = "The secret is hidden.";
    revealed = false;
  } else {
    secret.textContent = "The secret has been revealed.";
    revealed = true;
  }

});
```

Now the same action produces different results depending on the current state.

Try changing more than text:

- Color
- Visibility
- Images
- Classes
- Layout
- Sound, if appropriate
- Something else

**What should happen after the first interaction? What about the second?**

---

# Part 4 — Changing Classes

Sometimes it is better to let CSS control the appearance and JavaScript control when that appearance changes.

HTML:

```html
<div id="object" class="object">
  Something is waiting.
</div>

<button id="transform">Transform</button>
```

CSS:

```css
.object {
  padding: 40px;
  background: lightgray;
  transition: 0.5s;
}

.object.transformed {
  background: darkblue;
  color: white;
  transform: rotate(3deg);
}
```

JavaScript:

```js
const object = document.getElementById("object");
const transform = document.getElementById("transform");

transform.addEventListener("click", function() {
  object.classList.toggle("transformed");
});
```

Notice how the responsibilities are divided:

**HTML** describes the object.

**CSS** describes its possible appearances.

**JavaScript** decides when to change its state.

---

# Part 5 — Listening to the Visitor

Buttons are not the only way visitors communicate with a webpage.

We can ask them to enter information.

HTML:

```html
<label for="visitor-name">What is your name?</label>

<input id="visitor-name" type="text">

<button id="greet">Enter</button>

<p id="response"></p>
```

JavaScript:

```js
const nameInput = document.getElementById("visitor-name");
const greetButton = document.getElementById("greet");
const response = document.getElementById("response");

greetButton.addEventListener("click", function() {

  const name = nameInput.value.trim();

  if (name === "") {
    response.textContent = "You haven't told me your name.";
  } else {
    response.textContent = `Welcome, ${name}.`;
  }

});
```

Now the page's response depends on information supplied by the visitor.

What else could the page ask?

And what might it do with the answer?

---

# Part 6 — Forms

Forms let us collect information through a group of inputs.

```html
<form id="question-form">

  <label for="answer">
    What are you looking for?
  </label>

  <input id="answer" type="text" required>

  <button type="submit">Ask</button>

</form>

<p id="reply"></p>
```

JavaScript:

```js
const form = document.getElementById("question-form");
const answer = document.getElementById("answer");
const reply = document.getElementById("reply");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const value = answer.value.trim();

  reply.textContent = `You are looking for ${value}.`;

});
```

`event.preventDefault()` stops the browser from performing the form's usual submission behavior, which would otherwise navigate or reload the page.

Now we can decide what happens with the information.

Try adding a condition:

```js
if (value.toLowerCase() === "home") {
  reply.textContent = "Perhaps you are already there.";
} else {
  reply.textContent = `I don't know where to find ${value}.`;
}
```

---

# Exercise 2 — A Page That Asks Questions

Create a small interaction in which the visitor provides information and the page responds.

Your interface might be:

- An oracle
- A fictional character
- A strange questionnaire
- A personality test
- A confession booth
- A guessing game
- A recommendation machine
- A conversation with an object
- Something else entirely

Try to include at least two possible responses.

Think about:

- What does the page ask?
- Why does it ask?
- What can the visitor enter or choose?
- How does the response change?
- Does the visitor understand what is possible?
- What happens when they give an unexpected answer?

The interaction should contribute to the experience, not simply demonstrate that the code works.

---

# Part 7 — Creating Elements

JavaScript can also create new HTML elements.

```js
const newParagraph = document.createElement("p");

newParagraph.textContent = "A new message has appeared.";

document.body.appendChild(newParagraph);
```

What happens if you run this instruction several times?

You can also create elements inside a particular container.

HTML:

```html
<ul id="messages"></ul>

<button id="add-message">Add a Message</button>
```

JavaScript:

```js
const messages = document.getElementById("messages");
const addMessage = document.getElementById("add-message");

let count = 0;

addMessage.addEventListener("click", function() {

  count++;

  const item = document.createElement("li");

  item.textContent = `Message ${count}`;

  messages.appendChild(item);

});
```

Now the document grows as the visitor interacts with it.

This connects to last week's work with arrays and collections.

What if the new elements came from an array of messages?

What if their order changed?

What if the visitor could remove them?

---

# Part 8 — Feedback and Affordances

An interface needs to communicate what is possible.

A visitor should be able to recognize:

- What can be clicked
- What can be entered
- What can be changed
- What has already happened
- What the current state is
- What might happen next

Consider a button that changes something without any visible feedback.

Did it work?

Does the visitor know?

What if the button becomes disabled?

What if its label changes?

What if the interface responds in an unexpected but understandable way?

A successful interaction is not only one that works technically.

It is one that creates a meaningful relationship between **what the visitor does and what the page communicates**.

---

# Exercise 3 — Trade Without Explanation

Exchange your interactive page with another student.

Before explaining how it works, let them explore.

Observe:

- What do they try first?
- What do they think is interactive?
- What do they overlook?
- Do they understand the response?
- Do they repeat an action?
- Do they try something you did not anticipate?
- Where do they become confused?
- What surprises them?

Afterward, ask what they thought the page was inviting them to do.

Then consider what you might change.

---

# Debugging Interactions

When something doesn't respond as expected, investigate.

Open the browser console.

Try:

```js
console.log("The script is running.");
```

Inside an event listener:

```js
button.addEventListener("click", function() {
  console.log("The button was clicked.");
});
```

Check whether your element exists:

```js
console.log(document.getElementById("reveal"));
```

Inspect the value of an input:

```js
console.log(nameInput.value);
```

Ask:

- Is the JavaScript file connected?
- Does the selector match an element?
- Is the event listener attached?
- Is the event happening?
- Is the value what I expected?
- Is the condition true or false?
- Is another part of the code changing the result?

**Change one thing, observe, and try again.**

---

# Field Notes

**What did visitors think was possible before acting? How did your page teach—or fail to teach—its own behavior?**

You might also consider:

- What changed when you introduced user input?
- What was difficult about describing a response through code?
- What did your page need to remember while someone interacted?
- What unexpected action did a visitor try?
- When did an interaction feel meaningful rather than decorative?
- What did you learn from watching someone use your work?
- What would you change after testing?

Include links to your experiments.

---

# Homework — A Page That Responds

Create a small interactive web experience in which a visitor's actions meaningfully change what happens.

Your project should include:

- [ ] A linked JavaScript file
- [ ] At least two event-driven interactions or responses
- [ ] At least one form input or other visitor-provided value
- [ ] A condition that changes the response
- [ ] At least one DOM update to text, attributes, classes, or elements
- [ ] Clear feedback about what happened
- [ ] A brief test with another person
- [ ] Field Notes describing what you discovered

You may continue an experiment from class or create something new.

A small, intentional experience is better than a complicated one that does not communicate clearly.

Save your work in your course repository and link it from your Field Notes.

---

## Tutorials & Resources

Use these as needed while experimenting:

- [W3Schools — JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) — Introduction and interactive examples.
- [MDN — Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) — How JavaScript responds to browser events.
- [MDN — Manipulating Documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) — Finding, changing, and creating elements.
- [MDN — Working with Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms) — Form structure and behavior.

---

**Next Week — Stories from Elsewhere**

What happens when the information our website uses doesn't come from the visitor or our own files, but from somewhere else?
