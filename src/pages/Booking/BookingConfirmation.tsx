import { useLocation, Link } from "react-router-dom";
import QRCode from "react-qr-code";
import { CheckCircle, Download, Mail, Calendar, Clock, MapPin, Users, Truck, CreditCard, Phone, Share2, Printer } from "lucide-react";
import { useState } from "react";

export function BookingConfirmation() {
    const { state } = useLocation();
    const [showShareModal, setShowShareModal] = useState(false);

    if (!state) {
        return (
            <div className="min-h-screen bg-[#0d1117] text-white flex justify-center items-center">
                <div className="text-center">
                    <p className="text-2xl mb-4">No booking found</p>
                    <Link to="/booking" className="px-6 py-3 bg-orange-600 rounded-xl inline-block hover:bg-orange-700">
                        Make a Booking
                    </Link>
                </div>
            </div>
        );
    }

    const bookingId = `SAF${Date.now().toString().slice(-8)}`;
    const bookingDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const bookingTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const handleDownload = () => {
        // Simulate download
        alert("E-Ticket downloaded! Check your downloads folder.");
    };

    const handlePrint = () => {
        window.print();
    };

    const handleShare = () => {
        setShowShareModal(true);
    };

    return (
        <div className="min-h-screen bg-[#0d1117] text-white py-12 px-4">

            {/* Success Animation Section */}
            <div className="max-w-4xl mx-auto text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-6 animate-bounce">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Booking Confirmed!
                </h1>
                <p className="text-xl text-gray-400 mb-2">
                    Your safari adventure is all set! 🎉
                </p>
                <p className="text-gray-500">
                    Confirmation sent to your email
                </p>
            </div>

            {/* Main Ticket */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

                    {/* Header with Park Image */}
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1671185049471-b3066c993f85?auto=format&fit=crop&w=1200&q=80"
                            alt="Safari"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-6">
                            <div className="inline-block px-4 py-2 bg-green-600 rounded-full text-sm font-semibold mb-2">
                                ✓ CONFIRMED
                            </div>
                            <h2 className="text-2xl font-bold">{state.park}</h2>
                        </div>
                    </div>

                    {/* Booking Details */}
                    <div className="p-8">

                        {/* Booking ID and Date */}
                        <div className="flex flex-wrap justify-between items-center mb-8 pb-6 border-b border-white/10">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Booking Reference</p>
                                <p className="text-2xl font-bold text-orange-400">{bookingId}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500 mb-1">Booked On</p>
                                <p className="font-semibold">{bookingDate}</p>
                                <p className="text-sm text-gray-400">{bookingTime}</p>
                            </div>
                        </div>

                        {/* Trip Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                            {/* Left Column */}
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Safari Date</p>
                                        <p className="font-semibold text-lg">
                                            {new Date(state.date).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Time Slot</p>
                                        <p className="font-semibold text-lg">
                                            {state.timeSlot === 'morning' ? '6:00 AM - 10:00 AM' : '2:00 PM - 6:00 PM'}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {state.timeSlot === 'morning' ? 'Morning Safari 🌅' : 'Afternoon Safari 🌄'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Passengers</p>
                                        <p className="font-semibold text-lg">
                                            {state.passengers} Person{state.passengers > 1 ? 's' : ''}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Meeting Point</p>
                                        <p className="font-semibold">Main Gate</p>
                                        <p className="text-sm text-gray-400">{state.park}</p>
                                        <p className="text-xs text-green-400 mt-1">
                                            📍 Arrive 15 mins early
                                        </p>
                                    </div>
                                </div>

                                {state.jeep && (
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Truck className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Vehicle</p>
                                            <p className="font-semibold">{state.jeep.name}</p>
                                            <p className="text-sm text-gray-400">{state.jeep.type} • Capacity: {state.jeep.capacity}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CreditCard className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Payment Status</p>
                                        <p className="font-semibold text-green-400">✓ Paid</p>
                                        <p className="text-sm text-gray-400">Credit Card</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* QR Code Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                            {/* QR Code */}
                            <div className="bg-gradient-to-br from-orange-600/10 to-amber-600/10 border border-orange-500/20 rounded-2xl p-6 text-center">
                                <h3 className="font-bold mb-4 flex items-center justify-center gap-2">
                                    <span className="text-orange-400">Your E-Ticket</span>
                                </h3>
                                <div className="bg-white p-6 rounded-xl inline-block mb-4">
                                    <QRCode value={bookingId} size={160} />
                                </div>
                                <p className="text-sm text-gray-400">
                                    Show this QR code at the park entrance
                                </p>
                            </div>

                            {/* Price Breakdown */}
                            <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
                                <h3 className="font-bold mb-4">Payment Summary</h3>
                                <div className="space-y-3 mb-4">
                                    {state.jeep && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Jeep Rental</span>
                                            <span className="font-semibold">LKR {state.jeep.price.toLocaleString()}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Park Entry Fee</span>
                                        <span className="font-semibold">LKR {(60 * state.passengers).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Processing Fee</span>
                                        <span>LKR 0</span>
                                    </div>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">Total Paid</span>
                                        <span className="text-2xl font-bold text-orange-400">
                                            LKR {state.totalPrice.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Important Information */}
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-8">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <span>📋</span>
                                Important Information
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Arrive at least 15 minutes before your scheduled time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Bring a valid ID and show this QR code at entrance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Wear comfortable clothes and bring sunscreen & hat</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Camera equipment is allowed (no flash photography near animals)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Free cancellation up to 24 hours before the trip</span>
                                </li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <button
                                onClick={handleDownload}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 rounded-xl hover:bg-orange-700 transition"
                            >
                                <Download className="w-5 h-5" />
                                Download Ticket
                            </button>

                            <button
                                onClick={handlePrint}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition"
                            >
                                <Printer className="w-5 h-5" />
                                Print
                            </button>

                            <button
                                onClick={handleShare}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition"
                            >
                                <Share2 className="w-5 h-5" />
                                Share
                            </button>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/app/dashboard"
                                className="flex-1 text-center px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold hover:opacity-90 transition shadow-lg"
                            >
                                View My Bookings
                            </Link>
                            <Link
                                to="/booking"
                                className="flex-1 text-center px-6 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition"
                            >
                                Book Another Safari
                            </Link>
                        </div>

                        {/* Support Contact */}
                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                            <p className="text-sm text-gray-400 mb-3">Need help with your booking?</p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm">
                                <a href="mailto:support@safari.lk" className="flex items-center gap-2 text-orange-400 hover:text-orange-300">
                                    <Mail className="w-4 h-4" />
                                    support@safari.lk
                                </a>
                                <a href="tel:+94712345678" className="flex items-center gap-2 text-green-400 hover:text-green-300">
                                    <Phone className="w-4 h-4" />
                                    +94 71 234 5678
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info Card */}
                <div className="mt-6 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-6 text-center">
                    <p className="text-xl font-semibold mb-2">🎉 Excited for your adventure?</p>
                    <p className="text-white/90">
                        Follow us on social media for wildlife updates and safari tips!
                    </p>
                </div>
            </div>

            {/* Share Modal */}
            {showShareModal && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setShowShareModal(false)}
                >
                    <div
                        className="bg-[#111827] border border-white/10 rounded-3xl p-8 max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold mb-6">Share Your Booking</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition">
                                <Mail className="w-5 h-5" />
                                Share via Email
                            </button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition">
                                <Phone className="w-5 h-5" />
                                Share via SMS
                            </button>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(bookingId);
                                    alert("Booking ID copied!");
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition"
                            >
                                Copy Booking ID
                            </button>
                        </div>
                        <button
                            onClick={() => setShowShareModal(false)}
                            className="w-full mt-6 px-6 py-3 bg-orange-600 rounded-xl hover:bg-orange-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce {
                    animation: bounce 2s infinite;
                }
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .max-w-4xl, .max-w-4xl * {
                        visibility: visible;
                    }
                    .max-w-4xl {
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                }
            `}</style>
        </div>
    );
}