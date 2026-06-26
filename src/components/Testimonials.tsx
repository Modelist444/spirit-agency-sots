import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { CursorDrivenParticleTypography } from './CursorDrivenParticleTypography';

const TestimonialCard = ({ t }: { t: any }) => (
    <div className="w-[350px] md:w-[400px] shrink-0 px-3">
        <div className="relative h-full bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all duration-300 flex flex-col min-h-[240px]">
            <div className="absolute top-4 right-6 text-amber-500/10 transition-colors">
                <Quote size={36} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, index) => (
                    <Star key={index} size={12} className="fill-amber-400 text-amber-400" />
                ))}
            </div>

            <p className="text-slate-300 leading-relaxed italic mb-6 flex-grow text-sm">
                "{t.content}"
            </p>

            <div className="flex items-center gap-3">
                <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border-2 border-slate-800"
                />
                <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-amber-400/70 text-[10px] font-medium uppercase tracking-wider">{t.role}</p>
                </div>
            </div>
        </div>
    </div>
);

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
        },
        {
            name: "Samuel Peters",
            role: "Prophetic Ministry",
            content: "The accuracy and depth of the prophecies in this house have redirected my life towards my divine destiny.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
        },
        {
            name: "Esther Williams",
            role: "New Convert",
            content: "I came in broken but the atmosphere of love and the Word healed my soul. I'm walking in joy I never knew existed.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
        }
    ];

    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonies" className="py-24 relative z-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Voices of Encounter</p>
                    <div className="text-white italic">
                        <CursorDrivenParticleTypography
                            text="Our Testimonies"
                            className="h-[110px] min-h-[110px] text-white"
                            fontFamily="Inter, sans-serif"
                            fontSize={72}
                            particleSize={1.5}
                            particleDensity={5}
                            dispersionStrength={18}
                            returnSpeed={0.07}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Single Row Marquee - Moving Right */}
            <div className="relative flex overflow-hidden py-6">
                <motion.div
                    animate={{
                        x: ["-50%", "0%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex shrink-0"
                >
                    {doubledTestimonials.map((t, i) => (
                        <TestimonialCard key={i} t={t} />
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            </div>

            <div className="mt-12 text-center px-6">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-slate-900 border border-slate-700 text-white text-xs font-black uppercase tracking-widest hover:border-amber-500/50 transition-all"
                >
                    Share your Testimony
                </motion.button>
            </div>
        </section>
    );
};

export default Testimonials;
