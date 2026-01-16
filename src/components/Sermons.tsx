import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

// Reusable animated card component
const FeatureCard = ({
    children,
    index = 0,
    className = ""
}: {
    children: React.ReactNode;
    index?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.15)"
            }}
            className={className}
        >
            {/* Breathing animation wrapper */}
            <motion.div
                animate={{
                    y: [0, -4, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                }}
                className="h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

const Sermons = () => {
    const sermons = [
        {
            title: "Trading floors in the spirit",
            preacher: "Apostle Babs Adewumi",
            date: "Jan 14, 2024",
            duration: "1h 12m",
            tags: ["Holy Spirit", "Spiritual Growth"],
            image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop"
        },
        {
            title: "The Power of Prayer",
            preacher: "Pastor Mercy Ali",
            date: "Jan 07, 2024",
            duration: "58m",
            tags: ["Prayer", "Faith"],
            image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=250&fit=crop"
        },
        {
            title: "Understanding Grace",
            preacher: "Pastor Gabriel Lean",
            date: "Dec 31, 2023",
            duration: "1h 05m",
            tags: ["Grace", "Salvation"],
            image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=250&fit=crop"
        },
        {
            title: "The Anointing Within",
            preacher: "Apostle Babs Adewumi",
            date: "Dec 24, 2023",
            duration: "1h 20m",
            tags: ["Anointing", "Holy Spirit"],
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=250&fit=crop"
        },
        {
            title: "Walking in Victory",
            preacher: "Pastor Gaius Danauta",
            date: "Dec 17, 2023",
            duration: "52m",
            tags: ["Victory", "Overcoming"],
            image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&h=250&fit=crop"
        },
        {
            title: "Divine Encounters",
            preacher: "Prophet Emma Njoku",
            date: "Dec 10, 2023",
            duration: "1h 08m",
            tags: ["Presence of God", "Worship"],
            image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=250&fit=crop"
        }
    ];

    return (
        <section id="sermons" className="py-24 px-4 relative z-20 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Section Header with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
                        Watch & Learn
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        Featured <span className="text-amber-400">Sermons</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A collection of our recent teachings and Spirit-filled messages
                    </p>
                </motion.div>

                {/* Sermon Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sermons.map((sermon, i) => (
                        <FeatureCard
                            key={i}
                            index={i}
                            className="group"
                        >
                            {/* Glassmorphism Card */}
                            <div className="h-full bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-amber-500/40 transition-all duration-500 relative">
                                {/* Gradient overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Thumbnail */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={sermon.image}
                                        alt={sermon.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                                    {/* Play button */}
                                    <motion.button
                                        className="absolute inset-0 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <motion.div
                                            className="bg-amber-500/90 backdrop-blur-sm p-4 rounded-full shadow-lg shadow-amber-500/30"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Play fill="white" className="text-white ml-0.5" size={24} />
                                        </motion.div>
                                    </motion.button>
                                </div>

                                <div className="p-5 relative z-10">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {sermon.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="px-3 py-1 text-xs font-medium bg-slate-800/80 backdrop-blur-sm text-slate-300 rounded-full border border-slate-600/50 group-hover:border-amber-500/30 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                                        {sermon.title}
                                    </h3>
                                    <p className="text-amber-400/80 text-sm mb-3 font-medium">
                                        {sermon.preacher}
                                    </p>
                                    <div className="flex justify-between text-slate-500 text-xs uppercase tracking-wider font-medium">
                                        <span>{sermon.date}</span>
                                        <span className="text-amber-500/60">{sermon.duration}</span>
                                    </div>
                                </div>

                                {/* Bottom glow effect on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </FeatureCard>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group px-8 py-3 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 text-slate-200 hover:text-amber-200 transition-all inline-flex items-center gap-2 font-medium shadow-lg hover:shadow-amber-500/10"
                    >
                        View All Sermons
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Sermons;
