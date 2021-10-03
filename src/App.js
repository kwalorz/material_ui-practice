import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6888, #FF8E53)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '0 30px',
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: { main: green[500] },
  },
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
};

function CheckboxExample() {
  const [checked, setChecked] = useState();
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color='secondary'
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
          />
        }
        label='Testing checkbox'
      />
    </div>
  );
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xs'>
        <div className='App'>
          <header className='App-header'>
            <AppBar color='primary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>MUI Theming</Typography>
                <Button />
              </Toolbar>
            </AppBar>

            <Typography variant='h5'>I don't know what i am doing</Typography>
            <ButtonStyled />
            <TextField
              variant='outlined'
              color='secondary'
              type='date'
              label='date'
            />
            <TextField
              variant='outlined'
              color='secondary'
              type='email'
              placeholder='test@test.com'
            />
            <Grid container spacing={2} justify='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>
            <CheckboxExample />
            <ButtonGroup variant='contained'>
              <Button
                startIcon={<SaveIcon />}
                onClick={() => alert('Hello')}
                color='primary'
              >
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                onClick={() => alert('Hello')}
                color='primary'
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className='App-logo' alt='logo' />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
