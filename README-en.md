# To-Do List

A simple task management app, built to practice React + TypeScript fundamentals.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter: All / Active / Completed
- Data persistence via `localStorage` (tasks remain saved after refresh)

## Tech stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- Plain CSS (no external libraries)

## Getting started

```bash
git clone https://github.com/pocolalexx/todo-app.git
cd todo-app
npm install
npm run dev
```

The app will start at `http://localhost:5173`.

## Project structure

```
src/
├── types.ts        # Todo type (id, text, completed)
├── TodoInput.tsx    # Component for adding a new task
├── TodoItem.tsx     # Component for a single task
├── TodoList.tsx     # Component that renders the list of tasks
├── App.tsx          # Main component, holds state and logic
└── App.css          # Styling
```

## What I practiced

- `useState` and `useEffect`
- Controlled components (input bound to state)
- Passing data between components via props
- Immutable state updates (spread operator, `.map()`, `.filter()`)
- Typing with TypeScript (types, typed props)
- Data persistence with `localStorage`

## Possible future improvements

- Inline editing of an existing task
- "Clear completed tasks" button
- Drag & drop reordering
- Real backend (e.g. Firebase) instead of `localStorage`
