import { Intro } from '../Intro';
import { OurMission } from '../OurMission';

export function AboutPage() {
  return (
    <>
      <Intro
        title="About Us"
        subtitle="Learn more about our church, our mission, and what we believe."
      />
      <OurMission bg="bg.secondary" />
    </>
  );
}