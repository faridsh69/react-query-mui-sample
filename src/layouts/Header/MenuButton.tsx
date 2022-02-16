import { FC, useState, MouseEvent } from 'react';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { SVG } from '@assets/icons/svgIcons';

const MenuButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    setAnchorEl(evt.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <SVG id="menu" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 70 }}
      >
        <Link passHref href="/for-creators">
          <MenuItem component="a" onClick={handleClose}>
            For Creators
          </MenuItem>
        </Link>
        <Link passHref href="/for-sponsors">
          <MenuItem component="a" onClick={handleClose}>
            For Sponsors
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default MenuButton;
