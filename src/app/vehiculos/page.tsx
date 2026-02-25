// app/vehiculos/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Grid, List } from 'lucide-react'
import VehicleFilters from '@/components/vehicles/VehicleFilters'
import VehicleSearch from '@/components/vehicles/VehicleSearch'
import ViewToggle from '@/components/vehicles/ViewToggle'
import VehicleCard from '@/components/vehicles/VehicleCard'
import VehicleList from '@/components/vehicles/VehicleList'

// Datos de ejemplo - después puedes usar una API
// En app/vehiculos/page.tsx - Datos completos y corregidos
const vehiclesData = [
  {
    id: 1,
    name: "BMW M4 Competition 2024",
    price: 85000, // ← Número sin formato
    image: "/autos/bmw-m4.jpg",
    type: "deportivo",
    year: 2024,
    mileage: 1500,
    fuel: "gasolina",
    transmission: "automático",
    features: ["510 HP", "0-100km/h: 3.8s", "Tracción trasera", "Asientos deportivos", "Sistema audio premium"],
    description: "El BMW M4 Competition combina lujo y alto rendimiento en un paquete deportivo excepcional. Motor twin-turbo de 3.0L con 510 caballos de fuerza.",
    available: true,
    featured: true
  },
  {
    id: 2,
    name: "Audi Q8 Premium Plus",
    price: 72000, // ← Número sin formato
    image: "/autos/audi-q8.jpg",
    type: "suv",
    year: 2024,
    mileage: 800,
    fuel: "híbrido",
    transmission: "automático",
    features: ["V6 Turbo", "AWD Quattro", "Asientos ventilados", "Techo panorámico", "Asistencia conducción"],
    description: "SUV premium con tecnología de vanguardia y confort excepcional. Diseño elegante y capacidades todoterreno.",
    available: true,
    featured: false
  },
  {
    id: 3,
    name: "Mercedes-Benz Clase C 2024",
    price: 58000, // ← Número sin formato (sin $ ni comas)
    image: "/autos/mercedes-clase-c.jpg",
    type: "sedan",
    year: 2024,
    mileage: 1200,
    fuel: "híbrido",
    transmission: "automático",
    features: ["Motor híbrido", "Paquete lujo", "Techo solar", "MBUX Premium", "Asistente parking"],
    description: "El Mercedes Clase C redefine la elegancia en sedanes premium. Tecnología MBUX y confort incomparable.",
    available: true,
    featured: true
  },
  {
    id: 4,
    name: "Tesla Model 3 Performance",
    price: 45000, // ← Número sin formato
    image: "/autos/tesla-model3.jpg", 
    type: "eléctrico",
    year: 2024,
    mileage: 500,
    fuel: "eléctrico",
    transmission: "automático",
    features: ["0 Emisiones", "Autopilot", "450km autonomía", "Aceleración Ludicrous", "Pantalla táctil 15\"", "Actualizaciones OTA"],
    description: "Vehículo eléctrico de alto rendimiento con tecnología autónoma. Aceleración instantánea y cero emisiones.",
    available: true,
    featured: false
  },
  {
    id: 5,
    name: "Porsche 911 Carrera S",
    price: 120000, // ← Número sin formato
    image: "/autos/porsche-911.jpg",
    type: "deportivo",
    year: 2024,
    mileage: 300,
    fuel: "gasolina",
    transmission: "automático",
    features: ["3.8s 0-100 km/h", "443 HP", "Transmisión PDK", "Suspensión adaptativa", "Escape deportivo", "Frenos cerámicos"],
    description: "Icono deportivo alemán con precisión de ingeniería. Experiencia de conducción pura y emocionante.",
    available: false, // ← Ejemplo de no disponible
    featured: true
  },
  {
    id: 6, 
    name: "Range Rover Sport Autobiography",
    price: 95000, // ← Número sin formato
    image: "/autos/range-rover.jpg",
    type: "suv",
    year: 2024,
    mileage: 1800,
    fuel: "gasolina",
    transmission: "automático",
    features: ["Lujo extremo", "Capacidades Off-Road", "Motor V8", "Asientos masajeadores", "Sistema Meridian", "Suspensión aire"],
    description: "SUV de lujo que combina capacidades todoterreno excepcionales con el máximo confort y tecnología.",
    available: true,
    featured: false
  },
  {
    id: 7,
    name: "Toyota RAV4 Hybrid Limited",
    price: 35000,
    image: "/autos/toyota-rav4.jpg",
    type: "suv",
    year: 2024,
    mileage: 2500,
    fuel: "hibrido",
    transmission: "automático",
    features: ["Eficiencia combustible", "AWD", "Toyota Safety Sense", "Cámara 360°", "Connectividad Apple CarPlay"],
    description: "SUV híbrido confiable y eficiente. Perfecto para ciudad y aventuras familiares.",
    available: true,
    featured: false
  },
  {
    id: 8,
    name: "Ford Mustang Mach-E GT",
    price: 62000,
    image: "/autos/ford-mustang-mache.jpg",
    type: "electrico",
    year: 2024,
    mileage: 600,
    fuel: "eléctrico",
    transmission: "automático",
    features: ["480 HP", "0-100km/h en 3.5s", "Autonomía 435km", "Tracción AWD", "Pantalla vertical 15.5\"", "Carga rápida"],
    description: "Mustang totalmente eléctrico que mantiene el espíritu deportivo con tecnología de vanguardia.",
    available: true,
    featured: true
  }
]

