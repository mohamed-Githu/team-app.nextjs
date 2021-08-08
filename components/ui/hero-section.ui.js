import Image from "next/image";

import Typography from "../Typography.component";

const HeroSection = () => (
  <section className="relative">
    <div className="absolute w-full h-full">
      <Image
        src="/images/hero-bg.png"
        layout="fill"
        className="object-cover object-right z-0"
      />
    </div>
    <div className="max-w-1160 px-4 mx-auto pt-56 pb-72">
      <div className="max-w-lg flex flex-col">
        <Typography variant="h1" className="text-white z-10">
          Instant collaboration for remote teams
        </Typography>
        <Typography variant="p" className="text-white opacity-80 mt-4">
          All in one platform for your remote team to chat, collaborate and
          track project progress.
        </Typography>
        <div className="flex mt-8 xs:flex-col xs:space-y-2 z-10">
          <input
            placeholder="Email"
            className="py-1 px-4 w-60 xs:w-full font-cabin placeholder-grey text-grey-dark mr-2 rounded outline-none"
          />
          <button className="px-6 py-2 bg-blue rounded">
            <Typography variant="button" className="text-white">
              Get Early Access
            </Typography>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
