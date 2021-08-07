import Avatar from "./avatar.component";
import Typography from "./Typography.component";

const BlogAuther = ({ avatar, auther, date, className }) => (
  <div className={`flex space-x-2.5 items-center ${className}`}>
    <Avatar src={avatar} alt={auther} className="w-10 h-10" />
    <Typography variant="auther">{auther}</Typography>
    <Typography variant="auther" className="opacity-60">
      |
    </Typography>
    <Typography variant="auther">{date}</Typography>
  </div>
);

export default BlogAuther;
