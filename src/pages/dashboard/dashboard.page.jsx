import DataCard from "./components/DataChart/DataCard.jsx";
import DataChart from "@/pages/dashboard/components/DataChart/DataChart.jsx";


const DashboardPage = () => {

    const solarUnitId = "64a7f0c2e4b0f5b6c8d9e123"; // Example solar unit ID



    return (
        <main className="mt-4">
            <h1 className="text-4xl font-bold text-foreground">Alice's House</h1>
            <p className="text-gray-600 mt-2 ">Welcome back to your Solar Energy Production Dashboard </p>

            <div className="mt-8">
                <DataCard
                    solarUnitId={solarUnitId}
                    title="Last 7 Days Energy Production"
                />
            </div>

            <div className="mt-8">
                <DataChart
                    solarUnitId={solarUnitId}
                />
            </div>
        </main>
    );
};

export default DashboardPage;
