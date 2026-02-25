// components/vehicles/ViewToggle.tsx
'use client'
import { motion } from 'framer-motion'
import { Grid, List } from 'lucide-react'

interface ViewToggleProps {
  viewMode: 'grid' | 'list'
  onViewChange: (mode: 'grid' | 'list') => void
}

export default function ViewToggle({ viewMode, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1">
      <motion.button
        onClick={() => onViewChange('grid')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          viewMode === 'grid' 
            ? 'bg-white text-red-600 shadow-sm' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <Grid className="w-4 h-4" />
        <span className="text-sm font-medium">Grid</span>
      </motion.button>
      
      <motion.button
        onClick={() => onViewChange('list')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          viewMode === 'list' 
            ? 'bg-white text-red-600 shadow-sm' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <List className="w-4 h-4" />
        <span className="text-sm font-medium">Lista</span>
      </motion.button>
    </div>
  )
}