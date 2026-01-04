import {Outlet} from "react-router";
import {AppSidebar} from "@/components/AppSlidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <div className="flex flex-col w-full">
                <Outlet/>
            </div>
        </SidebarProvider>
    );
}