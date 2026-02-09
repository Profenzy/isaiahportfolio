import Card from "./Card";
import TechStackIcon from "../../assets/icons/icon-stack.svg";

function TechStack() {
  const frontend = [
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "HTML",
    "Kotlin",
  ];

  const backend = ["PostgreSQL", "Python", "MongoDB"];

  return (
    <Card 
    title="Tech Stack" 
    icon={<img src={TechStackIcon} className="w-5 h-5" alt="" />}
    >
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Frontend</p>
          <div className="flex flex-wrap gap-2">
            {frontend.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs border rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Backend</p>
          <div className="flex flex-wrap gap-2">
            {backend.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs border rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TechStack;
