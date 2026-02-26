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
import { Sun } from "lucide-react";
import {
    useGetEnergyGenerationRecordsBySolarUnitQuery,
    useGetAllSolarUnitsForUserQuery,
} from "@/lib/redux/query";

const DataCard = () => {

    const [selectedRange, setSelectedRange] = useState("30");
    const [selectedUnitId, setSelectedUnitId] = useState(null);

    //  Fetch ALL solar units
    const { data: solarUnits, isLoading: isUnitsLoading } =
        useGetAllSolarUnitsForUserQuery();

    // Auto-select the first unit if user hasn't picked one yet
    const activeUnitId = selectedUnitId ?? solarUnits?.[0]?._id ?? null;

    // Fetch chart data for selected unit
    const { data, isLoading: isChartLoading, isError } =
        useGetEnergyGenerationRecordsBySolarUnitQuery(
            { id: activeUnitId, groupBy: "date", limit: Number(selectedRange) },
            { skip: !activeUnitId }
        );

    const chartData =
        data?.map((el) => ({
            date: format(new Date(el._id.date), "dd MMM"),
            energy: el.totalEnergy,
        })) ?? [];

    return (
        <Card className="rounded-3xl p-6 border border-slate-200 shadow-sm bg-gradient-to-br from-white via-sky-50 to-blue-50">

            {/* HEADER  */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-xl font-semibold text-slate-900">Energy Production</h2>
                    <p className="text-sm text-slate-500">Daily generated energy</p>
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

            {/*SOLAR UNIT SELECTOR UI*/}
            <div className="mb-6">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                    Select Solar Unit
                </p>

                {/* Skeleton loading while units fetch */}
                {isUnitsLoading && (
                    <div className="flex gap-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-10 w-32 rounded-xl bg-slate-100 animate-pulse" />
                        ))}
                    </div>
                )}

                {/* Unit buttons */}
                {!isUnitsLoading && solarUnits?.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {solarUnits.map((unit, index) => {
                            const isActive = unit._id === activeUnitId;
                            return (
                                <button
                                    key={unit._id}
                                    onClick={() => setSelectedUnitId(unit._id)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2.5 rounded-xl
                                        text-sm font-medium border transition-all duration-200 cursor-pointer
                                        ${isActive
                                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                                    }
                                    `}
                                >
                                    <Sun size={14} />
                                    {unit.name ?? `Solar Unit ${index + 1}`}
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 ml-1" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* No units */}
                {!isUnitsLoading && (!solarUnits || solarUnits.length === 0) && (
                    <p className="text-sm text-slate-400">No solar units found.</p>
                )}
            </div>

            {/* CHART*/}
            <div className="h-[360px] w-full relative">
                {isChartLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/60 rounded-2xl">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500" />
                    </div>
                )}
                {isError && (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
                        ⚠️ Failed to load chart data.
                    </div>
                )}

                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                        <defs>
                            <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.45} />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                        <YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                        <Tooltip
                            cursor={{ stroke: "#3b82f6", strokeWidth: 1 }}
                            contentStyle={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                            }}
                            labelStyle={{ color: "#0f172a", fontWeight: 600 }}
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
