import Hero         from "@/components/Hero";
import Manifesto    from "@/components/Manifesto";
import BlogPreview  from "@/components/BlogPreview";
import SocialPreview from "@/components/SocialPreview";
import CTABanner    from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <BlogPreview />
      <SocialPreview />
      <CTABanner />
    </>
  );
}
