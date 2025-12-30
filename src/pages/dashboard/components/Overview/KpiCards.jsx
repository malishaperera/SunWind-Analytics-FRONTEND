import {
  BoltIcon,
  HomeIcon,
  ArrowTrendingUpIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";

const KpiCard = ({ title, value, unit, icon, bg, ring, accent }) => (
  <div
    className={`relative rounded-2xl p-5 shadow-sm border border-slate-200 
    bg-gradient-to-br ${bg} overflow-hidden`}
  >
    <div className={`absolute top-0 left-0 h-1 w-full ${accent}`} />
    <div className="flex items-center gap-4">
      <div
        className={`w-11 h-11 flex items-center justify-center rounded-xl 
        bg-white/80 shadow ring-1 ${ring}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-600">{title}</p>
        <p className="text-2xl font-bold text-slate-900 mt-1">
          {value}{" "}
          <span className="text-base font-medium text-slate-500">{unit}</span>
        </p>
      </div>
    </div>
  </div>
);

const KpiCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <KpiCard
        title="Today's Production"
        value="24.9"
        unit="kWh"
        icon={<BoltIcon className="w-6 h-6 text-blue-600" />}
        bg="from-blue-50 to-sky-100"
        ring="ring-blue-200"
        accent="bg-blue-500"
      />

      <KpiCard
        title="Self Consumption"
        value="18.4"
        unit="kWh"
        icon={<HomeIcon className="w-6 h-6 text-green-600" />}
        bg="from-green-50 to-emerald-100"
        ring="ring-green-200"
        accent="bg-green-500"
      />

      <KpiCard
        title="Grid Usage"
        value="6.5"
        unit="kWh"
        icon={<ArrowTrendingUpIcon className="w-6 h-6 text-orange-500" />}
        bg="from-orange-50 to-amber-100"
        ring="ring-orange-200"
        accent="bg-orange-500"
      />

      <KpiCard
        title="CO₂ Saved"
        value="2.9"
        unit="kg"
        icon={<CloudIcon className="w-6 h-6 text-emerald-600" />}
        bg="from-emerald-50 to-green-100"
        ring="ring-emerald-200"
        accent="bg-emerald-500"
      />
    </div>
  );
};

export default KpiCards;
