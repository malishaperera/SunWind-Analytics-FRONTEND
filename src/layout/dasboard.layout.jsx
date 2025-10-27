import {Outlet, Routes} from "react-router";
import {AppSidebar} from "@/components/AppSlidebar.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
export default function DashboardLayout(){
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="p-4">
                    <SidebarTrigger className="w-8 h-8" size={32}/>
                    <Outlet/>
                </main>
            </SidebarProvider>
        </>
    )
}