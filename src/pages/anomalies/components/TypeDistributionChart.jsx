import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const TypeDistributionChart = ({ anomalies }) => {
    const types = [...new Set(anomalies.map(a => a.type))];

    const data = types.map(type => ({
        name: type.replace("_", " "),
        value: anomalies.filter(a => a.type === type).length,
    }));

    return (
        <div className="rounded-3xl p-6 border border-slate-200 shadow-sm bg-gradient-to-br from-white via-sky-50 to-emerald-50 overflow-hidden">
            <h3 className="font-semibold mb-4 text-gray-800">
                Anomaly Types Distribution
            </h3>

            {data.length === 0 ? (
                <div className="h-64 flex items-center justify-center text-gray-400">
                    No anomalies to display
                </div>
            ) : (
                <div className="w-full h-64">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                outerRadius={100}
                                label
                            >
                                {data.map((_, i) => (
                                    <Cell
                                        key={i}
                                        fill={COLORS[i % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default TypeDistributionChart;
