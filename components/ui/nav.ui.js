import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import Typography from "../Typography.component";

const links = [
  {
    link: "Product",
    disabled: true,
    url: "/",
  },
  {
    link: "Services",
    disabled: true,
    url: "/",
  },
  {
    link: "Contacts",
    disabled: true,
    url: "/",
  },
  {
    link: "Blog",
    url: "/blog",
  },
];

const Nav = ({ theme }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <nav
      className={`z-40 absolute top-0 py-3 w-full max-w-screen flex justify-center`}
    >
      <div className="max-w-1160 px-4 w-full flex justify-between items-center">
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
          {links.map(({ link, url, disabled }) => (
            <Link href={url} passHref>
              <a>
                <Typography
                  variant="header-link"
                  className={`${
                    theme === "dark" ? "text-blue-dark" : "text-white"
                  } opacity-80 ${
                    !disabled
                      ? "hover:opacity-100 cursor-pointer"
                      : "cursor-default opacity-70"
                  }`}
                  key={link}
                >
                  {link}
                </Typography>
              </a>
            </Link>
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
      <div className="hidden md:block">
        <MenuIcon
          className={`h-8 p-0.5 mr-2 ${
            theme === "dark" ? "text-blue-dark" : "text-white"
          } cursor-pointer`}
          onClick={handleOpenDrawer}
        />
      </div>
      <div
        className={`z-10 absolute top-0 w-full bg-blue-dark duration-200 ease-in-out px-5 transition-all transform overflow-hidden ${
          openDrawer ? "pb-5" : "-translate-y-full"
        }`}
      >
        <div className="flex-col flex mt-4">
          <div className="justify-between flex">
            <Link href="/">
              <Image
                src="/images/team.svg"
                alt="Team Logo"
                className="cursor-pointer"
                width={69}
                height={29}
              />
            </Link>
            <MenuIcon
              className="h-8 p-0.5 transform translate-x-3 text-white cursor-pointer"
              onClick={handleOpenDrawer}
            />
          </div>
          <div className="space-y-4 flex-col flex items-start mt-8">
            {links.map(({ link, url, disabled }) => (
              <Link href={url} passHref>
                <a>
                  <Typography
                    variant="header-link"
                    className={`${
                      disabled
                        ? "text-grey-dark opacity-50 cursor-default"
                        : "text-white hover:opacity-100 cursor-pointer"
                    } opacity-80`}
                    key={link}
                  >
                    {link}
                  </Typography>
                </a>
              </Link>
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
      </div>
      <div
        className={`fixed top-0 left-0 w-screen h-screen hidden transform md:block ${
          openDrawer ? "" : "-translate-y-full"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-brightness-50 duration-200 ease-out ${
            openDrawer ? "opacity-100" : "opacity-0 -translate-y-full"
          }`}
          onClick={handleOpenDrawer}
        />
      </div>
    </nav>
  );
};

export default Nav;
