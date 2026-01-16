import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (section: string) => {
        setActiveSection(section);
        setMenuOpen(false);
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navItems = ['home', 'about', 'testimonies', 'prophesies', 'prayer', 'events', 'sermons', 'contact'];

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
                        <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                            🕎
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-white">
                                New Wine <span className="text-amber-400">SOTS</span>
                            </h1>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest">School of the Spirit</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-slate-400 p-2 hover:text-amber-400 transition-colors"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map(section => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`px-4 py-2 rounded-lg transition-all duration-200 capitalize text-sm font-medium ${activeSection === section
                                    ? 'text-amber-400 bg-amber-500/10'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 animate-slideDown">
                    {navItems.map(section => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className="block w-full text-left px-6 py-3 text-slate-400 hover:bg-slate-800 hover:text-amber-400 capitalize transition-all text-sm font-medium"
                        >
                            {section}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
