import Hero             from "@/components/Hero";
import StorySection     from "@/components/StorySection";
import FivePillars      from "@/components/FivePillars";
import AttentionSection from "@/components/AttentionSection";
import Manifesto        from "@/components/Manifesto";
import BlogPreview      from "@/components/BlogPreview";
import SocialPreview    from "@/components/SocialPreview";
import CTABanner        from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <FivePillars />
      <AttentionSection />
      <Manifesto />
      <BlogPreview />
      <SocialPreview />
      <CTABanner />
    </>
  );
}
