import {Link} from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-[#0b0f16] border-t border-white/10 py-10 mt-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h3 className="text-xl font-semibold text-orange-500 mb-3">Safari Booking</h3>
                    <p className="text-gray-400">
                        Online Jeep & Ticket Booking for
                        Minneriya & Kaudulla National Parks.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
                    <ul className="space-y-1 text-gray-300">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/booking" className="hover:text-white">Booking</Link></li>
                        <li><Link to="/parks" className="hover:text-white">Parks</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
                    <p className="text-gray-300">Email: support@safari.lk</p>
                    <p className="text-gray-300">Hotline: +94 71 234 5678</p>
                    <p className="text-gray-300 mt-1">Open 24/7</p>
                </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
                © {new Date().getFullYear()} Safari Booking — All Rights Reserved.
            </p>
        </footer>
    );
}
