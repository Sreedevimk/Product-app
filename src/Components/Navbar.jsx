import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
     <Box sx={{ flexGrow: 1 }}>
    <AppBar >
      <Toolbar style={{backgroundColor:"#7E60BF"} }>
         <IconButton
           size="large"
           edge="start"
          color="inherit"
          aria-label="menu"
           sx={{ mr: 2 }} 
         > 
         </IconButton> 
        <Typography  align='left' variant="h6" component="div" sx={{ flexGrow: 1}}>
          MyProductApp
        </Typography>

       <Link to={'/'}><Button style={{backgroundColor:"white",marginLeft:'10px'}} color="inherit">Home</Button></Link>
       <Link to={'/add'}><Button   style={{backgroundColor:"white",marginLeft:'10px'}} color="inherit">Add</Button></Link>
      </Toolbar>
    </AppBar>
   </Box>

  )
}

export default Navbar