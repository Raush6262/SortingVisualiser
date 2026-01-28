# 🔢 Sorting Algorithm Visualizer

A web-based **Sorting Algorithm Visualizer** built using **HTML, CSS, and Vanilla JavaScript**.  
It visually demonstrates how different sorting algorithms work step-by-step using animated bars.

---

## 🚀 Features

- Generate a random array of customizable size  
- Control animation speed using a slider  
- Select sorting algorithm from a dropdown  
- Step-by-step animated visualization  
- Multiple sorting algorithms supported  
- Safe animation handling (no overlapping animations)

---

## 🧠 Implemented Algorithms

- Bubble Sort  
- Selection Sort  
- Insertion Sort  
- Merge Sort  
- Quick Sort  

---

## ⚙️ How It Works

### 1. Array Generation
- Random values are generated based on user input.
- Each value is rendered as a vertical bar.

### 2. Step Recording
- Sorting algorithms **do not directly manipulate the DOM**.
- Instead, every operation is recorded as a step:
  - `compare`
  - `swap`
  - `tomerge`
  - `update`
  - `done`

### 3. Animation Engine
- A centralized `animateArray()` function:
  - Reads steps sequentially
  - Animates bars using `setTimeout`
  - Handles all algorithm operations

### 4. Animation Safety
- An `isAnimating` flag ensures:
  - Only one sort runs at a time
  - No array regeneration during animation
  - No race conditions

---

## 🖥️ Tech Stack

- HTML5  
- CSS3  
- JavaScript (ES6)

_No frameworks used._

---

## ▶️ How to Use

1. Enter the number of elements  
2. Click **Generate Array**  
3. Choose a sorting algorithm  
4. Adjust speed using the slider  
5. Click **Sort**  
6. Watch the algorithm in action  

---

## 📈 Future Improvements

- Improved UI/UX  
- Time & space complexity display  
- Comparison and swap counters  
- React-based refactor  
- Better code modularization  

---

## 👨‍💻 Author

**Raushan Kumar**

Built as a learning-focused project to deeply understand:
- Sorting algorithms  
- Asynchronous JavaScript  
- Animation control  
- State management without frameworks  

---
