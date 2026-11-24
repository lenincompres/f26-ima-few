# Week 12 — Components, Characters, and Systems

## Central Question

**How can we build complex experiences from simple, reusable parts?**

Throughout the semester, we have learned to structure information, design interfaces, respond to visitors, communicate with external systems, and transform data into experiences.

As our projects grow, we encounter another challenge: organizing complexity.

How can we reuse something we have already created?

How can different entities share behavior while maintaining their individuality?

Can we extend the vocabulary of HTML itself?

Today, we explore how smaller structures can become the building blocks of larger experiences.

---

## What We'll Explore

- JavaScript modules
- Importing and exporting code
- Objects, properties, and methods
- Classes, constructors, and instances
- Inheritance and specialization
- Creating and manipulating HTML elements
- Encapsulation and separation of concerns
- Custom HTML elements
- HTML templates
- Accessible components
- Composition and systems
- Final-project design development

---

# 1. Organizing Our Code — JavaScript Modules

Until now, many of our projects have followed a familiar structure:

```text
project/
├── index.html
├── style.css
└── script.js
```

But what happens when our JavaScript file grows to hundreds of lines?

What if we write a useful function that we want to use in several projects?

We can organize JavaScript into separate files, each with its own responsibilities.

Consider this structure:

```text
project/
├── index.html
├── style.css
├── script.js
└── utilities.js
```

In `utilities.js`, let's define a function that selects a random item from an array.

```js
export function randomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
```

In `script.js`, we can import that function.

```js
import { randomItem } from "./utilities.js";

const greetings = [
  "Welcome, traveler.",
  "Have we met before?",
  "There is something you should know."
];

console.log(randomItem(greetings));
```

To use JavaScript modules, we need to identify our main script as a module in our HTML.

```html
<script type="module" src="script.js"></script>
```

A module script is deferred by default, so we don't need to add the `defer` attribute.

Use a local development server when working with modules.

## Importing and Exporting

The `export` keyword makes a definition available to other modules.

The `import` keyword brings an exported definition into another module.

We can export multiple things from the same file.

```js
export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomNumber(min, max) {
  return min + Math.random() * (max - min);
}

export const colors = ["red", "green", "blue"];
```

And import only what we need.

```js
import { randomItem, colors } from "./utilities.js";

document.body.style.backgroundColor = randomItem(colors);
```

We can export functions, variables, objects, and classes.

## Why Modules?

Modules allow us to:

- Organize code according to its responsibilities.
- Reuse code across different files and projects.
- Work on one part of a project without navigating through everything else.
- Share useful tools with other developers.
- Avoid unnecessarily placing variables in the global scope.

A module is not necessarily an entire application.

It can be a small collection of tools that contributes to a larger experience.

---

## Experiment — A Shared Toolbox

Create a `utilities.js` module containing two or three functions.

These could help you:

- Select a random item.
- Generate a random number.
- Format a string.
- Perform a calculation.
- Transform a value.
- Choose a color.

Import and use these functions in your main script.

Exchange a useful function with another student.

Can you use their function without needing to understand their entire project?

What makes a function easy to reuse?

---

# 2. Objects with Behavior

We have already used objects to organize information.

```js
const luna = {
  name: "Luna",
  curiosity: 8,
  greeting: "Have you seen the moon tonight?",
  visits: 0
};
```

But objects can contain more than information.

They can also contain functions.

```js
const luna = {
  name: "Luna",
  curiosity: 8,
  greeting: "Have you seen the moon tonight?",
  visits: 0,

  greet() {
    this.visits++;
    return `${this.name}: ${this.greeting}`;
  }
};
```

Try:

```js
console.log(luna.greet());
console.log(luna.greet());
console.log(luna.visits);
```

What changes each time?

Where is that information stored?

A function associated with an object is called a **method**.

The information associated with an object is stored in its **properties**.

In this example, `this` refers to the object on which the method is called.

```js
this.visits++;
```

Changes the number of visits belonging to Luna.

The object now contains both information and behavior.

This allows us to think about an entity as something that knows things and can do things.

---

# 3. Classes and Instances

Imagine a fictional town inhabited by several characters.

Each character has:

- A name
- A greeting
- A level of curiosity
- A memory of previous encounters

Although the characters are different, they share a structure.

We could create each character as a separate object, repeating the same properties and methods.

Or we could define that shared structure once using a **class**.

Let's create a new file called `Character.js`.

