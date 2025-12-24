import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const AnomalyTrendChart = () => {
    const data = [
        { name: "Week 1", value: 12 },
        { name: "Week 2", value: 8 },
        { name: "Week 3", value: 15 },
        { name: "Week 4", value: 10 },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    Anomaly Trends
                </h3>

                <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none">
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option selected>Weekly</option>
                </select>
            </div>

            {/* Chart */}
            <div className="w-full h-72">
                <ResponsiveContainer>
                    <AreaChart data={data}>
                        {/* 🔥 GRID LIKE FIRST IMAGE */}
                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={true}
                            stroke="#e5e7eb"
                        />

                        {/* Gradient */}
                        <defs>
                            <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                        />

                        <Tooltip
                            contentStyle={{
                                borderRadius: "12px",
                                border: "none",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fill="url(#trendGradient)"
                            dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                            activeDot={{ r: 6 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnomalyTrendChart;
