import {React, useState} from 'react'
import { Box, Button, TextField } from '@mui/material'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function logMeIn(){

  }


  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
        <TextField 
          required 
          id="Username" 
          label="Username" 
          variant="outlined" 
          onChange={(v) => setUsername(v.target.value)}
          inputProps={{
            autoComplete: 'off',
            form: {
              autoComplete: 'off',
            },
          }}
        />
        <TextField
          required
          id="Password"
          label="Password"
          type="password"
          onChange={(v) => setPassword(v.target.value)}
          inputProps={{
            autoComplete: 'new-password',
            form: {
              autoComplete: 'off',
            },
          }}
        />
       <Button onClick={logMeIn} variant="contained">Log in</Button>



    </div>
    </Box>
  )
}

export default Login