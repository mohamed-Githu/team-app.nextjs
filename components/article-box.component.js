import Image from "next/image";

import Link from "next/link";
import BlogAuther from "./blog-auther.component";
import Typography from "./Typography.component";

const ArticleBox = ({
  photo,
  title,
  description,
  avatar,
  auther,
  date,
  id,
}) => (
  <Link href={`/blog/${id}`}>
    <div className="flex flex-col h-blog-post rounded-md overflow-hidden shadow-lg cursor-pointer">
      <div className="h-48 w-full">
        <Image
          src={photo}
          alt={title}
          className="bg-top object-cover"
          height={192}
          width={400}
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
  </Link>
);

export default ArticleBox;
