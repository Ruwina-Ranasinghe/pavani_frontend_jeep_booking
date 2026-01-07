// src/pages/OperatorDashboard.tsx
import { useState } from "react";

interface Jeep {
    id: number;
    name: string;
    type: string;
    seats: number;
    availableDates: string[];
}

export function OperatorDashboard() {
    const [jeeps, setJeeps] = useState<Jeep[]>([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("Standard");
    const [seats, setSeats] = useState(4);
    const [date, setDate] = useState("");

    const addJeep = () => {
        if (!name || !date) return alert("Please fill Jeep name and available date");

        const newJeep: Jeep = {
            id: jeeps.length + 1,
            name,
            type,
            seats,
            availableDates: [date],
        };
        setJeeps([...jeeps, newJeep]);
        setName("");
        setDate("");
    };

    const addAvailability = (jeepId: number) => {
        const newDate = prompt("Enter new available date (YYYY-MM-DD):");
        if (!newDate) return;

        setJeeps((prev) =>
            prev.map((j) =>
                j.id === jeepId ? { ...j, availableDates: [...j.availableDates, newDate] } : j
            )
        );
    };

    return (
        <div className="min-h-screen bg-[#0d1117] text-white p-8">
            <h1 className="text-3xl font-bold mb-6">Operator Dashboard</h1>

            {/* Add Jeep Form */}
            <div className="bg-[#111827]/80 p-6 rounded-xl shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Register New Jeep</h2>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Jeep Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-3 py-2 rounded-lg text-black"
                    />
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="px-3 py-2 rounded-lg text-black"
                    >
                        <option>Standard</option>
                        <option>Luxury</option>
                    </select>
                    <input
                        type="number"
                        min={1}
                        max={10}
                        placeholder="Seats"
                        value={seats}
                        onChange={(e) => setSeats(Number(e.target.value))}
                        className="px-3 py-2 rounded-lg text-black"
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="px-3 py-2 rounded-lg text-black"
                    />
                    <button
                        onClick={addJeep}
                        className="px-6 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition"
                    >
                        Add Jeep
                    </button>
                </div>
            </div>

            {/* Jeep List */}
            <div className="bg-[#111827]/80 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">Your Jeeps & Availability</h2>
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr>
                        <th className="border-b p-2">Name</th>
                        <th className="border-b p-2">Type</th>
                        <th className="border-b p-2">Seats</th>
                        <th className="border-b p-2">Available Dates</th>
                        <th className="border-b p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {jeeps.map((jeep) => (
                        <tr key={jeep.id}>
                            <td className="border-b p-2">{jeep.name}</td>
                            <td className="border-b p-2">{jeep.type}</td>
                            <td className="border-b p-2">{jeep.seats}</td>
                            <td className="border-b p-2">
                                {jeep.availableDates.join(", ")}
                            </td>
                            <td className="border-b p-2">
                                <button
                                    onClick={() => addAvailability(jeep.id)}
                                    className="px-2 py-1 bg-green-600 rounded hover:bg-green-700"
                                >
                                    Add Date
                                </button>
                            </td>
                        </tr>
                    ))}
                    {jeeps.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-gray-400 p-2 text-center">
                                No jeeps registered yet.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
