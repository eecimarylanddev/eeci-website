import { SimpleGrid } from '@chakra-ui/react';
import { OverlayCarousel, Section } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { useServiceCarousels } from '../../hooks/useServiceCarousels';

export function Services({ bg }) {
  const { data: siteSettings } = useSiteSettings();
  const { data: carousels } = useServiceCarousels();

  const backgroundImage = siteSettings?.backgroundImage;

  // Use Contentful data if available, otherwise use fallback

  return (
    <Section bg={bg} size="lg" title="Get Involved">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
        {carousels?.map((carousel) => (
          <OverlayCarousel
            key={carousel.id}
            items={carousel.cards.map((card) => ({
              ...card,
              // Use card's background image, fallback to siteSettings background
              backgroundImage: card.backgroundImage || backgroundImage,
            }))}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}
