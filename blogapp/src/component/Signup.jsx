import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div style={{margin:'8%',textAlign:'center'}} >
    <Grid container spacing={2}>
  <Grid  size={{ xs: 6, md: 6 }}>
    <TextField fullWidth label='Name' varient='Outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Email' varient='Outlined'></TextField> 
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='password' varient='Outlined'></TextField> 
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Phone Number' varient='Outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <TextField fullWidth label='Address' varient='Outlined' multiline rows={4}></TextField>
  
  <Grid size={{ xs: 12, md: 12 }} >
    <br />
  <Button color='secondary' variant='contained' >Register</Button>
  </Grid> <br />
  <Grid size={{ xs: 12, md: 12 }} >
  <Link to={'/'} style={{color:'purple'}}>Already Registered? Login Here</Link>
  </Grid>
  </Grid>
</Grid>

    </div>
  )
}

export default Signup