import { useState } from "react";
import { Users, ClipboardList, DollarSign, CheckSquare, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Papa from "papaparse";

type Operator = { id: number; name: string; status: "Pending" | "Active" };
type Booking = { id: number; user: string; park: string; date: string; status: "Pending" | "Confirmed"; amount: number };

export default function AdminDashboard() {
    const [operators, setOperators] = useState<Operator[]>([
        { id: 1, name: "John Doe", status: "Pending" },
        { id: 2, name: "Jane Smith", status: "Active" },
    ]);

    const [bookings] = useState<Booking[]>([
        { id: 1, user: "Alice", park: "Minneriya", date: "2026-01-10", status: "Confirmed", amount: 120 },
        { id: 2, user: "Bob", park: "Kaudulla", date: "2026-01-12", status: "Pending", amount: 100 },
        { id: 3, user: "Charlie", park: "Minneriya", date: "2026-01-15", status: "Confirmed", amount: 150 },
    ]);

    // Approve operator
    const approveOperator = (id: number) => {
        setOperators(prev =>
            prev.map(op => (op.id === id ? { ...op, status: "Active" } : op))
        );
    };

    // Generate CSV
    const exportBookings = () => {
        const csv = Papa.unparse(bookings);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "bookings_report.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Chart data: bookings per park
    const chartData = [
        { park: "Minneriya", Bookings: bookings.filter(b => b.park === "Minneriya").length },
        { park: "Kaudulla", Bookings: bookings.filter(b => b.park === "Kaudulla").length },
    ];

    return (
        <div className="min-h-screen bg-[#0d1117] text-white p-8">
            <h1 className="text-4xl font-bold mb-8 text-orange-400">Park Administration Dashboard</h1>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                    <Users className="w-8 h-8 text-orange-400" />
                    <div>
                        <p className="text-gray-300 text-sm">Total Operators</p>
                        <h2 className="text-xl font-bold">{operators.length}</h2>
                    </div>
                </div>

                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                    <CheckSquare className="w-8 h-8 text-yellow-400" />
                    <div>
                        <p className="text-gray-300 text-sm">Pending Operators</p>
                        <h2 className="text-xl font-bold">{operators.filter(op => op.status === "Pending").length}</h2>
                    </div>
                </div>

                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                    <ClipboardList className="w-8 h-8 text-amber-400" />
                    <div>
                        <p className="text-gray-300 text-sm">Total Bookings</p>
                        <h2 className="text-xl font-bold">{bookings.length}</h2>
                    </div>
                </div>

                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                    <DollarSign className="w-8 h-8 text-green-400" />
                    <div>
                        <p className="text-gray-300 text-sm">Revenue</p>
                        <h2 className="text-xl font-bold">${bookings.filter(b => b.status === "Confirmed").reduce((sum, b) => sum + b.amount, 0)}</h2>
                    </div>
                </div>

                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg flex items-center gap-4 cursor-pointer hover:bg-[#222b38]/80 transition" onClick={exportBookings}>
                    <FileText className="w-8 h-8 text-blue-400" />
                    <div>
                        <p className="text-gray-300 text-sm">Export Report</p>
                        <h2 className="text-xl font-bold">CSV</h2>
                    </div>
                </div>
            </div>

            {/* Operators Table */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-orange-400">Jeep Operators</h2>
                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-[#0f172a]/80">
                        <tr>
                            <th className="px-4 py-2 text-gray-300">ID</th>
                            <th className="px-4 py-2 text-gray-300">Name</th>
                            <th className="px-4 py-2 text-gray-300">Status</th>
                            <th className="px-4 py-2 text-gray-300">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {operators.map(op => (
                            <tr key={op.id} className="border-b border-white/10">
                                <td className="px-4 py-2 text-gray-200">{op.id}</td>
                                <td className="px-4 py-2 text-gray-200">{op.name}</td>
                                <td className={`px-4 py-2 font-semibold ${op.status === "Active" ? "text-green-400" : "text-yellow-400"}`}>
                                    {op.status}
                                </td>
                                <td className="px-4 py-2">
                                    {op.status === "Pending" && (
                                        <button
                                            className="px-3 py-1 bg-green-600 rounded-md hover:bg-green-700 transition"
                                            onClick={() => approveOperator(op.id)}
                                        >
                                            Approve
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bookings Table */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-orange-400">Bookings</h2>
                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-[#0f172a]/80">
                        <tr>
                            <th className="px-4 py-2 text-gray-300">ID</th>
                            <th className="px-4 py-2 text-gray-300">User</th>
                            <th className="px-4 py-2 text-gray-300">Park</th>
                            <th className="px-4 py-2 text-gray-300">Date</th>
                            <th className="px-4 py-2 text-gray-300">Status</th>
                            <th className="px-4 py-2 text-gray-300">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookings.map(b => (
                            <tr key={b.id} className="border-b border-white/10">
                                <td className="px-4 py-2 text-gray-200">{b.id}</td>
                                <td className="px-4 py-2 text-gray-200">{b.user}</td>
                                <td className="px-4 py-2 text-gray-200">{b.park}</td>
                                <td className="px-4 py-2 text-gray-200">{b.date}</td>
                                <td className={`px-4 py-2 font-semibold ${b.status === "Confirmed" ? "text-green-400" : "text-yellow-400"}`}>
                                    {b.status}
                                </td>
                                <td className="px-4 py-2 text-gray-200">${b.amount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Chart: Bookings per Park */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-orange-400">Bookings by Park</h2>
                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <XAxis dataKey="park" stroke="#aaa" />
                            <YAxis stroke="#aaa" />
                            <Tooltip />
                            <Bar dataKey="Bookings" fill="#f59e0b" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
