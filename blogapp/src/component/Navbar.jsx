import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'purple'}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
       <Link to={'/blog'}><Button style={{color:'white'}}>Home</Button></Link> 
       <Link to={'/addblog'}><Button style={{color:'white'}}>Add Blog</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar