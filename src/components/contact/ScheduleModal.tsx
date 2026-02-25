// components/contact/ScheduleModal.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, MapPin, Car, User, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appointmentType: 'test-drive',
    preferredDate: '',
    preferredTime: '',
    branch: 'central',
    vehicleInterest: '',
    comments: ''
  })

  const appointmentTypes = [
    { value: 'test-drive', label: 'Prueba de Manejo', icon: Car },
    { value: 'showroom', label: 'Visita Showroom', icon: MapPin },
    { value: 'consultation', label: 'Consulta Personal', icon: User },
    { value: 'service', label: 'Servicio Técnico', icon: Clock }
  ]

  const branches = [
    { value: 'central', label: 'Sucursal Central' },
    { value: 'north', label: 'Zona Norte' },
    { value: 'south', label: 'Area Sur' }
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de envío aquí
    console.log('Cita agendada:', formData)
    // Aquí podrías mostrar un mensaje de confirmación
    onClose()
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
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
                  Agendar Cita
                </h3>
                <p className="text-gray-600 mt-1">
                  Programa tu visita y recibe atención personalizada
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
                    Información Personal
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

              {/* Tipo de Cita */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-600" />
                  Tipo de Cita
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {appointmentTypes.map((type) => {
                    const IconComponent = type.icon
                    return (
                      <label
                        key={type.value}
                        className={`relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.appointmentType === type.value
                            ? 'border-red-500 bg-red-50 text-gray-600'
                            : 'border-gray-300 hover:border-red-300 text-gray-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="appointmentType"
                          value={type.value}
                          checked={formData.appointmentType === type.value}
                          onChange={(e) => setFormData(prev => ({ ...prev, appointmentType: e.target.value }))}
                          className="sr-only"
                        />
                        <IconComponent className={`w-6 h-6 mb-2 ${
                          formData.appointmentType === type.value ? 'text-red-600' : 'text-gray-600'
                        }`} />
                        <span className="text-sm font-medium text-center">
                          {type.label}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Fecha y Hora */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha Preferida *
                  </label>
                  <input
                    type="date"
                    required
                    min={getTomorrowDate()}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hora Preferida *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                  >
                    <option value="">Selecciona una hora</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sucursal e Interés */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sucursal Preferida
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    value={formData.branch}
                    onChange={(e) => setFormData(prev => ({ ...prev, branch: e.target.value }))}
                  >
                    {branches.map((branch) => (
                      <option key={branch.value} value={branch.value}>
                        {branch.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehículo de Interés (Opcional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-600"
                    placeholder="Ej: Toyota Camry 2024"
                    value={formData.vehicleInterest}
                    onChange={(e) => setFormData(prev => ({ ...prev, vehicleInterest: e.target.value }))}
                  />
                </div>
              </div>

              {/* Comentarios */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios Adicionales
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-gray-600"
                  placeholder="Comentarios o requisitos especiales..."
                  value={formData.comments}
                  onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                />
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
                  className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  Confirmar Cita
                </button>
              </div>
            </form>

            {/* Información Adicional */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Recibirás una confirmación por email y SMS
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}