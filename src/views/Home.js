import React from 'react';
import { Container, Paper } from '@material-ui/core';

function Home() {
  return (
    <>
      <Container>
        <Paper className='about-me' elevation={3}>
        <h1>About Me</h1>
        <p>
          Hello, my name is Matthew Gonzales. After years in analytics I decided to become a developer to pursue creative ventures 24/7! I love coding and I find my fellow developers to be amazing people to work with that also love contributing meaningful code to society. My best skill as a developer is seeing the big picture and making an effective plan to get the job done quickly, accurately, and effectively.
        </p>
        <p>
          Some of my favorite hobbies all involve creativity, and include composing music, hiking, and traveling. I also enjoy watching mixed martial arts and F1 racing, cooking, studying financial markets, gardening, and decorating my home.
        </p>
        </Paper>
      </Container>
    </>
  );
}

export default Home;
