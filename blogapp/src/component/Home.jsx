import { Button, Card, CardActions, CardContent, CardMedia,Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';

const Home = () => {
    const cardData=[{title:'Food Blog',description:'Good Food',image:'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGJsb2d8ZW58MHx8MHx8fDA%3D'},
        {title:'Movie Blog',description:'Good movie',image:'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBibG9nfGVufDB8fDB8fHww'},
        {title:'Travel Blog',description:'Travel!!!',image:'https://plus.unsplash.com/premium_photo-1661921945633-071666880d9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D'}
    ]
  return (
    <div style={{margin:'5%'}}>
    <Grid container spacing={2}>
    {cardData.map((row) => (
  <Grid size={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {row.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {row.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='warning'  variant='contained'>Update</Button>
        <Button size="small" color='error' variant='contained'>Delete</Button>
      </CardActions>
    </Card>
  </Grid>
  ))}
  </Grid>
    
    </div>
  )
}

export default Home