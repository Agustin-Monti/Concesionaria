// components/layout/Footer.tsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Car, 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1 - Logo y Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">AutoPremium</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Tu concesionaria de confianza con más de 15 años de experiencia. 
              Ofrecemos los mejores vehículos con garantía certificada y servicio premium.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Columna 2 - Enlaces Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link href="/vehiculos" className="block text-gray-300 hover:text-red-500 transition-colors">
                Todos los Vehículos
              </Link>
              <Link href="/vehiculos?tipo=deportivo" className="block text-gray-300 hover:text-red-500 transition-colors">
                Vehículos Deportivos
              </Link>
              <Link href="/vehiculos?tipo=suv" className="block text-gray-300 hover:text-red-500 transition-colors">
                SUVs
              </Link>
              <Link href="/vehiculos?tipo=electrico" className="block text-gray-300 hover:text-red-500 transition-colors">
                Vehículos Eléctricos
              </Link>
              <Link href="/financiamiento" className="block text-gray-300 hover:text-red-500 transition-colors">
                Financiamiento
              </Link>
              <Link href="/test-drive" className="block text-gray-300 hover:text-red-500 transition-colors">
                Agendar Test Drive
              </Link>
            </div>
          </motion.div>

          {/* Columna 3 - Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white mb-4">Nuestros Servicios</h3>
            <div className="space-y-2">
              <Link href="/servicios/venta" className="block text-gray-300 hover:text-red-500 transition-colors">
                Venta de Vehículos
              </Link>
              <Link href="/servicios/financiamiento" className="block text-gray-300 hover:text-red-500 transition-colors">
                Financiamiento
              </Link>
              <Link href="/servicios/seguros" className="block text-gray-300 hover:text-red-500 transition-colors">
                Seguros Automotrices
              </Link>
              <Link href="/servicios/mantenimiento" className="block text-gray-300 hover:text-red-500 transition-colors">
                Mantenimiento
              </Link>
              <Link href="/servicios/garantia" className="block text-gray-300 hover:text-red-500 transition-colors">
                Garantías Extendidas
              </Link>
              <Link href="/servicios/postventa" className="block text-gray-300 hover:text-red-500 transition-colors">
                Servicio Post-Venta
              </Link>
            </div>
          </motion.div>

          {/* Columna 4 - Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Av. Principal #123, Col. Centro<br />
                    Ciudad, Estado 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-red-500 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a href="mailto:info@autopremium.com" className="text-gray-300 hover:text-red-500 transition-colors">
                  info@autopremium.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Lunes - Viernes: 9:00 AM - 7:00 PM<br />
                    Sábados: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Suscríbete a Nuestro Newsletter</h3>
              <p className="text-gray-300">
                Recibe las últimas ofertas y nuevos vehículos en tu email.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AutoPremium Concesionaria. Todos los derechos reservados.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacidad" className="hover:text-red-500 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-red-500 transition-colors">
                Términos de Servicio
              </Link>
              <Link href="/cookies" className="hover:text-red-500 transition-colors">
                Cookies
              </Link>
            </div>

            {/* Botón para subir */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}