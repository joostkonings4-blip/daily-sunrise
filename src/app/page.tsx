/* ── Daily Sunrise — Homepage ─────────────────────────────────────────────
 * MANDATORY 8-SECTION STRUCTURE — NEVER CHANGE THE ORDER
 * 1. Hero              — animated sun, tagline, CTA
 * 2. PhilosophySection — what is Daily Sunrise, 3 core pillars
 * 3. TreeScrollStory   — fullscreen photo journey through the tree of life
 * 4. AttentionSection  — the problem: modern reactive living
 * 5. FivePillars       — the 5 daily rituals
 * 6. FounderSection    — the human behind the mission
 * 7. Manifesto         — the brand manifest
 * 8. CTABanner         — email signup / join the morning
 *
 * SocialFeed placed before CTABanner as live social proof.
 * ─────────────────────────────────────────────────────────────────────── */

import Hero              from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import TreeScrollStory   from "@/components/TreeScrollStory";
import AttentionSection  from "@/components/AttentionSection";
import FivePillars       from "@/components/FivePillars";
import FounderSection    from "@/components/FounderSection";
import Manifesto         from "@/components/Manifesto";
import SocialFeed        from "@/components/SocialFeed";
import CTABanner         from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <TreeScrollStory />
      <AttentionSection />
      <FivePillars />
      <FounderSection />
      <Manifesto />
      <SocialFeed />
      <CTABanner />
    </>
  );
}
