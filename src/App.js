import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    <div className='App'>
      <header className='App-header'>
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
            color='secondary'
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
