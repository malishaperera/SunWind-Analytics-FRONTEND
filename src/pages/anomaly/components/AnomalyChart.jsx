import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = {
    HIGH: "#ef4444",
    MEDIUM: "#f59e0b",
    LOW: "#10b981",
};

const AnomalyChart = ({ anomalies }) => {
    const data = ["HIGH", "MEDIUM", "LOW"].map(level => ({
        name: level,
        value: anomalies.filter(a => a.severity === level).length,
    }));

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-semibold mb-4 text-gray-800">
                Severity Distribution
            </h3>

            <div className="w-full h-64">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={60}
                            outerRadius={100}
                        >
                            {data.map((d, i) => (
                                <Cell key={i} fill={COLORS[d.name]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnomalyChart;
