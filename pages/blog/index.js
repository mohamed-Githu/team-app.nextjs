import Nav from "../../components/ui/nav.ui";
import Footer from "../../components/ui/footer.ui";
import PageHead from "../../components/page-head";
import Typography from "../../components/Typography.component";
import ArticleBox from "../../components/article-box.component";

import { getPostsOverview } from "../../utils";

const fakePosts = getPostsOverview();

const BlogPage = () => (
  <div className="bg-grey-light overflow-x-hidden">
    <PageHead
      title="Team App | Blog Post"
      description="In our blog post we share our latest thoughts, insights and Ideas. Subscribing to the blog will make you gain a lot of knowledge."
      openGraph={{
        title: "Team App | Blog Post -- Our latest ideas & insights",
        url: "http://www.team-app-next.com/blog",
        image: "/images/dashboard.png",
      }}
    />
    <main>
      <Nav theme="dark" />
      <div className="max-w-1160 px-4 mx-auto mt-36">
        <Typography variant="h1" className="text-blue-dark">
          Blog
        </Typography>
        <Typography variant="p" className="text-grey-dark mt-5">
          Our thoughts, insights and ideas. We’re trying to make your experience
          perfect.
        </Typography>
        <div className="grid grid-flow-row grid-cols-3 gap-7 my-16 lg:grid-cols-2 sm:grid-cols-1">
          {fakePosts.map((post) => (
            <ArticleBox key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default BlogPage;
