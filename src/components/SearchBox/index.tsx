import { FC } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { SVG } from '@assets/icons/svgIcons';
import { useStyles } from './styles';

const SearchBox: FC = () => {
  const { classes } = useStyles();

  return (
    <Stack spacing={2} direction="row" alignItems="center" sx={{ height: '6rem' }}>
      <Typography sx={{ color: 'var(--color-white)', fontSize: '3rem', marginRight: '2rem' }}>
        Search
      </Typography>
      <TextField
        placeholder="Search for genres, categories or podcasts"
        className={classes.input}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SVG id="search" color="var(--color-primary-main)" />
            </InputAdornment>
          )
        }}
      />

      <Button variant="contained" color="primary" className={classes.fBtn}>
        <SVG id="filter" color="var(--color-white)" />
      </Button>
    </Stack>
  );
};

export default SearchBox;
