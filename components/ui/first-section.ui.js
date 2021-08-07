import Image from "next/image";
import FeatureParagraph from "../feature-paragraph.component";

const FirstSection = () => (
  <section className="max-w-1160 mx-auto flex justify-between items-center py-36 pl-4 lg:pb-12 lg:px-4 lg:space-y-20 lg:flex-col">
    <FeatureParagraph
      title="Your hub for teamwork"
      paragraph="Quick and fast way for sharing, collaborating and managing projects with your team.
        Scheduling and meetings has never been easier."
    />
    <div className="-mr-120 lg:mr-0">
      <Image src="/images/dashboard.png" width={1052 * 1} height={632 * 1} />
    </div>
  </section>
);

export default FirstSection;
