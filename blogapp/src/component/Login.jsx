import { Button, TextField, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{textAlign:'center',margin:'8%'}}>
        <Typography variant='h5' style={{color:'purple'}}>BlogApp Login</Typography><br />
        <div>
        <TextField label='Email'></TextField>
        </div>
        <br />
        <div>
        <TextField label='password'></TextField>
        </div>
        <br /><br />
        <Button style={{backgroundColor:'purple'}} variant='contained'>Login</Button>
        <div><br />
            <Link to={'/signup'} style={{color:'purple'}}>New user? Please Register here</Link>
        </div>
    </div>
  )
}

export default Login