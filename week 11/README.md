# Week 11 — Data as Evidence, Portrait, Argument, or Fable

## Central Question

**When does data become evidence, portrait, argument, memory, or fable—and whose perspective does it center?**

Last week, we learned how websites can request information from elsewhere using APIs, JSON, and `fetch()`.

But receiving information is only the beginning.

What happens when we decide which information to include, how to arrange it, what to emphasize, and what to leave out?

The same collection of facts can become a scientific report, a personal portrait, a political argument, a historical archive, or even a fictional world.

This week, we explore data not simply as information to display, but as material to interpret.

---

## What We'll Explore

- JSON and CSV as ways to represent information
- Parsing and transforming data
- `map()`, `filter()`, `sort()`, and `reduce()`
- Grouping and summarizing collections
- Visual representations: charts, scales, labels, and comparisons
- Missing data and misleading representations
- Accessibility and alternative ways to encounter information
- Final-project ideas and design directions

---

# 1. An Encounter — The Same Data, Different Stories

Consider this fictional dataset describing visitors to a mysterious museum:

| Exhibit | Visitors | Average Time (minutes) | Satisfaction (1–5) |
|---|---:|---:|---:|
| The Mirror Room | 120 | 12 | 4.8 |
| The Forgotten Garden | 80 | 25 | 4.9 |
| The Clock Tower | 200 | 5 | 3.2 |
| The Whispering Hall | 60 | 40 | 4.7 |
| The Empty Gallery | 150 | 2 | 2.1 |

What story does this data tell?

Perhaps:

**The Clock Tower is the most popular exhibit.**

But we might also say:

**Visitors spend the most time in the Whispering Hall.**

Or:

**The Forgotten Garden receives the highest satisfaction rating.**

Or:

**The Empty Gallery attracts visitors but rarely holds their attention.**

All these statements can be supported by the same fictional data.

Yet each creates a different impression of the museum.

### Group Exploration — Four Ways to Tell a Story

Divide into groups. Each group receives the same dataset but a different intention.

- **Evidence:** What can we reasonably conclude from the numbers?
- **Portrait:** What can the data reveal about the museum and its visitors?
- **Argument:** How might we persuade someone that the museum should change?
- **Fable:** What imaginative story could emerge from these patterns?

Decide:

1. What information will you emphasize?
2. What will you leave out?
3. What title will you give your representation?
4. What visual form would best communicate your intention?
5. What might your audience misunderstand?

Share your interpretations.

**How many different stories can emerge without changing a single value?**

---

# 2. From Information to Data

Data can take many forms:

- Measurements
- Counts
- Categories
- Dates
- Text
- Locations
- Relationships
- Observations
- Personal records
- Fictional information

It may be collected, generated, invented, or interpreted.

The structure of the information affects what we can do with it.

## JSON — JavaScript Object Notation

We've already encountered JSON through APIs.

```json
[
  {
    "name": "The Mirror Room",
    "visitors": 120,
    "minutes": 12,
    "rating": 4.8
  },
  {
    "name": "The Forgotten Garden",
    "visitors": 80,
    "minutes": 25,
    "rating": 4.9
  }
]
```

JSON can represent nested structures, objects, and arrays.

## CSV — Comma-Separated Values

The same information could be represented as CSV:

```csv
name,visitors,minutes,rating
The Mirror Room,120,12,4.8
The Forgotten Garden,80,25,4.9
```

CSV is commonly used for tables, spreadsheets, and exported datasets.

The first row usually identifies the columns.

Each subsequent row represents a record.

CSV values arrive as text when parsed, so we often need to convert numerical values into numbers.

---

# 3. Working with a Collection

Let's begin with a small JavaScript array of objects.

```js
const exhibits = [
  { name: "The Mirror Room", visitors: 120, minutes: 12, rating: 4.8 },
  { name: "The Forgotten Garden", visitors: 80, minutes: 25, rating: 4.9 },
  { name: "The Clock Tower", visitors: 200, minutes: 5, rating: 3.2 },
  { name: "The Whispering Hall", visitors: 60, minutes: 40, rating: 4.7 },
  { name: "The Empty Gallery", visitors: 150, minutes: 2, rating: 2.1 }
];
```

