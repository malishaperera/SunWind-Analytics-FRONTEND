import HeroSection from "./components/HeroSection";
import SolarEnergyProduction from "./components/SolarEnergyProduction";
import MainSection from "@/pages/home/components/MainSection/index.jsx";
import FooterSection from "@/pages/home/components/FooterSection/index.jsx";
// import DataCard from "@/pages/anomalies/components/DataCard.jsx";

const HomePage = () => {
    return (
        <main>
            <HeroSection/>
            <SolarEnergyProduction/>
            {/*<DataCard/>*/}
            <MainSection/>
            <FooterSection/>

        </main>
    )
}
export default HomePage;