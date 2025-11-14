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
                    <SidebarGroupLabel className="text-3xl font-bold text-foreground">
                        <Link to="/">Aelora</Link>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="mt-4 text">
                            {items.map((item) => (
                                <SideBarTab key={item.url} item={item}/>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}