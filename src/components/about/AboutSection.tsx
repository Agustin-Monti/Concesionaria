// components/about/AboutSection.tsx
'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'

export default function AboutSection() {
  // Posts de Instagram de ejemplo (puedes usar una API después)
  const instagramPosts = [
    { id: 1, image: '/instagram/post1.jpg', likes: '2.4k', comments: '128' },
    { id: 2, image: '/instagram/post2.jpg', likes: '1.8k', comments: '94' },
    { id: 3, image: '/instagram/post3.jpg', likes: '3.1k', comments: '156' },
    { id: 4, image: '/instagram/post4.jpg', likes: '2.2k', comments: '112' },
    { id: 5, image: '/instagram/post5.jpg', likes: '4.5k', comments: '203' },
    { id: 6, image: '/instagram/post6.jpg', likes: '2.9k', comments: '134' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conoce Nuestra <span className="text-red-600">Concesionaria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 15 años ofreciendo los mejores vehículos con servicio premium y atención personalizada
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* COLUMNA IZQUIERDA - Instagram Feed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Síguenos en Instagram</h3>
                <p className="text-gray-600">@autopremium.concesionaria</p>
              </div>
            </div>

            {/* Grid de posts de Instagram */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {instagramPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Placeholder para imagen - reemplaza con imágenes reales */}
                  <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📸</span>
                  </div>
                  
                  {/* Overlay con stats */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="font-bold">❤️ {post.likes}</div>
                      <div className="text-sm">💬 {post.comments}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botón para seguir */}
            <motion.a
              href="https://instagram.com/tu-concesionaria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
            >
              <Instagram className="w-5 h-5" />
              Seguir en Instagram
            </motion.a>
          </motion.div>

          {/* COLUMNA DERECHA - Mapa y Información */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-3 rounded-2xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Visítanos</h3>
                <p className="text-gray-600">Te esperamos en nuestra sucursal</p>
              </div>
            </div>

            {/* MAPA DE GOOGLE MAPS REAL */}
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.52763132403169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1643037939558!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de nuestra concesionaria"
              />
            </div>

            {/* Información de contacto */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Información de Contacto</h4>
              
              <div className="space-y-4">
                {/* Dirección */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Dirección</p>
                    <p className="text-gray-600">Av. Principal #123, Col. Centro</p>
                    <p className="text-gray-600">Ciudad, Estado 12345</p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Horario de Atención</p>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sábados: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-3 mt-6">
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Llamar Ahora
                </motion.a>
                <motion.a
                  href="https://maps.google.com/?q=Av.+Principal+123,+Col.+Centro,+Ciudad,+Estado+12345"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cómo Llegar
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">15+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">5,000+</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">500+</div>
            <div className="text-gray-600">Vehículos Vendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">24/7</div>
            <div className="text-gray-600">Soporte Post-Venta</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}