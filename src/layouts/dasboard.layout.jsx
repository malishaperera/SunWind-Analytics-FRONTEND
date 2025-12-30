import {Outlet} from "react-router";
import {AppSidebar} from "@/components/AppSlidebar.jsx";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <div className="flex flex-col w-full">
                {/*<div className="p-4 lg:hidden">*/}
                {/*    <SidebarTrigger className="!size-8 [&_svg]:!w-7 [&_svg]:!h-7"/>*/}
                {/*</div>*/}
                <Outlet/>
            </div>
        </SidebarProvider>
    );
}