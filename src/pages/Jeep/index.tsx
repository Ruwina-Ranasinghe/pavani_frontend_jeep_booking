import { useLocation, useNavigate } from "react-router-dom";
import { Truck } from "lucide-react";

const mockJeeps = [
    {
        id: 1,
        name: "Standard Safari Jeep",
        capacity: "1-4 Passengers",
        price: 12000,
    },
    {
        id: 2,
        name: "Luxury Safari Jeep",
        capacity: "1-6 Passengers",
        price: 18000,
    },
];

export function SearchJeeps() {
    const navigate = useNavigate();
    const { state } = useLocation();

    if (!state) {
        return <p className="text-white p-6">No search data found</p>;
    }

    return (
        <div className="min-h-screen bg-[#0d1117] text-white pt-24">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-orange-400 mb-6 text-center">
                    Available Jeeps
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {mockJeeps.map((jeep) => (
                        <div
                            key={jeep.id}
                            className="bg-white/10 border border-white/10 rounded-3xl p-6 shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Truck className="text-orange-400" />
                                <h2 className="text-xl font-semibold">{jeep.name}</h2>
                            </div>

                            <p className="text-gray-300">Capacity: {jeep.capacity}</p>
                            <p className="text-gray-300 mb-4">
                                Price: <strong>LKR {jeep.price}</strong>
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/app/booking", {
                                        state: {
                                            ...state,
                                            jeepType: jeep.name,
                                            price: jeep.price,
                                        },
                                    })
                                }
                                className="w-full bg-orange-600 py-2 rounded-xl hover:bg-orange-700"
                            >
                                Select Jeep
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
