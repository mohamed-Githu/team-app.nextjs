import Head from "next/head";

const PageHead = ({ title, description, openGraph }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={openGraph.url} />
      <meta
        property="og:image"
        content={"http://www.team-app-next.com" + openGraph.image}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/images/logo.svg" />
    </Head>
  );
};

export default PageHead;
