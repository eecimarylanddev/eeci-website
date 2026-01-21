import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaBookBible,
  FaCross,
  FaHandHoldingHeart,
  FaHeart,
  FaPeopleGroup,
  FaHandsPraying,
} from 'react-icons/fa6';
import { useSiteSettings } from '../../hooks/useSiteSettings';

// icon name in Contentful -> react icon
const iconMap = {
  bible: FaBookBible,
  cross: FaCross,
  heart: FaHeart,
  hands: FaHandHoldingHeart,
  people: FaPeopleGroup,
  prayer: FaHandsPraying,
};

function ValueCard({ icon, title, description }) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <Card.Root
      h="100%"
      p="8"
      borderRadius="card"
      boxShadow="sm"
      transition="box-shadow 350ms ease"
      _hover={{ boxShadow: 'lg' }}
    >
      <Card.Body>
        <VStack align="center" textAlign="center" gap="4">
          {IconComponent && (
            <Box color="text.primary">
              <IconComponent size={48} />
            </Box>
          )}
          <Heading
            as="h3"
            fontSize="1.25rem"
            fontWeight="650"
            color="text.primary"
          >
            {title}
          </Heading>
          <Text fontSize="md" color="text.muted" lineHeight="1.7">
            {description}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}

export function OurMission({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  const values = siteSettings?.valuesJson || [];

  return (
    <Box as="section" bg={bg} py="16" px="6">
      <Container maxW="6xl">
        {/* Mission */}
        <VStack textAlign="center" mb="16">
          <Text
            fontSize="sm"
            color="text.muted"
            textTransform="uppercase"
            letterSpacing="wide"
            mb="2"
          >
            Our Mission
          </Text>
          <Heading
            as="h2"
            fontSize="2rem"
            fontWeight="700"
            color="text.primary"
            mb="4"
          >
            {isLoading ? (
              <Skeleton height="40px" width="400px" borderRadius="md" />
            ) : isError ? (
              'To know Christ and to make Him known'
            ) : (
              siteSettings?.missionTagline || 'To know Christ and to make Him known'
            )}
          </Heading>
        </VStack>

        {/* History */}
        <VStack textAlign="center" mb="16">
          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="600"
            color="text.primary"
            mb="4"
          >
            Our History
          </Heading>
          {isError ? (
            <Text color="error" fontStyle="italic">
              Unable to load content. Please try again later.
            </Text>
          ) : isLoading ? (
            <Skeleton height="100px" width="100%" maxW="800px" borderRadius="md" />
          ) : (
            <Text fontSize="md" color="text.secondary" lineHeight="1.8" maxW="800px">
              {siteSettings?.historyText}
            </Text>
          )}
        </VStack>

        {/* Values */}
        <VStack textAlign="center" mb="10">
          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="600"
            color="text.primary"
          >
            Our Values
          </Heading>
        </VStack>

        {isError ? (
          <Text color="error" fontStyle="italic" textAlign="center" mb="16">
            Unable to load values. Please try again later.
          </Text>
        ) : isLoading ? (
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }} mb="16">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} height="200px" borderRadius="card" />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }} mb="16">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </SimpleGrid>
        )}

        {/* Beliefs */}
        <VStack textAlign="center" py="8">
          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="600"
            color="text.primary"
            mb="4"
          >
            What We Believe
          </Heading>
          {isError ? (
            <Text color="error" fontStyle="italic" mb="6">
              Unable to load content. Please try again later.
            </Text>
          ) : isLoading ? (
            <Skeleton height="60px" width="100%" maxW="700px" borderRadius="md" mb="6" />
          ) : (
            <Text fontSize="md" color="text.secondary" maxW="700px" mb="6">
              {siteSettings?.beliefsText}
            </Text>
          )}
          <Button
            variant="outline"
            borderColor="text.primary"
            color="text.primary"
            px="6"
            py="5"
            borderRadius="md"
            fontWeight="500"
            _hover={{ bg: 'text.primary', color: 'white' }}
          >
            STATEMENT OF FAITH
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
