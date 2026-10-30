import { CalendarIcon, ClockIcon, CheckIcon, ArrowUpRightIcon, SparklesIcon } from "../icons/Icons";
import { SITE_CONFIG } from "../../config/site";

function BookingSection() {
  const isConfigured = SITE_CONFIG.googleCalendarScheduleUrl && 
    SITE_CONFIG.googleCalendarScheduleUrl !== "https://calendar.google.com/calendar/u/0/appointments/schedules";

  return (
    <section id="schedule" className="py-24 md:py-32 border-b border-white/[0.06] relative">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-10 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="micro-label text-amber-400">
            // Let's Connect
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#f5f2eb] tracking-tight">
            Schedule a 1-on-1 discovery & strategy call.
          </h2>
          <p className="text-sm md:text-base text-[#9e9b93] leading-relaxed">
            Reserve a direct call on my calendar. We'll evaluate your current systems, map out the technical architecture or GHL automation workflows, and outline a clear scope of work.
          </p>
        </div>

        {/* 2-Column Booking Hub */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Meeting Deliverables & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Value checklist card */}
            <div className="editorial-card rounded-3xl p-8 space-y-6 border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#f5f2eb]">
                    30-Minute Strategy Session
                  </h3>
                  <p className="text-xs text-[#9e9b93]">
                    Direct with Brenz Cruz
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                {[
                  {
                    title: "Architecture & Bottleneck Audit",
                    desc: "Review your existing website, database, or manual CRM processes to identify automation opportunities.",
                  },
                  {
                    title: "Custom Tech & Funnel Blueprint",
                    desc: "Get an architectural recommendation (React/Next.js stack vs. GoHighLevel pipelines).",
                  },
                  {
                    title: "Fixed Scope & Timeline",
                    desc: "Walk away with an exact roadmap, clear milestones, and transparent project estimates.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-teal-400" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[#f5f2eb]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#9e9b93] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Email & Social Card */}
            <div className="editorial-card rounded-3xl p-6 border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="micro-label text-[9px] text-[#9e9b93] block">
                  Prefer Direct Email?
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-mono text-xs md:text-sm text-amber-300 hover:underline mt-0.5 block"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Strategy%20Call%20Inquiry%20-%20Brenz%20Cruz`}
                className="
                  px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08]
                  text-xs font-semibold text-[#f5f2eb] hover:bg-white/[0.1] transition flex items-center gap-1.5
                "
              >
                <span>Compose</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Appointment Scheduling */}
          <div className="lg:col-span-7">
            <div className="editorial-card rounded-3xl p-6 md:p-8 border-white/[0.08] relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="micro-label text-teal-300">
                    Live Google Appointment Scheduler
                  </span>
                </div>
                <span className="text-xs text-[#9e9b93] font-mono">
                  Timezone: Auto-Detect
                </span>
              </div>

              {isConfigured ? (
                <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07080a]">
                  <iframe
                    src={SITE_CONFIG.googleCalendarScheduleUrl}
                    className="w-full h-[580px] border-0"
                    title="Google Appointment Scheduling"
                  />
                </div>
              ) : (
                <div className="py-14 px-6 text-center space-y-6 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center">
                    <CalendarIcon className="w-8 h-8" />
                  </div>

                  <div className="max-w-md space-y-2">
                    <h3 className="font-display font-bold text-2xl text-[#f5f2eb]">
                      Calendar Scheduler Integration Ready
                    </h3>
                    <p className="text-xs text-[#9e9b93] leading-relaxed">
                      To activate your live booking widget on this page, copy your Google Appointment Scheduling link into:
                      <br />
                      <code className="text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded text-[11px] mt-2 inline-block">
                        src/config/site.js ➔ googleCalendarScheduleUrl
                      </code>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center pt-2">
                    <a
                      href={`mailto:${SITE_CONFIG.email}?subject=Strategy%20Call%20Booking`}
                      className="
                        flex items-center gap-2
                        bg-amber-500 text-black font-semibold
                        px-6 py-3 rounded-xl text-xs md:text-sm
                        hover:bg-amber-400 transition
                        shadow-[0_0_20px_rgba(245,158,11,0.3)]
                      "
                    >
                      <CalendarIcon className="w-4 h-4 text-black" />
                      <span>Request a Slot via Email</span>
                      <ArrowUpRightIcon className="w-4 h-4 text-black/70" />
                    </a>

                    <a
                      href={SITE_CONFIG.googleCalendarScheduleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        bg-white/[0.04] text-[#f5f2eb] border border-white/[0.08]
                        px-5 py-3 rounded-xl text-xs md:text-sm font-medium
                        hover:bg-white/[0.08] transition
                      "
                    >
                      <span>Open Google Calendar</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BookingSection;

