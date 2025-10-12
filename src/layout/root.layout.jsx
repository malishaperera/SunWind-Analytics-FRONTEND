import Navigation from "@/components/Navigation/Navigation.jsx";
import {Outlet} from "react-router";

const RootLayout = () => {
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    )
}
export default RootLayout;