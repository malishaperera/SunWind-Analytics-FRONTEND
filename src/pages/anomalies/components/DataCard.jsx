import { Card } from "@/components/ui/card";
import { useSelector } from "react-redux";
import { format, toDate } from "date-fns";
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";
import { detectAnomalies } from "@/lib/anomalyDetection";
import EnergyProductionCards from "./EnergyProductionCards";
import EnergyTab from "./EnergyTab";

const EnergyProductionSection = ({ solarUnitId }) => {
  const tabs = [
    { label: "All", value: "all" },
    { label: "Anomaly", value: "anomaly" },
  ];

  const selectedTab = useSelector(
      (state) => state.ui.selectedDashboardTab
  );

  const { data, isLoading, isError } =
      useGetEnergyGenerationRecordsBySolarUnitQuery({
        id: solarUnitId,
        groupBy: "date",
        limit: 7,
      });

  if (isLoading || isError || !data) {
    return null;
  }

  // Detect anomalies
  const dataWithAnomalies = detectAnomalies(data, "windowAverage", {
    windowThresholdPercent: 40,
  });

  // Transform data for UI
  const energyProductionData = dataWithAnomalies.map((el) => ({
    day: format(toDate(el._id.date), "EEE"),
    date: format(toDate(el._id.date), "MMM d"),
    production: el.totalEnergy,
    hasAnomaly: el.hasAnomaly,
    anomalyType: el.anomalyType,
    anomalyReason: el.anomalyReason,
  }));

  // Filter based on selected tab
  const filteredData =
      selectedTab === "anomaly"
          ? energyProductionData.filter((el) => el.hasAnomaly)
          : energyProductionData;

  return (
      <Card className="rounded-md p-6 mb-8">
        {/* Tabs */}
        <div className="mb-4 flex items-center gap-x-4">
          {tabs.map((tab) => (
              <EnergyTab key={tab.value} tab={tab} />
          ))}
        </div>

        {/* Cards */}
        <EnergyProductionCards
            energyProductionData={filteredData}
        />
      </Card>
  );
};

export default EnergyProductionSection;
