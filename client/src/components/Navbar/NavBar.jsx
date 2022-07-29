import React from "react";
import { InputBase, Button } from '@mui/material';
import "./NavBar.css";
/* import { useEffect } from "react"; */
import { useDispatch } from "react-redux";
import { getTextTransform } from "../../actions";
import { useState } from "react";

export default function NavBar() {
  const [textTransform, setTextTransform] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTextTransform(e.target.value)
  };

  const handleSubmit = (e) => {
    dispatch(getTextTransform(textTransform))
  }

  console.log(textTransform, 'TEXT TRANSFORM')

  return (
    <div className="navbar">
        <InputBase sx={{background: 'white', width: '25%', marginRight: '1rem'}} placeholder='Transform Word...' onChange={(e) => handleChange(e)}/>
        <Button variant="contained" type="submit" onClick={(e) => handleSubmit(e)}>Send</Button>
    </div>
  )
}