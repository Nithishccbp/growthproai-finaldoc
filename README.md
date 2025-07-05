# GrowthProAI Full Stack Assignment – Nithish Reddy

## 🔧 Tech Stack
- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express
- No database (mock data only)

---

## 🚀 How to Run the Project Locally

### 1️⃣ Backend Setup
```bash
cd server
npm install
node index.js
```
Starts on http://localhost:3001

### 2️⃣ Frontend Setup
```bash
cd client
npm install
npm run dev
```
Starts on http://localhost:5173

---

## 📦 Backend Endpoints

### POST /business-data
Request:
```json
{ "name": "Cake & Co", "location": "Mumbai" }
```

Response:
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

---

### GET /regenerate-headline
Returns a randomly selected headline from a static list.

---

## ✅ Features

- Takes Business Name and Location from user
- Displays mock Rating, Reviews, and an AI-generated headline
- “Regenerate” button returns a new headline via backend

---

## 👤 Submitted by: Nithish Reddy
