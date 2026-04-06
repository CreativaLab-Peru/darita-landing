import AwardsSection from "@/components/own/AwardsSection";
import BiographySection from "@/components/own/BiographySection";
import ContactSection from "@/components/own/ContactSection";
import FellowshipsSection from "@/components/own/FellowshipsSection";
import HeroSection from "@/components/own/HeroSection";
import NewsletterSection from "@/components/own/NewsletterSection";
import PressSection from "@/components/own/PressSection";
import SideNav from "@/components/own/SideNav";
import SpeakerSection from "@/components/own/SpeakerSection";
import StartupsSection from "@/components/own/StartupsSection";
import WorkWithMeSection from "@/components/own/WorkWithMeSection";

export default function Page() {
  return (
    <div className="relative">
      <SideNav />
      <main className="lg:ml-48 xl:ml-56">
        <HeroSection />
        <NewsletterSection />
        <BiographySection />
        <AwardsSection />
        <FellowshipsSection />
        <SpeakerSection />
        <StartupsSection />
        <PressSection />
        <WorkWithMeSection />
        <ContactSection />
      </main>
    </div>
    // <div className="min-h-svh p-6">
    //   <main>
    //   <h1>Bienvenido a la Landing A B</h1>
    //   <ModeToggle />
    //     {/* El script inyectará el formulario automáticamente aquí */}
    //   <ConvertKitForm uid="bfc8a3a54f" />
    // </main>
    // </div>
  )
}

{/* <script async data-uid="bfc8a3a54f" src="https://levely.kit.com/bfc8a3a54f/index.js"></script> */ }