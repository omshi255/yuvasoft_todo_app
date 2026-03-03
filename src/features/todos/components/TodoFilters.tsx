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

      {/* Right Section - Filter Dropdown */}
      <div className="w-full md:w-48">
        <select
          value={filter}
          onChange={(e) =>
            handleFilterChange(
              e.target.value as "all" | "pending" | "completed",
            )
          }
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilters;
