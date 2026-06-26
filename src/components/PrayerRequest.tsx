import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const CrystallineFacet = ({ delay, rotate, color }: { delay: number; rotate: number; color: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            animate={{
                rotate: [rotate, rotate + 10, rotate],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
            }}
            className={`absolute w-64 h-64 ${color} blur-3xl rounded-full mix-blend-screen pointer-events-none`}
            style={{ rotate: `${rotate}deg` }}
        />
    );
};

const PrayerRequest = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const mouseXSpring = useSpring(mouseX);
    const mouseYSpring = useSpring(mouseY);

    // Prismatic rotation effect
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    // Light source position for gradients
    const lightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const lightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section id="prayer" className="py-24 px-4 relative z-20 overflow-hidden">
            {/* Background Geometric Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="prism" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#prism)" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight pb-1">
                        Crystalline <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Intercession</span>
                    </h2>
                    <p className="text-slate-400 uppercase tracking-[0.4em] text-xs font-bold">Submit Your Prayer Requests</p>
                </motion.div>

                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative group lg:p-1"
                >
                    {/* Prismatic Shard Effects */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                        <CrystallineFacet delay={0} rotate={45} color="bg-blue-500" />
                        <CrystallineFacet delay={1} rotate={135} color="bg-purple-500" />
                        <CrystallineFacet delay={2} rotate={225} color="bg-pink-500" />
                        <CrystallineFacet delay={3} rotate={315} color="bg-cyan-500" />
                    </div>

                    {/* Main Card */}
                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col md:flex-row gap-12">
                        {/* Interactive Light Gradient Overlay */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                            style={{
                                background: useMotionTemplate`radial-gradient(circle at ${lightX} ${lightY}, rgba(255,255,255,0.4) 0%, transparent 60%)`
                            }}
                        />

                        {/* Geometric Side Decoration */}
                        <div className="hidden md:flex flex-col justify-center space-y-6 opacity-30">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 border-2 border-white rotate-45 transform flex items-center justify-center">
                                    <Sparkles size={16} className="text-white -rotate-45" />
                                </div>
                            ))}
                        </div>

                        {/* Form Section */}
                        <div className="flex-grow flex flex-col relative z-10">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-400">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="EX. JOHN DOE"
                                        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-400/50 transition-all font-medium text-white placeholder-white/20"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-purple-400">Prayer Focus</label>
                                    <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-purple-400/50 transition-all font-medium text-white">
                                        <option className="bg-slate-900">HEALING & RESTORATION</option>
                                        <option className="bg-slate-900">FINANCIAL BREAKTHROUGH</option>
                                        <option className="bg-slate-900">FAMILY & RELATIONSHIPS</option>
                                        <option className="bg-slate-900">SPIRITUAL GROWTH</option>
                                        <option className="bg-slate-900">OTHER</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-pink-400">Details</label>
                                    <textarea
                                        rows={4}
                                        placeholder="YOUR BURDEN IS OUR BURDEN..."
                                        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-pink-400/50 transition-all font-medium text-white placeholder-white/20 resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20 group/btn overflow-hidden relative"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                    <Send size={18} />
                                    Send to the Throne
                                </motion.button>
                            </form>
                        </div>
                    </div>

                    {/* Outer Geometric Frame */}
                    <div className="absolute -inset-4 border border-white/5 rounded-[40px] pointer-events-none -z-10 group-hover:border-white/10 transition-colors" />
                </motion.div>
            </div>
        </section>
    );
};

export default PrayerRequest;
