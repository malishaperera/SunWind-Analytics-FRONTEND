// import { useGetSolarUnitForUserQuery} from "@/lib/redux/query.js";
// import {useUser} from "@clerk/clerk-react";
// import DataCard from "@/pages/anomalies/components/DataCard.jsx";
//
// const SolarEnergyProduction = () => {
//
//     const { user, isLoaded } = useUser();
//
//     const solarUnitQuery = useGetSolarUnitForUserQuery(undefined, {
//         skip: !isLoaded,
//     });
//
//     const { data: solarUnit, isLoading, isError } = solarUnitQuery;
//
//     if (isLoading)
//         return (
//             <div className="fixed inset-0 flex items-center justify-center">
//                 <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-500" />
//             </div>
//         );
//
//     if (isError) return <div>Error loading solar unit</div>;
//
//   //   const { isLoaded, isSignedIn } = useAuth();
//   //
//   //   const tabs = [
//   //   { label: "All", value: "all" },
//   //   { label: "Anomaly", value: "anomaly" },
//   // ];
//   //
//   //   const selectedTab = useSelector((state) => state.ui.selectedHomeTab);
//   //
//   // const { data, isLoading, isError, error } =
//   //     useGetEnergyGenerationRecordsBySolarUnitQuery(
//   //         {
//   //           id: "SU-0003",
//   //           groupBy: "date",
//   //         },
//   //         {
//   //           skip: !isLoaded || !isSignedIn,
//   //         }
//   //     );
//   //
//   // if (!isLoaded) return <div>Loading authentication...</div>;
//   // if (!isSignedIn) return;
//   // if (isLoading) return <div>Loading energy data...</div>;
//   // if (isError || !data) return <div>Error loading data</div>;
//   //
//   //   const energyProductionData = data.slice(0, 7).map((el) => ({
//   //       day: format(parseISO(el._id.date), "EEE"),
//   //       date: format(parseISO(el._id.date), "MMM d"),
//   //       production: el.totalEnergy,
//   //       hasAnomaly: el.totalEnergy === 0, // anomaly rule
//   //   }));
//   //
//   //   const filteredEnergyProductionData =
//   //       selectedTab === "anomaly"
//   //           ? energyProductionData.filter((el) => el.hasAnomaly)
//   //           : energyProductionData;
//
//     return (
//         <>
//             {/*<DataCard solarUnitId={solarUnit._id} />*/}
//
//         </>
//         // <DataCard solarUnitId={solarUnit.id} />
//       // <section className="px-12 py-6 font-[Inter]">
//       //   <div>
//       //     <h2 className="mb-2 text-2xl font-bold text-gray-900">
//       //       Solar Energy Production
//       //     </h2>
//       //     <p className="text-gray-600">
//       //       Daily energy output for the past 7 days
//       //     </p>
//       //   </div>
//       //
//       //   <div className="mt-4 flex items-center gap-x-4">
//       //     {tabs.map((tab) => (
//       //         <EnergyTab key={tab.value} tab={tab} />
//       //     ))}
//       //   </div>
//       //
//       //   <EnergyProductionCards
//       //       energyProductionData={filteredEnergyProductionData}
//       //   />
//       //
//       //     {/*<DataCard solarUnitId={solarUnit._id} />*/}
//       // </section>
//   );
// };
//
// export default SolarEnergyProduction;


import DataCard from "@/pages/anomalies/components/DataCard.jsx";
import {useGetSolarUnitForUserQuery} from "@/lib/redux/query.js";
import {useUser} from "@clerk/clerk-react";

const SolarEnergyProduction = () => {
    const { isLoaded } = useUser();

    const { data: solarUnit, isLoading, isError } =
        useGetSolarUnitForUserQuery(undefined, {
            skip: !isLoaded,
        });

    if (isLoading) {
        return (
            // <div className="fixed inset-0 flex items-center justify-center">
            //     <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-500" />
            // </div>
            <div>is Loading ...</div>
        );
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
