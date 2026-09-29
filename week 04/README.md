# Week 04 — Arranging the World

## Question

**How do relationships in space change how we understand an experience?**

What happens when we stop thinking only about how individual elements look and begin thinking about how they relate to one another?

---

## We Explore

Last week, we used CSS to give content a visual voice.

We experimented with typography, color, contrast, dominance, negative space, balance, and hierarchy.

This week, we begin to **arrange the world**.

Web pages contain relationships:

- Things that belong together
- Things that need separation
- Things that compete for attention
- Things that support something else
- Things that appear in sequence
- Things that sit beside one another
- Things that dominate
- Things that repeat

CSS gives us systems for expressing these relationships.

We will explore:

- Normal document flow
- Containers and children
- `display`
- Flexbox
- Grid
- `gap`
- Alignment and distribution
- Width and available space
- Basic positioning

The goal is not to memorize every CSS property.

It is to begin asking:

**What relationship am I trying to create, and what CSS can help me express it?**

---

## Resources

### CSS Layout

- [CSS Layout — MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout)
- [CSS Flexbox — W3Schools](https://www.w3schools.com/css/css3_flexbox.asp)
- [CSS Grid — W3Schools](https://www.w3schools.com/css/css_grid.asp)
- [CSS Position — W3Schools](https://www.w3schools.com/css/css_positioning.asp)

### Play

- [Flexbox Froggy](https://flexboxfroggy.com/)

### Reference

- [CSS Reference — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tutorial — W3Schools](https://www.w3schools.com/css/)

---

# Looking Back — Give It a Voice

Before moving forward, we will return to the work from last week.

Open your **Week 03 exercise** and your **Field Notes**.

Half of the class will stay with their work while the other half moves around the room.

Then we will switch.

When encountering someone else's work, look before asking them to explain it.

Consider:

- What voice or atmosphere do you encounter?
- Where does your eye go first?
- What visual evidence creates that impression?
- What seems dominant?
- What role do color, typography, contrast, and negative space play?
- What single visual decision seems to be doing the most work?
- What did they discover while making it?

Then ask about something else we experimented with last week:

**How did they get their work onto GitHub?**

Compare what you discovered about the relationship between:

**GitHub repository ↔ files on your computer ↔ VS Code ↔ browser**

There may be more than one path to figuring something out.

---

# From Styling to Layout

Until now, many of our CSS decisions have focused on individual elements:

```css
h1 {
  font-size: 60px;
  color: darkred;
}
```

But what if our question is:

> How should several elements relate to one another?

By default, the browser already has rules for arranging HTML.

This is called **normal flow**.

Many block elements naturally stack:

```text
HEADER

SECTION

SECTION

FOOTER
```

CSS layout allows us to change those relationships.

A useful way to begin thinking about layout is:

```text
CONTAINER
│
├── CHILD
├── CHILD
└── CHILD
```

Instead of giving every child a position, we can often give the **container instructions for arranging its children**.

---

# Exercise 1 — Arrange Without the Answer

You will receive a (simple page)[https://github.com/lenincompres/f26-ima-few/tree/main/week%2004/exercise%201] containing several elements.

Your challenge is to change their spatial relationship.

Try to:

- Put several items beside one another
- Create consistent space between them
- Align them
- Distribute available space
- Keep related things together
- Make the arrangement respond when the browser gets narrower

You may:

- Experiment
- Search the web
- Inspect other websites
- Ask someone nearby
- Try CSS you have never used before
- Break things

Pay attention to what becomes difficult.

Those difficulties may tell us what kind of tool we need.

---

# Flexbox

**Flexbox** is a CSS layout system designed to arrange elements in relation to one another.

We usually apply it to a **container**:

```css
.container {
  display: flex;
}
```

The children of that container now become **flex items**.

For example:

```html
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.container {
  display: flex;
}
```

Instead of positioning `One`, `Two`, and `Three` independently, we can tell their container how they should relate.

---

## Direction

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Or:

```css
.container {
  display: flex;
  flex-direction: column;
}
```

---

## Distribution

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

Other possibilities include:

```css
justify-content: center;
justify-content: flex-start;
justify-content: flex-end;
justify-content: space-around;
justify-content: space-evenly;
```

---

## Alignment

```css
.container {
  display: flex;
  align-items: center;
}
```

---

## Space Between Items

Instead of adding separate margins to every item:

```css
.container {
  display: flex;
  gap: 20px;
}
```

---

## Wrapping

What happens when the children no longer fit?

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

---

# Exercise 2 — Flexbox Froggy

Visit:

**[Flexbox Froggy](https://flexboxfroggy.com/)**

Your goal is not simply to finish as quickly as possible.

Pay attention to what happens when you change the CSS.

As you play, notice:

- Which properties affect direction?
- Which affect distribution?
- Which affect alignment?
- Which instructions belong to the container?
- What happens when the available space changes?
- Which properties begin to feel predictable?

You do **not** need to finish every level during class.

The goal is to begin developing an intuition for how Flexbox behaves.

---

## But Also Look at the Website

Flexbox Froggy is teaching us CSS.

But it is also a website worth examining.

Think back to our first question of the semester:

**What can a website be?**

Consider:

- Why use frogs and lily pads to teach CSS?
- What does the metaphor make easier to understand?
- How does the site give you feedback?
- How do you know when something worked?
- How does the experience become more complicated over time?
- What does it explain directly?
- What does it allow you to discover?
- How do interface, interaction, rules, progression, and a tiny story work together?

The browser can teach through **action and discovery**, not only by displaying information.

---

# Grid

Flexbox is particularly useful when we are thinking primarily about relationships along an axis.

But sometimes we want to think explicitly about **rows and columns**.

CSS Grid gives us another layout system.

For example:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

This creates three equal columns.

```text
┌─────────┬─────────┬─────────┐
│         │         │         │
│    1    │    2    │    3    │
│         │         │         │
├─────────┼─────────┼─────────┤
│         │         │         │
│    4    │    5    │    6    │
│         │         │         │
└─────────┴─────────┴─────────┘
```

The unit:

```css
1fr
```

means one **fraction of the available space**.

So:

```css
grid-template-columns: 1fr 1fr 1fr;
```

creates three equal columns.

But:

```css
grid-template-columns: 2fr 1fr;
```

creates two columns where the first receives twice as much available space as the second.

---

## Flexbox or Grid?

There is not always one correct answer.

A useful starting question is:

**Am I mainly arranging things along an axis?**

Flexbox may be useful.

**Am I thinking explicitly about relationships across rows and columns?**

Grid may be useful.

Sometimes a page uses both.

A Grid item might even contain its own Flexbox container.

---

# Positioning

CSS also allows elements to be positioned in other ways.

You may encounter:

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

These can be useful when something needs to behave differently from the normal flow of the page.

But positioning every element individually is usually not the best way to construct an entire layout.

Before reaching for `position`, ask whether the relationship you want might be better expressed through **normal flow, Flexbox, or Grid**.

---

# Exercise 3 — Arrange the World

Create a small web composition in which the **spatial relationships communicate something**.

Your page might be:

- A collection in which one object dominates and others support it
- A conversation between two opposing sides
- A map of related fragments
- A sequence that moves from calm to crowded
- A cabinet or archive of specimens
- A cast of characters with alliances or hierarchy
- A collection of clues organized around one central mystery
- A page whose layout changes the order in which information is discovered
- Something else entirely

The content can be simple.

The important question is:

**What relationship are you creating among the pieces?**

---

## Requirements

Your composition should:

- Use meaningful HTML
- Use an external CSS stylesheet
- Use at least one **Flexbox or Grid container**
- Use `gap` where appropriate
- Make deliberate decisions about width and available space
- Establish hierarchy through layout
- Be tested at more than one browser width

As you work, ask:

- What belongs together?
- What needs separation?
- What should dominate?
- What should support something else?
- What should appear beside something?
- What should repeat?
- What should be centered?
- What should be pushed apart?
- What happens when there is less space?

---

# Resize It

A web page does not have one fixed canvas.

Grab the edge of your browser and make it:

**wide → narrow → very narrow → wide again**

Watch what happens.

Ask:

- What remains stable?
- What moves?
- What wraps?
- What becomes crowded?
- What breaks first?
- Does the relationship among the elements still make sense?

Do the same with someone else's page.

A layout is not only what happens at the width where you designed it.

---

# Debugging Layout

When a layout does something unexpected, begin by inspecting the **relationship**.

Ask:

1. What is the container?
2. What are its children?
3. What layout system is the container using?
4. What direction or grid has been established?
5. How is available space being distributed?
6. Which element is actually controlling the behavior?

Use Developer Tools to inspect the container and its children.

Try changing one property at a time.

**Observe → hypothesize → inspect → change → observe again**

---

# Field Notes

Field Notes are a record of your exploration, including things that worked, failed, surprised you, or remain confusing.

This week, consider:

**What changed when you began thinking about relationships between elements instead of styling each element separately?**

You might also record:

- Something you discovered from another student's Week 03 work
- Something you learned by comparing GitHub/VS Code workflows
- A Flexbox Froggy level that made something suddenly make sense
- A layout you broke
- A layout you fixed
- Something Flexbox made unexpectedly easy
- Something Grid made unexpectedly easy
- A difference you noticed between Flexbox and Grid
- What happened when you resized your page
- A layout behavior you still don't understand
- Something about Flexbox Froggy itself that you found interesting as a web experience

---

# Homework

## 1. Finish — Arrange the World

Continue developing your **Arrange the World** experiment.

Use Flexbox and/or Grid intentionally.

The goal is not to demonstrate as many CSS properties as possible.

The goal is to use layout to establish meaningful relationships among the elements on the page.

---

## 2. Test Different Browser Sizes

Open your page in a browser and test it at several widths.

Try:

- A wide desktop window
- A medium window
- A narrow window

You do not need to solve every responsive-design problem yet.

For now, **notice what happens**.

In your Field Notes, record something that changed, broke, surprised you, or gave you an idea.

---

## 3. Commit and Push

Put your Week 04 work in a folder called:

```text
week-04
```

Continue practicing the workflow:

**edit → save → browser → inspect → revise → commit → push**

Visit your repository on GitHub afterward and confirm that your Week 04 files are there.

If something goes wrong, investigate it.

Record what you discover.

---

## 4. Field Notes

Add your **Week 04 Field Notes**.

Include at least one discovery about layout.

Remember: Field Notes are not for proving that you learned.

They are for **noticing yourself learning**.

---

## 5. Bring Something Back

Find a website whose **layout** does something interesting.

Look for relationships rather than simply appearance.

Maybe:

- Something moves or reorganizes
- One element dominates the page
- Information is arranged in an unusual grid
- The page creates an interesting sequence
- Elements overlap
- Space itself seems important
- The organization changes as the browser changes size
- The layout makes you explore

Bring the link next week.

Be prepared to show us:

**What is the layout doing that made you notice it?**

---

## Quick Checklist

Before next class:

- [ ] Finish your Arrange the World experiment
- [ ] Use Flexbox and/or Grid
- [ ] Test your page at different browser widths
- [ ] Put the work in your `week-04` folder
- [ ] Commit and push it to GitHub
- [ ] Add your Week 04 Field Notes
- [ ] Bring back a website with an interesting layout
