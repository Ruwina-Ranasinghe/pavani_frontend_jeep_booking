import { Link, useNavigate } from 'react-router';
import { useAuth } from './AuthContext';
import { User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
        setMobileMenuOpen(false);
    };

    const getDashboardLink = () => {
        if (!user) return '/';
        switch (user.role) {
            case 'tourist':
                return '/tourist/dashboard';
            case 'operator':
                return '/operator/dashboard';
            case 'admin':
                return '/admin/dashboard';
            default:
                return '/';
        }
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="flex items-center">
                            <span className="text-forest-700 text-xl">🐘 Safari Parks</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/" className="text-gray-700 hover:text-forest-600 transition-colors">
                            Home
                        </Link>
                        {user && (
                            <Link to={getDashboardLink()} className="text-gray-700 hover:text-forest-600 transition-colors">
                                Dashboard
                            </Link>
                        )}
                        <Link to="/booking" className="text-gray-700 hover:text-forest-600 transition-colors">
                            Book Safari
                        </Link>

                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-forest-600 transition-colors">
                                    <User className="w-5 h-5" />
                                    <span>{user.name}</span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-forest-700 hover:text-forest-900 transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-3">
                            <Link
                                to="/"
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            {user && (
                                <Link
                                    to={getDashboardLink()}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Dashboard
                                </Link>
                            )}
                            <Link
                                to="/booking"
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Safari
                            </Link>

                            {user ? (
                                <>
                                    <Link
                                        to="/profile"
                                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="mx-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="mx-4 px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 text-center"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
