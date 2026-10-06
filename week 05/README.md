# Week 05 — A Web That Responds

## Question

**How can a website respond to changing conditions?**

Last week, we arranged elements in relation to one another.

Then we did something simple:

**We changed the size of the browser.**

Things moved.

Things wrapped.

Things became crowded.

Things broke.

This week, we begin with that problem.

The web does not have one fixed canvas. A website may be encountered on a large monitor, a laptop, a tablet, a phone, a narrow window, or something we did not anticipate.

So instead of asking:

> What size should my website be?

We can begin asking:

> **How should my website behave when its conditions change?**

And screen size is only one kind of condition.

---

## We Explore

This week we explore CSS that **responds**.

We will work with:

- Flexible layouts
- Relative and constrained dimensions
- CSS Media queries
- Breakpoints
- Responsive design
- CSS Pseudo-classes such as `:hover`
- CSS Pseudo-element such as `::before`
- CSS Transitions
- CSS Transforms
- CSS animation
- Reduced motion

The goal is not to add movement everywhere.

It is to think about **change as part of the experience**.

---

# Bring Something Back

Last week you found a website whose layout did something interesting.

Open it again.

This time, change the size of the browser.

Try:

**wide → medium → narrow → very narrow → wide**

Watch carefully.

Ask:

- What stays the same?
- What moves?
- What wraps?
- What disappears?
- What becomes smaller?
- What becomes larger?
- What changes position?
- What changes completely?
- When does a noticeable change happen?
- Does the site feel like the same experience at every size?

If you find something unexpected, show someone nearby.

---

# Return to Your Week 04 Page

Now open your own **Arrange the World** experiment.

Resize the browser.

Don't fix anything yet.

First, observe.

Find one moment where the composition becomes less successful.

Maybe:

- Text becomes uncomfortable to read
- Several elements become crowded
- Navigation no longer fits
- Something becomes too wide
- Something becomes too narrow
- The hierarchy becomes unclear
- An arrangement that made sense horizontally stops making sense
- Empty space becomes strange
- Something simply breaks

Try to identify approximately **when** the problem begins.

That point is useful information.

---

# Responsive Design

A responsive website does not simply shrink.

It **adapts**.

Sometimes Flexbox or Grid already gives us some adaptability:

```css
.places {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

Sometimes relative dimensions help:

```css
main {
  width: 90%;
  max-width: 1000px;
  margin: auto;
}
```

But sometimes we want the design to behave differently when its environment changes.

CSS gives us a way to describe those conditions.

---

# Media Queries

A **media query** asks the browser a question.

For example:

> Is the viewport 700 pixels wide or smaller?

```css
@media (max-width: 700px) {

  .places {
    flex-direction: column;
  }

}
```

The CSS inside the media query only applies when that condition is true.

So our page can have one relationship when there is plenty of room:

```text
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Forest   │  │ Island   │  │ Tower    │
└──────────┘  └──────────┘  └──────────┘
```

And another when space becomes limited:

```text
┌──────────┐
│ Forest   │
└──────────┘

┌──────────┐
│ Island   │
└──────────┘

┌──────────┐
│ Tower    │
└──────────┘
```

The content did not change.

The **relationship** changed.

---

## Breakpoints

The point where we decide the design should change is often called a **breakpoint**.

For example:

```css
@media (max-width: 700px) {
  /* something changes */
}
```

But `700px` is not magical.

Don't begin with:

> What is the correct breakpoint?

Begin with:

> **When does my design need to change?**

Resize the page.

Watch the experience.

Let the content and composition help reveal the breakpoint.

---

# Exercise 1 — Find the Breaking Point

Return to your Week 04 composition.

### Step 1

Resize it slowly.

Find a width where something stops working well.

### Step 2

Ask what actually needs to change.

Maybe:

- A row becomes a column
- A grid loses a column
- Navigation reorganizes
- Text gets more room
- An image changes size
- Spacing changes
- Something secondary becomes less prominent

### Step 3

Add a media query.

For example:

```css
@media (max-width: 700px) {

  .places {
    flex-direction: column;
  }

}
```

### Step 4

Resize again.

Does the change happen too early?

Too late?

Does it actually solve the problem?

Change the breakpoint and observe.

---

# Grid Can Adapt Too

A grid might begin with three columns:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

Then change:

```css
@media (max-width: 800px) {

  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }

}
```

And change again:

```css
@media (max-width: 500px) {

  .gallery {
    grid-template-columns: 1fr;
  }

}
```

Now the same content can have different spatial relationships depending on the space available.

---

# Not Everything Needs a Media Query

Before adding a breakpoint, see what CSS can already do.

For example:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Or:

```css
.container {
  width: 90%;
  max-width: 1000px;
  margin: auto;
}
```

Or:

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

Responsive design is not a collection of special device sizes.

It is a way of thinking about a page as something that lives in **changing conditions**.

---

# What Else Can CSS Respond To?

So far, CSS has responded to something about its environment:

**How much space is available?**

But a page can respond to other conditions too.

For example:

**What is the visitor doing?**

---

# Pseudo-Classes

You have probably already encountered:

```css
a:hover {
  color: red;
}
```

`:hover` is a **pseudo-class**.

It describes a state.

```css
button:hover {
  background: black;
  color: white;
}
```

The element has not become a different HTML element.

Its **state** has changed.

Other pseudo-classes include:

```css
a:visited
```

```css
input:focus
```

```css
button:active
```

CSS can respond to these states.

---

# Exercise 2 — Something Notices You

Create or choose one element on your page.

It might be:

- A link
- A card
- An image
- A word
- A button
- A mysterious object
- A navigation item
- Something else

Make it respond when the visitor encounters it.

Start simply:

```css
.object:hover {
  background: black;
  color: white;
}
```

Then experiment.

Could the response:

- Reveal something?
- Suggest that something is interactive?
- Change emphasis?
- Create atmosphere?
- Reward curiosity?
- Make something feel alive?
- Make something strange?

The goal is not simply:

**“Make something happen on hover.”**

Ask:

**Why should this thing respond?**

---

# Transitions

A change can happen immediately:

```css
.object:hover {
  background: black;
}
```

Or CSS can describe **how the change happens**.

```css
.object {
  transition: 0.5s;
}