type FilterType = {
  type: string[]
  priceRange: [number, number]
  year: number[]
  fuel: string[]
  transmission: string[]
  features: string[]
}

export default function VehiculosPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<FilterType>({
    type: [],
    priceRange: [0, 200000],
    year: [],
    fuel: [],
    transmission: [],
    features: []
  })
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData)

  // Filtrado en tiempo real
  useEffect(() => {
    let results = vehiclesData

    // Búsqueda por texto
    if (searchTerm) {
      results = results.filter(vehicle =>
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtros por tipo
    if (filters.type.length > 0) {
      results = results.filter(vehicle => filters.type.includes(vehicle.type))
    }

    // Filtro por precio
    results = results.filter(vehicle => 
      vehicle.price >= filters.priceRange[0] && 
      vehicle.price <= filters.priceRange[1]
    )

    // Filtro por año
    if (filters.year.length > 0) {
      results = results.filter(vehicle => filters.year.includes(vehicle.year))
    }

    // Filtro por combustible
    if (filters.fuel.length > 0) {
      results = results.filter(vehicle => filters.fuel.includes(vehicle.fuel))
    }

    // Filtro por transmisión
    if (filters.transmission.length > 0) {
      results = results.filter(vehicle => filters.transmission.includes(vehicle.transmission))
    }

    setFilteredVehicles(results)
  }, [searchTerm, filters])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section del Catálogo */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mt-5 mb-6">
              Nuestro <span className="text-red-600">Catálogo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Descubre nuestra exclusiva colección de vehículos premium
            </p>
            <VehicleSearch 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </motion.div>
        </div>
      </section>

      {/* Controles y Filtros */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Resultados y controles */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                <Filter className="w-4 h-4" />
                Filtros
              </motion.button>
              
              <div className="text-gray-600">
                <span className="font-semibold">{filteredVehicles.length}</span> vehículos encontrados
              </div>
            </div>

            {/* Toggle de vista */}
            <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
          </div>

          {/* Filtros desplegables */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <VehicleFilters 
                  filters={filters}
                  onFiltersChange={setFilters}
                  vehicleCount={filteredVehicles.length}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Grid de Vehículos */}
      <section className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {filteredVehicles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No se encontraron vehículos
              </h3>
              <p className="text-gray-600">
                Intenta ajustar tus filtros o términos de búsqueda
              </p>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredVehicles.map((vehicle, index) => (
                <VehicleCard 
                  key={vehicle.id} 
                  vehicle={vehicle} 
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {filteredVehicles.map((vehicle, index) => (
                <VehicleList 
                  key={vehicle.id} 
                  vehicle={vehicle} 
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}