import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Member since 2022",
            content: "The School of the Spirit has completely transformed my understanding of God's presence. I've experienced healing and a new level of spiritual authority.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        },
        {
            name: "David Chen",
            role: "Youth Leader",
            content: "Finding this community was an answer to prayer. The teachings are deep yet practical, and the love here is tangible. My family is blessed.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
        },
        {
            name: "Grace Okeke",
            role: "Worship Minister",
            content: "A place where the supernatural is truly normal. I've witnessed miracles and felt a profound peace that changed my life forever.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        }
    ];

    return (
        <section id="testimonies" className="py-24 px-4 relative z-20 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">Stories of Transformation</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        Life <span className="text-amber-400">Testimonies</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Witness the tangible power of God working in our community
                    </p>
                </motion.div>

                {/* Testimonial Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            whileHover={{
                                scale: 1.02,
                                translateY: -5,
                            }}
                            className="group relative"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all duration-300 flex flex-col">
                                <div className="absolute top-6 right-8 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
                                    <Quote size={48} />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, index) => (
                                        <Star key={index} size={14} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-slate-300 leading-relaxed italic mb-8 flex-grow">
                                    "{t.content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-12 h-12 rounded-full border-2 border-slate-800 group-hover:border-amber-500/50 transition-colors relative z-10"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{t.name}</h4>
                                        <p className="text-amber-400/70 text-xs font-medium uppercase tracking-wider">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <button className="px-8 py-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-amber-200 transition-all font-medium inline-flex items-center gap-2">
                        Share Your Story
                        <Star size={16} className="text-amber-400" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
