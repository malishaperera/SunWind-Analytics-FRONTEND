import {Outlet} from "react-router";
import {AppSidebar} from "@/components/AppSlidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import "../index.css";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <div className="flex flex-col w-full min-h-screen bg-gray-50 overflow-auto">

                <Outlet/>
            </div>
        </SidebarProvider>
    );
}