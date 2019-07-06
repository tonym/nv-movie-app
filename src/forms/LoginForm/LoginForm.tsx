/**
 * @file LoginForm
 * @description Login form for auth
 * @author tm
 */

import React, { useState } from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/**
 * Styles for HTML elements, and any child component overrides
 */
const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
  },
  textField: {

  }
});

/**
 * Type interface, use an interface instead of PropTypes
 * WithStyles allows us to stay DRY by using the styles object to keep it type safe
 */
interface Props extends WithStyles<typeof styles> {
  callback: (values: Values) => void;
};

export interface Values {
  [index: string]: string;
  user: string | '';
  password: string | '';
}

interface Errors {
  user: boolean;
  password: boolean;
}

const LoginForm: React.FC<Props> = props => {

  const [values, setValues] = useState<Values>({user: '', password: ''});
  const [errors, setErrors] = useState<Errors>({user: false, password: false});

  const { callback, classes } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = () => {
    const _errors = {user: values.user.length === 0, password: values.password.length === 0};
    if(Object.values(_errors).indexOf(true) === -1) {
      callback(values);
    }
    else {
      setErrors(_errors);
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if(event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div className={classes.root}>
      <TextField
        autoFocus
        className={classes.textField}
        error={errors.user}
        fullWidth
        helperText={errors.user ? 'Username is required' : null}
        id="user"
        label="Username"
        margin="normal"
        name="user"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        required
        value={values.user}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        error={errors.password}
        fullWidth
        helperText={errors.password ? 'Password is required' : null}
        id="password"
        label="Password"
        margin="normal"
        name="password"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        required
        type="password"
        value={values.password}
        variant="outlined"
      />
      <Button
        className={classes.button}
        color="primary"
        onClick={handleSubmit}
        variant="contained"
      >
        Login
      </Button>
    </div>
  )

}

export default withStyles(styles)(LoginForm);
