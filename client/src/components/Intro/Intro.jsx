import { Box, Container, Heading, Text } from '@chakra-ui/react';

export function Intro({ title, subtitle, children, backgroundImage }) {
  const hasBackground = !!backgroundImage;

  return (
    <Box
      as="section"
      position="relative"
      textAlign="center"
      py={{ base: '20', md: '32' }}
      px="6"
      minH={hasBackground ? { base: '400px', md: '500px' } : 'auto'}
      {...(hasBackground
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 250%',
            backgroundAttachment: { base: 'scroll', md: 'fixed' },
            backgroundRepeat: 'no-repeat',
          }
        : { bg: 'bg.primary' })}
    >
      {/* Dark overlay for readability */}
      {hasBackground && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.600"
        />
      )}

      <Container maxW="800px" position="relative" zIndex="1">
        <Heading
          as="h1"
          fontSize={{ base: '2rem', md: '2.5rem' }}
          fontWeight="700"
          lineHeight="normal"
          color={hasBackground ? 'white' : 'text.primary'}
          mb="4"
          textShadow={hasBackground ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'}
        >
          {title}
        </Heading>
        <Text
          fontSize="md"
          color={hasBackground ? 'whiteAlpha.900' : 'text.secondary'}
          mb="8"
          textShadow={hasBackground ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'}
        >
          {subtitle}
        </Text>
        {children}
      </Container>
    </Box>
  );
}