.object:hover {
  background: black;
  color: white;
}
```

Now the browser moves between the two states over time.

We can be more specific:

```css
.object {
  transition: transform 0.4s;
}
```

---

# Transforms

CSS can also transform an element.

```css
.object:hover {
  transform: scale(1.1);
}
```

Other possibilities include:

```css
transform: rotate(10deg);
```

```css
transform: translateX(20px);
```

```css
transform: translateY(-10px);
```

You can combine transforms:

```css
transform: rotate(5deg) scale(1.1);
```

Again, the important question is not:

> What effects can CSS do?

It is:

> **What kind of response belongs in this experience?**

---

# Exercise 3 — Change With Intention

Choose something in your page and give it two states.

For example:

**Before encounter → after encounter**

**Quiet → loud**

**Hidden → revealed**

**Stable → uncertain**

**Distant → close**

**Ordinary → strange**

**Invitation → response**

Use some combination of:

- `:hover`
- `:focus`
- `transition`
- `transform`
- Color
- Opacity
- Size
- Spacing
- Other CSS you discover

Try to make the transformation communicate something.

---

# CSS Animation

Some changes do not need to wait for a visitor to hover.

CSS can animate elements using **keyframes**.

```css
@keyframes float {

  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }

}
```

Then we can apply the animation:

```css
.object {
  animation: float 3s infinite;
}
```

The browser moves through the states described in the keyframes.

---

## Motion Should Have a Reason

Animation can:

- Direct attention
- Communicate change
- Give feedback
- Establish rhythm
- Suggest personality
- Create atmosphere
- Reveal information
- Support a narrative
- Make an interface easier to understand

It can also:

- Distract
- Obscure information
- Make reading difficult
- Become exhausting
- Make an experience inaccessible

Movement is a design decision.

---

# Reduced Motion

Not everyone experiences motion in the same way.

Some visitors ask their device or browser to reduce nonessential movement.

CSS can listen for that preference:

```css
@media (prefers-reduced-motion: reduce) {

  .object {
    animation: none;
    transition: none;
  }

}
```

This is another kind of media query.

Notice what is happening:

The website is responding not only to the **size of the screen**, but to something about the **needs or preferences of the person encountering it**.

---

# Experiment — One Thing, Different Conditions

Choose one element, section, or small composition.

Give it at least **two meaningful responses**.

One response should involve its environment:

```text
available space changes
        ↓
layout changes
```

Another should involve a state or action:

```text
visitor encounters something
        ↓
