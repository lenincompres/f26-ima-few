# Week 12 — Components, Characters, and Systems

## Central Question

**How can repeated structures, entities, and rules create a coherent world or experience?**

Over the past few weeks, we have learned to organize information, respond to visitors, communicate with external systems, and transform data into experiences.

As our projects grow, we begin to encounter another challenge.

How do we organize the code itself?

What happens when we have several characters that behave similarly but have different personalities?

What if we have many interactive objects that follow the same rules?

What if different parts of our website need to communicate with one another?

This week, we explore ways to organize complexity without losing the individuality of the things we create.

---

## What We'll Explore

- Objects with properties and methods
- Classes and constructors
- Instances
- The `this` keyword
- Encapsulation
- Reusable interface components
- HTML templates
- Composition and relationships between objects
- Organizing JavaScript projects
- Accessible interactive components
- Final-project design development

---

# 1. An Encounter — A Cast of Characters

Imagine a small fictional town inhabited by three characters.

Each character has:

- A name
- A personality
- A greeting
- A level of curiosity
- A memory of how many times someone has visited

Although the characters are different, they share a structure.

How might we represent them in JavaScript?

We could begin with objects:

```js
const luna = {
  name: "Luna",
  greeting: "Have you seen the moon tonight?",
  curiosity: 8,
  visits: 0
};

const sol = {
  name: "Sol",
  greeting: "There is something I need to tell you.",
  curiosity: 3,
  visits: 0
};
```

This works well.

But what if we want twenty characters?

What if every character needs to respond to visitors?

What if every character needs to remember something?

What is different about each character?

What is shared?

---

# 2. Objects Can Behave

An object can contain more than information.

It can also contain functions.

```js
const luna = {
  name: "Luna",
  visits: 0,

  greet() {
    this.visits++;

    return `Welcome. You have visited me ${this.visits} times.`;
  }
};
```

Try:

```js
console.log(luna.greet());
console.log(luna.greet());
console.log(luna.greet());
```

What changes each time?

Where is that information stored?

A function associated with an object is called a **method**.

The information associated with an object is stored in its **properties**.

In this example, `this` refers to the object on which the method is called.

```js
this.visits++;
```

Changes the number of visits belonging to that particular character.

We now have an object that contains both information and behavior.

---

# 3. From Objects to Classes

Imagine writing the same greeting method for every character.

We would repeat ourselves many times.

Instead, we could define a shared structure using a **class**.

```js
class Character {

  constructor(name, greeting, curiosity) {

    this.name = name;
    this.greeting = greeting;
    this.curiosity = curiosity;
    this.visits = 0;

  }

  greet() {

    this.visits++;

    return `${this.name}: ${this.greeting}`;

  }

}
```

We can now create characters from that class.

```js
const luna = new Character(
  "Luna",
  "Have you seen the moon tonight?",
  8
);

const sol = new Character(
  "Sol",
  "There is something I need to tell you.",
  3
);
```

Try:

```js
console.log(luna.greet());
console.log(sol.greet());
```

Then:

```js
console.log(luna.visits);
console.log(sol.visits);
```

Each character follows the same structure, but each maintains its own information.

## Vocabulary

| Concept | Meaning |
|---|---|
| Class | A shared definition of properties and behavior |
| Constructor | A method that initializes a new instance |
| Instance | An individual object created from a class |
| Property | Information associated with an object |
| Method | Behavior associated with an object |
| `new` | Creates a new instance |
| `this` | In these examples, the particular object using the method |

A class is not a character.

It describes how characters can be created and behave.

---

# 4. Shared Rules, Different Outcomes

Let's give our characters another method.

Add this inside the `Character` class:

```js
respond() {

  this.visits++;

  if (this.visits > 3) {
    return `${this.name}: You keep coming back.`;
  }

  if (this.curiosity > 5) {
    return `${this.name}: Tell me something strange.`;
  }

  return `${this.name}: I have nothing more to say.`;

}
```

Try calling:

```js
luna.respond();
sol.respond();
```

Repeat the interactions.

What happens?

The characters follow the same rules, but their responses depend on their individual properties and previous encounters.

Change the characters' curiosity values.

Change the conditions.

Invent another property:

- Trust
- Energy
- Patience
- Courage
- Happiness
- Knowledge

What kinds of behavior might emerge from these properties?

**How much individuality can emerge from a shared set of rules?**

---

# Exercise 1 — A Small Cast

Create a class representing a kind of entity.

It could be:

