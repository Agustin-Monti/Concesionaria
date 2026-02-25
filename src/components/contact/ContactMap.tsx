// components/contact/ContactMap.tsx
'use client'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Car, Clock } from 'lucide-react'

export default function ContactMap() {
  const locations = [
    {
      id: 1,
      name: "Sucursal Central",
      address: "Av. Principal 123, Centro",
      coordinates: { lat: 40.7128, lng: -74.0060 },
      hours: "8:00 AM - 8:00 PM",
      phone: "+1 (555) 010-1001",
      services: ["Ventas", "Servicio", "Showroom"]
    },
    {
      id: 2,
      name: "Sucursal Norte",
      address: "Blv. Norte 456, Distrito Financiero",
      coordinates: { lat: 40.7589, lng: -73.9851 },
      hours: "9:00 AM - 7:00 PM",
      phone: "+1 (555) 010-1002",
      services: ["Ventas Premium", "Pruebas de Manejo"]
    },
    {
      id: 3,
      name: "Sucursal Sur",
      address: "Calle Sur 789, Plaza Comercial",
      coordinates: { lat: 40.7505, lng: -73.9934 },
      hours: "10:00 AM - 6:00 PM",
      phone: "+1 (555) 010-1003",
      services: ["Servicio Express", "Atención Inmediata"]
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Encuéntranos <span className="text-red-600">Fácilmente</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visita cualquiera de nuestras sucursales estratégicamente ubicadas para tu conveniencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mapa Interactivo (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-black"
          >
            {/* Simulación de mapa */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mapa Interactivo</h3>
                <p className="text-gray-400">Integración con Google Maps</p>
                <div className="mt-6 flex gap-4 justify-center">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.id}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full mb-2"></div>
                      <p className="text-sm font-semibold">{location.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Efectos de fondo */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
          </motion.div>

          {/* Lista de Ubicaciones */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{location.name}</h3>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold cursor-pointer flex items-center gap-1"
                      >
                        <Navigation className="w-3 h-3" />
                        Ruta
                      </motion.span>
                    </div>
                    
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{location.hours}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">P</span>
                        </div>
                        <span className="text-sm">{location.phone}</span>
                      </div>
                    </div>

                    {/* Servicios */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {location.services.map((service, i) => (
                        <span 
                          key={i}
                          className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    {/* Acciones */}
                    <div className="mt-4 flex gap-3">
                      <button className="flex-1 bg-white/20 text-white py-2 px-4 rounded-xl text-sm font-semibold hover:bg-white/30 transition-colors duration-300">
                        Llamar
                      </button>
                      <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors duration-300">
                        Direcciones
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Información Adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Horario Extendido</h4>
              <p className="text-gray-300 text-sm">Atención en horarios flexibles para tu conveniencia</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Estacionamiento Gratuito</h4>
              <p className="text-gray-300 text-sm">Amplio espacio para tu comodidad</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Fácil Acceso</h4>
              <p className="text-gray-300 text-sm">Ubicaciones estratégicas con buen transporte</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}