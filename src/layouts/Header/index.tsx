import { FC, useState } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { SVG } from '@assets/icons/svgIcons';
import SearchBox from '@components/SearchBox';
import Backdrop from '@components/Backdrop';
import { useStyles } from './styles';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <>
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

          <IconButton onClick={setOpen.bind(null, true)}>
            <SVG id="search" />
          </IconButton>

          <IconButton>
            <SVG id="menu" />
          </IconButton>
        </Stack>
      </header>

      <Backdrop variant="dark" open={open} handleClose={setOpen.bind(null, false)}>
        <SearchBox />
      </Backdrop>
    </>
  );
};

export default Header;
