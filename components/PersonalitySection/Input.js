import React from 'react';
import styled from 'styled-components';
// import TextField from 'material-ui/TextField'; 

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';


export default ({ placeholder, id}) => {
  const styles = {
   marginTop: "10px"
  }
  return (
    <TextField
      label={placeholder}
      placeholder="/100"
      key={id}
      margin="dense"
      styles={styles}
    />
  )
}

