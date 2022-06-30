import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSignup = () => {
    fetch('/signup',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "email": email
      })
    }).then(res => {
      console.log(res);
    })
  };
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
          id="Email" 
          label="Email" 
          variant="outlined" 
          onChange={(v) => setEmail(v.target.value)}
          inputProps={{
            autoComplete: 'off',
            form: {
              autoComplete: 'off',
            },
          }}
          
        />
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
       <Button onClick={onSignup} variant="contained">sign up</Button>



    </div>
    </Box>
  )
}

export default Signup