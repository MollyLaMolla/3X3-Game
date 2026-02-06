# 🎮 Molly Game

A fast-paced memory challenge inspired by the classic “Simon Game,”  
but reimagined with a 3×3 grid for a more dynamic and modern twist.

---

## 🧠 Overview

Molly Game is a simple front‑end memory game built with **HTML, CSS, and JavaScript**.  
The rules are easy: press **S** to start, watch the highlighted square, and repeat the sequence.  
Each round adds a new random square to the pattern, and the challenge grows as you try to remember the entire sequence.

One mistake ends the game — but you can restart instantly and try to beat your best level.

---

## 🔥 Features

- ▶️ **Press S to start** the game  
- 🔢 **Random sequence generation** on a 3×3 grid  
- 🧠 **Memory challenge** that grows each round  
- ✨ **Flash animation** on the chosen square  
- 🎧 **Sound effects** for correct and wrong inputs  
- ❌ **Game Over screen** with restart prompt  
- 📈 **Level counter** that updates in real time  
- 💡 **Smooth animations** using jQuery effects  
- 📱 Fully responsive layout  

---

## 🎮 How It Works

### **Gameplay Flow**
1. Press **S** to start the game  
2. A random square flashes  
3. You click the same square  
4. A new square is added to the sequence  
5. Repeat the entire sequence in order  
6. Continue until you make a mistake  

### **Game Logic**
- `gamePattern[]` stores the correct sequence  
- `userPattern[]` stores the player’s clicks  
- Each round:
  - A new random square is added  
  - The level increases  
  - The UI updates  
- If the user clicks the wrong square:
  - A “wrong” sound plays  
  - The screen flashes red  
  - The game resets  

---

## 🛠️ Tech Stack

**Frontend Only:**
- HTML  
- CSS  
- JavaScript  
- jQuery

**No backend, no database — fully client-side.**

---

## 👊 Installation

```text
# Clone the project
git clone https://github.com/MollyLaMolla/3x3-Game.git
cd molly-game

# Open the game
Open index.html in your browser

```
## 🌐 Live Demo
[Try it here](https://mollylamolla.github.io/3X3-Game/game.html)

## 📄 License
This project is licensed under the ISC License.
