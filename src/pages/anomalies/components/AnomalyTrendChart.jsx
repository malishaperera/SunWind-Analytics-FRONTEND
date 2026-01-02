import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { useGetAnomalyTrendQuery } from "@/lib/redux/query";

const AnomalyTrendChart = () => {
    const [range, setRange] = useState("weekly");
    const { data = [], isLoading } = useGetAnomalyTrendQuery(range);

    if (isLoading) {
        return (
            <div className="h-72 flex items-center justify-center text-gray-400">
                Loading anomaly trends...
            </div>
        );
    }

    return (
        // <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="rounded-3xl p-6 border border-slate-200 shadow-sm bg-gradient-to-br from-white via-sky-50 to-blue-50">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Anomaly Trends</h3>

                <select
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className="border rounded-lg px-3 py-1.5"
                >
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                </select>
            </div>
            {data.length === 0 ? (
                <div className="h-72 flex flex-col items-center justify-center text-gray-400 gap-2">
                    <span className="text-4xl">📉</span>
                    <p>No anomalies detected</p>
                </div>
            ) : (
                <div className="h-72">
                    <ResponsiveContainer>
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient
                                    id="trendGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#3b82f6"
                                        stopOpacity={0.35}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#3b82f6"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>

                            <CartesianGrid strokeDasharray="4 4" />
                            <XAxis dataKey="label" />
                            <YAxis allowDecimals={false} />
                            <Tooltip
                                formatter={(value) => [`anomalies : ${value}`]}
                            />
                            <Area
                                type="monotone"
                                dataKey="count"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                fill="url(#trendGradient)"
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default AnomalyTrendChart;
