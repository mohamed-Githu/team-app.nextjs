import Feature from "../feature.component";

const FeaturesSection = () => (
  <section className="px-2 py-36">
    <div className="max-w-1160 mx-auto space-y-10 lg:space-y-24">
      <Feature
        title="Simple Task Management"
        paragraph="Simple UI for managing tasks with your team with a detialed overview of accomplished and non accomplished missions."
        photoPath="/images/simple task management.png"
      />
      <Feature
        title="Scheduling that actually works"
        paragraph="Integrated with a Team calender of you choice. Each team member works with his favorite calendar app while all of them are synced to the master calendar."
        photoPath="/images/scheduling that actually works.png"
        reverse
      />
    </div>
  </section>
);

export default FeaturesSection;
