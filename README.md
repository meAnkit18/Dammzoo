<h1 align="center">🧠 Dammzoo</h1>
<p align="center">Talk to AI characters who remember you. Not just chat — relationships.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-React-blue.svg" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen" />
  <img src="https://img.shields.io/badge/API-Gemini-orange" />
  <img src="https://img.shields.io/badge/UI-TailwindCSS-blueviolet" />
</p>

---

## 🌟 Overview

**Dammzoo** is an AI-powered conversational platform where users chat with emotionally rich, memory-capable characters. Each AI persona has its own unique vibe — humorous, chill, deep, or reflective. The best part? They remember you. Dammzoo builds persistent relationships, not just chats.

> 🤖 *You may forget them, but they won’t forget you.*

---

## 🚀 Features

- 💬 Real-time chat with multiple AI personas  
- 🧠 Persistent memory using MongoDB  
- 🧍‍♂️ Unique personalities with attitude, humor, or depth  
- 🧠 Powered by Google's **Gemini API**  
- 🎨 Fully responsive UI using **TailwindCSS**  
- 🌀 Smooth animations with **Framer Motion**  
- 🔐 JWT-based session security  
- ☁️ Image & media support via **Cloudinary**

---

## 🛠️ Tech Stack

| Tech             | Role                              |
|------------------|-----------------------------------|
| **React.js**     | Frontend Framework                |
| **Vite**         | Build Tool                        |
| **TailwindCSS**  | UI Styling                        |
| **Framer Motion**| Animations                        |
| **Node.js**      | Backend Runtime                   |
| **Express.js**   | REST API                          |
| **MongoDB**      | Database (chat logs, memory)      |
| **Gemini API**   | AI LLM for conversational logic   |
| **Cloudinary**   | Media upload and management       |
| **JWT**          | Token-based auth system           |

---

## 📸 Screenshots

<p align="center">
 <img width="1280" height="720" alt="Untitled design" src="https://github.com/user-attachments/assets/a2035d75-ab04-42d0-a701-b19ef26133a7" />
</p>

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/meAnkit18/Dammzoo
cd dammzoo
```

### 2. Setup frontend

```bash
cd client
npm install
npm run dev
```

### 3. Setup backend

```bash
cd ../server
npm install
npm start
```

---

## 📁 .env Example

Create a `.env` file in your `server/` folder with the following structure:

```env
MONGO_URI=mongodb+srv://your-cluster.mongodb.net/dammzoo
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
GEMINI_API_KEY=your-gemini-api-key
PORT=5000

JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

CLOUD_NAME=your-cloudinary-cloud-name
API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-api-secret

CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

> ⚠️ **Do not commit your actual `.env` file** to GitHub. Add it to `.gitignore`.

---

## 📌 Future Improvements

- ✅ More diverse AI character personalities  
- ✅ Secure email/password user login  
- ⏳ Voice-to-text interaction  
- ⏳ Save favorite conversations  
- ⏳ Multi-language support  
- ⏳ User dashboard with stats  

---

## 👨‍💻 Author

**Ankit Kumar**  
🎓 B.Tech CS @ KIET Group of Institutions  
🔗 [LinkedIn](https://www.linkedin.com/in/meankit18/) • [X](https://x.com/meAnkit18)

---

## 📝 License

This project is licensed under the **MIT License**.
