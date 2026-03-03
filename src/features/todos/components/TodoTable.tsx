import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  deleteTodo,
  markCompleted,
  markPending,
  updateTodo,
} from "../todoSlice";
import { selectVisibleTodos } from "../todoSelector";
import type { Todo } from "../types";
import { setSort } from "../todoSlice";
import type { RootState } from "../../../app/store";
const TodoTable = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectVisibleTodos);
  const { sortBy, sortOrder } = useAppSelector(
    (state: RootState) => state.todos,
  );
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
  });

  const startEditing = (todo: Todo) => {
    setEditId(todo.id);
    setEditData({
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      dueTime: todo.dueTime,
    });
  };

  const handleSave = () => {
    if (!editId) return;

    dispatch(
      updateTodo({
        id: editId,
        ...editData,
      }),
    );

    setEditId(null);
  };

  return (
    <div className="mt-8">
      <div className="bg-white shadow-xl rounded-xl overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm">
         
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {/* TITLE */}
              <th
                onClick={() => dispatch(setSort({ sortBy: "title" }))}
                className="p-4 text-left cursor-pointer select-none"
              >
                Title{" "}
                {sortBy === "title" && (
                  <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                )}
              </th>

              {/* DESCRIPTION (not sortable) */}
              <th className="p-4 text-left">Description</th>

              {/* DEADLINE */}
              <th
                onClick={() => dispatch(setSort({ sortBy: "dueDate" }))}
                className="p-4 text-center cursor-pointer select-none"
              >
                Deadline{" "}
                {sortBy === "dueDate" && (
                  <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                )}
              </th>

              {/* STATUS */}
              <th
                onClick={() => dispatch(setSort({ sortBy: "status" }))}
                className="p-4 text-center cursor-pointer select-none"
              >
                Status{" "}
                {sortBy === "status" && (
                  <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
                )}
              </th>

              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => {
              const isEditing = editId === todo.id;

              return (
                <tr
                  key={todo.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* TITLE */}
                  <td className="p-4">
                    {isEditing ? (
                      <input
                        value={editData.title}
                        onChange={(e) =>
                          setEditData({ ...editData, title: e.target.value })
                        }
                        className="border p-2 rounded w-full"
                      />
                    ) : (
                      <span className="font-medium break-words">
                        {todo.title}
                      </span>
                    )}
                  </td>

                  {/* DESCRIPTION */}
                  <td className="p-4 max-w-xs">
                    {isEditing ? (
                      <input
                        value={editData.description}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            description: e.target.value,
                          })
                        }
                        className="border p-2 rounded w-full"
                      />
                    ) : (
                      <span className="text-gray-600 break-words">
                        {todo.description}
                      </span>
                    )}
                  </td>

                  {/* DEADLINE */}
                  <td className="p-4 text-center">
                    {isEditing ? (
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <input
                          type="date"
                          value={editData.dueDate}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              dueDate: e.target.value,
                            })
                          }
                          className="border p-1 rounded"
                        />
                        <input
                          type="time"
                          value={editData.dueTime}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              dueTime: e.target.value,
                            })
                          }
                          className="border p-1 rounded"
                        />
                      </div>
                    ) : (
                      <span className="text-gray-600 text-sm whitespace-nowrap">
                        {todo.dueDate} {todo.dueTime}
                      </span>
                    )}
                  </td>

                  {/* STATUS */}
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        todo.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {todo.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-4 text-center">
                    {isEditing ? (
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <button
                          onClick={handleSave}
                          className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="px-3 py-1 text-xs bg-gray-400 text-white rounded hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <button
                          onClick={() => startEditing(todo)}
                          className="px-3 py-1 text-xs bg-indigo-500 text-white rounded hover:bg-indigo-600"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => dispatch(markCompleted(todo.id))}
                          className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          Completed
                        </button>

                        <button
                          onClick={() => dispatch(markPending(todo.id))}
                          className="px-3 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                          Pending
                        </button>

                        <button
                          onClick={() => dispatch(deleteTodo(todo.id))}
                          className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}

            {todos.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-400">
                  No todos found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoTable;
