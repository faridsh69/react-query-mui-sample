import { FC } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import { useStyles } from './styles';

interface PodcastProps {}

const Podcast: FC<PodcastProps> = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.filter}>&nbsp;</div>

      <figure className={classes.figure}>
        <Image priority src="/images/poster.png" layout="fill" alt="happy-place-podcast" />
      </figure>

      <div className={classes.infoBox}>
        <Typography variant="h1">The Happy Place</Typography>

        <Typography mb={1} variant="caption">
          Health & Fitness
        </Typography>
        <Typography>
          Fearne Cotton talks to incredible people about life, love, loss, and everything in-between
          as she reveals what happiness means to them.
        </Typography>
      </div>
    </div>
  );
};

export default Podcast;
