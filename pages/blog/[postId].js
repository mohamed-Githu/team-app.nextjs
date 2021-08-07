import Head from "next/head";

import Nav from "../../components/ui/nav.ui";
import Footer from "../../components/ui/footer.ui";
import Avatar from "../../components/avatar.component";
import Typography from "../../components/Typography.component";
import BlogAuther from "../../components/blog-auther.component";

import { getPaths, getPostById } from "../../utils";

const PostPage = ({
  title,
  description,
  content,
  date,
  avatar,
  photo,
  auther,
  position,
  id,
}) => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Team App | {title}</title>
        <meta
          name="description"
          content="In our blog post we share our latest thoughts, insights and Ideas. Subscribing to the blog will make you gain a lot of knowledge."
        />
        <meta
          property="og:title"
          content="Team App | Blog Post -- Our latest ideas & insights"
        />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`http://www.team-app-next.com/blog/${id}`}
        />
        <meta
          property="og:image"
          content={`http://www.team-app-next.com${photo}`}
        />
        <link rel="icon" href="/images/team.svg" />
      </Head>
      <Nav theme="dark" />
      <main className="px-4">
        <div className="max-w-3xl px-4 mx-auto mt-36 mb-8">
          <Typography variant="h1" className="text-blue-dark mb-12">
            {title}
          </Typography>
          <BlogAuther avatar={avatar} auther={auther} date={date} />
        </div>
        <div className="max-w-4xl mb-16 mx-auto">
          <img src={photo} alt={title} className="w-full" />
        </div>
        <div className="max-w-3xl mb-24 mx-auto">
          <Typography variant="p" className="text-blue-dark leading-8">
            {content}
          </Typography>
          <div className="flex justify-start mt-14">
            <Avatar src={avatar} alt={auther} className="w-14 h-14 mr-5 mt-1" />
            <div className="flex flex-col space-y-1">
              <Typography
                variant="button"
                className="font-light text-grey uppercase"
              >
                written by
              </Typography>
              <Typography variant="p" className="text-blue-dark">
                {auther}
              </Typography>
              <Typography
                variant="subheader"
                className="text-blue-dark font-medium"
              >
                {position}
              </Typography>
            </div>
          </div>
          <div className="w-full h-0.5 bg-grey rounded-full my-14" />
          <Typography variant="subtitle" className="text-grey uppercase mb-12">
            join the conversation
          </Typography>
          <div className="flex">
            <Avatar className="h-14 w-14 mr-8" />
            <textarea
              rows={5}
              placeholder="Leave a comment"
              className="p-4 text-grey-dark outline-none border border-grey rounded w-full h-44"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = (ctx) => {
  const post = getPostById(ctx.params.postId);

  return {
    props: post,
  };
};

export const getStaticPaths = async () => {
  const paths = getPaths();

  return {
    paths,
    fallback: true,
  };
};

export default PostPage;
