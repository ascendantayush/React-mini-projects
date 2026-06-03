# 🃏 Quote Card App

> A simple and interactive React application that displays motivational quotes inside a beautifully styled card with smooth navigation controls.

---

## ✨ Features

- 📖 Browse through multiple motivational quotes
- ⬅️ ➡️ Previous and Next navigation buttons
- 🎨 Dynamic background colors per quote
- 👁️ Toggle quote visibility by clicking the image
- 🔢 Quote counter display
- 🧩 Reusable React components
- 📱 Clean and responsive UI

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── button.jsx       # Reusable navigation button
│   ├── button.css
│   ├── card.jsx         # Main quote card component
│   ├── card.css
│   ├── counter.jsx      # Quote counter display
│   └── counter.css
│
├── assets/              # Images and static files
│
├── app.jsx              # Root component & state management
├── app.css
├── index.jsx            # Entry point
└── index.html
```

---

## 🚀 Getting Started

**Clone the repository**
```bash
git clone https://github.com/ascendantayush/React-mini-projects/
```

**Move into the project folder**
```bash
cd card
```

**Install dependencies**
```bash
npm install
```

**Run the development server**
```bash
npm start
```

---

## 🧠 Concepts Practiced

| Concept | How it's used |
|---|---|
| `useState` | Tracks current quote index & toggle visibility |
| Conditional Rendering | Hides Prev/Next buttons at boundaries |
| Reusable Components | Card, Button, Counter as separate components |
| Props | Passes quote text, number, image, colors dynamically |
| Event Handling | Button clicks and image click toggle |
| Dynamic Styling | Background color changes per quote |

---

## 🔮 Future Improvements

- [ ] Random quote button
- [ ] Animations and transitions
- [ ] API-based quotes
- [ ] Dark / Light mode toggle
- [ ] Progress indicator
- [ ] Mobile responsiveness improvements

---

## 📚 Learning Outcome

This project strengthened understanding of:
- Component-based architecture
- Parent-child communication via props
- State-driven UI rendering
- React rendering flow

---

*Built while learning React fundamentals* ⚛️
