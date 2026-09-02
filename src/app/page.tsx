import { Hero } from "@/components/sections/Hero";
import { GlobalTransition } from "@/components/sections/GlobalTransition";
import { StatsAndBadges } from "@/components/sections/StatsAndBadges";
import { ServicesWorks } from "@/components/sections/ServicesWorks";
import { AcademyAndWhyUs } from "@/components/sections/AcademyAndWhyUs";
import { FaqAndBlog } from "@/components/sections/FaqAndBlog";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <GlobalTransition />
      <StatsAndBadges />
      <ServicesWorks />
      <AcademyAndWhyUs />
      <FaqAndBlog />
      <CallToAction />
      <Footer />
    </div>
  );
}
