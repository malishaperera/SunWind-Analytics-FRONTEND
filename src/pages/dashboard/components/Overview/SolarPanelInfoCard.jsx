import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import solar_panel_house from "@/pages/dashboard/components/Overview/assets/solar-panels-residential-house.jpg";

const SolarPanelInfoCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Image */}
            <div className="h-75 w-full overflow-hidden">
                <img
                    src={solar_panel_house}
                    alt="Solar Panel"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Title + Action */}
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-900">
                            CMOS Solar Panel
                        </h3>
                        <p className="text-xs text-gray-500">#C-0091</p>
                    </div>

                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
                        <ArrowUpRightIcon className="w-4 h-4 text-gray-600" />
                    </button>
                </div>

                {/* Specs */}
                <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                        <span>Peak Power</span>
                        <span className="font-medium text-gray-900">6.8 kWp</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                        <span>Installed</span>
                        <span className="font-medium text-gray-900">10/01/2018</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                        <span>Address</span>
                        <span className="font-medium text-gray-900 text-right">
              12 Baker Street, London, NW1 6XE
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolarPanelInfoCard;
