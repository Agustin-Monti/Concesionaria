// components/contact/FAQSection.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle, Car, Shield, Clock, DollarSign } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué documentos necesito para comprar un vehículo?",
      answer: "Para la compra de tu vehículo necesitarás: identificación oficial vigente, comprobante de domicilio, y para financiamiento, últimos 3 talones de pago o estados de cuenta. Te asesoramos en todo el proceso.",
      icon: Car,
      category: "Compra"
    },
    {
      question: "¿Ofrecen garantía en los vehículos?",
      answer: "Sí, todos nuestros vehículos incluyen garantía. Vehículos nuevos: 3-5 años según marca. Seminuevos certificados: 1 año en motor y transmisión. Contamos con servicio post-venta dedicado.",
      icon: Shield,
      category: "Garantía"
    },
    {
      question: "¿Cuánto tiempo toma el proceso de compra?",
      answer: "El proceso completo toma entre 2-5 días hábiles. Prueba de manejo: mismo día. Aprobación de crédito: 24-48 horas. Entrega del vehículo: 1-2 días después de la aprobación.",
      icon: Clock,
      category: "Tiempos"
    },
    {
      question: "¿Qué opciones de financiamiento tienen?",
      answer: "Ofrecemos múltiples opciones: crédito bancario directo, financiamiento interno, leasing operativo, y planes de pagos flexibles. Tasas competitivas y aprobación en 24-48 horas.",
      icon: DollarSign,
      category: "Financiamiento"
    },
    {
      question: "¿Puedo hacer una prueba de manejo?",
      answer: "¡Por supuesto! Agendamos pruebas de manejo en el horario que prefieras. Trae tu licencia vigente y en 30 minutos experimentarás el vehículo de tus sueños.",
      icon: Car,
      category: "Pruebas"
    },
    {
      question: "¿Ofrecen servicio de entrega a domicilio?",
      answer: "Sí, entregamos tu vehículo donde nos indiques dentro de la zona metropolitana. Para otras ubicaciones, coordinamos el envío con logística especializada.",
      icon: Shield,
      category: "Entrega"
    }
  ]

  const categories = ["Todos", "Compra", "Garantía", "Tiempos", "Financiamiento", "Pruebas", "Entrega"]
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredFaqs = selectedCategory === "Todos" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas <span className="text-red-600">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas más comunes sobre el proceso de compra y nuestros servicios
          </p>
        </motion.div>

        {/* Filtros por Categoría */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Lista de FAQs */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.01 }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 text-white max-w-2xl mx-auto">
            <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              Nuestro equipo de especialistas está listo para ayudarte personalmente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Chat en Vivo
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