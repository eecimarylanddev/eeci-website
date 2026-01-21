/**
 * YouTube API service for fetching playlist and video data
 */

import contentfulClient from '../clients';

export async function fetchSiteSettings() {
  const response = await contentfulClient.getEntries({
    content_type: 'siteSettings',
    limit: 1,
  });

  if (!response) {
    throw new Error('Failed to fetch site settings');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No siteSettings entries found, using defaults');
    return {};
  }

  const siteSettings = response.items[0].fields;

  // Contentful media assets have nested structure: asset.fields.file.url
  const backgroundImageUrl = siteSettings.backgroundImage?.fields?.file?.url;

  return {
    giveLink: siteSettings.giveLink,
    sermonsPlaylist: siteSettings.sermonsPlaylist,
    aboutText: siteSettings.aboutText,
    beliefsText: siteSettings.beliefsText,
    facebookUrl: siteSettings.facebookUrl,
    youtubeUrl: siteSettings.youtubeUrl,
    tiktokUrl: siteSettings.tiktokUrl,
    missionTagline: siteSettings.missionTagline,
    valuesJson: siteSettings.valuesJson,
    historyText: siteSettings.historyText,
    backgroundImage: backgroundImageUrl ? `https:${backgroundImageUrl}` : null,
  };
}
