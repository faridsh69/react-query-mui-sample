import { FC } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { SVG } from '@assets/icons/svgIcons';
import { useDialog } from '@hooks/useDialog';
import SearchBox from '@components/SearchBox';
import SignUpLogin, { AuthType } from '@components/SignUpLogin';
import MenuButton from './MenuButton';
import { useStyles } from './styles';

const Header: FC = () => {
  const { classes } = useStyles();
  const [openDialog] = useDialog();

  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.logo}>
          <SVG id="logo-black" />
        </a>
      </Link>

      <Link href="/shows">
        <a className={classes.link}>Shows</a>
      </Link>
      <Link href="/viral-plus">
        <a className={classes.link}>
          Viral <sup>+</sup>
        </a>
      </Link>
      <Link href="/leaderboards">
        <a className={classes.link}>Leaderboards</a>
      </Link>

      <Stack spacing={2} direction="row" sx={{ marginLeft: 'auto' }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={openDialog.bind(null, {
            backdrop: 'light',
            content: <SignUpLogin type={AuthType.LOGIN} />
          })}
        >
          Sign in
        </Button>
        <Button
          variant="contained"
          onClick={openDialog.bind(null, {
            backdrop: 'light',
            content: <SignUpLogin type={AuthType.REGISTER} />
          })}
        >
          Join
        </Button>

        <IconButton onClick={openDialog.bind(null, { backdrop: 'dark', content: <SearchBox /> })}>
          <SVG id="search" />
        </IconButton>

        <MenuButton />
      </Stack>
    </header>
  );
};

export default Header;