```js
export class Character {

  constructor(name, greeting, curiosity = 5) {

    this.name = name;
    this.greeting = greeting;
    this.curiosity = curiosity;
    this.visits = 0;

  }

  greet() {

    this.visits++;

    return `${this.name}: ${this.greeting}`;

  }

  respond() {

    if (this.curiosity > 5) {
      return "Tell me something strange.";
    }

    return "I have nothing more to say.";

  }

}
```

In `script.js`, we can import the class.

```js
import { Character } from "./Character.js";

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

console.log(luna.respond());
console.log(sol.respond());

console.log(luna.visits);
console.log(sol.visits);
```

Each character follows the same structure but maintains its own information.

## Vocabulary

| Concept | Meaning |
|---|---|
| Class | A shared definition of properties and behavior |
| Constructor | A special method that initializes a new instance |
| Instance | An individual object created from a class |
| Property | Information associated with an object |
| Method | Behavior associated with an object |
| `new` | Creates a new instance |
| `this` | In these examples, the particular object using the method |

A class is not a character.

It describes how characters can be created and behave.

## Collections of Instances

Instances are objects, so we can organize them into arrays.

```js
const characters = [
  new Character("Luna", "Look at the sky.", 8),
  new Character("Sol", "I have a secret.", 3),
  new Character("Terra", "There is much to discover.", 6)
];
```

We can iterate through them.

```js
characters.forEach(character => {
  console.log(character.greet());
});
```

Filter them.

```js
const curiousCharacters = characters.filter(
  character => character.curiosity > 5
);
```

Or use the function from our utilities module.

```js
import { randomItem } from "./utilities.js";

const character = randomItem(characters);

console.log(character.greet());
```

Notice how the techniques from our previous classes remain useful.

Classes do not replace arrays, objects, functions, or conditions.

They give us another way to organize them.

---

# 4. Extending Classes — Inheritance

What if some of our characters are explorers and others are guardians?

They are all characters, but they may have different abilities or behaviors.

Instead of defining entirely new classes from scratch, we can extend an existing class.

In `Explorer.js`:

```js
import { Character } from "./Character.js";

export class Explorer extends Character {

  constructor(name, greeting, curiosity, destination) {

    super(name, greeting, curiosity);

    this.destination = destination;

  }

  explore() {

    return `${this.name} travels to ${this.destination}.`;

  }

}
```

In `script.js`:

```js
import { Explorer } from "./Explorer.js";

const terra = new Explorer(
  "Terra",
  "There is much to discover.",
  9,
  "The Forgotten Garden"
);

console.log(terra.greet());
console.log(terra.explore());
```

Although we never defined `greet()` inside the `Explorer` class, explorers can greet because they inherit that method from `Character`.

The `extends` keyword establishes this relationship.

The `super()` call invokes the constructor of the parent class.

## Specializing Behavior

A subclass can also redefine an inherited method.

In `Guardian.js`:

```js
import { Character } from "./Character.js";

export class Guardian extends Character {

  respond() {

    return "You may not pass without permission.";

  }

}
```

```js
import { Guardian } from "./Guardian.js";

const sol = new Guardian(
  "Sol",
  "Who goes there?",
  3
);

console.log(sol.greet());
console.log(sol.respond());
```

The guardian inherits the constructor and greeting behavior from `Character`, but defines its own response.

Redefining an inherited method is called **overriding**.

We can also extend an inherited method rather than completely replacing it.

```js
greet() {

  return `${super.greet()} State your purpose.`;

}
```

Here, `super.greet()` calls the original method from the parent class.

## Inheritance

Inheritance allows us to express relationships between types of entities.

```text
Character
├── Explorer
├── Guardian
└── Merchant
```

Each specialized class can inherit shared properties and behavior while introducing its own.

What belongs to every character?

What belongs only to explorers?

What belongs only to one particular instance?

---

# Exercise 1 — A Small World

Create a class representing a kind of entity.

It could be:

- A character
- A creature
- A musical instrument
- A fictional object
- A vehicle
- A planet
- A mysterious machine

Give your class properties and methods.

Then create at least one subclass that extends it.

Create several instances and experiment with their behavior in the console.

Organize your classes into modules and import them into your main script.

Consider:

- What do all your entities have in common?
- What makes each instance different?
- What makes each subclass different?
- Which behaviors should be inherited?
- Which behaviors should be specialized?

---

# 5. Creating HTML with JavaScript

So far, our characters exist as JavaScript objects.

How can we give them a presence on the webpage?

We have already used JavaScript to select and modify existing HTML elements.

