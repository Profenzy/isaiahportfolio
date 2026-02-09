import Card from "./Card";
import CertIcon from "../../assets/icons/icon-cert.svg";
import { useState } from "react";
import ViewAllModal from "../ViewAllModal";
import ImageViewer from "../ImageViewer";

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const certs = [
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
        title: "Diving into Esports",
        org: "Our Lady of Fatima University",
        image: "/certs/esports.png",
      },
      {
        title: "Future-Proofing Your Career: Skills for the Digital Age",
        org: "Our Lady of Fatima University",
        image: "/certs/career.png",
      },
      {
        title: "Improving Communication Skills and Learning Artificial Intelligence Webinar",
        org: "Our Lady of Fatima University",
        image: "/certs/learningai.png",
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
        title: "Basic Web Development Workshop",
        org: "Zuitt",
        image: "/certs/webdev.png",
      },
      {
        title: "Basics of HTML/CSS",
        org: "Open Weaver",
        image: "/certs/htmlcss.png",
      },
      {
        title: "Globe DevCon",
        org: "Globe Company",
        image: "/certs/globe.png",
      },
    
  ];

  return (
    <>
      <Card
        title="Certifications"
        icon={<img src={CertIcon} className="w-5 h-5" alt="" />}
        action={
          <button onClick={() => setShowAll(true)}>
            View All
          </button>
        }
      >
        {/* show only first 3 */}
        <div className="grid grid-cols-3 gap-3">
            {certs.slice(0, 3).map((cert) => (
                <div
                key={cert.title}
                onClick={() => setSelectedCert(cert.image)}
                className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:shadow-md transition"
                >
                <img
                    src={cert.image}
                    className="h-16 w-full object-cover rounded mb-2"
                />
                <p className="text-xs font-medium">{cert.title}</p>
                <p className="text-[11px] text-gray-500">{cert.org}</p>
                </div>
            ))}
            </div>
      </Card>

      <ImageViewer
        image={selectedCert}
        onClose={() => setSelectedCert(null)}
        />

      {/* modal for all */}
      {showAll && (
        <ViewAllModal
          title="All Certifications"
          items={certs}
          type="certs"
          onClose={() => setShowAll(false)}
        />
      )}
    </>
  );
}

export default Certifications;