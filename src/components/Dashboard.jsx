import About from "./cards/About";
import Work from "./cards/Work";
import Education from "./cards/Education";
import Certifications from "./cards/Certifications";
import Projects from "./cards/Projects";
import TechStack from "./cards/TechStack";
import Connect from "./cards/Connect";

function Dashboard() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20 space-y-6">

      {/* row 1 */}
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <About />
        </div>
        <div className="md:col-span-3">
          <Work />
        </div>
      </div>

      {/* row 2 */}
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <Education />
        </div>
        <div className="md:col-span-3">
          <Certifications />
        </div>
      </div>

      {/* BIG PROJECT SHOWCASE */}
      <Projects />

      {/* bottom row */}
      <div className="grid md:grid-cols-2 gap-6">
        <TechStack />
        <Connect />
      </div>

    </section>
  );
}

export default Dashboard;
