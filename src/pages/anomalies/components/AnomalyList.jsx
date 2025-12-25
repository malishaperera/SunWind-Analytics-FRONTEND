// Status color styles
const statusStyles = {
    ACTIVE: "bg-red-100 text-red-700",
    UNDER_REVIEW: "bg-orange-100 text-orange-700",
    RESOLVED: "bg-green-100 text-green-700",
};

// Severity badge styles
const severityStyles = {
    HIGH: "bg-red-100 text-red-700",
    MEDIUM: "bg-yellow-100 text-yellow-700",
    LOW: "bg-green-100 text-green-700",
};

// vertical indicator color
const leftIndicator = {
    HIGH: "bg-red-500",
    MEDIUM: "bg-yellow-500",
    LOW: "bg-green-500",
};

// Convert BACKEND enum → UI label
const formatStatus = (status) => {
    if (!status) return "Unknown";
    return status
        .toLowerCase()
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const AnomalyList = ({ anomalies }) => {
    return (

        <div className="mt-10">
            {/* Header */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Anomalies
            </h3>

            {/* List */}
            <div className="space-y-4">
                {anomalies.map(a => (
                    <div
                        key={a._id}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                    >
                        <div className="flex items-start justify-between p-6 gap-6">
                            {/* Left severity indicator */}
                            <div
                                className={`w-1.5 rounded-full ${leftIndicator[a.severity] || "bg-gray-300"}`}
                            />

                            {/* Main content */}
                            <div className="flex-1">
                                {/* Title + Severity */}
                                <div className="flex items-center gap-3">
                                    <h4 className="font-semibold text-gray-900">
                                        {a.type.replace("_", " ")}
                                    </h4>

                                    <span
                                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            severityStyles[a.severity] || "bg-gray-100 text-gray-600"
                                        }`}
                                    >
                    {a.severity}
                  </span>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600 mt-1">
                                    {a.description}
                                </p>

                                {/* Solar Unit */}
                                <p className="text-xs text-gray-500 mt-1">
                                    Solar Unit:{" "}
                                    <span className="font-medium text-gray-700">
                    {a.solarUnit?.serialNumber || a.solarUnitId || "N/A"}
                  </span>
                                </p>

                                {/* Time */}
                                <p className="text-xs text-gray-400 mt-1">
                                    {new Date(a.detectedAt).toLocaleString()}
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-3">
                                {/* Status badge */}
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        statusStyles[a.status] || "bg-gray-100 text-gray-600"
                                    }`}
                                >
                  {formatStatus(a.status)}
                </span>

                                {/* Investigate button */}
                                <button
                                    className={`px-4 py-2 text-sm font-medium rounded-lg border transition
                    ${
                                        a.status === "RESOLVED"
                                            ? "border-gray-300 text-gray-400 cursor-not-allowed"
                                            : "border-blue-500 text-blue-600 hover:bg-blue-50"
                                    }`}
                                    disabled={a.status === "RESOLVED"}
                                >
                                    Investigate
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnomalyList;
