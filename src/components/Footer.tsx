import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-forest-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl mb-4 text-white">Safari Parks Sri Lanka</h3>
                        <p className="text-gray-300 mb-4">
                            Experience the majestic elephant gatherings at Minneriya and Kaudulla National Parks. Book your safari adventure today.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-white">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-300">
                                <Phone className="w-4 h-4" />
                                <span>+94 XX XXX XXXX</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Mail className="w-4 h-4" />
                                <span>info@safariparks.lk</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin className="w-4 h-4" />
                                <span>Minneriya & Kaudulla, Sri Lanka</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-forest-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Safari Parks Sri Lanka. Supporting eco-tourism and wildlife conservation.</p>
                </div>
            </div>
        </footer>
    );
}
