import DataCard from "@/pages/anomalies/components/DataCard.jsx";
import {useGetSolarUnitForUserQuery} from "@/lib/redux/query.js";
import {useUser} from "@clerk/clerk-react";

const SolarEnergyProduction = () => {
    const { isLoaded ,isSignedIn } = useUser();

    const { data: solarUnit, isLoading, isError } =
        useGetSolarUnitForUserQuery(undefined, {
            skip: !isLoaded || !isSignedIn,
        });

    if (isLoading) {
        return (
            <div>is Loading ...</div>
        );
    }

    if (!isSignedIn) {
        return null;
    }

    if (isError) return <div>Error loading solar unit</div>;

    return (
        <>
            {solarUnit?._id && (
                <DataCard solarUnitId={solarUnit._id} />
            )}
        </>
    );
};

export default SolarEnergyProduction;
