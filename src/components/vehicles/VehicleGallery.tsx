// components/vehicles/VehicleGallery.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface VehicleGalleryProps {
  images: string[]
  currentImage: number
  onImageChange: (index: number) => void
}

export default function VehicleGallery({ images, currentImage, onImageChange }: VehicleGalleryProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () => {
    onImageChange((currentImage + 1) % images.length)
  }

  const prevImage = () => {
    onImageChange((currentImage - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentImage]}
              alt={`Vista ${currentImage + 1} del vehículo`}
              fill
              className="object-cover cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Controles de navegación */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            onClick={prevImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          
          <motion.button
            onClick={nextImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>

        {/* Botón zoom */}
        <motion.button
          onClick={() => setIsZoomed(true)}
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <ZoomIn className="w-5 h-5 text-gray-700" />
        </motion.button>

        {/* Contador */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => onImageChange(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              index === currentImage 
                ? 'border-red-600 ring-2 ring-red-200' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Image
              src={image}
              alt={`Miniatura ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Modal zoom (simplificado) */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentImage]}
                alt="Vista ampliada"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
              
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 rotate-90" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}