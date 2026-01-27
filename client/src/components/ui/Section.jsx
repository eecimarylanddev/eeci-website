import { Box, Container, Heading, Skeleton, Text } from '@chakra-ui/react';
import { ERROR_MESSAGES } from '../../constants';

/**
 * Standardized section wrapper with optional heading and loading/error states.
 *
 * Container sizes:
 * - 'sm' = 800px (default, for text-heavy content)
 * - 'md' = 900px (for medium content like video embeds)
 * - 'lg' = 6xl (for card grids)
 */
const containerSizes = {
  sm: '800px',
  md: '900px',
  lg: '6xl',
};

export function Section({
  bg,
  size = 'md',
  paddingY = '16',
  paddingX = '6',
  textAlign = 'center',
  // Heading props
  title,
  headingAs = 'h2',
  headingSize = '2rem',
  // Intro text props
  introText,
  introFontSize = 'md',
  subtitle,
  subtitleFontSize = 'md',
  subtitleFontWeight = '600',
  // Loading/error state props
  isLoading = false,
  isError = false,
  skeletonHeight = '60px',
  // Content
  children,
}) {
  const maxWidth = containerSizes[size] || size;

  return (
    <Box
      as="section"
      background={bg}
      textAlign={textAlign}
      paddingY={paddingY}
      paddingX={paddingX}
    >
      <Container maxWidth={maxWidth}>
        {title && (
          <Heading
            as={headingAs}
            fontSize={headingSize}
            fontWeight="700"
            color="text.primary"
            marginBottom="6"
          >
            {title}
          </Heading>
        )}

        {introText && (
          <Text
            fontSize={introFontSize}
            color="text.secondary"
            textAlign="center"
            lineHeight="1.8"
            marginBottom="6"
          >
            {introText}
          </Text>
        )}

        {subtitle && (
          <Text
            fontSize={subtitleFontSize}
            fontWeight={subtitleFontWeight}
            color="text.primary"
            marginBottom="4"
          >
            {subtitle}
          </Text>
        )}

        {isError ? (
          <Text color="error" fontStyle="italic">
            {ERROR_MESSAGES.generic}
          </Text>
        ) : isLoading ? (
          <Skeleton height={skeletonHeight} borderRadius="md" />
        ) : (
          children
        )}
      </Container>
    </Box>
  );
}
