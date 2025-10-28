import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";
import Last7DaysView from "./components/DataCard.jsx";
import DataCard from "./components/DataCard.jsx";



const DashboardPage = () => {
    const { data, isLoading, isError, error } =
        useGetEnergyGenerationRecordsBySolarUnitQuery({
            id: "68e4cd79378e876c4b84d3f9",
            groupBy: "date",
        });

    if (isError || !data) return null;

    return (
        <main className="mt-4">
            <h1 className="text-4xl font-bold text-foreground">Alice's House</h1>

            <div className="mt-8">
                <DataCard
                    data={data}
                    isLoading={isLoading}
                    isError={isError}
                    error={error}
                    title="Last 7 Days Energy Production"
                />
            </div>
        </main>
    );
};

export default DashboardPage;
