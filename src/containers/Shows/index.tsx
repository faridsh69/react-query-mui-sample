import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ThemeVariant } from '@custom-types/general-types';
import BlurBackground from '@components/BlurBG';
import SearchBox from '@components/SearchBox';
import PodcastSlider from '@components/MultiSlider';
import HeaderSlider from '@components/HeaderSlider';
import { useStyles } from './styles';

const DATA = [
  {
    image: '/images/poster.png',
    title: 'The Happy Place',
    category: 'Heath & Fitness',
    description:
      'Fearne Cotton talks to incredible people about life, love, loss, and everything in-between as she reveals what happiness means to them.'
  },
  {
    image: '/images/absolute-mental.jpg',
    title: 'Absolutely Mental',
    category: 'Heath & Fitness',
    description:
      'Fearne Cotton talks to incredible people about life, love, loss, and everything in-between as she reveals what happiness means to them.'
  },
  {
    image: '/images/under-the-skin.jpg',
    title: 'Under The Skin',
    category: 'Heath & Fitness',
    description:
      'Fearne Cotton talks to incredible people about life, love, loss, and everything in-between as she reveals what happiness means to them.'
  }
];

const ShowsContainer: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <HeaderSlider>
        {DATA.map(p => (
          <BlurBackground key={p.title} size="md" transparent="true" img={p.image}>
            <Stack direction="row" spacing={5} flex="1" pt="2rem" position="relative">
              <Stack direction="column" spacing={1} flex="1" className={classes.infoBox}>
                <Typography variant="h1" component="p">
                  {p.title}
                </Typography>

                <Typography mb={1} variant="caption">
                  {p.category}
                </Typography>

                <Typography>{p.description}</Typography>

                <Button variant="contained" color="primary">
                  PLAY TRAILER
                </Button>
              </Stack>

              <figure className={classes.figure}>
                <Image priority src={p.image} layout="fill" alt={p.title} />
              </figure>
            </Stack>
          </BlurBackground>
        ))}
      </HeaderSlider>

      <Stack direction="column" spacing={0} className="padding" mt="3rem">
        <SearchBox variant={ThemeVariant.DARK} labelPosition="top" label="Search Shows" />
      </Stack>

      <Stack direction="column" spacing={0} className={classes.panel}>
        <PodcastSlider title="Popular on Viral Tribe" />
        <PodcastSlider title="Top 10 in the UK today" />
        <PodcastSlider title="Exclusive to Viral Tribe" />
      </Stack>
    </>
  );
};

export default ShowsContainer;
