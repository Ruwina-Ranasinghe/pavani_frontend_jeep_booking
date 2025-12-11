import { Link } from "react-router-dom";
import { Calendar, Truck, Ticket, Shield, Clock, Award } from "lucide-react";

export function Home() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">

            {/* Animated Blobs Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1671185049471-b3066c993f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMGhlcmQlMjBTcmklMjBMYW5rYXxlbnwxfHx8fDE3NjU0NTY0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Elephant herd"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Experience Wildlife Like Never Before
                        </h1>
                        <p className="text-gray-700 mb-6">
                            Witness the spectacular elephant gathering at Minneriya and Kaudulla National Parks. Book your jeep safari and create unforgettable memories.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/booking"
                                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl shadow-lg hover:from-orange-700 hover:to-amber-700 transition-all"
                            >
                                Book Your Safari
                            </Link>
                            <Link
                                to="/register"
                                className="px-8 py-4 bg-white text-orange-600 rounded-xl shadow-lg hover:bg-gray-100 transition-all"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Search Section */}
            <section className="py-12 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 -mt-16 relative z-20 max-w-6xl mx-4 lg:mx-auto rounded-3xl shadow-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Quick Safari Search
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm mb-2 text-gray-700">Select Park</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent">
                            <option>Minneriya National Park</option>
                            <option>Kaudulla National Park</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-gray-700">Date</label>
                        <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2 text-gray-700">Passengers</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent">
                            <option>1-2 Passengers</option>
                            <option>3-4 Passengers</option>
                            <option>5-6 Passengers</option>
                        </select>
                    </div>
                    <div className="flex items-end">
                        <Link
                            to="/booking"
                            className="w-full px-6 py-2 bg-gray-500 text-white rounded-xl text-center shadow-lg hover:from-forest-700 hover:to-forest-800 transition-all"
                        >
                            Search Jeeps
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Why Choose Safari Parks?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Truck className="w-6 h-6 text-orange-600" />, title: "Verified Jeep Operators", text: "All our jeep operators are licensed, experienced, and verified for your safety and comfort." },
                            { icon: <Ticket className="w-6 h-6 text-safari-600" />, title: "E-Tickets with QR Codes", text: "Instant digital tickets with QR codes for quick and hassle-free park entry." },
                            { icon: <Shield className="w-6 h-6 text-forest-600" />, title: "Secure Online Payments", text: "Safe and secure payment gateway integration for worry-free transactions." },
                            { icon: <Calendar className="w-6 h-6 text-safari-600" />, title: "Flexible Booking", text: "Book in advance or find available jeeps for same-day safaris with real-time availability." },
                            { icon: <Clock className="w-6 h-6 text-forest-600" />, title: "24/7 Support", text: "Round-the-clock customer support for bookings, queries, and assistance." },
                            { icon: <Award className="w-6 h-6 text-safari-600" />, title: "Eco-Tourism Focus", text: "Supporting sustainable tourism and wildlife conservation efforts in Sri Lanka." },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h4 className="mb-2 text-gray-800 font-semibold">{feature.title}</h4>
                                <p className="text-gray-700">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1652777175302-4a0f39b24fab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY1NDU2NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Elephant close up"
                            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">A Natural Wonder</h3>
                        <p className="text-gray-700 mb-4">
                            Witness one of the largest gatherings of Asian elephants in the world. During the dry season (May to October), hundreds of elephants migrate to Minneriya and Kaudulla National Parks.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Our experienced jeep operators will guide you through the parks, ensuring you get the best wildlife viewing experience while respecting nature and maintaining safe distances.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-forest-600 rounded-full"></span>
                                300+ elephants gather during peak season
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-forest-600 rounded-full"></span>
                                Best viewing times: Early morning and late afternoon
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-forest-600 rounded-full"></span>
                                Diverse wildlife including birds, deer, and leopards
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-forest-600 to-forest-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready for Your Safari Adventure?</h2>
                    <p className="text-xl mb-8 text-gray-200">
                        Join thousands of satisfied travelers who have experienced the magic of Sri Lanka's wildlife.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/booking"
                            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl shadow-lg hover:from-orange-700 hover:to-amber-700 transition-all"
                        >
                            Book Now
                        </Link>
                        <Link
                            to="/register"
                            className="px-8 py-4 bg-gray-500 text-forest-700 rounded-xl shadow-lg hover:bg-gray-100 transition-all"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            </section>

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
