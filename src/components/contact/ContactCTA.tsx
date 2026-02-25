// components/contact/ContactCTA.tsx
'use client'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Calendar, Car } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'
import ScheduleModal from './ScheduleModal'
import QuoteModal from './QuoteModal'

export default function ContactCTA() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const quickActions = [
    {
      icon: Phone,
      title: "Llamada Inmediata",
      description: "Habla directamente con nuestro equipo",
      action: "Llamar Ahora",
      phone: "+1 (555) 010-1000",
      color: "from-green-500 to-emerald-500",
      delay: 0.1,
      type: "phone" // Tipo para identificar la acción
    },
    {
      icon: MessageCircle,
      title: "Chat en Vivo",
      description: "Respuestas instantáneas 24/7",
      action: "Iniciar Chat",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2,
      type: "chat",
      chatUrl: "https://wa.me/15550101000" // Ejemplo de WhatsApp
    },
    {
      icon: Calendar,
      title: "Agendar Cita",
      description: "Visita showroom o prueba de manejo",
      action: "Reservar Ahora",
      color: "from-purple-500 to-pink-500",
      delay: 0.3,
      type: "schedule"
    },
    {
      icon: Car,
      title: "Cotización Express",
      description: "Presupuesto sin compromiso",
      action: "Solicitar Cotización",
      color: "from-orange-500 to-red-500",
      delay: 0.4,
      type: "quote"
    }
  ]

  const handleActionClick = (action: any) => {
    switch (action.type) {
      case 'phone':
        window.open(`tel:${action.phone}`, '_self')
        break
      case 'chat':
        window.open(action.chatUrl, '_blank')
        break
      case 'schedule':
        setActiveModal('schedule')
        break
      case 'quote':
        setActiveModal('quote')
        break
      default:
        break
    }
  }

  const handleMainCTAClick = (type: 'advisor' | 'catalog') => {
    if (type === 'advisor') {
      setActiveModal('contact')
    } else {
      // Navegar al catálogo
      window.location.href = '/catalogo'
    }
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Listo para <span className="text-red-600">Comenzar</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elige la forma más conveniente para contactarnos y da el primer paso hacia tu próximo vehículo
            </p>
          </motion.div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: action.delay }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full relative overflow-hidden cursor-pointer"
                  onClick={() => handleActionClick(action)}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg transition-shadow`}
                  >
                    <action.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-white font-bold text-lg mb-2">
                      {action.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {action.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 group-hover:scale-105">
                      {action.action}
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white rounded-full -mt-16 -mr-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-white rounded-full -mb-12 -ml-12"></div>
              </div>

              <div className="relative z-10">
                <Car className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Transforma tu Experiencia Automotriz
                </h3>
                <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                  Únete a miles de clientes satisfechos que ya encontraron su vehículo ideal con AutoPremium
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleMainCTAClick('advisor')}
                    className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Solicitar Asesoría Personal
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleMainCTAClick('catalog')}
                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
                  >
                    Ver Catálogo Completo
                  </motion.button>
                </div>

                {/* Contact Info */}
                <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-red-100">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <a href="tel:+15550101000" className="font-semibold hover:underline">
                      +1 (555) 010-1000
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">chat.autopremium.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modales */}
      <ContactModal 
        isOpen={activeModal === 'contact'} 
        onClose={() => setActiveModal(null)} 
      />
      <ScheduleModal 
        isOpen={activeModal === 'schedule'} 
        onClose={() => setActiveModal(null)} 
      />
      <QuoteModal 
        isOpen={activeModal === 'quote'} 
        onClose={() => setActiveModal(null)} 
      />
    </>
  )
}