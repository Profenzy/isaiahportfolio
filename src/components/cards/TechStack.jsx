import Card from "./Card";
import TechStackIcon from "../../assets/icons/icon-stack.svg";

function TechStack() {
  const stackCategories = [
    {
      category: "Full-Stack & Systems",
      color: "border-teal-500/30 text-teal-300 bg-teal-500/10",
      skills: ["React / Next.js", "TypeScript", "Node.js / Express", "PostgreSQL", "Prisma ORM", "Supabase", "Electron", "Tailwind CSS"],
    },
    {
      category: "CRM & Sales Automations",
      color: "border-amber-500/30 text-amber-300 bg-amber-500/10",
      skills: ["GoHighLevel (GHL)", "Firestarter", "Webhook Pipelines", "Client Portals", "Sales Outreach Flows"],
    },
    {
      category: "Creative, Video & Hardware",
      color: "border-purple-500/30 text-purple-300 bg-purple-500/10",
      skills: ["Adobe Creative Cloud", "Short-Form Video Editing", "Carousel Design", "Unity / C#", "Arduino & Sensors"],
    },
  ];

  return (
    <Card 
      title="Technical & Automation Arsenal" 
      icon={<img src={TechStackIcon} className="w-5 h-5 invert opacity-90" alt="" />}
      accent="teal"
    >
      <div className="space-y-4">
        {stackCategories.map((group) => (
          <div key={group.category} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="micro-label text-[#9e9b93]">
                {group.category}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full border ${group.color}`}>
                Active
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1 text-xs rounded-lg
                    bg-[#0e1015] text-[#f5f2eb]
                    border border-[#232631] hover:border-[#373b49]
                    transition duration-200
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TechStack;
