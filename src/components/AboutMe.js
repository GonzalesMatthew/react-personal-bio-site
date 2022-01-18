import React from 'react';
import { Row, Col } from 'reactstrap';
import { Button, Container, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import AboutCard from './AboutCard';
// import { getAboutMe } from '../helpers/data/AboutMeData';

export default function AboutMe({
  admin, aboutMe, setAboutMe
}) {
  // const [aboutMe, setAboutMe] = useState([]);
  // useEffect(() => {
  //   getAboutMe().then(setAboutMe);
  // }, []);

  // const [toggleAboutForm, setToggleAboutForm] = useState(false);
  // const toggleAdd = () => setToggleAboutForm(!toggleAboutForm);

  return (
    <>
      <Container id='about-me' className='about-me' maxWidth='md'>
        <h1 className="heading1">About Me</h1>
        <Paper className='about-me-color paper' elevation={3}>
          <Container>
            <Row >
              <Col className='d-flex'>
                <img src='https://firebasestorage.googleapis.com/v0/b/react-personal-bio-site.appspot.com/o/snapshot2.png?alt=media&token=a9aa1fc6-3a20-4cdf-a30a-1e4cfb2e737a' alt='picture of Matthew G. Gonzales' className='m-auto hero-pic img-thumbnail rounded-circle'></img>
              </Col>
              <Col>
                  {aboutMe.map((blurb) => (
                    <AboutCard
                      key={blurb.firebaseKey}
                      firebaseKey={blurb.firebaseKey}
                      desc={blurb.desc}
                      admin={admin}
                      setAboutMe={setAboutMe}
                    />
                  ))}
                  {admin && <Button>Add</Button>}
              </Col>
            </Row>
          </Container>
        </Paper>
      </Container>
    </>
  );
}

AboutMe.propTypes = {
  admin: PropTypes.any,
  aboutMe: PropTypes.array,
  setAboutMe: PropTypes.func
};
