// components/vehicles/VehicleSpecs.tsx
'use client'
import { motion } from 'framer-motion'
import { Gauge, Fuel, Settings, Zap, Weight, Ruler } from 'lucide-react'

interface Specifications {
  motor: string
  potencia: string
  torque: string
  transmision: string
  traccion: string
  consumo: string
  emisiones: string
  capacidad: string
  peso: string
  aceleracion: string
  velocidad: string
  frenos: string
}

interface VehicleSpecsProps {
  specifications: Specifications
}

const specCategories = [
  {
    title: "Motor y Rendimiento",
    icon: Zap,
    specs: ['motor', 'potencia', 'torque', 'aceleracion', 'velocidad']
  },
  {
    title: "Transmisión y Tracción",
    icon: Settings,
    specs: ['transmision', 'traccion']
  },
  {
    title: "Eficiencia",
    icon: Fuel,
    specs: ['consumo', 'emisiones']
  },
  {
    title: "Dimensiones y Peso",
    icon: Ruler,
    specs: ['peso', 'capacidad']
  },
  {
    title: "Frenos y Seguridad",
    icon: Gauge,
    specs: ['frenos']
  }
]

export default function VehicleSpecs({ specifications }: VehicleSpecsProps) {
  const getSpecLabel = (key: string) => {
    const labels: { [key: string]: string } = {
      motor: "Motor",
      potencia: "Potencia",
      torque: "Torque",
      transmision: "Transmisión",
      traccion: "Tracción",
      consumo: "Consumo Combinado",
      emisiones: "Emisiones CO2",
      capacidad: "Capacidad Maletero",
      peso: "Peso",
      aceleracion: "0-100 km/h",
      velocidad: "Velocidad Máxima",
      frenos: "Sistema de Frenos"
    }
    return labels[key] || key
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Especificaciones Técnicas</h3>
      
      <div className="grid gap-6">
        {specCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <category.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">{category.title}</h4>
            </div>
            
            <div className="grid gap-3">
              {category.specs.map((specKey) => (
                <div key={specKey} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-600 font-medium">{getSpecLabel(specKey)}</span>
                  <span className="text-gray-900 font-semibold text-right">
                    {specifications[specKey as keyof Specifications]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tabla de especificaciones completa */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
      >
        <div className="bg-gray-900 text-white px-6 py-4">
          <h4 className="font-bold text-lg">Tabla de Especificaciones Completas</h4>
        </div>
        <div className="divide-y divide-gray-200">
          {Object.entries(specifications).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              className="grid grid-cols-3 px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="col-span-1">
                <span className="font-medium text-gray-900">{getSpecLabel(key)}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-700">{value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}