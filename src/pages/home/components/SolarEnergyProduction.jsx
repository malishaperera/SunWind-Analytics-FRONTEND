import Tab from "./Tab.jsx";
import EnergyProductionCards from "./EnergyProductionCards.jsx";
import {useSelector} from "react-redux";
import {useGetEnergyGenerationRecordsBySolarUnitQuery} from "@/lib/redux/query.js";
import {format, toDate,} from "date-fns";

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

  const selectedTab = useSelector((state) => state.ui.selectedHomeTab);

  const { data, isLoading, isError, error } =
      useGetEnergyGenerationRecordsBySolarUnitQuery(
          {
            id:"68fd0b0f527532dd82cbdc71",
            groupBy:"date"
          });
  if (isLoading){
    return <div>Loading ...</div>;
  }
  if (!data || isError){
    return <div>Error: {error.message}</div>;
  }
// mage
  const  newEnergyProductionData = data.slice(0,7).map((el) => {
    return {
      day : format(toDate(el._id.date),"EEE"),
      date: format(toDate(el._id.date),"MMM d"),
      production: el.totalEnergy,
      hasAnomaly: el.hasAnomaly
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

  ////////////////////////////////
  // const formattedData = data.map((el) => {
  //   return {
  //     ...el,
  //     timestamp: toDate(el.timestamp),
  //   };
  // });
  // const latestGenerationRecord = formattedData[0];
  // const sevenDaysAgo = subDays(latestGenerationRecord.timestamp,6);
  //
  // const filteredData = formattedData.filter((el) => {
  //   return el.timestamp >= sevenDaysAgo;
  // });
  //
  // const mappedData = filteredData.map((el) =>{
  //   return {
  //     ...el,
  //     date:format(el.timestamp,"yyyy-MM-dd"),
  //   };
  // });
  //
  // const groupedData = {};
  //
  // mappedData.forEach((el) => {
  //   if (groupedData[el.date]) {
  //     groupedData[el.date].push(el);
  //   }else {
  //     groupedData[el.date] = [];
  //     groupedData[el.date].push(el);
  //   }
  // });
  // const groupDataArray = Object.entries(groupedData);
  //
  // const calculateTotalProduction = (data) =>{
  //   let total = 0;
  //   data.forEach((el) => {
  //     total += el.energyGenerated;
  //   });
  //   return total;
  // }
  //
  // const newEnergyProductionData = groupDataArray.map(([date,data]) =>{
  //
  //   return{
  //     day: format(toDate(date),"EEE"),
  //     date: format(toDate(date),"MMM d"),
  //     hasAnomaly: false,
  //     production: calculateTotalProduction(data),
  //   };
  // });
////////////////////////////////

  // const filteredEnergyProductionData = energyProductionData.filter((el) => {
  //   if (selectedTab === "all") {
  //     return true;
  //   } else if (selectedTab === "anomaly") {
  //     return el.hasAnomaly;
  //   }
  // });

  const filteredEnergyProductionData = newEnergyProductionData.filter((el) => {
    if (selectedTab === "all") {
      return true;
    } else if (selectedTab === "anomaly") {
      return el.hasAnomaly;
    }
  });

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
      <EnergyProductionCards
        energyProductionData={filteredEnergyProductionData}
      />
    </section>
  );
};

export default SolarEnergyProduction;
