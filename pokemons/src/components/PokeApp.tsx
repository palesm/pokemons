import React from 'react';
import {Paper} from "@mui/material";
import NavBar from './NavBar';
import CategorySelector from './CategorySelector';


function PokeApp(props: any) {
  return (
    <Paper elevation={0}>
      <NavBar />
      <CategorySelector />
    </Paper>
  );
}

export default PokeApp;