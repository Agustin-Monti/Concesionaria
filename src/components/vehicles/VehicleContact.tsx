// components/vehicles/VehicleContact.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MessageCircle, Calendar, CheckCircle } from 'lucide-react'

interface SellerInfo {
  name: string
  phone: string
  email: string
  rating: number
  reviews: number
}

interface VehicleContactProps {
  vehicleName: string
  price: number
  sellerInfo: SellerInfo
  available: boolean
}

export default function VehicleContact({ vehicleName, price, sellerInfo, available }: VehicleContactProps) {
  const [activeForm, setActiveForm] = useState<'info' | 'test-drive'>('info')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-gray-600">
          Nos pondremos en contacto contigo en las próximas 24 horas.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Te interesa este vehículo?</h3>
        <p className="text-gray-600">
          Contáctanos para más información o agendar una prueba de manejo
        </p>
      </div>

      {/* Botones de acción rápida */}
      <div className="grid grid-cols-2 gap-3">
        <motion.a
          href={`tel:${sellerInfo.phone}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Llamar Ahora
        </motion.a>
        
        <motion.a
          href={`https://wa.me/${sellerInfo.phone.replace(/\D/g, '')}?text=Hola, estoy interesado en el ${encodeURIComponent(vehicleName)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </motion.a>
      </div>

      {/* Selector de tipo de contacto */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveForm('info')}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
            activeForm === 'info'
              ? 'bg-white text-red-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Solicitar Info
        </button>
        <button
          onClick={() => setActiveForm('test-drive')}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
            activeForm === 'test-drive'
              ? 'bg-white text-red-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Test Drive
        </button>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>

        {activeForm === 'test-drive' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                Fecha Preferida
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                Hora Preferida
              </label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {activeForm === 'test-drive' ? 'Comentarios Adicionales' : 'Mensaje *'}
          </label>
          <textarea
            id="message"
            name="message"
            required={activeForm === 'info'}
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
            placeholder={
              activeForm === 'test-drive' 
                ? 'Alguna preferencia especial para la prueba de manejo...'
                : `Hola, estoy interesado en el ${vehicleName}. Por favor envíenme más información...`
            }
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting || !available}
          whileHover={{ scale: isSubmitting || !available ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting || !available ? 1 : 0.98 }}
          className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-colors ${
            isSubmitting || !available
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Enviando...
            </div>
          ) : activeForm === 'test-drive' ? (
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Solicitar Test Drive
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Solicitar Información
            </div>
          )}
        </motion.button>

        {!available && (
          <p className="text-center text-sm text-gray-500">
            Este vehículo no está disponible actualmente
          </p>
        )}

        <p className="text-xs text-gray-500 text-center">
          Al contactarnos, aceptas nuestra{' '}
          <a href="/privacidad" className="text-red-600 hover:underline">
            Política de Privacidad
          </a>
        </p>
      </form>

      {/* Información del vendedor */}
      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold text-gray-900 mb-2">Vendedor</h4>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">{sellerInfo.name}</p>
            <p className="text-sm text-gray-600">
              ⭐ {sellerInfo.rating} • {sellerInfo.reviews} reseñas
            </p>
          </div>
          <a
            href={`mailto:${sellerInfo.email}`}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  )
}