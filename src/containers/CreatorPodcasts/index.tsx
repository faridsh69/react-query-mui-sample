import { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';

import PodcastTable from '@components/PodcastTable';

const PodcastsContainer: FC = () => {
  const [value] = useState(0);

  return (
    <>
      <Stack sx={{ background: '#E4E2F5' }} className="padding" direction="column" spacing={0}>
        <Tabs className="custom-tab" value={value}>
          <Tab label="Podcasts" />
        </Tabs>
      </Stack>

      <Stack pt="4rem" className="padding" direction="column" spacing={2}>
        <PodcastTable />
      </Stack>
    </>
  );
};

export default PodcastsContainer;
