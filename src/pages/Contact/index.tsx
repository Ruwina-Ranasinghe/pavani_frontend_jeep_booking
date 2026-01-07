import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, Facebook, Instagram, Twitter, Youtube, Award, Users, Shield } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-[#0d1117] text-white">

            {/* Hero Section with Background Image */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1600&q=80"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0d1117]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Let's Plan Your
                        <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                            Dream Safari
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Have questions? Need help planning your adventure? Our expert team is here to assist you 24/7.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl font-semibold hover:opacity-90 transition shadow-xl">
                            Send Message
                        </a>
                        <a href="tel:+94712345678" className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition">
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="relative z-10 -mt-20 max-w-7xl mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-6 text-center shadow-xl">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">10,000+</h3>
                        <p className="text-white/90">Happy Travelers</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-center shadow-xl">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">4.9/5</h3>
                        <p className="text-white/90">Average Rating</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-center shadow-xl">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">24/7</h3>
                        <p className="text-white/90">Support Available</p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* Left Side - Contact Information */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Contact Cards */}
                        <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <MessageCircle className="w-6 h-6 text-orange-400" />
                                Contact Information
                            </h2>

                            <div className="space-y-5">
                                <a href="mailto:support@safari.lk" className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition group">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                        <Mail className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email Us</h3>
                                        <p className="text-sm text-gray-400">support@safari.lk</p>
                                        <p className="text-sm text-gray-400">info@safari.lk</p>
                                    </div>
                                </a>

                                <a href="tel:+94712345678" className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition group">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                        <Phone className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Call Us</h3>
                                        <p className="text-sm text-gray-400">+94 71 234 5678</p>
                                        <p className="text-sm text-gray-400">+94 77 987 6543</p>
                                        <p className="text-xs text-green-400 mt-1">Available 24/7</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Visit Our Office</h3>
                                        <p className="text-sm text-gray-400">123 Wildlife Road,</p>
                                        <p className="text-sm text-gray-400">Minneriya, Polonnaruwa</p>
                                        <p className="text-sm text-gray-400">Sri Lanka</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Operating Hours</h3>
                                        <p className="text-sm text-gray-400">Monday - Sunday</p>
                                        <p className="text-sm text-gray-400">6:00 AM - 6:00 PM</p>
                                        <p className="text-xs text-amber-400 mt-1">Emergency: 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 shadow-xl">
                            <h3 className="text-lg font-bold mb-4">Follow Our Journey</h3>
                            <div className="flex gap-3">
                                <a href="#" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center hover:scale-110 transition">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 shadow-xl">
                            <h3 className="text-lg font-bold mb-4">Recent Adventures</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <img src="https://images.unsplash.com/photo-1671185049471-b3066c993f85?auto=format&fit=crop&w=400&q=80" alt="Safari" className="rounded-xl h-32 w-full object-cover" />
                                <img src="https://images.unsplash.com/photo-1652777175302-4a0f39b24fab?auto=format&fit=crop&w=400&q=80" alt="Elephant" className="rounded-xl h-32 w-full object-cover" />
                                <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=400&q=80" alt="Jeep" className="rounded-xl h-32 w-full object-cover" />
                                <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80" alt="Wildlife" className="rounded-xl h-32 w-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="lg:col-span-3">
                        <div id="contact-form" className="bg-[#111827] border border-white/10 rounded-3xl p-8 shadow-xl">
                            <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                            <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

                            {submitted && (
                                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                    <div>
                                        <p className="font-semibold text-green-400">Message Sent Successfully!</p>
                                        <p className="text-sm text-gray-400">We'll get back to you soon.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition"
                                            placeholder="+94 71 234 5678"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                                            Subject *
                                        </label>
                                        <select
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                            className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="booking">Booking Inquiry</option>
                                            <option value="general">General Question</option>
                                            <option value="support">Support</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                                        Your Message *
                                    </label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition resize-none"
                                        placeholder="Tell us about your safari plans, questions, or any special requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl font-semibold hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>

                        {/* FAQ Quick Links */}
                        <div className="mt-6 bg-gradient-to-br from-orange-600/10 to-amber-600/10 border border-orange-500/20 rounded-2xl p-6">
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                                <MessageCircle className="w-5 h-5 text-orange-400" />
                                Quick Answers
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <a href="#" className="text-gray-300 hover:text-orange-400 transition">→ Booking Process</a>
                                <a href="#" className="text-gray-300 hover:text-orange-400 transition">→ Payment Methods</a>
                                <a href="#" className="text-gray-300 hover:text-orange-400 transition">→ Cancellation Policy</a>
                                <a href="#" className="text-gray-300 hover:text-orange-400 transition">→ Best Time to Visit</a>
                                <a href="#" className="text-gray-300 hover:text-orange-400 transition">→ What to Bring</a>
                                <a href="#" className="text-gray-300 hover:text-orange-400 transition">→ Safety Guidelines</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Map Section */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <div className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-xl">
                    <div className="p-6 border-b border-white/10">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <MapPin className="w-6 h-6 text-orange-400" />
                            Find Us Here
                        </h2>
                        <p className="text-gray-400 mt-2">Visit our office or meet us at any of the national parks</p>
                    </div>
                    <div className="h-96 bg-gray-800 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126190.45447831!2d80.85!3d8.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDAnMDAuMCJOIDgwwrA1MScwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-12 text-center shadow-2xl">
                    <h2 className="text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Don't wait! Book your safari experience today and create memories that last a lifetime.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/booking" className="px-8 py-4 bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl font-semibold hover:bg-black/30 transition">
                            Book Now
                        </a>
                        <a href="tel:+94712345678" className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-100 transition">
                            Call +94 71 234 5678
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}