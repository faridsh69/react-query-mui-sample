import { FC } from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Select from '@components/Select';
import { UseFormRegister } from 'react-hook-form';

interface PodcastBasicInfoProps {
  register: UseFormRegister<any>;
  errors: any;
}

const PodcastBasicInfo: FC<PodcastBasicInfoProps> = ({ register, errors }) => {
  return (
    <Stack direction="row" spacing={3}>
      <Stack direction="column" spacing={2}>
        <figure>
          <Image src="/images/poster.png" alt="" width={352} height={352} />
        </figure>

        <Stack direction="row">
          <Button size="large" variant="contained" color="primary">
            Add Image
          </Button>
        </Stack>
      </Stack>

      <Stack direction="column" spacing={2} flex="1">
        <TextField
          label="Title"
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register('title')}
        />

        <FormControl fullWidth variant="standard">
          <label htmlFor="sub-input">Sub Title</label>
          <TextField className="sm-pd" id="sub-input" />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="source-input">Source</label>
          <TextField className="sm-pd" id="source-input" />
        </FormControl>

        <TextField
          label="Language"
          error={!!errors.language}
          helperText={errors.language?.message}
          {...register('language')}
        />

        <FormControl fullWidth variant="standard">
          <label>Category</label>
          <Select options={[]} />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="tags-input">Additional Tags</label>
          <TextField
            placeholder="Add tags to describe the mood and style"
            className="sm-pd"
            id="tags-input"
          />
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="description">Description</label>
          <TextField
            {...register('description')}
            error={!!errors.description}
            multiline
            id="description"
            minRows={7}
            maxRows={7}
          />
          <p>{errors.description?.message}</p>
        </FormControl>

        <FormControl fullWidth variant="standard">
          <label htmlFor="owner-em-input">Owners email</label>
          <TextField type="email" className="sm-pd" id="owner-em-input" />
        </FormControl>

        <Stack direction="row">
          <Button size="large" variant="contained" color="primary">
            Add Person
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PodcastBasicInfo;
