const StatCard = ({ title, value, color }) => (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center">
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
    </div>
);

const AnomalyStats = ({ anomalies }) => {
    const active = anomalies.filter(a => a.status === "ACTIVE").length;
    const review = anomalies.filter(a => a.status === "UNDER_REVIEW").length;
    const resolved = anomalies.filter(a => a.status === "RESOLVED").length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Active Anomalies" value={active} color="text-red-600" />
            <StatCard title="Under Review" value={review} color="text-yellow-600" />
            <StatCard title="Resolved" value={resolved} color="text-green-600" />
        </div>
    );
};

export default AnomalyStats;
