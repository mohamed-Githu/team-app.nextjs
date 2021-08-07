import Link from "next/link";
import Typography from "../Typography.component";

const links = [
  {
    link: "Blog",
    url: "/blog",
  },
];

const Nav = ({ theme }) => (
  <nav className="absolute top-7 w-full max-w-screen flex justify-center">
    <div className="max-w-1160 px-4 w-full flex justify-between items-center">
      <Link href="/">
        <img
          src={`${
            theme === "dark" ? "/images/team-dark.svg" : "/images/team.svg"
          }`}
          alt="Team Logo"
          className="mr-auto cursor-pointer"
        />
      </Link>
      <div className="space-x-8 flex items-center">
        {links.map(({ link, url }) => (
          <Typography
            variant="header-link"
            className={`${
              theme === "dark" ? "text-blue-dark" : "text-white"
            } opacity-80 hover:opacity-100`}
            key={link}
          >
            <Link href={url}>{link}</Link>
          </Typography>
        ))}
        <button
          className={`${
            theme === "dark" ? "bg-blue" : "bg-white"
          } bg-opacity-20 px-6 py-2 rounded-lg xs:hidden`}
        >
          <Typography
            variant="header-link"
            className={`${theme === "dark" ? "text-blue" : "text-white"}`}
          >
            Get access
          </Typography>
        </button>
      </div>
    </div>
  </nav>
);

export default Nav;
