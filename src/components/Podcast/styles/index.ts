import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  banner: {
    height: '69rem',
    backgroundImage: 'url(/images/poster.png)',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    backgroundSize: '100%',
    backgroundPosition: '100% 55%',
    paddingLeft: '3rem',
    display: 'flex'
  },
  filter: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backdropFilter: 'blur(1.5rem)',
    background: 'rgba(255, 255, 255, 0.8)'
  },
  figure: {
    position: 'relative',
    minWidth: '53.6rem',
    maxWidth: '53.6rem',
    height: '53.6rem'
  },
  infoBox: {
    position: 'relative',
    padding: '5rem 14rem 0 3.3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  tBtn: {
    padding: '1.6rem 1.8rem',
    maxHeight: '5.1rem',
    marginTop: '3rem'
  }
}));
