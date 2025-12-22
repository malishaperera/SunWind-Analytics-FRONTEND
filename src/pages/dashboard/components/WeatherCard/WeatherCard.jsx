import { Card } from "@/components/ui/card";
import WeatherItem from "./WeatherItem";
import { getWeatherLabel } from "./weather.utils";

const WeatherCard = ({ weather }) => {
    return (
        <Card className="p-6 rounded-2xl shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-4">
                Weather Conditions
            </h2>

            <div className="grid grid-cols-2 gap-4">
                <WeatherItem
                    icon="🌡️"
                    label="Temperature"
                    value={`${weather.temperature} °C`}
                />

                <WeatherItem
                    icon="🌬️"
                    label="Wind Speed"
                    value={`${weather.windSpeed} km/h`}
                />

                <WeatherItem
                    icon={weather.isDay ? "☀️" : "🌙"}
                    label="Day Status"
                    value={weather.isDay ? "Daytime" : "Night"}
                />

                <WeatherItem
                    icon="⛅"
                    label="Condition"
                    value={getWeatherLabel(weather.weatherCode)}
                />
            </div>
        </Card>
    );
};

export default WeatherCard;
