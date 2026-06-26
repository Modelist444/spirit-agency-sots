import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, MoveLeft, Download } from 'lucide-react';

// --- Data Structure ---
interface Image {
    url: string;
    caption: string;
}

interface Album {
    id: string;
    title: string;
    description: string;
    cover: string;
    count: number;
    images: Image[];
}

const albums: Album[] = [
    {
        id: 'worship',
        title: "Worship & Encounter",
        description: "Deep moments of intimacy and high praise.",
        cover: "/images/gallery/worship_woman.jpg",
        count: 15,
        images: [
            { url: "/images/gallery/worship_woman.jpg", caption: "Lost in His presence" },
            { url: "/images/gallery/worship_purple_intense.jpg", caption: "Deep calls unto deep" },
            { url: "/images/gallery/worship_singer.jpg", caption: "Prophetic sound" },
            { url: "/images/gallery/worship_singer_2.jpg", caption: "Lifting up holy hands" },
            { url: "/images/gallery/worship_prayer_group.jpg", caption: "United in prayer" },
            { url: "/images/gallery/moment_1.jpg", caption: "Intimacy in worship" },
            { url: "/images/gallery/worship_man_brown_shirt.jpg", caption: "Passionate pursuit" },
            { url: "/images/gallery/worship_choir.jpg", caption: "The sound of many waters" },
            { url: "/images/gallery/worship_woman_white_shirt.jpg", caption: "Heart of surrender" },
            { url: "/images/gallery/worship_woman_glasses.jpg", caption: "Making melody to the Lord" },
            { url: "/images/gallery/worship_woman_floral.jpg", caption: "Joy of salvation" },
            { url: "/images/gallery/gallery_new_1.jpg", caption: "The sound of heaven" },
            { url: "/images/gallery/moment_4.jpg", caption: "Atmosphere of glory" },
            { url: "/images/gallery/gallery_new_2.jpg", caption: "Holy convocation" },
            { url: "/images/gallery/moment_3.jpg", caption: "Prophetic release" }
        ]
    },
    {
        id: 'prophetic',
        title: "Prophetic Ministry",
        description: "Declarations, prayer, and the move of the Spirit.",
        cover: "/images/gallery/prophetic_oil.jpg",
        count: 9,
        images: [
            { url: "/images/gallery/prophetic_oil.jpg", caption: "The oil of gladness" },
            { url: "/images/gallery/prophetic_speaker_1.jpg", caption: "Prophetic proclamation" },
            { url: "/images/gallery/prophetic_men.jpg", caption: "Serving the Lord" },
            { url: "/images/gallery/prophetic_preacher_sepia.jpg", caption: "Apostolic alignment" },
            { url: "/images/gallery/prophetic_apostle_close.jpg", caption: "Apostolic grace" },
            { url: "/images/gallery/prophetic_apostle_med.jpg", caption: "Ministry of the word" },
            { url: "/images/gallery/prophetic_impartation.jpg", caption: "Impartation of grace" },
            { url: "/images/gallery/worship_man_brown_shirt_2.jpg", caption: "Releasing the word" },
            { url: "/images/gallery/moment_2.jpg", caption: "Intercession" }
        ]
    },
    {
        id: 'community',
        title: "Community Life",
        description: "Fellowship, joy, and the family of God.",
        cover: "/images/gallery/community_joy.jpg",
        count: 4,
        images: [
            { url: "/images/gallery/community_joy.jpg", caption: "Family and fellowship" },
            { url: "/images/gallery/community_crowd_blue.jpg", caption: "Gathered in one accord" },
            { url: "/images/gallery/gallery_new_3.jpg", caption: "Surrender" },
            { url: "/images/gallery/moment_5.jpg", caption: "Kingdom joy" }
        ]
    }
];

// --- Components ---

