import {
    ChartLine,
    LayoutDashboard,
    TriangleAlert,
    Users
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Link, useLocation} from "react-router";
import {cn} from "@/lib/utils.js";
import { Sun } from "lucide-react";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboard className="w-8 h-8" size={32}/>,
    },
    {
        title: "Anomaly",
        url: "/dashboard/anomalies",
        icon: <TriangleAlert className="w-8 h-8"size={52}/>,
    },
    {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: <ChartLine className="w-8 h-8"size={52}/>,
    },
    {
        title: "Users",
        url: "/dashboard/users",
        icon: <Users className="w-8 h-8"size={52}/>,
    },
    {
        title: "Invoices",
        url: "/dashboard/invoices",
        icon: <ChartLine className="w-8 h-8"size={52}/>,
    }
]

export function AppSidebar() {

    const SideBarTab = ({item}) =>{

        let location = useLocation();
        let isActive = location.pathname === item.url;
        return(
            <SidebarMenuItem key={item.url}>
                <SidebarMenuButton asChild isActive={isActive}>
                    <Link
                        to={item.url}
                        >
                        {item.icon}
                        <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        );
    };
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="px-4 py-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Sun className="h-6 w-6" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-xl font-bold tracking-tight">
                                    SunWind
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Analytics
                                </span>
                            </div>
                        </Link>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="mt-6">
                            {items.map((item) => (
                                <SideBarTab key={item.url} item={item} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}