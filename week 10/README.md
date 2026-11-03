# Week 10 — Stories from Elsewhere

## Question

**What happens when a story depends on information arriving from somewhere else?**

Until now, most of the information in our websites has been written directly into our HTML or JavaScript.

We have created collections, made decisions, and built interfaces that respond to visitors.

But what if the information doesn't come from us?

What if it comes from another website, a database, a public archive, or a service that is constantly changing?

What if we don't know what the answer will be until we ask?

This week, we explore how websites communicate with other systems—and what happens when the information they receive becomes material for an experience.

---

## We Explore

- APIs (Application Programming Interfaces)
- Requests and responses
- JSON (JavaScript Object Notation)
- `fetch()`
- Promises and asynchronous code
- `async` and `await`
- Working with external data
- Loading, missing information, and errors
- Transforming information into an interface
- Source attribution

---

# Part 1 — Information from Somewhere Else

Imagine a webpage that tells you how many people are currently in space.

You could write:

```html
<h1>There are 10 people in space.</h1>
```

But what happens when that number changes?

You would need to update the website yourself.

What if the website could ask another service for the information?

And what if the answer could change each time someone visited?

This is one reason we use APIs.

## What Is an API?

An **Application Programming Interface** allows one program to communicate with another through a defined set of requests and responses.

For example, a website might ask:

- How many people are in space?
- What is the weather in a particular city?
- What artworks belong to a museum collection?
- What does Wikipedia know about a subject?
- What books match a search?
- What information is available about a particular place?

The website makes a request.

Another system provides a response.

Our JavaScript can use that response to create something in the browser.

```text
OUR WEBPAGE
    |
    | request
    v
EXTERNAL API
    |
    | response
    v
OUR JAVASCRIPT
    |
    | interpretation
    v
THE EXPERIENCE
```

But the response is not necessarily the experience.

**What we choose to do with the information is part of the design.**

---

# Part 2 — A Message from Space

Let's begin with a question:

**How many people are in space right now?**

Explore:

[Open Notify — People in Space API](http://api.open-notify.org/astros.json)

If the API is available, you'll receive information describing the number of people in space and their names.

The response may look something like this:

```json
{
  "message": "success",
  "number": 2,
  "people": [
    {
      "name": "Example Astronaut",
      "craft": "Example Spacecraft"
    },
    {
      "name": "Another Astronaut",
      "craft": "Example Spacecraft"
    }
  ]
}
```

*This is an illustrative example, not current astronaut information.*

What do you notice about the structure?

How is it different from HTML?

What information is available?

What information is missing?

What could we create from it?

**Note:** Public APIs sometimes change, become unavailable, or restrict requests from browsers. If this endpoint fails, we can still explore the response structure and experiment with another source.

---

# Part 3 — JSON

The response above uses **JSON**, or JavaScript Object Notation.

JSON is a common format for exchanging structured information.

It may look familiar because it resembles JavaScript objects and arrays.

For example:

```js
let astronaut = {
  name: "Example Astronaut",
  craft: "Example Spacecraft"
};
```

We can access properties:

```js
console.log(astronaut.name);
```

And JSON data often contains arrays of objects:

```js
let people = [
  { name: "Person A", craft: "Station" },
  { name: "Person B", craft: "Station" }
];
```

We already know how to work with collections.

Now we are discovering how those collections can arrive from somewhere outside our own files.

---

# Part 4 — Asking for Information with fetch()

JavaScript provides a function called `fetch()` for making requests.

Let's begin with an API that returns a small, predictable response:

[JSONPlaceholder — Example Post](https://jsonplaceholder.typicode.com/posts/1)

Open the URL.

What do you see?

Now open the browser console on your own page and try:

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data));
```

What appears in the console?

Try:

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data.title));
```

What changed?

## What Is Happening?

```js
fetch(url)
```

Sends a request.

```js
response.json()
```

Reads the response body and parses its JSON into JavaScript data.

```js
.then(data => {
  // use the data
})
```

Runs when the data is available.

Why don't we simply write:

```js
let data = fetch(url);
```

and immediately use it like an ordinary object?

