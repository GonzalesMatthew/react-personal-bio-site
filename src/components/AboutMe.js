import React from 'react';
import { Container, Paper } from '@material-ui/core';

export default function AboutMe() {
  return (
    <>
    <Container id='about-me' className='about-me' maxWidth='md'>
      <h1 className="heading1">About Me</h1>
      <Paper className='paper' elevation={3}>
        <Container>
          <p>
            Hello, my name is Matthew Gonzales. I have been an analyst since I graduated from university, however I always felt I could be doing something more creative -- especially since the creative parts of analytics are my most favorite. So I decided to apply to NSS where my new journey as a software developer now begins.
          </p>
          <p>
            I am glad I embarked on this journey as  I find my fellow developers to be amazing people to work with that also love contributing meaningful code to society. I feel my best skill as a developer is seeing the big picture and making an effective plan to get the job done quickly, accurately, and effectively. Aside from that I love the logical aspect of the work followed by the simple enjoyment of making apps pop through styling.
          </p>
          <p>
            Some of my favorite hobbies include composing music, hiking, and traveling. I also enjoy watching mixed martial arts and F1 racing, cooking, studying financial markets, gardening, and decorating my home. Stay tuned because I will be opening a blog section to talk about some of these things.
          </p>
        </Container>
      </Paper>
    </Container>
  </>
  );
}
