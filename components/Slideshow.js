import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

export default function Slideshow ({ images, currentIndex, nextImage, prevImage }) {
  if (!images || images.length === 0) return null;

  // Tek resim varsa: Butonları kaldır ve animasyonu basitleştir
  if (images.length === 1) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          src={images[0]}
          className="max-h-[70vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          // Buradaki x değerlerini currentIndex'e göre dinamik yapabilirsin 
          // ama basit tutmak için opacity geçişi de çok şık durur
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="max-h-[70vh] object-contain rounded-xl shadow-xl"
        />
      </AnimatePresence>
      
      {/* Navigasyon Butonları */}
      <button
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
        className="absolute left-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-slate-800 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
        className="absolute right-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-slate-800 transition-all opacity-0 group-hover:opacity-100"
      >  
        <ChevronRight size={20} />
      </button>

      {/* Görsel İndikatörler (Dots) */}
      <div className="absolute bottom-4 flex gap-1.5">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "bg-blue-600 w-4" : "bg-slate-300 w-1.5"}`}
          />
        ))}
      </div>
    </div>
  );
};
