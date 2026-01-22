import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import eeciLogo from '../../assets/eeci-logo.PNG';
import { useSiteSettings } from '../../hooks/useSiteSettings';

export function Navbar() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      w="100%"
      bg="white"
      zIndex="1000"
      boxShadow="0 2px 1px rgba(185, 185, 185, 0.2)"
    >
      <Flex as="nav" mx="auto" px="4" justify="space-between" align="center">
        <Link href="/">
          <Image alt="EECI" src={eeciLogo} h="60px" w="auto" />
        </Link>
        <HStack as="ul" listStyleType="none" gap="8">
          <Link href="/about">About</Link>
          <Link href="/visit">Visit</Link>
          <Button
            asChild
            fontWeight="500"
            borderRadius="md"
            disabled={isLoading || isError}
            _hover={{ bg: 'text.primary', color: 'white' }}
          >
            <Link
              href={siteSettings?.giveLink}
              target="_blank"
              rel="noopener noreferrer"
              data-disabled={isError ? '' : undefined}
              onClick={(e) => {
                if (isError) {
                  e.preventDefault();
                }
              }}
            >
              Give
            </Link>
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
