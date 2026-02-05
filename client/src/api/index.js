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
    instagramUrl: siteSettings.instagramUrl,
    youtubeUrl: siteSettings.youtubeUrl,
    tiktokUrl: siteSettings.tiktokUrl,
    missionTagline: siteSettings.missionTagline,
    valuesJson: siteSettings.valuesJson,
    historyText: siteSettings.historyText,
    ourVisionJson: siteSettings.ourVisionJson,
    ourValues: siteSettings.ourValues,
    teachingsJson: siteSettings.teachingsJson,
    backgroundImage: backgroundImageUrl,
  };
}

export async function fetchServiceCarousels() {
  const response = await contentfulClient.getEntries({
    content_type: 'serviceCarousel',
    order: 'fields.order',
  });

  if (!response) {
    throw new Error('Failed to fetch service carousels');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No serviceCarousel entries found');
    return [];
  }

  return response.items.map((carousel) => ({
    id: carousel.sys.id,
    title: carousel.fields.title,
    order: carousel.fields.order,
    cards:
      carousel.fields.cards?.map((card) => ({
        id: card.sys.id,
        title: card.fields.title,
        subtitle: card.fields.subtitle,
        description: card.fields.description,
        backgroundImage: card.fields.backgroundImage?.fields?.file?.url,
      })) ?? [],
  }));
}

/**
 * Bible Gateway VOTD (Verse of the Day) API service
 */

export async function fetchVerseOfTheDay(version = 'NASB') {
  const bibleGatewayUrl = `https://www.biblegateway.com/votd/get/?format=json&version=${version}`;
  // Use CORS proxy to bypass CORS restrictions
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(bibleGatewayUrl)}`;

  const response = await fetch(proxyUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch verse of the day: ${response.statusText}`);
  }

  const proxyData = await response.json();
  const data = JSON.parse(proxyData.contents);

  return {
    text: data.votd.text,
    content: data.votd.content,
    reference: data.votd.reference,
    displayReference: data.votd.display_ref,
    permalink: data.votd.permalink,
    version: data.votd.version,
    date: data.votd.date,
  };
}
