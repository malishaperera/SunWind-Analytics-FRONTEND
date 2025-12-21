const WeatherItem = ({ icon, label, value }) => {
    return (
        <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-4">
            <span className="text-xl">{icon}</span>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-lg font-semibold text-gray-900">{value}</p>
            </div>
        </div>
    );
};

export default WeatherItem;
