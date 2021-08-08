import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import Typography from "../Typography.component";

const links = [
  {
    link: "Product",
    url: "",
  },
  {
    link: "Services",
    url: "",
  },
  {
    link: "Contacts",
    url: "",
  },
  {
    link: "Blog",
    url: "/blog",
  },
];

const Nav = ({ theme }) => {
  const [navProps, setNavProps] = useState("bg-opacity-0");
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavProps("bg-opacity-100 shadow-lg");
      } else {
        setNavProps("bg-opacity-0");
      }
    });
  }, []);

  const handleOpenDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <nav
      className={`z-40 fixed top-0 py-2 md:py-3 w-full max-w-screen flex justify-center duration-200 ${
        theme === "dark" ? "bg-blue" : "bg-blue-dark"
      } ${navProps}`}
    >
      <div className={`${theme === "dark" ? "" : "hidden"}`}>
        <div className="bg-white absolute top-0 bottom-0 right-0 left-0 z-20" />
        <div className="bg-blue opacity-20 absolute top-0 bottom-0 right-0 left-0 z-20" />
      </div>
      <div className="max-w-1160 px-4 w-full flex justify-between items-center z-30">
        <Link href="/">
          <Image
            src={`${
              theme === "dark" ? "/images/team-dark.svg" : "/images/team.svg"
            }`}
            alt="Team Logo"
            className="mr-auto cursor-pointer"
            width={69}
            height={29}
          />
        </Link>
        <div className="space-x-8 flex items-center md:hidden">
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
      <div className="hidden md:block z-50">
        <MenuIcon
          className={`h-8 p-0.5 mr-2 ${
            theme === "dark" ? "text-blue-dark" : "text-white"
          } cursor-pointer`}
          onClick={handleOpenDrawer}
        />
      </div>
      <div
        className={`z-10 absolute top-0 w-full bg-blue-dark duration-300 ease-in-out px-5 transition-all transform overflow-hidden ${
          openDrawer ? "translate-y-0 pb-5 pt-16" : "-translate-y-60"
        }`}
      >
        <div className="space-y-4 flex-col flex">
          {links.map(({ link, url }) => (
            <Typography
              variant="header-link"
              className="text-white opacity-80 hover:opacity-100"
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
      <div
        className={`hidden transform origin-top md:block fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-brightness-50 duration-200 ease-out ${
          openDrawer ? "opacity-100" : "opacity-0 -translate-y-full"
        }`}
        onClick={handleOpenDrawer}
      />
    </nav>
  );
};

export default Nav;
