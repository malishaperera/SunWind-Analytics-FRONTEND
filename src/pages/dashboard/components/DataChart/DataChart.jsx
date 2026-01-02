import { Card } from "@/components/ui/card";
import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import { useState } from "react";
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";

const DataCard = ({ solarUnitId }) => {
    const [selectedRange, setSelectedRange] = useState("30");

    const { data, isLoading, isError } =
        useGetEnergyGenerationRecordsBySolarUnitQuery({
            id: solarUnitId,
            groupBy: "date",
            limit: Number(selectedRange),
        });

    if (isLoading || isError || !data) return null;

    const chartData = data.map((el) => ({
        date: format(new Date(el._id.date), "dd MMM"),
        energy: el.totalEnergy,
    }));

    return (
        <Card className="rounded-3xl p-6 border border-slate-200 shadow-sm bg-gradient-to-br from-white via-sky-50 to-blue-50">

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-slate-900">
                        Energy Production
                    </h2>
                    <p className="text-sm text-slate-500">
                        Daily generated energy
                    </p>
                </div>
                <select
                    value={selectedRange}
                    onChange={(e) => setSelectedRange(e.target.value)}
                    className="text-sm px-4 py-2 rounded-xl border border-slate-200
                     bg-white shadow-sm focus:outline-none focus:ring-2
                     focus:ring-blue-500 cursor-pointer"
                >
                    <option value="7">Last 7 Days</option>
                    <option value="30">Last 30 Days</option>
                </select>
            </div>

            <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
                    >
                        <defs>
                            <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.45} />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#e5e7eb"
                        />

                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: "#64748b", fontSize: 12 }}
                        />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: "#64748b", fontSize: 12 }}
                        />

                        <Tooltip
                            cursor={{ stroke: "#3b82f6", strokeWidth: 1 }}
                            contentStyle={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                            }}
                            labelStyle={{
                                color: "#0f172a",
                                fontWeight: 600,
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="energy"
                            stroke="#2563eb"
                            strokeWidth={3}
                            fill="url(#energyGradient)"
                            dot={{ r: 3 }}
                            activeDot={{ r: 6 }}
                            animationDuration={800}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default DataCard;