Because the response may take time to arrive.

---

# Part 5 — Waiting for an Answer

When JavaScript requests information from somewhere else, the answer may not be available immediately.

The network takes time.

The server takes time.

Sometimes the request fails.

Sometimes the information doesn't exist.

This is why we need to think about **asynchronous code**.

A `Promise` represents an operation whose result may become available later.

We can also use `async` and `await` to express this more clearly.

```js
async function getPost() {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const data = await response.json();

  console.log(data);

}

getPost();
```

Notice the word:

```js
await
```

It tells JavaScript to wait for the result of that operation before continuing within the async function.

Try changing the requested post:

```text
/posts/1
/posts/2
/posts/3
```

What stays the same?

What changes?

---

# Exercise 1 — Turn a Response into a Page

Let's make a small website that retrieves information and displays it.

Create:

```text
api-experiment/
├── index.html
├── style.css
└── script.js
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A Message from Elsewhere</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>

<body>

  <main>
    <h1>A Message from Elsewhere</h1>

    <p id="status">Waiting for a message...</p>

    <article id="message"></article>

    <button id="another">Another Message</button>
  </main>

</body>
</html>
```

## style.css

```css
body {
  font-family: Georgia, serif;
  background: #f2f0e9;
  color: #222;
  padding: 40px;
}

main {
  max-width: 700px;
  margin: auto;
}

article {
  padding: 30px;
  margin: 30px 0;
  background: white;
  border: 1px solid #ccc;
}

button {
  padding: 12px 20px;
  cursor: pointer;
}
```

## script.js

```js
const status = document.getElementById("status");
const message = document.getElementById("message");
const button = document.getElementById("another");

async function getMessage() {

  status.textContent = "Searching for a message...";
  message.textContent = "";

  button.disabled = true;

  try {

    const number = Math.floor(Math.random() * 100) + 1;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${number}`
    );

    if (!response.ok) {
      throw new Error("The request failed.");
    }

    const data = await response.json();

    const heading = document.createElement("h2");
    heading.textContent = data.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = data.body;

    message.append(heading, paragraph);

    status.textContent = "A message has arrived.";

  } catch (error) {

    status.textContent = "The message could not be retrieved.";
    console.error(error);

  } finally {

    button.disabled = false;

  }

}

button.addEventListener("click", getMessage);

