import Card from "./Card";
import { useState } from "react";
import ViewAllModal from "../ViewAllModal";
import ImageViewer from "../ImageViewer";
import { ShieldCheckIcon, ArrowUpRightIcon } from "../icons/Icons";

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const flagshipCerts = [
    {
      title: "Google Certified Educator 1",
      org: "Google for Education",
      validity: "2026 – 2029",
      image: "/certs/google-educator.png",
      tag: "Google",
    },
    {
      title: "IT Specialist: Software Development",
      org: "Certiport",
      validity: "2026 – 2031",
      image: "/certs/it-specialist.png",
      tag: "Dev",
    },
    {
      title: "PMI Project Management Ready",
      org: "Project Management Institute",
      validity: "2026 – 2031",
      image: "/certs/pmi-pm.png",
      tag: "PMI",
    },
    {
      title: "Cisco CCST: Cybersecurity",
      org: "Cisco",
      validity: "2025 – 2031",
      image: "/certs/cisco-cybersec.png",
      tag: "Cisco",
    },
    {
      title: "Cisco CCST: IT Support",
      org: "Cisco",
      validity: "2026 – 2031",
      image: "/certs/cisco-itsupport.png",
      tag: "Cisco",
    },
    {
      title: "Cisco CCST: Networking",
      org: "Cisco",
      validity: "2026 – 2031",
      image: "/certs/cisco-networking.png",
      tag: "Cisco",
    },
  ];

  const allCerts = [
    ...flagshipCerts,
    {
      title: "PCAP: Programming Essentials in Python",
      org: "Python Institute",
      image: "/certs/pcap.png",
    },
    {
      title: "Adobe Certified Professional",
      org: "Adobe",
      image: "/certs/acp.png",
    },
    {
      title: "Cisco CyberSecurity",
      org: "Cisco",
      image: "/certs/ciscocybersec.png",
    },
    {
      title: "Globe DevCon",
      org: "Globe Company",
      image: "/certs/globe.png",
    },
    {
      title: "Basic Web Development Workshop",
      org: "Zuitt",
      image: "/certs/webdev.png",
    },
    {
      title: "Basic Java Programming",
      org: "Open Weaver",
      image: "/certs/bjp.png",
    },
    {
      title: "Basics of Python",
      org: "Open Weaver",
      image: "/certs/bop.png",
    },
    {
      title: "Basics of HTML/CSS",
      org: "Open Weaver",
      image: "/certs/htmlcss.png",
    },
    {
      title: "Learning Artificial Intelligence Webinar",
      org: "Our Lady of Fatima University",
      image: "/certs/learningai.png",
    },
    {
      title: "Future-Proofing Your Career",
      org: "Our Lady of Fatima University",
      image: "/certs/career.png",
    },
    {
      title: "Diving into Esports",
      org: "Our Lady of Fatima University",
      image: "/certs/esports.png",
    },
  ];

  return (
    <>
      <Card
        title="Verified Certifications & Accreditations"
        icon={<ShieldCheckIcon className="w-5 h-5 text-teal-400" />}
        accent="teal"
        action={
          <button 
            onClick={() => setShowAll(true)}
            className="flex items-center gap-1 hover:text-teal-400 transition"
          >
            <span>View All (17)</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </button>
        }
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {flagshipCerts.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCert(cert.image)}
              className="
                group relative
                bg-[#0e1015]/80 hover:bg-[#181a22]
                border border-[#232631] hover:border-teal-500/40
                rounded-xl p-3 cursor-pointer
                transition-all duration-200
                flex flex-col justify-between
              "
            >
              <div className="relative mb-2 overflow-hidden rounded-lg bg-[#0b0c0e]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-20 w-full object-contain p-1 group-hover:scale-105 transition duration-300"
                />
              </div>

              <div>
                <span className="micro-label text-[10px] text-teal-400">
                  {cert.tag}
                </span>
                <p className="font-display font-medium text-xs text-[#f5f2eb] line-clamp-2 mt-0.5 group-hover:text-amber-300 transition">
                  {cert.title}
                </p>
                <p className="text-[11px] text-[#9e9b93] mt-1 flex items-center justify-between">
                  <span>{cert.org}</span>
                  <span className="text-[10px] text-teal-400/80">{cert.validity}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <ImageViewer
        image={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {showAll && (
        <ViewAllModal
          title="All Certifications & Accreditations (17)"
          items={allCerts}
          type="certs"
          onClose={() => setShowAll(false)}
        />
      )}
    </>
  );
}

export default Certifications;
