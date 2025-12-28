import { useQuery } from '@tanstack/react-query';
import client from '../services/contentful';

const DEFAULT_SETTINGS = {
  giveLink:
    'https://giving.myamplify.io/atestSermonVideoId = extractVideoId(settings.latestSermonUrl)app/giving/setota',
  latestSermonUrl: 'https://www.youtube.com/embed/bngvT0n4ur0',
  aboutText: `Emmanuel Evangelical Church International (EECI) is a vibrant, multi-generational church with a passion for Jesus, people, and our city. We are a community of believers dedicated to sharing the gospel and love of Christ. Our services are filled with heartfelt worship, practical teaching from the Bible, and a welcoming atmosphere for all. We believe in building strong families and a strong community, and we offer various ministries for all ages to get connected and grow in their faith. Come as you are and experience the warmth of our church family.`,
  beliefsText: `We are a Bible-believing church committed to the historic creeds of the Christian faith and the Gospel of Jesus Christ. Our mission is to inspire, equip, and create a space for living out our faith in community.`,
  facebookUrl:
    'https://www.facebook.com/people/Ethio-Emmanuel/pfbid07LJ4r13DdRn5MSNFCr7YjPLW95xyZD95ss5AR9s8WjUJX7hpk18rQFDV8CHMukhLl/',
  youtubeUrl: 'https://www.youtube.com/channel/UCljj-pkGW1Adn2ZOrib3RkA',
  tiktokUrl: 'https://www.tiktok.com/@eecimaryland',
};

// Extracts video ID from any YouTube URL format
function extractVideoId(url) {
  if (!url) return null;

  // Already just a video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  // youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  // youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  return null;
}

async function fetchSiteSettings() {
  const response = await client.getEntries({
    content_type: 'siteSettings',
    limit: 1,
  });

  if (!response) {
    throw new Error('Failed to fetch site settings: Response is undefined');
  }

  let settings;
  if (response.items.length > 0) {
    const fields = response.items[0].fields;
    settings = {
      giveLink: fields.giveLink,
      latestSermonUrl: fields.latestSermonUrl,
      latestSermonVideoId: extractVideoId(fields.latestSermonUrl),
      aboutText: fields.aboutText,
      beliefsText: fields.beliefsText,
      facebookUrl: fields.facebookUrl,
      youtubeUrl: fields.youtubeUrl,
      tiktokUrl: fields.tiktokUrl,
    };
  } else {
    console.warn('[Contentful] No siteSettings entries found!');
    settings = {
      ...DEFAULT_SETTINGS,
      latestSermonVideoId: extractVideoId(DEFAULT_SETTINGS.latestSermonUrl),
    };
  }

  return settings;
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ['siteSettings'],
    queryFn: fetchSiteSettings,
  });
}
