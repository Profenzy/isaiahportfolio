import Card from "./Card";
import WorkIcon from "../../assets/icons/icon-work.svg";
import { useState } from "react";
import ViewAllModal from "../ViewAllModal";

function Work() {
  const [showAllWork, setShowAllWork] = useState(false);

  const workList = [
    {
      role: "Freelance / Academic Developer",
      company: "Various Projects",
      desc: "Developed multiple academic and freelance systems including monitoring tools, games, and embedded system projects.",
    },
    {
      role: "System Developer (Student Projects)",
      company: "University Projects",
      desc: "Built full-stack systems, productivity tools, and UI-based applications using modern frameworks and technologies.",
    },
    {
      role: "Social Media Manager",
      company: "Kubo ni Lola Cafe",
      desc: "Managed social media accounts for personal and professional brands, creating content and engaging with followers.",
    },
    {
      role: "Graphics Designer",
      company: "Emerge Creatives",
      desc: "Created graphics for social media and personal branding, including logos, banners, and other visual content.",
    },
  ];
  return (
    <Card 
      title="Work Experience" 
      icon={<img src={WorkIcon} className="w-5 h-5" alt="" />}
      action={
        <button onClick={() => setShowAllWork(true)}>
          View All
        </button>
      }
    >
      <div className="space-y-4 text-sm text-gray-600">
        <div>
          <p className="font-medium text-gray-800">
            Freelance / Academic Projects
          </p>
          <p>
            Developed web and system-based projects using modern tools and
            best practices. Focused on clean UI, usability, and functionality.
          </p>
        </div>

        <div>
          <p className="font-medium text-gray-800">
            Student Developer
          </p>
          <p>
            Worked on software engineering and thesis-related systems including
            activity tracking and monitoring solutions.
          </p>
        </div>

        <div>
          <p className="font-medium text-gray-800">
            Social Media
          </p>
          <p>
            Managed social media accounts for personal and professional brands, 
            creating content and engaging with followers.
          </p>
        </div>

        <div>
          <p className="font-medium text-gray-800">
            Graphics Designer
          </p>
          <p>
            Created graphics for social media and personal branding, 
            including logos, banners, and other visual content.
          </p>
        </div>
      </div>

      {showAllWork && (
        <ViewAllModal
          title="Work Experience"
          items={workList}
          type="work"
          onClose={() => setShowAllWork(false)}
        />
      )}
    </Card>
  );
}

export default Work;
