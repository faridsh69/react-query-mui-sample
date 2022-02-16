import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  input: {
    width: '81.2rem',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF26',

    '& .MuiInputAdornment-root': {
      margin: '0 2rem'
    },

    '& .MuiOutlinedInput-root': {
      paddingLeft: 0
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px',
      borderColor: 'var(--color-white)'
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-white)'
    },

    '& input': {
      color: 'var(--color-white)',
      fontSize: '1.8rem',

      '&::placeholder': {
        opacity: 1
      }
    }
  },
  fBtn: {
    borderRadius: 0,
    width: '7.6rem',
    height: '100%'
  }
}));
