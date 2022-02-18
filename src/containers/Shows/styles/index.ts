import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  figure: {
    minWidth: '44.4rem',
    maxWidth: '44.4rem',
    height: '44.4rem'
  },
  infoBox: {
    color: 'var(--color-white)',
    alignItems: 'flex-start',
    paddingLeft: '22rem',
    paddingTop: '8rem',

    '& > button.MuiButton-root': {
      marginTop: '3rem'
    },

    '& p,& span': {
      color: 'inherit'
    }
  }
}));
