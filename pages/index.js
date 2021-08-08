import Nav from "../components/ui/nav.ui";
import PageHead from "../components/page-heade";
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
          url: "http://www.team-app-next.com",
          image:
            "http://www.team-app-next.com/public/images/simple task management.png",
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
