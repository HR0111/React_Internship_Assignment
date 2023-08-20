import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import { Post } from '../models/Post';

const PostDataFetch: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Post Data Fetch
        </Typography>
        <div style={{ height: 375, width: '100%' }}>
          <DataGrid rows={posts} columns={columns} />
        </div>
      </Paper>
    </Container>
  );
};

export default PostDataFetch;
