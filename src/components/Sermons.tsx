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
            preacher: "Apostle Babs Adewunmi",
            date: "Jan 14, 2024",
            duration: "1h 12m",
            tags: ["Holy Spirit", "Spiritual Growth"],
            image: "https://img.youtube.com/vi/BfkjnxHoaCI/maxresdefault.jpg",
            videoUrl: "https://youtu.be/BfkjnxHoaCI?si=1PVjvO3ORmXuct2v"
        },
        {
            title: "The Power Of Prayer",
            preacher: "Apostle Babs Adewunmi",
            date: "Jan 07, 2024",
            duration: "58m",
            tags: ["Prayer", "Faith"],
            image: "https://img.youtube.com/vi/HeK4pi9UJds/maxresdefault.jpg",
            videoUrl: "https://youtu.be/HeK4pi9UJds?si=wDWDjIXM8XjGm3Rv"
        },
        {
            title: "Understanding Grace",
            preacher: "Apostle Babs Adewunmi",
            date: "Dec 31, 2023",
            duration: "1h 05m",
            tags: ["Grace", "Salvation"],
            image: "https://img.youtube.com/vi/arUzp_nTT1c/maxresdefault.jpg",
            videoUrl: "https://youtu.be/arUzp_nTT1c?si=MTkysGXARR322Sbn"
        },
        {
            title: "The Anointing Within",
            preacher: "Apostle Babs Adewunmi",
            date: "Dec 24, 2023",
            duration: "1h 20m",
            tags: ["Anointing", "Holy Spirit"],
            image: "https://img.youtube.com/vi/GZspjZ7i-p0/maxresdefault.jpg",
            videoUrl: "https://youtu.be/GZspjZ7i-p0?si=CQNk8NHvSalfuXAp"
        },
        {
            title: "Walking in Victory",
            preacher: "Apostle Babs Adewunmi",
            date: "Dec 17, 2023",
            duration: "52m",
            tags: ["Victory", "Overcoming"],
            image: "https://img.youtube.com/vi/DftCov46sJM/maxresdefault.jpg",
            videoUrl: "https://www.youtube.com/live/DftCov46sJM?si=kqS5F3MVImL9kNBx"
        },
        {
            title: "Divine Encounters",
            preacher: "Apostle Babs Adewunmi",
            date: "Dec 10, 2023",
            duration: "1h 08m",
            tags: ["Presence of God", "Worship"],
            image: "https://img.youtube.com/vi/gZeXk9n5PFA/maxresdefault.jpg",
            videoUrl: "https://youtu.be/gZeXk9n5PFA?si=WKew-zTWyz7IMQh2"
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
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight pb-1">
                        Featured <span className="text-amber-400">Sermons</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A collection of our recent teachings and Spirit-filled messages
                    </p>
                </motion.div>

                {/* Sermon Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {sermons.map((sermon, i) => (
                        <FeatureCard
                            key={i}
                            index={i}
                            className="group"
                        >
                            <a
                                href={sermon.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full transition-transform duration-500 hover:scale-[1.01]"
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
                                                    className="sermon-card-tag backdrop-blur-sm group-hover:border-amber-500/30 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="sermon-card-title group-hover:text-amber-300 transition-colors duration-300">
                                            {sermon.title}
                                        </h3>
                                        <p className="sermon-card-preacher mb-3">
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
                            </a>
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
