// components/vehicles/VehicleFilters.tsx
'use client'
import { motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'

interface FilterType {
  type: string[]
  priceRange: [number, number]
  year: number[]
  fuel: string[]
  transmission: string[]
  features: string[]
}

interface VehicleFiltersProps {
  filters: FilterType
  onFiltersChange: (filters: FilterType) => void
  vehicleCount: number
}

const vehicleTypes = [
  { id: 'deportivo', name: 'Deportivo', count: 12 },
  { id: 'suv', name: 'SUV', count: 8 },
  { id: 'sedan', name: 'Sedán', count: 15 },
  { id: 'electrico', name: 'Eléctrico', count: 6 },
  { id: 'hibrido', name: 'Híbrido', count: 9 },
  { id: 'pickup', name: 'Pickup', count: 5 }
]

const fuelTypes = [
  { id: 'gasolina', name: 'Gasolina' },
  { id: 'diesel', name: 'Diésel' },
  { id: 'hibrido', name: 'Híbrido' },
  { id: 'electrico', name: 'Eléctrico' }
]

const transmissionTypes = [
  { id: 'automatico', name: 'Automático' },
  { id: 'manual', name: 'Manual' },
  { id: 'cvt', name: 'CVT' }
]

const featuresList = [
  { id: 'aire-acondicionado', name: 'Aire Acondicionado' },
  { id: 'camara-retroceso', name: 'Cámara de Retroceso' },
  { id: 'gps', name: 'Sistema de Navegación' },
  { id: 'asientos-cuero', name: 'Asientos de Cuero' },
  { id: 'sunroof', name: 'Techo Solar' },
  { id: 'sensor-estacionamiento', name: 'Sensores de Estacionamiento' }
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 10 }, (_, i) => currentYear - i)

export default function VehicleFilters({ filters, onFiltersChange, vehicleCount }: VehicleFiltersProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const updateFilter = (key: keyof FilterType, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    })
  }

  const toggleArrayFilter = (key: keyof FilterType, value: string) => {
    const currentArray = filters[key] as string[]
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value]
    
    updateFilter(key, newArray)
  }

  const clearAllFilters = () => {
    onFiltersChange({
      type: [],
      priceRange: [0, 200000],
      year: [],
      fuel: [],
      transmission: [],
      features: []
    })
  }

  const FilterSection = ({ title, children, sectionKey }: { title: string, children: React.ReactNode, sectionKey: string }) => (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setActiveSection(activeSection === sectionKey ? null : sectionKey)}
        className="flex justify-between items-center w-full text-left font-semibold text-gray-900 hover:text-red-600 transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${
          activeSection === sectionKey ? 'rotate-180' : ''
        }`} />
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: activeSection === sectionKey ? 'auto' : 0,
          opacity: activeSection === sectionKey ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 space-y-2">
          {children}
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mt-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">Filtrar Vehículos</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{vehicleCount} resultados</span>
          <button
            onClick={clearAllFilters}
            className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Limpiar filtros
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Rango de Precio */}
        <FilterSection title="Rango de Precio" sectionKey="price">
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>${filters.priceRange[0].toLocaleString()}</span>
              <span>${filters.priceRange[1].toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="200000"
              step="5000"
              value={filters.priceRange[1]}
              onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex gap-2">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => updateFilter('priceRange', [parseInt(e.target.value) || 0, filters.priceRange[1]])}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Mín"
              />
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value) || 200000])}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Máx"
              />
            </div>
          </div>
        </FilterSection>

        {/* Tipo de Vehículo */}
        <FilterSection title="Tipo de Vehículo" sectionKey="type">
          <div className="grid grid-cols-2 gap-2">
            {vehicleTypes.map(type => (
              <label key={type.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.type.includes(type.id)}
                  onChange={() => toggleArrayFilter('type', type.id)}
                  className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {type.name} <span className="text-gray-400">({type.count})</span>
                </span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Año */}
        <FilterSection title="Año" sectionKey="year">
          <div className="grid grid-cols-3 gap-2">
            {years.map(year => (
              <label key={year} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.year.includes(year)}
                  onChange={() => toggleArrayFilter('year', year.toString())}
                  className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">{year}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Combustible */}
        <FilterSection title="Tipo de Combustible" sectionKey="fuel">
          <div className="space-y-2">
            {fuelTypes.map(fuel => (
              <label key={fuel.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.fuel.includes(fuel.id)}
                  onChange={() => toggleArrayFilter('fuel', fuel.id)}
                  className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">{fuel.name}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Transmisión */}
        <FilterSection title="Transmisión" sectionKey="transmission">
          <div className="space-y-2">
            {transmissionTypes.map(trans => (
              <label key={trans.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.transmission.includes(trans.id)}
                  onChange={() => toggleArrayFilter('transmission', trans.id)}
                  className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">{trans.name}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Características */}
        <FilterSection title="Características" sectionKey="features">
          <div className="space-y-2">
            {featuresList.map(feature => (
              <label key={feature.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature.id)}
                  onChange={() => toggleArrayFilter('features', feature.id)}
                  className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">{feature.name}</span>
              </label>
            ))}
          </div>
        </FilterSection>
      </div>
    </div>
  )
}