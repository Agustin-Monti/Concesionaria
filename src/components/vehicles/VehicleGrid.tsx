// components/vehicles/VehicleGrid.tsx
'use client'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const vehicles = [
  {
    id: 1,
    name: "BMW M4 Competition",
    price: "$85,000",
    image: "/autos/bmw-m4.jpg", // ✅ Ruta desde public/
    type: "deportivo",
    year: 2024,
    features: ["4.2s 0-100", "510 HP", "Automático"]
  },
  {
    id: 2,
    name: "Audi Q8 SUV",
    price: "$72,000",
    image: "/autos/audi-q8.jpg",
    type: "suv", 
    year: 2024,
    features: ["V6 Turbo", "AWD", "Premium"]
  },
  {
    id: 3,
    name: "Mercedes Clase C",
    price: "$58,000",
    image: "/autos/mercedes-clase-c.jpg",
    type: "sedan",
    year: 2024,
    features: ["Híbrido", "Lujo", "Tech Pack"]
  },
  {
    id: 4,
    name: "Tesla Model 3",
    price: "$45,000",
    image: "/autos/tesla-model3.jpg", 
    type: "eléctrico",
    year: 2024,
    features: ["0 Emisiones", "Autopilot", "450km"]
  },
  {
    id: 5,
    name: "Porsche 911",
    price: "$120,000",
    image: "/autos/porsche-911.jpg",
    type: "deportivo",
    year: 2024,
    features: ["3.8s 0-100", "443 HP", "PDK"]
  },
  {
    id: 6, 
    name: "Range Rover Sport",
    price: "$95,000",
    image: "/autos/range-rover.jpg",
    type: "suv",
    year: 2024,
    features: ["Lujo Extremo", "Off-Road", "V8"]
  }
]

export default function VehicleGrid() {
  const [filter, setFilter] = useState('all')
  
  // Filtrar vehículos
  const filteredVehicles = filter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === filter)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-gray-600 mb-12"
        >
          Nuestros Vehículos
        </motion.h2>
        
        {/* Filtros modernos */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {['all', 'deportivo', 'suv', 'sedan', 'eléctrico'].map((type) => (
            <motion.button
              key={type}
              onClick={() => setFilter(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                filter === type 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {type === 'all' ? 'Todos' : type.charAt(0).toUpperCase() + type.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Grid de vehículos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Imagen con Next.js Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Badge de tipo */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {vehicle.type}
                  </span>
                </div>
                {/* Badge de año */}
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                    {vehicle.year}
                  </span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{vehicle.name}</h3>
                <p className="text-2xl font-bold text-red-600 mb-4">{vehicle.price}</p>
                
                {/* Características */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Botón */}
                <Link href={`/vehiculos/${vehicle.id}`} className="flex-1">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
                  >
                    Ver Detalles
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje si no hay vehículos */}
        {filteredVehicles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No hay vehículos disponibles en esta categoría.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}