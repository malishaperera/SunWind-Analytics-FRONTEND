const KpiCard = ({ title, value, unit, color }) => (
    <div className="bg-white rounded-2xl shadow-sm p-5">
        <p className="text-sm text-gray-500">{title}</p>
        <p className={`text-2xl font-bold mt-1 ${color}`}>
            {value} {unit}
        </p>
    </div>
);

const KpiCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <KpiCard title="Today's Production" value="24.9" unit="kWh" color="text-blue-600" />
            <KpiCard title="Self Consumption" value="18.4" unit="kWh" color="text-green-600" />
            <KpiCard title="Grid Usage" value="6.5" unit="kWh" color="text-orange-600" />
            <KpiCard title="CO₂ Saved" value="2.9" unit="kg" color="text-emerald-600" />
        </div>
    );
};

export default KpiCards;
