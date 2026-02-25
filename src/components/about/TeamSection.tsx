// components/about/TeamSection.tsx
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, Linkedin, Award, Star, Quote } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  description: string
  email: string
  phone: string
  linkedin: string
  specialties: string[]
  years: number
  achievements: string[]
}

interface TeamCardProps {
  member: TeamMember
  index: number
}

const teamMembers = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    position: "Director General",
    image: "/team/carlos-rodriguez.jpg",
    description: "Más de 20 años de experiencia en la industria automotriz. Apasionado por la innovación y excelencia en servicio al cliente.",
    email: "carlos@autopremium.com",
    phone: "+1 (555) 010-2001",
    linkedin: "carlos-rodriguez-auto",
    specialties: ["Estrategia Empresarial", "Relaciones Cliente", "Innovación"],
    years: 15,
    achievements: ["Fundador AutoPremium", "Premio Excelencia 2023", "Top Sales 5 años"]
  },
  {
    id: 2,
    name: "María González",
    position: "Gerente de Ventas",
    image: "/team/maria-gonzalez.jpg",
    description: "Especialista en ventas de vehículos premium con enfoque en experiencia personalizada del cliente.",
    email: "maria@autopremium.com",
    phone: "+1 (555) 010-2002",
    linkedin: "maria-gonzalez-ventas",
    specialties: ["Ventas Premium", "Customer Experience", "Negociación"],
    years: 8,
    achievements: ["Top Performer 2022", "Mejor Servicio Cliente", "Líder en Ventas"]
  },
  {
    id: 3,
    name: "Roberto Silva",
    position: "Especialista Técnico",
    image: "/team/roberto-silva.jpg",
    description: "Ingeniero mecánico con profundos conocimientos técnicos y pasión por la tecnología automotriz.",
    email: "roberto@autopremium.com",
    phone: "+1 (555) 010-2003",
    linkedin: "roberto-silva-tec",
    specialties: ["Diagnóstico Técnico", "Tecnología Automotriz", "Control Calidad"],
    years: 12,
    achievements: ["Certificación BMW", "Especialista Mercedes", "Innovación Técnica"]
  },
  {
    id: 4,
    name: "Ana Martínez",
    position: "Asesora Comercial",
    image: "/team/ana-martinez.jpg",
    description: "Enfocada en entender las necesidades únicas de cada cliente para ofrecer soluciones personalizadas.",
    email: "ana@autopremium.com",
    phone: "+1 (555) 010-2004",
    linkedin: "ana-martinez-comercial",
    specialties: ["Asesoría Personalizada", "Financiamiento", "Post-Venta"],
    years: 6,
    achievements: ["Rookie del Año 2020", "Mejor CSAT", "Clientes Recurrentes"]
  },
  {
    id: 5,
    name: "David Chen",
    position: "Especialista en Tecnología",
    image: "/team/david-chen.jpg",
    description: "Experto en integración tecnológica y sistemas digitales para una experiencia de compra moderna.",
    email: "david@autopremium.com",
    phone: "+1 (555) 010-2005",
    linkedin: "david-chen-tech",
    specialties: ["Digitalización", "Realidad Aumentada", "Sistemas CRM"],
    years: 4,
    achievements: ["Innovación Digital", "App Development", "Tech Integration"]
  },
  {
    id: 6,
    name: "Laura Hernández",
    position: "Gerente de Post-Venta",
    image: "/team/laura-hernandez.jpg",
    description: "Comprometida con el servicio continuo y satisfacción a largo plazo de nuestros clientes.",
    email: "laura@autopremium.com",
    phone: "+1 (555) 010-2006",
    linkedin: "laura-hernandez-service",
    specialties: ["Servicio Post-Venta", "Garantías", "Fidelización"],
    years: 10,
    achievements: ["Retención Clientes", "Servicio Excelencia", "Soporte 24/7"]
  }
]

const TeamCard = ({ member, index }: { member: any; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  // Arreglar las iniciales - manejar caso de nombres undefined
  const initials = member.name ? member.name.split(' ').map((n: string) => n[0]).join('') : ''

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.15 }}
      className="group perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-96"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden backface-hidden cursor-pointer"
          style={{ backfaceVisibility: "hidden" }}
          onClick={() => setIsFlipped(true)}
        >
          {/* Image section - CORREGIDA */}
          <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
            {/* Imagen real - solo se muestra si carga correctamente */}
            {!imageError && (
              <img 
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            )}
            
            {/* Placeholder - solo se muestra si hay error o mientras carga */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              imageLoaded && !imageError ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="text-gray-500 text-center">
                <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {initials}
                  </span>
                </div>
                <p className="text-sm">Foto de {member.name.split(' ')[0]}</p>
              </div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
              {member.years}+ años
            </div>
          </div>

          {/* Content section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-red-600 font-semibold mb-3">{member.position}</p>
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {member.description}
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap gap-1 mb-4">
              {member.specialties.slice(0, 2).map((specialty: string, i: number) => (
                <span 
                  key={i}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {specialty}
                </span>
              ))}
              {member.specialties.length > 2 && (
                <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-xs">
                  +{member.specialties.length - 2}
                </span>
              )}
            </div>

            {/* Flip hint */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Click para más info</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔄
              </motion.div>
            </div>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-xl border border-gray-700 overflow-hidden backface-hidden cursor-pointer p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          onClick={() => setIsFlipped(false)}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setIsFlipped(false)
            }}
          >
            ✕
          </button>

          <div className="space-y-4">
            {/* Achievements */}
            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-red-400" />
                Logros Destacados
              </h4>
              <ul className="space-y-2 text-sm">
                {member.achievements.map((achievement: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-3">Contacto</h4>
              <div className="space-y-2 text-sm">
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
                <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
                <a 
                  href={`https://linkedin.com/in/${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white/10 rounded-xl p-4 mt-4">
              <Quote className="w-4 h-4 text-red-400 mb-2" />
              <p className="text-sm text-white/80 italic">
                "Comprometido con tu satisfacción automotriz"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro <span className="text-red-600">Equipo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertos apasionados que hacen posible la excelencia en cada experiencia automotriz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para conversar con nuestros expertos?
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              Nuestro equipo está listo para ayudarte a encontrar el vehículo perfecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Agendar Cita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Llamar Ahora
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}