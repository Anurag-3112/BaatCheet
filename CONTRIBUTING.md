# Contributing to BaatCheet

Thank you for your interest in contributing to **BaatCheet**!

BaatCheet is an open-source real-time chat application built with the MERN stack and Socket.IO. Contributions of all kinds are welcome — whether you're fixing a bug, improving the UI, adding a feature, improving documentation, or writing tests.

We appreciate your time and effort in helping improve the project.

---

## 📌 Before You Start

Before making a contribution:

1. Check the existing [Issues](../../issues) to see if the problem or feature has already been discussed.
2. For major features, open an issue first so we can discuss the proposed approach.
3. For small fixes, you can directly create a Pull Request.
4. Please keep your changes focused and avoid unrelated modifications.

---

## 🚀 Getting Started

### 1. Fork the Repository

Click the **Fork** button at the top-right of the BaatCheet GitHub repository.

This creates your own copy of the repository under your GitHub account.

---

### 2. Clone Your Fork

Clone your fork locally:

```bash
git clone https://github.com/Anurag-3112/BaatCheet.git
```

Move into the project:

```bash
cd BaatCheet
```

---

### 3. Add the Upstream Repository

Add the original BaatCheet repository as an upstream remote:

```bash
git remote add upstream https://github.com/Anurag-3112/BaatCheet.git
```

Verify the remotes:

```bash
git remote -v
```

You should see your fork as `origin` and the original repository as `upstream`.

---

## 📦 Install Dependencies

BaatCheet contains separate frontend and backend applications.

### Frontend

```bash
cd client
npm install
```

### Backend

Open another terminal:

```bash
cd server
npm install
```

---

## 🔐 Environment Variables

Do **not** commit your `.env` files.

Create the required environment files locally.

### Server

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

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Client

If the frontend requires environment variables, create:

```text
client/.env
```

Example:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

Never commit real credentials, API keys, passwords, or secrets.

---

## ▶️ Running BaatCheet Locally

### Start the Backend

```bash
cd server
npm run dev
```

The backend should start on:

```text
http://localhost:5000
```

### Start the Frontend

In another terminal:

```bash
cd client
npm run dev
```

The frontend should be available at:

```text
http://localhost:5173
```

---

# 🌿 Creating a Branch

Do not work directly on the `main` branch.

Create a separate branch for your contribution.

### Feature

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b feature/dark-mode
```

### Bug Fix

```bash
git checkout -b fix/issue-description
```

Example:

```bash
git checkout -b fix/message-duplication
```

### Documentation

```bash
git checkout -b docs/update-readme
```

---

# 💻 Making Changes

While working on your contribution:

* Keep your changes focused.
* Follow the existing project structure.
* Avoid unnecessary dependencies.
* Write readable and maintainable code.
* Reuse existing components and utilities when possible.
* Do not commit secrets or environment files.
* Test your changes locally before opening a Pull Request.

---

# 🧪 Testing Your Changes

Before submitting a Pull Request, make sure:

* [ ] The frontend starts successfully.
* [ ] The backend starts successfully.
* [ ] Existing functionality still works.
* [ ] Your new functionality works as expected.
* [ ] There are no unexpected console errors.
* [ ] There are no server errors.
* [ ] Real-time functionality works if your changes affect Socket.IO.
* [ ] Responsive behavior has been checked if you changed the UI.

---

# 📝 Commit Guidelines

Please use clear and meaningful commit messages.

Recommended format:

```text
type: short description
```

Examples:

```text
feat: add dark mode
```

```text
fix: prevent duplicate messages
```

```text
docs: update installation instructions
```

```text
style: improve chat sidebar
```

```text
refactor: simplify socket connection handling
```

```text
test: add authentication tests
```

### Common Types

| Type       | Usage                 |
| ---------- | --------------------- |
| `feat`     | New feature           |
| `fix`      | Bug fix               |
| `docs`     | Documentation         |
| `style`    | Formatting/UI styling |
| `refactor` | Code restructuring    |
| `test`     | Tests                 |
| `chore`    | Maintenance           |

---

# 📤 Push Your Changes

After completing your work:

```bash
git status
```

Add your changes:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: add your feature"
```

