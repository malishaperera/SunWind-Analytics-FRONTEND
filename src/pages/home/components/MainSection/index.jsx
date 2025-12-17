import demoVideo from "./Sunwind-Anlatics.mp4";
import smallImg from "./img.png";
import image1 from "./img_1.png";
import problemImg from "./img_2.png";
import {Section} from "lucide-react";

const MainSection = () => {
  return (
    <>
      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-3xl h-[620px] w-[720px] relative right-30">
            <video
              src={demoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Your Solar Energy <br /> Generation
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              This month, your solar system generated{" "}
              <span className="font-semibold text-blue-600">X kWh</span> of
              clean energy. Monitor performance trends, reduce electricity
              costs, and understand how much power you contribute back to the
              grid.
            </p>

            <div className="flex items-center gap-4 rounded-2xlp-4 max-w-sm">
              <img
                src={smallImg}
                alt="Solar maintenance"
                className="h-66 w-66 rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 items-center">

          <div className="space-y-8">

            <div className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
                ⚠
              </div>
              <span className="font-semibold text-slate-900">Problem</span>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Home solar systems can face reduced efficiency and missed savings
              due to panel shading, dirt, unexpected drops in output, or
              inverter issues. Stay ahead with instant anomaly alerts.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Due to panel shading, dirt, unexpected drops in output, or
              inverter issues. Stay ahead with instant anomaly alerts.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">›</span>
                Panel shading or dirt
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">›</span>
                Unexpected drop in output
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">›</span>
                Inverter errors
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl">›</span>
                Missed maintenance reminders
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={problemImg}
              alt="Anomaly detection"
              className="h-[700px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img
                src={image1}
                alt="Wind turbines"
                className="h-full w-full object-cover"
            />
          </div>

          <div className="rounded-3xl bg-blue-500 p-10 text-white flex flex-col justify-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-4 py-2 text-sm font-semibold text-black w-fit">
              ⚡ Solution
            </div>

            <h2 className="text-3xl font-bold leading-snug md:text-4xl">
              The Solar Home Dashboard empowers you to monitor your solar panels,
              receive instant alerts for anomalies, and optimize your energy usage
              for maximum savings and peace of mind.
            </h2>

            <ul className="mt-8 space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-lime-300">›</span>
                Real-time energy tracking
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-300">›</span>
                Anomaly alerts
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-300">›</span>
                Historical performance reports
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lime-300">›</span>
                Remote diagnostics & support
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 items-center">
          <div className="flex-row items-center gap-3 mb-10">
            <div>
              <span className="text-4xl font-bold">Goals:</span>
              <ul className="mt-8 space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-lime-300">›</span>
                  Maximize solar energy savings.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-300">›</span>
                  Detect and resolve issues early.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-300">›</span>
                  Track daily, weekly, and monthly output.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-300">›</span>
                  Get notified of anomalies instantly.
                </li>
              </ul>
            </div>
            <div className="pt-10">
              <span className="text-4xl font-bold">Needs:</span>
              <ul className="mt-8 space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-lime-300">›</span>
                  A simple dashboard for real-time monitoring.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-300">›</span>
                  Instant alerts for system anomalies.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-300">›</span>
                  Easy access to historical performance data.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-300">›</span>
                  Clear, actionable insights for better energy management.
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
                src={smallImg}
                alt="Anomaly detection"
                className="h-[700px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
    