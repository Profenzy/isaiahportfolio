import { useState } from "react";
import { SITE_CONFIG } from "../../config/site";
import { CalendarIcon, ArrowUpRightIcon } from "../icons/Icons";

function DatesSection({ onOpenBooking }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAllDrawer, setShowAllDrawer] = useState(false);

  const dates = [
    {
      title: "Google Certified Educator 1",
      issuer: "Google for Education",
      effective: "11 FEB 2026",
      expiration: "11 FEB 2029",
      code: "GCE-01",
      status: "Verified",
      image: "/certs/google-educator.png",
    },
    {
      title: "IT Specialist: Software Development",
      issuer: "Certiport / Pearson VUE",
      effective: "21 MAR 2026",
      expiration: "21 MAR 2031",
      code: "ITS-DEV",
      status: "Verified",
      image: "/certs/it-specialist.png",
      pdf: "/certs/it-specialist.pdf",
    },
    {
      title: "PMI Project Management Ready",
      issuer: "Project Management Institute (PMI)",
      effective: "21 MAR 2026",
      expiration: "21 MAR 2031",
      code: "PMI-PMR",
      status: "Verified",
      image: "/certs/pmi-pm.png",
      pdf: "/certs/pmi-pm.pdf",
    },
    {
      title: "Cisco CCST: Cybersecurity",
      issuer: "Cisco Systems",
      effective: "28 APR 2025",
      expiration: "28 FEB 2031",
      code: "CSCO-SEC",
      status: "Verified",
      image: "/certs/cisco-cybersec.png",
      pdf: "/certs/cisco-cybersec.pdf",
    },
    {
      title: "Cisco CCST: IT Support",
      issuer: "Cisco Systems",
      effective: "28 FEB 2026",
      expiration: "28 FEB 2031",
      code: "CSCO-ITS",
      status: "Verified",
      image: "/certs/cisco-itsupport.png",
      pdf: "/certs/cisco-itsupport.pdf",
    },
    {
      title: "Cisco CCST: Networking",
      issuer: "Cisco Systems",
      effective: "28 FEB 2026",
      expiration: "28 FEB 2031",
      code: "CSCO-NET",
      status: "Verified",
      image: "/certs/cisco-networking.png",
      pdf: "/certs/cisco-networking.pdf",
    },
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "Python Institute",
      effective: "CERTIFIED",
      expiration: "PERPETUAL",
      code: "PY-PCAP",
      status: "Verified",
      image: "/certs/pcap.png",
    },
    {
      title: "Adobe Certified Professional",
      issuer: "Adobe Systems",
      effective: "CERTIFIED",
      expiration: "PERPETUAL",
      code: "ADBE-PRO",
      status: "Verified",
      image: "/certs/acp.png",
    },
  ];

  const additionalCerts = [
    { title: "Cisco CyberSecurity", issuer: "Cisco", image: "/certs/ciscocybersec.png" },
    { title: "Globe DevCon", issuer: "Globe Company", image: "/certs/globe.png" },
    { title: "Basic Web Development Workshop", issuer: "Zuitt", image: "/certs/webdev.png" },
    { title: "Basic Java Programming", issuer: "Open Weaver", image: "/certs/bjp.png" },
    { title: "Basics of Python", issuer: "Open Weaver", image: "/certs/bop.png" },
    { title: "Basics of HTML/CSS", issuer: "Open Weaver", image: "/certs/htmlcss.png" },
    { title: "Learning Artificial Intelligence", issuer: "Our Lady of Fatima University", image: "/certs/learningai.png" },
    { title: "Future-Proofing Your Career", issuer: "Our Lady of Fatima University", image: "/certs/career.png" },
    { title: "Diving into Esports", issuer: "Our Lady of Fatima University", image: "/certs/esports.png" },
  ];

  return (
    <section 
      id="dates"
      className="py-24 md:py-32 bg-[#0A0C0E] border-b border-[rgba(237,231,220,0.13)] px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(237,231,220,0.13)]">
          <div className="space-y-3">
            <span className="label-caps text-[#E8913C] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
              VERIFIED DATES & ACCREDITATIONS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#EDE7DC] tracking-tight">
              Official credentials & dates log.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="label-caps text-[10px] text-[#9EA5A8] hidden sm:inline">
              CLICK ANY ENTRY TO VIEW OFFICIAL CERTIFICATE
            </span>
            <button
              onClick={() => setShowAllDrawer(!showAllDrawer)}
              className="label-caps text-[10.5px] text-[#2E6B72] hover:text-[#EDE7DC] border border-[#2E6B72]/40 px-3 py-1.5 rounded-full transition cursor-pointer"
            >
              {showAllDrawer ? "Hide Archive" : "View Full Archive (17)"}
            </button>
          </div>
        </div>

        {/* The Dates Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[rgba(237,231,220,0.13)]">
                <th className="py-3 px-3 label-caps text-[#6C7378] font-medium">CREDENTIAL / TITLE</th>
                <th className="py-3 px-3 label-caps text-[#6C7378] font-medium">ISSUING BODY</th>
                <th className="py-3 px-3 label-caps text-[#6C7378] font-medium">EFFECTIVE</th>
                <th className="py-3 px-3 label-caps text-[#6C7378] font-medium">EXPIRATION</th>
                <th className="py-3 px-3 label-caps text-[#6C7378] font-medium text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(237,231,220,0.08)]">
              {dates.map((item) => (
                <tr 
                  key={item.title}
                  onClick={() => setSelectedCert(item)}
                  className="hover:bg-[#101317] transition-colors cursor-pointer group"
                >
                  {/* First Column: Display-face name */}
                  <td className="py-4 px-3 font-display font-bold text-base text-[#EDE7DC] group-hover:text-[#E8913C] transition whitespace-nowrap">
                    {item.title}
                  </td>

                  {/* Metadata columns */}
                  <td className="py-4 px-3 text-xs text-[#9EA5A8]">
                    {item.issuer}
                  </td>

                  <td className="py-4 px-3 text-xs font-mono text-[#EDE7DC] whitespace-nowrap">
                    {item.effective}
                  </td>

                  <td className="py-4 px-3 text-xs font-mono text-[#6C7378] whitespace-nowrap">
                    {item.expiration}
                  </td>

                  <td className="py-4 px-3 text-xs text-right whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 label-caps text-[9.5px] text-[#E8913C] group-hover:translate-x-0.5 transition">
                      <span>View Full Certificate</span>
                      <ArrowUpRightIcon className="w-3 h-3" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Expandable Additional Credentials Archive */}
        {showAllDrawer && (
          <div className="p-6 md:p-8 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(237,231,220,0.1)]">
              <span className="label-caps text-[#9EA5A8]">
                FOUNDATIONAL & WORKSHOP CREDENTIALS ARCHIVE
              </span>
              <span className="label-caps text-[10px] text-[#6C7378]">
                CLICK TO INSPECT
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalCerts.map((cert) => (
                <div
                  key={cert.title}
                  onClick={() => setSelectedCert(cert)}
                  className="p-3.5 rounded-xl bg-[#0A0C0E] border border-[rgba(237,231,220,0.1)] hover:border-[#E8913C] cursor-pointer transition flex items-center justify-between group"
                >
                  <div className="pr-3">
                    <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#E8913C] transition line-clamp-1">
                      {cert.title}
                    </p>
                    <p className="text-[10px] text-[#6C7378] mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#6C7378] group-hover:text-[#E8913C] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Google Appointment Scheduling Hub */}
        <div className="pt-8 border-t border-[rgba(237,231,220,0.13)]">
          <div className="p-8 md:p-12 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-xl">
              <span className="label-caps text-[#E8913C] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
                CALENDAR BOOKING // DISCOVERY CALL
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-[#EDE7DC] tracking-tight">
                Schedule a 30-minute discovery call.
              </h3>
              <p className="text-xs md:text-sm text-[#9EA5A8] leading-relaxed">
                Connect directly onto Google Calendar. We'll review your short-form video requirements, GoHighLevel CRM workflows, or software architecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={onOpenBooking}
                className="
                  border border-[#E8913C] text-[#EDE7DC] hover:bg-[#E8913C] hover:text-[#0A0C0E]
                  px-6 py-3.5 rounded-full label-caps text-[11px] font-semibold
                  transition duration-200 cursor-pointer flex items-center justify-center gap-2
                "
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Reserve Calendar Slot</span>
              </button>

              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Short-Form%20Video%20Editing%20Inquiry`}
                className="
                  border border-[rgba(237,231,220,0.15)] hover:border-[#EDE7DC] text-[#9EA5A8] hover:text-[#EDE7DC]
                  px-6 py-3.5 rounded-full label-caps text-[11px] font-medium
                  transition duration-200 flex items-center justify-center gap-2
                "
              >
                <span>Direct Email</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* FULL VIEW CERTIFICATE POPUP MODAL */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="
            fixed inset-0 z-[10000]
            bg-[#0A0C0E]/90 backdrop-blur-[14px]
            flex items-center justify-center p-4 sm:p-8
            cursor-zoom-out animate-fadeIn
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative max-w-4xl w-full max-h-[90vh] bg-[#101317]
              border border-[rgba(237,231,220,0.18)] rounded-2xl
              p-5 sm:p-7 flex flex-col justify-between
              deck-card-shadow cursor-default overflow-hidden
            "
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(237,231,220,0.1)] mb-4">
              <div>
                <span className="label-caps text-[10px] text-[#E8913C] block">
                  OFFICIAL ACCREDITATION &bull; {selectedCert.issuer || selectedCert.org}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#EDE7DC] mt-0.5">
                  {selectedCert.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="
                  w-8 h-8 rounded-full border border-[rgba(237,231,220,0.2)]
                  text-[#9EA5A8] hover:text-[#EDE7DC] hover:border-[#E8913C]
                  flex items-center justify-center transition cursor-pointer text-xs
                "
              >
                ✕
              </button>
            </div>

            {/* Certificate Full View Image */}
            <div className="my-auto relative max-h-[65vh] w-full flex items-center justify-center rounded-xl overflow-hidden bg-[#07080A] border border-[rgba(237,231,220,0.1)] p-2">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[60vh] max-w-full object-contain filter contrast-[1.04]"
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[rgba(237,231,220,0.1)] flex flex-wrap items-center justify-between gap-3 text-xs text-[#6C7378]">
              <span className="font-mono text-[11px] text-[#9EA5A8]">
                {selectedCert.effective ? `Effective: ${selectedCert.effective}` : "Verified Credential"}
                {selectedCert.expiration && ` — Expiration: ${selectedCert.expiration}`}
              </span>
              <div className="flex items-center gap-4">
                {selectedCert.pdf && (
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-caps text-[10px] text-[#2E6B72] hover:text-[#EDE7DC] flex items-center gap-1 transition"
                  >
                    <span>View Official PDF</span>
                    <ArrowUpRightIcon className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps text-[10px] text-[#E8913C] hover:underline flex items-center gap-1 transition"
                >
                  <span>Open Raw Image</span>
                  <ArrowUpRightIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default DatesSection;
