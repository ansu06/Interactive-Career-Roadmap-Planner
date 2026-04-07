# 🚀 Interactive Career Roadmap Planner

A modern, full-stack web application that helps students plan, track, and manage their learning journey across different career paths with personalized progress tracking.

---

## 🌟 Features

* 🔐 **User Authentication (Firebase)**

  * Secure login/signup using Email & Password
  * Persistent sessions

* 🧭 **Career Roadmap Selection**

  * Choose from multiple career paths (Frontend, Backend, Data Science, etc.)
  * Structured roadmap divided into Beginner → Intermediate → Advanced

* ✅ **Progress Tracking**

  * Interactive checklist for each topic
  * Dynamic progress percentage calculation
  * Progress bar visualization

* 🎯 **Smart Recommendations**

  * Displays next recommended topic to learn
  * Helps maintain structured learning

* 🔥 **Streak & Insights**

  * Tracks user consistency
  * Shows learning insights

* ☁️ **Cloud Storage (Firestore)**

  * Saves user progress per account
  * Syncs data across devices

* 🎨 **Modern UI/UX**

  * Dark theme
  * Responsive design
  * Smooth animations

---

## 🛠️ Tech Stack

### Frontend

* **React JS** – Component-based UI development
* **HTML (JSX)** – Structure
* **CSS** – Styling and layout
* **JavaScript** – Logic and interactivity

### Backend Services

* **Firebase Authentication** – User login/signup
* **Firebase Firestore** – Database for storing user progress

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Navbar.js
│   ├── Login.js
│   ├── CareerSelector.js
│   ├── Roadmap.js
│   ├── ProgressBar.js
│
│── data/
│   └── careerData.js
│
│── firebase.js
│── App.js
│── App.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ansu06/Interactive-Career-Roadmap-Planner.git
cd Interactive-Career-Roadmap-Planner
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Firebase

Create a Firebase project and replace config in `firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};
```

Enable:

* ✅ Authentication → Email/Password
* ✅ Firestore Database

---

### 4️⃣ Run the App

```bash
npm start
```

App will run on:

```
http://localhost:3000
```

---

## 📊 How It Works

1. User signs up / logs in using Firebase Authentication
2. Selects a career path
3. Views roadmap topics
4. Marks topics as completed
5. Progress is:

   * Updated in UI instantly
   * Saved in Firestore
6. On next login → progress is restored

---

## 🧠 Concepts Used

* **React Hooks** (`useState`, `useEffect`)
* **Component-Based Architecture**
* **Conditional Rendering**
* **Event Handling**
* **State Management**
* **LocalStorage + Cloud Sync**
* **Firebase Integration**

---

## 🚀 Future Enhancements

* 📈 Advanced analytics dashboard
* 🧠 AI-based recommendations
* 📅 Weekly planner integration
* 📊 Graphical progress charts
* 🌐 Multi-device real-time sync

---

## 👨‍💻 Author

**Ansuman Singh**

---

## ⭐ Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is for educational purposes.

---

## 💡 Acknowledgements

* React Documentation
* Firebase Documentation
* MDN Web Docs

---

### ✨ “Plan your career. Track your growth. Build your future.” ✨
