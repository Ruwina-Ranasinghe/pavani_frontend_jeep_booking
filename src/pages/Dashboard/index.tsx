import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Calendar, Truck, Ticket, Shield, Clock, Award } from "lucide-react";

export function Home() {
    const navigate = useNavigate();

    // 🔹 Quick Search State
    const [park, setPark] = useState("Minneriya National Park");
    const [date, setDate] = useState("");
    const [passengers, setPassengers] = useState("1-2 Passengers");

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0d1117] text-white">

            {/* Glow Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* HERO */}
            <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#0b0f16]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1671185049471-b3066c993f85?auto=format&fit=crop&w=1200&q=80"
                        className="w-full h-full object-cover opacity-40"
                        alt="Elephant herd"
                    />
                </div>

                <div className="relative z-10 text-center max-w-3xl">
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                        <h1 className="text-4xl font-bold mb-2">
                            Experience Wildlife Like Never Before
                        </h1>
                        <p className="text-gray-300 mb-6">
                            Witness the spectacular elephant gathering at Minneriya and Kaudulla.
                        </p>

                        <div className="flex gap-3 justify-center flex-wrap">
                            <Link
                                to="/app/booking"
                                className="px-6 py-3 bg-orange-600 rounded-xl"
                            >
                                Book Your Safari
                            </Link>
                            <Link
                                to="/register"
                                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔍 QUICK SEARCH */}
            <section className="py-10 bg-[#111827] -mt-12 relative z-20 max-w-6xl mx-4 lg:mx-auto rounded-3xl border border-white/10">
                <div className="px-6 py-8">
                    <h3 className="text-2xl font-bold text-center mb-6">
                        Quick Safari Search
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Park */}
                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Select Park</label>
                            <select
                                value={park}
                                onChange={(e) => setPark(e.target.value)}
                                className="w-full px-3 py-2 bg-[#0d1117] border border-gray-700 rounded-xl"
                            >
                                <option>Minneriya National Park</option>
                                <option>Kaudulla National Park</option>
                            </select>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-3 py-2 bg-[#0d1117] border border-gray-700 rounded-xl"
                            />
                        </div>

                        {/* Passengers */}
                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Passengers</label>
                            <select
                                value={passengers}
                                onChange={(e) => setPassengers(e.target.value)}
                                className="w-full px-3 py-2 bg-[#0d1117] border border-gray-700 rounded-xl"
                            >
                                <option>1-2 Passengers</option>
                                <option>3-4 Passengers</option>
                                <option>5-6 Passengers</option>
                            </select>
                        </div>

                        {/* Button */}
                        <div className="flex items-end">
                            <button
                                onClick={() =>
                                    navigate("/app/search-jeeps", {
                                        state: { park, date, passengers },
                                    })
                                }
                                className="w-full px-6 py-2 bg-orange-600 rounded-xl hover:bg-orange-700"
                            >
                                Search Jeeps
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-14 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Why Choose Safari Parks?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <Truck />, title: "Verified Jeep Operators" },
                            { icon: <Ticket />, title: "QR E-Tickets" },
                            { icon: <Shield />, title: "Secure Payments" },
                            { icon: <Calendar />, title: "Flexible Booking" },
                            { icon: <Clock />, title: "24/7 Support" },
                            { icon: <Award />, title: "Eco Tourism" },
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="bg-white/5 p-6 rounded-2xl border border-white/10"
                            >
                                <div className="mb-3 text-orange-400">{f.icon}</div>
                                <h4 className="font-semibold">{f.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animations */}
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
