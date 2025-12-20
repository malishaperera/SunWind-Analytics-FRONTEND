import DataChart from "@/pages/dashboard/components/DataChart/DataChart.jsx";
import { useUser } from "@clerk/clerk-react";
import {useGetSolarUnitForUserQuery} from "@/lib/redux/query.js";

const DashboardPage = () => {
    const {user,isLoaded} = useUser();

    const {data: solarUnit,isLoading:isLoadingSolarUnit,isError:isErrorSolarUnit,error:errorSolarUnit} = useGetSolarUnitForUserQuery({
        // clerkUserId: user?.id,
        skip:!isLoaded,
    });

    if (isLoadingSolarUnit) {
        return <div>Loading...</div>;
    }

    if (isErrorSolarUnit) {
        // return <div>Error: {errorSolarUnit.message}</div>;
        return <div>Hie</div>
    }

    return (
        <main className="mt-4">
            <h1 className="text-4xl font-bold text-foreground">{user?.firstName}'s House</h1>
            <p className="text-gray-600 mt-2 ">Welcome back to your Solar Energy Production Dashboard </p>
            <div className="mt-8">
                <DataChart
                    solarUnitId={solarUnit._id}
                />
            </div>
        </main>
    );
};

export default DashboardPage;
