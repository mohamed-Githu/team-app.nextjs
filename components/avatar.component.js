const Avatar = ({ src, alt, className }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>
    <img
      src={src || "/images/avatar.png"}
      alt={alt || "avatar"}
      className="bg-center"
    />
  </div>
);

export default Avatar;
