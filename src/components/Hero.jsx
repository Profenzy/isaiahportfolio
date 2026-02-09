import GithubIcon from "../assets/icons/icon-github.svg";
import MailIcon from "../assets/icons/icon-mail.svg";
import DownloadIcon from "../assets/icons/icon-download.svg";
import profile from "../assets/images/profile.jpg"; // change if different

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          {/* profile image */}
          <img
            src={profile}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border border-black/10"
          />

          <div>
            {/* name */}
            <h1 className="text-2xl font-bold">
              Brenz Cruz
            </h1>

            {/* role */}
            <p className="text-gray-600 text-sm mt-1">
              Full Stack Developer
            </p>

            {/* internship badge */}
            <span className="
              inline-block mt-2
              text-xs font-medium
              bg-green-500/10 text-green-600
              border border-green-500/20
              px-3 py-1 rounded-full
            ">
              🟢 Available for Internship
            </span>
          </div>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex flex-wrap gap-3">

          {/* github */}
          <a
            href="https://github.com/Profenzy"
            target="_blank"
            className="
              flex items-center gap-2
              border px-4 py-2 rounded-lg text-sm
              hover:bg-gray-100 transition
            "
          >
            <img src={GithubIcon} className="w-4 h-4" alt="" />
            GitHub
          </a>

          {/* email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bacruz.prof@gmail.com"
            target="_blank"
            className="
              flex items-center gap-2
              border px-4 py-2 rounded-lg text-sm
              hover:bg-gray-100 transition
            "
          >
            <img src={MailIcon} className="w-4 h-4" alt="" />
            Send Email
          </a>

          {/* resume */}
          <a
            href="/resume.pdf"
            download
            className="
              flex items-center gap-2
              bg-black text-white px-4 py-2
              rounded-lg text-sm
              hover:bg-gray-800 transition
            "
          >
            <img src={DownloadIcon} className="w-4 h-4" alt="" />
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;
