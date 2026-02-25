// components/vehicles/VehicleCard.tsx
'use client'
import { motion } from 'framer-motion'
import { Star, Heart, MapPin, Gauge, Fuel, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

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

interface VehicleCardProps {
  vehicle: Vehicle
  index: number
}

export default function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      {/* Header de la tarjeta */}
      <div className="relative">
        {/* Imagen del vehículo */}
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse" />
          )}
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {vehicle.featured && (
              <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Destacado
              </span>
            )}
            <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
              {vehicle.type}
            </span>
          </div>

          {/* Botón favorito */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                isFavorite ? 'fill-red-600 text-red-600' : 'text-gray-600'
              }`} 
            />
          </button>

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

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        {/* Información principal */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {vehicle.name}
          </h3>
          <p className="text-2xl font-bold text-red-600 mb-3">
            ${vehicle.price.toLocaleString()}
          </p>
        </div>

        {/* Especificaciones */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-y border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Gauge className="w-4 h-4" />
            <span>{vehicle.mileage} km</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Fuel className="w-4 h-4" />
            <span className="capitalize">{vehicle.fuel}</span>
          </div>
        </div>

        {/* Características */}
        <div className="flex flex-wrap gap-2 mb-6">
          {vehicle.features.slice(0, 3).map((feature, i) => (
            <span 
              key={i} 
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {feature}
            </span>
          ))}
          {vehicle.features.length > 3 && (
            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
              +{vehicle.features.length - 3}
            </span>
          )}
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {vehicle.description}
        </p>

        {/* Botones de acción */}
        <div className="flex gap-3">
          <Link href={`/vehiculos/${vehicle.id}`} className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Ver Detalles
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <Heart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}