import { Link } from "react-router-dom";
import { Calendar, Truck, Ticket, Shield, Clock, Award } from "lucide-react";
import { useState } from "react";

export function Home() {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0d1117] text-white">

            {/* ===================== NAVBAR ===================== */}
            <nav className="w-full bg-[#111827]/80 backdrop-blur-xl border-b border-white/10 fixed top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <h1 className="text-2xl font-bold text-orange-400">Safari Booking</h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 text-gray-300">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/parks" className="hover:text-white">Parks</Link>
                        <Link to="/booking" className="hover:text-white">Booking</Link>
                        <Link to="/contact" className="hover:text-white">Contact</Link>
                    </ul>

                    {/* Desktop Login Button */}
                    <Link
                        to="/login"
                        className="hidden md:block bg-orange-600 px-4 py-2 rounded-xl hover:bg-orange-700"
                    >
                        Logout
                    </Link>

                    {/* Mobile Menu */}
                    <button
                        className="md:hidden flex flex-col gap-1"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="w-6 h-[3px] bg-white"></span>
                        <span className="w-6 h-[3px] bg-white"></span>
                        <span className="w-6 h-[3px] bg-white"></span>
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {open && (
                    <div className="md:hidden bg-[#111827] border-t border-white/10 px-6 py-4 space-y-4">
                        <Link to="/" className="block text-gray-300 hover:text-white">Home</Link>
                        <Link to="/parks" className="block text-gray-300 hover:text-white">Parks</Link>
                        <Link to="/booking" className="block text-gray-300 hover:text-white">Booking</Link>
                        <Link to="/contact" className="block text-gray-300 hover:text-white">Contact</Link>

                        <Link
                            to="/login"
                            className="block text-center bg-orange-600 py-2 rounded-xl hover:bg-orange-700"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </nav>

            {/* NAVBAR END */}

            {/* Fix space under fixed navbar */}
            <div className=""></div>

            {/* Glow Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Hero Section (Padding reduced) */}
            <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#0b0f16] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1671185049471-b3066c993f85?auto=format&fit=crop&w=1200&q=80"
                        alt="Elephant herd"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-3xl shadow-xl border border-white/10">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Experience Wildlife Like Never Before
                        </h1>
                        <p className="text-gray-300 mb-4">
                            Witness the spectacular elephant gathering at Minneriya and Kaudulla.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                to="/booking"
                                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl shadow-lg hover:opacity-90 transition-all"
                            >
                                Book Your Safari
                            </Link>
                            <Link
                                to="/register"
                                className="px-6 py-3 bg-white/10 text-orange-400 border border-white/20 rounded-xl shadow-lg hover:bg-white/20 transition-all"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Search (Padding removed) */}
            <section className="py-10 bg-[#111827] -mt-12 relative z-20 max-w-6xl mx-4 lg:mx-auto rounded-3xl shadow-2xl p-0 border border-white/10">
                <div className="px-4 py-6">
                    <h3 className="text-2xl font-bold text-white text-center mb-6">
                        Quick Safari Search
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Select Park</label>
                            <select className="w-full px-3 py-2 bg-[#0d1117] border border-gray-700 rounded-xl text-gray-200">
                                <option>Minneriya National Park</option>
                                <option>Kaudulla National Park</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Date</label>
                            <input
                                type="date"
                                className="w-full px-3 py-2 bg-[#0d1117] border border-gray-700 rounded-xl text-gray-200"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Passengers</label>
                            <select className="w-full px-3 py-2 bg-[#0d1117] border border-gray-700 rounded-xl text-gray-200">
                                <option>1-2 Passengers</option>
                                <option>3-4 Passengers</option>
                                <option>5-6 Passengers</option>
                            </select>
                        </div>

                        <div className="flex items-end">
                            <Link
                                to="/booking"
                                className="w-full px-6 py-2 bg-orange-600 text-white rounded-xl text-center shadow-lg hover:bg-orange-700 transition-all"
                            >
                                Search Jeeps
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Padding reduced) */}
            <section className="py-14 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">
                        Why Choose Safari Parks?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: <Truck className="w-6 h-6 text-orange-400" />, title: "Verified Jeep Operators", text: "Licensed and experienced jeep operators." },
                            { icon: <Ticket className="w-6 h-6 text-amber-400" />, title: "QR E-Tickets", text: "Instant digital tickets." },
                            { icon: <Shield className="w-6 h-6 text-green-400" />, title: "Secure Payments", text: "Visa, MasterCard, PayPal supported." },
                            { icon: <Calendar className="w-6 h-6 text-amber-300" />, title: "Flexible Booking", text: "Real-time availability." },
                            { icon: <Clock className="w-6 h-6 text-green-300" />, title: "24/7 Support", text: "Always here to help." },
                            { icon: <Award className="w-6 h-6 text-amber-400" />, title: "Eco-Tourism Focus", text: "Supporting wildlife conservation." },
                        ].map((f, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-lg hover:bg-white/10 transition">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                                    {f.icon}
                                </div>
                                <h4 className="mb-1 text-white font-semibold">{f.title}</h4>
                                <p className="text-gray-300">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-12 bg-[#111827]">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <img
                        src="https://images.unsplash.com/photo-1652777175302-4a0f39b24fab?auto=format&fit=crop&w=1200&q=80"
                        alt="Elephant close up"
                        className="rounded-3xl shadow-2xl w-full h-[380px] object-cover"
                    />

                    <div>
                        <h3 className="text-3xl font-bold text-white mb-3">A Natural Wonder</h3>

                        <p className="text-gray-300 mb-3">
                            Hundreds of elephants gather at Minneriya and Kaudulla.
                        </p>
                        <p className="text-gray-300 mb-5">
                            Our guides ensure a safe and unforgettable experience.
                        </p>

                        <ul className="space-y-1 text-gray-300">
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span>300+ elephants</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span>Best times: Sunrise / Sunset</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span>Birds, leopards, deer</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-5">Ready for Your Safari Adventure?</h2>
                    <p className="text-lg mb-7 text-white/90">
                        Join thousands of travelers who enjoyed Sri Lanka's wildlife.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/booking" className="px-6 py-3 bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-black/30 transition">Book Now</Link>
                        <Link to="/register" className="px-6 py-3 bg-white text-orange-600 rounded-xl hover:bg-gray-100 transition">Create Account</Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
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

            <style>{`
                @keyframes blob {
                    0%,100% { transform: translate(0,0) scale(1); }
                    33% { transform: translate(30px,-50px) scale(1.1); }
                    66% { transform: translate(-20px,20px) scale(0.9); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>

        </div>
    );
}
