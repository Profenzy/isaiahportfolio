import { CalendarIcon, ClockIcon, CheckIcon, ArrowUpRightIcon } from "./icons/Icons";
import { SITE_CONFIG } from "../config/site";

function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const isConfigured = SITE_CONFIG.googleCalendarScheduleUrl && 
    SITE_CONFIG.googleCalendarScheduleUrl !== "https://calendar.google.com/calendar/u/0/appointments/schedules";

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-[9999]
        bg-[#0A0C0E]/90 backdrop-blur-[14px]
        flex items-center justify-center p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-[#101317] border border-[rgba(237,231,220,0.13)]
          rounded-2xl max-w-2xl w-full
          p-6 md:p-8 relative
          deck-card-shadow
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            w-8 h-8 rounded-full
            border border-[rgba(237,231,220,0.15)] text-[#9EA5A8]
            hover:text-[#EDE7DC] hover:border-[#E8913C]
            flex items-center justify-center
            transition cursor-pointer text-xs
          "
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="label-caps text-[#E8913C] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            GOOGLE APPOINTMENT SCHEDULER
          </div>
          <h2 className="font-display font-bold text-2xl text-[#EDE7DC] tracking-tight">
            Schedule a Strategy Call
          </h2>
          <p className="text-xs md:text-sm text-[#9EA5A8] leading-relaxed">
            Reserve a 30-minute 1-on-1 session to discuss short-form video editing, GoHighLevel CRM workflows, or software development.
          </p>
        </div>

        {/* Pre-call agenda */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 bg-[#0A0C0E] border border-[rgba(237,231,220,0.1)] rounded-xl text-xs text-[#9EA5A8]">
          <div className="space-y-0.5">
            <span className="label-caps text-[9px] text-[#E8913C] block">01 / DURATION</span>
            <span className="text-[#EDE7DC] font-medium">30-Minute Video Call</span>
          </div>
          <div className="space-y-0.5">
            <span className="label-caps text-[9px] text-[#2E6B72] block">02 / AGENDA</span>
            <span className="text-[#EDE7DC] font-medium">Pacing & Workflow Audit</span>
          </div>
          <div className="space-y-0.5">
            <span className="label-caps text-[9px] text-[#EDE7DC] block">03 / OUTCOME</span>
            <span className="text-[#EDE7DC] font-medium">Timeline & Proposal</span>
          </div>
        </div>

        {/* Calendar Embed or Fallback */}
        <div className="border border-[rgba(237,231,220,0.1)] rounded-xl overflow-hidden bg-[#0A0C0E] min-h-[300px] flex flex-col items-center justify-center p-6 text-center">
          {isConfigured ? (
            <iframe
              src={SITE_CONFIG.googleCalendarScheduleUrl}
              className="w-full h-[480px] border-0 rounded-lg"
              title="Google Appointment Scheduling"
            />
          ) : (
            <div className="space-y-4 max-w-md">
              <div className="w-12 h-12 rounded-full border border-[rgba(237,231,220,0.15)] text-[#E8913C] flex items-center justify-center mx-auto">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#EDE7DC]">
                Calendar Integration Ready
              </h3>
              <p className="text-xs text-[#9EA5A8] leading-relaxed">
                Connect your Google Appointment Scheduling link in <code className="text-[#E8913C] bg-[#E8913C]/10 px-1.5 py-0.5 rounded font-mono">src/config/site.js</code> to enable live in-page booking.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Short-Form%20Video%20Editing%20Inquiry%20-%20Brenz%20Cruz`}
                  className="
                    inline-flex items-center justify-center gap-2
                    border border-[#E8913C] text-[#EDE7DC] hover:bg-[#E8913C] hover:text-[#0A0C0E]
                    px-5 py-2.5 rounded-full label-caps text-[10.5px] font-semibold
                    transition
                  "
                >
                  <span>Request Slot via Email</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={SITE_CONFIG.googleCalendarScheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    border border-[rgba(237,231,220,0.15)] text-[#9EA5A8] hover:text-[#EDE7DC] hover:border-[#EDE7DC]
                    px-5 py-2.5 rounded-full label-caps text-[10.5px] font-medium
                    transition
                  "
                >
                  <span>Open Google Calendar</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default BookingModal;
