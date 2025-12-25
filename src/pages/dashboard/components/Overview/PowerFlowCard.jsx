import {
    BoltIcon,
    HomeIcon,
    SunIcon,
    Battery100Icon,
} from "@heroicons/react/24/solid";

const PowerNode = ({ icon, title, value }) => (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center gap-2 w-36">
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100">
            {icon}
        </div>
        <p className="text-xs text-gray-500 text-center">{title}</p>
        <p className="font-semibold text-sm">{value}</p>
    </div>
);

const PowerFlowCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 overflow-hidden relative max-w-full">

        {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-800">Power Flow</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Channelled
                    <span className="w-2 h-2 rounded-full bg-gray-300 ml-3" />
                    Idle
                </div>
            </div>

            {/* FLOW GRID */}
            <div className="grid grid-cols-3 items-center">
                {/* LEFT */}
                <div className="flex flex-col items-center gap-10">
                    <PowerNode
                        icon={<SunIcon className="w-5 h-5 text-yellow-500" />}
                        title="Solar Production"
                        value="2.07 kW"
                    />

                    <PowerNode
                        icon={<HomeIcon className="w-5 h-5 text-green-600" />}
                        title="Consumption"
                        value="1.5 kW"
                    />
                </div>

                {/* CENTER */}
                <div className="relative flex items-center justify-center h-72">
                    {/* Center node */}
                    <div className="z-10 w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg">
                        <BoltIcon className="w-6 h-6 text-white" />
                    </div>

                    {/* SVG lines */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 300 300"
                        preserveAspectRatio="none"
                    >
                        {/* Solar → Center */}
                        <path
                            d="M0 70 C 120 70, 120 150, 150 150"
                            stroke="#3b82f6"
                            strokeWidth="4"
                            fill="none"
                        />

                        {/* Consumption → Center */}
                        <path
                            d="M0 230 C 120 230, 120 150, 150 150"
                            stroke="#22c55e"
                            strokeWidth="4"
                            fill="none"
                        />

                        {/* Center → Grid */}
                        <path
                            d="M150 150 C 180 150, 180 70, 300 70"
                            stroke="#3b82f6"
                            strokeWidth="4"
                            fill="none"
                        />

                        {/* Center → Battery */}
                        <path
                            d="M150 150 C 180 150, 180 230, 300 230"
                            stroke="#f59e0b"
                            strokeWidth="4"
                            fill="none"
                        />
                    </svg>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-center gap-10 relative">
                    <PowerNode
                        icon={<HomeIcon className="w-5 h-5 text-blue-600" />}
                        title="Grid"
                        value="0.57 kW"
                    />

                    <div className="relative">
                        <PowerNode
                            icon={<Battery100Icon className="w-5 h-5 text-orange-500" />}
                            title="Battery"
                            value="0.23 kW"
                        />

                        {/* Battery % */}
                        {/*<div className="absolute -right-10 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs">*/}
                        {/*    🔋 52%*/}
                        {/*</div>*/}
                        <div className="mt-2 text-xs text-gray-600 text-center">
                            🔋 52%
                        </div>

                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 text-xs text-gray-500 mt-6 justify-center">
        <span className="flex items-center gap-2">
          <span className="w-3 h-1 bg-blue-500 rounded-full" />
          Solar Production
        </span>
                <span className="flex items-center gap-2">
          <span className="w-3 h-1 bg-green-500 rounded-full" />
          Consumption
        </span>
                <span className="flex items-center gap-2">
          <span className="w-3 h-1 bg-orange-500 rounded-full" />
          Battery
        </span>
            </div>
        </div>
    );
};

export default PowerFlowCard;
