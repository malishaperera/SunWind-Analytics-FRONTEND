import Tab from "./Tab.jsx";
import EnergyProductionCards from "./EnergyProductionCards.jsx";
import {useSelector} from "react-redux";
// import {getEnergyGenerationRecordBySolarUnit} from "@/lib/api/energy-generation-records.js";
// import {useEffect, useState} from "react";
// import {data} from "react-router";
import {useGetEnergyGenerationRecordsBySolarUnitQuery} from "@/lib/redux/query.js";

const SolarEnergyProduction = () => {
  const energyProductionData = [
    { day: "Mon", date: "Aug 18", production: 34.1, hasAnomaly: false },
    { day: "Tue", date: "Aug 19", production: 3.2, hasAnomaly: true },
    { day: "Wed", date: "Aug 20", production: 44.7, hasAnomaly: false },
    { day: "Thu", date: "Aug 21", production: 21.9, hasAnomaly: false },
    { day: "Fri", date: "Aug 22", production: 0, hasAnomaly: true },
    { day: "Sat", date: "Aug 23", production: 43, hasAnomaly: false },
    { day: "Sun", date: "Aug 24", production: 26.8, hasAnomaly: false },
  ];

  const tabs = [
    { label: "All", value: "all" },
    { label: "Anomaly", value: "anomaly" },
  ];

  // const [selectedTab, setSelectedTab] = useState(tabs[0].value);
  const selectedTab = useSelector((state) => state.ui.selectedHomeTab);
  // const handleTabClick = (value) => {
  //   setSelectedTab(value);
  // };

  const filteredEnergyProductionData = energyProductionData.filter((el) => {
    if (selectedTab === "all") {
      return true;
    } else if (selectedTab === "anomaly") {
      return el.hasAnomaly;
    }
  });

  // const [isLoading,setLoading] = useState(true);
  // const [energyGenerationRecord, setEnergyGenerationRecord] = useState([]);
  // const [error, setError] = useState(null);
  // const [isError, setIsError] = useState(false);
  //
  //
  // useEffect(() => {
  //   getEnergyGenerationRecordBySolarUnit("68e7365b52ca63b0fc3c819b")
  //       .then((data) =>{
  //         setEnergyGenerationRecord(data)
  //       })
  //       .catch((error) => {
  //         setIsError(true);
  //         setError(error);
  //       })
  //       .finally(()=>{
  //         setLoading(false);
  //       });
  // }, []);
  //
  // console.log(energyGenerationRecord);

  // const handleGetData = () => {
  //   getEnergyGenerationRecordBySolarUnit("68e7365b52ca63b0fc3c819b")
  // }


  const { data, isLoading, isError, error } =
      useGetEnergyGenerationRecordsBySolarUnitQuery("68e7365b52ca63b0fc3c819b");

  console.log(data);



  return (
    <section className="px-12 font-[Inter] py-6">
      <div>
        <h2 className={"mb-2 text-2xl font-bold text-gray-900"}>
          Solar Energy Production
        </h2>
        <p className={"text-gray-600"}>
          Daily energy output for the past 7 days
        </p>
      </div>

      <div className={"mt-4 flex items-center gap-x-4"}>
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.label}
              tab={tab}
              // selectedTab={selectedTab}
              // onClick={handleTabClick}
            />
          );
        })}
      </div>
      {/*<div className="mt-4">*/}
      {/*  <Button onClick={handleGetData}>Get Data*/}

      {/*  </Button>*/}
      {/*</div>*/}

      <EnergyProductionCards
        energyProductionData={filteredEnergyProductionData}
      />
    </section>
  );
};

export default SolarEnergyProduction;