We can explore this data in the console.

## Selecting Information with map()

`map()` creates a new array by transforming each item.

```js
const names = exhibits.map(exhibit => exhibit.name);

console.log(names);
```

What does the resulting array contain?

Try:

```js
const durations = exhibits.map(exhibit => exhibit.minutes);

console.log(durations);
```

What changed?

## Finding Information with filter()

`filter()` creates a new array containing items that meet a condition.

```js
const popular = exhibits.filter(exhibit => exhibit.visitors > 100);

console.log(popular);
```

Try changing the condition:

```js
const highlyRated = exhibits.filter(exhibit => exhibit.rating >= 4.5);
```

Which exhibits remain?

## Ordering Information with sort()

```js
const byVisitors = [...exhibits].sort(
  (a, b) => b.visitors - a.visitors
);

console.log(byVisitors);
```

Why do we use `[...exhibits]`?

Because `sort()` changes the array it operates on. Making a copy lets us preserve the original order.

Try sorting by time or rating.

What story does each ordering suggest?

## Summarizing with reduce()

```js
const totalVisitors = exhibits.reduce(
  (total, exhibit) => total + exhibit.visitors,
  0
);

console.log(totalVisitors);
```

`reduce()` combines the values of a collection into a result.

We can also calculate an average:

```js
const totalMinutes = exhibits.reduce(
  (total, exhibit) => total + exhibit.minutes,
  0
);

const averageMinutes = totalMinutes / exhibits.length;

console.log(averageMinutes);
```

What other summaries might be interesting?

---

# 4. Exercise — Change the Story, Not the Data

Using the museum dataset, create three different selections:

1. The three most visited exhibits.
2. The exhibits with the highest satisfaction ratings.
3. The exhibits where visitors spend the most time.

Use `sort()`, `filter()`, or `map()` as appropriate.

Give each selection a title.

For example:

- "Where Everyone Goes"
- "The Places People Love"
- "Where Time Disappears"

Now compare the results.

Which exhibit appears most important in each?

What does "important" mean here?

**A dataset doesn't decide what matters. Someone makes that decision.**

---

# 5. From Data to Visual Form

Numbers can be difficult to compare when they appear only in a table.

A visual representation can help reveal patterns.

But every representation also makes choices.

Consider a simple horizontal bar chart.

HTML:

```html
<h1>Museum Visitors</h1>

<div id="chart"></div>
```

JavaScript:

```js
const exhibits = [
  { name: "The Mirror Room", visitors: 120, minutes: 12, rating: 4.8 },
  { name: "The Forgotten Garden", visitors: 80, minutes: 25, rating: 4.9 },
  { name: "The Clock Tower", visitors: 200, minutes: 5, rating: 3.2 },
  { name: "The Whispering Hall", visitors: 60, minutes: 40, rating: 4.7 },
  { name: "The Empty Gallery", visitors: 150, minutes: 2, rating: 2.1 }
];

const chart = document.querySelector("#chart");

const maxVisitors = Math.max(
  ...exhibits.map(exhibit => exhibit.visitors)
);

exhibits.forEach(exhibit => {

  const row = document.createElement("div");
  row.className = "chart-row";

  const label = document.createElement("span");
  label.textContent = exhibit.name;

  const bar = document.createElement("div");
  bar.className = "bar";

  const width = exhibit.visitors / maxVisitors * 100;

  bar.style.width = `${width}%`;

  const value = document.createElement("span");
  value.textContent = exhibit.visitors;

  row.append(label, bar, value);
  chart.append(row);

});
```

CSS:

```css
.chart-row {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr) 50px;
  gap: 12px;
  align-items: center;
  margin: 12px 0;
}

.bar {
  background: teal;
  height: 24px;
}

@media (max-width: 600px) {
  .chart-row {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .bar {
    max-width: 100%;
  }
}
```

This example uses the number of visitors to determine each bar's width.

What if we used time instead?

Or satisfaction?

What if we changed the order?

What if we gave the chart a different title?

## Experiment

Create two versions of the same visualization.

Change at least two of the following:

- The value being represented
- The order of the records
- The scale
- The labels
- The colors
- The title
- The visual form

