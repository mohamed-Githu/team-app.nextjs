import Head from "next/head";

import Nav from "../components/ui/nav.ui";
import Footer from "../components/ui/footer.ui";
import HeroSection from "../components/ui/hero-section.ui";
import FirstSection from "../components/ui/first-section.ui";
import RatingSection from "../components/ui/rating-section.ui";
import FeaturesSection from "../components/ui/features-section.ui";

export default function Home() {
  return (
    <div className="bg-grey-light overflow-x-hidden">
      <Head>
        <title>Team App</title>
        <meta
          name="description"
          content="We provide an easy and reliable way for communicating with team members and can get your bussiness to the next lever."
        />
        <meta
          property="og:title"
          content="Team App | Homepage -- Instant collaboration for remote teams"
        />
        <meta
          property="og:description"
          content="We provide an easy and reliable way for communicating with team members and can get your bussiness to the next lever."
        />
        <meta property="og:url" content="http://www.team-app-next.com" />
        <meta
          property="og:image"
          content="http://www.team-app-next.com/images/simple task management.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <HeroSection />
        <FirstSection />
        <FeaturesSection />
        <RatingSection />
      </main>
      <Footer />
    </div>
  );
}
