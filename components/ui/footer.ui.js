import { ArrowRightIcon } from "@heroicons/react/solid";
import Typography from "../Typography.component";

const footerLinks = [
  {
    header: "Help",
    links: ["Support", "Knowledgebase", "Tutorials"],
  },
  {
    header: "Features",
    links: ["Screen Sharing", "IOS & Android Apps", "File Sharing"],
  },
  {
    header: "Company",
    links: ["About Us", "Careers", "Contact Us"],
  },
  {
    header: "Stay Up To Date",
  },
];

const Footer = () => (
  <footer className="py-24 px-4 bg-blue-dark">
    <div className="flex justify-between max-w-1160 mx-auto md:flex-col md:space-y-16">
      <div className="mr-auto flex flex-col items-start h-72 w-48 md:h-60 md:mb-16 lg:mr-10">
        <img src="/images/team.svg" className="h-7" />
        <Typography variant="footer-link" className="mb-auto mt-5">
          The last team chat you will ever need
        </Typography>
        <Typography variant="footer-link">&copy; Copyright Team App</Typography>
      </div>
      <div className="flex flex-wrap justify-end xs:flex-col lg:justify-between">
        {footerLinks.map(({ header, links }, i) => (
          <div
            className={`ml-8 h-72 ${
              i === footerLinks.length - 1 ? "" : "w-40"
            } md:ml-0`}
            key={header}
          >
            <Typography variant="header" className="text-white">
              {header}
            </Typography>
            <div className="space-y-5 mt-8">
              {i === footerLinks.length - 1 ? (
                <div className="space-y-5">
                  <Typography variant="footer-link">
                    Subscribe to our news letter
                  </Typography>
                  <div className="border-2 border-grey w-64 bg-white bg-opacity-20 rounded flex items-center justify-between pr-1">
                    <input
                      placeholder="Email"
                      className="py-2 px-4 w-full font-cabin bg-opacity-0 bg-white placeholder-grey text-grey-light outline-none"
                    />
                    <ArrowRightIcon className="h-8 text-grey cursor-pointer" />
                  </div>
                </div>
              ) : (
                links.map((link) => (
                  <Typography
                    key={link}
                    variant="footer-link"
                    className="hover:opacity-100 hover:text-blue duration-200 cursor-pointer"
                  >
                    {link}
                  </Typography>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
