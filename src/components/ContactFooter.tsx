import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const SocialLink = ({ icon: Icon, href }: { icon: any, href: string }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#f59e0b' }}
            className="p-3 bg-white/5 rounded-full border border-white/10 text-slate-400 hover:bg-white/10 transition-colors"
        >
            <Icon size={20} />
        </motion.a>
    );
};

const FooterLink = ({ text }: { text: string }) => (
    <motion.a
        href="#"
        whileHover={{ x: 5, color: '#f59e0b' }}
        className="block text-slate-400 text-sm font-medium hover:text-amber-500 transition-colors"
    >
        {text}
    </motion.a>
);

const ContactFooter = () => {
    return (
        <footer id="contact" className="relative bg-slate-950 pt-24 pb-12 overflow-hidden">
            {/* Scrolling Background Ticker */}
            <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap flex"
                >
                    <span className="text-[10rem] font-black text-white px-8">NEW WINE SCHOOL OF THE SPIRIT</span>
                    <span className="text-[10rem] font-black text-white px-8">NEW WINE SCHOOL OF THE SPIRIT</span>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-20">
                    {/* Brand & Info */}
                    <div className="md:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-2">SPIRIT AGENCY | <span className="text-amber-500">SOTS</span></h2>
                            <p className="text-slate-500 text-sm font-medium tracking-wide">Faith • Prophecy • Miracles</p>
                            <p className="text-slate-600 text-xs mt-1">Coordinated by Babs Adewunmi</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-slate-400">
                                <MapPin size={20} className="text-amber-500 mt-1 shrink-0" />
                                <p className="text-sm leading-relaxed">
                                    Plateau Hotel Novel Suites
                                </p>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Phone size={20} className="text-amber-500 shrink-0" />
                                <p className="text-sm">Contact via website</p>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Mail size={20} className="text-amber-500 shrink-0" />
                                <p className="text-sm">info@newwinesots.org</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <SocialLink icon={Facebook} href="#" />
                            <SocialLink icon={Instagram} href="#" />
                            <SocialLink icon={Youtube} href="#" />
                        </div>
                    </div>

                    {/* Quick Link Columns */}
                    <div className="md:col-span-3 space-y-6">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs">Explore</h3>
                        <div className="space-y-4">
                            <FooterLink text="About Us" />
                            <FooterLink text="Sermons" />
                            <FooterLink text="Prophecies" />
                            <FooterLink text="Testimonies" />
                            <FooterLink text="Events" />
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4 space-y-6">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs">Stay Connected</h3>
                        <p className="text-slate-500 text-sm">Subscribe to receive prophetic updates and event notifications straight to your inbox.</p>

                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors text-sm"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bg-amber-500 text-slate-950 p-2 rounded-full hover:bg-amber-400 transition-colors"
                            >
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs font-medium">
                        © 2025 Spirit Agency | New Wine School of the Spirit. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-600 text-xs font-medium hover:text-slate-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-600 text-xs font-medium hover:text-slate-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
