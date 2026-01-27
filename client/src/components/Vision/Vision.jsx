import { Section, ContentCarousel } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Vision({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const ourVisionJson = siteSettings?.ourVisionJson || [];

  return (
    <Section
      bg={bg}
      title="Our Vision"
      introText={ourVisionJson?.visionStatement}
      subtitle="We Seek"
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="300px"
    >
      <ContentCarousel items={ourVisionJson?.visionPoints} />
    </Section>
  );
}
