import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const MaterialProvider: FC = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--color-primary-main': '#00B8CE',
            '--color-primary-light': '#17D4E9',
            '--color-primary-lighter': '#B3E8EF',
            '--color-primary-dark': '#12B8CE',
            '--color-primary-darker': '#008A9A',

            '--color-secondary-main': '#574D44',
            '--color-secondary-dark': '#261E1F',

            '--color-light': '#261E1F00',
            '--color-grey': '#261E1F4D',
            '--color-grey-dark': '#B4B4B4',
            '--color-grey-light': '#F9EEE7',

            '--color-white': '#fff',
            '--color-black': '#000'
          },

          html: {
            fontSize: '62.5%',

            '& *': {
              margin: 0,
              padding: 0,
              boxSizing: 'inherit'
            },

            '& a': {
              textDecoration: 'none',
              display: 'block'
            },

            '& strong': {
              color: 'var(--color-secondary-dark)'
            }
          },
          body: {
            boxSizing: 'border-box',
            fontSize: '1.5rem',
            fontFamily: 'Montserrat',
            color: 'var(--color-secondary-dark)',
            fontWeight: 500,
            lineHeight: 1.6
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: '1.6rem',
            fontFamily: 'inherit',
            lineHeight: 1.6
          },
          h1: {
            fontSize: '4.9rem',
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
            borderRadius: 5
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
            height: '4.6rem'
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MaterialProvider;
