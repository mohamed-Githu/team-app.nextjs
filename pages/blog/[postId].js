import Image from "next/image";

import Nav from "../../components/ui/nav.ui";
import Footer from "../../components/ui/footer.ui";
import PageHead from "../../components/page-head";
import Avatar from "../../components/avatar.component";
import Typography from "../../components/Typography.component";
import BlogAuther from "../../components/blog-auther.component";

import { getPaths, getPostById } from "../../utils";
import WithSpinner from "../../components/HOC/with-spinner";

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
}) => (
  <div className="overflow-x-hidden">
    <PageHead
      title={`Team App | ${title}`}
      description={description}
      openGraph={{
        title: "Team App | Blog Post -- " + title,
        url: "https://team-app-nextjs.vercel.app/blog/" + id,
        image: photo,
      }}
    />
    <Nav theme="dark" />
    <WithSpinner isLoading={!id}>
      <main className="px-4">
        <div className="max-w-3xl mx-auto mt-36 mb-8">
          <Typography variant="h1" className="text-blue-dark mb-12 xs:text-4xl">
            {title}
          </Typography>
          <BlogAuther avatar={avatar} auther={auther} date={date} />
        </div>
        <div className="max-w-4xl mb-16 mx-auto">
          <Image
            src={photo}
            alt={title}
            className="w-full object-cover"
            width={900}
            height={500}
          />
        </div>
        <div className="max-w-3xl mb-24 mx-auto">
          <Typography
            variant="p"
            className="text-blue-dark leading-8 whitespace-pre-line"
          >
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
    </WithSpinner>
  </div>
);

export const getStaticProps = async (ctx) => {
  const post = await getPostById(ctx.params.postId);

  if (!post) {
    return {
      notFound: true,
    };
  }
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
