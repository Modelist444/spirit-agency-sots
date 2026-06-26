import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { MouseEvent } from 'react';

const EventCard = ({
    title,
    date,
    location,
    image
}: {
    title: string;
    date: string;
    location: string;
    image: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            onMouseMove={handleMouseMove}
            className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden active:scale-[0.98] transition-all duration-500"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(245, 158, 11, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent z-10" />

                {/* Image with slight zoom scale */}
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />

                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-amber-500/90 backdrop-blur-sm text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                        Upcoming
                    </span>
                </div>
            </div>

            <div className="p-6 relative z-10">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
                    <Calendar size={14} className="text-amber-500" />
                    {date}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors leading-snug">
                    {title}
                </h3>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 border-b border-white/5 pb-6">
                    <MapPin size={14} />
                    {location}
                </div>

                <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-white/90 text-xs font-black uppercase tracking-widest group/link hover:text-amber-500 transition-colors"
                >
                    Learn More
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform text-amber-500" />
                </motion.button>
            </div>
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
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <p className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Mark Your Calendar</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight pb-1">
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

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {events.map((e, i) => (
                        <EventCard key={i} {...e} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Events;
