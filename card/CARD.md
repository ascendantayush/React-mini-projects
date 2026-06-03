# Quote Card App

A simple and interactive React project that displays motivational quotes inside a styled quote card with navigation controls.

Built while learning core React concepts like:

* Components
* Props
* State Management
* Conditional Rendering
* Event Handling
* Dynamic Styling

---

# Features

* Browse through multiple motivational quotes
* Previous and Next navigation buttons
* Dynamic background colors for each quote
* Toggle quote visibility by clicking the image
* Quote counter display
* Reusable React components
* Clean and responsive UI

---

# Tech Stack

* React
* JavaScript (ES6+)
* CSS3

---

# Project Structure

```bash
src/
│
├── components/
│   ├── button.jsx
│   ├── button.css
│   ├── card.jsx
│   ├── card.css
│   ├── counter.jsx
│   └── counter.css
│
├── assets/
│
├── app.jsx
├── app.css
├── index.jsx
└── index.html
```

---

# Concepts Practiced

## React State

Used `useState` for:

* tracking current quote index
* toggling quote visibility

---

## Conditional Rendering

Buttons only appear when navigation is possible.

Example:

* hide previous button on first quote
* hide next button on last quote

---

## Reusable Components

Created separate reusable components for:

* Card
* Button
* Counter

---

## Dynamic Props

Passed dynamic values like:

* quote text
* quote number
* image source
* background colors

through props.

---

# Future Improvements

Some features planned for future updates:

* Random quote button
* Animations and transitions
* API-based quotes
* Dark/Light mode
* Progress indicator
* Mobile responsiveness improvements

---

# Installation

Clone the repository:

```bash
git clone <your-repo-link>
```

Move into the project folder:

```bash
cd quote-card-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# Learning Outcome

This project helped in understanding:

* component-based architecture
* parent-child communication
* prop passing
* state-driven UI
* React rendering flow

---

# Preview

A minimal motivational quote application built for practicing React fundamentals and UI structuring.
