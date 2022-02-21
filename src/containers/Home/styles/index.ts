import { makeStyles } from 'tss-react/mui';

import { Color } from '@custom-types/general-types';

export const useStyles = makeStyles()(() => ({
  root: {
    height: '61.3rem',
    color: Color.WHITE,
    paddingRight: '60rem',
    paddingLeft: '25rem'
  },
  img: {
    zIndex: -1
  },
  title: {
    paddingTop: '10rem',
    color: 'inherit',
    fontSize: '6rem',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '4rem'
  },
  circleLogo: {
    position: 'absolute',
    top: '45.3rem',
    right: '3rem',

    '& > span': {
      mixBlendMode: 'difference'
    }
  }
}));
