/* eslint-disable prefer-const */
import { createSelector } from "reselect";
import type { RootState } from "../../app/store";


const selectTodosState = (state: RootState) => state.todos;


export const selectVisibleTodos = createSelector(
    [selectTodosState],
    (todosState) => {
        const { items, filter, search, sortBy, sortOrder } = todosState;

        // Step 1: Filter + Search
        let filtered = items
            .filter(todo =>
                filter === "all" ? true : todo.status === filter
            )
            .filter(todo =>
                todo.title.toLowerCase().includes(search.toLowerCase())
            );

        // Step 2: Sorting
        const sorted = [...filtered].sort((a, b) => {
            let compare = 0;

            if (sortBy === "title") {
                compare = a.title.localeCompare(b.title);
            }

            if (sortBy === "dueDate") {
                compare =
                    new Date(a.dueDate).getTime() -
                    new Date(b.dueDate).getTime();
            }

            if (sortBy === "status") {
                compare = a.status.localeCompare(b.status);
            }

            return sortOrder === "asc" ? compare : -compare;
        });

        return sorted;
    }
);

/**
 * Dashboard Stats
 */
export const selectStats = createSelector(
    [selectTodosState],
    (todosState) => {
        const total = todosState.items.length;
        const completed = todosState.items.filter(
            t => t.status === "completed"
        ).length;
        const pending = total - completed;

        return { total, completed, pending };
    }
);