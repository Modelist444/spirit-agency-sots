import React from 'react';
import { motion } from 'framer-motion';

// About section component
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

    return (
        <section id="about" className="relative z-20 bg-slate-950 py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <p className="text-amber-600 font-semibold tracking-widest uppercase text-xs mb-4">
                        Who We Are
                    </p>
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight text-white"
                    >
                        SPIRIT{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500">
                            AGENCY
                        </span>
                    </motion.h2>
                    <div className="h-2 w-48 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto rounded-full shadow-lg" />

                    <p className="mt-12 text-xl md:text-3xl text-slate-300 leading-relaxed italic font-medium max-w-4xl mx-auto">
                        "New Wine School of the Spirit is a Kingdom prophetic and apostolic equipping platform, located in Jos Plateau State, Nigeria. It is structured with a prophetic emphasis for times and seasons, cutting edge messages and outreach to birth the current moves of the Holy Spirit in the body of Christ, in geo-spiritual territories and in a new generation. Coordinated by Babs Adewunmi."
                    </p>
                </div>

                <div className="space-y-32">
                    {stories.map((story, i) => (
                        <div
                            key={i}
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
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-black text-8xl opacity-10 pointer-events-none">
                                    {story.title.split(' ')[1]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;


