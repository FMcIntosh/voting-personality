import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    qualification: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const classes = this.props.classes;

    return (
      <form className={classes.container} autoComplete="off">
        <Grid container direction="column">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange('age')}
              input={<Input id="gender" />}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="qualification">Qualification</InputLabel>
            <Select
              value={this.state.qualification}
              onChange={this.handleChange('qualification')}
              input={<Input id="qualification" />}
            >
              <MenuItem value="highschool">High School</MenuItem>
              <MenuItem value="university">University</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <FormHelperText>Highest education level</FormHelperText>
          </FormControl>
        </Grid>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);