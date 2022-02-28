import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import { SVG } from '@assets/icons/svgIcons';
import NewBadge from '@components/NewBadge';
import PlaysComments from '@components/PlaysComments';
import { useStyles } from './styles/episode';

const Episode: FC = () => {
  const { classes } = useStyles();

  return (
    <Stack direction="row" spacing={2} className={classes.root}>
      <figure className={classes.figure}>
        <Image src="/images/poster.png" layout="fill" alt="episode-title" />
      </figure>

      <Stack flex={1} direction="column" alignItems="flex-start" spacing={1}>
        <NewBadge position="right" display>
          <Typography variant="h2">Bigger Than Us</Typography>
        </NewBadge>

        <Typography variant="subtitle1" color="primary" className={classes.subtitle}>
          <span>S1 E3</span>

          <SVG id="calendar" />
          <span>19 Jan 2022</span>

          <SVG id="clock" />
          <span>2 hr 12 min</span>

          <SVG id="explicit" />
        </Typography>

        <Typography mb={1} variant="caption">
          Health & Fitness
        </Typography>

        <Typography sx={{ maxWidth: '73rem' }}>
          Fearne Cotton talks to incredible people about life, love, loss, and everything in-between
          as she reveals what happiness means to them.
        </Typography>

        <Button aria-label="underline" color="secondary">
          Read more
        </Button>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignSelf="stretch"
        >
          <Stack direction="row" alignItems="center" spacing={0}>
            <IconButton>
              <SVG id="play" />
            </IconButton>
            <Typography sx={{ fontWeight: 700, marginRight: '1rem' }} color="primary">
              PLAY
            </Typography>

            <PlaysComments comments={7} plays={10} />
          </Stack>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            badgeContent={<SVG id="crown" />}
          >
            <Avatar className="md" alt="John Smith" src="/images/king.png" />
          </Badge>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Episode;
