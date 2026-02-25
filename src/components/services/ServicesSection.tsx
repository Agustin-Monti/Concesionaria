// components/services/ServicesSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Shield, Zap, Users, Clock } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: "Garantía Extendida",
    description: "Hasta 5 años de garantía en todos nuestros vehículos"
  },
  {
    icon: Zap,
    title: "Entrega Inmediata",
    description: "Vehículos disponibles para entrega inmediata"
  },
  {
    icon: Users,
    title: "Asesoramiento Expertos",
    description: "Especialistas en automóviles a tu disposición"
  },
  {
    icon: Clock,
    title: "Servicio 24/7",
    description: "Soporte continuo para nuestros clientes"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Servicios Premium
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl text-center group cursor-pointer"
            >
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}