Compare them.

What becomes easier to see?

What becomes harder to see?

What conclusions might a visitor draw from each version?

---

# 6. When Visualizations Mislead

Consider two charts representing the same values.

One begins its vertical axis at zero.

Another begins its vertical axis at a much higher number.

A small difference can appear enormous.

Other choices can also change interpretation:

- Omitting records
- Using inconsistent scales
- Changing the order
- Combining unrelated categories
- Using confusing labels
- Showing percentages without context
- Ignoring missing information
- Treating correlation as causation

Not every misleading representation is intentionally dishonest.

Sometimes the problem is simply that a design decision has consequences we didn't anticipate.

### Questions

- What is the representation claiming?
- What evidence supports that claim?
- What context is missing?
- What might someone reasonably misunderstand?
- How could the design communicate uncertainty?

**An effective visualization should be expressive without concealing what the data can and cannot tell us.**

---

# 7. Working with CSV

Let's explore how we might load information from a CSV file.

Create a file called `museum.csv`:

```csv
name,visitors,minutes,rating
The Mirror Room,120,12,4.8
The Forgotten Garden,80,25,4.9
The Clock Tower,200,5,3.2
The Whispering Hall,60,40,4.7
The Empty Gallery,150,2,2.1
```

We can request the file using `fetch()`:

```js
async function loadCSV() {

  const response = await fetch("museum.csv");

  if (!response.ok) {
    throw new Error("Could not load CSV");
  }

  const text = await response.text();

  console.log(text);

}

loadCSV();
```

Notice that we use:

```js
response.text()
```

instead of:

```js
response.json()
```

Because CSV is plain text, not JSON.

## Parsing the CSV

For simple CSV files like this one, we can separate lines and values.

```js
function parseSimpleCSV(text) {

  const lines = text.trim().split(/\r?\n/);

  const headers = lines[0].split(",");

  return lines.slice(1).map(line => {

    const values = line.split(",");

    const record = {};

    headers.forEach((header, index) => {
      record[header] = values[index];
    });

    return record;

  });

}
```

Then:

```js
async function loadCSV() {

  const response = await fetch("museum.csv");

  if (!response.ok) {
    throw new Error("Could not load CSV");
  }

  const text = await response.text();

  const data = parseSimpleCSV(text);

  data.forEach(exhibit => {
    exhibit.visitors = Number(exhibit.visitors);
    exhibit.minutes = Number(exhibit.minutes);
    exhibit.rating = Number(exhibit.rating);
  });

  console.log(data);

}

loadCSV();
```

This is a simplified parser for our example. Real CSV files can contain quoted commas, line breaks, and other complications.

