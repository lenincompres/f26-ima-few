# Week 06 — Midterm Presentations: Critique & Iteration

## Question

**How does an idea change when someone else encounters it?**

Over the past five weeks, we have explored the browser as a space for storytelling, experience, visual language, spatial relationships, and response.

This week, we bring those explorations together.

But we are not presenting finished websites yet.

We are presenting **the experiences we intend to create**.

The purpose is to make our ideas visible, encounter one another's perspectives, and discover possibilities before building.

---

## We Explore

- Communicating a concept and intended experience
- Connecting visual decisions to meaning
- Explaining structure, navigation, and user flow
- Presenting wireframes and responsive intentions
- Giving and receiving constructive critique
- Revising an idea before implementation
- Turning a design into an HTML/CSS website
- Publishing a website using GitHub Pages

---

# Midterm Design Presentations

Each student will present their proposed web experience.

Your presentation should help us understand not only **what you want to make**, but **what it might feel like to encounter it**.

### What to Present

Bring the design package developed during Week 05:

1. **Concept / Premise** — What is the website about? What is its central idea?
2. **Intended Experience** — What should someone feel, notice, discover, understand, or do?
3. **References / Inspiration** — What websites, artworks, objects, experiences, or other references informed your thinking?
4. **Mood / Vision Board** — What atmosphere or world are you creating?
5. **Visual Language** — Color palette, typography, imagery, hierarchy, and other visual decisions.
6. **Sitemap** — What pages, sections, or destinations exist?
7. **User Flow** — How might someone move through the experience?
8. **Wireframes** — How are content, navigation, and visual relationships arranged?
9. **Responsive Intentions** — What should remain constant, and what might change across screen sizes?

You may also show a small HTML/CSS experiment if it helped you investigate an idea.

**A finished website is not required for today's presentation.**

---

## Presentation Format

Plan for approximately **5 minutes to present**, followed by **3–4 minutes of questions and critique**.

Keep your presentation focused on the experience you intend to create.

You do not need to explain every decision in equal detail.

Show us the decisions that matter most.