something responds
```

For example:

A mysterious object might sit beside its description on a wide screen but move above it on a narrow screen.

When encountered, the object might reveal information, shift, fade, enlarge, or otherwise respond.

The two changes do not need to be dramatic.

They should be **intentional**.

---

# Debugging Responsive CSS

When something does not behave as expected, investigate.

Ask:

- Is the media query actually becoming active?
- Is another CSS rule overriding it?
- Is the problem coming from the container or the child?
- Is a fixed width preventing something from adapting?
- Is Flexbox or Grid already solving part of the problem?
- Does the breakpoint happen at the right moment?
- Does the page work between the sizes I tested?
- Is the hover/focus state applied to the element I think it is?
- Is the transition on the original state?
- Is the transform changing layout, or only appearance?

Use Developer Tools.

Resize.

Inspect.

Change one thing.

Observe again.

**The browser is evidence.**

---

# Field Notes

This week, consider:

**What did your page teach you when you changed its conditions?**

You might also record:

- Where your Week 04 layout first began to break
- How you chose a breakpoint
- Something that adapted without a media query
- Something that required one
- A difference between shrinking something and redesigning its relationship
- A CSS state you discovered
- A transition that changed how an interaction felt
- An animation that became distracting
- Something you removed
- Something that surprised you when testing at another width
- A question you still have about responsive design
- A way a website could respond to someone that you had not previously considered

---

# Midterm — Designing the Experience

Next week is our **Midterm Design Presentation**.

You are **not presenting the finished HTML/CSS website yet**.

Instead, you will present the experience you intend to build.

This is a chance to make the important design decisions **before** implementation and receive feedback while those decisions can still change.

After the presentations and critique, you will build the website.

At the beginning of Week 07, we will encounter the finished experiences.

---

## The Midterm

Design an original web experience that brings together what we have explored so far.

Think back across the course:

### Week 01 — Browser as Storytelling Space

**What can a website be?**

### Week 02 — Designing the Experience

**How do we guide someone through an experience?**

### Week 03 — Visual Language and Atmosphere

**How can style establish voice, mood, rhythm, emphasis, and point of view?**

### Week 04 — Arranging the World

**How do relationships in space change how we understand an experience?**

### Week 05 — A Web That Adapts

**How can a website respond to changing conditions?**

Your project does not need to demonstrate every technique we have encountered.

Use what serves the experience you want to create.

---

# For Week 06 — Midterm Design Presentation

Prepare a short presentation that lets us understand the website **before it exists**.

Your presentation should include the following.

---

## 1. Concept / Premise

What are you making?

Describe the idea simply.

---

## 2. Intended Experience

What should someone encountering the website:

- Feel?
- Notice?
- Discover?
- Understand?
- Do?

What kind of experience are you trying to create?

---

## 3. References / Inspiration

Bring examples that are helping you think.

These might include:

- Websites
- Images
- Books
- Games
- Films
- Interfaces
- Physical spaces
- Artworks
- Objects
- Typography
- Something unexpected

Don't only show us what you want the project to **look like**.

Show us what is helping you think about what it could **be**.

---

## 4. Mood / Vision Board

Create a small collection of visual references that communicates the world, atmosphere, energy, or point of view of the project.

---

## 5. Visual Language

Begin making decisions about:

- Color palette
- Typography
- Hierarchy
- Imagery
- Texture
- Space
- Shape
- Other visual elements important to your concept

These decisions can still change.

---

## 6. Sitemap

Show us **what exists** in the experience.

For example:

```text
HOME
│
├── ABOUT
├── ARCHIVE
│   ├── OBJECT 01
│   ├── OBJECT 02
│   └── OBJECT 03
│
└── CONTACT
```

Your project may be much smaller, stranger, or less conventional than this.

The sitemap should help us understand its structure.

---

## 7. User Flow

Show us how someone might move through the experience.

For example:

```text
ARRIVE
   ↓
DISCOVER OBJECT
   ↓
CHOOSE A PATH
   ↓
EXPLORE
   ↓
RETURN / CONTINUE / LEAVE
```

A user flow is not only about navigation.

It can describe a **journey**.

---

## 8. Wireframes

Create wireframes for the important pages, screens, or states.

Focus on:

- Hierarchy
- Navigation
- Content
- Spatial relationships
- What someone encounters first
- What they can do next

These do not need to look polished.

The purpose of a wireframe is to make the structure and experience visible enough to discuss.

---

## 9. Responsive Intentions

Your website will not live at only one size.

Identify at least one important relationship that may need to change when the available space changes.

Consider:

- What should remain constant?
- What might move?
- What might stack?
- What might simplify?
- What might become more prominent?
- What might become less prominent?
- What might transform completely?

You do not need to have every breakpoint solved yet.

Show us how you are **thinking about adaptation**.

---

## Optional — Test Something

If there is one technical or visual question you need to understand before committing to the design, make a small experiment.

Maybe:

- Test a layout
- Test a media query
- Test a transition
- Test a strange navigation idea
- Test typography
- Test an interaction
- Test whether an idea is even possible

You do not need to build the finished website.

Sometimes a tiny experiment can answer an important design question.

---

# What Happens After the Presentation?

In Week 06, you will present the design.

We will respond to it.

Listen for:

- What people understand immediately
- What excites their curiosity
- What feels unclear
- What they want to encounter
- Questions you had not considered
- Possibilities you had not noticed

Then:

**revise → build**

Your Week 06 homework will be to create the HTML/CSS experience you proposed, informed by what you discovered during critique.

At the beginning of Week 07, we will visit the finished sites.

---

# Homework

Your primary homework this week is your **Midterm Design Presentation**.

Prepare:

- [ ] Concept / premise
- [ ] Intended experience
- [ ] References / inspiration
- [ ] Mood / vision board
- [ ] Color palette and visual language
- [ ] Sitemap
- [ ] User flow
- [ ] Wireframes
- [ ] Responsive intentions
- [ ] Optional experiment if useful
- [ ] Week 05 Field Notes

Do **not** worry about having the finished website for next week.

For Week 06, bring us the experience you intend to create.

**The build comes after the critique.**
