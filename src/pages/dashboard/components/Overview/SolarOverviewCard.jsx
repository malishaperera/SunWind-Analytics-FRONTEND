import solar_panel  from "@/pages/dashboard/components/Overview/assets/dashboard-solar.jpg";
import  { getWeatherLabel } from "@/pages/dashboard/components/WeatherCard/util/weather.utils.js";
import { Card } from "@/components/ui/card.jsx";

const WeatherInfoItem = ({ icon, label, value }) => (
    <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <div>
            <p className="text-xs text-gray-500">{label}</p>
            <p className="font-semibold text-gray-900">{value}</p>
        </div>
    </div>
);

const SolarOverviewCard = ({ weather }) => {
    return (
        <Card className="rounded-2xl shadow-sm p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="flex flex-col justify-between">

                {/* LOCATION + TEMPERATURE */}
                <div>
                    <p className="text-sm text-gray-500">
                        Colombo, Sri Lanka
                    </p>

                    <p className="text-2xl font-semibold text-gray-900 mt-1">
                        {weather.temperature}°C
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                        Last sync: 2 min ago
                    </p>
                </div>

                {/* WEATHER DETAILS */}
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
                        label="Condition"
                        value={getWeatherLabel(weather.weatherCode)}
                    />
                </div>

                {/* POWER STATUS */}
                <div className="mt-6">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Active ⚡
                    </span>

                    <div className="mt-2">
                        <p className="text-4xl font-bold text-gray-900">
                            2.07{" "}
                            <span className="text-lg font-medium text-gray-500">
                                kW
                            </span>
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <span>
                                Min <span className="text-red-500">4.52</span>
                            </span>
                            <span>
                                Max <span className="text-green-500">7.07</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mt-6 border-t pt-4">
                    <div>
                        <p className="text-xs text-gray-500">Earnings</p>
                        <p className="font-semibold">$1.10</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">CO₂ Saved</p>
                        <p className="font-semibold">2.92 lb</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Produced</p>
                        <p className="font-semibold">24.09 MWh</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <img
                    src={solar_panel}
                    alt="Solar Panel"
                    className="w-full max-w-xs object-contain mb-20"
                />
            </div>
        </Card>
    );
};

export default SolarOverviewCard;
