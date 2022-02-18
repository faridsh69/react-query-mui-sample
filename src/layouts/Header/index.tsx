import { FC } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { SVG } from '@assets/icons/svgIcons';
import { useDialog } from '@hooks/useDialog';
import { useHeaderColor } from '@hooks/useHeaderColor';
import SearchBox from '@components/SearchBox';
import SignUpLogin, { AuthType } from '@components/SignUpLogin';
import MenuButton from './MenuButton';
import { useStyles } from './styles';

interface HeaderLinkProps {
  href: string;
  pathname: string;
  className: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ children, href, pathname, className }) => (
  <Link href={href}>
    <a aria-selected={pathname === href ? 'true' : 'false'} className={className}>
      {children}
    </a>
  </Link>
);

const Header: FC = () => {
  const { classes } = useStyles();
  const [openDialog] = useDialog();
  const [color, pathname] = useHeaderColor();

  return (
    <header className={`${classes.header} ${color}`}>
      <HeaderLink pathname={pathname} href="/" className={classes.logo}>
        <SVG id={color === 'light' ? 'logo-white' : 'logo-black'} />
      </HeaderLink>

      <HeaderLink pathname={pathname} href="/shows" className={classes.link}>
        Shows
      </HeaderLink>

      <HeaderLink pathname={pathname} href="/viral-plus" className={classes.link}>
        Viral <sup>+</sup>
      </HeaderLink>

      <HeaderLink pathname={pathname} href="/leaderboards" className={classes.link}>
        Leaderboards
      </HeaderLink>

      <Stack spacing={2} direction="row" sx={{ marginLeft: 'auto' }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={openDialog.bind(null, {
            backdrop: 'light',
            content: <SignUpLogin type={AuthType.LOGIN} />
          })}
          sx={color === 'light' ? { color: 'var(--color-white)', borderColor: 'currentColor' } : {}}
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
