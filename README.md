# TaskFlow Frontend 🚀

A modern React-based task management application built with Vite and Tailwind CSS, featuring elegant UI, authentication, and real-time task management.

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-green.svg)](LICENSE)

---

### ✨ Features

<details>
<summary><b>🎨 Modern, Responsive UI</b></summary>

- Elegant dark theme with Tailwind CSS
- Smooth transitions and animations
- Mobile-first design
- Interactive hover states
- Task categorization (active/completed)
</details>

<details>
<summary><b>🔐 Authentication</b></summary>

- JWT-based authentication
- Secure password validation
- Automatic token expiration handling
- Protected routes
- User-friendly error messages
</details>

<details>
<summary><b>📝 Task Management</b></summary>

- Create tasks with name and optional due date
- Mark tasks as complete/incomplete
- Delete tasks with optimistic updates
- Automatic sorting (incomplete first)
- Task counters for active and completed tasks
- Date formatting for better readability
</details>

<details>
<summary><b>🛡️ Error Handling</b></summary>

- Form validation feedback
- API error handling
- Network error handling
- Token expiration handling
- Optimistic updates with rollback
</details>

### 🛠️ Tech Stack

```
Frontend     : React 18 with Hooks
Build Tool   : Vite
Styling      : Tailwind CSS
Auth         : JWT
API Calls    : Fetch API
```

### 📋 Prerequisites

```bash
Node.js     : v14 or higher
Package Mgr : npm or yarn
Backend     : TaskFlow server running
```

### 🌍 Environment Setup

<details>
<summary><b>Development Setup</b></summary>

1. Create `.env` file:

```bash
VITE_API_URL=http://localhost:3001/api
```

</details>

### 🚀 Quick Start

1. **Clone & Install**

   ```bash
   git clone https://github.com/Deep-Narayan-M/taskflow-frontend.git
   cd todo-client
   npm install
   ```

2. **Set Environment**

   ```bash
   # Create .env file as shown in Environment Setup
   ```

3. **Start Development**
   ```bash
   npm run dev
   # 🌐 App runs at http://localhost:5173
   ```

### 📁 Project Structure

```
src/
├── 📱 components/      # React components
│   ├── AddTodo        # Task creation form
│   ├── AppName        # Application header
│   ├── Auth           # Authentication forms
│   ├── TodoItem       # Individual task component
│   ├── TodoItems      # Task list container
│   └── WelcomeMessage # Empty state message
├── 🔧 services/       # API services
│   ├── authService    # Authentication logic
│   └── itemsService   # Task management logic
├── 🎨 assets/        # Static assets
└── 📄 App.jsx        # Main component
```

### 📊 Project Status

<b>✅ Completed Features</b>
- Authentication system
- Task management functionality
- UI/UX implementation
- Error handling
- Optimistic updates
- Mobile responsiveness


<!-- <details>
<summary><b>🚧 In Progress</b></summary>

- Additional user feedback
- Performance optimizations
</details> -->

### 👥 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---
