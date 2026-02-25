// components/about/StoryTimeline.tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Car, Building, Award, Users, Rocket } from 'lucide-react'

const milestones = [
  {
    year: "2008",
    title: "Nuestros Inicios",
    description: "Fundación de AutoPremium con una visión clara: revolucionar la experiencia de compra de vehículos.",
    icon: Building,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2012",
    title: "Primera Expansión",
    description: "Apertura de nuestra segunda sucursal y expansión de la flota a más de 100 vehículos premium.",
    icon: Car,
    color: "from-green-500 to-emerald-500"
  },
  {
    year: "2016",
    title: "Reconocimiento de Excelencia",
    description: "Premio a la Mejor Concesionaria del Año por calidad de servicio y satisfacción del cliente.",
    icon: Award,
    color: "from-yellow-500 to-orange-500"
  },
  {
    year: "2020",
    title: "Plataforma Digital",
    description: "Lanzamiento de nuestra plataforma online con experiencia de compra 100% digital integrada.",
    icon: Users,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2024",
    title: "Innovación Continua",
    description: "Implementación de realidad aumentada y configurador 3D para una experiencia inmersiva.",
    icon: Rocket,
    color: "from-red-500 to-pink-500"
  }
]

export default function StoryTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestra <span className="text-red-600">Historia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un viaje de innovación, crecimiento y compromiso con la excelencia automotriz
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 to-blue-600 h-full hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Contenido */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.color}`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Punto en la línea */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                {/* Espacio vacío para alineación */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}