- A character
- A creature
- A fictional object
- A room
- A planet
- A musical instrument
- A memory
- A mysterious machine

Give your class at least three properties and two methods.

Create three or more instances.

Experiment with giving them different properties while allowing them to follow the same rules.

Observe their behavior in the console.

Consider:

- What makes these entities recognizable as members of the same group?
- What makes each one different?
- What happens when their properties change?
- Which behaviors belong to all instances?
- Which differences deserve their own rules?

---

# 5. A Collection of Instances

Instances are objects.

This means we can organize them using arrays, just as we did in previous classes.

```js
const characters = [
  new Character("Luna", "Look at the sky.", 8),
  new Character("Sol", "I have a secret.", 3),
  new Character("Terra", "There is much to discover.", 6)
];
```

We can iterate through them:

```js
characters.forEach(character => {
  console.log(character.greet());
});
```

Or filter them:

```js
const curiousCharacters = characters.filter(
  character => character.curiosity > 5
);
```

Or choose one randomly:

```js
const index = Math.floor(
  Math.random() * characters.length
);

const character = characters[index];

console.log(character.respond());
```

Notice how the techniques from our previous classes remain useful.

Classes do not replace arrays, objects, functions, or conditions.

They give us another way to organize them.

---

# 6. From Characters to Components

Now imagine that every character needs to appear on a webpage.

Each character might have:

- A heading
- A description
- A button
- A space for responses

These elements would have the same structure, but different content.

A reusable part of an interface is often called a **component**.

Components can be simple or complex:

- Navigation menus
- Cards
- Dialogs
- Character portraits
- Search results
- Interactive maps
- Media players

We don't need a framework to create them.

Let's begin with a function that creates a character card.

```js
function createCharacterCard(character) {

  const card = document.createElement("article");

  const heading = document.createElement("h2");
  heading.textContent = character.name;

  const response = document.createElement("p");
  response.textContent = character.greeting;

  const button = document.createElement("button");
  button.textContent = `Speak to ${character.name}`;

  button.addEventListener("click", () => {

    response.textContent = character.respond();

  });

  card.append(heading, response, button);

  return card;

}
```

In our HTML:

```html
<h1>Meet the Characters</h1>

<main id="characters"></main>
```

In our JavaScript:

```js
const container = document.querySelector("#characters");

characters.forEach(character => {

  const card = createCharacterCard(character);

  container.append(card);

});
```

Every character now has its own interface.

Yet we only wrote the instructions for creating that interface once.

What happens if we add another character to the array?

What happens if we change the component's structure?

---

# 7. HTML Templates

Creating many HTML elements through JavaScript can become difficult to read.

Sometimes it is easier to describe the structure directly in HTML and let JavaScript populate it.

HTML provides a `<template>` element for this purpose.

```html
<template id="character-template">

  <article class="character">

    <h2></h2>

    <p class="response" aria-live="polite"></p>

    <button type="button"></button>

  </article>

</template>

<main id="characters"></main>
```

The content of a template is not displayed immediately.

Instead, we can copy and populate it when we need it.

```js
function createCharacterCard(character) {

  const template = document.querySelector(
    "#character-template"
  );

  const card = template.content
    .firstElementChild
    .cloneNode(true);

  const heading = card.querySelector("h2");
  const response = card.querySelector(".response");
  const button = card.querySelector("button");

  heading.textContent = character.name;
  response.textContent = character.greeting;

  button.textContent = `Speak to ${character.name}`;

  button.addEventListener("click", () => {

    response.textContent = character.respond();

  });

  return card;

}
```

We can use the same loop as before:

```js
characters.forEach(character => {

  container.append(
    createCharacterCard(character)
  );

});
```

Notice that we are separating responsibilities.

- HTML describes the component's structure.
- CSS describes its appearance.
- JavaScript describes its behavior.
- The character object provides its information and rules.

This organization makes it easier to change one aspect without rewriting everything else.

---

# Exercise 2 — Give Your Entities an Interface

Return to the class you created in Exercise 1.

Create a webpage where each instance has its own interactive component.

You may use:

- A function that creates DOM elements
- An HTML template
- A combination of both

Each component should communicate something about the individual entity.

Give the visitor a way to interact with it.

Observe:

- Does each entity respond independently?
- Can visitors understand what they can do?
- What happens when you add another instance?
- Can you change the design of every component by editing a single place?

Try creating an experience with five, ten, or twenty instances.

When does repetition become interesting?

When does it become overwhelming?

---

# 8. Accessibility and Reusable Components

