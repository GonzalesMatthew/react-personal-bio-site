import React from 'react';
import { Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function AboutMe({ aboutMe }) {
  return (
    <>
    <Container id='about-me' className='about-me' maxWidth='md'>
      <h1 className="heading1">About Me</h1>
      <Paper className='paper' elevation={3}>
        <Container>
          <p>
            {aboutMe.paragraph1}
          </p>
          <p>
            {aboutMe.paragraph2}
          </p>
          <p>
            {aboutMe.paragraph3}
          </p>
        </Container>
      </Paper>
    </Container>
  </>
  );
}

AboutMe.propTypes = {
  aboutMe: PropTypes.array.isRequired
};
