import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import solar_panel_house from "@/pages/dashboard/components/Overview/assets/solar-panels-residential-house.jpg";

const SolarPanelInfoCard = () => {
  return (
    <div
      className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm
                    bg-gradient-to-br from-white via-sky-50 to-emerald-50"
    >
      <div className="relative h-48 w-full">
        <img
          src={solar_panel_house}
          alt="Solar Panel"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div
          className="absolute bottom-3 left-3 px-3 py-1 rounded-full
                        bg-emerald-500 text-white text-xs font-semibold shadow"
        >
          Active
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">
              CMOS Solar Panel
            </h3>
            <p className="text-xs text-slate-500">#C-0091</p>
          </div>

          <button
            className="w-9 h-9 rounded-full flex items-center justify-center
                       bg-white shadow-sm border border-slate-200
                       hover:bg-slate-100 transition"
          >
            <ArrowUpRightIcon className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        <div className="my-4 h-px bg-slate-200" />
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Peak Power</span>
            <span className="font-semibold text-slate-900">6.8 kWp</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Installed</span>
            <span className="font-semibold text-slate-900">10 Jan 2018</span>
          </div>

          <div className="flex justify-between gap-3">
            <span className="text-slate-500">Address</span>
            <span className="font-semibold text-slate-900 text-right">
              12 Baker Street, London
            </span>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Last maintenance: 3 months ago
          </span>

          <span className="text-xs font-medium text-emerald-600">
            View details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolarPanelInfoCard;
