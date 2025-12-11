import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../state/auth/authSlice.ts";
import type { RootState, AppDispatch } from "../../state/store.ts";
import { Mountain, Lock, Mail, User, MapPin, Compass } from "lucide-react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { loading, error} = useSelector((state: RootState) => state.auth);

    const handleSubmit = async () => {
        if (isLogin) {
            dispatch(loginUser({ email, password })).then((res) => {
                if (res.meta.requestStatus === "fulfilled") {
                    navigate("/app/dashboard");
                }
            });
        } else {
            dispatch(registerUser({ name, email, password })).then((res) => {
                if (res.meta.requestStatus === "fulfilled") {
                    setIsLogin(true); // switch to login
                    // Optionally navigate after login success
                }
            });
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 relative z-10">
                {/* Left Panel - Branding */}
                <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl shadow-2xl text-white">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Mountain className="w-12 h-12" />
                            <h1 className="text-4xl font-bold">JeepGo</h1>
                        </div>
                        <p className="text-amber-100 text-lg">Your Adventure Awaits</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                            <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold mb-1">Explore Destinations</h3>
                                <p className="text-sm text-amber-100">
                                    Book jeeps to remote mountains, beaches, and off-road trails
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                            <Compass className="w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold mb-1">Real-Time Tracking</h3>
                                <p className="text-sm text-amber-100">
                                    Track your jeep location and journey status live
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                            <Lock className="w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold mb-1">Safe & Secure</h3>
                                <p className="text-sm text-amber-100">
                                    Verified drivers and secure payment methods
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                        <p className="text-sm italic text-amber-100">
                            "Best off-road booking experience! Made our mountain trip unforgettable."
                        </p>
                        <p className="text-sm font-semibold mt-2">- Sarah K., Adventure Enthusiast</p>
                    </div>
                </div>

                {/* Right Panel - Auth Form */}
                <div className="flex items-center justify-center p-6">
                    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                        {/* Mobile Logo */}
                        <div className="md:hidden flex items-center justify-center gap-2 mb-8">
                            <Mountain className="w-10 h-10 text-orange-600" />
                            <h1 className="text-3xl font-bold text-gray-800">JeepGo</h1>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                {isLogin ? "Welcome Back!" : "Join JeepGo"}
                            </h2>
                            <p className="text-gray-600">
                                {isLogin
                                    ? "Sign in to book your next adventure"
                                    : "Create an account to get started"}
                            </p>
                        </div>

                        {/* Tab Switcher */}
                        <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-xl">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                                    isLogin ? "bg-white text-orange-600 shadow-md" : "text-gray-600 hover:text-gray-800"
                                }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                                    !isLogin ? "bg-white text-orange-600 shadow-md" : "text-gray-600 hover:text-gray-800"
                                }`}
                            >
                                Register
                            </button>
                        </div>

                        <div className="space-y-5">
                            {!isLogin && (
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
                                    />
                                </div>
                            )}

                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
                                />
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-800"
                                />
                            </div>

                            {isLogin && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 accent-orange-600" />
                                        <span className="text-gray-600">Remember me</span>
                                    </label>
                                    <button className="text-orange-600 hover:text-orange-700 font-semibold">
                                        Forgot Password?
                                    </button>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </span>
                                ) : isLogin ? "Sign In" : "Create Account"}
                            </button>

                            {error && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                                    {error}
                                </div>
                            )}
                        </div>

                        {!isLogin && (
                            <p className="text-xs text-gray-500 text-center mt-6">
                                By registering, you agree to our Terms of Service and Privacy Policy
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
        </div>
    );
}
