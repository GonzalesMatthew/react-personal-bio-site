import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { deleteAboutMe } from '../../helpers/data/AboutMeData';

const AboutCard = ({
  firebaseKey,
  desc,
  admin,
  setAboutMe
}) => {
  // const [update, setUpdate] = useState(false);

  // const toggle = () => setTooltipOpen(!tooltipOpen);

  const handleClick = (type) => {
    switch (type) {
      case 'update':
        console.warn('hello');
        // setUpdate((prevState) => !prevState);
        break;
      case 'delete':
        // eslint-disable-next-line
        const result = window.confirm('Delete this blurb?');
        if (result) deleteAboutMe(firebaseKey).then(setAboutMe);
        break;
      default:
        break;
    }
  };

  return (
    <p id={firebaseKey}>
      {desc}
      {admin && <Button variant="contained" color="secondary" onClick={() => handleClick('delete')}>Delete Blurb</Button>}
      {/* {admin && <Button variant="contained" color="primary" onClick={() => handleClick('update')}>{update ? 'Close Form' : 'Update Tech'}</Button>} */}
      {/* {
        update && <TechForm
          formTitle='Update Tech'
          setTechnology={setTechnology}
          firebaseKey={firebaseKey}
          name={name}
          image={image}
          description={description}
          admin={admin}
        />
      } */}
    </p>
  );
};

AboutCard.propTypes = {
  admin: PropTypes.any,
  firebaseKey: PropTypes.string,
  desc: PropTypes.string,
  setAboutMe: PropTypes.func
};
export default AboutCard;