Reusability has another important consequence.

If we improve the accessibility of one reusable component, that improvement can benefit every instance.

If the component has an accessibility problem, however, we may reproduce that problem throughout our website.

Consider these two elements:

```html
<div onclick="doSomething()">Continue</div>
```

```html
<button type="button">Continue</button>
```

They can be styled to look identical.

But they do not communicate the same information to the browser.

A native button already supports keyboard interaction, focus, and recognizable button semantics.

A clickable `div` does not automatically provide those behaviors.

Whenever possible, use the HTML element that already expresses your intention.

## Communicating Change

Notice this attribute from our character template:

```html
<p class="response" aria-live="polite"></p>
```

`aria-live="polite"` helps assistive technologies announce changes to this element without unnecessarily interrupting the visitor.

This is useful when JavaScript updates information without navigating to another page.

Use live regions for meaningful updates, rather than every small visual change.

## Accessibility Experiment

Exchange your component-based experience with another student.

Navigate it using only the keyboard.

Try:

- `Tab`
- `Shift + Tab`
- `Enter`
- `Space`

Can you reach every interactive element?

Can you tell which element currently has focus?

Can you activate the controls?

Does the interface communicate what changed?

Check the page using an accessibility tool:

- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Lighthouse in Chrome Developer Tools

Automated tools can reveal certain problems, but they cannot determine whether an experience is fully accessible.

Identify at least one improvement you can make.

Could improving a single component improve the entire experience?

---

# 9. From Components to Systems

So far, each character maintains its own information.

But what if characters could affect one another?

Add another method to the `Character` class:

```js
meet(otherCharacter) {

  this.curiosity++;

  return `${this.name} meets ${otherCharacter.name}.`;

}
```

Now try:

```js
luna.meet(sol);

console.log(luna.curiosity);
```

An object can receive another object as an argument.

This allows us to describe relationships.

Imagine:

- Characters exchanging information
- Creatures competing for resources
- Objects being collected by a visitor
- Rooms sharing clues
- Musical instruments responding to one another
- Cards changing the behavior of other cards

The experience no longer depends only on individual entities.

It depends on their relationships.

## Composition

An object can also contain a collection of other objects.

For example:

```js
const town = {
  name: "Somewhere",
  inhabitants: characters
};
```

Or:

```js
const visitor = {
  name: "The Traveler",
  inventory: [],
  visitedPlaces: []
};
```

We can build larger structures by combining smaller ones.

This is one form of **composition**.

Instead of describing everything in one enormous object or function, we can give different parts of the experience their own responsibilities.

---

# Exercise 3 — Make a System

Using the entities from your previous exercises, introduce a relationship between them.

What happens when one entity acts upon another?

Your system might involve:

- Sharing or exchanging
- Collecting
- Discovering
- Competing
- Transforming
- Remembering
- Following
- Influencing

Start with one simple rule.

Observe what happens when you repeat it.

Change a property or condition.

Does the behavior remain predictable?

Can an unexpected outcome emerge?

**The story may emerge from the relationships between the parts rather than from any individual part.**

---

# 10. Organizing a Growing Project

Until now, we have often worked with three files:

```text
index.html
style.css
script.js
```

This structure is perfectly appropriate for many projects.

As a project grows, however, we might want to separate different responsibilities.

For example:

```text
project/
├── index.html
├── style.css
├── images/
├── data/
│   └── characters.json
└── js/
    ├── Character.js
    ├── components.js
    └── main.js
```

We could put the character class in its own file.

## Character.js

```js
export class Character {

  constructor(name, greeting) {

    this.name = name;
    this.greeting = greeting;

  }

  greet() {

    return `${this.name}: ${this.greeting}`;

  }

}
```

## main.js

```js
import { Character } from "./Character.js";

const luna = new Character(
  "Luna",
  "Have you seen the moon tonight?"
);

console.log(luna.greet());
```

## index.html

```html
<script type="module" src="js/main.js"></script>
```

JavaScript modules allow us to import and export definitions between files.

A module script is deferred by default, so we do not need to add the `defer` attribute.

Use a local development server when working with modules rather than opening your HTML through `file://`.

You do not need to divide every project into many files.

The purpose of organization is to make the project easier to understand.

---

# 11. When Not to Abstract

Classes, components, and modules are tools.

They are not requirements for every project.

Sometimes a simple function is enough.

Sometimes an array of objects is enough.

Sometimes ordinary HTML is the clearest solution.

Ask yourself:

