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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
        <Card className="p-6 rounded-2xl shadow-md bg-white flex">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                    Energy Production
                </h2>

                <Select value={selectedRange} onValueChange={setSelectedRange}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="7">7 Days</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Chart */}
            <div className="h-[340px] w-full overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                        <defs>
                            <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" vertical={false} />

                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                        />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                        />

                        <Tooltip
                            cursor={{ stroke: "#3b82f6", strokeWidth: 1 }}
                            contentStyle={{
                                backgroundColor: "white",
                                borderRadius: "8px",
                                border: "1px solid #e5e7eb",
                            }}
                            labelStyle={{ color: "#111827", fontWeight: 600 }}
                        />

                        <Area
                            type="monotone"
                            dataKey="energy"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            fill="url(#energyGradient)"
                            dot={{ r: 3 }}
                            activeDot={{ r: 6 }}
                            animationDuration={900}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default DataCard;