getMessage();
```

Open your website.

What happens before the response arrives?

What appears afterward?

What happens when you click the button?

Try changing the text, layout, and visual atmosphere.

Could this feel like receiving a transmission?

Finding an old letter?

Consulting an oracle?

Opening a mysterious archive?

**The same data can become very different experiences.**

---

# Part 6 — When Information Doesn't Arrive

What happens when the request fails?

Try deliberately changing the API URL to an address that does not exist.

Observe the console.

What does your interface show?

Now restore the working URL.

We should think about at least three possible states:

### Loading

The request has been made, but the information has not arrived.

### Success

The information has arrived and can be displayed.

### Error or Empty Result

The request failed, or there is no information to show.

These states are not merely technical problems.

They are part of the visitor's experience.

A website might say:

> Loading...

Or:

> Searching the archive...

Or:

> No messages have arrived from the other side.

Each communicates something different.

What kind of response belongs in your experience?

---

# Part 7 — Wikipedia as a Source

Let's explore a different kind of information.

Wikipedia contains articles about an enormous range of subjects.

Its API can return structured information that a website can use.

Explore:

[Wikipedia REST API Documentation](https://www.mediawiki.org/wiki/API:REST_API)

For a simple experiment, try the Wikipedia Action API's search endpoint:

[Search Wikipedia for "storytelling"](https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=storytelling&format=json&origin=*)

Notice that the response is more complicated than our previous example.

Can you identify where the search results are stored?

What does each result contain?

How might we turn these results into something someone can explore?

For example:

- A collection of unexpected connections
- A trail of related subjects
- A curiosity machine
- A map of ideas
- An archive of unfamiliar things

Not every API response is designed for human reading.

Part of our work is deciding how to interpret and present it.

---

# Exercise 2 — An Interface to Elsewhere

Choose an external source of information.

You may use one of today's APIs or find another public API.

Create a small web experience that retrieves information and transforms it into something meaningful.

Your experience might:

- Reveal a random piece of information
- Search a collection
- Present a changing message
- Connect two unrelated subjects
- Invite visitors to explore an archive
- Transform facts into a poetic composition
- Show how information changes over time

Your website should:

1. Make at least one API request.
2. Read the response as JavaScript data.
3. Select some information from the response.
4. Display it through the DOM.
5. Include a loading state.
6. Handle an error or missing result.
7. Identify the source of the information.

Think about the difference between:

**Displaying data**

and

**Designing an encounter with data.**

---

# Finding APIs

Here are a few places to explore:

- [Public APIs Directory](https://github.com/public-apis/public-apis) — A collection of public APIs across many subjects.
- [Open Library API](https://openlibrary.org/developers/api) — Books, authors, and bibliographic information.
- [The Metropolitan Museum of Art Collection API](https://metmuseum.github.io/) — Artwork and collection records.
- [NASA Open APIs](https://api.nasa.gov/) — Space and astronomy information.
- [Wikipedia API](https://www.mediawiki.org/wiki/API:REST_API) — Encyclopedia content and structured information.
- [Darius Kazemi's Corpora](https://github.com/dariusk/corpora) — Collections of JSON data for creative experimentation.

Some APIs require keys, have request limits, or restrict browser access.

For this week's experiment, favor an API that can be used directly from a browser without authentication.

Never publish private API keys or credentials in a public GitHub repository.

---

# A Note About Sources

Information from an API is not automatically neutral, complete, or correct.

Every source has a history, structure, and perspective.

Ask:

- Who collected this information?
- What was included?
- What was excluded?
- How current is it?
- What assumptions does it carry?
- What does the API make easy to discover?
- What does it make difficult to know?

When you select, organize, label, or transform information, you also shape what it communicates.

This will become especially important next week, when we explore **data as evidence, portrait, argument, or fable**.

---

# Field Notes

**What changes when your website depends on information you did not create?**

Consider:

- What surprised you about the response from an API?
- What was harder than you expected?
- What happened when the information was delayed or missing?
- How did you decide what to show?
- What did you leave out?
- How did the presentation change the meaning of the information?
- What assumptions might be built into the source?
- What new possibilities did external information suggest?

Include links to your experiments and any interesting APIs you discovered.

---

# Looking Toward the Final Project

We are also beginning to imagine what you might create for the final weeks of the course.

You do not need a polished proposal yet.

For next class, bring **two or three possible final-project ideas, questions, or fascinations**.

Think about:

- What are you curious about?
- What kind of experience would you like someone to encounter?
- What might a visitor do?
- What could the browser make possible?
- What might you need to learn or investigate?
- What material, information, or interaction might become part of it?

Your final project may build on your midterm or begin in a completely new direction.

Don't worry yet about having every technical detail resolved.

Begin with something you want to explore.

---

# Homework

## 1. Stories from Elsewhere

Create a small website that retrieves and uses information from an external API.

Include:

- [ ] A working API request using `fetch()`
- [ ] Data displayed or transformed through JavaScript
- [ ] At least one intentional design decision about how the information is encountered
- [ ] A loading state
- [ ] An error or empty state
- [ ] Attribution to the information source
- [ ] A link to your experiment in your Field Notes

The result does not need to be a large or polished application.

A small, thoughtful experiment is enough.

## 2. Final Project Seeds

Bring **two or three possible final-project ideas** to our next class.

For each, write a few sentences about what interests you and what someone might experience.

These are possibilities to explore, not commitments.

## 3. Field Notes

Document what you tried, what worked, what failed, and what you discovered.

---

## Tutorials & Resources

- [MDN — Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN — Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
- [MDN — Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [JavaScript.info — Fetch](https://javascript.info/fetch)
- [W3Schools — JavaScript Async](https://www.w3schools.com/js/js_async.asp)

**Next Week — Data as Evidence, Portrait, Argument, or Fable**

What happens when we begin choosing, arranging, and representing information—and how does that change the story it tells?
