import { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';

import { usePodcasts } from '@hooks/usePodcasts';
import PodcastTable from '@components/PodcastTable';

const ShowsContainer: FC = () => {
  const [value] = useState(0);
  const [podcasts] = usePodcasts();

  return (
    <>
      <Stack sx={{ background: '#E4E2F5' }} className="padding" direction="column" spacing={0}>
        <Tabs className="custom-tab" value={value}>
          <Tab label="Podcasts" />
        </Tabs>
      </Stack>

      <Stack pt="4rem" className="padding" direction="column" spacing={2}>
        <PodcastTable podcasts={podcasts} />
      </Stack>
    </>
  );
};

export default ShowsContainer;
