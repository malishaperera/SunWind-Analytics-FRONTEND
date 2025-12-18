// import Tab from "./Tab.jsx";
// import EnergyProductionCards from "./EnergyProductionCards.jsx";
// import {useSelector} from "react-redux";
// import {useGetEnergyGenerationRecordsBySolarUnitQuery} from "@/lib/redux/query.js";
// import {format, toDate,} from "date-fns";
// import {useAuth} from "@clerk/clerk-react";
//
// const SolarEnergyProduction = () => {
//   // const energyProductionData = [
//   //   { day: "Mon", date: "Aug 18", production: 34.1, hasAnomaly: false },
//   //   { day: "Tue", date: "Aug 19", production: 3.2, hasAnomaly: true },
//   //   { day: "Wed", date: "Aug 20", production: 44.7, hasAnomaly: false },
//   //   { day: "Thu", date: "Aug 21", production: 21.9, hasAnomaly: false },
//   //   { day: "Fri", date: "Aug 22", production: 0, hasAnomaly: true },
//   //   { day: "Sat", date: "Aug 23", production: 43, hasAnomaly: false },
//   //   { day: "Sun", date: "Aug 24", production: 26.8, hasAnomaly: false },
//
//   const tabs = [
//     { label: "All", value: "all" },
//     { label: "Anomaly", value: "anomaly" },
//   ];
//
//   const selectedTab = useSelector((state) => state.ui.selectedHomeTab);
//
//   const { data, isLoading, isError, error } =
//       useGetEnergyGenerationRecordsBySolarUnitQuery(
//           {
//             id:"SU-0001",
//             groupBy:"date"
//           });
//   if (isLoading){
//     return <div>Loading ...</div>;
//   }
//   if (!data || isError){
//     return <div>Error: {error.message}</div>;
//   }
// // mage
//   const  newEnergyProductionData = data.slice(0,7).map((el) => {
//     return {
//       day : format(toDate(el._id.date),"EEE"),
//       date: format(toDate(el._id.date),"MMM d"),
//       production: el.totalEnergy,
//       hasAnomaly: el.hasAnomaly
//     }
//   });
//
//   const filteredEnergyProductionData = newEnergyProductionData.filter((el) => {
//     if (selectedTab === "all") {
//       return true;
//     } else if (selectedTab === "anomaly") {
//       return el.hasAnomaly;
//     }
//   });
//
//   return (
//     <section className="px-12 font-[Inter] py-6">
//       <div>
//         <h2 className={"mb-2 text-2xl font-bold text-gray-900"}>
//           Solar Energy Production
//           Daily energy output for the past 7 days
//         </h2>
//         <p className={"text-gray-600"}>
//           Daily energy output for the past 7 days
//         </p>
//       </div>
//
//       <div className={"mt-4 flex items-center gap-x-4"}>
//         {tabs.map((tab) => {
//           return (
//             <Tab
//               key={tab.label}
//               tab={tab}
//               // selectedTab={selectedTab}
//               // onClick={handleTabClick}
//             />
//           );
//         })}
//       </div>
//       <EnergyProductionCards
//         energyProductionData={filteredEnergyProductionData}
//       />
//     </section>
//   );
// };
//
// export default SolarEnergyProduction;


import { useSelector } from "react-redux";
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query.js";
import { format, parseISO } from "date-fns";
import { useAuth } from "@clerk/clerk-react";
import EnergyProductionCards from "@/pages/anomalies/components/EnergyProductionCards.jsx";
import EnergyTab from "@/pages/anomalies/components/EnergyTab.jsx";

const SolarEnergyProduction = () => {
  const tabs = [
    { label: "All", value: "all" },
    { label: "Anomaly", value: "anomaly" },
  ];

  const { isLoaded, isSignedIn } = useAuth();
  const selectedTab = useSelector((state) => state.ui.selectedHomeTab);

  const { data, isLoading, isError, error } =
      useGetEnergyGenerationRecordsBySolarUnitQuery(
          {
            id: "SU-0001",
            groupBy: "date",
          },
          {
            skip: !isLoaded || !isSignedIn,
          }
      );

  if (!isLoaded) return <div>Loading authentication...</div>;
  if (!isSignedIn) return <div>Please login</div>;
  if (isLoading) return <div>Loading energy data...</div>;
  if (isError || !data) return <div>Error loading data</div>;


    // const energyProductionData = data.slice(0, 7).map((el) => {
    //     const isAnomaly = el.totalEnergy === 0;
    //
    //     return {
    //         day: format(parseISO(el._id.date), "EEE"),
    //         date: format(parseISO(el._id.date), "MMM d"),
    //         production: el.totalEnergy,
    //         hasAnomaly: isAnomaly,
    //     };
    // });
    //
    // const filteredEnergyProductionData = energyProductionData.filter((el) => {
    //     if (selectedTab === "all") return true;
    //     if (selectedTab === "anomaly") return el.hasAnomaly;
    //     return true;
    // });

    const energyProductionData = data.slice(0, 7).map((el) => ({
        day: format(parseISO(el._id.date), "EEE"),
        date: format(parseISO(el._id.date), "MMM d"),
        production: el.totalEnergy,
        hasAnomaly: el.totalEnergy === 0, // anomaly rule
    }));

    const filteredEnergyProductionData =
        selectedTab === "anomaly"
            ? energyProductionData.filter((el) => el.hasAnomaly)
            : energyProductionData;


    return (
      <section className="px-12 py-6 font-[Inter]">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Solar Energy Production
          </h2>
          <p className="text-gray-600">
            Daily energy output for the past 7 days
          </p>
        </div>

        <div className="mt-4 flex items-center gap-x-4">
          {tabs.map((tab) => (
              <EnergyTab key={tab.value} tab={tab} />
          ))}
        </div>

        <EnergyProductionCards
            energyProductionData={filteredEnergyProductionData}
        />
      </section>
  );
};

export default SolarEnergyProduction;
