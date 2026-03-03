export type TodoStatus = "pending" | "completed";

export interface Todo {
    id: string;
    title: string;
    description: string;
    status: TodoStatus;
    createdAt: string;
    dueDate: string;   // YYYY-MM-DD
    dueTime: string;
}