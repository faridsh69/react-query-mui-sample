import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { SVG, Icons } from '@assets/icons/svgIcons';
import { Color } from '@custom-types/general-types';
import { useStyles } from './styles/guide';

interface InfoBoxProps {
  title: string;
  text: string;
  icon: Icons;
}

const InfoBox: FC<InfoBoxProps> = ({ title, text, icon }) => (
  <Stack direction="column" spacing={1}>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography variant="h4" component="p">
        {title}
      </Typography>
      <SVG id={icon} />
    </Stack>

    <Typography variant="h6" color={Color.PRM_LIGHTER}>
      {text}
    </Typography>
  </Stack>
);

const GuideSection: FC = () => {
  const { classes } = useStyles();

  return (
    <Stack
      alignItems="flex-start"
      position="relative"
      direction="column"
      spacing={0}
      className={`padding ${classes.root}`}
    >
      <Image src="/images/how-it-works.png" alt="how-it-works" layout="fill" objectFit="cover" />

      <Typography variant="h2" component="p" className="regular">
        How it works
      </Typography>

      <Typography variant="h3" className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Typography>

      <Stack direction="row" spacing={3}>
        <InfoBox
          icon="play"
          title="Listen"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
        />
        <InfoBox
          icon="love-icon"
          title="Love"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
        />
        <InfoBox
          icon="earn-icon"
          title="Earn"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
        />
      </Stack>

      <Button variant="outlined" color="inherit" className="bold">
        GET STARTED
      </Button>
    </Stack>
  );
};

export default GuideSection;
