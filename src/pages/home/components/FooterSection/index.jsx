import {
    Facebook,
    Twitter,
    Linkedin,
    Github,
    MapPin,
    Phone,
    Mail,
    Zap,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

                    {/* BRAND */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400">
                                <Zap className="h-5 w-5 text-black" />
                            </div>
                            <span className="text-xl font-bold text-slate-900">
                SunWind Analytics
              </span>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            Revolutionizing solar and wind energy monitoring through
                            real-time analytics, predictive insights, and anomaly detection.
                        </p>

                        <div className="flex items-center gap-3">
                            <a className="rounded-full bg-slate-100 p-2 hover:bg-slate-200">
                                <Facebook size={18} />
                            </a>
                            <a className="rounded-full bg-slate-100 p-2 hover:bg-slate-200">
                                <Twitter size={18} />
                            </a>
                            <a className="rounded-full bg-slate-100 p-2 hover:bg-slate-200">
                                <Linkedin size={18} />
                            </a>
                            <a className="rounded-full bg-slate-100 p-2 hover:bg-slate-200">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* SOLUTIONS */}
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900">Solutions</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li>Solar Panel Monitoring</li>
                            <li>Wind Energy Analytics</li>
                            <li>Predictive Analytics</li>
                            <li>Real-time Alerts</li>
                            <li>Performance Optimization</li>
                            <li>Maintenance Planning</li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900">Resources</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li>Documentation</li>
                            <li>API Reference</li>
                            <li>Case Studies</li>
                            <li>White Papers</li>
                            <li>Blog</li>
                            <li>Support Center</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900">Get in Touch</h3>

                        <ul className="space-y-4 text-slate-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-lime-500" />
                                <span>
                  Colombo Innovation Hub <br />
                  Sri Lanka
                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-lime-500" />
                                +94 77 123 4567
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-lime-500" />
                                contact@sunwindanalytics.com
                            </li>
                        </ul>

                        {/* SUBSCRIBE */}
                        <div className="mt-6">
                            <p className="mb-2 font-medium text-slate-900">Stay Updated</p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                            />
                            <button className="mt-3 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-slate-200 py-6">
                <div className="mx-auto max-w-7xl px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-500">
                    <div className="flex gap-4">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookie Policy</span>
                        <span>Accessibility</span>
                    </div>

                    <p>© 2025 SunWind Analytics. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
