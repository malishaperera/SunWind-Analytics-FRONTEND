import DataChart from "@/pages/dashboard/components/DataChart/DataChart.jsx";
import { useUser } from "@clerk/clerk-react";
import {useGetCurrentWeatherQuery, useGetSolarUnitForUserQuery} from "@/lib/redux/query.js";
import WeatherCard from "@/pages/dashboard/components/WeatherCard/WeatherCard.jsx";

const DashboardPage = () => {
    const {user,isLoaded} = useUser();

    const solarUnitQuery = useGetSolarUnitForUserQuery(undefined, {
        skip: !isLoaded,
    });

    const weatherQuery = useGetCurrentWeatherQuery({
        lat: "6.9271",
        lon: "79.8612",
    });

    const { data: solarUnit, isLoading, isError } = solarUnitQuery;
    const { data: weather, isLoading: isWeatherLoading } = weatherQuery;

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading solar unit</div>;

    return (
        <main className="mt-4">
            <h1 className="text-4xl font-bold text-foreground">{user?.firstName}'s House</h1>
            <p className="text-gray-600 mt-2 ">Welcome back to your Solar Energy Production Dashboard </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {/* Weather */}
                {!isWeatherLoading && weather && (
                    <WeatherCard weather={weather} />
                )}
            </div>
            <div className="mt-8">
                <DataChart
                    solarUnitId={solarUnit._id}
                />
            </div>
        </main>
    );
};

export default DashboardPage;
