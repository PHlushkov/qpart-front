import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DropDownServices from '../../../shared/ui/dropdown-services/DropDownServices';
import DropdownProducts from '../../../shared/ui/dropdown-products/DropdownProducts';
import DropDownAbout from '../../../shared/ui/dropdown-about/DropDownAbout';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="flex justify-between" variant="regular">
          <Typography variant="h6" color="inherit" component="div">
            QPart
          </Typography>

          <div>
            <DropDownServices />
            <DropdownProducts />
            <DropDownAbout />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
