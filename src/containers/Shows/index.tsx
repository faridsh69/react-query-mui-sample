import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ThemeVariant } from '@custom-types/general-types';
import BlurBackground from '@components/BlurBG';
import SearchBox from '@components/SearchBox';
import { useStyles } from './styles';

const ShowsContainer: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <BlurBackground size="md" transparent="true" img="/images/poster.png">
        <Stack direction="row" spacing={5} flex="1" pt="2rem" position="relative">
          <Stack direction="column" spacing={1} flex="1" className={classes.infoBox}>
            <Typography variant="h1" component="p">
              The Happy Place
            </Typography>

            <Typography mb={1} variant="caption">
              Health & Fitness
            </Typography>

            <Typography>
              Fearne Cotton talks to incredible people about life, love, loss, and everything
              in-between as she reveals what happiness means to them.
            </Typography>

            <Button variant="contained" color="primary">
              PLAY TRAILER
            </Button>
          </Stack>

          <figure className={classes.figure}>
            <Image priority src="/images/poster.png" layout="fill" alt="happy-place-podcast" />
          </figure>
        </Stack>
      </BlurBackground>

      <Stack direction="column" spacing={1} className="padding" mt="5rem" mb="3rem">
        <SearchBox variant={ThemeVariant.DARK} labelPosition="top" label="Search Shows" />
      </Stack>
    </>
  );
};

export default ShowsContainer;
