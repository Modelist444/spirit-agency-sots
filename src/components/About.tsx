import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const About = () => {
    const stories = [
        {
            icon: '🎯',
            title: 'Our Vision',
            text: 'A Kingdom prophetic and apostolic equipping platform, raising a generation of Spirit-filled believers who walk in divine power, understanding, and intimacy with God.',
            align: 'left'
        },
        {
            icon: '⚡',
            title: 'Our Faith',
            text: 'We believe in Faith, Prophecy, and Miracles. The supernatural power of God operates today through Spirit-led believers. We are a community grounded in Scripture and led by the Spirit.',
            align: 'right'
        },
        {
            icon: '🕊️',
            title: 'Spirit Agency',
            text: 'Under the coordination of Babs Adewunmi, New Wine School of the Spirit has become a vibrant apostolic hub where thousands encounter God\'s transforming presence and are equipped for Kingdom impact.',
            align: 'left'
        }
    ];

    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y = useTransform(smoothProgress, [0.1, 0.4], ["-100%", "0%"]);
    const opacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
    const scale = useTransform(smoothProgress, [0.1, 0.4], [0.95, 1]);

    return (
        <section ref={containerRef} id="about" className="relative z-20 bg-slate-950 pb-20">
            {/* Reveal Panel */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-white text-slate-900 shadow-2xl">
                <motion.div
                    style={{ opacity: useTransform(smoothProgress, [0.1, 0.4], [0, 0.03]) }}
                    className="absolute inset-0 bg-blue-500 pointer-events-none"
                />

                <motion.div
                    style={{ y, opacity, scale }}
                    className="w-full h-full flex items-center justify-center p-6 md:p-12"
                >
                    <div className="max-w-6xl mx-auto w-full">
                        <div className="text-center mb-12">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-amber-600 font-semibold tracking-widest uppercase text-xs mb-4"
                            >
                                Who We Are
                            </motion.p>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
                                Know more{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500">
                                    About Us
                                </span>
                            </h2>
                            <div className="h-2 w-48 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto rounded-full shadow-lg" />
                        </div>

                        <p className="text-xl md:text-3xl text-center text-slate-700 leading-relaxed italic font-medium max-w-4xl mx-auto">
                            "A Kingdom prophetic and apostolic equipping platform. Here, Faith, Prophecy, and Miracles are our heritage, and God's presence is our greatest treasure."
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Narrative Mission Display */}
            <div className="max-w-7xl mx-auto px-6 mt-32 space-y-32">
                {stories.map((story, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: story.align === 'left' ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className={`flex flex-col md:flex-row items-center gap-12 ${story.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1 space-y-6">
                            <div className="text-6xl">{story.icon}</div>
                            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                {story.title}
                            </h3>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                                {story.text}
                            </p>
                            <div className={`h-1 w-20 bg-amber-500 rounded-full ${story.align === 'right' ? 'ml-auto' : ''}`} />
                        </div>
                        <div className="flex-1 h-64 md:h-96 w-full rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-black text-8xl opacity-10 pointer-events-none">
                                {story.title.split(' ')[1]}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;


