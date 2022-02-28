import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';

function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Poké App</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;