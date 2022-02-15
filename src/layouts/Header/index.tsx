import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { SVG } from '@assets/icons/svgIcons';
import { useStyles } from './styles';

const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <figure className={classes.figure}>
        <Image priority src="/images/logo-black.png" alt="viral-tribe-logo" layout="fill" />
      </figure>

      <Link href="/">
        <a className={classes.link}>Shows</a>
      </Link>
      <Link href="/">
        <a className={classes.link}>
          Viral <sup>+</sup>
        </a>
      </Link>
      <Link href="/">
        <a className={classes.link}>Leaderboards</a>
      </Link>

      <Stack spacing={2} direction="row" sx={{ marginLeft: 'auto' }}>
        <Button variant="outlined" color="secondary">
          Sign in
        </Button>
        <Button variant="contained">Join</Button>

        <IconButton>
          <SVG id="search" />
        </IconButton>

        <IconButton>
          <SVG id="menu" />
        </IconButton>
      </Stack>
    </header>
  );
};

export default Header;
