import { useState } from "react";
import Navigation from "./components/layout/Navigation";
import PortalHero from "./components/hero/PortalHero";
import StatementFold from "./components/statement/StatementFold";
import VideosShowcase from "./components/videos/VideosShowcase";
import ReleasesDeck from "./components/releases/ReleasesDeck";
import RosterSection from "./components/roster/RosterSection";
import SoftwareSystems from "./components/systems/SoftwareSystems";
import DatesSection from "./components/dates/DatesSection";
import CloseSection from "./components/layout/CloseSection";
import BookingModal from "./components/BookingModal";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-[#0A0C0E] text-[#EDE7DC] selection:bg-[#E8913C]/20 selection:text-[#E8913C] relative overflow-x-hidden">
      {/* 1. Fixed 58px Navigation Bar */}
      <Navigation onOpenBooking={handleOpenBooking} />

      {/* 2. Portal Hero: 2.5-viewport sticky stage with scroll-bound reveal */}
      <PortalHero />

      {/* 3. Statement Fold: Full-height section with compiled auto-switching full-color portraits */}
      <StatementFold />

      {/* 4. Videos: Modeled after reference image (Tanya Memme, Kubo ni Lola, Trixy Castro Live Broadcasts) */}
      <VideosShowcase />

      {/* 5. Decks & Graphics: Throwable physical card deck for carousels, quotes & video story */}
      <ReleasesDeck onOpenBooking={handleOpenBooking} />

      {/* 6. Operations & Systems: GHL, Live Broadcasts, Tanya's Workbooks (Own The Camera, Basic Filming) */}
      <RosterSection />

      {/* 7. Software Systems: ProTrack, Bayani Game, ICEE Robot, POS, Private Client Portals */}
      <SoftwareSystems />

      {/* 8. Dates Table & Calendar Booking: Verified credentials with Full-View Certificate Lightbox Popup */}
      <DatesSection onOpenBooking={handleOpenBooking} />

      {/* 9. Close: Short headline, fine-print, hairline footer & edge-cropped wordmark */}
      <CloseSection onOpenBooking={handleOpenBooking} />

      {/* Google Appointment Scheduling Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />
    </div>
  );
}

export default App;
