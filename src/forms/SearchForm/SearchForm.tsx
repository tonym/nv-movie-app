/**
 * @file SearchForm
 * @description Search form for use in Header and HomeView, and anywhere else you want to search
 * @author tm
 */

import React, { useState } from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import Search from '@material-ui/icons/Search';

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
  searchBar: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 2,
    height: '100%',
    justifyContent: 'flex-end',
    paddingLeft: theme.spacing(3),
    zIndex: 1000,
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.background.paper,
      minHeight: 64,
      paddingLeft: 0,
      paddingRight: theme.spacing(3),
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%'
    }
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  searchContainer: {
    flexGrow: 1,
    height: '100%',
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  searchIcon: {
    height: theme.spacing(4),
    width: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(5),
      width: theme.spacing(5),
    }
  },
  searchInput: {
    [theme.breakpoints.up('md')]: {
      borderColor: theme.palette.grey[500],
      borderRadius: theme.spacing(.5),
      borderStyle: 'solid',
      borderWidth: '1px',
      marginRight: theme.spacing(1),
      padding: theme.spacing(1),
    },
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
  searchBar: boolean;
};

export interface Values {
  query: string | '';
}

const SearchForm: React.FC<Props> = (props) => {

  const [values, setValues] = useState<Values>({ query: '' });
  const [showSearch, setShowSearch] = useState(false);

  const { callback, classes, searchBar } = props;

  const placeholder = "Movie title, actor, genre, etc.";
  const mobilePlaceholder = "Search";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, query: event.target.value});
  }

  const handleShowSearch = (): void  => {
    setShowSearch(!showSearch);
  }

  const handleSubmit = (): void => {
    callback(values);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if(event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <React.Fragment>
      {searchBar ?
        <React.Fragment>
        {showSearch ?
          <div className={classes.searchBar}>
            <Input
              value={values.query}
              type="search"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              autoFocus
              className={classes.searchContainer}
              classes={{input: classes.searchInput}}
              disableUnderline
              placeholder={mobilePlaceholder} />
            <Hidden smDown>
              <Button onClick={handleSubmit} color="default" size="small" variant="contained">
                <Search /> Search
              </Button>
            </Hidden>
            <IconButton className={classes.searchButton} onClick={handleShowSearch}>
              <Close className={classes.searchIcon} />
            </IconButton>
          </div> :
          <IconButton className={classes.searchButton} onClick={handleShowSearch}>
            <Search className={classes.searchIcon} />
          </IconButton>
        }
        </React.Fragment> :
        <div className={classes.root}>
          <TextField
            autoFocus
            className={classes.textField}
            fullWidth
            id="search"
            label="Search"
            margin="normal"
            name="search"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            value={values.query}
            variant="outlined"
          />
          <Button
            className={classes.button}
            color="primary"
            onClick={handleSubmit}
            variant="contained"
          >
            Search
          </Button>
        </div>
      }
    </React.Fragment>
  )

}

export default withStyles(styles)(SearchForm);
