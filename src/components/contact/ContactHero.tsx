// components/contact/ContactHero.tsx
'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ContactHero() {
  const quickActions = [
    {
      icon: MessageCircle,
      title: "Chat en Vivo",
      description: "Respuesta inmediata",
      action: "Iniciar Chat",
      color: "from-green-500 to-emerald-500",
      href: "#" // Aquí puedes poner el link real del chat
    },
    {
      icon: Mail,
      title: "Email",
      description: "contacto@autopremium.com",
      action: "Enviar Email",
      color: "from-blue-500 to-cyan-500",
      href: "#contact-form" // Navega al formulario
    },
    {
      icon: MapPin,
      title: "Visítanos",
      description: "3 sucursales disponibles",
      action: "Ver Ubicaciones",
      color: "from-purple-500 to-pink-500",
      href: "#contact-info" // Navega a la info de contacto
    }
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId.replace('#', ''))
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Hablemos
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Estamos aquí para transformar tu experiencia automotriz. Conectemos y encontremos juntos la solución perfecta.
          </motion.p>

          {/* Quick Contact Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {quickActions.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                
                {item.href.startsWith('#') ? (
                  <a 
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-white text-sm font-semibold hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    {item.action} →
                  </a>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-white text-sm font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    {item.action} →
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-4 h-4 bg-red-500 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute top-10 right-10 w-3 h-3 bg-blue-500 rounded-full opacity-60"
      />
    </section>
  )
}