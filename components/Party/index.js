import React from 'react';
import Typography from 'material-ui/Typography';


export default ({ name, color }) => {

  const styles = {
    primaryText: {
      color: "white"
    },
    div: {
      background: `${color}`, 
      width: "60%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }
  }

  return (
    <div style={styles.div}>
      <Typography type="title" style={styles.primaryText}>
        {name}
      </Typography>
    </div>
  )
}