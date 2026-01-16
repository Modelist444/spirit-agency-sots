import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const images = [
    {
        url: "/images/gallery/moment_1.jpg",
        caption: "A generation rising in deep intimacy and spiritual power.",
        title: "Divine Worship"
    },
    {
        url: "/images/gallery/moment_3.jpg",
        caption: "Prophetic declarations echoing through the halls of the Spirit.",
        title: "Prophetic Decree"
    },
    {
        url: "/images/gallery/moment_2.jpg",
        caption: "Heartfelt intercession opening the heavens for divine intervention.",
        title: "Deep Intercession"
    },
    {
        url: "/images/gallery/moment_4.jpg",
        caption: "Massive gatherings witnesses to the outpouring of God's glory.",
        title: "Atmosphere of Glory"
    },
    {
        url: "/images/gallery/moment_5.jpg",
        caption: "The joy of the Lord and the freedom that comes from His presence.",
        title: "Kingdom Freedom"
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

    const isEven = index % 2 === 0;

    // Animations for split layout
    const imageX = useTransform(smoothProgress, [0, 1], [isEven ? -200 : 200, 0]);
    const textX = useTransform(smoothProgress, [0, 1], [isEven ? 200 : -200, 0]);
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.2, 1]);
    const scale = useTransform(smoothProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(smoothProgress, [0, 1], [isEven ? -5 : 5, 0]);
    const captionOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

    return (
        <div ref={ref} className="min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-24 overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Image Container - Responsive Flexbox Layout */}
                <motion.div
                    style={{ x: imageX, opacity, scale, rotate }}
                    className={`w-full md:w-3/5 aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 relative ${isEven ? 'md:order-1' : 'md:order-2'}`}
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

                {/* Text Content */}
                <motion.div
                    style={{ x: textX, opacity: captionOpacity }}
                    className={`w-full md:w-2/5 text-center md:text-left ${isEven ? 'md:order-2' : 'md:order-1'}`}
                >
                    <h4 className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                        {image.title}
                    </h4>
                    <p className="text-3xl md:text-5xl text-white font-light tracking-tight leading-tight">
                        {image.caption}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

const Gallery = () => {
    return (
        <section id="gallery" className="bg-slate-950 pt-32 pb-40 cinematic-grain">
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

            <div className="space-y-0">
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
