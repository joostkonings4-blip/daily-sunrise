import Hero             from "@/components/Hero";
import StorySection     from "@/components/StorySection";
import TreeScrollStory  from "@/components/TreeScrollStory";
import FivePillars      from "@/components/FivePillars";
import Manifesto        from "@/components/Manifesto";
import SocialFeed       from "@/components/SocialFeed";
import CTABanner        from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <TreeScrollStory />
      <FivePillars />
      <Manifesto />
      <SocialFeed />
      <CTABanner />
    </>
  );
}
