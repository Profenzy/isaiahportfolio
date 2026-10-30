import { useState } from "react";
import { ShieldCheckIcon, ArrowUpRightIcon, SparklesIcon } from "../icons/Icons";
import ImageViewer from "../ImageViewer";
import ViewAllModal from "../ViewAllModal";

function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const flagshipCerts = [
    {
      title: "Google Certified Educator 1",
      org: "Google for Education",
      id: "Certified: Brenz Cruz",
      validity: "2026 – 2029",
      image: "/certs/google-educator.png",
      tag: "Google Cloud / EdTech",
      badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
    },
    {
      title: "IT Specialist: Software Development",
      org: "Certiport / Pearson VUE",
      id: "Credential ID: Verified",
      validity: "2026 – 2031",
      image: "/certs/it-specialist.png",
      tag: "Software Engineering",
      badgeColor: "border-teal-500/30 text-teal-300 bg-teal-500/10",
    },
    {
      title: "PMI Project Management Ready",
      org: "Project Management Institute (PMI)",
      id: "Industry Accreditation",
      validity: "2026 – 2031",
      image: "/certs/pmi-pm.png",
      tag: "Project Delivery & Agile",
      badgeColor: "border-purple-500/30 text-purple-300 bg-purple-500/10",
    },
    {
      title: "Cisco CCST: Cybersecurity",
      org: "Cisco Systems",
      id: "CCST Security Track",
      validity: "2025 – 2031",
      image: "/certs/cisco-cybersec.png",
      tag: "Threat Defense & Security",
      badgeColor: "border-blue-500/30 text-blue-300 bg-blue-500/10",
    },
    {
      title: "Cisco CCST: IT Support",
      org: "Cisco Systems",
      id: "CCST Support Track",
      validity: "2026 – 2031",
      image: "/certs/cisco-itsupport.png",
      tag: "Enterprise IT Systems",
      badgeColor: "border-blue-500/30 text-blue-300 bg-blue-500/10",
    },
    {
      title: "Cisco CCST: Networking",
      org: "Cisco Systems",
      id: "CCST Network Architecture",
      validity: "2026 – 2031",
      image: "/certs/cisco-networking.png",
      tag: "Network Infrastructure",
      badgeColor: "border-blue-500/30 text-blue-300 bg-blue-500/10",
    },
  ];

  const allCerts = [
    ...flagshipCerts,
    { title: "PCAP: Programming Essentials in Python", org: "Python Institute", image: "/certs/pcap.png" },
    { title: "Adobe Certified Professional", org: "Adobe", image: "/certs/acp.png" },
    { title: "Globe DevCon", org: "Globe Company", image: "/certs/globe.png" },
    { title: "Basic Web Development Workshop", org: "Zuitt", image: "/certs/webdev.png" },
    { title: "Basic Java Programming", org: "Open Weaver", image: "/certs/bjp.png" },
    { title: "Basics of Python", org: "Open Weaver", image: "/certs/bop.png" },
    { title: "Basics of HTML/CSS", org: "Open Weaver", image: "/certs/htmlcss.png" },
    { title: "Artificial Intelligence Workshop", org: "Our Lady of Fatima University", image: "/certs/learningai.png" },
    { title: "Future-Proofing Your Career", org: "Our Lady of Fatima University", image: "/certs/career.png" },
    { title: "Diving into Esports", org: "Our Lady of Fatima University", image: "/certs/esports.png" },
  ];

  return (
    <section id="credentials" className="py-24 md:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="micro-label text-teal-400">
              // Industry Standards & Verification
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#f5f2eb] tracking-tight">
              Verified accreditations & technical certifications.
            </h2>
          </div>

          <button
            onClick={() => setShowAllModal(true)}
            className="
              inline-flex items-center gap-2
              text-xs font-semibold text-teal-400 hover:text-teal-300
              px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/20
              transition cursor-pointer
            "
          >
            <span>View All 17 Accreditations</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Flagship Accreditations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipCerts.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCert(cert.image)}
              className="
                editorial-card rounded-3xl p-6 flex flex-col justify-between
                border-white/[0.08] hover:border-teal-500/40 cursor-pointer
                transition-all duration-300 group relative
              "
            >
              {/* Badge Image Thumbnail Box */}
              <div className="space-y-4">
                <div className="h-32 w-full rounded-2xl bg-[#090a0e] border border-white/[0.06] flex items-center justify-center p-3 relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="micro-label text-[9px] text-teal-300 bg-teal-500/10 border border-teal-500/30 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <span className={`micro-label text-[10px] px-2.5 py-0.5 rounded-full border ${cert.badgeColor}`}>
                    {cert.tag}
                  </span>
                  <h4 className="font-display font-bold text-lg text-[#f5f2eb] group-hover:text-amber-300 transition mt-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#9e9b93] mt-1">
                    {cert.org}
                  </p>
                </div>
              </div>

              {/* Bottom Verification & Validity */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#9e9b93]">
                <span className="font-mono text-[11px] text-teal-400">
                  {cert.validity}
                </span>
                <span className="text-amber-400 font-medium group-hover:translate-x-0.5 transition flex items-center gap-1">
                  Click to View <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ImageViewer
        image={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {showAllModal && (
        <ViewAllModal
          title="All 17 Technical Accreditations & Certifications"
          items={allCerts}
          type="certs"
          onClose={() => setShowAllModal(false)}
        />
      )}
    </section>
  );
}

export default CertificationsSection;

