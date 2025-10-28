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
import {Link} from "react-router";


// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboard className="w-8 h-8" size={32}/>,
    },
    {
        title: "Anomaly",
        url: "/dashboard/anomaly",
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
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xl font-bold text-foreground">Aelora</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="mt-4 text-xl">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}