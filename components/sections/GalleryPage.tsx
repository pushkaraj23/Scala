"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    X,
    ChevronLeft,
    ChevronRight,
    ZoomIn,
    Filter,
    Grid3X3,
    LayoutGrid,
    Rows,
    Image as ImageIcon,
    Play,
    Maximize2,
    Camera,
    Aperture,
    Focus,
} from "lucide-react";

// Gallery Categories
const categories = [
    { id: "all", label: "All Work", icon: Grid3X3 },
    { id: "branding", label: "Branding", icon: Aperture },
    { id: "web", label: "Web Design", icon: LayoutGrid },
    { id: "mobile", label: "Mobile Apps", icon: Rows },
    { id: "photography", label: "Photography", icon: Camera },
    { id: "video", label: "Video", icon: Play },
];

// Gallery Items Data
const galleryItems = [
    {
        id: 1,
        title: "Brand Identity Design",
        category: "branding",
        image: "/gallery/branding-1.jpg",
        thumbnail: "/gallery/branding-1-thumb.jpg",
        description: "Complete brand identity for a tech startup",
        aspectRatio: "portrait",
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        category: "web",
        image: "/gallery/web-1.jpg",
        thumbnail: "/gallery/web-1-thumb.jpg",
        description: "Modern e-commerce website with seamless UX",
        aspectRatio: "landscape",
    },
    {
        id: 3,
        title: "Fitness App UI",
        category: "mobile",
        image: "/gallery/mobile-1.jpg",
        thumbnail: "/gallery/mobile-1-thumb.jpg",
        description: "Health and fitness tracking application",
        aspectRatio: "portrait",
    },
    {
        id: 4,
        title: "Nature Photography",
        category: "photography",
        image: "/gallery/photo-1.jpg",
        thumbnail: "/gallery/photo-1-thumb.jpg",
        description: "Stunning landscape photography collection",
        aspectRatio: "landscape",
    },
    {
        id: 5,
        title: "Product Launch Video",
        category: "video",
        image: "/gallery/video-1.jpg",
        thumbnail: "/gallery/video-1-thumb.jpg",
        description: "Cinematic product reveal video",
        aspectRatio: "landscape",
        isVideo: true,
    },
    {
        id: 6,
        title: "Restaurant Branding",
        category: "branding",
        image: "/gallery/branding-2.jpg",
        thumbnail: "/gallery/branding-2-thumb.jpg",
        description: "Complete visual identity for fine dining",
        aspectRatio: "square",
    },
    {
        id: 7,
        title: "SaaS Dashboard",
        category: "web",
        image: "/gallery/web-2.jpg",
        thumbnail: "/gallery/web-2-thumb.jpg",
        description: "Analytics dashboard with data visualization",
        aspectRatio: "landscape",
    },
    {
        id: 8,
        title: "Banking App",
        category: "mobile",
        image: "/gallery/mobile-2.jpg",
        thumbnail: "/gallery/mobile-2-thumb.jpg",
        description: "Secure mobile banking application",
        aspectRatio: "portrait",
    },
    {
        id: 9,
        title: "Urban Architecture",
        category: "photography",
        image: "/gallery/photo-2.jpg",
        thumbnail: "/gallery/photo-2-thumb.jpg",
        description: "Modern architectural photography",
        aspectRatio: "portrait",
    },
    {
        id: 10,
        title: "Brand Story Video",
        category: "video",
        image: "/gallery/video-2.jpg",
        thumbnail: "/gallery/video-2-thumb.jpg",
        description: "Emotional brand storytelling",
        aspectRatio: "landscape",
        isVideo: true,
    },
    {
        id: 11,
        title: "Fashion Brand",
        category: "branding",
        image: "/gallery/branding-3.jpg",
        thumbnail: "/gallery/branding-3-thumb.jpg",
        description: "Luxury fashion brand identity",
        aspectRatio: "portrait",
    },
    {
        id: 12,
        title: "Portfolio Website",
        category: "web",
        image: "/gallery/web-3.jpg",
        thumbnail: "/gallery/web-3-thumb.jpg",
        description: "Creative portfolio with animations",
        aspectRatio: "landscape",
    },
    {
        id: 13,
        title: "Food Delivery App",
        category: "mobile",
        image: "/gallery/mobile-3.jpg",
        thumbnail: "/gallery/mobile-3-thumb.jpg",
        description: "Intuitive food ordering experience",
        aspectRatio: "portrait",
    },
    {
        id: 14,
        title: "Portrait Series",
        category: "photography",
        image: "/gallery/photo-3.jpg",
        thumbnail: "/gallery/photo-3-thumb.jpg",
        description: "Artistic portrait photography",
        aspectRatio: "portrait",
    },
    {
        id: 15,
        title: "Event Highlights",
        category: "video",
        image: "/gallery/video-3.jpg",
        thumbnail: "/gallery/video-3-thumb.jpg",
        description: "Corporate event video production",
        aspectRatio: "landscape",
        isVideo: true,
    },
    {
        id: 16,
        title: "Tech Startup Brand",
        category: "branding",
        image: "/gallery/branding-4.jpg",
        thumbnail: "/gallery/branding-4-thumb.jpg",
        description: "Modern tech company branding",
        aspectRatio: "square",
    },
];

