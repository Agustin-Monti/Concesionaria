// app/vehiculos/[id]/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Pin, 
  MapPin, 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings,
  Users,
  Shield,
  Star
} from 'lucide-react'
import Link from 'next/link'
import VehicleGallery from '@/components/vehicles/VehicleGallery'
import VehicleSpecs from '@/components/vehicles/VehicleSpecs'
import VehicleContact from '@/components/vehicles/VehicleContact'
import SimilarVehicles from '@/components/vehicles/SimilarVehicles'

// Datos de ejemplo - en producción vendría de una API
const vehicleDetails = {
  id: 1,
  name: "BMW M4 Competition 2024",
  price: 85000,
  images: [
    "/autos/bmw-m4.jpg",
    "/autos/bmw-m4-interior.jpg",
    "/autos/bmw-m4-engine.jpg",
    "/autos/bmw-m4-side.jpg",
    "/autos/bmw-m4-back.jpg"
  ],
  type: "deportivo",
  year: 2024,
  mileage: 1500,
  fuel: "gasolina",
  transmission: "automático",
  color: "Gris Brooklyn Metálico",
  doors: 2,
  seats: 4,
  features: [
    "510 HP", "0-100km/h: 3.8s", "Tracción trasera", "Asientos deportivos M", 
    "Sistema audio Harman Kardon", "Pantalla táctil 12.3\"", "Asistente conducción",
    "Cámara 360°", "Parking asistido", "Heads-up display", "Climatizador 4 zonas",
    "Llantas aleación 19\"", "Faros LED adaptativos", "Sistema escape deportivo"
  ],
  description: "El BMW M4 Competition 2024 representa la cúspide de la ingeniería deportiva alemana. Con un motor twin-turbo de 3.0 litros que genera 510 caballos de fuerza, este vehículo ofrece un rendimiento excepcional combinado con el lujo y la tecnología característicos de la marca BMW.",
  fullDescription: `El BMW M4 Competition 2024 es mucho más que un automóvil deportivo; es una declaración de intenciones. Diseñado para aquellos que buscan la perfección en cada detalle, este vehículo combina un diseño agresivo y aerodinámico con un interior que redefine el concepto de lujo deportivo.

**Características Destacadas:**
- Motor S58 twin-turbo de 3.0L con 510 HP y 650 Nm de torque
- Aceleración de 0-100 km/h en solo 3.8 segundos
- Transmisión automática M Steptronic de 8 velocidades
- Suspensión M adaptativa con múltiples modos de conducción
- Sistema de tracción trasera M con diferencial electrónico
- Interior con asientos deportivos M multifuncionales
- Sistema de infoentretenimiento iDrive 8 con pantalla curva

**Tecnología Avanzada:**
- Paquete de asistencia a la conducción Professional
- Sistema de sonido Harman Kardon surround de 16 altavoces
- Proyección de cabeza con realidad aumentada
- Conectividad 5G y actualizaciones over-the-air
- Control por gestos y comando de voz natural`,

  specifications: {
    motor: "3.0L Twin-Turbo Straight-6",
    potencia: "510 HP @ 6250 rpm",
    torque: "650 Nm @ 2750-5500 rpm",
    transmision: "Automática M Steptronic 8 velocidades",
    traccion: "Trasera",
    consumo: "10.2L/100km (combinado)",
    emisiones: "234 g/km CO2",
    capacidad: "480L",
    peso: "1725 kg",
    aceleracion: "3.8s (0-100 km/h)",
    velocidad: "250 km/h (limitada)",
    frenos: "Discos ventilados (395mm frontales, 380mm traseros)"
  },
  
  sellerInfo: {
    name: "AutoPremium Concesionaria",
    rating: 4.9,
    reviews: 127,
    phone: "+1 (555) 123-4567",
    email: "ventas@autopremium.com",
    location: "Av. Principal #123, Ciudad"
  },
  
  available: true,
  featured: true,
  vin: "WBS43AY06NCE35512",
  warranty: "3 años / 100,000 km"
}

export default function VehicleDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  // En producción, aquí harías fetch del vehículo por ID
  const vehicle = vehicleDetails

  const tabs = [
    { id: 'overview', label: 'Resumen' },
    { id: 'specs', label: 'Especificaciones' },
    { id: 'features', label: 'Características' },
    { id: 'location', label: 'Ubicación' }
  ]

  return (
    <div className="min-h-screen bg-white mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Columna Izquierda - Galería */}
          <div className="space-y-6">
            <VehicleGallery 
              images={vehicle.images}
              currentImage={currentImage}
              onImageChange={setCurrentImage}
            />
          </div>

          {/* Columna Derecha - Información */}
          <div className="space-y-6">
            {/* Header de información */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {vehicle.name}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {vehicle.sellerInfo.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {vehicle.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Gauge className="w-4 h-4" />
                      {vehicle.mileage} km
                    </div>
                  </div>
                </div>
                
                {vehicle.featured && (
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Destacado
                  </div>
                )}
              </div>

              {/* Precio y disponibilidad */}
              <div className="flex items-center justify-between py-4 border-y border-gray-200">
                <div>
                  <p className="text-4xl font-bold text-red-600">
                    ${vehicle.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Precio final • {vehicle.available ? 'Disponible' : 'Reservado'}
                  </p>
                </div>
                
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                  vehicle.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {vehicle.available ? '✅ Disponible' : '⏳ Reservado'}
                </div>
              </div>
            </motion.div>

            {/* Tabs de navegación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="border-b border-gray-200"
            >
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-red-600 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Contenido de los tabs */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-h-[400px]"
            >
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="prose prose-lg max-w-none"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Descripción General</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {vehicle.description}
                    </p>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Detalles Destacados</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Fuel className="w-4 h-4 text-red-600" />
                          <span className='text-gray-700'>Combustible: <strong className="capitalize">{vehicle.fuel}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Settings className="w-4 h-4 text-red-600" />
                          <span className='text-gray-700'>Transmisión: <strong className="capitalize">{vehicle.transmission}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-red-600" />
                          <span className='text-gray-700'>Asientos: <strong>{vehicle.seats}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-600" />
                          <span className='text-gray-700'>Garantía: <strong>{vehicle.warranty}</strong></span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specs' && (
                  <VehicleSpecs specifications={vehicle.specifications} />
                )}

                {activeTab === 'features' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Características y Equipamiento</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'location' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Ubicación y Vendedor</h3>
                    <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{vehicle.sellerInfo.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{vehicle.sellerInfo.rating} • {vehicle.sellerInfo.reviews} reseñas</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-600" />
                          <span className="text-gray-700">{vehicle.sellerInfo.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700">Tel: {vehicle.sellerInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700">Email: {vehicle.sellerInfo.email}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Vehículos similares */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <SimilarVehicles currentVehicleId={vehicle.id} type={vehicle.type} />
        </motion.section>
      </div>
    </div>
  )
}