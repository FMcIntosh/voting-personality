import React from 'react';
import { Header } from 'components/Text';


export default ({ name, color, textColor }) => {

  const styles = {
    div: {
      background: color,
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    header: {
      fontWeight: 400,
      color: textColor
    },
  }

  return (
    <div style={styles.div}>
      <Header light style={styles.header}>
        {name}
      </Header>
    </div>
  )
}