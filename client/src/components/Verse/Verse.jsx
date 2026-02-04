import { Box, Container, Text, Link, Spinner } from '@chakra-ui/react';
import { useVerseOfTheDay } from '../../hooks/useVerseOfTheDay';

export function Verse({ bg }) {
  const { data: verse, isLoading, isError } = useVerseOfTheDay();

  return (
    <Box
      as="section"
      background={bg}
      textAlign="center"
      paddingY="16"
      paddingX="6"
    >
      <Container maxWidth="800px">
        {isLoading && <Spinner size="lg" color="gray.600" />}

        {isError && (
          <Text color="red.500">Failed to load verse of the day</Text>
        )}

        {verse && (
          <Box>
            <Text
              fontSize="lg"
              fontStyle="italic"
              color="gray.600"
              marginBottom="4"
              dangerouslySetInnerHTML={{ __html: verse.content }}
            />
            <Link
              href={verse.permalink}
              fontWeight="bold"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
              _hover={{ textDecoration: 'underline' }}
            >
              {verse.displayReference}
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );
}
