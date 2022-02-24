import { makeStyles } from 'tss-react/mui';
import { Color } from '@interfaces/general';

export const useStyles = makeStyles()(() => ({
  root: {
    height: '6rem',
    minWidth: '95rem',
    width: '100%',

    '&.light': {
      color: Color.WHITE
    },
    '&.dark': {
      color: Color.SEC_DARK
    }
  },
  label: {
    color: 'inherit'
  },
  input: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF26',

    '& .MuiInputAdornment-root': {
      margin: '0 2rem'
    },

    '& .MuiOutlinedInput-root': {
      paddingLeft: 0,
      height: '100%'
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px',
      borderColor: 'currentColor'
    },

    '&.dark .MuiOutlinedInput-notchedOutline': {
      borderColor: Color.SEC_DARK
    },
    '&.light .MuiOutlinedInput-notchedOutline': {
      borderColor: Color.WHITE
    },

    '&.light:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: Color.WHITE
    },
    '&.dark:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: Color.SEC_DARK
    },

    '& input': {
      fontSize: '1.8rem',

      '&::placeholder': {
        opacity: 1
      }
    },
    '&.light input': {
      color: Color.WHITE
    },
    '&.dark input': {
      color: Color.SEC_DARK
    }
  },
  fBtn: {
    borderRadius: 0,
    width: '7.6rem',
    height: '100%'
  }
}));
