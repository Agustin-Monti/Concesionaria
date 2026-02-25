// components/about/ValuesSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Heart, Shield, Zap, Users, Target, Globe } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: "Pasión Automotriz",
    description: "Vivimos y respiramos automóviles. Cada vehículo es tratado con el cuidado y atención que merece.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "Información clara y honesta. Sin sorpresas, solo la verdad sobre cada vehículo que ofrecemos.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Innovación Constante",
    description: "Siempre a la vanguardia con tecnología y procesos que mejoran tu experiencia de compra.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Enfoque en Clientes",
    description: "Tus necesidades son nuestra prioridad. Construimos relaciones, no solo ventas.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Excelencia Comprobada",
    description: "Calidad certificada en cada aspecto de nuestro servicio, desde la selección hasta el post-venta.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Globe,
    title: "Visión Global",
    description: "Conectamos tendencias internacionales con las necesidades locales del mercado automotriz.",
    color: "from-teal-500 to-blue-500"
  }
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-red-600">Valores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los principios que guían cada decisión y acción en AutoPremium
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Fondo gradiente para hover - ahora bien contenido */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
              
              {/* Efecto de borde sutil al hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 group-hover:scale-105 group-hover:blur-sm`} />
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full relative z-10 group-hover:border-transparent">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}