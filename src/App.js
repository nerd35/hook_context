import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import EmployeeContainer from './components/EmploymentSection';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
addButton: {
  background: 'white',
  color: 'blue',
  fontSize: '11px',
  fontWeight: '700',
  padding: '5px 20px',
  boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.1)'
}
}));
const App = () => {
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <StyledButton><AddIcon/> ADD EMPLOYEE</StyledButton>
        </Toolbar>
      </AppBar>
    <EmployeeContainer />
    </div>
  )
}

export default App;
