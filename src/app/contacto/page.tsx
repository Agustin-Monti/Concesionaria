// app/contact/page.tsx (con metadata)
import { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'
import FAQSection from '@/components/contact/FAQSection'
import ContactCTA from '@/components/contact/ContactCTA'

export const metadata: Metadata = {
  title: 'Contacto - AutoPremium',
  description: 'Contáctanos para asesoría personalizada en la compra de tu vehículo. Múltiples canales de comunicación y sucursales disponibles.',
  keywords: 'contacto auto premium, compra vehículo, asesoría automotriz, sucursales auto',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <FAQSection />
      <ContactCTA />
    </main>
  )
}