import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setFilter, setSearch } from "../todoSlice";
import type { RootState } from "../../../app/store";

const TodoFilters = () => {
  const dispatch = useAppDispatch();
  const { filter, search } = useAppSelector((state: RootState) => state.todos);

  const handleFilterChange = (value: "all" | "pending" | "completed") => {
    dispatch(setFilter(value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Left Section - Search */}
      <div className="flex-1">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by title..."
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Right Section - Filter Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "all"
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => handleFilterChange("pending")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "pending"
              ? "bg-yellow-500 text-white shadow"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => handleFilterChange("completed")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "completed"
              ? "bg-green-600 text-white shadow"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilters;
