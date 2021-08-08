import Head from "next/head";

const PageHead = ({ title, description, openGraph }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={openGraph.title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={"http://www.team-app-next.com/" + openGraph.url} />
    <meta property="og:image" content={openGraph.image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="website" />
    <link rel="icon" href="/images/team.svg" />
  </Head>
);

export default PageHead;
