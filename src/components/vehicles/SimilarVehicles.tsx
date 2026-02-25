// components/vehicles/SimilarVehicles.tsx
'use client'
import { motion } from 'framer-motion'
import { Car, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import VehicleCard from './VehicleCard'

// Datos de ejemplo - en producción vendrían de una API
const similarVehiclesData = [
  {
    id: 7,
    name: "BMW M3 Competition 2024",
    price: 78000,
    image: "/autos/bmw-m3.jpg",
    type: "deportivo",
    year: 2024,
    mileage: 800,
    fuel: "gasolina",
    transmission: "automático",
    features: ["473 HP", "0-100km/h: 3.9s", "Tracción trasera"],
    description: "Sedán deportivo de alto rendimiento con tecnología de vanguardia.",
    available: true,
    featured: false
  },
  {
    id: 8,
    name: "Audi RS5 Sportback",
    price: 82000,
    image: "/autos/audi-rs5.jpg",
    type: "deportivo",
    year: 2024,
    mileage: 1200,
    fuel: "gasolina",
    transmission: "automático",
    features: ["444 HP", "Quattro AWD", "Sportback"],
    description: "Combina elegancia coupé con practicidad deportiva.",
    available: true,
    featured: true
  },
  {
    id: 9,
    name: "Mercedes-AMG C63 S",
    price: 89000,
    image: "/autos/mercedes-amg-c63.jpg",
    type: "deportivo",
    year: 2024,
    mileage: 600,
    fuel: "gasolina",
    transmission: "automático",
    features: ["503 HP", "V8 Biturbo", "4MATIC+"],
    description: "Potencia bruta y lujo alemán en un paquete deportivo.",
    available: true,
    featured: false
  }
]

interface SimilarVehiclesProps {
  currentVehicleId: number
  type: string
}

export default function SimilarVehicles({ currentVehicleId, type }: SimilarVehiclesProps) {
  // Filtrar vehículos similares (excluyendo el actual)
  const similarVehicles = similarVehiclesData.filter(vehicle => 
    vehicle.id !== currentVehicleId && vehicle.type === type
  ).slice(0, 3)

  if (similarVehicles.length === 0) return null

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Vehículos Similares
          </h2>
          <p className="text-gray-600">
            Descubre opciones similares que podrían interesarte
          </p>
        </div>
        
        <Link
          href="/vehiculos"
          className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
        >
          Ver todos los vehículos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarVehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <VehicleCard vehicle={vehicle} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Mensaje si no hay similares */}
      {similarVehicles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No hay vehículos similares
          </h3>
          <p className="text-gray-600 mb-6">
            Explora nuestro catálogo completo para más opciones
          </p>
          <Link
            href="/vehiculos"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </section>
  )
}