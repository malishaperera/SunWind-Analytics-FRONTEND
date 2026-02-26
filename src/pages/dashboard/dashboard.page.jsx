import DataChart from "@/pages/dashboard/components/DataChart/DataChart.jsx";
import { useUser } from "@clerk/clerk-react";
import {
    useGetAllSolarUnitsForUserQuery,
    useGetCurrentWeatherQuery,
} from "@/lib/redux/query.js";
import KpiCards from "@/pages/dashboard/components/Overview/KpiCards.jsx";
import SolarOverviewCard from "@/pages/dashboard/components/Overview/SolarOverviewCard.jsx";
import PowerFlowCard from "@/pages/dashboard/components/Overview/PowerFlowCard.jsx";
import { SidebarTrigger } from "@/components/ui/sidebar.jsx";


const DashboardPage = () => {
  const { user, isLoaded } = useUser();

  const solarUnitQuery = useGetAllSolarUnitsForUserQuery(undefined, {
    skip: !isLoaded,
  });

  const weatherQuery = useGetCurrentWeatherQuery({
    lat: "6.9271",
    lon: "79.8612",
  });

  const { data: solarUnit, isLoading, isError } = solarUnitQuery;
  const { data: weather, isLoading: isWeatherLoading } = weatherQuery;

  const isPageLoading = isLoading || isWeatherLoading;


  if (isPageLoading)
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-500" />
        </div>
    );

  if (isError) return <div>Error loading solar unit</div>;

  return (
        <div className="mx-auto w-full max-w-[1400px] px-6 pt-6 pb-10 ">
        <div className="flex items-start gap-3 mb-8">
          <SidebarTrigger className="mt-1 !size-9 [&_svg]:!w-7 [&_svg]:!h-7" />
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {user?.firstName}'s House
            </h1>
            <p className="text-gray-600 mt-2">
              Welcome back to your Solar Energy Production Dashboard
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <SolarOverviewCard weather={weather} />
          <PowerFlowCard />
        </div>
        <KpiCards />
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-8">
          <div className="lg:col-span-2 min-w-0">
              <DataChart/>
          </div>
          {/*<div className="w-full">*/}
          {/*  <SolarPanelInfoCard />*/}
          {/*</div>*/}
        </div>
      </div>
  );
};

export default DashboardPage;
