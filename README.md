# 💬 [BaatCheet](https://baatcheet-exgwlci40-anurag-3112s-projects.vercel.app/login)

A simple, open-source, real-time chat application built with the MERN stack and Socket.IO.

BaatCheet allows users to communicate in real time, share messages and images, see online users, and know when someone is typing.

The project is open source and welcomes contributions from developers of all experience levels.

---

## Features

### Authentication

- User registration
- User login
- JWT-based authentication
- Protected routes
- Password hashing

### Real-Time Messaging

- One-to-one messaging
- Real-time message delivery
- Persistent chat history
- Automatic message updates
- Duplicate message prevention
- Socket.IO-based communication

### User Presence

- Online user status
- Real-time online user updates

### ⌨️ Typing Indicator

- Real-time typing status
- Debounced typing events
- Automatic typing timeout

### Image Sharing

- Image upload
- Image preview before sending
- Image validation
- Cloudinary storage
- Send image with text
- Open shared images

### User Search

- Search users by name
- Quickly find users from the sidebar

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- Socket.IO

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- bcrypt

### Media Storage

- Cloudinary

### Development Tools

- Git
- GitHub
- Postman
- VS Code

---

## Architecture

```text
                    ┌───────────────┐
                    │    React      │
                    │   Frontend    │
                    └───────┬───────┘
                            │
                     HTTP / REST API
                            │
                            ▼
                    ┌───────────────┐
                    │    Express    │
                    │    Backend    │
                    └───────┬───────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
        ┌─────────┐   ┌──────────┐   ┌───────────┐
        │ MongoDB │   │ Socket.IO│   │ Cloudinary│
        └─────────┘   └──────────┘   └───────────┘
```

### Message Flow

```text
User sends message
       │
       ▼
React Client
       │
       ▼
POST /messages
       │
       ▼
Express Server
       │
       ├──────► MongoDB
       │
       └──────► Socket.IO
                    │
                    ▼
              Receiver Client
```

---

# Project Structure

```text
BaatCheet/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── .gitignore
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── LICENSE
└── README.md
```

---

# Getting Started

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB or MongoDB Atlas
- Git

You will also need a Cloudinary account if you want to use image sharing.

---

# Installation

## 1. Fork the Repository

Fork BaatCheet to your GitHub account.

Then clone your fork:

```bash
git clone https://github.com/Anurag-3112/BaatCheet.git
```

Move into the project:

```bash
cd BaatCheet
```

---

## 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3. Install Frontend Dependencies

Open another terminal:

```bash
cd client
npm install
```

---

# 🔐 Environment Variables

Never commit your `.env` files.

Create:

```text
server/.env
```

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

If your frontend uses environment variables, create:

```text
client/.env
```

Example:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

> Check the actual project configuration before using these variable names.

---

# Running the Application

## Start Backend

```bash
cd server
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

## Start Frontend

In another terminal:

```bash
cd client
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

# Real-Time Communication

BaatCheet uses Socket.IO for real-time communication.

Important socket events include:

```text
join
receiveMessage
typing
stopTyping
onlineUsers
disconnect
```

The server is responsible for broadcasting messages to connected users.

The frontend does not independently emit a message after the HTTP message request, preventing duplicate message delivery.

---

# Testing

Before submitting changes, contributors should test:

- Registration
- Login
- Authentication
- User search
- Sending messages
- Receiving messages
- Chat history
- Online status
- Typing indicator
- Image upload
- Image preview
- Multiple browser sessions

For backend security/dependency checks:

```bash
npm audit
```

---

# 🗺️ Roadmap

BaatCheet is actively evolving.

### Core

- [x] User authentication
- [x] JWT authentication
- [x] User search
- [x] Real-time messaging
- [x] Chat history
- [x] Online status
- [x] Typing indicator
- [x] Image sharing

### Coming Soon

- [ ] Message delivered status
- [ ] Message seen status
- [ ] Last seen
- [ ] Emoji picker
- [ ] Notifications
- [ ] User profile
- [ ] Dark mode
- [ ] Better mobile UI

### Future Ideas

- Group chats
- Message reactions
- File sharing
- Voice messages
- Push notifications
- Voice calling
- Video calling
- PWA support

> Features marked as planned are not currently implemented.

---

# Contributing

Contributions are welcome!

Before contributing, please read:

**CONTRIBUTING.md**

You can contribute by:

- Fixing bugs
- Improving the UI
- Adding features
- Improving performance
- Writing tests
- Improving accessibility
- Improving documentation
- Suggesting new ideas

### Quick Contribution Flow

```text
Fork
  ↓
Clone
  ↓
Create Branch
  ↓
Make Changes
  ↓
Test
  ↓
Commit
  ↓
Push
  ↓
Pull Request
```

Please check the existing Issues before starting work on a feature.

---

# Bug Reports

Found a bug?

Open a GitHub Issue using the:

** Bug Report**

template.

Please provide enough information for others to reproduce the issue.

---

# Feature Requests

Have an idea for BaatCheet?

Open a GitHub Issue using the:

** Feature Request**

template.

Major features should ideally be discussed before implementation.

---

# Security

If you discover a security vulnerability, please do not publicly disclose it through a GitHub Issue.

Please read:

**SECURITY.md**

for security reporting guidelines.

---

# Code of Conduct

Please read and follow our:

**Code of Conduct**

We want BaatCheet to remain a welcoming and respectful open-source project.

---

# License

BaatCheet is released under the **MIT License**.

See the LICENSE file for details.

---

# Maintainer

**Anurag Kumar**

GitHub:

https://github.com/Anurag-3112

---

# Support the Project

If you find BaatCheet useful:

- Star the repository
- Report bugs
- Suggest features
- Submit improvements
- Improve documentation
- Contribute to the project

Every contribution helps make BaatCheet better.

---

## BaatCheet

**Build. Chat. Contribute.**

Made with ❤️ using the MERN stack and Socket.IO.
