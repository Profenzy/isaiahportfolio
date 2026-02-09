import Card from "./Card";
import UserIcon from "../../assets/icons/icon-about.svg";

function About() {
  return (
    <Card
      title="About Me"
      icon={<img src={UserIcon} alt="" className="w-5 h-5" />}
    >
        <div className="text-sm text-gray-600 leading-relaxed space-y-3">
          <p>
            I am a Computer Science student specializing in full-stack development,
            focused on building intelligent and user-centered systems. I enjoy
            developing real-world applications that combine functionality,
            performance, and clean user experience.
          </p>

          <div>
            <p className="font-semibold text-gray-800 mb-1">
              Core Stack
            </p>
            <p className="text-xs text-gray-600">
              React • Node/Express • PostgreSQL • Supabase • Prisma •
              Electron • Tailwind • Unity • Arduino
            </p>
          </div>
        </div>
    </Card>
  );
}

export default About;
