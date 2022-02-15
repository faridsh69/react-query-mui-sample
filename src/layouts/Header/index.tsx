import { FC } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { SVG } from '@assets/icons/svgIcons';
import { useStyles } from './styles';

const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.logo}>
          <SVG id="logo-black" />
        </a>
      </Link>

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
