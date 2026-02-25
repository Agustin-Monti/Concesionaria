// components/contact/QuoteModal.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Car, DollarSign, Calendar, TrendingUp, User, Phone, Mail, Clock } from 'lucide-react'
import { useState } from 'react'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: 'new',
    brand: '',
    model: '',
    year: '',
    budget: '',
    financing: 'not-sure',
    timeline: '1-month',
    features: [] as string[],
    comments: ''
  })

  const vehicleTypes = [
    { value: 'new', label: 'Vehículo Nuevo' },
    { value: 'used', label: 'Vehículo Seminuevo' },
    { value: 'both', label: 'No estoy seguro' }
  ]

  const budgets = [
    { value: 'under-20k', label: 'Menos de $20,000' },
    { value: '20k-35k', label: '$20,000 - $35,000' },
    { value: '35k-50k', label: '$35,000 - $50,000' },
    { value: '50k-75k', label: '$50,000 - $75,000' },
    { value: 'over-75k', label: 'Más de $75,000' }
  ]

  const financingOptions = [
    { value: 'cash', label: 'Pago de contado' },
    { value: 'credit', label: 'Financiamiento' },
    { value: 'not-sure', label: 'No estoy seguro' }
  ]

  const timelines = [
    { value: 'immediate', label: 'Inmediato' },
    { value: '1-month', label: '1 mes' },
    { value: '3-months', label: '3 meses' },
    { value: '6-months', label: '6 meses' }
  ]

  const featureOptions = [
    'Aire acondicionado',
    'Cámara de reversa',
    'Sensores de estacionamiento',
    'Pantalla táctil',
    'Sistema de navegación',
    'Asientos de cuero',
    'Techo solar',
    'Sistema de sonido premium',
    'Control crucero',
    'Asientos calefaccionados'
  ]

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de envío aquí
    console.log('Cotización solicitada:', formData)
    // Aquí podrías mostrar un mensaje de confirmación
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Cotización Express
                </h3>
                <p className="text-gray-600 mt-1">
                  Recibe una cotización personalizada sin compromiso
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información Personal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-3">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-red-600" />
                    Información de Contacto
                  </h4>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder='Nombre Completo'
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="tel"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder='Teléfono'
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder='Email'
                    />
                  </div>
                </div>
              </div>

              {/* Tipo de Vehículo */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Car className="w-5 h-5 text-red-600" />
                  Preferencias del Vehículo
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Vehículo
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                      value={formData.vehicleType}
                      onChange={(e) => setFormData(prev => ({ ...prev, vehicleType: e.target.value }))}
                    >
                      {vehicleTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marca (Opcional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                      placeholder="Ej: Toyota"
                      value={formData.brand}
                      onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modelo (Opcional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                      placeholder="Ej: Camry"
                      value={formData.model}
                      onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              {/* Presupuesto y Financiamiento */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rango de Presupuesto
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    value={formData.budget}
                    onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  >
                    <option value="">Selecciona un rango</option>
                    {budgets.map((budget) => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Opciones de Pago
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    value={formData.financing}
                    onChange={(e) => setFormData(prev => ({ ...prev, financing: e.target.value }))}
                  >
                    {financingOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tiempo y Características */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tiempo de Compra
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    value={formData.timeline}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                  >
                    {timelines.map((timeline) => (
                      <option key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Año Preferido (Opcional)
                  </label>
                  <input
                    type="number"
                    min="2010"
                    max="2024"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    placeholder="2024"
                    value={formData.year}
                    onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                  />
                </div>
              </div>

              {/* Características Deseadas */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Características Deseadas (Opcional)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {featureOptions.map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => toggleFeature(feature)}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500 "
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Comentarios Adicionales */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios Adicionales
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-gray-600"
                  placeholder="Requisitos específicos o preguntas..."
                  value={formData.comments}
                  onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                />
              </div>

              {/* Beneficios */}
              <div className="bg-blue-50 rounded-xl p-4">
                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  ¿Qué incluye tu cotización?
                </h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Precio final con todos los impuestos incluidos</li>
                  <li>• Opciones de financiamiento personalizadas</li>
                  <li>• Planes de garantía extendida</li>
                  <li>• Cotización de seguro</li>
                  <li>• Ofertas especiales disponibles</li>
                </ul>
              </div>

              {/* Botones */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <DollarSign className="w-5 h-5" />
                  Solicitar Cotización
                </button>
              </div>
            </form>

            {/* Tiempo de Respuesta */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                <Clock className="w-4 h-4 inline mr-1" />
                Recibirás tu cotización en menos de 2 horas hábiles
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}