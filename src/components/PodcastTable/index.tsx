import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import { IPodcast } from '@interfaces/podcast';
import Select from '@components/Select';
import Row from './Row';

interface PodcastTableProps {
  podcasts: IPodcast[];
}

const PodcastTable: FC<PodcastTableProps> = ({ podcasts }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2">Podcasts</Typography>

        <Button color="primary" variant="contained">
          Edit Podcast
        </Button>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" component="p">
          Your shows and episodes
        </Typography>

        <Typography className="medium" variant="h4" component="p">
          2 seasons 9 episodes
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1}>
        <FormControlLabel control={<Checkbox color="primary" />} label="Select All" />

        <Select options={[{ label: 'Archive', value: 'archive' }]} value="archive" />
      </Stack>

      <TableContainer>
        <Table>
          <TableBody>
            {podcasts.map(pod => (
              <Row key={pod._id} podcast={pod} isSelected={false} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PodcastTable;