Make sure your presentation is accessible through a link in our shared [Midterm Design Studio](https://github.com/lenincompres/f26-ima-few/wiki).

---

# Encountering Each Other's Ideas

As someone presents, try to imagine encountering their proposed website for the first time.

Consider:

- What makes you curious?
- What do you understand immediately?
- What do you want to explore?
- What seems especially intentional?
- Where might you become confused?
- What relationship between content and design seems most important?
- What possibilities do you see that the designer may not have considered?

When offering feedback, distinguish between:

**What you observed**

> "I noticed that the archive is the largest element in your wireframe."

**What you experienced or imagined**

> "That made me expect the archive to be the main part of the website."

**What you wonder**

> "I wonder what would happen if visitors could enter the archive before learning what it contains."

The goal is not to redesign someone else's project.

It is to offer another perspective that may help them see their own work differently.

---

# After the Critique

Your design is not a contract.

It is a direction.

After your presentation, consider:

- What did others understand as you intended?
- What surprised them?
- What questions emerged?
- What became clearer?
- What needs to be reconsidered?
- What are you more excited to explore now?

You may keep your original direction, revise it, or discover a better one.

**The next step is to build the experience.**

---

# Homework — Build Your Midterm Website

Using the design you presented and the feedback you received, create your midterm website using **HTML and CSS**.

You may build on experiments from previous weeks, but the result should feel like a coherent, intentional experience.

Your website should bring together the concepts we have explored.

## 1. Structure and Content

Use HTML to organize meaningful content.

Think about:

- Semantic HTML
- Headings and hierarchy
- Images and other media
- Links and navigation
- Relationships among pages or sections

The content should serve the experience you want to create.

---

## 2. Visual Language

Use CSS to establish an intentional visual identity.

Consider:

- Color
- Typography
- Contrast
- Dominance
- Negative space
- Balance
- Atmosphere
- Hierarchy

Your design does not have to look conventional.

But its visual decisions should have a purpose.

---

## 3. Layout

Use Flexbox and/or Grid where appropriate.

Consider:

- Containers and children
- Alignment
- Distribution
- Grouping
- Spacing
- Relative dimensions
- Relationships among elements

Avoid positioning everything independently when a layout system could better express the relationships.

---

## 4. Responsive Design

Test your website at different browser widths.

Use media queries where the composition needs to change.

Ask:

- What remains constant?
- What needs to reorganize?
- Does navigation remain usable?
- Is text still comfortable to read?
- Does the hierarchy still make sense?
- What happens between the widths you tested?

---

## 5. Response and Transformation

Consider whether CSS states, transitions, transforms, or animations would contribute to the experience.

For example:

- A link that responds to focus or hover
- An object that reveals something
- A transition that changes the feeling of an interaction
- A subtle animation that establishes atmosphere

These are possibilities, not requirements to add effects everywhere.

**Use them where they contribute to meaning, communication, or discovery.**

---

# Publishing Your Website with GitHub Pages

Until now, you have been using GitHub to store and share your files.

Now we want to make your website available through a public URL that anyone can visit in a browser.

We can do this using **GitHub Pages**.

[GitHub Pages Documentation](https://docs.github.com/en/pages)

## Step 1 — Prepare Your Repository

For the simplest setup, use a separate public repository for your midterm website.

You can name it something like:

```text
midterm-web
```

Your project should contain an `index.html` file at the root:

```text
midterm-web/
│
├── index.html
├── style.css
│
└── images/
    ├── image-01.jpg
    └── image-02.png
```

`index.html` is the entry point to your website.

If your website has multiple pages, you can add other HTML files or organize them into folders.

---

## Step 2 — Check Your File Paths

Make sure your HTML connects to your CSS:

```html
<link rel="stylesheet" href="style.css">
```

And that your images use paths relative to your project:

```html
<img src="images/image-01.jpg" alt="Description">
```

Avoid linking to files that exist only on your computer.

For example, this will not work for someone visiting your published website:

```html
<img src="/Users/yourname/Desktop/image.jpg">
```

Remember that file names and capitalization matter when your site is published.

---

## Step 3 — Commit and Push

Using GitHub Desktop:

1. Save your changes in VS Code.
2. Check your website locally in a browser.
3. Open GitHub Desktop.
4. Review your changed files.
5. Commit your changes.
6. Push them to GitHub.

Visit your repository on GitHub and confirm that your files are there.

---

## Step 4 — Enable GitHub Pages

On your repository's GitHub page:

1. Open **Settings**.
2. Select **Pages** from the sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your `main` branch.
5. Select `/ (root)` as the folder.
6. Click **Save**.

GitHub will publish your website.

It may take a few minutes before the site is available.

For a repository named `midterm-web`, the URL will usually look like:

```text
https://YOUR-USERNAME.github.io/midterm-web/
```

Replace `YOUR-USERNAME` with your GitHub username.

You can find the actual published URL in your repository's **Settings → Pages**.

**Important:** GitHub Pages publishes static websites. HTML, CSS, images, and client-side JavaScript can work there, but server-side applications require other hosting solutions.

---

## Step 5 — Visit Your Published Website

Open the published URL in a browser.

Do not assume that because the page works locally, it will work online.

Check:

- Does the page load?
- Is the CSS working?
- Are all images visible?
- Do the links work?
- Can you navigate between pages?
- Does it work at different widths?
- Are there errors in the browser console?

If something is broken, investigate.

Fix it locally, commit, push, and check the published site again.

Remember that publishing updates may take a little time.

---

## Step 6 — Share Your Website

Add your published URL to our shared **Midterm Design Studio** wiki directory, alongside your design presentation.

Each student should now have two links:

| Student | Design Presentation | Published Website |
|---|---|---|
| Your Name | Link | Link |

This allows us to encounter both:

**What you intended to create → What you actually created**

---

# Week 07 — Encountering the Midterms

At the beginning of next week's class, we will visit the published websites.

This will not be another round of formal presentations.

Instead, we will use a rotating gallery, similar to our previous encounters with one another's work.

Half of the class will host their websites while the other half visits.

Then we will switch.

When visiting a website:

**Explore before asking the creator to explain it.**

Notice:

- What draws your attention?
- What do you understand without instructions?
- What do you want to click?
- What do you discover?
- What surprises you?
- What feels intentional?
- Where do you become uncertain?
- What happens when you change the browser size?
- What does the experience make you want to do next?

The creator should observe how someone encounters the work.

Not everything needs to be explained.

Sometimes the most interesting discoveries come from the difference between what we intended and what someone actually experiences.

---

# Field Notes

This week, record what you discover through critique and building.

Consider:

**How did your idea change when other people encountered it?**

You might also reflect on:

- A question that changed your thinking
- Feedback you decided to follow—or not follow
- Something you discovered while translating a wireframe into HTML/CSS
- A visual decision that worked differently in the browser
- Something you simplified
- Something you could not make work yet
- A responsive problem you solved
- Something you learned while publishing with GitHub Pages
- A difference between your intended experience and the one you built

You do not need to prove that your original design was correct.

The interesting part is what you discovered while making it real.

---

# Checklist for Week 07

- [ ] Review the feedback from your Midterm Design Presentation
- [ ] Build the website using HTML and CSS
- [ ] Use intentional visual language and layout
- [ ] Test at different browser widths
- [ ] Check navigation, links, and media
- [ ] Commit and push your work
- [ ] Publish the website using GitHub Pages
- [ ] Visit the published URL and verify that it works
- [ ] Add the published URL to the Midterm Design Studio directory
- [ ] Update your Field Notes
- [ ] Come ready to let others explore your website

**Next week: We encounter what you've made—and begin exploring what else the browser can do.**
