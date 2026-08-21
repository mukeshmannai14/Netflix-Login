# 🎬 Movieflix Login – Full Stack Project

A Netflix-inspired full-stack login application built using React.js for the frontend and Node.js + Express.js for the backend.

---

# 📌 Project Overview

This project is divided into two main parts:

- **Part 1 – Frontend**
- **Part 2 – Backend**

The application provides a Netflix-inspired login page, frontend validation, backend mock authentication, API integration, error handling, and a Netflix-style dashboard after successful login.

---

# 🟢 Part 1 – Frontend

## 🎯 Objective

Create a Netflix-inspired login page using React.js with form handling, frontend validation, API integration, and dashboard redirection.

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

## ✨ Features

- Netflix-inspired login UI
- Responsive design
- Email input
- Password input
- Frontend form validation
- Error messages
- Sign In button
- Backend API integration
- Dashboard redirection after successful login
- Sign Out functionality

## 📂 Frontend Structure

```text
client/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── Dashboard.jsx
│   ├── Dashboard.css
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

## 🔐 Frontend Validation

The application checks whether the required fields are filled.

```text
Email empty
    ↓
"Please enter your email."

Password empty
    ↓
"Please enter your password."
```

If both fields are valid, the frontend sends the login information to the Express backend.

## 🔗 API Integration

The React frontend uses JavaScript `fetch()` to communicate with the backend.

Example:

```javascript
const response = await fetch(
  "https://YOUR-BACKEND-URL/api/login",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }
);
```

## ▶️ Run Frontend

```bash
cd client
npm install
npm run dev
```

Frontend normally runs at:

```text
http://localhost:5173
```

---

# 🔵 Part 2 – Backend

## 🎯 Objective

Create a Node.js and Express.js backend to handle login requests and validate mock/static credentials.

## 🛠️ Technologies Used

- Node.js
- Express.js
- CORS
- REST API

## ✨ Features

- Express server
- Login API
- Mock/static credentials
- Request handling
- Credential validation
- Success response
- Error response
- CORS support

## 📂 Backend Structure

```text
server/
│
├── server.js
├── package.json
└── package-lock.json
```

## 🔌 Login API

### Endpoint

```text
POST /api/login
```

### Request

```json
{
  "email": "your-email@example.com",
  "password": "your-password"
}
```

### Successful Response

```json
{
  "success": true,
  "message": "Login successful"
}
```

### Invalid Response

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

## ▶️ Run Backend

```bash
cd server
npm install
node server.js
```

Backend normally runs at:

```text
http://localhost:5000
```

---

# 🔄 Part 1 + Part 2 Integration

The frontend communicates with the backend using the login API.

```text
              FRONTEND
           React / Vite
                │
                │ POST /api/login
                ▼
              BACKEND
          Node.js + Express
                │
                ▼
       Check Mock Credentials
          /                     Valid            Invalid
         │                 │
         ▼                 ▼
     Dashboard           Error
```

### Login Flow

1. User enters email and password.
2. React validates the input.
3. React sends the credentials to Express.
4. Express checks the mock/static credentials.
5. If credentials are valid, the backend returns a success response.
6. React changes the login state.
7. The user sees the Netflix-style dashboard.
8. If credentials are invalid, an error message is displayed.

---

# 🎬 Dashboard

After successful login, the user is shown a Netflix-inspired home/dashboard page.



# 🔑 Mock Login Credentials

For local testing, use the credentials configured in your backend.

Example:

```text
Email:
demo@example.com

Password:
Demo@123
```

> This project uses mock/static authentication and does not use a database.

---

# ☁️ Deployment

## Frontend

The React frontend can be deployed using Vercel.

Example:

```text
https://client-coral-xi-79.vercel.app/
```

## Backend

The Express backend can also be deployed using Vercel.

Example:

```text
https://server-one-chi-53.vercel.app/
```

> Make sure the deployed frontend uses the deployed backend URL instead of `http://localhost:5000`.

For example:

```javascript
fetch("https://YOUR-BACKEND-URL.vercel.app/api/login", ...)
```

---

# 🧪 Testing

## Test 1 – Empty Email

Leave the email field empty and click **Sign In**.

Expected result:

```text
Please enter your email.
```

## Test 2 – Empty Password

Enter an email but leave the password empty.

Expected result:

```text
Please enter your password.
```

## Test 3 – Invalid Credentials

Enter an incorrect email or password.

Expected result:

```text
Invalid email or password
```

## Test 4 – Valid Credentials

Enter the correct mock credentials.

Expected result:

```text
Login successful
        ↓
Netflix Dashboard
```

---

# 📚 Learning Objectives

This project helped practice:

- React components
- React `useState`
- Form handling
- Frontend validation
- Conditional rendering
- JavaScript `fetch()`
- REST API communication
- Node.js
- Express.js
- CORS
- Mock authentication
- Error handling
- Git
- GitHub
- Vercel deployment
- Frontend/backend integration

---

# 🗂️ Complete Project Structure

```text
Netflix-Login/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---



# ⚠️ Important Security Note

This is an educational project.

The current authentication uses mock/static credentials and is **not suitable for production**.

A production application should use:

- Secure password hashing
- Database storage
- JWT or secure session authentication
- Environment variables
- HTTPS
- Proper input validation
- Protected API routes

---

# 👨‍💻 Author

**Mukesh Kanna**

Full Stack Development Learner

GitHub:

https://github.com/mukeshmannai14

---

# ⚠️ Disclaimer

This project is created for educational and portfolio purposes only.

It is a Netflix-inspired learning project and is not affiliated with or endorsed by Netflix.

---

# ⭐ Project Summary

This project demonstrates a complete basic full-stack authentication flow:

```text
React Login Page
       ↓
Frontend Validation
       ↓
Fetch API
       ↓
Express Backend
       ↓
Mock Credential Check
       ↓
Success / Error Response
       ↓
Netflix Dashboard
```

Built with ❤️ for learning Full Stack Development.
