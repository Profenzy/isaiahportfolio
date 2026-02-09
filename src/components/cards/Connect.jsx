import Card from "./Card";
import ConnectIcon from "../../assets/icons/icon-connect.svg";

function Connect() {

  // 🔗 YOUR SOCIAL LINKS HERE
  const socials = [
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/brenzprof",
      image: "/socials/linkedin.jpg",
    },
    {
      name: "Facebook",
      link: "https://facebook.com/yokaingen",
      image: "/socials/facebook.jpg",
    },
    {
      name: "GitHub",
      link: "https://github.com/Profenzy",
      image: "/socials/github.jpg",
    },
  ];

  return (
<Card
  title="Connect with me!"
  icon={<img src={ConnectIcon} className="w-5 h-5" alt="" />}
>

  <div className="flex flex-col items-center justify-center py-2">

    {/* avatar stack */}
    <div className="flex items-center -space-x-4 mb-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <img
            src={social.image}
            alt={social.name}
            className="
              w-16 h-16
              rounded-full
              object-cover
              border-2 border-white
              shadow-sm
              transition
              group-hover:scale-105
              group-hover:z-10
            "
          />

          {/* tooltip */}
          <span
            className="
              absolute -bottom-7 left-1/2 -translate-x-1/2
              text-xs text-white
              bg-black px-2 py-1 rounded
              opacity-0 group-hover:opacity-100
              transition
              whitespace-nowrap
            "
          >
            {social.name}
          </span>
        </a>
      ))}
    </div>

    {/* text below avatars */}
    <p className="text-sm text-gray-500 text-center">
      Let’s connect and build something awesome.
    </p>

  </div>

</Card>
  );
}

export default Connect;
