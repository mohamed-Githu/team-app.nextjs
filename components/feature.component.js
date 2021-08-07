import FeatureParagraph from "./feature-paragraph.component";

const Feature = ({ title, paragraph, photoPath, reverse }) => (
  <div
    className={`flex justify-between items-center sm:flex-col-reverse ${
      reverse ? "flex-row-reverse" : "flex-row"
    }`}
  >
    <img
      src={photoPath}
      alt={title}
      className={`w-1/2 ${reverse ? "ml-16" : "mr-16"} lg:mx-0 sm:mt-6 sm:w-full sm:max-h-96 object-cover object-top xs:max-h-full`}
    />
    <FeatureParagraph title={title} paragraph={paragraph} />
  </div>
);

export default Feature;
