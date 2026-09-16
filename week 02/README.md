# Week 02 — Paths, Sequence, and Revelation

## Question

**How do we guide someone through an experience?**

What do they notice, understand, and do next?

## We Explore

Last week, we began with the web we already know and asked: **What can a website be?** We looked at websites as publishing and storytelling spaces, examined some of the systems beneath them, and began making pages ourselves with HTML.

This week, we shift our perspective from **what we put on a page** to **what happens when someone else encounters it**.

How does a person know where to begin? What feels important? Where can they go? What happens when information is divided across multiple pages? What makes them curious enough to continue—and what gets in their way?

We will explore **UI/UX, user research, information architecture, sitemaps, user flows, wireframing, cognitive load, visual hierarchy, navigation, prototyping, and testing**.

Rather than thinking of a website simply as a collection of pages, we'll begin thinking of it as an **experience someone moves through**.

---

## Resources

- [UI/UX Slides](https://docs.google.com/presentation/d/1aVbkrPL1YbHsQaoPYALGYZ2d6OKiW08qcBSnzkwsMys/edit?slide=id.g6e86c7fd2e_0_250#slide=id.g6e86c7fd2e_0_250)
- [HTML Tutorial — W3Schools](https://www.w3schools.com/html/)
- [HTML Reference — MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML Links — W3Schools](https://www.w3schools.com/html/html_links.asp)
- [HTML Semantic Elements — W3Schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [p5.js Web Editor](https://editor.p5js.org/)

---

## Map the Experience

Before deciding what a website looks like, it can help to step back and ask how it is **organized** and how someone might **move through it**.

### Sitemap

A **sitemap** describes the structure of a website: what pages or sections exist and how they relate to one another.

For example:

    HOME
    ├── ABOUT
    ├── PROJECTS
    │   ├── PROJECT A
    │   └── PROJECT B
    └── CONTACT

Think of the sitemap as a map of the **territory**.

### User Flow

A **user flow** describes a path someone might take through that territory.

For example:

    HOME → PROJECTS → PROJECT A → CONTACT

A website can have one sitemap but many possible user flows.

Think about:

- Where does someone begin?
- What are they trying to find, understand, or accomplish?
- What choices do they encounter?
- Where can they go next?
- Does everyone need to follow the same path?
- Can there be more than one way through?
- Can getting lost ever be intentional?

---

## Wireframe

A **wireframe** is a simple representation of what will appear on a page and how it will be organized.

Before worrying about colors, fonts, images, or polish, use a wireframe to think about:

- What appears first?
- What is most important?
- What belongs together?
- What can someone do?
- What choices are available?
- What is intentionally absent?
- Where might they go next?

A wireframe can be made on paper or digitally. It does not need to look good.

Its job is to help you think.

---

## Experiment

### Choose Their Path

Return to the HTML experience you began last week and expand it beyond a single page.

Create at least **three connected HTML pages** and design how someone moves between them.

Your pages might form:

- A short story
- A tour
- A collection
- A conversation
- A branching choice
- An argument
- A mystery
- A sequence of discoveries
- Different perspectives on the same subject
- Or something stranger

Use links to create relationships between the pages.

For example:

    <a href="page2.html">Continue</a>

But remember that the words in your links can also become part of the experience:

    <a href="secret.html">Open the mysterious door</a>

**"Click here"** tells someone what to do.

**"Open the mysterious door"** can tell them what the action means.

Think about:

- Where does the experience begin?
- What does the visitor notice first?
- What choices do they have?
- What makes them want to continue?
- Can they go backward?
- Can they get lost?
- Is getting lost sometimes part of the experience?
- Does everyone need to encounter the pages in the same order?
- Can the order of information create a joke, surprise, tension, or revelation?
- What can you reveal by making someone choose?

For now, continue focusing primarily on **HTML**.

The challenge is not to make the pages visually beautiful yet. The challenge is to design the **journey between them**.

---

## Test

Give your experience to another person.

Then:

**Don't explain it.**

Don't tell them where to click. Don't point out what they are missing. Don't correct them.

Watch.

Notice:

- Where do they look first?
- Where do they click?
- Where do they hesitate?
- What do they ignore?
- What do they misunderstand?
- What do they expect to happen?
- Do they do something you did not anticipate?
- When do you desperately want to help them?

What seems obvious to the person who designed an experience may not be obvious to the person encountering it.

Testing gives us a chance to discover that difference.

The goal is not to prove that your design works.

The goal is to **find out what actually happens when someone uses it**.

---

## Field Notes

Field Notes are a record of your exploration—not a summary of what happened in class or proof that you understood everything.

Document what captured your curiosity, confused you, surprised you, failed, changed, or made you notice something differently.

Your notes might include:

- Observations
- Questions
- Screenshots
- Sketches
- Sitemaps
- User flows
- Wireframes
- Code fragments
- Links
- Failed experiments
- Something another student noticed
- Something a user did that you did not expect
- Something you want to try next

You do not need to answer every prompt.

### This Week

**How did thinking about someone else's path through the website change the way you designed it?**

**What happened when someone else encountered your experience without your help?**

You might also consider:

- When did a link become more than navigation?
- What did you discover by drawing the experience as a map?
- Where did a visitor become confused?
- What seemed obvious to you but not to them?
- Did someone use your experience differently than you expected?
- What do you notice about navigation on other websites now that you have designed your own?

Add a link to your field notes in the [wiki page for week 2](https://github.com/lenincompres/f26-ima-few/wiki/Week-2-%E2%80%90-Field-Notes).

---

# Homework

## 1. Set Up Your Development Environment

Until now, we have been able to experiment with HTML directly in the browser. As our websites grow into multiple pages and files, we need a place to organize and develop them on our own computers.

Install:

- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

### Visual Studio Code

Visual Studio Code (VS Code) will be our main code editor for working with HTML, CSS, and JavaScript files.

Install VS Code and open it at least once.

### GitHub Desktop

GitHub Desktop connects the files on your computer with your repositories on GitHub without requiring you to use Git from the command line.

Install GitHub Desktop and sign in with your GitHub account.

Then:

1. Clone your course repository to your computer using GitHub Desktop.
2. Open the repository folder in Visual Studio Code.
3. Create a folder for this week's work:

       week-02

4. Inside that folder, create your HTML files. For example:

       index.html
       page2.html
       page3.html

5. Open `index.html` in your browser and make sure the links between your pages work.
6. Make a change to your project in Visual Studio Code.
7. Commit your changes using GitHub Desktop.
8. Push your changes to GitHub.

Don't worry about memorizing this workflow yet. We will use it repeatedly throughout the semester.

Begin thinking about the relationship:

**GitHub repository ↔ files on your computer ↔ VS Code ↔ browser**

You write and organize your files in VS Code, experience and test them in the browser, and use GitHub Desktop to keep your local work connected to GitHub.

---

## 2. Continue Your Multi-Page Experience

Continue developing the experience you began in class.

It should contain at least **three connected HTML pages**.

Pay particular attention to:

- Structure
- Hierarchy
- Navigation
- Link language
- The order in which information is encountered
- The choices available to the visitor

Do not worry about visual polish yet.

Next week, **CSS** will give us a new set of tools for shaping attention through typography, color, spacing, layout, and visual form.

---

## 3. Test It on Someone

Give your experience to someone who has not been working on it with you.

Try not to explain how to use it.

Watch what happens.

Record at least one thing that:

- Surprised you
- Confused them
- They did differently than you expected
- You wanted to explain or correct

You do not need to fix everything immediately.

First, **notice what happened**.

---

## 4. Field Notes

Add your **Week 02 Field Notes** wherever you are keeping your Field Notes.

Make sure your name and Field Notes link are included on our shared class Field Notes page. Add a link to your field notes in the [wiki page for week 2](https://github.com/lenincompres/f26-ima-few/wiki/Week-2-%E2%80%90-Field-Notes).

Your notes can include your sitemap, user flow, wireframe, observations from testing, screenshots, questions, code, discoveries, or failed experiments.

---

## 5. Bring Something Back

As you move through the web this week, pay attention to **navigation**.

Find one example of navigation that does something interesting.

It might be:

- Extremely clear
- Beautiful
- Strange
- Playful
- Confusing
- Hidden
- Unexpected
- Part of the storytelling itself

Bring the link next week and be prepared to show us what you noticed.

---

## Quick Checklist

Before next class:

- [ ] Create a sitemap for your experience
- [ ] Create at least one user flow
- [ ] Make a wireframe for at least one page
- [ ] Create at least three connected HTML pages
- [ ] Test the experience on another person
- [ ] Record what you noticed during testing
- [ ] Install Visual Studio Code
- [ ] Install and connect GitHub Desktop
- [ ] Clone your course repository locally
- [ ] Make, commit, and push a change
- [ ] Add your Week 02 Field Notes
- [ ] Make sure the class page links to your Field Notes
- [ ] Find one interesting example of navigation on the web
