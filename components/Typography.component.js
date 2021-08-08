const variants = {
  h1: "font-cabin font-medium text-5xl leading-12",
  p: "font-cabin font-semibold text-lg leading-7",
  caption: "font-cabin font-normal text-base leading-7",
  header: "font-cabin font-bold text-base tracking-widest capitalize",
  "header-link": "font-cabin font-bold text-lg",
  button: "font-cabin font-bold text-base",
  subheader: "font-cabin font-semibold text-sm",
  "footer-link": "font-cabin text-base text-white opacity-60",
  "post-header": "font-cabin text-dark-blue text-2xl font-semibold",
  auther: "font-cabin text-grey text-xs",
  subtitle: "font-cabin text-grey text-2xl font-light",
};

const Typography = ({ variant, className, children }) => (
  <p className={`${variants[variant]} ${className}`}>{children}</p>
);

export default Typography;
