import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';

const MyAppBar = ({ theme, children }) => {
  const lightPrimaryText = theme.palette.primary[100];
  const primaryColor = theme.palette.primary[500];

  const styles = {
    primaryText: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: lightPrimaryText,
    }
  }

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography type="title" style={styles.primaryText}>
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withTheme()(MyAppBar);