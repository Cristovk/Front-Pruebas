import React, {useContext} from 'react';
import {Button, Grid} from '@mui/material';
import { axiosResposeDownload } from './Hook/Functions';
import { DataContext } from './Hook/Hook';



function App() {
  const {id, fechaInit, fechaEnd} = useContext(DataContext);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Button variant="contained" color="primary"
         onClick={() => axiosResposeDownload(
          'http://127.0.0.1:5001/smart-try-33e78/us-central1/getApi/descargable', 
          id,
          fechaInit,
          fechaEnd
          )}>
          Descargar
        </Button>
      </Grid>
    </Grid>
    

  );
}

export default App;
