import AboutUs from "@/components/application/AboutUs";
import ContactBooking from "@/components/application/Contact";
import FAQSection from "@/components/application/FAQ";
import HeroSlider from "@/components/application/HeroSlider";
import MissionVisionRose from "@/components/application/OurMission";
import ProcessSteps from "@/components/application/ProcessSteps";
import ServicesPage from "@/components/application/ServicesPage";
import ServicesSection from "@/components/application/ServicesSection";
import TestimonialsCarouselRose from "@/components/application/Testimonial";
import WhyChooseUs from "@/components/application/WhyChoose";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <ServicesPage />
      <AboutUs />
      <MissionVisionRose />
      <ProcessSteps />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsCarouselRose />
      <ContactBooking />
      <FAQSection />
    </main>
  );
}
