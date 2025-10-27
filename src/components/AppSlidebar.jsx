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
        icon: LayoutDashboard,
    },
    {
        title: "Anomaly",
        url: "/dashboard/anomaly",
        icon: TriangleAlert,
    },
    {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: ChartLine,
    },
    {
        title: "Users",
        url: "/dashboard/users",
        icon: Users,
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
                                        <Link href={item.url}>
                                            <item.icon  className="w-8 h-8"size={52}/>
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