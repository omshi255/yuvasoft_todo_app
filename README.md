# 📝 Todo Dashboard Application

A fully responsive Todo Management Application built using:

- ⚛️ React (with TypeScript)
- 🧠 Redux Toolkit (State Management)
- ⚡ Vite (Build Tool)
- 🎨 Tailwind CSS (Styling)
- 📊 Recharts (Pie Chart Visualization)
- 💾 LocalStorage (Persistence)

---

## 🚀 Features

### Core Features
- ✅ Create Todo
- ✏️ Update Todo (Inline Editing)
- ❌ Delete Todo
- 🔍 Search by Title
- 🎯 Filter (All / Pending / Completed)
- 🔃 Sorting (Title / Deadline / Status)
- 📊 Dashboard Pie Chart
- 💾 LocalStorage Persistence
- 📱 Fully Responsive UI

---

## 📂 Project Structure

```
src/
│
├── app/
│   ├── store.ts
│   └── hooks.ts
│
├── features/
│   └── todos/
│       ├── components/
│       │   ├── TodoForm.tsx
│       │   ├── TodoTable.tsx
│       │   ├── TodoFilters.tsx
│       │   └── TodoChart.tsx
│       ├── todoSlice.ts
│       ├── todoSelector.ts
│       ├── todosStorage.ts
│       └── types.ts
│
├── pages/
│   └── TodoPage.tsx
│
├── shared/
│   └── ui/
│       ├── Button.tsx
│       └── Input.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/omshi255/yuvasoft_todo_app
cd your-project-name
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Development Server

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React | UI Library |
| TypeScript | Type Safety |
| Redux Toolkit | Global State Management |
| Reselect | Memoized Selectors |
| Tailwind CSS | Styling |
| Recharts | Data Visualization |
| Vite | Fast Build Tool |

---

## 🧠 State Management Architecture

- Redux Toolkit Slice for todos
- Memoized selectors using `createSelector`
- Derived state for:
  - Filtered Todos
  - Sorted Todos
  - Search Results
  - Dashboard Stats
- Persistent storage via LocalStorage

---

## 📊 Sorting Logic

Sorting is handled inside selectors using:

- Title (A-Z / Z-A)
- Deadline (Ascending / Descending)
- Status

Sorting is combined with:
- Search
- Filter

---

## 📱 Responsive Design

- Mobile-first layout
- Responsive grid
- Scrollable table on small devices
- Adaptive dashboard layout

---

## 🔄 Data Persistence

All todos are stored in browser `localStorage`.

No backend required.

---

## 🎯 Future Improvements (Optional)

- Dark Mode
- Pagination
- Drag & Drop
- Backend Integration (Node.js + MongoDB)
- Authentication
- Overdue Detection
- Priority Levels

---

## 📄 License

This project is open-source and available for learning purposes.
