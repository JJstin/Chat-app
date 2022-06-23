import { Box, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {

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
        <TextField required id="Email" label="Email" variant="outlined" />
        <TextField required id="Username" label="Username" variant="outlined" />
        <TextField
            required
          id="Password"
          label="Password"
          type="password"
        />
        {/* <TextField
          required
          id="Confirm Password"
          label="Confirm Password"
          type="password"
        /> */}



    </div>
    </Box>
  )
}

export default Signup