const AlbumCard = ({ album, onClick, index }: { album: Album, onClick: () => void, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        onClick={onClick}
        className="group relative cursor-pointer break-inside-avoid"
    >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900 border border-white/10 group-hover:border-amber-500/50 transition-colors">
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
            <img
                src={album.cover}
                alt={album.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 z-20 flex flex-col justify-end p-6">
                <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{album.count} Photos</p>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{album.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2">{album.description}</p>
            </div>
        </div>
    </motion.div>
);

const Lightbox = ({ images, initialIndex, onClose }: { images: Image[], initialIndex: number, onClose: () => void }) => {
    const [index, setIndex] = useState(initialIndex);

    const next = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleDownload = async (e: React.MouseEvent) => {
        e.stopPropagation();
        const imageUrl = images[index].url;
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `new-wine-sots-${index + 1}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'image.jpg';
            link.click();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="absolute top-6 right-6 z-[110] flex items-center gap-4">
                <button
                    onClick={handleDownload}
                    className="text-white/50 hover:text-amber-500 transition-colors p-2 bg-black/20 rounded-full hover:bg-white/10"
                    title="Download Image"
                >
                    <Download size={28} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-white/10"
                >
                    <X size={32} />
                </button>
            </div>

            <button
                onClick={prev}
                className="absolute left-4 md:left-8 z-[110] text-white/50 hover:text-amber-500 transition-colors p-2 bg-black/20 rounded-full hover:bg-white/10"
            >
                <ChevronLeft size={48} />
            </button>

            <div
                className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center pointer-events-none"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-full flex items-center justify-center pointer-events-auto touch-none">
                    <motion.img
                        key={index}
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.8}
                        onDragEnd={(_, info) => {
                            const swipeThreshold = 50;
                            const velocityThreshold = 500;

                            if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
                                next();
                            } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
                                prev();
                            }
                        }}
                        whileTap={{ cursor: 'grabbing' }}
                        src={images[index].url}
                        alt={images[index].caption}
                        className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing select-none"
                    />
                </div>
                <p className="mt-6 text-white text-lg font-medium tracking-wide">
                    {images[index].caption}
                </p>
                <p className="text-white/30 text-sm mt-2">
                    {index + 1} / {images.length}
                </p>
            </div>

            <button
                onClick={next}
                className="absolute right-4 md:right-8 z-[110] text-white/50 hover:text-amber-500 transition-colors p-2 bg-black/20 rounded-full hover:bg-white/10"
            >
                <ChevronRight size={48} />
            </button>
        </motion.div>
    );
};

const PhotoGrid = ({ album, onBack }: { album: Album, onBack: () => void }) => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <div className="w-full">
            {/* Sticky Header with Back Button */}
            <div className="sticky top-20 z-30 py-4 -mx-4 px-4 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-transparent backdrop-blur-sm mb-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 bg-slate-900/80 border border-slate-700/50 hover:bg-amber-500 hover:text-slate-950 text-slate-300 px-4 py-2 rounded-full transition-all duration-300 uppercase text-xs font-black tracking-widest shadow-lg hover:shadow-amber-500/20 active:scale-95 group"
                >
                    <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Albums
                </button>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{album.title}</h2>
                <p className="text-slate-400 text-lg">{album.description}</p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {album.images.map((img: Image, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative group break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden bg-slate-900"
                        onClick={() => setLightboxIndex(i)}
                    >
                        <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Maximize2 className="text-white drop-shadow-lg" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        images={album.images}
                        initialIndex={lightboxIndex}
                        onClose={() => setLightboxIndex(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

const Gallery = () => {
    const [activeAlbum, setActiveAlbum] = useState<any | null>(null);

    return (
        <section id="gallery" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    {!activeAlbum ? (
                        <motion.div
                            key="albums"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="text-center mb-20">
                                <p className="text-amber-500 font-medium tracking-widest uppercase text-xs mb-6">Our Visual Journey</p>
                                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight pb-2">
                                    <span>Captured</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500">Moments</span>
                                </h2>
                                <p className="text-slate-500 text-xl font-light leading-relaxed italic max-w-2xl mx-auto">
                                    "Beholding His glory as in a mirror, we are being transformed."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {albums.map((album, index) => (
                                    <AlbumCard
                                        key={album.id}
                                        album={album}
                                        index={index}
                                        onClick={() => setActiveAlbum(album)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <PhotoGrid album={activeAlbum} onBack={() => setActiveAlbum(null)} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
