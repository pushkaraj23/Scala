"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Maximize2, Focus, Image as ImageIcon } from "lucide-react";

// Gallery Card Component
function GalleryCard({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      onClick={onClick}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="absolute -inset-1 bg-[color:var(--color-primary)]/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      <div className="relative h-full bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-2xl overflow-hidden group-hover:border-[color:var(--color-primary)]/50 transition-all duration-300">
        <Image
          src={src}
          alt={`Gallery image ${index + 1}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ZoomIn className="w-5 h-5 text-white" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Maximize2 className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Lightbox Component
function Lightbox({
  src,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  counter,
}: {
  src: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  counter: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
      onClick={onClose}
    >
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-4 right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        onClick={onClose}
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {hasPrev && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
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
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Gallery view"
          width={1200}
          height={900}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
        />
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
        {counter} • Press ESC to close
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

export default function GalleryPage({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null || selectedIndex <= 0) return;
    setSelectedIndex(selectedIndex - 1);
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null || selectedIndex >= images.length - 1) return;
    setSelectedIndex(selectedIndex + 1);
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[color:var(--color-accent-dark)] via-[color:var(--color-accent-dark)] to-[color:var(--color-accent)] text-[color:var(--color-foreground)]">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color:var(--color-primary)]/20 via-transparent to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[color:var(--color-primary-soft)]/10 via-transparent to-transparent" aria-hidden />
        {GALLERY_PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[color:var(--color-primary)]/30"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-primary)]/10 border border-[color:var(--color-primary)]/30 mb-6">
              <Focus className="w-4 h-4 text-[color:var(--color-primary-soft)]" />
              <span className="text-sm font-medium text-[color:var(--color-primary-soft)]">Our Gallery</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Creative{" "}
              <span className="text-[color:var(--color-primary-soft)]">Gallery</span>
            </h1>
            <p className="text-xl text-[color:var(--color-text-secondary)] max-w-2xl mx-auto">
              Explore our collection of projects and visual work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {images.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {images.map((src, index) => (
                <GalleryCard
                  key={src}
                  src={src}
                  index={index}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-[color:var(--color-surface)]/80 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-[color:var(--color-text-muted)]" />
              </div>
              <h3 className="text-xl font-bold text-[color:var(--color-foreground)] mb-2">No images yet</h3>
              <p className="text-[color:var(--color-text-secondary)]">
                Add images to the <code className="px-2 py-0.5 rounded bg-[color:var(--color-surface)]">public/gallery</code> folder to display them here.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && images[selectedIndex] && (
          <Lightbox
            src={images[selectedIndex]}
            onClose={() => setSelectedIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={selectedIndex > 0}
            hasNext={selectedIndex < images.length - 1}
            counter={`${selectedIndex + 1} / ${images.length}`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
