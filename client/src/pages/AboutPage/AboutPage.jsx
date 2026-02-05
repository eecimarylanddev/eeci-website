import { Box } from '@chakra-ui/react';
import { Intro } from '../../components/Intro';
import { Vision } from '../../components/Vision';
import { CoreValues } from '../../components/CoreValues';
import { WhatWeTeach } from '../../components/WhatWeTeach';
import { WhatWeBelieve } from '../../components/WhatWeBelieve';
import { MeetOurTeam } from '../../components/MeetOurTeam';

export function AboutPage() {
  return (
    <Box>
      <Intro
        title="About Us"
        subtitle="Learn more about our vision, our values, and what we teach."
      />
      <Vision bg="bg.secondary" />
      <CoreValues bg="bg.primary" />
      <WhatWeTeach bg="bg.secondary" />
      <MeetOurTeam bg="bg.primary" />
    </Box>
  );
}
