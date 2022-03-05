import { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import Select from '@components/Select';
import Switch from '@components/Switch';
import { SVG } from '@assets/icons/svgIcons';

const PodcastMetaData: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <label>GUID</label>
            <TextField disabled className="sm-pd" placeholder="1234" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <label htmlFor="trailer-input">Trailer</label>
            <TextField className="sm-pd" id="trailer-input" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <label>Type</label>
            <Select options={[]} />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <label htmlFor="loc-input">Location</label>
            <TextField className="sm-pd" id="loc-input" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <label>License</label>
            <Select options={[]} />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <label htmlFor="frq-input">Frequency</label>
            <TextField className="sm-pd" id="frq-input" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <label>Locked</label>
            <Switch />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <Stack direction="row" spacing={2}>
              <label>Value for Value</label>
              <SVG id="sats" />
            </Stack>
            <Switch />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth variant="standard">
            <label>Explicit</label>
            <Switch />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PodcastMetaData;
