import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const images = [
    {
        url: "/images/church_spiritual_worship.png",
        caption: "A generation rising in deep intimacy and spiritual power.",
        title: "Divine Worship"
    },
    {
        url: "https://images.unsplash.com/photo-1548625361-02482390885a?q=80&w=1600",
        caption: "Where the supernatural becomes the normal atmosphere of living.",
        title: "Sacred Encounters"
    },
    {
        url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600",
        caption: "Hands extended in love, transforming communities through service.",
        title: "Faith in Action"
    },
    {
        url: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=1600",
        caption: "Grounded in the Word, led by the Spirit into all truth.",
        title: "Holy Wisdom"
    },
    {
        url: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=1600",
        caption: "Built for His glory, a beacon of light in a modern world.",
        title: "The Sanctuary"
    },
    {
        url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600",
        caption: "Next generation leaders ignited for global impact.",
        title: "Youth Ignition"
    },
    {
        url: "https://images.unsplash.com/photo-1445006844190-7082ece5b1bc?w=1600&q=80",
        caption: "Covenant relationships formed in the heart of God's family.",
        title: "Kingdom Unity"
    }
];


const GalleryItem = ({ image, index, total }: { image: typeof images[0], index: number, total: number }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y = useTransform(smoothProgress, [0, 1], [400, 0]);
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.2, 1]);
    const scale = useTransform(smoothProgress, [0, 1], [0.8, 1]);
    const captionOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

    return (
        <div ref={ref} className="h-[120vh] flex flex-col items-center justify-center relative px-6 md:px-12">
            <motion.div
                style={{ y, opacity, scale }}
                className="w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 relative"
            >
                <img
                    src={image.url}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Counter */}
                <div className="absolute top-8 left-8 text-white/40 font-mono text-xl">
                    {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </div>
            </motion.div>

            {/* Caption */}
            <motion.div
                style={{ opacity: captionOpacity }}
                className="mt-12 text-center max-w-2xl"
            >
                <h4 className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                    {image.title}
                </h4>
                <p className="text-3xl md:text-4xl text-white font-light tracking-tight leading-tight">
                    {image.caption}
                </p>
            </motion.div>
        </div>
    );
};

const Gallery = () => {
    return (
        <section id="gallery" className="bg-slate-950 pt-32 pb-60 cinematic-grain">
            <div className="max-w-4xl mx-auto text-center mb-32 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-amber-500 font-medium tracking-widest uppercase text-xs mb-6">Our Visual Journey</p>
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                        Captured <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Moments</span>
                    </h2>
                    <p className="text-slate-500 text-xl font-light leading-relaxed italic">
                        "Beholding His glory as in a mirror, we are being transformed into the same image."
                    </p>
                </motion.div>
            </div>

            <div className="space-y-[20vh]">
                {images.map((image, i) => (
                    <GalleryItem
                        key={i}
                        image={image}
                        index={i}
                        total={images.length}
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
