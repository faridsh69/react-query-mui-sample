import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PodcastSlider from '@components/MultiSlider';
import { useStyles } from './styles/featured';

const FeaturedPodcasts: FC = () => {
  const { classes } = useStyles();

  return (
    <Stack direction="column" spacing={0} className={classes.root}>
      <Typography className={classes.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Typography>

      <PodcastSlider title="Featured Podcasts" />
    </Stack>
  );
};

export default FeaturedPodcasts;
