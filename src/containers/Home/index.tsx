import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Color } from '@custom-types/general-types';
import HeaderSlider from '@components/HeaderSlider';
import JoinMailingList from '@components/JoinMailing';
import FeaturedPodcasts from './Featured';
import GuideSection from './GuideSection';
import ViralNews from './ViralNews';
import QuotesSection from './QuotesSection';
import { useStyles } from './styles';

const DATA = [
  {
    image: '/images/hero-banner.png',
    title: 'The celebrity curated podcast'
  },
  {
    image: '/images/hero-banner.png',
    title: 'The celebrity curated podcast'
  }
];

const HomeContainer: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <HeaderSlider gutterBottom="lg">
        {DATA.map(p => (
          <Stack
            key={p.image}
            direction="column"
            spacing={0}
            flex="1"
            position="relative"
            alignItems="flex-start"
            className={classes.root}
            sx={{
              background: `url(${p.image}), linear-gradient(70deg, ${Color.PRM_MAIN} 55%, transparent 50%)`
            }}
          >
            <Typography variant="h1" component="h2" className={classes.title}>
              {p.title}
            </Typography>

            <Button variant="contained" color="primary" className="bold">
              GET STARTED
            </Button>
          </Stack>
        ))}
      </HeaderSlider>

      <figure className={classes.circleLogo}>
        <Image
          priority
          src="/images/circle-logo.png"
          width={232}
          height={234}
          alt="viral-tribe-circle-logo"
        />
      </figure>

      <FeaturedPodcasts />

      <GuideSection />

      <ViralNews />

      <JoinMailingList />

      <QuotesSection />
    </>
  );
};

export default HomeContainer;
