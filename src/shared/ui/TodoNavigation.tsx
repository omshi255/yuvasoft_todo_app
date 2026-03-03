import { NavLink } from "react-router-dom";

const TodoNavigation = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
      <h1 className="text-2xl font-bold">Todo Dashboard</h1>

      <div className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`
          }
        >
          Show Todos
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive
                ? "bg-green-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`
          }
        >
          Add Todo
        </NavLink>
      </div>
    </div>
  );
};

export default TodoNavigation;
