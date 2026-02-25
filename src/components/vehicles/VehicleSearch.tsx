// components/vehicles/VehicleSearch.tsx
'use client'
import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useState } from 'react'

interface VehicleSearchProps {
  searchTerm: string
  onSearchChange: (term: string) => void
}

export default function VehicleSearch({ searchTerm, onSearchChange }: VehicleSearchProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative max-w-2xl mx-auto"
    >
      <div className={`relative flex items-center bg-white/10 backdrop-blur-sm rounded-2xl border-2 transition-all ${
        isFocused ? 'border-red-500 bg-white/20' : 'border-white/20'
      }`}>
        <Search className="absolute left-4 w-5 h-5 text-gray-300" />
        <input
          type="text"
          placeholder="Buscar por modelo, marca, características..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-12 pr-12 py-4 bg-transparent text-white placeholder-gray-300 focus:outline-none text-lg"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-300" />
          </button>
        )}
      </div>
    </motion.div>
  )
}