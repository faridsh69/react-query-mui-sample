import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          fontFamily: 'inherit',
          color: 'var(--color-secondary-dark)',
          lineHeight: 1.6
        },
        h1: {
          fontSize: '4.9rem',
          fontWeight: 500
        },
        h2: {
          fontSize: '3rem',
          fontWeight: 500
        },
        caption: {
          fontWeight: 500,
          display: 'inline-block',
          color: 'var(--color-secondary-main)'
        },
        subtitle1: {
          fontWeight: 500,
          display: 'inline-block',
          fontSize: '1.4rem',
          color: 'var(--color-secondary-main)'
        },
        subtitle2: {
          fontWeight: 400,
          display: 'inline-block',
          fontSize: '1.4rem',
          color: 'var(--color-secondary-dark)'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: 'Montserrat',
          fontSize: '1.6rem',
          fontWeight: 500,
          color: 'var(--color-secondary-main)',

          '&::placeholder': {
            fontSize: '1.6rem',
            opacity: 1
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderWidth: 2,
          borderColor: 'var(--color-secondary-main)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          fontFamily: 'Montserrat',
          textTransform: 'initial',
          boxShadow: 'none',
          borderRadius: 5,
          height: '5rem',
          borderColor: 'currentColor',

          '&:hover': {
            borderColor: 'currentColor'
          },

          "&[aria-label='underline']": {
            fontSize: 'inherit',
            textDecoration: 'underline',
            height: 'auto',
            paddingRight: 0,
            paddingLeft: 0,
            fontWeight: 'inherit',
            color: 'inherit'
          }
        },
        outlined: {
          borderWidth: 2,

          '&:hover': {
            borderWidth: 2
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '4.6rem',
          height: '4.6rem',

          '&.md': {
            width: '4.2rem',
            height: '4.2rem'
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          '&.MuiPaper-root': {
            borderRadius: 0,
            boxShadow: '0px 0px 30px #00000029'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          fontFamily: 'Montserrat',
          fontWeight: 500,
          color: 'var(--color-secondary-main)',
          paddingLeft: '2rem',
          paddingRight: '2rem',

          '&.ft-lg': {
            fontSize: '2rem'
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'transparent',
          boxShadow: 'none',
          maxWidth: '100%',
          maxHeight: '100%',
          margin: 0
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          textTransform: 'initial',
          fontSize: '1.6rem',
          fontWeight: 400
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingLeft: 15,
          paddingTop: 11,
          paddingBottom: 11,
          display: 'flex',
          alignItems: 'center',

          '& ~ svg': {
            position: 'absolute',
            right: 20,
            zIndex: -1
          }
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.lg': {
            minWidth: '26rem'
          },
          '&.md': {
            minWidth: '16.8rem'
          }
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: 9999,

          '&.dark': {
            backdropFilter: 'blur(1rem)',
            background: 'rgba(38, 30, 31, 0.8)'
          },

          '&.light': {
            backdropFilter: 'blur(0.5rem)',
            background: 'rgba(255, 248, 239, 0.8)'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '0 0.5rem',
          borderRadius: '2.9rem'
        },
        label: {
          fontSize: '1.4rem'
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: '1.4rem',
          fontFamily: 'Montserrat'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '2.5rem'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#00B8CE',
      light: '#17D4E9',
      contrastText: '#fff'
    },
    secondary: {
      light: '#574D44',
      main: '#261E1F',
      contrastText: '#fff'
    }
  }
});
