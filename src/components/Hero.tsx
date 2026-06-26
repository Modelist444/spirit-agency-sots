import { ChevronDown } from 'lucide-react';

const Hero = () => {
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




                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.1] pb-2 pr-2 uppercase italic overflow-visible">
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

                {/* Mission Statement Box */}
                <div
                    className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20"
                    style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}
                >
                    <p className="text-xl md:text-2xl text-amber-100/90 font-medium leading-relaxed italic">
                        "A Kingdom prophetic and apostolic equipping platform. Come encounter the presence of God, be transformed by His Spirit, and discover your divine purpose."
                    </p>
                </div>

                {/* Coordinator */}
                <p
                    className="text-sm text-slate-500 italic"
                    style={{ animation: 'fadeInUp 1s ease-out 1.1s both' }}
                >
                    Coordinated by <span className="text-amber-400/70">Babs Adewunmi</span>
                </p>
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
