import DataChart from "@/pages/dashboard/components/DataChart/DataChart.jsx";
import { useUser } from "@clerk/clerk-react";
import {useGetCurrentWeatherQuery, useGetSolarUnitForUserQuery,} from "@/lib/redux/query.js";
import KpiCards from "@/pages/dashboard/components/Overview/KpiCards.jsx";
import SolarOverviewCard from "@/pages/dashboard/components/Overview/SolarOverviewCard.jsx";
import PowerFlowCard from "@/pages/dashboard/components/Overview/PowerFlowCard.jsx";
import SolarPanelInfoCard from "@/pages/dashboard/components/Overview/SolarPanelInfoCard.jsx";
import DataCard from "@/pages/anomalies/components/DataCard.jsx";

const DashboardPage = () => {
    const { user, isLoaded } = useUser();

    const solarUnitQuery = useGetSolarUnitForUserQuery(undefined, {
        skip: !isLoaded,
    });

    const weatherQuery = useGetCurrentWeatherQuery({
        lat: "6.9271",
        lon: "79.8612",
    });

    const { data: solarUnit, isLoading, isError } = solarUnitQuery;
    const { data: weather, isLoading: isWeatherLoading } = weatherQuery;

    if (isLoading)
        return (
            <div>Loading..</div>
        );

    if (isError) return <div>Error loading solar unit</div>;

    return (
        <main className="mt-4 bg-gray-50 min-h-screen overflow-x-hidden">
            <div className="mx-auto w-full max-w-[1400px] px-6">



        {/* Header */}
            <h1 className="text-4xl font-bold text-gray-900">
                {user?.firstName}'s House
            </h1>
            <p className="text-gray-600 mt-2">
                Welcome back to your Solar Energy Production Dashboard
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {!isWeatherLoading && weather && (
                    <SolarOverviewCard weather={weather} />
                )}
                <PowerFlowCard />
                {/*<DataCard solarUnitId={solarUnit._id} />*/}
            </div>

            <KpiCards />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 overflow-hidden max-w-full">
                    <div className="lg:col-span-2 min-w-0">
                        <DataChart solarUnitId={solarUnit._id} />
                    </div>
                    <div className="w-full">
                        <SolarPanelInfoCard />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashboardPage;
