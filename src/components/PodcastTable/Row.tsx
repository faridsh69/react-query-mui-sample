import { FC, useState } from 'react';
import Image from 'next/image';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { IPodcast } from '@interfaces/podcast';
import { usePodcastEpisodes } from '@hooks/useEpisodes';
import { SVG } from '@assets/icons/svgIcons';
import PlaysComments from '@components/PlaysComments';
import { Color } from '@interfaces/general';

interface PodcastTableRowProps {
  podcast: IPodcast;
  isSelected: boolean;
  onRowChange: (rowId: string) => void;
}

const PodcastTableRow: FC<PodcastTableRowProps> = ({ podcast, isSelected, onRowChange }) => {
  const [open, setOpen] = useState(false);
  const [episodes] = usePodcastEpisodes(podcast._id, open);

  return (
    <>
      <TableRow>
        <TableCell padding="none" width={10}>
          <Checkbox
            sx={{ transform: 'translateX(-9px)' }}
            color="primary"
            checked={isSelected}
            onChange={onRowChange.bind(null, podcast._id)}
          />
        </TableCell>
        <TableCell sx={{ paddingLeft: '0' }}>
          <figure style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={podcast.image.url} alt={podcast.title} width={76} height={76} />

            <Stack direction="column" spacing={0.5} marginLeft="2rem">
              <Typography sx={{ fontWeight: 700 }}>{podcast.title}</Typography>

              <PlaysComments comments={7} plays={10} />
            </Stack>
          </figure>
        </TableCell>

        <TableCell>
          <Stack direction="row-reverse" spacing={3}>
            <Typography>9 months ago</Typography>
            <Typography>6 Episodes</Typography>
          </Stack>
        </TableCell>

        <TableCell width={10} align="right">
          <IconButton size="small" onClick={setOpen.bind(null, !open)}>
            <SVG id="arrow-down" className={open ? 'rotate' : ''} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          sx={{ backgroundColor: Color.GREY_LIGHT, paddingTop: 0, paddingBottom: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table>
              <TableBody>
                {episodes.map(ep => (
                  <TableRow key={ep._id}>
                    <TableCell padding="none">
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell>
                      <figure style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={podcast.image.url} alt={ep.title} width={76} height={76} />

                        <Stack direction="column" spacing={0.5} marginLeft="2rem">
                          <Typography sx={{ fontWeight: 700 }}>{ep.title}</Typography>

                          <PlaysComments comments={7} plays={10} />
                        </Stack>
                      </figure>
                    </TableCell>

                    <TableCell sx={{ paddingRight: '9px' }}>
                      <Stack direction="row-reverse" spacing={8}>
                        <Typography>9 months ago</Typography>
                        <Typography>{ep.itunes.duration || '---'}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default PodcastTableRow;
