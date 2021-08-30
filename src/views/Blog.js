import React from 'react';
import { Container, Paper } from '@material-ui/core';
import Contact from '../components/Contact';

function Blog() {
  return (
    <>
      <Container className='card-container' maxWidth='md'>
        <h1 className='heading1'>Contact</h1>
        <p>Hello this is my blog page!</p>
        <Paper className='paper' elevation={3} variant='outlined'>
          <Contact/>
        </Paper>
      </Container>
    </>
  );
}

export default Blog;
