import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, MapPin, Clock, Star, Shield, Check,Truck, Camera } from "lucide-react";

export function Booking() {
    const navigate = useNavigate();
    const [park, setPark] = useState("minneriya");
    const [date, setDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [passengers, setPassengers] = useState(2);
    const [selectedJeep, setSelectedJeep] = useState<string | null>(null);
    // const [showInfo, setShowInfo] = useState<string | null>(null);

    const parks = {
        minneriya: {
            name: "Minneriya National Park",
            image: "https://images.unsplash.com/photo-1671185049471-b3066c993f85?auto=format&fit=crop&w=1200&q=80",
            description: "Famous for the gathering of 300+ wild elephants",
            bestTime: "Aug-Sep (Dry Season)",
            distance: "182 km from Colombo",
            duration: "3-4 hours",
            highlights: ["Elephant Gathering", "Bird Watching", "Scenic Reservoir"]
        },
        kaudulla: {
            name: "Kaudulla National Park",
            image: "https://images.unsplash.com/photo-1652777175302-4a0f39b24fab?auto=format&fit=crop&w=1200&q=80",
            description: "Pristine wilderness with diverse wildlife",
            bestTime: "Apr-Oct (Migration Period)",
            distance: "190 km from Colombo",
            duration: "3-4 hours",
            highlights: ["Elephant Herds", "Leopard Sightings", "Water Buffalo"]
        }
    };

    const timeSlots = [
        { value: "morning", label: "Morning Safari", time: "6:00 AM - 10:00 AM", icon: "🌅", popular: true },
        { value: "afternoon", label: "Afternoon Safari", time: "2:00 PM - 6:00 PM", icon: "🌄", popular: false },
    ];

    const jeeps = [
        {
            id: "jeep1",
            name: "Safari King 4x4",
            type: "Premium",
            image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
            capacity: 6,
            price: 8500,
            rating: 4.8,
            reviews: 124,
            features: ["AC", "Roof Hatch", "Binoculars", "Water Bottles", "Expert Guide"],
            popular: true
        },
        {
            id: "jeep2",
            name: "Wild Explorer",
            type: "Standard",
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
            capacity: 6,
            price: 7500,
            rating: 4.6,
            reviews: 98,
            features: ["Comfortable Seating", "Camera Support", "Guide", "Refreshments"],
            popular: false
        },
        {
            id: "jeep3",
            name: "Nature Cruiser",
            type: "Budget",
            image: "https://images.unsplash.com/photo-1624806992928-380fb5421d7c?auto=format&fit=crop&w=800&q=80",
            capacity: 4,
            price: 6500,
            rating: 4.5,
            reviews: 76,
            features: ["Basic Comfort", "Local Guide", "Water Supply"],
            popular: false
        }
    ];

    const selectedParkData = parks[park as keyof typeof parks];
    const selectedJeepData = jeeps.find(j => j.id === selectedJeep);
    const totalPrice = selectedJeepData ? selectedJeepData.price : 0;
    const entryFee = 60; // Local entry fee

    const handleBooking = () => {
        if (!date || !timeSlot || !selectedJeep) {
            alert("Please complete all booking details");
            return;
        }
        navigate("/app/payment", {
            state: {
                park: selectedParkData.name,
                date,
                timeSlot,
                passengers,
                jeep: selectedJeepData,
                totalPrice: totalPrice + entryFee
            }
        });
    };

    return (
        <div className="min-h-screen bg-[#0d1117] text-white pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                        Book Your Safari Adventure
                    </h1>
                    <p className="text-gray-400 text-lg">Experience Sri Lanka's magnificent wildlife up close</p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-10 gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                            <Check className="w-5 h-5" />
                        </div>
                        <span className="text-sm">Choose Park</span>
                    </div>
                    <div className="w-16 h-0.5 bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full ${date && timeSlot ? 'bg-orange-600' : 'bg-gray-700'} flex items-center justify-center`}>
                            {date && timeSlot ? <Check className="w-5 h-5" /> : '2'}
                        </div>
                        <span className="text-sm">Select Date & Time</span>
                    </div>
                    <div className="w-16 h-0.5 bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full ${selectedJeep ? 'bg-orange-600' : 'bg-gray-700'} flex items-center justify-center`}>
                            {selectedJeep ? <Check className="w-5 h-5" /> : '3'}
                        </div>
                        <span className="text-sm">Choose Jeep</span>
                    </div>
                </div>

                {/* Park Selection */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-orange-400" />
                        Choose Your Destination
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(parks).map(([key, parkData]) => (
                            <div
                                key={key}
                                onClick={() => setPark(key)}
                                className={`cursor-pointer group relative overflow-hidden rounded-3xl border-2 transition-all ${
                                    park === key
                                        ? 'border-orange-500 shadow-xl shadow-orange-500/20'
                                        : 'border-white/10 hover:border-white/30'
                                }`}
                            >
                                <div className="relative h-64">
                                    <img
                                        src={parkData.image}
                                        alt={parkData.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    {park === key && (
                                        <div className="absolute top-4 right-4 bg-orange-600 px-3 py-1 rounded-full flex items-center gap-2">
                                            <Check className="w-4 h-4" />
                                            <span className="text-sm font-semibold">Selected</span>
                                        </div>
                                    )}

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-2xl font-bold mb-2">{parkData.name}</h3>
                                        <p className="text-gray-200 text-sm mb-3">{parkData.description}</p>

                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded">
                                                <Calendar className="w-3 h-3" />
                                                <span>{parkData.bestTime}</span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded">
                                                <Clock className="w-3 h-3" />
                                                <span>{parkData.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-[#111827]">
                                    <div className="flex flex-wrap gap-2">
                                        {parkData.highlights.map((highlight, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Date & Time Selection */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Calendar className="w-6 h-6 text-orange-400" />
                        Select Date & Time
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Date Picker */}
                        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                            <label className="block text-sm font-semibold mb-3 text-gray-300">
                                Choose Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                            />
                            <p className="text-xs text-gray-500 mt-2">Best viewing months: May - September</p>
                        </div>

                        {/* Passengers */}
                        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
                            <label className="block text-sm font-semibold mb-3 text-gray-300 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Number of Passengers
                            </label>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setPassengers(Math.max(1, passengers - 1))}
                                    className="w-12 h-12 bg-[#0d1117] border border-gray-700 rounded-xl hover:bg-gray-800"
                                >
                                    -
                                </button>
                                <span className="text-2xl font-bold w-12 text-center">{passengers}</span>
                                <button
                                    onClick={() => setPassengers(Math.min(8, passengers + 1))}
                                    className="w-12 h-12 bg-[#0d1117] border border-gray-700 rounded-xl hover:bg-gray-800"
                                >
                                    +
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Maximum 8 passengers per jeep</p>
                        </div>
                    </div>

                    {/* Time Slots */}
                    <div className="mt-6">
                        <label className="block text-sm font-semibold mb-3 text-gray-300">
                            Choose Time Slot
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {timeSlots.map((slot) => (
                                <div
                                    key={slot.value}
                                    onClick={() => setTimeSlot(slot.value)}
                                    className={`relative cursor-pointer p-5 rounded-2xl border-2 transition-all ${
                                        timeSlot === slot.value
                                            ? 'border-orange-500 bg-orange-500/10'
                                            : 'border-white/10 bg-[#111827] hover:border-white/30'
                                    }`}
                                >
                                    {slot.popular && (
                                        <div className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                                            Popular
                                        </div>
                                    )}
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl">{slot.icon}</div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold mb-1">{slot.label}</h4>
                                            <p className="text-sm text-gray-400">{slot.time}</p>
                                        </div>
                                        {timeSlot === slot.value && (
                                            <Check className="w-6 h-6 text-orange-500" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Jeep Selection */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Truck className="w-6 h-6 text-orange-400" />
                        Choose Your Jeep
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {jeeps.map((jeep) => (
                            <div
                                key={jeep.id}
                                onClick={() => setSelectedJeep(jeep.id)}
                                className={`cursor-pointer rounded-2xl border-2 overflow-hidden transition-all ${
                                    selectedJeep === jeep.id
                                        ? 'border-orange-500 shadow-xl shadow-orange-500/20'
                                        : 'border-white/10 bg-[#111827] hover:border-white/30'
                                }`}
                            >
                                <div className="relative h-48">
                                    <img
                                        src={jeep.image}
                                        alt={jeep.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {jeep.popular && (
                                        <div className="absolute top-3 left-3 bg-amber-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                                            ⭐ Most Popular
                                        </div>
                                    )}
                                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                                        {jeep.type}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2">{jeep.name}</h3>

                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            <span className="text-sm font-semibold">{jeep.rating}</span>
                                        </div>
                                        <span className="text-xs text-gray-500">({jeep.reviews} reviews)</span>
                                        <div className="flex items-center gap-1 ml-auto">
                                            <Users className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm">Max {jeep.capacity}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-1 mb-4">
                                        {jeep.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                                <Check className="w-3 h-3 text-green-400" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <div>
                                            <p className="text-xs text-gray-500">Price per trip</p>
                                            <p className="text-2xl font-bold text-orange-400">
                                                LKR {jeep.price.toLocaleString()}
                                            </p>
                                        </div>
                                        {selectedJeep === jeep.id && (
                                            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                                                <Check className="w-6 h-6" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Booking Summary & Payment */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* What to Expect */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-orange-600/10 to-amber-600/10 border border-orange-500/20 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Camera className="w-5 h-5 text-orange-400" />
                            <h3 className="text-xl font-bold">What to Expect</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    🐘
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Wildlife Sightings</h4>
                                    <p className="text-sm text-gray-400">Elephants, deer, buffalo, and exotic birds</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    👨‍🏫
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Expert Guide</h4>
                                    <p className="text-sm text-gray-400">Knowledgeable local guide included</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    🛡️
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Safe Experience</h4>
                                    <p className="text-sm text-gray-400">Licensed operators & insured vehicles</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    💧
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Refreshments</h4>
                                    <p className="text-sm text-gray-400">Complimentary water bottles provided</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Price Summary */}
                    <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 h-fit sticky top-24">
                        <h3 className="text-xl font-bold mb-4">Booking Summary</h3>

                        {selectedParkData && (
                            <div className="space-y-3 mb-6 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Park</span>
                                    <span className="font-semibold">{selectedParkData.name}</span>
                                </div>
                                {date && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Date</span>
                                        <span className="font-semibold">{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                )}
                                {timeSlot && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Time</span>
                                        <span className="font-semibold">{timeSlots.find(t => t.value === timeSlot)?.label}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Passengers</span>
                                    <span className="font-semibold">{passengers} person{passengers > 1 ? 's' : ''}</span>
                                </div>
                                {selectedJeepData && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Jeep</span>
                                        <span className="font-semibold">{selectedJeepData.name}</span>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="border-t border-white/10 pt-4 mb-4">
                            <div className="space-y-2 text-sm mb-3">
                                {selectedJeepData && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Jeep Rental</span>
                                        <span>LKR {selectedJeepData.price.toLocaleString()}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Park Entry Fee (Local)</span>
                                    <span>LKR {entryFee * passengers}</span>
                                </div>
                            </div>
                            <div className="flex justify-between text-xl font-bold pt-3 border-t border-white/10">
                                <span>Total</span>
                                <span className="text-orange-400">
                                    LKR {(totalPrice + (entryFee * passengers)).toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={handleBooking}
                            disabled={!date || !timeSlot || !selectedJeep}
                            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 py-4 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                        >
                            {!date || !timeSlot || !selectedJeep
                                ? 'Complete Selection'
                                : 'Proceed to Payment'
                            }
                        </button>

                        <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
                            <Shield className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>Secure payment • Free cancellation up to 24 hours before</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}