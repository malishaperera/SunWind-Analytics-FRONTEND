import {useEffect, useState} from "react";
import { useUser } from "@clerk/clerk-react";
import {useGetAllSolarUnitsForUserQuery, useGetUserMeQuery, useUpdateUserMeMutation} from "@/lib/redux/query.js";
import { SidebarTrigger } from "@/components/ui/sidebar.jsx";

export default function User() {
    const { user } = useUser();

    const { data: backendUser, isLoading: isUserLoading } = useGetUserMeQuery();
    const { data: solarUnits = [], isLoading:isUnitsLoading  } = useGetAllSolarUnitsForUserQuery();
    const [updateUserMe] = useUpdateUserMeMutation();

    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName|| "");
    const [phone, setPhone] = useState("");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (backendUser) {
            setFirstName(backendUser.firstName || user?.firstName || "");
            setLastName(backendUser.lastName || "");
            setPhone(backendUser.phoneNumber || "");
        }
    }, [backendUser, user]);

    const [notifications, setNotifications] = useState({
        anomalyAlerts: true,
        dailyReport: true,
        invoiceReminders: false,
        lowEfficiency: true,
    });

    const toggleNotification = (key) =>
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));

    const handleSave = async () => {
        try {
            await user?.update({ firstName, lastName });
            await updateUserMe({ firstName, lastName, phoneNumber: phone });
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        } catch (err) {
            console.error("Failed to update profile:", err);
        }
    };

    const initials = ((firstName[0] || "") + (lastName[0] || "")).toUpperCase();

    const activeCount = solarUnits.filter(
        (u) => u.status === "ACTIVE" || u.status === "INACTIVE" || u.status === "MAINTENANCE"
    ).length;

    const isPageLoading = isUserLoading || isUnitsLoading;

    if (isPageLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-500" />
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-[900px] px-6 pt-6 pb-10">

            {/* Header */}
            <div className="flex items-start gap-3 mb-8">
                <SidebarTrigger className="mt-1 !size-9 [&_svg]:!w-7 [&_svg]:!h-7" />
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                    <p className="text-gray-500 mt-1">
                        Manage your account, solar units, and preferences
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                {/* ── Profile Info ── */}
                <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-4">
                        Profile information
                    </p>
                    <div className="flex items-center gap-4 mb-5">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-semibold flex-shrink-0">
                            {initials || "?"}
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-900">
                                {firstName} {lastName}
                            </p>
                            <p className="text-sm text-gray-500">
                                {user?.primaryEmailAddress?.emailAddress}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">First name</label>
                            <input
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Last name</label>
                            <input
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Email address</label>
                            <input
                                disabled
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
                                value={user?.primaryEmailAddress?.emailAddress || ""}
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Phone number</label>
                            <input
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400"
                                placeholder="+1 (000) 000-0000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        className={`mt-4 px-5 py-2 text-sm font-medium rounded-lg text-white transition-colors ${
                            saved ? "bg-green-700" : "bg-green-600 hover:bg-green-700"
                        }`}
                    >
                        {saved ? "Saved!" : "Save changes"}
                    </button>
                </div>

                {/* ── Solar Overview ── */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-4">
                        Solar overview
                    </p>

                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs text-gray-400">Today's output</p>
                            <p className="text-lg font-semibold mt-1 text-green-600">18.4 kWh</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs text-gray-400">Active units</p>
                            <p className="text-lg font-semibold mt-1 text-gray-900">
                                {activeCount}
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs text-gray-400">Efficiency</p>
                            <p className="text-lg font-semibold mt-1 text-gray-900">91%</p>
                        </div>
                    </div>

                    {/* Unit list */}
                    <div>
                        {solarUnits.length === 0 ? (
                            <div className="flex justify-center py-4">
                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-green-200 border-t-green-500" />
                                <p className="text-sm text-gray-400 text-center py-4">
                                    No solar units found.
                                </p>
                            </div>
                        ) : solarUnits.length === 0 ? (
                            <p className="text-sm text-gray-400 text-center py-4">
                                No solar units found.
                            </p>
                        ) : (
                            solarUnits.map((unit) => {
                                const isActive      = unit.status === "ACTIVE";
                                const isMaintenance = unit.status === "MAINTENANCE";
                                const isInactive    = unit.status === "INACTIVE";
                                // const isOnline =
                                //     unit.status === "ACTIVE" || unit.status === "INACTIVE" || unit.status === "MAINTENANCE";
                                return (
                                    <div
                                        key={unit.id}
                                        className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0"
                                    >
                                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                            isActive      ? "bg-green-500" :
                                                isMaintenance ? "bg-yellow-400" :
                                                    isInactive ? "bg-gray-300" : "bg-red-500"
                                        }`} />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-800">
                                                {unit.name ?? unit.serialNumber ?? `Unit ${unit.id}`}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                Capacity:{" "}
                                                <span className="text-gray-600 font-medium">
                          {unit.capacity ?? unit.capacity_kw ?? "—"} kW
                        </span>
                                            </p>
                                        </div>
                                        <span className={`text-xs px-2.5 py-1 rounded-lg flex-shrink-0 ${
                                            isActive      ? "bg-green-50 text-green-700" :
                                                isMaintenance ? "bg-yellow-50 text-yellow-700" :
                                                    "bg-gray-100 text-gray-400"
                                        }`}>
                {isActive ? "Active" : isMaintenance ? "Maintenance" : "Inactive"}
            </span>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* ── Notifications ── */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-4">
                        Notifications
                    </p>
                    {[
                        { key: "anomalyAlerts",    label: "Anomaly alerts",          sub: "Notify when issues detected" },
                        { key: "dailyReport",      label: "Daily report",            sub: "Summary of daily production" },
                        { key: "invoiceReminders", label: "Invoice reminders",       sub: "Before payment due date" },
                        { key: "lowEfficiency",    label: "Low efficiency warnings", sub: "Below 70% output" },
                    ].map(({ key, label, sub }) => (
                        <div
                            key={key}
                            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                        >
                            <div>
                                <p className="text-sm text-gray-800">{label}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                            </div>
                            <button
                                onClick={() => toggleNotification(key)}
                                className={`w-10 h-6 rounded-full transition-colors relative flex-shrink-0 ${
                                    notifications[key] ? "bg-green-500" : "bg-gray-200"
                                }`}
                            >
                <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        notifications[key] ? "translate-x-5" : "translate-x-1"
                    }`}
                />
                            </button>
                        </div>
                    ))}
                </div>

                {/* ── Account Settings ── */}
                <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-4">
                        Account settings
                    </p>
                    {[
                        { label: "Change password", value: "" },
                        { label: "Language",        value: "English" },
                        { label: "Timezone",        value: "Asia/Colombo" },
                    ].map(({ label, value }) => (
                        <div
                            key={label}
                            className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 px-1 rounded-lg transition-colors"
                        >
                            <span className="text-sm text-gray-800">{label}</span>
                            <div className="flex items-center gap-2">
                                {value && <span className="text-sm text-gray-400">{value}</span>}
                                <span className="text-gray-300 text-lg">›</span>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-red-50 px-1 rounded-lg transition-colors">
                        <span className="text-sm text-red-500">Delete account</span>
                        <span className="text-red-300 text-lg">›</span>
                    </div>
                </div>

            </div>
        </div>
    );
}