// components/about/HeroAbout.tsx
'use client'
import { motion } from 'framer-motion'
import { Play, Award, Users, Shield, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function HeroAbout() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background con efecto de partículas */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-black/80 to-gray-800/50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                Desde 2008
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Conduciendo <span className="text-red-600">Tu Futuro</span> Con Pasión
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                En AutoPremium, no solo vendemos vehículos; creamos experiencias 
                automotrices que transforman vidas. Con más de 15 años de excelencia, 
                somos tu partner de confianza en el mundo automotriz.
              </motion.p>
            </div>

            {/* Stats rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: Users, number: "15+", label: "Años Experiencia" },
                { icon: Award, number: "5,000+", label: "Clientes Satisfechos" },
                { icon: Shield, number: "98%", label: "Tasa Satisfacción" },
                { icon: Play, number: "24/7", label: "Soporte" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
                <Link href={`/vehiculos`} className="">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                    >
                        Ver Nuestro Catálogo
                    </motion.button>
                </Link>

                <Link href={`/vehiculos`} className="">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        Contactar Asesor
                    </motion.button>
                </Link>
            </motion.div>
          </motion.div>

          {/* Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <motion.a
              href="https://www.youtube.com/watch?v=TU_VIDEO_ID" // ← Reemplaza con tu video
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block group"
            >
              {/* Container del video */}
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-3xl overflow-hidden border-2 border-white/20 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
                
                {/* Thumbnail del video */}
                <div className="relative w-full h-full">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse rounded-3xl" />
                  )}
                  
                  {/* Imagen de miniatura - Reemplaza con tu thumbnail */}
                  <Image
                    src="/about/video-thumbnail.jpg" // ← Ruta de tu thumbnail
                    alt="Video corporativo AutoPremium - Nuestra historia"
                    fill
                    className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                    onLoad={() => setImageLoaded(true)}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
                  
                  {/* Play button centrado */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative">
                      {/* Círculo exterior animado */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 0.3, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-red-600 rounded-full"
                      />
                      
                      {/* Círculo principal */}
                      <div className="relative w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Badge de YouTube */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 mt-4">
                    <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-red-600 border-y-[4px] border-y-transparent ml-0.5" />
                    </div>
                    YouTube
                  </div>

                  {/* Información del video */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-white"
                    >
                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                        Nuestra Historia AutoPremium
                      </h3>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Descubre el viaje de 15 años que nos convirtió en líderes del sector automotriz
                      </p>
                      
                      {/* Duración del video */}
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-300">
                        <span>▶️ 4:32 min</span>
                        <span>👁️ 15K vistas</span>
                        <span className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Ver en YouTube
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.a>

            {/* Elementos decorativos flotantes */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-red-600/20 rounded-2xl backdrop-blur-sm border border-red-500/30 hidden lg:block"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-600/20 rounded-2xl backdrop-blur-sm border border-blue-500/30 hidden lg:block"
            />

            {/* Mini cards de información */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 mt-6"
            >
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white text-center">4.8★</div>
                <div className="text-xs text-gray-300 text-center">Rating YouTube</div>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white text-center">95%</div>
                <div className="text-xs text-gray-300 text-center">Comentarios Positivos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-white text-center">
          <div className="text-sm mb-2">Descubre Más</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}