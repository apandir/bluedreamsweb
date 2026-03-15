import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StickyNav from "@/components/factsheet/StickyNav";
import HeroSection from "@/components/factsheet/HeroSection";
import IndexSection from "@/components/factsheet/IndexSection";
import OverviewSection from "@/components/factsheet/OverviewSection";
import LocationSection from "@/components/factsheet/LocationSection";
import RoomsSection from "@/components/factsheet/RoomsSection";
import BeachPoolsSection from "@/components/factsheet/BeachPoolsSection";
import DiningSection from "@/components/factsheet/DiningSection";
import SpaSection from "@/components/factsheet/SpaSection";
import ActivitiesSection from "@/components/factsheet/ActivitiesSection";
import MeetingsSection from "@/components/factsheet/MeetingsSection";
import GeneralInfoSection from "@/components/factsheet/GeneralInfoSection";
import ContactSection from "@/components/factsheet/ContactSection";

const Index = () => {
  return (
    <main>
      <StickyNav />
      <HeroSection />
      <IndexSection />
      <OverviewSection />
      <LocationSection />
      <RoomsSection />
      <BeachPoolsSection />
      <DiningSection />
      <SpaSection />
      <ActivitiesSection />
      <MeetingsSection />
      <GeneralInfoSection />
      <ContactSection />

      {/* Floating Back to Website Button */}
      <Link
        to="/"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-ocean-deep/90 backdrop-blur-md text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:bg-ocean-deep transition-colors font-body text-[11px] font-semibold tracking-[0.1em] uppercase"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Website
      </Link>
    </main>
  );
};

export default Index;
