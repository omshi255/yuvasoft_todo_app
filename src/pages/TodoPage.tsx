/* eslint-disable @typescript-eslint/no-unused-vars */
import TodoForm from "../features/todos/components/TodoForm";
import TodoTable from "../features/todos/components/TodoTable";
import TodoFilters from "../features/todos/components/TodoFilters";
import TodoChart from "../features/todos/components/TodoChart";
import { useAppSelector } from "../app/hooks";
import { selectStats } from "../features/todos/todoSelector";

const TodoPage = () => {
  const stats = useAppSelector(selectStats);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          Todo Dashboard
        </h1>

        {/* Top Section (Responsive Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pb-8 border-b border-gray-200">
          {/* Form Wrapper */}
          <div className="">
            <TodoForm />
          </div>

          {/* Chart Wrapper */}
          <div className="">
            <div className="h-[280px] sm:h-[320px] lg:h-[360px]">
              <TodoChart />
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="py-6 border-b border-gray-200">
          <TodoFilters />
        </div>

        {/* Table Section */}
        <div className="pt-6 overflow-x-auto">
          <TodoTable />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