But JavaScript can also create new ones.

```js
const heading = document.createElement("h2");

heading.textContent = "Luna";

document.body.append(heading);
```

The `createElement()` method creates an HTML element.

The element exists in JavaScript, but it does not appear on the page until we insert it into the document.

We can create more elaborate structures.

```js
const card = document.createElement("article");
card.classList.add("character");

const heading = document.createElement("h2");
heading.textContent = "Luna";

const description = document.createElement("p");
description.textContent = "A curious traveler.";

const button = document.createElement("button");
button.textContent = "Speak";

card.append(heading, description, button);

document.body.append(card);
```

The result is equivalent to writing:

```html
<article class="character">
  <h2>Luna</h2>
  <p>A curious traveler.</p>
  <button>Speak</button>
</article>
```

We can style these elements using CSS, just as we would any other HTML.

```css
.character {
  padding: 1rem;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
}
```

## Manipulating Elements

Once we have a reference to an HTML element, we can manipulate it.

```js
card.classList.add("active");

card.classList.remove("active");

card.classList.toggle("active");

card.setAttribute("data-character", "luna");

card.remove();
```

Some useful DOM methods and properties:

| Method or Property | Purpose |
|---|---|
| `document.createElement()` | Creates an HTML element |
| `append()` | Inserts content at the end of an element |
| `prepend()` | Inserts content at the beginning |
| `remove()` | Removes an element from the document |
| `replaceChildren()` | Replaces an element's contents |
| `textContent` | Reads or changes text |
| `classList` | Manages CSS classes |
| `setAttribute()` | Sets an HTML attribute |
| `getAttribute()` | Reads an HTML attribute |
| `addEventListener()` | Responds to events |

HTML elements are themselves JavaScript objects, with properties and methods.

---

# 6. From Objects to Components

Imagine that every character needs its own interface.

Each interface might contain:

- A heading
- A description
- A button
- A space for responses

A reusable part of an interface is often called a **component**.

There are different ways to establish the relationship between an object and its visual representation.

## Approach A — Separating the Object from Its Interface

We can keep our `Character` class independent of HTML and create a function that generates its interface.

In `components.js`:

```js
export function createCharacterCard(character) {

  const card = document.createElement("article");
  card.classList.add("character");

  const heading = document.createElement("h2");
  heading.textContent = character.name;

  const button = document.createElement("button");
  button.textContent = `Speak to ${character.name}`;

  const response = document.createElement("p");
  response.setAttribute("aria-live", "polite");

  button.addEventListener("click", () => {
    response.textContent = character.greet();
  });

  card.append(heading, button, response);

  return card;

}
```

In `script.js`:

```js
import { createCharacterCard } from "./components.js";

characters.forEach(character => {

  const card = createCharacterCard(character);

  document.body.append(card);

});
```

Our character class does not need to know how it is being displayed.

We could represent the same character through HTML, a canvas, a game, or a text-based experience.

The function is responsible for creating the interface.

The character is responsible for its information and behavior.

This is an example of **separation of concerns**.

## Approach B — An Object That Owns Its Interface

Alternatively, an object can create and maintain its own HTML element.

Let's extend our existing `Character` class.

In `VisualCharacter.js`:

```js
import { Character } from "./Character.js";

export class VisualCharacter extends Character {

  constructor(name, greeting, curiosity) {

    super(name, greeting, curiosity);

    this.element = document.createElement("article");
    this.element.classList.add("character");

    const heading = document.createElement("h2");
    heading.textContent = this.name;

    const button = document.createElement("button");
    button.textContent = `Speak to ${this.name}`;

    this.response = document.createElement("p");
    this.response.setAttribute("aria-live", "polite");

    button.addEventListener("click", () => {
      this.speak();
    });

    this.element.append(heading, button, this.response);

  }

  speak() {

    this.response.textContent = this.greet();

  }

}
```

In `script.js`:

```js
import { VisualCharacter } from "./VisualCharacter.js";

const luna = new VisualCharacter(
  "Luna",
  "Look at the sky.",
  8
);

document.body.append(luna.element);
```

The object now maintains its own visual representation.

We can also interact with it programmatically.

```js
luna.speak();

luna.element.classList.add("active");

luna.element.remove();
```

This is an example of **encapsulation**: grouping related information and behavior into a single unit.

## Which Approach Should We Use?

It depends on what we are creating.

If a class represents an abstraction that could be useful in many different contexts, separating it from the interface may make it more reusable.

If a class represents something inherently visual or interactive, managing its own HTML element may make it easier to work with.

