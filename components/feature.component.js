import Image from "next/image";

import FeatureParagraph from "./feature-paragraph.component";

const Feature = ({ title, paragraph, photoPath, reverse }) => (
  <div
    className={`flex justify-between items-center md:flex-col-reverse ${
      reverse ? "flex-row-reverse" : "flex-row"
    }`}
  >
    <div className="w-5/12 md:mt-6 md:w-full flex justify-center">
      <Image
        src={photoPath}
        alt={title}
        height={500}
        width={600}
        className={`${reverse ? "ml-16" : "mr-16"} object-cover object-top`}
        placeholder="blur"
        blurDataURL={photoPath}
      />
    </div>
    <FeatureParagraph title={title} paragraph={paragraph} />
  </div>
);

export default Feature;
