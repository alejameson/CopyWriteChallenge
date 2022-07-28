import React from "react";
import { InputBase, Button } from '@mui/material';
import "./NavBar.css";

export default function NavBar() {
  const title = 'Send';

  return (
    <div className="navbar">
        <InputBase sx={{background: 'white', width: '25%', marginRight: '1rem'}} />
        <Button variant="contained">{title}</Button>
    </div>
  )
}