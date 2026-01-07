import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreditCard, Lock, Calendar, Users, MapPin, Clock, Truck, AlertCircle, CheckCircle, ArrowLeft, Shield, Info } from "lucide-react";

export function Payment() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const booking = state;

    const [paymentMethod, setPaymentMethod] = useState("card");
    const [cardDetails, setCardDetails] = useState({
        number: "",
        name: "",
        expiry: "",
        cvv: ""
    });
    const [billingInfo, setBillingInfo] = useState({
        email: "",
        phone: "",
        address: ""
    });
    const [processing, setProcessing] = useState(false);
    const [agreed, setAgreed] = useState(false);

    if (!booking) {
        return (
            <div className="min-h-screen bg-[#0d1117] text-white flex justify-center items-center">
                <div className="text-center">
                    <p className="text-2xl mb-4">No booking data found</p>
                    <button
                        onClick={() => navigate("/booking")}
                        className="px-6 py-3 bg-orange-600 rounded-xl hover:bg-orange-700"
                    >
                        Go to Booking
                    </button>
                </div>
            </div>
        );
    }

    // Calculate totals (matching booking page logic)
    const jeepPrice = booking.jeep?.price || 0;
    const entryFee = 60 * (booking.passengers || 1);
    const serviceFee = 0; // Free for now
    const total = jeepPrice + entryFee + serviceFee;

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreed) {
            alert("Please agree to the terms and conditions");
            return;
        }

        setProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setProcessing(false);
            navigate("/app/booking-confirmation", {
                state: {
                    ...booking,
                    totalPrice: total,
                    bookingId: `SAF${Date.now().toString().slice(-8)}`,
                    paymentMethod: paymentMethod
                },
            });
        }, 2000);
    };

    const formatCardNumber = (value: string) => {
        const cleaned = value.replace(/\s/g, '');
        const chunks = cleaned.match(/.{1,4}/g);
        return chunks ? chunks.join(' ') : cleaned;
    };

    const formatExpiry = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length >= 2) {
            return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
        }
        return cleaned;
    };

    return (
        <div className="min-h-screen bg-[#0d1117] text-white py-12 px-4">

            {/* Back Button */}
            <div className="max-w-7xl mx-auto mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Booking
                </button>
            </div>

            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-8">
                <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Secure Payment
                </h1>
                <p className="text-gray-400 flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />
                    Your payment is secure and encrypted
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Side - Payment Form */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Payment Method Selection */}
                        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <CreditCard className="w-6 h-6 text-orange-400" />
                                Payment Method
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button
                                    onClick={() => setPaymentMethod("card")}
                                    className={`p-4 rounded-xl border-2 transition ${
                                        paymentMethod === "card"
                                            ? "border-orange-500 bg-orange-500/10"
                                            : "border-white/10 bg-white/5 hover:border-white/30"
                                    }`}
                                >
                                    <CreditCard className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                                    <p className="text-sm font-semibold">Credit/Debit</p>
                                    <p className="text-xs text-gray-400 mt-1">Visa, Mastercard</p>
                                </button>

                                <button
                                    onClick={() => setPaymentMethod("paypal")}
                                    className={`p-4 rounded-xl border-2 transition ${
                                        paymentMethod === "paypal"
                                            ? "border-blue-500 bg-blue-500/10"
                                            : "border-white/10 bg-white/5 hover:border-white/30"
                                    }`}
                                >
                                    <div className="text-3xl mb-2">💳</div>
                                    <p className="text-sm font-semibold">PayPal</p>
                                    <p className="text-xs text-gray-400 mt-1">Fast & Secure</p>
                                </button>

                                <button
                                    onClick={() => setPaymentMethod("bank")}
                                    className={`p-4 rounded-xl border-2 transition ${
                                        paymentMethod === "bank"
                                            ? "border-green-500 bg-green-500/10"
                                            : "border-white/10 bg-white/5 hover:border-white/30"
                                    }`}
                                >
                                    <div className="text-3xl mb-2">🏦</div>
                                    <p className="text-sm font-semibold">Bank Transfer</p>
                                    <p className="text-xs text-gray-400 mt-1">Direct Payment</p>
                                </button>
                            </div>
                        </div>

                        {/* Card Payment Form */}
                        {paymentMethod === "card" && (
                            <form onSubmit={handlePayment} className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                                <h3 className="text-lg font-bold mb-6">Card Information</h3>

                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                                            Card Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                required
                                                maxLength={19}
                                                value={cardDetails.number}
                                                onChange={(e) => setCardDetails({
                                                    ...cardDetails,
                                                    number: formatCardNumber(e.target.value)
                                                })}
                                                className="w-full px-4 py-3 pl-12 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                                placeholder="1234 5678 9012 3456"
                                            />
                                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                                            Cardholder Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={cardDetails.name}
                                            onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                                            className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                            placeholder="JOHN DOE"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-300">
                                                Expiry Date
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                maxLength={5}
                                                value={cardDetails.expiry}
                                                onChange={(e) => setCardDetails({
                                                    ...cardDetails,
                                                    expiry: formatExpiry(e.target.value)
                                                })}
                                                className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center gap-1">
                                                CVV
                                                <Info className="w-4 h-4 text-gray-500" />
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                maxLength={4}
                                                value={cardDetails.cvv}
                                                onChange={(e) => setCardDetails({
                                                    ...cardDetails,
                                                    cvv: e.target.value.replace(/\D/g, '')
                                                })}
                                                className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                                placeholder="123"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}

                        {/* PayPal Option */}
                        {paymentMethod === "paypal" && (
                            <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 text-center">
                                <div className="text-6xl mb-4">💳</div>
                                <h3 className="text-xl font-bold mb-2">Pay with PayPal</h3>
                                <p className="text-gray-400 mb-6">You'll be redirected to PayPal to complete your payment</p>
                                <button
                                    onClick={handlePayment}
                                    disabled={processing || !agreed}
                                    className="px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                >
                                    Continue to PayPal
                                </button>
                            </div>
                        )}

                        {/* Bank Transfer Option */}
                        {paymentMethod === "bank" && (
                            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                                <h3 className="text-lg font-bold mb-4">Bank Transfer Details</h3>
                                <div className="bg-white/5 rounded-xl p-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Bank Name:</span>
                                        <span className="font-semibold">Commercial Bank of Ceylon</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Account Name:</span>
                                        <span className="font-semibold">Safari Bookings Ltd</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Account Number:</span>
                                        <span className="font-semibold">1234567890</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">SWIFT Code:</span>
                                        <span className="font-semibold">CCEYLKLX</span>
                                    </div>
                                </div>
                                <p className="text-sm text-amber-400 mt-4 flex items-start gap-2">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    Please use your booking reference in the transfer description
                                </p>
                            </div>
                        )}

                        {/* Billing Information */}
                        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                            <h3 className="text-lg font-bold mb-4">Billing Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={billingInfo.email}
                                        onChange={(e) => setBillingInfo({...billingInfo, email: e.target.value})}
                                        className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={billingInfo.phone}
                                        onChange={(e) => setBillingInfo({...billingInfo, phone: e.target.value})}
                                        className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                        placeholder="+94 71 234 5678"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-1 w-5 h-5 accent-orange-600"
                                />
                                <span className="text-sm text-gray-300">
                                    I agree to the <a href="#" className="text-orange-400 hover:text-orange-300">Terms and Conditions</a> and <a href="#" className="text-orange-400 hover:text-orange-300">Privacy Policy</a>. I understand the cancellation policy and confirm all booking details are correct.
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Right Side - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Booking Summary</h2>

                            {/* Trip Details */}
                            <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Destination</p>
                                        <p className="font-semibold">{booking.park}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Date</p>
                                        <p className="font-semibold">
                                            {new Date(booking.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Time Slot</p>
                                        <p className="font-semibold">
                                            {booking.timeSlot === 'morning' ? 'Morning Safari' : 'Afternoon Safari'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Users className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sm text-gray-400">Passengers</p>
                                        <p className="font-semibold">{booking.passengers} Person{booking.passengers > 1 ? 's' : ''}</p>
                                    </div>
                                </div>

                                {booking.jeep && (
                                    <div className="flex items-start gap-3">
                                        <Truck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-400">Vehicle</p>
                                            <p className="font-semibold">{booking.jeep.name}</p>
                                            <p className="text-xs text-gray-500">{booking.jeep.type}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Jeep Rental</span>
                                    <span className="font-semibold">LKR {jeepPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Park Entry ({booking.passengers} × LKR 60)</span>
                                    <span className="font-semibold">LKR {entryFee.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Service Fee</span>
                                    <span className="font-semibold text-green-400">FREE</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-bold">Total Amount</span>
                                <span className="text-3xl font-bold text-orange-400">
                                    LKR {total.toLocaleString()}
                                </span>
                            </div>

                            {/* Pay Button */}
                            {paymentMethod === "card" && (
                                <button
                                    onClick={handlePayment}
                                    disabled={processing || !agreed}
                                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg flex items-center justify-center gap-2"
                                >
                                    {processing ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <Lock className="w-5 h-5" />
                                            Pay LKR {total.toLocaleString()}
                                        </>
                                    )}
                                </button>
                            )}

                            {/* Security Badges */}
                            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Shield className="w-5 h-5 text-green-400" />
                                    <span>Secure SSL Encrypted Payment</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>100% Money-Back Guarantee</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Lock className="w-5 h-5 text-blue-400" />
                                    <span>Your data is protected</span>
                                </div>
                            </div>

                            {/* Payment Logos */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-xs text-gray-500 mb-3 text-center">We Accept</p>
                                <div className="flex justify-center gap-3 flex-wrap opacity-60">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-8" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
                                    <div className="text-2xl">💳</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </div>
    );
}