Neither approach is inherently better.

Consider what responsibilities belong to the object and which belong elsewhere.

---

# 7. Extending HTML Itself — Custom Elements

We have created objects that represent characters.

We have created objects that own HTML elements.

But could an object actually be an HTML element?

HTML elements are instances of classes provided by the browser.

One of these classes is `HTMLElement`.

Just as we extended our own `Character` class, we can extend `HTMLElement`.

In `CharacterElement.js`:

```js
export class CharacterElement extends HTMLElement {

  connectedCallback() {

    const name = this.getAttribute("name");
    const greeting = this.getAttribute("greeting");

    const heading = document.createElement("h2");
    heading.textContent = name;

    const button = document.createElement("button");
    button.textContent = `Speak to ${name}`;

    const response = document.createElement("p");
    response.setAttribute("aria-live", "polite");

    button.addEventListener("click", () => {
      response.textContent = greeting;
    });

    this.replaceChildren(heading, button, response);

  }

}

customElements.define("story-character", CharacterElement);
```

We can load this module directly from our HTML.

```html
<script type="module" src="CharacterElement.js"></script>
```

Or import it from our main JavaScript module.

```js
import "./CharacterElement.js";
```

This import executes the module, including the instruction that registers our custom element.

Now we can write:

```html
<story-character
  name="Luna"
  greeting="Have you seen the moon tonight?"
></story-character>

<story-character
  name="Sol"
  greeting="There is something I need to tell you."
></story-character>

<story-character
  name="Terra"
  greeting="There is much to discover."
></story-character>
```

We have created a new kind of HTML element.

## Understanding the Code

### `extends HTMLElement`

Our class inherits the properties and methods of an HTML element.

We don't need to create a separate `this.element` property.

The object itself is the element.

### `connectedCallback()`

This is a lifecycle method provided by the Custom Elements API.

The browser calls it when an instance of our custom element becomes connected to the document.

It is a useful place to read attributes and construct the element's interface.

Unlike a constructor, it may run more than once if the element is removed and reinserted.

### `customElements.define()`

```js
customElements.define("story-character", CharacterElement);
```

Registers our class under a new HTML tag name.

Custom element names must contain a hyphen.

For example:

```html
<story-character></story-character>
<magic-door></magic-door>
<weather-card></weather-card>
<sound-player></sound-player>
<interactive-map></interactive-map>
```

## Styling Custom Elements

Custom elements can be styled using ordinary CSS.

```css
story-character {
  display: block;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid currentColor;
  border-radius: 0.5rem;
}

story-character h2 {
  margin-top: 0;
}

story-character button {
  cursor: pointer;
}
```

## Creating Custom Elements Programmatically

We can also create instances using JavaScript.

```js
const luna = document.createElement("story-character");

luna.setAttribute("name", "Luna");
luna.setAttribute("greeting", "Look at the sky.");

document.body.append(luna);
```

Or, once the class has been registered, instantiate it directly.

```js
import { CharacterElement } from "./CharacterElement.js";

const luna = new CharacterElement();

luna.setAttribute("name", "Luna");
luna.setAttribute("greeting", "Look at the sky.");

document.body.append(luna);
```

Our custom element can be created, selected, styled, and manipulated like other HTML elements.

---

# 8. Combining Models and Custom Elements

Our custom element currently contains its own greeting behavior.

But we already have a class that represents a character.

Rather than repeating that logic, we could combine the two.

In `CharacterElement.js`:

```js
import { Character } from "./Character.js";

export class CharacterElement extends HTMLElement {

  connectedCallback() {

    const name = this.getAttribute("name");
    const greeting = this.getAttribute("greeting");
    const curiosity = Number(
      this.getAttribute("curiosity") ?? 5
    );

    this.character ??= new Character(
      name,
      greeting,
      curiosity
    );

    const heading = document.createElement("h2");
    heading.textContent = this.character.name;

    const button = document.createElement("button");
    button.textContent = `Speak to ${this.character.name}`;

    this.response = document.createElement("p");
    this.response.setAttribute("aria-live", "polite");

    button.addEventListener("click", () => {
      this.speak();
    });

    this.replaceChildren(heading, button, this.response);

  }

  speak() {

    this.response.textContent = this.character.greet();

  }

}

customElements.define("story-character", CharacterElement);
```

Notice the relationship:

```text
CharacterElement
├── Character instance
├── Heading
├── Button
└── Response paragraph
```

The custom element contains a character object.

