import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function PrimaryBlueSelect() {
  const [state, setstate] = useState('');
  
  const handleChange = (event) => {
    setstate(event.target.value);
  };

  return (
    <>
    <Box sx={{ minWidth: 120 ,background:"#216BEE", padding:"0px 10px",borderRadius:"10px" ,height:"100%"}} >
      <FormControl fullWidth sx={{heigth:"100%"}}>
        <InputLabel id="demo-simple-select-label" style={{color:"white"}}>United State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Age"
          onChange={handleChange}
          IconComponent={()=><ArrowDropDownIcon sx={{color:"white"}}/>}
          sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: "none",outline:"none" } }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </>
  );
}
