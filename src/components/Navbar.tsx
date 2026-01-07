import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-[#111827]/80 backdrop-blur-xl border-b border-white/10 fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-orange-400">Safari Booking</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-300">
                    <Link to="/app/dashboard" className="hover:text-white">Home</Link>
                    <Link to="/app/booking" className="hover:text-white">Booking</Link>
                    <Link to="/app/contact" className="hover:text-white">Contact</Link>
                </ul>

                {/* Desktop Logout */}
                <Link
                    to="/login"
                    className="hidden md:block bg-orange-600 px-4 py-2 rounded-xl hover:bg-orange-700"
                >
                    Logout
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={() => setOpen(!open)}
                >
                    <span className="w-6 h-[3px] bg-white"></span>
                    <span className="w-6 h-[3px] bg-white"></span>
                    <span className="w-6 h-[3px] bg-white"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#111827] border-t border-white/10 px-6 py-4 space-y-4">
                    <Link to="/app/dashboard" className="block">Home</Link>
                    <Link to="/app/booking" className="block">Booking</Link>
                    <Link to="/app/contact" className="block">Contact</Link>
                    <Link to="/login" className="block text-center bg-orange-600 py-2 rounded-xl">
                        Logout
                    </Link>
                </div>
            )}
        </nav>
    );
};
