import {
    LayoutDashboard,
    TriangleAlert,
    ChartLine,
    Users,
    Ban
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Link, useLocation } from "react-router";
import { Sun } from "lucide-react";

const items = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Anomaly", url: "/dashboard/anomalies", icon: TriangleAlert },
    { title: "Analytics", url: "/dashboard/analytics", icon: ChartLine, disabled: true },
    { title: "Users", url: "/dashboard/user", icon: Users },
    { title: "Invoices", url: "/dashboard/invoices", icon: ChartLine },
];

export function AppSidebar() {
    const location = useLocation();

    return (
        <Sidebar className="w-[260px] min-w-[260px] border-r border-slate-200
                        bg-gradient-to-b from-white via-sky-50 to-slate-100">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="px-5 py-6">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl
                              bg-gradient-to-br from-blue-100 to-emerald-100 text-blue-600">
                                <Sun size={26} />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-slate-900">SunWind</div>
                                <div className="text-sm text-slate-500">Analytics</div>
                            </div>
                        </Link>
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu className="mt-4 space-y-1">
                            {items.map((item) => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.url;


                                if (item.disabled) {
                                    return (
                                        <SidebarMenuItem key={item.url}>
                                            <SidebarMenuButton
                                                className="gap-4 py-3 text-base rounded-xl text-slate-400 cursor-not-allowed"
                                                onClick={() => alert("🚧 This feature is coming soon")}
                                            >
                                                <Icon
                                                    size={22}
                                                    className={isActive ? "text-blue-600" : "text-slate-500"}
                                                />
                                                <span>{item.title}</span>
                                                <span className="ml-auto text-xs bg-slate-200 px-2 py-0.5 rounded">Soon</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                }
                                return (
                                    <SidebarMenuItem key={item.url}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className={`
                        gap-4 py-3 text-base rounded-xl transition
                        ${isActive
                                                ? "bg-blue-50 text-blue-700 shadow-sm"
                                                : "hover:bg-slate-100 text-slate-700"}
                      `}
                                        >
                                            <Link to={item.url}>
                                                <Icon
                                                    size={22}
                                                    className={isActive ? "text-blue-600" : "text-slate-500"}
                                                />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

