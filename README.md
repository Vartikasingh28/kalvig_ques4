# Task API 📝🚀

A simple RESTful API built using **Node.js** and **Express** to manage tasks.

## Features
- 📌 Create, retrieve, and delete tasks
- 🚀 In-memory storage (No database required)
- 🛠 Proper error handling and status codes

---

## 📝 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone <REPO_URL>
cd TaskApi
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the API
**For production:**
```sh
npm start
```
**For development (auto-restart on changes):**
```sh
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint          | Description           |
|--------|------------------|-----------------------|
| GET    | `/api/tasks`     | Fetch all tasks      |
| POST   | `/api/tasks`     | Add a new task       |
| DELETE | `/api/tasks/:id` | Delete a task by ID  |

### 📝 Example Task Object
```json
{
  "id": "1",
  "name": "Complete project",
  "completed": false
}
```

---

## 📌 Folder Structure
```
TaskApi/
│── src/
│   ├── controller/
│   │   ├── taskController.js
│   ├── model/
│   │   ├── taskModel.js
│   ├── routes/
│   │   ├── taskRoutes.js
│── server.js
│── package.json
│── .gitignore
│── README.md
```

---

## ❌ Common Issues & Fixes

1️⃣ **`package.json not found`**  
👉 Make sure you're inside the correct directory before running `npm install`.

2️⃣ **Port already in use error**  
👉 Kill the process using:
```sh
npx kill-port 3000
```

3️⃣ **Changes not reflecting?**  
👉 Use:
```sh
npm run dev
```

---

## 🛠 Built With
- **Node.js** 🌍
- **Express.js** 🚀
- **Nodemon** 🔄
