import Navigation from "@/components/Navigation/Navigation.jsx";
import {Outlet} from "react-router";

export default function MainLayout (){
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    );
}