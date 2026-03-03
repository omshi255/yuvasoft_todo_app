import type { Todo } from "./types";

const STORAGE_KEY = "todos";

export const loadTodos = (): Todo[] => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const saveTodos = (todos: Todo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};