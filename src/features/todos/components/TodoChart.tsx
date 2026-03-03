import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../../app/hooks";
import { selectStats } from "../todoSelector";

const COLORS = ["#3b82f6", "#f59e0b", "#10b981"];

const TodoChart = () => {
  const { total, pending, completed } = useAppSelector(selectStats);

  const data = [
    { name: "Total", value: total },
    { name: "Pending", value: pending },
    { name: "Completed", value: completed },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Task Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodoChart;
