import { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useSiteSettings } from '../../hooks/useSiteSettings';

function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getPhotoUrl(photo) {
  if (!photo) return null;
  if (photo.startsWith('http')) return photo;
  if (photo.startsWith('//')) return `https:${photo}`;
  return `https://${photo}`;
}

function TeamCard({ name, role, photo }) {
  const hasPhoto = !!photo;

  return (
    <Box
      position="relative"
      w="280px"
      h="350px"
      borderRadius="card"
      boxShadow="sm"
      overflow="hidden"
      flexShrink={0}
      cursor="pointer"
      data-group
      css={{
        '&:hover .overlay': {
          opacity: 1,
        },
      }}
    >
      {/* Photo or Initials */}
      {hasPhoto ? (
        <Box
          as="img"
          src={photo}
          alt={name}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      ) : (
        <Flex
          w="100%"
          h="100%"
          bg="bg.secondary"
          align="center"
          justify="center"
        >
          <Flex
            w="120px"
            h="120px"
            borderRadius="full"
            bg="orange.500"
            align="center"
            justify="center"
          >
            <Text fontSize="3xl" fontWeight="700" color="white">
              {getInitials(name)}
            </Text>
          </Flex>
        </Flex>
      )}

      {/* Hover Overlay */}
      <Flex
        className="overlay"
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="100%"
        bg="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)"
        opacity="0"
        transition="opacity 300ms ease"
        align="flex-end"
        p="6"
      >
        <VStack align="start" gap="1">
          <Heading as="h4" fontSize="lg" fontWeight="700" color="white">
            {name}
          </Heading>
          <Text fontSize="sm" color="orange.300">
            {role}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export function MeetOurTeam({ bg }) {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();
  const [scrollIndex, setScrollIndex] = useState(0);

  const teamMembers = siteSettings?.teamMembersJson || [];
  const cardWidth = 280;
  const gap = 24;
  const visibleCards = 3;
  const maxIndex = Math.max(0, teamMembers.length - visibleCards);

  const scrollLeft = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <Box as="section" bg={bg} py="16" px="6">
      <Container maxW="6xl">
        {/* Header */}
        <VStack textAlign="center" mb="10">
          <Heading
            as="h3"
            fontSize="1.5rem"
            fontWeight="600"
            color="text.primary"
          >
            Meet Our Team
          </Heading>
        </VStack>

        {isError ? (
          <Text color="error" fontStyle="italic" textAlign="center">
            Unable to load team members. Please try again later.
          </Text>
        ) : isLoading ? (
          <Flex justify="center" gap="6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} w="280px" h="350px" borderRadius="card" />
            ))}
          </Flex>
        ) : teamMembers.length === 0 ? (
          <Text color="text.muted" textAlign="center">
            No team members to display.
          </Text>
        ) : (
          <Flex align="center" justify="center" gap="4">
            {/* Left Arrow */}
            <IconButton
              aria-label="Scroll left"
              variant="ghost"
              size="lg"
              onClick={scrollLeft}
              disabled={scrollIndex === 0}
              color="text.primary"
              _hover={{ bg: 'bg.secondary' }}
            >
              <FaChevronLeft size={24} />
            </IconButton>

            {/* Carousel */}
            <Box overflow="hidden" w={`${visibleCards * cardWidth + (visibleCards - 1) * gap}px`}>
              <Flex
                gap="6"
                transition="transform 300ms ease"
                transform={`translateX(-${scrollIndex * (cardWidth + gap)}px)`}
              >
                {teamMembers.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    photo={getPhotoUrl(member.photo)}
                  />
                ))}
              </Flex>
            </Box>

            {/* Right Arrow */}
            <IconButton
              aria-label="Scroll right"
              variant="ghost"
              size="lg"
              onClick={scrollRight}
              disabled={scrollIndex >= maxIndex}
              color="text.primary"
              _hover={{ bg: 'bg.secondary' }}
            >
              <FaChevronRight size={24} />
            </IconButton>
          </Flex>
        )}
      </Container>
    </Box>
  );
}
