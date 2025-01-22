import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';

const Addblog = () => {
  return (
    <div style={{margin:'5%'}}>
    <Grid container spacing={2}>
  <Grid  size={{ xs: 6, md: 6 }}>
    <TextField fullWidth label='Title' varient='Outlined'></TextField>
  </Grid>
  <Grid  size={{ xs: 6, md: 6 }}>
    <TextField fullWidth label='Description' varient='Outlined'></TextField>
  </Grid>
  <Grid  size={{ xs: 6, md: 6 }}>
    <TextField fullWidth label='Image url' varient='Outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }} >
    <br />
  <Button color='secondary' variant='contained' >Add</Button>
  </Grid> <br />
  </Grid>
    </div>
  )
}

export default Addblog