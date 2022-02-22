import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SVG } from '@assets/icons/svgIcons';
import { useStyles } from './styles/quotes';

const QuotesSection: FC = () => {
  const { classes } = useStyles();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      position="relative"
      direction="column"
      spacing={0}
      className={classes.root}
    >
      <Image src="/images/quote-banner.png" alt="quote-banner" layout="fill" objectFit="cover" />

      <div className={classes.content}>
        <SVG id="quote" />

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>

        <Typography variant="h5">John Smith</Typography>
      </div>
    </Stack>
  );
};

export default QuotesSection;
