import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostDataFetch from './PostDataFetch';
import DepartmentSelection from './DepartmentSelection';
import { Container, Paper, Typography } from '@mui/material';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  const userDetails = localStorage.getItem('userDetails');

  useEffect(() => {
    if (!userDetails) {
      alert('Please provide your details first.');
      navigate('/');
    }
  }, [userDetails]);

  return (
    <Container component="main" maxWidth="lg">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '40px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to the Second Page!
        </Typography>
        <PostDataFetch />
        <DepartmentSelection/>
      </Paper>
    </Container>
  );
};

export default SecondPage;
