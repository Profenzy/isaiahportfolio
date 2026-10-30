import Card from "./Card";
import { SparklesIcon } from "../icons/Icons";

function About() {
  const coreCompetencies = [
    "Full-Stack Web & Desktop Apps",
    "GoHighLevel & CRM Sales Automations",
    "Private Client Portals & Dashboards",
    "Short-Form Video & Content Repurposing",
  ];

  return (
    <Card
      title="About & Capabilities"
      icon={<SparklesIcon className="w-5 h-5 text-amber-400" />}
      accent="amber"
    >
      <div className="text-sm text-[#9e9b93] leading-relaxed space-y-4">
        <p>
          I am a systems developer and automation specialist focused on building robust full-stack applications, intelligent workflows, and high-converting digital assets for businesses and creators.
        </p>

        <div>
          <span className="micro-label text-amber-400 block mb-2">
            Core Focus Areas
          </span>
          <div className="space-y-1.5">
            {coreCompetencies.map((comp) => (
              <div key={comp} className="flex items-center gap-2 text-xs text-[#f5f2eb]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-[#232631]/60">
          <span className="micro-label text-[#9e9b93] block mb-2">
            Primary Technologies
          </span>
          <p className="text-xs text-[#f5f2eb] leading-relaxed">
            React • Next.js • Node/Express • PostgreSQL • Supabase • Prisma • Electron • GoHighLevel • Tailwind • Unity • Arduino
          </p>
        </div>
      </div>
    </Card>
  );
}

export default About;
