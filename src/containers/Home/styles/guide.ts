import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  root: {
    paddingTop: '11rem',
    paddingBottom: '10.3rem',
    background: Color.PRM_DARKER,
    color: Color.WHITE,

    '& img': {
      mixBlendMode: 'soft-light'
    },

    '& > button': {
      marginTop: '5rem'
    }
  },
  text: {
    margin: '2rem 0 4rem',
    maxWidth: '90%'
  }
}));
