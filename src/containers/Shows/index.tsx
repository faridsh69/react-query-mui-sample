import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { usePodcasts } from '@hooks/usePodcasts';
import { ThemeVariant } from '@interfaces/general';
import BlurBackground from '@components/BlurBG';
import SearchBox from '@components/SearchBox';
import PodcastSlider from '@components/MultiSlider';
import HeaderSlider from '@components/HeaderSlider';
import { useStyles } from './styles';

const ShowsContainer: FC = () => {
  const { classes } = useStyles();
  const [podcasts] = usePodcasts();

  return (
    <>
      <HeaderSlider>
        {podcasts.slice(0, 3).map(p => (
          <BlurBackground key={p.title} size="md" transparent="true" img={p.image.url}>
            <Stack direction="row" spacing={5} flex="1" pt="2rem" position="relative">
              <Stack direction="column" spacing={1} flex="1" className={classes.infoBox}>
                <Typography variant="h1" component="p">
                  {p.title}
                </Typography>

                <Typography mb={1} variant="caption">
                  {p.itunes.categories?.[0]?.name || ''}
                </Typography>

                <Typography className="ellipses-3">{p.description}</Typography>

                <Button variant="contained" color="primary">
                  PLAY TRAILER
                </Button>
              </Stack>

              <figure className={classes.figure}>
                <Image priority src={p.image.url} layout="fill" alt={p.title} />
              </figure>
            </Stack>
          </BlurBackground>
        ))}
      </HeaderSlider>

      <Stack direction="column" spacing={0} className="padding" mt="3rem">
        <SearchBox variant={ThemeVariant.DARK} labelPosition="top" label="Search Shows" />
      </Stack>

      <Stack direction="column" spacing={0} className={classes.panel}>
        <PodcastSlider items={podcasts} title="Popular on Viral Tribe" />
        <PodcastSlider items={podcasts} title="Top 10 in the UK today" />
        <PodcastSlider items={podcasts} title="Exclusive to Viral Tribe" />
      </Stack>
    </>
  );
};

export default ShowsContainer;
