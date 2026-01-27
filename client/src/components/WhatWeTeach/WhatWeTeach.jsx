import { Section, ContentCarousel } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function WhatWeTeach({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const teachingsJson = siteSettings?.teachingsJson || [];

  return (
    <Section
      bg={bg}
      title="What We Teach"
      introText={teachingsJson.teachingStatement}
      isLoading={isLoading}
      isError={isError}
      skeletonHeight="300px"
    >
      <ContentCarousel items={teachingsJson.teachingPoints} />
    </Section>
  );
}
