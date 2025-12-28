import { Intro } from '../Intro';
import { Sermon } from '../Sermon';
import { About } from '../About';
import { Beliefs } from '../Beliefs';
import { Verse } from '../Verse';
import { Services } from '../Services';
import { useSiteSettings } from '../../hooks';

export function HomePage() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <>
      <Intro />
      {isError ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#ff6b6b' }}>
          <p>Unable to load latest sermon. Please try again later.</p>
        </div>
      ) : (
        <Sermon
          subtitle="Latest message"
          title="Watch our last sermon"
          videoId={siteSettings?.latestSermonVideoId}
          loading={isLoading}
        />
      )}
      <About />
      <Beliefs />
      <Services />
      <Verse />
    </>
  );
}
