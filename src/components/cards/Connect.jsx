import Card from "./Card";
import ConnectIcon from "../../assets/icons/icon-connect.svg";
import { ArrowUpRightIcon } from "../icons/Icons";

function Connect() {
  const socials = [
    {
      name: "LinkedIn",
      handle: "in/brenzprof",
      link: "https://linkedin.com/in/brenzprof",
      image: "/socials/linkedin.jpg",
      accent: "border-teal-500/40 text-teal-300",
    },
    {
      name: "GitHub",
      handle: "Profenzy",
      link: "https://github.com/Profenzy",
      image: "/socials/github.jpg",
      accent: "border-amber-500/40 text-amber-300",
    },
    {
      name: "Facebook",
      handle: "yokaingen",
      link: "https://facebook.com/yokaingen",
      image: "/socials/facebook.jpg",
      accent: "border-pink-500/40 text-pink-300",
    },
  ];

  return (
    <Card
      title="Direct Channels & Network"
      icon={<img src={ConnectIcon} className="w-5 h-5 invert opacity-90" alt="" />}
      accent="amber"
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        <p className="text-xs text-[#9e9b93] leading-relaxed">
          Open for technical consulting, custom development contracts, GoHighLevel architecture, and strategic partnerships.
        </p>

        {/* Social channels list */}
        <div className="space-y-2.5">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-between p-3 rounded-xl
                bg-[#0e1015] border border-[#232631] hover:border-[#373b49]
                transition duration-200
              "
            >
              <div className="flex items-center gap-3">
                <img
                  src={social.image}
                  alt={social.name}
                  className="w-9 h-9 rounded-full object-cover border border-[#232631]"
                />
                <div>
                  <p className="font-display font-medium text-xs text-[#f5f2eb] group-hover:text-amber-300 transition">
                    {social.name}
                  </p>
                  <p className="text-[11px] text-[#9e9b93]">
                    {social.handle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-[#9e9b93] group-hover:text-amber-400 transition">
                <span>Connect</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

        <div className="pt-2 border-t border-[#232631]/60 flex items-center justify-between text-xs text-[#9e9b93]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            Response Time: &lt; 24h
          </span>
          <span className="font-mono text-[11px] text-[#f5f2eb]">
            bacruz.prof@gmail.com
          </span>
        </div>
      </div>
    </Card>
  );
}

export default Connect;
