const AnomalyList = ({ anomalies }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm mt-8">
            <h3 className="font-semibold p-6 border-b text-gray-800">
                Recent Anomalies
            </h3>

            <div className="divide-y">
                {anomalies.map(a => (
                    <div
                        key={a._id}
                        className="p-6 flex justify-between items-start hover:bg-gray-50 transition"
                    >
                        <div>
                            <h4 className="font-semibold text-gray-900">
                                {a.type.replace("_", " ")}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                                {a.description}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                {new Date(a.detectedAt).toLocaleString()}
                            </p>
                        </div>

                        <span
                            className={`px-3 py-1 rounded-full text-xs font-medium
                ${a.severity === "HIGH" && "bg-red-100 text-red-700"}
                ${a.severity === "MEDIUM" && "bg-yellow-100 text-yellow-700"}
                ${a.severity === "LOW" && "bg-green-100 text-green-700"}
              `}
                        >
              {a.severity}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnomalyList;
