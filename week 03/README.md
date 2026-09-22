# Week 03 — Visual Language and Atmosphere

## Question

**How can style establish voice, mood, rhythm, emphasis, and point of view?**

What changes when the words stay the same but the visual language changes?

---

## We Explore

So far, we have used HTML to structure information, connect pages, and create paths through an experience.

This week, we begin changing **how that experience feels**.

Before writing CSS, we will look more closely at some of the visual decisions already surrounding us on the web:

- Color and contrast
- Mood
- Dominance
- Negative space
- Balance
- Typography
- Flat design

Some of these ideas may already be familiar from the websites we have explored. Others may simply give us names for things we were already noticing.

Then we will begin using **CSS (Cascading Style Sheets)** to make those decisions ourselves.

CSS allows us to control the visual presentation of our HTML: typography, color, backgrounds, spacing, borders, scale, and much more.

But the goal is not simply to make a website "look better."

Visual choices can change what seems important, trustworthy, urgent, playful, intimate, strange, serious, inviting, or threatening.

This week, we will use CSS as a **visual language**.

---

## Resources

### Webdesign
- [Slides](https://docs.google.com/presentation/d/19dB_qW3_2Yd2VRisr23k1FAjlCdltZ1Fxw0sR6s-GfU/edit?usp=sharing)

### CSS

- [CSS Tutorial — W3Schools](https://www.w3schools.com/css/)
- [CSS Reference — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Selectors — W3Schools](https://www.w3schools.com/css/css_selectors.asp)
- [CSS Box Model — W3Schools](https://www.w3schools.com/css/css_boxmodel.asp)
- [CSS Colors — W3Schools](https://www.w3schools.com/css/css_colors.asp)
- [CSS Fonts — W3Schools](https://www.w3schools.com/css/css_font.asp)

### Tools

- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

---

# Exercise 1 — Look Again

Return to one of the websites you brought to class.

Look at it again using some of the visual language we have discussed.

Consider:

- **Color:** What colors dominate? What relationships or contrasts exist between them?
- **Mood:** What does the visual language make you expect before you even read?
- **Dominance:** Where does your eye go first? What seems most important?
- **Negative Space:** Where has space been intentionally left empty? What does that space accomplish?
- **Balance:** How is visual weight distributed across the page? Is it symmetrical? Does it need to be?
- **Typography:** What assumptions do the fonts, sizes, weights, and spacing create?
- **Hierarchy:** How do you know what to look at first, second, or third?
- **Flatness / Depth:** Does the interface feel flat, layered, physical, dimensional, or something else?

Try moving beyond:

> "I like this."

Toward:

> "I read this as ______ because ______."

The second statement gives us something we can investigate.

---

# CSS

CSS works by selecting something in our HTML and giving the browser instructions about how it should be presented.

A basic CSS rule looks like this:

```css
p {
  color: darkred;
  font-size: 20px;
}
```

Here:

- `p` is the **selector**
- `color` and `font-size` are **properties**
- `darkred` and `20px` are **values**

Together, a property and value form a **declaration**.

---

## Connecting CSS to HTML

We will usually keep our CSS in a separate file.

For example:

```text
index.html
style.css
```

Inside the `<head>` of your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Now the browser can use the rules in `style.css` when it displays `index.html`.

---

## Selectors

### Element

```css
p {
  color: gray;
}
```

This affects every `<p>` element.

### Class

HTML:

```html
<p class="warning">Do not open the door.</p>
```

CSS:

```css
.warning {
  color: red;
}
```

A class can be used by many elements.

### ID

HTML:

```html
<section id="secret">
  ...
</section>
```

CSS:

```css
#secret {
  background-color: black;
}
```

An ID identifies a particular element.

---

# Exercise 2 — Give It a Voice

You will receive a piece of HTML.

**Do not change the words.**

Instead, use CSS to give the page a particular voice or atmosphere.

It might become:

- An urgent warning
- A private confession
- A luxury advertisement
- A scientific specimen
- A children's adventure
- A government notice
- A haunted archive
- A celebration
- A memorial
- An absurd internet relic
- Or something else entirely

Experiment with:

```css
color
background-color
font-family
font-size
font-weight
line-height
letter-spacing
margin
padding
border
```

You do not need to use everything.

Instead ask:

**What is the smallest change I can make that produces the largest change in how this page is read?**

---

# The Box Model

Every HTML element can be thought of as a box.

That box has four basic layers:

```text
MARGIN
  BORDER
    PADDING
      CONTENT
```

### Content

The actual text, image, or other material.

### Padding

Space **inside** the element, between the content and its border.

### Border

The boundary around the element.

### Margin

Space **outside** the element, separating it from other elements.

For example:

```css
.message {
  padding: 30px;
  border: 2px solid black;
  margin: 40px;
}
```

Spacing is not necessarily empty.

It can establish relationships, separation, rhythm, emphasis, and hierarchy.

---

# Cascade and Inheritance

The **C** in CSS stands for **Cascading**.

More than one CSS rule can affect the same element.

The browser has to determine which styles apply.

Some properties can also be **inherited** from a parent element.

For example:

```css
body {
  color: darkblue;
}
```

Text inside the `<body>` may inherit that color unless another rule changes it.

You do not need to memorize all the rules of the cascade yet.

When something behaves differently than you expect, **inspect it**.

The browser's Developer Tools can show:

- Which CSS rules are affecting an element
- Where those rules came from
- Which declarations are active
- Which declarations have been overridden

The browser is not only where we see our work.

It is also one of the places where we investigate it.

---

# Exercise 3 — Two Readings

Choose one body of content.

You may continue working with something you made during Weeks 1 or 2, or use the material provided in class.

Create **two different visual interpretations of the same content**.

Do not substantially change the HTML or the words.

Instead, change how the content asks to be read.

For example:

- Inviting ↔ Threatening
- Official ↔ Personal
- Serious ↔ Absurd
- Quiet ↔ Urgent
- Nostalgic ↔ Futuristic
- Trustworthy ↔ Suspicious
- Precious ↔ Disposable
- Ordered ↔ Chaotic

Or invent your own contrast.

Use several of the tools we have explored:

- Typography
- Color
- Background
- Contrast
- Spacing
- The box model
- Classes
- Hierarchy
- Borders
- Scale

Ask yourself:

- Where should someone's eye go first?
- What should feel important?
- What should feel related?
- How quickly should someone move through the page?
- Should the page feel dense or spacious?
- What mood should they encounter before reading?
- What expectations should the design create?
- What could you remove?
- Which decision is doing the most work?

The goal is **not** to make one version beautiful and the other ugly.

The goal is to make the **same information ask to be read differently**.

---

# Encounter

Show both versions to someone else.

Before explaining what you intended, ask them to describe each one.

You might ask:

- Describe this version in three words.
- Where did your eye go first?
- What kind of website does this seem to be?
- What mood does it create?
- What seems most important?
- Which visual choice seems to be affecting you most?

Then compare what they encountered with what you intended.

If they experienced something differently than you expected, that is useful information.

---

# Debugging as Inquiry

CSS will frequently do something you did not expect.

When that happens, resist changing many things at once.

Try:

1. **Observe** exactly what is happening.
2. **Make a hypothesis.**
3. **Inspect** the element in Developer Tools.
4. **Change one thing.**
5. **Observe again.**
6. Keep or reject your hypothesis.

A surprising result is not only an error to eliminate.

It can also tell you something about how the browser works.

---

# Field Notes

Field Notes are a record of your exploration—not a polished summary or proof that you understood everything.

This week, they might include:

- Screenshots of your two versions
- CSS that produced an unexpected result
- A color or typography experiment
- Something you noticed in another website
- Something another student noticed in yours
- A design decision that had a larger effect than expected
- A failed experiment
- A question about CSS
- Something you discovered through Developer Tools
- A visual choice you want to understand better

### This Week

**Which visual decision changed the meaning most?**

**What did you discover about the difference between making something attractive and giving it a voice?**

You might also consider:

- Which CSS change produced the biggest effect?
- Did another person interpret your design differently than you expected?
- What did you discover about spacing?
- What CSS behavior surprised you?
- What visual choices are you noticing on websites now that you were not consciously noticing before?

---

# Homework

## 1. Finish Your Two Readings

Finish two contrasting visual interpretations of the same body of content.

Keep the underlying content substantially the same.

The difference should come primarily from your **visual decisions**.

Use an external stylesheet and experiment intentionally with:

- Selectors and classes
- Typography
- Color and backgrounds
- Spacing
- Box model
- Hierarchy

---

## 2. Get Your Work onto GitHub

You should now have **Visual Studio Code** and **GitHub Desktop** installed.

Your challenge this week is to figure out how to use them together.

Find a tutorial, documentation, video, classmate, [coding lab](https://codinglab.itp.io/), or other resource that helps you learn how to:

1. **Clone your GitHub repository** to your computer using GitHub Desktop.
2. Open that repository in **Visual Studio Code**.
3. Create a folder called `week-03`.
4. Put your HTML and CSS exercise inside that folder.
5. Open your HTML file in a browser and make sure it works.
6. Use GitHub Desktop to **commit** your changes.
7. **Push** your changes to GitHub.
8. Visit your repository on GitHub and confirm that your `week-03` folder and files are there.

By next week, you should have experienced this relationship:

**GitHub repository ↔ files on your computer ↔ VS Code ↔ browser**

And this basic cycle:

**edit → save → browser → revise → commit → push**

You do not need to memorize the process yet.

Part of the assignment is discovering how it works.

### In Your Field Notes

Tell us briefly:

- What resource helped you figure it out?
- Where, if anywhere, did you get stuck?
- What did you discover about how GitHub Desktop, VS Code, and your browser work together?

---

## 3. Field Notes

Add your **Week 03 Field Notes**.

Include your two visual interpretations or screenshots/links to them, along with something you discovered while making them.

Make sure the shared class Field Notes page still links correctly to your notes.

---

## 4. Bring Something Back

Find a website whose visual language gives it a particularly strong **voice or atmosphere**.

It might feel:

- Calm
- Loud
- Intimate
- Official
- Playful
- Mysterious
- Luxurious
- Cheap
- Nostalgic
- Futuristic
- Trustworthy
- Suspicious
- Strange
- Or something harder to name

Bring the link next week.

Be prepared to show us **what specific visual decisions are creating that impression**.

---

## Quick Checklist

Before next class:

- [ ] Complete two contrasting visual interpretations of the same content
- [ ] Use an external CSS stylesheet
- [ ] Experiment with selectors and classes
- [ ] Use typography intentionally
- [ ] Use color/background intentionally
- [ ] Experiment with margin and padding
- [ ] Think about hierarchy and dominance
- [ ] Show the versions to someone else
- [ ] Commit and push your work to GitHub
- [ ] Add your Week 03 Field Notes
- [ ] Find one website with a strong visual voice or atmosphere
