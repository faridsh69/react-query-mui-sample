import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  figure: {
    minWidth: '53.6rem',
    maxWidth: '53.6rem',
    height: '53.6rem'
  },
  infoBox: {
    position: 'relative',
    padding: '5rem 0 0 3.3rem',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  tBtn: {
    padding: '1.6rem 1.8rem',
    maxHeight: '5.1rem',
    marginTop: '2rem'
  },
  cta: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',

    '& > div:last-child > button': {
      backgroundColor: 'var(--color-white)',
      borderRadius: 0,
      fontSize: '1.4rem',
      color: 'var(--color-secondary-main)',
      fontWeight: 700,
      maxHeight: '3.7rem',
      minWidth: '4.3rem',

      '&:hover': {
        backgroundColor: 'var(--color-white)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
      }
    }
  }
}));
