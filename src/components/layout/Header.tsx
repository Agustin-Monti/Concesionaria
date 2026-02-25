// components/HeaderDark.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Car, Phone, Star, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Componente separado para las partículas que solo se renderiza en el cliente
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{x: number, y: number}>>([])

  useEffect(() => {
    // Generar partículas solo en el cliente
    setParticles(
      Array.from({ length: 5 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100
      }))
    )
  }, [])

  if (particles.length === 0) {
    return null // No renderizar nada hasta que se generen las partículas
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            y: [null, -20, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/vehiculos', label: 'Vehículos' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ]

  // Evitar renderizado diferente entre servidor y cliente
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo estático para SSR */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative bg-gray-900 rounded-2xl p-2 border border-gray-700">
                  <img 
                    src="/logo.png" 
                    alt="AutoPremium" 
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-2xl">AutoPremium</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-400 font-medium">PREMIUM EXPERIENCE</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Botón móvil estático */}
            <button className="lg:hidden p-3 rounded-2xl bg-gray-800 border border-gray-700">
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-gray-800' 
          : 'bg-gradient-to-b from-gray-900/95 to-transparent backdrop-blur-md'
      }`}
    >
      {/* Efecto de partículas - Solo en cliente */}
      <FloatingParticles />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo con Efecto Brillante */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-2 border border-gray-700 group-hover:border-red-500/50 transition-colors duration-300">
                  <img 
                    src="/logo.png" 
                    alt="AutoPremium" 
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  AutoPerfomante
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-400 font-medium">PREMIUM EXPERIENCE</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Especial */}
          <motion.a
            href="tel:+15550101000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center space-x-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Phone className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Contactar</span>
          </motion.a>

          {/* Botón móvil */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-3 rounded-2xl bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-gray-800/95 backdrop-blur-xl rounded-2xl mt-2 border border-gray-700"
            >
              <div className="py-6">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className="block py-4 px-6 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-gray-700/50 transition-all duration-300 border-l-4 border-transparent hover:border-red-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* CTA móvil */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4 px-6"
                  >
                    <a
                      href="tel:+15550101000"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Llamar Ahora</span>
                    </a>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}