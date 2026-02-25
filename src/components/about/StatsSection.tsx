// components/about/StatsSection.tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Car, Users, Award, MapPin, Star, Clock } from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    icon: Car,
    number: 1500,
    suffix: "+",
    label: "Vehículos Vendidos",
    description: "Clientes satisfechos con sus nuevos automóviles",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Users,
    number: 1500,
    suffix: "+",
    label: "Clientes Felices",
    description: "Familias y empresas que confían en nosotros",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    number: 12,
    suffix: "",
    label: "Premios de Excelencia",
    description: "Reconocimientos por calidad y servicio",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: MapPin,
    number: 3,
    suffix: "",
    label: "Sucursales",
    description: "Cobertura nacional con atención personalizada",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Star,
    number: 98,
    suffix: "%",
    label: "Satisfacción",
    description: "Tasa de satisfacción del cliente",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Clock,
    number: 15,
    suffix: "+",
    label: "Años de Experiencia",
    description: "Trayectoria en el mercado automotriz",
    color: "from-teal-500 to-blue-500"
  }
]

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000 // 2 seconds
      const incrementTime = Math.floor(duration / end)
      
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) {
          clearInterval(timer)
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            En <span className="text-red-600">Números</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cifras que respaldan nuestra trayectoria y compromiso con la excelencia automotriz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card principal */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg transition-shadow`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number with counter */}
                <div className="text-center mb-4">
                  <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <Counter value={stat.number} suffix={stat.suffix} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.7
                }}
                className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para ser parte de nuestra historia?
            </h3>
            <p className="text-gray-300 mb-6">
              Únete a los miles de clientes satisfechos que ya confían en AutoPremium
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/vehiculos`}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                    >
                        Ver Catálogo Completo
                    </motion.button>
                </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Solicitar Asesoría
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}