The character manages its own information and behavior.

The custom element manages its interface.

This is an example of **composition**: building a larger entity by combining smaller entities.

## Inheritance and Composition

Inheritance describes what something **is**.

Composition describes what something **has**.

| Relationship | Example |
|---|---|
| Inheritance | An Explorer is a Character |
| Inheritance | A CharacterElement is an HTMLElement |
| Composition | A CharacterElement has a Character |
| Composition | A CharacterElement has a Button |
| Composition | A Town has a collection of Characters |

Both approaches allow us to organize complexity.

---

# 9. HTML Templates

As our components grow, creating every HTML element individually through JavaScript can become difficult to read.

Sometimes it is easier to describe the structure directly in HTML and let JavaScript populate it.

HTML provides a `<template>` element for this purpose.

```html
<template id="character-template">

  <article class="character">

    <h2></h2>

    <button type="button"></button>

    <p class="response" aria-live="polite"></p>

  </article>

</template>
```

The contents of a template are not displayed immediately.

Instead, we can copy and populate them whenever we need them.

Inside our `CharacterElement` class, we could replace the element-creation code with:

```js
const template = document.querySelector(
  "#character-template"
);

const content = template.content.cloneNode(true);

const heading = content.querySelector("h2");
const button = content.querySelector("button");

this.response = content.querySelector(".response");

heading.textContent = this.character.name;

button.textContent = `Speak to ${this.character.name}`;

button.addEventListener("click", () => {
  this.speak();
});

this.replaceChildren(content);
```

The structure of our component is now defined in HTML.

Its appearance is defined in CSS.

Its behavior is defined in JavaScript.

Its underlying information is managed by a character object.

This is another way of separating responsibilities.

Templates are not required for custom elements, and custom elements are not required for templates.

They are independent tools that can work together.

---

# Exercise 2 — Invent an HTML Element

Return to the entities you created in Exercise 1.

Give them a visual representation by creating a custom HTML element.

You might invent:

- `<story-character>`
- `<magic-object>`
- `<memory-card>`
- `<fictional-creature>`
- `<planet-view>`
- `<sound-machine>`
- `<mystery-door>`

Your custom element should:

- Extend `HTMLElement`.
- Be registered using `customElements.define()`.
- Accept at least one custom attribute.
- Create or populate its own HTML structure.
- Respond to at least one visitor interaction.
- Be reusable across multiple instances.

Create at least three instances in your HTML.

Experiment with giving them different attributes.

Style them using CSS.

Consider:

- What happens when you add another instance?
- Can you change every instance by editing a single class?
- Does each instance maintain its own state?
- Could someone use your custom element without understanding its internal JavaScript?

Exchange your custom element with another student.

Can they use it simply by importing your module and writing the appropriate HTML?

---

# 10. Accessibility and Reusable Components

Reusability has an important consequence.

If we improve the accessibility of one component, that improvement can benefit every instance.

If our component has an accessibility problem, however, we may reproduce that problem throughout our website.

## Semantic HTML

Consider these two elements:

```html
<div onclick="doSomething()">Continue</div>
```

```html
<button type="button">Continue</button>
```

They can be styled to look identical.

But they do not communicate the same information to the browser.

A native button already supports:

- Keyboard interaction
- Focus
- Recognizable button semantics
- Activation through assistive technologies

A clickable `div` does not automatically provide those behaviors.

Similarly, creating a custom element does not automatically give it the accessibility features of a native interactive element.

Whenever possible, use semantic HTML inside your custom components.

```html
<story-character>
  <h2>Luna</h2>
  <button>Speak to Luna</button>
  <p></p>
</story-character>
```

The custom element organizes the component.

The native HTML elements communicate its internal structure and functionality.

## Communicating Change — ARIA Live Regions

When JavaScript changes the contents of an element, that change may be immediately visible to some visitors but unnoticed by others.

Consider our character's response.

```html
<p class="response" aria-live="polite"></p>
```

When the visitor clicks a button, JavaScript updates the paragraph.

```js
this.response.textContent = this.character.greet();
```

A screen reader may not otherwise announce this change, especially if the visitor's focus remains on the button.

The `aria-live` attribute identifies a region whose changing content should be communicated to assistive technologies.

| Value | Behavior |
|---|---|
| `off` | Changes are not normally announced |
| `polite` | Changes are announced at the next suitable opportunity |
| `assertive` | Urgent changes may interrupt the current announcement |

Live regions can be useful for:

- Character dialogue
- Form confirmations
- Search results
- Game outcomes
- Loading and error messages

