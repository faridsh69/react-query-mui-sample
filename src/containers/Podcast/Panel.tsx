import { FC } from 'react';
import Stack from '@mui/material/Stack';

import CustomSelect from '@components/Select';
import Episode from './Episode';
import { useStyles } from './styles/panel';

const PodcastPanel: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={`padding ${classes.root}`}>
      <Stack direction="row" justifyContent="space-between" mb="3.6rem">
        <CustomSelect
          size="lg"
          options={[{ label: 'Season One', value: 1 }]}
          placeholder="Season"
          label="88 episodes"
        />
        <CustomSelect options={[{ label: 'Newest', value: 'createdAt' }]} placeholder="Sort" />
      </Stack>

      <Episode />
      <Episode />
    </div>
  );
};

export default PodcastPanel;
