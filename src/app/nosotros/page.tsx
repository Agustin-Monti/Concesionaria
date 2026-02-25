// app/nosotros/page.tsx
import HeroAbout from '@/components/about/HeroAbout'
import StoryTimeline from '@/components/about/StoryTimeline'
import TeamSection from '@/components/about/TeamSection'
import ValuesSection from '@/components/about/ValuesSection'
import StatsSection from '@/components/about/StatsSection'

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <HeroAbout />
      <StoryTimeline />
      <ValuesSection />
      <StatsSection />
      <TeamSection />
    </div>
  )
}