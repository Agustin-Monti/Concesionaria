// components/hero/HeroSection.tsx
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Fondo con efecto */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-800"></div>
      
      {/* Contenido principal - REORGANIZADO */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Título */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
          >
            Encuentra Tu{' '}
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-red-600 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent"
            >
              Auto Ideal
            </motion.span>
          </motion.h1>
          
          {/* Descripción */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            Descubre nuestra exclusiva colección de vehículos premium con la mejor tecnología y diseño
          </motion.p>
          
          {/* Botones - MÁS SEPARACIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" // Añadí mb-20 para más espacio
          >
            <Link 
              href="/vehiculos"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-600/25"
            >
              Explorar Catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <button className="inline-flex items-center border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              Ver Video
            </button>
          </motion.div>

          {/* Stats - AHORA EN FLUJO NORMAL, NO ABSOLUTO */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/80 mt-8"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-sm md:text-base text-gray-300">Vehículos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
              <div className="text-sm md:text-base text-gray-300">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm md:text-base text-gray-300">Soporte</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - POSICIÓN CORREGIDA */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}