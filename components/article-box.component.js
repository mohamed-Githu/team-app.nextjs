import BlogAuther from "./blog-auther.component";
import Typography from "./Typography.component";

const ArticleBox = ({ photo, title, description, avatar, auther, date }) => (
  <div className="flex flex-col h-blog-post rounded-md overflow-hidden shadow-lg">
    <div className="h-48 w-full">
      <img
        src={photo}
        alt={title}
        className="bg-top object-cover w-full h-full"
      />
    </div>
    <div className="flex flex-col p-5 flex-grow">
      <Typography variant="post-header" className="text-blue-dark">
        {title}
      </Typography>
      <Typography variant="caption" className="text-blue-dark mt-3">
        {description}
      </Typography>
      <BlogAuther
        avatar={avatar}
        auther={auther}
        date={date}
        className="mt-auto"
      />
    </div>
  </div>
);

export default ArticleBox;
