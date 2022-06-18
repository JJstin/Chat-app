import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
const SendDiv = () => {
  return (
    <Grid container style = {{bottom:20, position: "fixed", paddingLeft: 40}} spacing = {2}>
    <Grid item xs={11.2}  pl={0} pt={0}>
      <TextField id="chat box" width="90%" display="flex" fullWidth={true} size = "small" maxRows={6} multiline={true}/>

    </Grid>
    <Grid item xs = {0.8} display="flex">
      <Button variant="contained">Send</Button>
    </Grid>
    
  </Grid>
  )
}

export default SendDiv