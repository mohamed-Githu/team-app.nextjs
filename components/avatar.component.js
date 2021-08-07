const Avatar = ({ src, alt, className }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>
    <img src={src} alt={alt} className="bg-top" />
  </div>
);

export default Avatar;
