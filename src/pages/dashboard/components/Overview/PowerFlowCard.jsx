import {
  BoltIcon,
  HomeIcon,
  SunIcon,
  Battery100Icon,
} from "@heroicons/react/24/solid";

const PowerNode = ({ icon, title, value, bg, ring }) => (
  <div
    className={`rounded-2xl p-4 flex flex-col items-center gap-2 w-36 
    bg-gradient-to-br ${bg} shadow-sm ring-1 ${ring}`}
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow">
      {icon}
    </div>
    <p className="text-xs text-slate-600 text-center">{title}</p>
    <p className="font-semibold text-sm text-slate-900">{value}</p>
  </div>
);

const PowerFlowCard = () => {
  return (
    <div className="rounded-3xl p-6 border border-slate-200 shadow-sm bg-gradient-to-br from-white via-sky-50 to-emerald-50 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-slate-900">Power Flow</h3>

        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Channelled
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            Idle
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center">
        <div className="flex flex-col items-center gap-10">
          <PowerNode
            icon={<SunIcon className="w-5 h-5 text-blue-600" />}
            title="Solar Production"
            value="2.07 kW"
            bg="from-blue-100 to-sky-50"
            ring="ring-blue-200"
          />

          <PowerNode
            icon={<HomeIcon className="w-5 h-5 text-green-600" />}
            title="Consumption"
            value="1.5 kW"
            bg="from-green-100 to-emerald-50"
            ring="ring-green-200"
          />
        </div>

        <div className="relative flex items-center justify-center h-72">
          <div className="z-10 w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl ring-4 ring-slate-800/20">
            <BoltIcon className="w-7 h-7 text-yellow-400" />
          </div>

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 300 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0 70 C 120 70, 120 150, 150 150"
              stroke="#3b82f6"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M0 230 C 120 230, 120 150, 150 150"
              stroke="#22c55e"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M150 150 C 180 150, 180 70, 300 70"
              stroke="#60a5fa"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M150 150 C 180 150, 180 230, 300 230"
              stroke="#f59e0b"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-10">
          <PowerNode
            icon={<HomeIcon className="w-5 h-5 text-blue-600" />}
            title="Grid"
            value="0.57 kW"
            bg="from-blue-100 to-indigo-50"
            ring="ring-blue-200"
          />
          <div>
            <PowerNode
              icon={<Battery100Icon className="w-5 h-5 text-orange-500" />}
              title="Battery"
              value="0.23 kW"
              bg="from-amber-100 to-orange-50"
              ring="ring-amber-200"
            />
            <div className="mt-2 text-xs text-slate-600 text-center">
              🔋 52%
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-xs text-slate-600 mt-6 justify-center">
        <span className="flex items-center gap-2">
          <span className="w-3 h-1 bg-blue-500 rounded-full" />
          Solar
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
