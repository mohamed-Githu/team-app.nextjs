import Nav from "../components/ui/nav.ui";
import PageHead from "../components/page-head";
import Footer from "../components/ui/footer.ui";
import HeroSection from "../components/ui/hero-section.ui";
import FirstSection from "../components/ui/first-section.ui";
import RatingSection from "../components/ui/rating-section.ui";
import FeaturesSection from "../components/ui/features-section.ui";

export default function Home() {
  return (
    <div className="bg-grey-light overflow-x-hidden">
      <PageHead
        title="Team App"
        description="We provide an easy and reliable way for communicating with team members and can get your bussiness to the next lever."
        openGraph={{
          title:
            "Team App | Homepage -- Instant collaboration for remote teams",
          url: "https://team-app-nextjs.vercel.app/",
          image: "/images/hero-bg.png",
        }}
      />
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
