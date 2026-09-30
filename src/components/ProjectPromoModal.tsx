import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Sparkles, X, Compass, ArrowRight, Eye } from 'lucide-react';

interface ProjectPromoModalProps {
  /** Optional delay in milliseconds before the modal pops up */
  delayMs?: number;
}

const PROJECT_URL = 'https://incredible-india-ckiy.vercel.app/';
const PROJECT_NAME = 'Sarai';

export default function ProjectPromoModal({ delayMs = 350 }: ProjectPromoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
  };

  const handleOpenProject = () => {
    window.open(PROJECT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-all"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-lg bg-[#0d0d0d] border border-[#d4a017]/40 shadow-2xl shadow-amber-500/10 overflow-hidden text-white my-auto rounded-none"
            style={{
              boxShadow: '0 0 50px rgba(212, 160, 23, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Top Amber Accent Line */}
            <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 transition-colors rounded-none"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Clickable Card Body */}
            <div
              onClick={handleOpenProject}
              className="cursor-pointer group relative p-6 sm:p-8"
            >
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Project Showcase
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-5">
                <h2
                  id="promo-modal-title"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <span>Project {PROJECT_NAME}</span>
                  <ExternalLink className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h2>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  Discover our flagship interactive web project — an immersive experience celebrating Indian tourism, cultural heritage, and modern digital design.
                </p>
              </div>

              {/* Interactive Preview Card Box */}
              <div className="relative border border-zinc-800 bg-zinc-950/70 p-4 sm:p-5 mb-6 group-hover:border-amber-500/40 transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                      <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white flex items-center gap-1.5">
                        {PROJECT_NAME}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5 truncate max-w-[200px] sm:max-w-[260px]">
                        incredible-india-ckiy.vercel.app
                      </div>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1">
                    <Eye className="w-3.5 h-3.5" />
                    Live Project
                  </span>
                </div>

                {/* Highlights tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-medium text-zinc-400">
                  <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5">🚀 Interactive Web</span>
                  <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5">🇮🇳 Sarai</span>
                  <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5">✨ Live Demo</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenProject();
                  }}
                  className="w-full flex items-center justify-center gap-2 font-btn-text bg-gradient-to-r from-[#D4A017] to-[#F3C043] text-black py-3.5 px-6 font-bold shadow-lg shadow-amber-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
                >
                  <span>Explore Project {PROJECT_NAME}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full text-center text-xs text-zinc-400 hover:text-white py-1.5 transition-colors underline-offset-4 hover:underline"
                >
                  Continue to Pi Analytic Solutions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
