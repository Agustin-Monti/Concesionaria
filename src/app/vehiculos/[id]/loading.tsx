// app/vehiculos/[id]/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="animate-pulse">
        {/* Skeleton del hero */}
        <div className="bg-gray-300 h-80"></div>
        
        {/* Skeleton de los vehículos */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-2xl h-96"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}