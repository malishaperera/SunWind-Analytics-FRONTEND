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
            id: "SU-0003",
            groupBy: "date",
          },
          {
            skip: !isLoaded || !isSignedIn,
          }
      );

  if (!isLoaded) return <div>Loading authentication...</div>;
  if (!isSignedIn) return;
  if (isLoading) return <div>Loading energy data...</div>;
  if (isError || !data) return <div>Error loading data</div>;

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
