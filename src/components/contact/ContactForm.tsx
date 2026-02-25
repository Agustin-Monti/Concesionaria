// components/contact/ContactForm.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, User, Mail, Phone, MessageSquare, Car } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Aquí iría la lógica real de envío
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-white" id="contact-form">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Envíanos un <span className="text-red-600">Mensaje</span>
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Nombre */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </motion.div>

              {/* Teléfono */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </motion.div>

              {/* Interés */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tu Interés
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="general">Consulta General</option>
                    <option value="test-drive">Prueba de Manejo</option>
                    <option value="purchase">Compra de Vehículo</option>
                    <option value="service">Servicio Técnico</option>
                    <option value="finance">Financiamiento</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </motion.div>
            </div>

            {/* Mensaje */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-6"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}