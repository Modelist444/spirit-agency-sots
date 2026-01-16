import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const EventCard = ({
    title,
    date,
    location,
    image,
    index
}: {
    title: string;
    date: string;
    location: string;
    image: string;
    index: number;
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
                x: (index % 2 === 0 ? -100 : 100) // Default to slide-in, rely on viewport checks or responsive styles
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0
            }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
            }}
            whileHover={{ y: -10 }}
            className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-500 overflow-hidden"
        >
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-amber-500/20">
                        Upcoming
                    </span>
                </div>
            </div>

            <div className="p-6 relative">
                <div className="flex items-center gap-2 text-amber-500/80 text-xs font-bold uppercase tracking-widest mb-3">
                    <Calendar size={14} />
                    {date}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {title}
                </h3>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                    <MapPin size={14} />
                    {location}
                </div>

                <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-amber-500 text-xs font-black uppercase tracking-widest group/link"
                >
                    Learn More
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </motion.button>
            </div>

            {/* Animated border glow on hover */}
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/20 rounded-2xl transition-all duration-500 pointer-events-none" />
        </motion.div>
    );
};

const Events = () => {
    const events = [
        {
            title: "School of the Spirit (SOTS)",
            date: "EVERY MONDAY",
            location: "Plateau Hotel Novel Suites",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
        },
        {
            title: "International New Wine Apostolic Summit (I-NWAS)",
            date: "AUGUST ANNUALLY",
            location: "Rayfield, Novel suites, Jos",
            image: "https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&q=80"
        },
        {
            title: "Healing Streams",
            date: "FEBRUARY & SEPTEMBER",
            location: "Rayfield, Novel suites, Jos",
            image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=800&q=80"
        },
        {
            title: "Midnight Watch",
            date: "Tuesdays & Wednesdays",
            location: "Zoom 11pm",
            image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?w=800&q=80"
        },
        {
            title: "Prayer surges",
            date: "Monthly",
            location: "Rayfield, Novel suites Jos",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
        }
    ];

    return (
        <section id="events" className="py-24 px-4 relative z-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <p className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Mark Your Calendar</p>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Key <span className="text-slate-500">Encounters</span> & Events
                        </h2>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-slate-900 border border-slate-700 text-white rounded-full text-xs font-black uppercase tracking-widest hover:border-amber-500/50 hover:bg-slate-800 transition-all"
                    >
                        View Full Calendar
                    </motion.button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((e, i) => (
                        <EventCard key={i} {...e} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
