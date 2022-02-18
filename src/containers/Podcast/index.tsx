import { FC } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';

import { SVG } from '@assets/icons/svgIcons';
import BlurBackground from '@components/BlurBG';
import Tabs from './Tabs';
import PodcastPanel from './Panel';
import { useStyles } from './styles';

const PodcastContainer: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <BlurBackground img="/images/poster.png">
        <figure className={classes.figure}>
          <Image priority src="/images/poster.png" layout="fill" alt="happy-place-podcast" />
        </figure>

        <div className={classes.infoBox}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h1" mr="0.5rem">
              The Happy Place
            </Typography>
            <Chip color="primary" label="Claimed" icon={<SVG id="tick" />} />

            <SVG id="sats" />
          </Stack>

          <Typography mb={1} variant="caption">
            Health & Fitness
          </Typography>
          <Typography>
            Fearne Cotton talks to incredible people about life, love, loss, and everything
            in-between as she reveals what happiness means to them.
          </Typography>

          <Button aria-label="underline" color="secondary">
            Read more
          </Button>

          <Button variant="contained" color="primary" className={classes.tBtn}>
            PLAY TRAILER
          </Button>

          <Stack direction="row" spacing={6} mt="3rem" mb="2.7rem">
            <Stack direction="row" spacing={1}>
              <Avatar alt="Fearne Cotton" src="/images/host.png" />

              <Typography variant="subtitle1">
                Host
                <br />
                <strong>Fearne Cotton</strong>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                badgeContent={<SVG id="crown" />}
              >
                <Avatar alt="John Smith" src="/images/king.png" />
              </Badge>

              <Typography variant="subtitle1">
                Show King
                <br />
                <strong>John Smith</strong>
              </Typography>
            </Stack>
          </Stack>

          <Typography variant="subtitle1">
            2 Seasons • 88 Episodes • Weekly • V+ New Episodes First • 1,362 Followers
          </Typography>
        </div>

        <Stack direction="row" spacing={1} className={`padding ${classes.cta}`}>
          <Tabs />

          <Stack direction="row" spacing={1}>
            <Button variant="contained">Follow</Button>
            <IconButton>
              <SVG id="like" />
            </IconButton>
            <IconButton>
              <SVG id="share" />
            </IconButton>
            <IconButton>
              <SVG id="more" />
            </IconButton>
          </Stack>
        </Stack>
      </BlurBackground>

      <PodcastPanel />
    </>
  );
};

export default PodcastContainer;
