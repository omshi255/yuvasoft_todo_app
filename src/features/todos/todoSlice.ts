import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import type { Todo, TodoStatus } from "./types";
import { loadTodos, saveTodos } from "./todosStorage";

interface TodosState {
    items: Todo[];
    search: string;
    filter: "all" | TodoStatus;
    sortBy: "title" | "dueDate" | "status";
    sortOrder: "asc" | "desc";
}

const initialState: TodosState = {
    items: loadTodos(),
    search: "",
    filter: "all",
    sortBy: "dueDate",
    sortOrder: "asc",
};

const persist = (items: Todo[]) => saveTodos(items);

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: {
            prepare(
                title: string,
                description: string,
                dueDate: string,
                dueTime: string
            ) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        status: "pending" as TodoStatus,
                        createdAt: new Date().toISOString(),
                        dueDate,
                        dueTime,
                    },
                };
            },
            reducer(state, action: PayloadAction<Todo>) {
                state.items.push(action.payload);
                persist(state.items);
            },
        },

        deleteTodo(state, action: PayloadAction<string>) {
            state.items = state.items.filter(t => t.id !== action.payload);
            persist(state.items);
        },

        updateTodo(
            state,
            action: PayloadAction<{
                id: string;
                title: string;
                description: string;
                dueDate: string;
                dueTime: string;
            }>
        ) {
            const todo = state.items.find(t => t.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;
                todo.description = action.payload.description;
                todo.dueDate = action.payload.dueDate;
                todo.dueTime = action.payload.dueTime;
                persist(state.items);
            }
        },

        markCompleted(state, action: PayloadAction<string>) {
            const todo = state.items.find(t => t.id === action.payload);
            if (todo) {
                todo.status = "completed";
                persist(state.items);
            }
        },

        markPending(state, action: PayloadAction<string>) {
            const todo = state.items.find(t => t.id === action.payload);
            if (todo) {
                todo.status = "pending";
                persist(state.items);
            }
        },

        setFilter(state, action: PayloadAction<"all" | TodoStatus>) {
            state.filter = action.payload;
        },

        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },

        setSort(
            state,
            action: PayloadAction<{
                sortBy: "title" | "dueDate" | "status";
            }>
        ) {
            if (state.sortBy === action.payload.sortBy) {
                state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
            } else {
                state.sortBy = action.payload.sortBy;
                state.sortOrder = "asc";
            }
        },
    },
});

export const {
    addTodo,
    deleteTodo,
    updateTodo,
    markCompleted,
    markPending,
    setFilter,
    setSearch,
    setSort,
} = todoSlice.actions;

export default todoSlice.reducer;