import { FC } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

import { SVG } from '@assets/icons/svgIcons';

interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  value?: string | number;
  size?: 'md' | 'lg';
  label?: string;
}

const ArrowIcon = () => <SVG id="arrow-down" />;

const CustomSelect: FC<CustomSelectProps> = ({
  placeholder,
  options,
  value,
  label,
  size = 'md'
}) => {
  return (
    <FormControl className={size} sx={{ position: 'relative' }}>
      <Select IconComponent={ArrowIcon} displayEmpty value={value} defaultValue={options[0]?.value}>
        {placeholder && (
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>

      {label && (
        <Typography
          sx={{
            fontWeight: 500,
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translate(120%, -50%)'
          }}
        >
          {label}
        </Typography>
      )}
    </FormControl>
  );
};

export default CustomSelect;
