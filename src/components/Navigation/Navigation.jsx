import { Link } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button.jsx";
import logo from "../../assets/logo-1.png";
const Navigation = () => {
  return (

    <nav className={"px-12 py-6 flex justify-between items-center"}>

      <Link to="/" className={"flex items-center gap-3"}>
        <div className="w-15 h-15 rounded-full bg-indigo-100 flex justify-center items-center">
          <img
              src={logo}
              alt="SunWind Analytics Logo"
              className="w-28 h-28 object-contai"
          />
        </div>
        <span className="font-[Inter] text-xl font-semibold">
          <span className="text-orange-500">Sun</span>
          <span className="text-blue-400">Wind</span>
          <span className="text-gray-400">-</span>
          <span className="text-cyan-400">Analytics</span>
        </span>
      </Link>

      <div className={"flex items-center gap-12"}>
        <SignedIn>
          <Link to="/dashboard" className={"flex items-center gap-3 px-3 py-2"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chart-column-icon lucide-chart-column logo w-4 h-4 block"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
            <span className="font-[Inter] text-sm font-medium">Dashboard</span>
          </Link>
        </SignedIn>

        <SignedOut>
          <div className="flex items-center gap-3">
            <Button asChild>
              <Link to="/sign-in" className="flex items-center px-3 py-2">
                Sign In
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/sign-up" className="flex items-center px-3 py-2">
                Sign Up
              </Link>
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navigation;
