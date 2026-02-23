import imgWindTurbine from "./assets/wind-turbine.png";
import { Sailboat, Shield, Triangle, Sun } from "lucide-react";

const HeroSection = () => {
  const navItems = [
    {
      label: "Solar Energy",
      color: "bg-indigo-100",
      icon: <Sun className="text-indigo-600" />,
    },
    {
      label: "Home Dashboard",
      color: "bg-sky-100",
      icon: <Sailboat className="text-sky-600" />,
    },
    {
      label: "Monitoring",
      color: "bg-amber-100",
      icon: <Triangle className="text-amber-600" />,
    },
    {
      label: "Alerts",
      color: "bg-rose-100",
      icon: <Shield className="text-rose-600" />,
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 px-4 sm:px-8 md:px-12">
      {/* Navigation Bar */}
      <nav className="grid grid-cols-2 gap-4 mt-8 sm:flex sm:flex-wrap sm:justify-between">
        {navItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
            >
              {item.icon}
            </div>
            <span className="text-sm font-medium text-slate-700">
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      <main className="px-4 py-8 md:px-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className={"mb-12 md:mb-24"}>
            <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-5xl md:text-7xl">
              Monitor Your <br />
              Home's <span className="text-indigo-600">Solar Energy</span>
            </h1>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
              <div className="flex flex-row items-center gap-4 sm:gap-8">
                <span>Solar Energy</span>
                <div className="relative">
                  <img
                    src={imgWindTurbine}
                    alt="Solar panels on a house roof"
                    className="max-h-8 rounded-xl object-cover sm:max-h-16 md:max-h-20 md:rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <span>with Real-Time</span>
              </div>
              <div className="flex flex-row items-center gap-4 sm:gap-8">
                <span>Insights & Alerts</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <Triangle className="h-5 w-5 fill-current text-white sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </div>
              </div>
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
