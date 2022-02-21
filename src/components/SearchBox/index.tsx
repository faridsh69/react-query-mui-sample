import { FC } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { SVG } from '@assets/icons/svgIcons';
import { ThemeVariant, Color } from '@custom-types/general-types';
import { useStyles } from './styles';

interface SearchBoxProps {
  label?: string;
  variant?: ThemeVariant;
  labelPosition?: 'left' | 'top';
}

const SearchBox: FC<SearchBoxProps> = ({ variant, label, labelPosition }) => {
  const { classes } = useStyles();

  return (
    <>
      {labelPosition === 'top' && (
        <Typography className="regular" variant="h2" component="p">
          {label}
        </Typography>
      )}

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        className={`${classes.root} ${variant}`}
      >
        {labelPosition === 'left' && (
          <Typography className="regular" variant="h2" component="p">
            {label}
          </Typography>
        )}
        <TextField
          placeholder="Search for genres, categories or podcasts"
          className={`${classes.input} ${variant}`}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SVG id="search" color={Color.PRM_MAIN} />
              </InputAdornment>
            )
          }}
        />

        <Button variant="contained" color="primary" className={classes.fBtn}>
          <SVG id="filter" color={Color.WHITE} />
        </Button>
      </Stack>
    </>
  );
};

SearchBox.defaultProps = {
  variant: ThemeVariant.LIGHT,
  label: 'Search',
  labelPosition: 'left'
};

export default SearchBox;
