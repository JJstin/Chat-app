import {React, useState} from 'react'
import { Box, Button, TextField } from '@mui/material'

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logMeIn = () => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
      })
    }).then(res => {
      console.log(res);
      props.setToken(res.data.access_token);
    }).catch(err => {
      if (err.response) {
        console.log(err.response)
        console.log(err.response.status)
        console.log(err.response.headers)
        }
    })
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