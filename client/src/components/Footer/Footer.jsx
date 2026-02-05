import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa6';
import { SocialIconButton } from '../ui';
import { useSiteSettings } from '../../hooks/useSiteSettings';
import { NAVIGATION_LINKS, CHURCH_INFO, ERROR_MESSAGES } from '../../constants';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  const socialLinks = [
    { href: siteSettings?.youtubeUrl, icon: FaYoutube, label: 'YouTube' },
    { href: siteSettings?.facebookUrl, icon: FaFacebook, label: 'Facebook' },
    { href: siteSettings?.instagramUrl, icon: FaInstagram, label: 'Instagram' },
    { href: siteSettings?.tiktokUrl, icon: FaTiktok, label: 'TikTok' },
  ];

  return (
    <Box as="footer" textAlign="center" paddingY="8" paddingX="6">
      <Text fontWeight="bold" marginBottom="4">
        Connect with us.
      </Text>
      {isError ? (
        <Box paddingY="4" color="error" fontSize="sm">
          <Text>{ERROR_MESSAGES.socialLinks}</Text>
        </Box>
      ) : (
        <>
          <HStack justify="center" gap="5" opacity={isLoading ? 0.5 : 1}>
            {socialLinks.map(({ href, icon, label }) => (
              <SocialIconButton
                key={label}
                href={href}
                icon={icon}
                label={label}
                disabled={isLoading}
              />
            ))}
          </HStack>
          <HStack justify="center" gap="8" marginY="10">
            {NAVIGATION_LINKS.map(({ label, href }) => (
              <Link key={label} onClick={() => navigate(href)}>
                {label}
              </Link>
            ))}
            <Link
              href={siteSettings?.giveLink}
              target="_blank"
              color="text.secondary"
              textDecoration="none"
              opacity={isLoading ? 0.5 : 1}
              aria-disabled={isLoading}
            >
              Give
            </Link>
          </HStack>
        </>
      )}
      <Text color="text.secondary" fontSize="sm">
        © {CHURCH_INFO.copyrightYear} {CHURCH_INFO.name}
      </Text>
    </Box>
  );
}
