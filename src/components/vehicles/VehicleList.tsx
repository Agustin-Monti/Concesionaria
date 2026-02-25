// components/vehicles/VehicleList.tsx
'use client'
import { motion } from 'framer-motion'
import { Heart, Calendar, Gauge, Fuel, Settings } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Vehicle {
  id: number
  name: string
  price: number
  image: string
  type: string
  year: number
  mileage: number
  fuel: string
  transmission: string
  features: string[]
  description: string
  available: boolean
  featured: boolean
}

interface VehicleListProps {
  vehicle: Vehicle
  index: number
}

export default function VehicleList({ vehicle, index }: VehicleListProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Imagen */}
        <div className="lg:w-1/3 relative">
          <div className="relative h-48 lg:h-full bg-gray-200 overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse" />
            )}
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {vehicle.featured && (
                <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Destacado
                </span>
              )}
              <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                {vehicle.type}
              </span>
            </div>

            {/* Estado de disponibilidad */}
            <div className="absolute bottom-3 left-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                vehicle.available 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-500 text-white'
              }`}>
                {vehicle.available ? 'Disponible' : 'Reservado'}
              </span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="lg:w-2/3 p-6">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-3xl font-bold text-red-600">
                  ${vehicle.price}
                </p>
              </div>
              
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart 
                  className={`w-5 h-5 transition-colors ${
                    isFavorite ? 'fill-red-600 text-red-600' : 'text-gray-600'
                  }`} 
                />
              </button>
            </div>

            {/* Especificaciones */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 py-4 border-y border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <div>
                  <div className="font-medium">Año</div>
                  <div>{vehicle.year}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Gauge className="w-4 h-4" />
                <div>
                  <div className="font-medium">Kilometraje</div>
                  <div>{vehicle.mileage} km</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Fuel className="w-4 h-4" />
                <div>
                  <div className="font-medium">Combustible</div>
                  <div className="capitalize">{vehicle.fuel}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Settings className="w-4 h-4" />
                <div>
                  <div className="font-medium">Transmisión</div>
                  <div className="capitalize">{vehicle.transmission}</div>
                </div>
              </div>
            </div>

            {/* Características */}
            <div className="flex flex-wrap gap-2 mb-4">
              {vehicle.features.slice(0, 4).map((feature, i) => (
                <span 
                  key={i} 
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
              {vehicle.features.length > 4 && (
                <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
                  +{vehicle.features.length - 4}
                </span>
              )}
            </div>

            {/* Descripción */}
            <p className="text-gray-600 mb-6 flex-grow">
              {vehicle.description}
            </p>

            {/* Botones de acción */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Ver Detalles Completos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Contactar
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}