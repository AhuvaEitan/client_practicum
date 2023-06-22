import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';




function Menu() {
  const[value,setValue]=useState()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (

    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
     <Tab label="Form"  to="./Form" component={Link} {...a11yProps(0)} />
      <Tab label="Instructions"  to="./Instructions" component={Link} {...a11yProps(1)}/>
       
  
    
    </Tabs> 
     
  );
}


export default Menu