import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { addTodo } from "../todoSlice";

const TodoForm = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !dueDate || !dueTime) return;

    dispatch(addTodo(title, description, dueDate, dueTime));

    setTitle("");
    setDescription("");
    setDueDate("");
    setDueTime("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Add Todo</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {/* Description */}
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {/* Date + Time Row */}
        <div className="grid grid-cols-2 gap-4">
          {/* Due Date */}
          <div>
            <label className="text-sm text-gray-600">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Due Time */}
          <div>
            <label className="text-sm text-gray-600">Due Time</label>
            <input
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
