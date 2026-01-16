import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap, Eye, Radio, Sparkles } from 'lucide-react';

const ProphecyCard = ({
    title,
    content,
    color,
    index
}: {
    title: string;
    content: string;
    color: 'cyan' | 'fuchsia' | 'amber';
    index: number;
}) => {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const colorClasses = {
        cyan: "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] text-cyan-400",
        fuchsia: "border-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.5)] text-fuchsia-400",
        amber: "border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] text-amber-400"
    };

    const bgGlows = {
        cyan: "from-cyan-500/10 to-transparent",
        fuchsia: "from-fuchsia-500/10 to-transparent",
        amber: "from-amber-500/10 to-transparent"
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            animate={{
                y: [0, -15, 0],
                rotateY: 360, // 3D Coin-flip rotation
            }}
            transition={{
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                },
                rotateY: {
                    duration: 10, // Smooth 3D spin
                    repeat: Infinity,
                    ease: "linear",
                },
                opacity: { duration: 0.8 },
                rotateX: { type: "spring", stiffness: 300, damping: 30 },
                rotateY: { type: "spring", stiffness: 300, damping: 30 }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative perspective-1000`}
        >
            {/* Flicker Border Effect */}
            <div className={`absolute -inset-0.5 rounded-2xl opacity-70 blur-[2px] group-hover:opacity-100 group-hover:blur-[4px] transition-all duration-300 animate-pulse ${colorClasses[color].split(' ')[0].replace('border-', 'bg-')}`} />

            <div className={`relative bg-slate-900/80 backdrop-blur-2xl p-8 rounded-2xl border-2 ${colorClasses[color].split(' ')[0]} h-full flex flex-col overflow-hidden`}>
                {/* Background Gradient Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${bgGlows[color]} rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 rounded-lg bg-slate-800/50 border border-white/10 ${colorClasses[color].split(' ')[2]}`}>
                            {color === 'cyan' && <Zap size={24} />}
                            {color === 'fuchsia' && <Eye size={24} />}
                            {color === 'amber' && <Radio size={24} />}
                        </div>
                        <h3 className={`text-xl font-black tracking-tighter uppercase italic ${colorClasses[color].split(' ')[2]}`}>
                            {title}
                        </h3>
                    </div>

                    <p className="text-slate-100 font-medium leading-relaxed mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        {content}
                    </p>

                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Transmission: Active</span>
                        <Sparkles size={14} className={`${colorClasses[color].split(' ')[2]} animate-flicker`} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Prophecies = () => {
    const prophesies = [
        {
            title: "Shift in Dimensions",
            content: "There is an acceleration of time coming. What used to take years will now manifest in months. The veil between heaven and earth is thinning for those who seek the secret place.",
            color: "cyan" as const
        },
        {
            title: "Divine Outpouring",
            content: "I see a wave of creativity hitting the youth. New songs, new sounds, and new inventions that will solve global crises will emerge from this house as you prioritize My presence.",
            color: "fuchsia" as const
        },
        {
            title: "The Reapers' Call",
            content: "The harvest is no longer in the distance; it is at your door. I am releasing a fresh anointing for bold evangelism. Signs and wonders will follow your 'yes' to the streets.",
            color: "amber" as const
        }
    ];

    return (
        <section id="prophesies" className="py-24 px-4 relative z-20 bg-slate-950 overflow-hidden">
            {/* Grid background extension */}
            <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-left relative"
                >
                    <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-amber-500 opacity-50 blur-[2px]" />
                    <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.8]">
                        Heaven<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 animate-shimmer bg-[length:200%_auto]">Frequency</span>
                    </h2>
                    <p className="mt-4 text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">Prophetic Declarations / Year 2024</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
                    {prophesies.map((p, i) => (
                        <ProphecyCard key={i} {...p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prophecies;
