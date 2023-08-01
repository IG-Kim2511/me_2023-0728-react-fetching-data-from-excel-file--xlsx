import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const JoinUp = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Add your logic to handle form submission here
    console.log('ID:', id);
    console.log('Password:', password);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <TextField
          label="ID"
          variant="outlined"
          value={id}
          onChange={handleIdChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
      {/* Add other features or UI elements here */}
    </Grid>
  );
};

export default JoinUp;
