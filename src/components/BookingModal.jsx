import { useState } from "react";
import { CalendarIcon, ClockIcon, CheckIcon, ArrowUpRightIcon } from "./icons/Icons";
import { SITE_CONFIG } from "../config/site";

function BookingModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("calendar"); // "calendar" | "form"
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Short-Form Video Editing (Tanya / Creator Pacing)",
    budget: "$1,000 - $3,000 / month",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    "09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"
  ];

  const services = [
    "Short-Form Video Editing (Tanya / Creator Pacing)",
    "Live Broadcast Direction (Multi-Stream / Title Cards)",
    "GoHighLevel CRM & Funnel Architecture",
    "Full-Stack Web / Software Application",
    "Other / Custom Partnership"
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct pre-filled email
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name} - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n` +
      `Budget Range: ${formData.budget}\n` +
      (selectedDate ? `Preferred Date: ${selectedDate} at ${selectedTime}\n` : "") +
      `Project Details & Scope:\n${formData.notes}\n`
    );

    window.open(`mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-[9999]
        bg-[#0A0C0E]/92 backdrop-blur-[14px]
        flex items-center justify-center p-3 sm:p-6
        animate-fadeIn
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-[#101317] border border-[rgba(237,231,220,0.18)]
          rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto
          p-5 sm:p-8 relative deck-card-shadow flex flex-col justify-between
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-10
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
        <div className="space-y-2 mb-6 pr-8">
          <div className="label-caps text-[#E8913C] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            CLIENT ACQUISITION &bull; DISCOVERY HUB
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#EDE7DC] tracking-tight">
            Schedule a Strategy Session
          </h2>
          <p className="text-xs sm:text-sm text-[#9EA5A8] leading-relaxed max-w-2xl">
            Book directly into Google Calendar or submit your project scope for immediate evaluation.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1 bg-[#0A0C0E] border border-[rgba(237,231,220,0.1)] rounded-xl mb-6">
          <button
            onClick={() => setActiveTab("calendar")}
            className={`
              flex-1 py-2.5 px-4 rounded-lg label-caps text-[10.5px] font-semibold transition cursor-pointer flex items-center justify-center gap-2
              ${activeTab === "calendar" 
                ? "bg-[#101317] text-[#E8913C] border border-[#E8913C]/30 shadow-sm" 
                : "text-[#9EA5A8] hover:text-[#EDE7DC]"}
            `}
          >
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Google Calendar Scheduler</span>
          </button>

          <button
            onClick={() => setActiveTab("form")}
            className={`
              flex-1 py-2.5 px-4 rounded-lg label-caps text-[10.5px] font-semibold transition cursor-pointer flex items-center justify-center gap-2
              ${activeTab === "form" 
                ? "bg-[#101317] text-[#2E6B72] border border-[#2E6B72]/40 shadow-sm" 
                : "text-[#9EA5A8] hover:text-[#EDE7DC]"}
            `}
          >
            <ClockIcon className="w-3.5 h-3.5" />
            <span>Direct Project Intake</span>
          </button>
        </div>

        {/* TAB 1: GOOGLE CALENDAR SCHEDULER */}
        {activeTab === "calendar" && (
          <div className="space-y-5">
            {/* Direct Open Link Banner */}
            <div className="p-4 rounded-xl bg-[#0A0C0E] border border-[rgba(237,231,220,0.1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="label-caps text-[9.5px] text-[#E8913C] block">OFFICIAL CALENDAR INTEGRATION</span>
                <p className="text-xs text-[#EDE7DC]">
                  Live appointment schedule connected to Google Meet.
                </p>
              </div>
              <a
                href={SITE_CONFIG.googleCalendarScheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  border border-[#E8913C] bg-[#E8913C]/10 hover:bg-[#E8913C] text-[#EDE7DC] hover:text-[#0A0C0E]
                  px-4 py-2 rounded-full label-caps text-[10px] font-semibold transition flex items-center gap-1.5 shrink-0
                "
              >
                <span>Open in Google Calendar</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Iframe */}
            <div className="border border-[rgba(237,231,220,0.12)] rounded-xl overflow-hidden bg-[#0A0C0E] relative min-h-[460px]">
              <iframe
                src={SITE_CONFIG.googleCalendarScheduleUrl}
                className="w-full h-[480px] border-0 rounded-lg"
                title="Google Calendar Appointment Scheduling"
              />
            </div>
          </div>
        )}

        {/* TAB 2: DIRECT PROJECT INTAKE FORM */}
        {activeTab === "form" && (
          <div>
            {submitted ? (
              <div className="p-8 rounded-xl bg-[#0A0C0E] border border-[#2E6B72]/40 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#2E6B72]/20 border border-[#2E6B72] text-[#2E6B72] flex items-center justify-center mx-auto">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#EDE7DC]">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs text-[#9EA5A8] max-w-md mx-auto leading-relaxed">
                  Your project scope has been drafted to <span className="text-[#EDE7DC]">{SITE_CONFIG.email}</span>. Brenz will review your timeline and reply within 12–24 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="label-caps text-[10.5px] text-[#E8913C] hover:underline cursor-pointer"
                  >
                    Submit Another Request &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="label-caps text-[9.5px] text-[#9EA5A8]">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.12)] focus:border-[#E8913C] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE7DC] outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="label-caps text-[9.5px] text-[#9EA5A8]">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.12)] focus:border-[#E8913C] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE7DC] outline-none transition"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label className="label-caps text-[9.5px] text-[#9EA5A8]">
                    PRIMARY SERVICE REQUIREMENT *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.12)] focus:border-[#E8913C] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE7DC] outline-none transition"
                  >
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#101317] text-[#EDE7DC]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Slot (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="label-caps text-[9.5px] text-[#9EA5A8]">
                      PREFERRED DATE (OPTIONAL)
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.12)] focus:border-[#E8913C] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE7DC] outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="label-caps text-[9.5px] text-[#9EA5A8]">
                      PREFERRED TIME SLOT
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.12)] focus:border-[#E8913C] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE7DC] outline-none transition"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t} className="bg-[#101317] text-[#EDE7DC]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Scope & Notes */}
                <div className="space-y-1.5">
                  <label className="label-caps text-[9.5px] text-[#9EA5A8]">
                    PROJECT SCOPE & OBJECTIVES
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you'd like to achieve (e.g. number of reels per week, CRM workflows needed, or tech stack requirements)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.12)] focus:border-[#E8913C] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE7DC] outline-none transition resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-[#6C7378]">
                    Direct routing to {SITE_CONFIG.email}
                  </span>
                  <button
                    type="submit"
                    className="
                      border border-[#E8913C] bg-[#E8913C] text-[#0A0C0E] font-semibold hover:bg-transparent hover:text-[#EDE7DC]
                      px-6 py-2.5 rounded-full label-caps text-[11px] transition cursor-pointer flex items-center gap-2
                    "
                  >
                    <span>Dispatch Inquiry</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default BookingModal;
