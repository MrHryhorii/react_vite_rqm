# React Random Quote Machine 🎲

A small project built with **React** using [Vite](https://vitejs.dev/) and **JavaScript**.  
This is a conversion of my earlier project on [CodePen](https://codepen.io/imtvvqrc-the-bashful/pen/GRbvKow),  
which did not require Node.js components.

---

## 📸 Screenshots

| Random Quote Example 1                                   | Random Quote Example 2                                   |
| -------------------------------------------------------- | -------------------------------------------------------- |
| ![Screenshot 1](./Skjermbilde%202025-07-28%20164936.png) | ![Screenshot 2](./Skjermbilde%202025-07-28%20165052.png) |

---

## 🛠️ Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript
- CSS
- React Hooks: **useState**, **useEffect**

---

## 🔧 How It Works

This app displays random programming quotes with a button to generate a new one.  
It also includes a Twitter share link for each quote.

- **`useState`**  
  Used to store the index of the currently displayed quote.  
  Each time the "New Quote" button is pressed, the index is updated with a new random number,  
  causing React to re-render the component with the new quote.

- **`useEffect`**  
  Used to set the initial quote when the app loads.  
  The effect runs only once on mount (because of the empty dependency array `[]`),  
  ensuring a random quote is shown without user interaction.

---

## ⚙️ How to Start Your Own React Project with Vite

If you want to create a new React project using Vite, follow these steps:

```bash
# 1. Create a new Vite project
npm create vite@latest my-react-app

# 2. Choose "React" or "React with JavaScript" when prompted
cd my-react-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```
