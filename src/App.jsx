import Navigation from "@/components/Navigation/Navigation.jsx";
import HeroSection from "@/components/HeroSection/HeroSectionSection.jsx";
import SolarEnergyProduction from "@/components/SolarEnergyProduction.jsx";


function App() {

  return (
    <>
        <Navigation/>
        <main>
            <HeroSection/>
            <SolarEnergyProduction/>
        </main>
    </>
  )
}

export default App