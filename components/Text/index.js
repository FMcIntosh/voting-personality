import React from 'react';
import styled from 'styled-components';
import { darkGrey } from 'styles/colors';
import { withTheme } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

// const getTheme = ({ theme }) => theme;
// const theme = withTheme(getTheme)();


export const Title = withTheme()(({ theme, children, light }) => {
  const style = {
    color: light ? "white" : theme.palette.text.primary,
    fontSize: "48px",
    lineHeight: "48px",
    fontWeight: "400"
  }

  return (
    <Typography type="title" align="center" gutterBottom style={style} color="default">{children}</Typography>
  )
})

export const Header = withTheme()(({ theme, children, light, gutter, style }) => {
  const styles = {
    color: light ? "white" : theme.palette.text.primary,
    fontSize: "40px",
    lineHeight: "48px",
    fontWeight: "300",
    ...style
  }

  return (
    <Typography type="title" align="center" gutterBottom={gutter} style={styles} color="default">{children}</Typography>
  )
})

export const Paragraph = withTheme()(({ theme, children, light, style}) => {
  const styles = {
    color: light ? theme.palette.primary[50] : theme.palette.text.primary,
    fontSize: "20px",
    fontWeight: "300",
    margin: "20px",
    ...style
  }

  return (
    <Typography type="body1" align="center" gutterBottom style={styles} >{children}</Typography>
  )
})


