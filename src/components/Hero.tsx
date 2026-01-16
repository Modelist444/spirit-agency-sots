import React from 'react';
import { Calendar, Play, Heart, Send, ChevronDown } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (section: string) => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
            {/* Floating Menorah - more subtle */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[250px] opacity-[0.03] pointer-events-none select-none"
                style={{ animation: 'gentleFloat 20s ease-in-out infinite' }}
            >
                🕎
            </div>

            <div className="text-center z-20 px-4 max-w-5xl mx-auto space-y-6">
                {/* Floating Dove - using uploaded image */}
                <div
                    className="inline-block"
                    style={{ animation: 'doveFloat 6s ease-in-out infinite' }}
                >
                    <img
                        src="/new_dove.jpg"
                        alt="Dove"
                        className="w-48 h-48 md:w-64 md:h-64 object-contain"
                    />
                </div>

                {/* Main Title with hand-drawn underline */}
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
                    <span className="text-white">Welcome to </span>
                    <span className="underline-sketch bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                        New Wine
                    </span>
                </h2>

                <h3
                    className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-300 mb-4"
                    style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}
                >
                    School of the Spirit
                </h3>

                {/* Tagline */}
                <p
                    className="text-lg md:text-xl text-amber-400/80 font-medium tracking-widest uppercase mb-6"
                    style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}
                >
                    Faith • Prophecy • Miracles
                </p>

                {/* Scripture Quote */}
                <div
                    className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20"
                    style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}
                >
                    <p className="text-lg md:text-xl text-amber-100/90 italic leading-relaxed">
                        "But the hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth"
                    </p>
                    <p className="text-sm text-slate-500 mt-2">— John 4:23</p>
                </div>

                <p
                    className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    style={{ animation: 'fadeInUp 1s ease-out 1s both' }}
                >
                    A Kingdom prophetic and apostolic equipping platform. Come encounter the presence of God, be transformed by His Spirit, and discover your divine purpose.
                </p>

                {/* Coordinator */}
                <p
                    className="text-sm text-slate-500 italic"
                    style={{ animation: 'fadeInUp 1s ease-out 1.1s both' }}
                >
                    Coordinated by <span className="text-amber-400/70">Babs Adewunmi</span>
                </p>

                {/* Action Buttons */}
                <div
                    className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4"
                    style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}
                >
                    {[
                        { icon: Calendar, text: 'Join Us', action: 'events', primary: true },
                        { icon: Play, text: 'Watch Sermons', action: 'sermons', primary: false },
                        { icon: Heart, text: 'Testimonies', action: 'testimonies', primary: false },
                        { icon: Send, text: 'Prayer Request', action: 'prayer', primary: false }
                    ].map((btn, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToSection(btn.action)}
                            className={`group px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 flex items-center gap-2 font-medium ${btn.primary
                                ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105'
                                : 'bg-slate-800/80 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 text-slate-200 hover:text-amber-200'
                                }`}
                        >
                            <btn.icon size={18} className="group-hover:scale-110 transition-transform" />
                            <span>{btn.text}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                style={{ animation: 'bounce 2s infinite' }}
            >
                <ChevronDown className="text-amber-400/60" size={36} />
            </div>
        </section>
    );
};

export default Hero;
