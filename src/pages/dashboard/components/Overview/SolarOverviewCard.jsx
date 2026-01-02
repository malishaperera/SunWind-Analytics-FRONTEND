import solar_panel from "@/pages/dashboard/components/Overview/assets/dashboard-solar.jpg";
import { getWeatherLabel } from "@/pages/dashboard/components/WeatherCard/util/weather.utils.js";
import { Card } from "@/components/ui/card.jsx";

const WeatherInfoItem = ({ icon, label, value }) => (
  <div className="rounded-xl p-4 flex items-center gap-3 bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100">
    {icon && <span className="text-xl">{icon}</span>}
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="font-semibold text-slate-900">{value}</p>
    </div>
  </div>
);

const SolarOverviewCard = ({ weather }) => {
  return (
    <Card className="rounded-3xl p-6 border border-slate-200 shadow-sm bg-gradient-to-br from-white via-sky-50 to-emerald-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm text-slate-500">Colombo, Sri Lanka</p>

            <p className="text-3xl font-extrabold text-slate-900 mt-1">
              {weather.temperature}°C
            </p>

            <p className="text-xs text-slate-400 mt-1">Last sync: 2 min ago</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <WeatherInfoItem
              icon="🌡️"
              label="Temperature"
              value={`${weather.temperature} °C`}
            />

            <WeatherInfoItem
              icon="🌬️"
              label="Wind Speed"
              value={`${weather.windSpeed} km/h`}
            />

            <WeatherInfoItem
              icon={weather.isDay ? "☀️" : "🌙"}
              label="Day Status"
              value={weather.isDay ? "Daytime" : "Night"}
            />

            <WeatherInfoItem
              icon="⛅"
              label="Condition"
              value={getWeatherLabel(weather.weatherCode)}
            />
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
              Active ⚡
            </span>

            <div className="mt-3">
              <p className="text-4xl font-extrabold text-slate-900">
                2.07{" "}
                <span className="text-lg font-medium text-slate-500">kW</span>
              </p>

              <div className="flex items-center gap-4 text-sm mt-2">
                <span className="text-red-500">
                  Min <b>4.52</b>
                </span>
                <span className="text-emerald-600">
                  Max <b>7.07</b>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-slate-200">
            <div>
              <p className="text-xs text-slate-500">Earnings</p>
              <p className="font-semibold text-emerald-600">$1.10</p>
            </div>

            <div>
              <p className="text-xs text-slate-500">CO₂ Saved</p>
              <p className="font-semibold text-sky-600">2.92 lb</p>
            </div>

            <div>
              <p className="text-xs text-slate-500">Produced</p>
              <p className="font-semibold text-indigo-600">24.09 MWh</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative mb-26">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-200/40 to-emerald-200/40 blur-xl"></div>
            <img
              src={solar_panel}
              alt="Solar Panel"
              className="relative w-full max-w-xs object-contain"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SolarOverviewCard;