// Gallery Card Component (Masonry Only)
function GalleryCard({
    item,
    index,
    onClick,
}: {
    item: (typeof galleryItems)[0];
    index: number;
    onClick: () => void;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const heightClass =
        item.aspectRatio === "portrait"
            ? "aspect-[3/4]"
            : item.aspectRatio === "landscape"
                ? "aspect-[4/3]"
                : "aspect-square";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={onClick}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${heightClass}`}
        >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-primary)]/40 to-[color:var(--color-primary-soft)]/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            {/* Card */}
            <div className="relative h-full bg-[color:var(--color-accent-dark)]/80 backdrop-blur-xl border border-[color:var(--color-border)] rounded-2xl overflow-hidden group-hover:border-[color:var(--color-primary)]/60 transition-all duration-300">
                {/* Image Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-accent-dark)] to-[color:var(--color-accent)]">
                    <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-16 h-16 text-[color:var(--color-text-muted)]" />
                    </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-accent-dark)]/90 via-[color:var(--color-accent-dark)]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Video Play Button */}
                {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-16 h-16 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] flex items-center justify-center shadow-lg shadow-[color:var(--color-primary)]/30"
                        >
                            <Play className="w-7 h-7 text-[color:var(--color-accent-dark)] ml-1" />
                        </motion.div>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-[color:var(--color-accent-dark)]/70 backdrop-blur-sm text-xs font-medium text-[color:var(--color-foreground)] capitalize">
                        {item.category}
                    </span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-lg font-bold text-[color:var(--color-foreground)] mb-1 group-hover:text-[color:var(--color-primary-soft)] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sm text-[color:var(--color-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                            {item.description}
                        </p>
                    </motion.div>
                </div>

                {/* Hover Actions */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-[color:var(--color-surface-light)]/20 backdrop-blur-sm flex items-center justify-center text-[color:var(--color-foreground)] hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-accent-dark)] transition-all"
                    >
                        <ZoomIn className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-[color:var(--color-surface-light)]/20 backdrop-blur-sm flex items-center justify-center text-[color:var(--color-foreground)] hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-accent-dark)] transition-all"
                    >
                        <Maximize2 className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

// Lightbox Component
function Lightbox({
    item,
    onClose,
    onPrev,
    onNext,
    hasPrev,
    hasNext,
}: {
    item: (typeof galleryItems)[0];
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    hasPrev: boolean;
    hasNext: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[color:var(--color-accent-dark)]/95 backdrop-blur-xl"
            onClick={onClose}
        >
            {/* Close Button */}
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[color:var(--color-surface)]/20 backdrop-blur-sm flex items-center justify-center text-[color:var(--color-foreground)] hover:bg-[color:var(--color-surface-light)]/30 transition-all"
                onClick={onClose}
            >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Navigation Buttons */}
            {hasPrev && (
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[color:var(--color-surface)]/20 backdrop-blur-sm flex items-center justify-center text-[color:var(--color-foreground)] hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-accent-dark)] transition-all"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
            )}

            {hasNext && (
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[color:var(--color-surface)]/20 backdrop-blur-sm flex items-center justify-center text-[color:var(--color-foreground)] hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-accent-dark)] transition-all"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
            )}

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-6xl h-[80vh] max-h-[800px] flex flex-col lg:flex-row gap-4 sm:gap-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image Container */}
                <div className="relative flex-1 min-h-0 rounded-2xl overflow-hidden bg-[color:var(--color-accent-dark)]/80 backdrop-blur-xl border border-[color:var(--color-border)]">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="relative w-full h-full bg-gradient-to-br from-[color:var(--color-accent-dark)] to-[color:var(--color-accent)] rounded-xl flex items-center justify-center">
                            <ImageIcon className="w-20 h-20 sm:w-24 sm:h-24 text-[color:var(--color-text-muted)]" />
                        </div>
                    </div>

                    {/* Video Play Button */}
                    {item.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] flex items-center justify-center shadow-lg shadow-[color:var(--color-primary)]/30 cursor-pointer"
                            >
                                <Play className="w-7 h-7 sm:w-9 sm:h-9 text-[color:var(--color-accent-dark)] ml-1" />
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Info Panel */}
                <div className="lg:w-72 xl:w-80 flex-shrink-0 bg-[color:var(--color-accent-dark)]/85 backdrop-blur-xl border border-[color:var(--color-border)] rounded-2xl p-4 sm:p-6 overflow-y-auto max-h-[30vh] lg:max-h-full">
                    {/* Category Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1.5 rounded-full bg-[color:var(--color-primary)]/12 text-[color:var(--color-primary-soft)] text-sm font-medium capitalize">
                            {item.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--color-foreground)] mb-3">
                        {item.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[color:var(--color-text-secondary)] text-sm sm:text-base leading-relaxed mb-6">
                        {item.description}
                    </p>

                    {/* Project Details */}
                    {item.isVideo && (
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xs font-semibold text-[color:var(--color-text-muted)] uppercase tracking-wider mb-1">
                                    Media Type
                                </h3>
                                <p className="text-[color:var(--color-foreground)]">Video</p>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[color:var(--color-surface)]/20 backdrop-blur-sm text-[color:var(--color-foreground)] text-sm font-medium">
                Press ESC to close
            </div>
        </motion.div>
    );
}

const GALLERY_PARTICLES = Array.from({ length: 15 }, (_, i) => ({
    left: 5 + ((i * 11) % 90),
    top: 5 + ((i * 17) % 90),
    duration: 3 + (i % 5) * 0.4,
    delay: i * 0.3,
}));

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null);
    const [visibleCount, setVisibleCount] = useState(12);

    const filteredItems =
        activeCategory === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    const visibleItems = filteredItems.slice(0, visibleCount);
    const hasMore = visibleCount < filteredItems.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    const handlePrev = useCallback(() => {
        if (!selectedItem) return;
        const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
        if (currentIndex > 0) {
            setSelectedItem(filteredItems[currentIndex - 1]);
        }
    }, [selectedItem, filteredItems]);

    const handleNext = useCallback(() => {
        if (!selectedItem) return;
        const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
        if (currentIndex < filteredItems.length - 1) {
            setSelectedItem(filteredItems[currentIndex + 1]);
        }
    }, [selectedItem, filteredItems]);

    const currentIndex = selectedItem
        ? filteredItems.findIndex((item) => item.id === selectedItem.id)
        : -1;

    // Handle keyboard navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!selectedItem) return;
            if (e.key === "Escape") setSelectedItem(null);
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        },
        [selectedItem, handlePrev, handleNext]
    );

    // Add keyboard listener
    useState(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-[color:var(--color-accent-dark)] via-[color:var(--color-accent-dark)] to-[color:var(--color-accent)] text-[color:var(--color-foreground)]">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color:var(--color-primary)]/20 via-transparent to-transparent"
                    aria-hidden
                />
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[color:var(--color-primary-soft)]/10 via-transparent to-transparent"
                    aria-hidden
                />
                {/* Floating Particles (deterministic & theme-based) */}
                {GALLERY_PARTICLES.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-[color:var(--color-primary)]/30"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-primary)]/10 border border-[color:var(--color-primary)]/30 mb-6"
                        >
                            <Focus className="w-4 h-4 text-[color:var(--color-primary-soft)]" />
                            <span className="text-sm font-medium text-[color:var(--color-primary-soft)]">Our Portfolio</span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            Creative{" "}
                            <span className="relative">
                                <span className="text-[color:var(--color-primary-soft)]">
                                    Gallery
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                />
                            </span>
                        </h1>

                        <p className="text-xl text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
                            Explore our collection of stunning projects, from branding and web design to
                            photography and video production.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Controls */}
            <section className="relative pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center gap-6"
                    >
                        {/* Category Filters */}
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {categories.map((category, index) => (
                                <motion.button
                                    key={category.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => {
                                        setActiveCategory(category.id);
                                        setVisibleCount(12);
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.id
                                        ? "bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-soft)] text-[color:var(--color-accent-dark)]"
                                        : "bg-[color:var(--color-accent-dark)]/60 text-[color:var(--color-text-muted)] hover:text-[color:var(--color-foreground)] hover:bg-[color:var(--color-accent-dark)]/80 border border-[color:var(--color-border)]"
                                        }`}
                                >
                                    <category.icon className="w-4 h-4" />
                                    {category.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 flex items-center justify-between"
                    >
                        <p className="text-[color:var(--color-text-muted)]">
                            Showing{" "}
                            <span className="text-[color:var(--color-foreground)] font-medium">{visibleItems.length}</span> of{" "}
                            <span className="text-[color:var(--color-foreground)] font-medium">{filteredItems.length}</span> projects
                        </p>
                        <div className="flex items-center gap-2 text-[color:var(--color-text-muted)]">
                            <Filter className="w-4 h-4" />
                            <span className="capitalize">{activeCategory}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid - Masonry Only */}
            <section className="relative pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                        >
                            {visibleItems.map((item, index) => (
                                <div key={item.id} className="break-inside-avoid">
                                    <GalleryCard
                                        item={item}
                                        index={index}
                                        onClick={() => setSelectedItem(item)}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Load More Button */}
                    {hasMore && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12 text-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleLoadMore}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[color:var(--color-accent-dark)]/80 backdrop-blur-xl border border-[color:var(--color-border)] text-[color:var(--color-foreground)] hover:border-[color:var(--color-primary)]/60 hover:bg-[color:var(--color-primary)]/15 transition-all"
                            >
                                Load More Projects
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    )}

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-[color:var(--color-accent-dark)]/70 flex items-center justify-center">
                                <ImageIcon className="w-12 h-12 text-[color:var(--color-text-muted)]" />
                            </div>
                            <h3 className="text-xl font-bold text-[color:var(--color-foreground)] mb-2">No projects found</h3>
                            <p className="text-[color:var(--color-text-secondary)]">Try selecting a different category</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <Lightbox
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        hasPrev={currentIndex > 0}
                        hasNext={currentIndex < filteredItems.length - 1}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}