- Am I repeating the same structure?
- Do several entities share behavior?
- Do individual entities need their own state?
- Would separating this code make it easier to understand?
- Am I creating complexity to solve a problem I do not actually have?

There are libraries and frameworks that provide more elaborate ways to organize components and applications.

But the underlying ideas are already available to us through HTML, CSS, and JavaScript.

Choose the simplest structure that supports your intention.

**An abstraction should make an idea easier to think about, not merely make the code look more sophisticated.**

---

# 12. Final Project — Designing the Experience

Next week, we will present our final-project designs.

This is an opportunity to communicate your intention, receive feedback, and refine your direction before completing the project.

You are not expected to present a finished website or working prototype.

Think about what you have learned throughout the semester:

- Structure and navigation
- Visual language and atmosphere
- Responsive composition
- Animation and transformation
- Rules and conditional behavior
- Collections and variation
- Interaction and audience participation
- APIs and external information
- Data and representation
- Components and systems
- Accessibility

Which of these possibilities genuinely serve your project?

You do not need to use every technique.

## Final Project Design Presentation

Prepare a short presentation that communicates:

### Concept and Intention

What are you creating?

What interests you about it?

What would you like to express, explore, or discover?

### References and Inspirations

What existing experiences, artworks, websites, stories, or ideas inform your project?

### Audience Experience

What will visitors encounter?

What will they be invited to do?

How might their actions affect the experience?

### Visual Language

Develop a mood board, typography, color palette, imagery, or other visual references.

Consider how these choices contribute to the project's intention.

### Structure and Interaction

Provide appropriate design materials:

- Sitemap
- User flow
- Wireframes
- Storyboard
- Interaction diagrams

Choose the formats that best communicate your idea.

### Technical Plan

What technologies, information, media, or resources might your project require?

What are the most important technical questions?

What parts of the experience might benefit from reusable components or shared rules?

### Accessibility

Who might encounter your project?

How will they navigate, perceive, and interact with it?

What accessibility considerations should influence the design from the beginning?

### Scope

What is essential to the experience?

What can be simplified?

What could be added if time allows?

Remember that the final project is due in Week 14.

Design an experience that is ambitious in its intention but realistic in its implementation.

---

# Field Notes

**What became easier to think about after you modeled it? What abstraction made the project harder to understand?**

Consider:

- What did your entities share?
- What made each instance individual?
- How did shared rules produce different behaviors?
- What became easier when you introduced reusable components?
- What happened when entities began interacting?
- What accessibility issues did you discover?
- Where was a simpler approach more appropriate?
- What could these ideas contribute to your final project?

Document your experiments and discoveries.

---

# Homework

## 1. Components, Characters, and Systems

Complete or extend one of today's experiments.

Create a small experience involving repeated entities, reusable components, or shared behavior.

Consider how repetition and variation contribute to the experience.

- [ ] Use a class or reusable function where appropriate.
- [ ] Create multiple instances or components.
- [ ] Introduce meaningful variation or interaction.
- [ ] Test the experience using keyboard navigation.
- [ ] Document your discoveries in your Field Notes.

You may incorporate this experiment into your final-project exploration if it is relevant.

## 2. Final Project Design Presentation

Prepare your design presentation for next week.

Include:

- [ ] Concept and intention
- [ ] References and inspirations
- [ ] Intended audience experience
- [ ] Mood board and visual direction
- [ ] Sitemap, user flow, wireframes, or storyboard
- [ ] Planned interactions and technical approach
- [ ] Accessibility considerations
- [ ] A realistic project scope

Technical experiments are welcome, but a working prototype is not required.

The purpose of the presentation is to communicate your design and receive feedback before completing the experience.

## 3. Field Notes

Document your weekly experiment and the development of your final-project design.

Include links to your work and presentation materials.

---

# Resources

### JavaScript

- [MDN — Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info — Class Basic Syntax](https://javascript.info/class)
- [MDN — Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN — HTML Template Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template)
- [MDN — JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

### Accessibility

- [Inclusive Components](https://inclusive-components.design/)
- [The A11Y Project — Checklist](https://www.a11yproject.com/checklist/)
- [WebAIM — Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [WAVE Accessibility Evaluation Tool](https://wave.webaim.org/)
- [RandomA11y — Accessible Color Combinations](https://randoma11y.com/)

---

## Next Week — Memory and Continuity

**What can a page remember, carry, or pass along?**

We will explore URL parameters, query strings, and browser storage.

We will also present and discuss our final-project designs.
