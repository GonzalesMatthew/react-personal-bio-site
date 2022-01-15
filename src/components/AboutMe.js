import React from 'react';
import { Row, Col } from 'reactstrap';
import { Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function AboutMe({ aboutMe }) {
  return (
    <>
      <Container id='about-me' className='about-me' maxWidth='md'>
        <h1 className="heading1">About Me</h1>
        <Paper className='paper' elevation={3}>
          <Container>
            <Row >
              <Col className='d-flex'>
                <img src='https://firebasestorage.googleapis.com/v0/b/react-personal-bio-site.appspot.com/o/snapshot2.png?alt=media&token=a9aa1fc6-3a20-4cdf-a30a-1e4cfb2e737a' alt='picture of Matthew G. Gonzales' className='m-auto hero-pic img-thumbnail rounded-circle'></img>
              </Col>
              <Col>
                  <p>
                    {aboutMe[0].paragraph1}
                  </p>
                  <p>
                    {aboutMe[0].paragraph2}
                  </p>
                  <p>
                    {aboutMe[0].paragraph3}
                  </p>
              </Col>
            </Row>
          </Container>
        </Paper>
      </Container>
    </>
  );
}

AboutMe.propTypes = {
  aboutMe: PropTypes.array.isRequired
};
