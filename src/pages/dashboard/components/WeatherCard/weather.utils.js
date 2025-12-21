export const getWeatherLabel = (code) => {
    if (code === 0) return "Clear Sky ☀️";
    if (code <= 2) return "Partly Cloudy ⛅";
    if (code <= 48) return "Cloudy ☁️";
    if (code <= 67) return "Rain 🌧️";
    if (code <= 77) return "Snow ❄️";
    return "Storm ⛈️";
};
