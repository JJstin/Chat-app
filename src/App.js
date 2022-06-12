import './App.css';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Container, Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Chat App
      </header>

      <Grid container style = {{bottom:20, position: "fixed"}} spacing = {4}>
        <Grid item xs={9} style = {{marginLeft:40}} pl={0} pt={0}>
          <TextField id="chat box" width="90%" display="flex" fullWidth="true" size = "small"/>
        </Grid>
        <Grid item xs = {2} display="flex">
          <Button variant="contained">Send</Button>
        </Grid>
        
      </Grid>
      
    </div>
  );
}

export default App;
