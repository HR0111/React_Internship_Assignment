import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && phone && email) {
      // Save user details to local storage
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));

      // Redirect to the second page
      navigate('/second');
    } else {
      alert('Please provide all the necessary information.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        User Information Form
      </Typography>
      <div>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
        Submit
      </Button>
    </Container>
  );
};

export default FirstPage;
