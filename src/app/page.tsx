import Link from 'next/link'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'
import HeroSection from '@/components/hero/HeroSection'
import VehicleGrid from '@/components/vehicles/VehicleGrid'
import AboutSection from '@/components/about/AboutSection'
import ServicesSection from '@/components/services/ServicesSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VehicleGrid />
      <AboutSection />
      <ServicesSection />
    </div>
  )
}