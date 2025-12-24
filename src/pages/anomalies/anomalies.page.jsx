import { useUser } from "@clerk/clerk-react";
import { useGetAnomaliesQuery, useGetSolarUnitForUserQuery } from "@/lib/redux/query";
import AnomalyList from "@/pages/anomalies/components/AnomalyList.jsx";
import TypeDistributionChart from "@/pages/anomalies/components/TypeDistributionChart.jsx";
import AnomalyTrendChart from "@/pages/anomalies/components/AnomalyTrendChart.jsx";

const AnomaliesPage = () => {
    const { user } = useUser();
    const { data: anomalies = [], isLoading } = useGetAnomaliesQuery();
    const { isLoading: isLoadingSolarUnit } = useGetSolarUnitForUserQuery();

    if (isLoadingSolarUnit || isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-500" />
            </div>
        );
    }

    return (
        <main className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    {user?.firstName}'s House
                </h1>
                <p className="text-gray-500 mt-1">
                    Monitor and analyze solar anomalies
                </p>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TypeDistributionChart anomalies={anomalies} />
                <AnomalyTrendChart />
            </div>

            {/* List */}
            <AnomalyList anomalies={anomalies} />
        </main>
    );
};

export default AnomaliesPage;

