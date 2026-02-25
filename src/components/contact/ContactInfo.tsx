// components/contact/ContactInfo.tsx
'use client'
import { motion } from 'framer-motion'
import { Clock, Phone, Mail, MapPin, Car, Users, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ContactInfo() {
  const branches = [
    {
      city: "Ciudad Central",
      address: "Av. Principal 123, Centro",
      phone: "+1 (555) 010-1001",
      hours: "Lun-Vie: 8:00 AM - 8:00 PM",
      features: ["Ventas", "Servicio", "Showroom"],
      mapUrl: "https://maps.app.goo.gl/uy9yBTT5Vfd8TBH99" // Ejemplo de enlace
    },
    {
      city: "Zona Norte",
      address: "Blv. Norte 456, Distrito Financiero",
      phone: "+1 (555) 010-1002",
      hours: "Lun-Sab: 9:00 AM - 7:00 PM",
      features: ["Ventas Premium", "Pruebas de Manejo"],
      mapUrl: "https://maps.app.goo.gl/uy9yBTT5Vfd8TBH99" // Reemplaza con tu enlace real
    },
    {
      city: "Area Sur",
      address: "Calle Sur 789, Plaza Comercial",
      phone: "+1 (555) 010-1003",
      hours: "Lun-Dom: 10:00 AM - 6:00 PM",
      features: ["Servicio Express", "Atención Inmediata"],
      mapUrl: "https://maps.app.goo.gl/uy9yBTT5Vfd8TBH99" // Reemplaza con tu enlace real
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="contact-info">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-red-600">Sucursales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra la sucursal más cercana y descubre todos nuestros servicios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{branch.city}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-sm">{branch.address}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <a 
                    href={`tel:${branch.phone}`}
                    className="text-sm hover:text-red-600 transition-colors duration-300"
                  >
                    {branch.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-sm">{branch.hours}</span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Car className="w-4 h-4 text-red-600" />
                    Servicios:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botón con enlace a Google Maps */}
              <Link 
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  Ver en Mapa
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contacto General */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">¿Necesitas Ayuda Inmediata?</h3>
            <p className="text-xl text-red-100 mb-6">
              Nuestro equipo de atención al cliente está disponible para ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 text-lg">
                <Phone className="w-6 h-6" />
                <a 
                  href="tel:+15550101000"
                  className="font-semibold hover:underline"
                >
                  +1 (555) 010-1000
                </a>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Mail className="w-6 h-6" />
                <a 
                  href="mailto:contacto@autopremium.com"
                  className="font-semibold hover:underline"
                >
                  contacto@autopremium.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}