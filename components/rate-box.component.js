import Image from "next/image";

import Avatar from "./avatar.component";
import Typography from "./Typography.component";

const RateBox = ({ auther, caption, position, photo }) => (
  <div className="rounded-lg bg-white flex flex-col items-start p-6 shadow-lg max-w-full xs:p-3">
    <Image alt="stars" src="/images/stars.svg" height={24} width={120} layout="responsive" />
    <Typography
      variant="caption"
      className="text-grey-dark mt-6 mb-auto w-72 xs:w-56"
    >
      {caption}
    </Typography>
    <div className="flex items-center mt-5">
      <Avatar src={photo} alt={auther} className="mr-6 w-14 h-14" />
      <div className="flex flex-col justify-between">
        <Typography variant="header" className="text-blue-dark">
          {auther}
        </Typography>
        <Typography variant="subheader" className="text-blue-dark">
          {position}
        </Typography>
      </div>
    </div>
  </div>
);

export default RateBox;
