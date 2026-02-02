import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import eeciLogo from '../../assets/eeci-logo.PNG';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { NAVIGATION_LINKS } from '../../constants';
import { OutlineButton } from '../ui';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      width="100%"
      background="white"
      boxShadow="md"
      zIndex="100"
    >
      <Flex
        as="nav"
        marginX="auto"
        paddingX="4"
        justify="space-between"
        align="center"
      >
        <Link onClick={() => navigate('/')}>
          <Image alt="EECI" src={eeciLogo} height="60px" width="auto" />
        </Link>
        <HStack as="ul" listStyleType="none" gap="8">
          {NAVIGATION_LINKS.map(({ label, href }) => (
            <Link key={label} onClick={() => navigate(href)}>
              {label}
            </Link>
          ))}
          <OutlineButton
            color="white"
            backgroundColor="gray.900"
            asChild
            disabled={isLoading || isError}
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
          </OutlineButton>
        </HStack>
      </Flex>
    </Box>
  );
}
