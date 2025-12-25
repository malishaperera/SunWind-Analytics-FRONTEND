import {Outlet} from "react-router";
import {AppSidebar} from "@/components/AppSlidebar.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout(){
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="p-4 w-full bg-slae-00 ">
                    <SidebarTrigger className="block !size-8 [&_svg]:!w-7 [&_svg]:!h-7" />
                    <Outlet/>
                </main>
            </SidebarProvider>
        </>
    )
}