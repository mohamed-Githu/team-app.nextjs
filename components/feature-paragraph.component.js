import Typography from "./Typography.component";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const FeatureParagraph = ({ title, paragraph }) => (
  <div className="max-w-lg px-4 lg:max-w-sm md:max-w-xl">
    <Typography variant="h1" className="text-blue-dark mb-4">
      {title}
    </Typography>
    <Typography variant="p" className="text-grey-dark mb-8">
      {paragraph}
    </Typography>
    <button className="flex items-center space-x-2 hover:space-x-3">
      <Typography variant="button" className="text-blue">
        Learn more
      </Typography>
      <ArrowNarrowRightIcon className="text-blue w-4 duration-200" />
    </button>
  </div>
);

export default FeatureParagraph;
