import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
const send_div = () => {
  return (
    <Grid container style = {{bottom:20, position: "fixed"}} spacing = {4}>
    <Grid item xs={9} style = {{marginLeft:40}} pl={0} pt={0}>
      <TextField id="chat box" width="90%" display="flex" fullWidth="true" size = "small" maxRows={6} multiline="true"/>
    </Grid>
    <Grid item xs = {2} display="flex">
      <Button variant="contained">Send</Button>
    </Grid>
    
  </Grid>
  )
}

export default send_div