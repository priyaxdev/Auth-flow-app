# 🔐 Auth Flow App

A protected routes project built with React, TypeScript, and React Router v8 — simulating a real-world authentication flow using fake auth (no backend).

## ✨ Features

- 🔒 Protected routes — unauthenticated users are redirected to login
- 🧠 Global auth state using React Context API
- 🚀 Fake authentication — no backend required
- 🔁 Login / Logout flow with navigation
- ⚠️ Form validation — empty fields show an alert
- 🎨 Dark purple theme with Tailwind v4

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- React Router v8
- Tailwind CSS v4
- Lucide React (icons)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Conditional navbar based on auth state
│   ├── ProtectedRoute.tsx  # Route guard component
│   └── MainLayout.tsx      # Shared layout with Navbar + Outlet
├── context/
│   └── AuthContext.tsx     # Global auth state, login/logout logic
├── pages/
│   ├── Login.tsx           # Login form with validation
│   ├── Dashboard.tsx       # Protected dashboard with stat cards
│   └── Profile.tsx         # Protected profile page
├── App.tsx                 # Route definitions
└── main.tsx
```

## 🧠 Concepts Covered

| Concept | Where |
|---|---|
| `createContext` + `useContext` | `AuthContext.tsx` |
| Context Provider pattern | `AuthContext.tsx` + `App.tsx` |
| Protected Route pattern | `ProtectedRoute.tsx` |
| `<Navigate />` redirect | `ProtectedRoute.tsx` |
| `useNavigate` | `Login.tsx`, `Navbar.tsx` |
| Conditional rendering | `Navbar.tsx` |
| `NavLink` active styling | `Navbar.tsx` |
| `<Outlet />` layout | `MainLayout.tsx` |
| Optional chaining `?.` | `Dashboard.tsx`, `Profile.tsx` |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/auth-flow-app.git

# Install dependencies
cd auth-flow-app
npm install

# Start dev server
npm run dev
```

## 🔑 How Fake Auth Works

No real backend — login accepts any email and password (as long as fields are not empty). Auth state is stored in React Context. On refresh, state resets (user is logged out).

```
Any email + Any password → Logged In ✅
Empty fields → Alert ❌
```

## 📸 Screenshots

| Page | Preview |
|---|---|
| Login | <img width="2936" height="1402" alt="image" src="https://github.com/user-attachments/assets/cc290642-1a31-4020-b35d-f05df3b9e86f" />
 |
| Dashboard | <img width="2936" height="1402" alt="image" src="https://github.com/user-attachments/assets/023ff90f-1025-4450-9326-ec58b126ded8" />
 |
| Profile | <img width="2936" height="1402" alt="image" src="https://github.com/user-attachments/assets/39bead02-1f00-4a97-be22-3818c950e496" />
 |

## 👩‍💻 Author

**Priya** — B.Tech IT, Delhi Technological University  
