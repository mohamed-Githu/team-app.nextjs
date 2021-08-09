import Image from "next/image";

const Avatar = ({ src, alt, className }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>
    <Image
      src={src || "/images/avatar.png"}
      alt={alt || "avatar"}
      className="bg-center object-cover"
      height={70}
      width={70}
    />
  </div>
);

export default Avatar;