Push your branch:

```bash
git push origin your-branch-name
```

---

# 🔃 Create a Pull Request

Go to your fork on GitHub.

GitHub should show an option to create a Pull Request.

Create a Pull Request from:

```text
YOUR_USERNAME:BrachName
        ↓
Anurag-3112:BaatCheet:main
```

In your Pull Request description, explain:

### What did you change?

Briefly describe your changes.

### Why?

Explain the problem your contribution solves.

### Testing

Explain how you tested the changes.

### Screenshots

If your contribution changes the UI, include screenshots or a short recording.

---

# 🔍 Pull Request Checklist

Before submitting your Pull Request:

* [ ] I created a separate branch.
* [ ] I tested my changes locally.
* [ ] I followed the existing project structure.
* [ ] I used clear commit messages.
* [ ] I did not commit `.env` files or secrets.
* [ ] I updated documentation where necessary.
* [ ] I added screenshots for UI changes.
* [ ] My changes do not unnecessarily modify unrelated files.
* [ ] Existing functionality continues to work.

---

# 🐛 Reporting Bugs

If you find a bug, please create a Bug Report using the repository's issue template.

Include:

* A clear description of the problem.
* Steps to reproduce it.
* Expected behavior.
* Actual behavior.
* Browser/OS information where relevant.
* Screenshots or recordings if helpful.
* Relevant console/server errors.

Before opening a new issue, search existing issues to avoid duplicates.

---

# ✨ Suggesting Features

Feature ideas are welcome!

Before implementing a major feature:

1. Open a Feature Request.
2. Explain the problem you're trying to solve.
3. Describe your proposed solution.
4. Discuss alternative approaches if applicable.
5. Wait for feedback before starting significant work.

For smaller improvements, you may directly submit a Pull Request.

---

# 🎨 UI/UX Contributions

For UI/UX changes:

* Keep the interface clean and accessible.
* Maintain consistency with the existing BaatCheet design.
* Ensure the interface works on different screen sizes.
* Avoid introducing unnecessary UI complexity.
* Include screenshots in your Pull Request.

---

# 🔌 Real-Time / Socket.IO Contributions

If your changes involve real-time functionality:

* Make sure events are properly cleaned up.
* Avoid registering duplicate socket listeners.
* Handle connection/disconnection scenarios.
* Test communication using multiple users/browser windows.
* Make sure existing messaging functionality continues to work.

---

# 🔒 Security

Never commit:

```text
.env
API keys
Database credentials
JWT secrets
Cloudinary secrets
Access tokens
Passwords
```

If you discover a security vulnerability, please do **not** create a public issue.

Instead, follow the instructions in `SECURITY.md`.

---

# 🤝 Code of Conduct

By participating in this project, you agree to follow the project's [Code of Conduct](CODE_OF_CONDUCT.md).

Please be respectful, constructive, and welcoming to other contributors.

---

# 💡 Need Help?

If you're unsure about something:

* Open a GitHub Discussion.
* Comment on the relevant Issue.
* Ask questions before making a large change.

Beginners are welcome!

You don't need to be an expert to contribute to BaatCheet.

---

# ⭐ Thank You!

Every contribution helps improve BaatCheet.

Whether you:

* Fix a typo
* Improve documentation
* Report a bug
* Improve the UI
* Fix a performance issue
* Add a feature
* Write tests
* Improve accessibility

your contribution is appreciated.

**Happy coding! 🚀**

---

## Maintainer

BaatCheet is maintained by [Anurag Kumar](https://github.com/Anurag-3112).

If you're interested in contributing, feel free to open an issue or Pull Request.
