import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticDock, type DockItemData } from './MagneticDock';

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (section: string) => {
        setActiveSection(section);
        setMenuOpen(false);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = ['home', 'about', 'testimonies', 'prophesies', 'prayer', 'events', 'sermons', 'contact'];

    const dockItems: DockItemData[] = navItems.map(section => ({
        id: section,
        label: section,
        isActive: activeSection === section,
        onClick: () => scrollToSection(section),
    }));

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <motion.div
                        className="flex items-center space-x-3 group cursor-pointer"
                        onClick={() => scrollToSection('home')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className="text-3xl"
                            whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                        >
                            🕎
                        </motion.div>
                        <div>
                            {/* Added padding-right/bottom to prevent clipping of the 'e' in Wine */}
                            <h1 className="text-lg font-bold text-white leading-none pr-1 pb-0.5 whitespace-nowrap">
                                New Wine <span className="text-amber-400">SOTS</span>
                            </h1>
                            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] pt-1 whitespace-nowrap">School of the Spirit</p>
                        </div>
                    </motion.div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-slate-400 p-2 hover:text-amber-400 transition-colors z-50"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="hidden lg:flex items-center">
                        <MagneticDock 
                            items={dockItems} 
                            variant="transparent" 
                            maxScale={1.18} 
                            magneticDistance={60}
                        />
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden fixed inset-x-0 top-[64px] bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-2">
                            {navItems.map((section, i) => (
                                <motion.button
                                    key={section}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => scrollToSection(section)}
                                    className="w-full text-left px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-amber-400 capitalize transition-all text-lg font-bold border border-transparent hover:border-amber-500/20 rounded-xl"
                                >
                                    {section}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
