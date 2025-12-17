import imgWindTurbine from "./wind-turbine.png";
import { Sailboat, Shield, Triangle, Sun } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 px-6 md:px-12 font-[Inter]">
      {/* Navigation Bar */}
      <nav className="flex flex-wrap items-center justify-between py-6 gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100">
            <Sun className="h-5 w-5 text-indigo-600" />
          </div>
          <span className="text-sm font-medium text-slate-700">
            Solar Energy
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
            <Sailboat className="h-5 w-5 text-sky-600" />
          </div>
          <span className="text-sm font-medium text-slate-700">
            Home Dashboard
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100">
            <Triangle className="h-5 w-5 text-amber-600 fill-current" />
          </div>
          <span className="text-sm font-medium text-slate-700">
            Real-Time Monitoring
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100">
            <Shield className="h-5 w-5 text-rose-600" />
          </div>
          <span className="text-sm font-medium text-slate-700">
            Anomaly Detection
          </span>
        </div>
      </nav>

      <main className="px-4 py-4 md:px-6 md:py-16">
        <div>
          <div className={"mb-12 md:mb-24"}>
            <h1 className="text-4xl leading-tight font-bold text-black sm:text-5xl sm:leading-20 md:text-7xl md:leading-32 xl:text-8xl">
              <div>Monitor Your Home's</div>
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
