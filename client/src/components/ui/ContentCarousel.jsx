import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { Carousel, IconButton } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export function ContentCarousel({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <VStack gap="8" maxWidth="xl" marginX="auto">
      {/* Carousel */}
      <Carousel.Root slideCount={items.length} maxWidth="2xl" width="100%">
        <Carousel.ItemGroup overflow="overlay">
          {items.map((item, index) => (
            <Carousel.Item key={index} index={index} backgroundColor="white">
              <Box
                borderWidth="1.5px"
                borderColor="border.default"
                borderRadius="lg"
                overflow="hidden"
                height="100%"
              >
                <VStack gap="4" paddingX="8" paddingY="12" textAlign="center">
                  <Heading
                    as="h4"
                    fontSize="1.5rem"
                    fontWeight="600"
                    color="text.primary"
                  >
                    {item.title}
                  </Heading>
                  <Text color="text.secondary" fontSize="md">
                    {item.description}
                  </Text>
                </VStack>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.Control justifyContent="center" gap="4" marginTop="6">
          <Carousel.PrevTrigger asChild>
            <IconButton size="sm" variant="outline">
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.Indicators />

          <Carousel.NextTrigger asChild>
            <IconButton size="sm" variant="outline">
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Root>
    </VStack>
  );
}