For more complex datasets, use a library such as [Papa Parse](https://www.papaparse.com/) rather than splitting every line manually.

**Note:** If you use `fetch()` to load a local file, serve your project through a local development server such as VS Code Live Server rather than opening the HTML file directly using `file://`.

---

# 8. Accessible Data Is Better Data

A visual representation is not useful if visitors cannot perceive or understand it.

Consider:

- Can someone understand the chart without relying on color alone?
- Are values and labels available as text?
- Is the text readable?
- Does the visualization work on a small screen?
- Can someone navigate interactive controls using a keyboard?
- Does the page use meaningful headings?
- Is there an explanation of what the chart represents?

For example, our bar chart includes the numerical values as text.

That is helpful because the information isn't communicated through bar width alone.

We could also provide a table of the same information.

```html
<table>
  <caption>Museum attendance by exhibit</caption>

  <thead>
    <tr>
      <th scope="col">Exhibit</th>
      <th scope="col">Visitors</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">The Mirror Room</th>
      <td>120</td>
    </tr>
    <tr>
      <th scope="row">The Forgotten Garden</th>
      <td>80</td>
    </tr>
  </tbody>
</table>
```

A table provides a structured way to encounter the information.

It can complement a chart rather than compete with it.

**Accessibility is not something we add after designing an experience. It is part of deciding how that experience communicates.**

We'll revisit accessibility when we test our final projects.

---

# 9. Exercise — A Data Portrait, Argument, or Fable

Choose a small dataset.

It may be:

- Personal observations
- A collection of objects or characters
- Publicly available information
- Information retrieved from an API
- A CSV file
- A fictional or deliberately absurd dataset

Create a representation that communicates a particular idea.

Your work might be:

- A portrait of a place
- A comparison of habits or preferences
- An argument about an issue
- A playful taxonomy
- A visualization of an imaginary world
- An interactive archive
- A collection that changes when filtered or sorted

Include:

1. A clearly identified source or explanation of how the data was created.
2. At least one transformation, such as filtering, sorting, grouping, or mapping.
3. A visual or interactive representation.
4. A title that communicates your intended framing.
5. Labels or text that help visitors interpret the information.
6. An acknowledgment of what the representation does not show.

The project can be small.

**The challenge is not to visualize everything. It is to make deliberate choices about what the information communicates.**

---

# 10. Final Project — From Seeds to Proposals

Last week, we began imagining possible final projects.

Now we'll begin shaping those possibilities into more concrete directions.

You may continue an earlier project or propose something entirely new.

Think about:

### Intention

What do you want to explore, express, question, or create?

Why does this idea interest you?

### Audience Experience

What will someone encounter?

What will they do?

What might they discover?

### Design

What visual language or atmosphere might support the experience?

How might the visitor navigate it?

What information or interactions will be involved?

### Technical Questions

What do you already know how to build?

What might you need to learn?

Will you use JavaScript, APIs, data, or other browser capabilities?

### Scope

What is the smallest version that could communicate the central idea?

What would be essential?

What could be added later?

## Proposal Workshop

Share your idea with a small group.

Before offering solutions, ask questions.

What is compelling?

What is unclear?

What assumptions are being made?

What would you want to experience as a visitor?

What could be simplified?

Use the conversation to identify what you should investigate next.

A working prototype is **not required yet**.

The formal design presentation will take place in Week 13.

---

# Field Notes

**What did your representation clarify, conceal, or imply? What is the project claiming responsibility for?**

You might reflect on:

- How did your interpretation change when you reorganized the data?
- What did you choose to emphasize?
- What did you leave out?
- What did the visual form make easier or harder to understand?
- What accessibility questions emerged?
- What did another person notice that you hadn't?
- What did the final-project workshop reveal about your idea?

Document experiments, questions, failures, surprises, and discoveries.

---

# Homework

## 1. A Story from Data

Create a small data-driven web experience.

Include:

- [ ] A dataset or collection (JSON, CSV, JavaScript objects, or API data)
- [ ] At least one transformation using JavaScript
- [ ] A meaningful visual or interactive representation
- [ ] A clear title and labels
- [ ] Source attribution or an explanation of the data's origin
- [ ] An accessible way to understand the essential information
- [ ] A link to your published experiment in your Field Notes

## 2. Final Project Design Development

Choose one promising final-project direction.

Prepare initial materials for the design presentation in Week 13:

- A short concept and intention
- References or inspirations
- A description of the intended audience experience
- Initial visual direction or mood board
- A sitemap, flow, or early wireframes
- Technical questions and possible resources
- A realistic sense of scope

You do not need a working prototype yet.

Bring your ideas and questions to our next class.

## 3. Field Notes

Document your data experiment and your developing final-project direction.

Reflect on what you learned about selection, representation, and interpretation.

---

# Resources

### Working with Data

- [MDN — JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
- [Papa Parse — CSV Parsing](https://www.papaparse.com/)
- [D3.js — Data-Driven Documents](https://d3js.org/)

### Data and Visualization

- [Our World in Data](https://ourworldindata.org/)
- [Datawrapper Academy](https://academy.datawrapper.de/)
- [The Pudding — Visual Essays](https://pudding.cool/)
- [Information Is Beautiful](https://informationisbeautiful.net/)

### Accessibility

- [W3C — Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [The A11Y Project — Checklist](https://www.a11yproject.com/checklist/)
- [WebAIM — Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [WAVE — Web Accessibility Evaluation Tool](https://wave.webaim.org/)

---

## Next Week — Components, Characters, and Systems

**How can repeated structures, entities, and rules create a coherent world or experience?**

We'll explore ways to organize growing JavaScript projects through classes, constructors, methods, and reusable components, while continuing to develop our final-project designs.
