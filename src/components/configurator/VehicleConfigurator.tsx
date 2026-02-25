// components/configurator/VehicleConfigurator.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Paintbrush, Settings, DollarSign, Car, Zap, Shield, Package } from 'lucide-react'

export default function VehicleConfigurator() {
  const [color, setColor] = useState('#dc2626')
  const [wheels, setWheels] = useState('standard')
  const [interior, setInterior] = useState('leather-black')
  const [selectedPackage, setSelectedPackage] = useState('premium')
  const [basePrice] = useState(45000)

  // Configuraciones disponibles
  const colors = [
    { name: 'Rojo Racing', value: '#dc2626', price: 0 },
    { name: 'Azul Profundo', value: '#1e40af', price: 500 },
    { name: 'Negro Ébano', value: '#000000', price: 0 },
    { name: 'Blanco Nacarado', value: '#f8fafc', price: 1000 },
    { name: 'Verde Racing', value: '#16a34a', price: 800 },
    { name: 'Gris Titanio', value: '#6b7280', price: 300 }
  ]

  const wheelOptions = [
    { id: 'standard', name: 'Llantas Standard 18"', price: 0, image: '🚗' },
    { id: 'sport', name: 'Llantas Deportivas 19"', price: 1500, image: '🏎️' },
    { id: 'premium', name: 'Aleación Premium 20"', price: 3000, image: '⭐' }
  ]

  const interiorOptions = [
    { id: 'leather-black', name: 'Cuero Negro', price: 0, color: '#000000' },
    { id: 'leather-beige', name: 'Cuero Beige', price: 1200, color: '#f5f5dc' },
    { id: 'leather-red', name: 'Cuero Rojo', price: 1800, color: '#dc2626' },
    { id: 'alcantara', name: 'Alcantara Sport', price: 2500, color: '#374151' }
  ]

  const packages = [
    { id: 'basic', name: 'Paquete Básico', price: 0, features: ['Audio básico', 'Climatizador'] },
    { id: 'premium', name: 'Paquete Premium', price: 5000, features: ['Sistema audio premium', 'Asientos ventilados', 'Heads-up display'] },
    { id: 'performance', name: 'Paquete Performance', price: 8000, features: ['Suspensión deportiva', 'Frenos mejorados', 'Modo track'] }
  ]

  // Calcular precio total
  const selectedColorObj = colors.find(c => c.value === color)
  const selectedWheelsObj = wheelOptions.find(w => w.id === wheels)
  const selectedInteriorObj = interiorOptions.find(i => i.id === interior)
  const selectedPackageObj = packages.find(p => p.id === selectedPackage)

  const totalPrice = basePrice + 
    (selectedColorObj?.price || 0) + 
    (selectedWheelsObj?.price || 0) + 
    (selectedInteriorObj?.price || 0) + 
    (selectedPackageObj?.price || 0)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4 text-gray-900"
        >
          Configura Tu Vehículo
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Personaliza cada detalle a tu estilo y descubre el precio en tiempo real
        </motion.p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* COLUMNA IZQUIERDA - Vista previa y resumen */}
          <div className="space-y-6">
            {/* Vista previa del vehículo */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <Car className="w-6 h-6 text-red-600" />
                Vista Previa
              </h3>
              
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-gray-300 rounded-xl flex items-center justify-center overflow-hidden">
                {/* Vehículo 3D simplificado */}
                <motion.div
                  key={color}
                  animate={{ backgroundColor: color }}
                  className="relative w-56 h-28 rounded-lg shadow-2xl border-2 border-white/30"
                >
                  {/* Ventanas */}
                  <div className="absolute top-2 left-4 right-4 h-6 bg-blue-400/30 rounded-t-lg backdrop-blur-sm border-b border-white/20"></div>
                  {/* Llantas */}
                  <div className="absolute -bottom-2 left-6 w-8 h-3 bg-gray-900 rounded-full border border-gray-700"></div>
                  <div className="absolute -bottom-2 right-6 w-8 h-3 bg-gray-900 rounded-full border border-gray-700"></div>
                  {/* Faros */}
                  <div className="absolute top-5 -left-1 w-3 h-2 bg-yellow-400 rounded-r-full border border-yellow-300"></div>
                  <div className="absolute top-5 -right-1 w-3 h-2 bg-yellow-400 rounded-l-full border border-yellow-300"></div>
                </motion.div>
                
                {/* Precio flotante */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-gray-200"
                >
                  <p className="text-2xl font-bold text-gray-900">${totalPrice.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 font-medium">Precio final</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Resumen de selecciones */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <Package className="w-6 h-6 text-red-600" />
                Tu Configuración
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Vehículo base:</span>
                  <span className="font-semibold text-gray-900">${basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Color {selectedColorObj?.name}:</span>
                  <span className="font-semibold text-green-600">+${selectedColorObj?.price || 0}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">{selectedWheelsObj?.name}:</span>
                  <span className="font-semibold text-green-600">+${selectedWheelsObj?.price || 0}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">{selectedInteriorObj?.name}:</span>
                  <span className="font-semibold text-green-600">+${selectedInteriorObj?.price || 0}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">{selectedPackageObj?.name}:</span>
                  <span className="font-semibold text-green-600">+${selectedPackageObj?.price || 0}</span>
                </div>
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-gray-300">
                  <span className="text-lg font-bold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-red-600">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA - Opciones de configuración */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Selector de color */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Paintbrush className="w-5 h-5 text-red-600" />
                Color Exterior
                <span className="text-sm font-medium text-green-600 ml-auto">
                  +${selectedColorObj?.price || 0}
                </span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {colors.map((colorOption) => (
                  <motion.button
                    key={colorOption.value}
                    onClick={() => setColor(colorOption.value)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all shadow-md ${
                      color === colorOption.value 
                        ? 'border-red-600 ring-2 ring-red-200' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: colorOption.value }}
                    title={colorOption.name}
                  >
                    {colorOption.price > 0 && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                        +
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Selector de llantas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-red-600" />
                Llantas
                <span className="text-sm font-medium text-green-600 ml-auto">
                  +${selectedWheelsObj?.price || 0}
                </span>
              </h3>
              <div className="grid gap-3">
                {wheelOptions.map((wheel) => (
                  <motion.button
                    key={wheel.id}
                    onClick={() => setWheels(wheel.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      wheels === wheel.id
                        ? 'border-red-600 bg-red-50 text-gray-900'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{wheel.image}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{wheel.name}</div>
                        {wheel.price > 0 ? (
                          <div className="text-sm text-green-600 font-medium">+${wheel.price}</div>
                        ) : (
                          <div className="text-sm text-gray-500">Incluido</div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Selector de interior */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                Interior
                <span className="text-sm font-medium text-green-600 ml-auto">
                  +${selectedInteriorObj?.price || 0}
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interiorOptions.map((int) => (
                  <motion.button
                    key={int.id}
                    onClick={() => setInterior(int.id)}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      interior === int.id
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div 
                      className="w-full h-12 rounded-lg mb-3 border-2 border-gray-300 shadow-sm"
                      style={{ backgroundColor: int.color }}
                    />
                    <div className="text-sm font-semibold text-gray-900 text-center">{int.name}</div>
                    {int.price > 0 ? (
                      <div className="text-xs text-green-600 font-medium text-center mt-1">+${int.price}</div>
                    ) : (
                      <div className="text-xs text-gray-500 text-center mt-1">Incluido</div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Selector de paquetes */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-red-600" />
                Paquetes de Equipamiento
                <span className="text-sm font-medium text-green-600 ml-auto">
                  +${selectedPackageObj?.price || 0}
                </span>
              </h3>
              <div className="grid gap-3">
                {packages.map((pkg) => (
                  <motion.button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedPackage === pkg.id
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-gray-900">{pkg.name}</div>
                      {pkg.price > 0 ? (
                        <div className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                          +${pkg.price}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          Incluido
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Botón de acción */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
            >
              <DollarSign className="inline w-5 h-5 mr-2" />
              Solicitar Cotización
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}