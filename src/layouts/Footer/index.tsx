import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

import { SVG } from '@assets/icons/svgIcons';
import { useStyles } from './styles';

const ListItemEl = styled(ListItem)({
  padding: 0,
  marginBottom: '1rem'
});

const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.box}>
        <figure className={classes.figure}>
          <Image src="/images/logo-white.png" alt="viral-tribe-logo" layout="fill" />
        </figure>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, officiis autem possimus
          quidem eligendi quas soluta est.
        </Typography>

        <Typography sx={{ marginTop: 'auto' }}>
          &copy;{` ${new Date().getFullYear()} ViralTribe`}
        </Typography>
      </div>
      <div className={classes.box}>
        <Typography className={classes.heading}>Shows</Typography>

        <List sx={{ padding: 0 }}>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>Viral Plus</a>
            </Link>
          </ListItemEl>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>For Creators</a>
            </Link>
          </ListItemEl>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>For Sponsors</a>
            </Link>
          </ListItemEl>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>Help Center</a>
            </Link>
          </ListItemEl>
        </List>
      </div>
      <div className={classes.box}>
        <Typography className={classes.heading}>Tribe</Typography>

        <List sx={{ padding: 0 }}>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>About</a>
            </Link>
          </ListItemEl>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>News</a>
            </Link>
          </ListItemEl>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>Careers</a>
            </Link>
          </ListItemEl>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>Contact</a>
            </Link>
          </ListItemEl>
        </List>
      </div>
      <div className={classes.box}>
        <Typography className={classes.heading}>Account</Typography>

        <List sx={{ padding: 0 }}>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>Leaderboards</a>
            </Link>
          </ListItemEl>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>Log in</a>
            </Link>
          </ListItemEl>
        </List>
      </div>
      <div className={classes.box}>
        <Typography className={classes.heading}>Legals</Typography>

        <List sx={{ padding: 0 }}>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>Terms of Service</a>
            </Link>
          </ListItemEl>
          <ListItemEl>
            <Link href="/">
              <a className={classes.link}>Privacy Policy</a>
            </Link>
          </ListItemEl>
        </List>

        <Stack spacing={0} direction="row" sx={{ marginTop: 'auto', alignSelf: 'flex-end' }}>
          <IconButton>
            <SVG id="facebook" />
          </IconButton>

          <IconButton>
            <SVG id="twitter" />
          </IconButton>

          <IconButton>
            <SVG id="instagram" />
          </IconButton>
        </Stack>
      </div>
    </footer>
  );
};

export default Footer;
