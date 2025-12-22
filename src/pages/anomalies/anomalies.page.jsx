import { useUser } from "@clerk/clerk-react";
import {useGetAnomaliesQuery, useGetSolarUnitForUserQuery} from "@/lib/redux/query";
import AnomalyChart from "@/pages/anomaly/components/AnomalyChart.jsx";
import AnomalyStats from "@/pages/anomaly/components/AnomalyStats.jsx";
import AnomalyList from "@/pages/anomaly/components/AnomalyList.jsx";
import DataCard from "./components/DataCard";


const AnomaliesPage = () => {
    const { user } = useUser();
    const { data: solarUnit, isLoading: isLoadingSolarUnit, isError: isErrorSolarUnit, error: errorSolarUnit } = useGetSolarUnitForUserQuery();
    const { data: anomalies = [], isLoading } = useGetAnomaliesQuery();

      if (isLoadingSolarUnit) {
        return <div>Loading...</div>;
      }

      if (isErrorSolarUnit) {
        return <div>Error: {errorSolarUnit.message}</div>;
      }


    if (isLoading) {
        return <div className="p-6 text-gray-500">Loading anomalies...</div>;
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
                <DataCard solarUnitId={solarUnit._id} />
            </div>

            {/*<div className="mt-8">*/}
            {/*  <DataCard solarUnitId={solarUnit._id} />*/}
            {/*</div>*/}

            {/* Stats */}
            <AnomalyStats anomalies={anomalies} />

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <AnomalyChart anomalies={anomalies} />
                <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center text-gray-400">
                    Weekly trend chart (coming soon)
                </div>
            </div>

            {/* List */}
            <AnomalyList anomalies={anomalies} />
        </main>
    );
};

export default AnomaliesPage;
