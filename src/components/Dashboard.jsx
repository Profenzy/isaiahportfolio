import About from "./cards/About";
import Work from "./cards/Work";
import Education from "./cards/Education";
import Certifications from "./cards/Certifications";
import Projects from "./cards/Projects";
import TechStack from "./cards/TechStack";
import Connect from "./cards/Connect";
import { CalendarIcon, ArrowUpRightIcon, SparklesIcon } from "./icons/Icons";

function Dashboard({ onOpenBooking }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24 space-y-6">

      {/* ROW 1: About & Client Experience */}
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <About />
        </div>
        <div className="md:col-span-3">
          <Work />
        </div>
      </div>

      {/* ROW 2: Education & Verified Certifications */}
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <Education />
        </div>
        <div className="md:col-span-3">
          <Certifications />
        </div>
      </div>

      {/* ROW 3: Software & Systems Showcase */}
      <Projects />

      {/* ROW 4: Tech Stack & Direct Channels */}
      <div className="grid md:grid-cols-2 gap-6">
        <TechStack />
        <Connect />
      </div>

      {/* ROW 5: High-Converting Strategy Call Banner */}
      <div className="
        relative overflow-hidden rounded-2xl
        border border-amber-500/30 bg-gradient-to-r from-[#13151b] via-[#171922] to-[#13151b]
        p-8 md:p-10
        flex flex-col md:flex-row md:items-center justify-between gap-6
        shadow-[0_0_50px_-10px_rgba(245,158,11,0.12)]
      ">
        <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl" />

        <div className="space-y-2 max-w-xl">
          <span className="micro-label text-amber-400 flex items-center gap-1.5">
            <SparklesIcon className="w-3.5 h-3.5" />
            Direct Calendar Booking
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-[#f5f2eb] tracking-tight">
            Have a project or system you want to automate?
          </h3>
          <p className="text-sm text-[#9e9b93] leading-relaxed">
            Let's jump on a 30-minute discovery call to map out technical requirements, timeline, and an exact execution plan.
          </p>
        </div>

        <div className="shrink-0">
          <button
            onClick={onOpenBooking}
            className="
              flex items-center gap-2.5
              bg-amber-500 text-black font-semibold
              px-6 py-3.5 rounded-xl text-sm
              hover:bg-amber-400 transition-all duration-200
              shadow-[0_0_25px_rgba(245,158,11,0.3)]
              hover:shadow-[0_0_35px_rgba(245,158,11,0.5)]
              hover:-translate-y-0.5 active:translate-y-0
              cursor-pointer
            "
          >
            <CalendarIcon className="w-4 h-4 text-black" />
            <span>Schedule Discovery Call</span>
            <ArrowUpRightIcon className="w-4 h-4 text-black/70" />
          </button>
        </div>
      </div>

    </section>
  );
}

export default Dashboard;