Avoid announcing every small visual change, such as animation frames or continuously changing mouse coordinates.

Communicate changes that are meaningful to the visitor.

## Accessibility Experiment

Exchange your component-based experience with another student.

Navigate the experience using only the keyboard.

Try:

- `Tab`
- `Shift + Tab`
- `Enter`
- `Space`

Can you reach every interactive element?

Can you identify which element currently has focus?

Can you activate the controls?

Does the interface communicate what changed?

Check your page using an accessibility evaluation tool.

- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Lighthouse in Chrome Developer Tools

You can also experiment with your operating system's built-in screen reader, such as VoiceOver on macOS or Narrator on Windows.

Automated tools can reveal certain problems, but they cannot determine whether an experience is fully accessible.

Identify at least one improvement you can make.

Could improving a single component improve the entire experience?

---

# 11. From Components to Systems

So far, each of our characters behaves independently.

But what happens when entities begin to affect one another?

Let's add a method to our original `Character` class.

```js
meet(otherCharacter) {

  this.curiosity++;
  otherCharacter.curiosity++;

  return `${this.name} meets ${otherCharacter.name}.`;

}
```

Now try:

```js
luna.meet(sol);

console.log(luna.curiosity);
console.log(sol.curiosity);
```

An object can receive another object as an argument.

This allows us to describe relationships.

Imagine:

- Characters exchanging information.
- Creatures competing for resources.
- Objects being collected by a visitor.
- Rooms sharing clues.
- Musical instruments responding to one another.
- Cards changing the behavior of other cards.

The experience no longer depends only on individual entities.

It depends on their relationships.

## Collections and Shared State

We can also create objects that contain collections of other objects.

```js
const town = {
  name: "Somewhere",
  inhabitants: characters
};
```

Or define an object representing the visitor.

```js
const visitor = {
  name: "The Traveler",
  inventory: [],
  visitedPlaces: []
};
```

Different components might contribute to or respond to this shared information.

We can build larger structures by combining smaller ones.

```text
Experience
├── Visitor
│   ├── Inventory
│   └── Visited Places
├── Town
│   └── Characters
└── Interface
    ├── Character Elements
    ├── Inventory Display
    └── Navigation
```

Rather than describing everything in one enormous object or function, we can give different parts of the experience their own responsibilities.

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

The story may emerge from the relationships between the parts rather than from any individual part.

---

# 12. Choosing an Appropriate Structure

Today, we explored several ways of organizing information, behavior, and interfaces.

| Approach | Purpose |
|---|---|
| Module | Organizes and shares code |
| Function | Encapsulates a reusable operation |
| Object | Groups related information and behavior |
| Class | Defines a shared structure for instances |
| Inheritance | Extends an existing type of object |
| Component | Provides a reusable part of an interface |
| Custom Element | Extends the vocabulary of HTML |
| Composition | Combines smaller entities into larger ones |

These are tools, not requirements for every project.

Sometimes a simple function is enough.

Sometimes an array of objects is enough.

Sometimes ordinary HTML is the clearest solution.

Ask yourself:

- Am I repeating the same structure?
- Do several entities share behavior?
- Do individual entities need their own state?
- Would separating this code make it easier to understand?
- Could this part be useful in another project?
- Am I introducing complexity to solve a problem I do not actually have?

An abstraction should make an idea easier to think about, not merely make the code look more sophisticated.

---

# 13. Final Project — Designing the Experience

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

Prepare a short presentation that communicates the following.

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

**What became easier to create or understand when you began thinking in reusable parts?**

Consider:

- What became easier when you separated your code into modules?
- What did your entities share?
- What made each instance individual?
- What was inherited, and what was specialized?
- How did you decide where information and behavior should belong?
- What possibilities emerged when you created your own HTML elements?
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

- [ ] Organize your JavaScript into modules.
- [ ] Create a reusable class or component.
- [ ] Create multiple instances.
- [ ] Introduce meaningful variation or interaction.
- [ ] Experiment with a custom HTML element.
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

## JavaScript Modules

- [MDN — JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info — Export and Import](https://javascript.info/import-export)

## Objects and Classes

- [MDN — Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN — Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info — Class Basic Syntax](https://javascript.info/class)
- [JavaScript.info — Class Inheritance](https://javascript.info/class-inheritance)

## DOM and Web Components

- [MDN — Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN — HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
- [MDN — Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [MDN — Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [MDN — HTML Template Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template)

## Accessibility

- [MDN — ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)
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
