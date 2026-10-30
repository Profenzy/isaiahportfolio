function RosterSection() {
  const summaryRows = [
    { label: "CRM & LIVE BROADCAST", name: "TRIXY CASTRO & ENTERPRISE", count: "03 BRANDS" },
    { label: "WORKBOOKS & PLAYBOOKS", name: "TANYA MEMME EDUCATIONAL SUITE", count: "02 BOOKS" },
    { label: "AUTOMATIONS & GHL", name: "GOHIGHLEVEL ARCHITECTURE", count: "35+ WORKFLOWS" },
    { label: "SOFTWARE ENGINEERING", name: "PROTRACK PRODUCTIVITY SUITE", count: "ENTERPRISE APP" },
  ];

  const workbooks = [
    {
      title: "Own The Camera Playbook",
      client: "Tanya Memme",
      file: "/media/OwnTheCamera_Playbook.png",
      tag: "Educational Playbook",
      desc: "Comprehensive workbook covering on-camera presence, confidence framing, and speaking cadence for creator students.",
    },
    {
      title: "Basic Filming Toolkit",
      client: "Tanya Memme",
      file: "/media/Basic Filming Toolkit.png",
      tag: "Production Guide",
      desc: "Structured manual on smartphone video gear, studio audio, and beginner-to-advanced content production setups.",
    },
  ];

  const rosterTable = [
    {
      client: "Trixy Castro",
      colorTag: "#EC4899",
      role: "GHL Infrastructure, Private Portal & Live Broadcasts",
      deliverables: "End-to-end GoHighLevel management, private data viewing web application, and multi-stream live broadcast direction.",
      status: "Operational",
      dot: "#E8913C",
    },
    {
      client: "Success Unlocked",
      colorTag: "#F97316",
      role: "Sales Outreach Engine & Live Studio Operations",
      deliverables: "Multi-touch outreach sequences, automated calendar booking, and technical support during live broadcast events.",
      status: "Active Pipeline",
      dot: "#2E6B72",
    },
    {
      client: "La Escuela Nueva",
      colorTag: "#10B981",
      role: "Admissions Funnel & Private Student Portal",
      deliverables: "Student onboarding workflows, automated reminder sequences, and private admissions management system.",
      status: "Active Funnel",
      dot: "#2E6B72",
    },
    {
      client: "Tanya Memme",
      colorTag: "#EDE7DC",
      role: "SMM, Video Repurposing, Workbooks & GHL",
      deliverables: "Short-form video editing, carousel decks, published workbooks (Own The Camera & Basic Filming), and Firestarter funnels.",
      status: "Active Creator",
      dot: "#E8913C",
    },
    {
      client: "ProTrack",
      colorTag: "#EDE7DC",
      role: "AI Productivity & Behavioral Anomaly Suite",
      deliverables: "Cross-platform desktop application built with Electron, Next.js, Express, PostgreSQL, Prisma, and Supabase.",
      status: "Production App",
      dot: "#2E6B72",
    },
  ];

  return (
    <section 
      id="systems"
      className="py-24 md:py-32 bg-[#0A0C0E] border-b border-[rgba(237,231,220,0.13)] px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(237,231,220,0.13)]">
          <div className="space-y-3">
            <span className="label-caps text-[#2E6B72] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B72]" />
              SYSTEMS & PRODUCTION // ROSTER
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#EDE7DC] tracking-tight">
              CRM, live broadcasts & published workbooks.
            </h2>
          </div>
          <span className="label-caps text-[#6C7378]">
            [ 05 // 06 ]
          </span>
        </div>

        {/* 1. Hairline-Ruled Summary Rows */}
        <div className="divide-y divide-[rgba(237,231,220,0.13)] border-y border-[rgba(237,231,220,0.13)]">
          {summaryRows.map((row) => (
            <div 
              key={row.name}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#101317]/50 transition-colors px-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                <span className="label-caps text-[#E8913C] w-48 shrink-0">
                  {row.label}
                </span>
                <span className="font-display font-bold text-lg sm:text-xl text-[#EDE7DC]">
                  {row.name}
                </span>
              </div>
              <span className="font-mono text-xs text-[#9EA5A8] self-end sm:self-auto">
                {row.count}
              </span>
            </div>
          ))}
        </div>

        {/* 2. Published Workbooks Showcase (Fitted Sizes, Zero Black Side Gaps) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between pb-3 border-b border-[rgba(237,231,220,0.1)]">
            <div>
              <span className="label-caps text-[#E8913C] block">
                PUBLISHED ASSETS
              </span>
              <h3 className="font-display font-bold text-2xl text-[#EDE7DC] mt-0.5">
                Tanya Memme Educational Workbooks
              </h3>
            </div>
            <span className="label-caps text-[10px] text-[#6C7378]">
              DESIGN & FORMATTING
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {workbooks.map((wb) => (
              <div
                key={wb.title}
                className="rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] p-5 sm:p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="label-caps text-[10px] text-[#2E6B72] border border-[#2E6B72]/30 px-2.5 py-0.5 rounded-full">
                      {wb.tag}
                    </span>
                    <span className="text-xs text-[#9EA5A8] font-mono">
                      {wb.client}
                    </span>
                  </div>

                  {/* FITTED WORKBOOK CONTAINER (Aspect 7:10 matching 1414x2000 - ZERO Black Side Gaps) */}
                  <div className="relative aspect-[7/10] w-full rounded-xl overflow-hidden bg-[#101317] border border-[rgba(237,231,220,0.1)] flex items-center justify-center">
                    <img
                      src={wb.file}
                      alt={wb.title}
                      className="w-full h-full object-cover block"
                    />
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-xl text-[#EDE7DC]">
                      {wb.title}
                    </h4>
                    <p className="text-xs text-[#9EA5A8] mt-1 leading-relaxed">
                      {wb.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(237,231,220,0.08)] flex items-center justify-between text-xs text-[#6C7378]">
                  <span>Visual Layout & Typesetting</span>
                  <span className="label-caps text-[10px] text-[#E8913C]">Published</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Detailed Architecture Table */}
        <div className="space-y-4 pt-4">
          <div className="label-caps text-[#9EA5A8] pb-2">
            ENTERPRISE CLIENTS & LIVE BROADCAST OPERATIONS
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(237,231,220,0.13)]">
                  <th className="py-3 px-3 label-caps text-[#6C7378] font-medium">CLIENT / ENTITY</th>
                  <th className="py-3 px-3 label-caps text-[#6C7378] font-medium">CORE RESPONSIBILITIES</th>
                  <th className="py-3 px-3 label-caps text-[#6C7378] font-medium hidden md:table-cell">DELIVERABLES</th>
                  <th className="py-3 px-3 label-caps text-[#6C7378] font-medium text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(237,231,220,0.08)]">
                {rosterTable.map((row) => (
                  <tr 
                    key={row.client}
                    className="hover:bg-[#101317] transition-colors"
                  >
                    <td className="py-4 px-3 font-display font-bold text-base text-[#EDE7DC] whitespace-nowrap">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: row.colorTag }} />
                        {row.client}
                      </span>
                    </td>

                    <td className="py-4 px-3 text-xs text-[#EDE7DC] font-medium max-w-xs">
                      {row.role}
                    </td>

                    <td className="py-4 px-3 text-xs text-[#9EA5A8] hidden md:table-cell max-w-sm">
                      {row.deliverables}
                    </td>

                    <td className="py-4 px-3 text-xs text-right whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 label-caps text-[9.5px] text-[#EDE7DC]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: row.dot }} />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

export default RosterSection;
