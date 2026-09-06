import { projects } from '@/data/projects';
import { teamMembers } from '@/data/team';
import { assignments } from '@/data/assignments';

import { FloatingNavbar } from '@/components/navbar/FloatingNavbar';
import { WelcomeIntro } from '@/components/sections/WelcomeIntro';
import { HeroSplit } from '@/components/sections/HeroSplit';
import { ShowcaseHorizontalScroll } from '@/components/sections/ShowcaseHorizontalScroll';
import { DesignSystemPreview } from '@/components/sections/DesignSystemPreview';
import { TeamSection } from '@/components/sections/TeamSection';
import { AssignmentArchive } from '@/components/sections/AssignmentArchive';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  const educationProject = projects.find((p) => p.domain === 'education') ?? projects[0];
  const industryProject = projects.find((p) => p.domain === 'industry') ?? projects[1];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Sticky Floating Navbar with active indicator & theme switcher */}
      <FloatingNavbar />

      <main className="flex-1">
        {/* Spacious Welcome / Intro */}
        <WelcomeIntro />

        {/* Split-View Hero (Pendidikan vs Industri) */}
        <HeroSplit
          educationProject={educationProject}
          industryProject={industryProject}
        />

        {/* Sticky Horizontal Scroll Showcase */}
        <ShowcaseHorizontalScroll projects={projects} />

        {/* Design System Preview */}
        <DesignSystemPreview />

        {/* Team Profile Grid */}
        <TeamSection members={teamMembers} />

        {/* Weekly Assignment Archive */}
        <AssignmentArchive assignments={assignments} />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
