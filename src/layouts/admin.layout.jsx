import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.jsx";
import {Outlet} from "react-router";
import {AdminSidebar} from "@/components/AdminSidebar.jsx";

export default function AdminLayout(){
    return (
        <>
            <SidebarProvider>
                <AdminSidebar/>
                <main className="p-4 w-full bg-slate-200">
                    <SidebarTrigger className="block"/>
                    <Outlet/>
                </main>
            </SidebarProvider>
        </>
    )
}