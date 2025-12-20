import { Intro } from '../Intro';
import { Sermon } from '../Sermon';
import { About } from '../About';
import { Beliefs } from '../Beliefs';
import { Verse } from '../Verse';
import { Services } from '../Services';

export function HomePage() {
  return (
    <>
      <Intro />
      <Sermon
        subtitle="Latest message"
        title="Watch our last sermon"
        videoId="bngvT0n4ur0"
      />
      <About />
      <Beliefs />
      <Services />
      <Verse />
    </>
  );
}
