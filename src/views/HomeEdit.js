import React from 'react';
import PropTypes from 'prop-types';

export default function HomeEdit(admin) {
  console.warn(admin);
  return (
    <div>
      You are at Home Edit
    </div>
  );
}

HomeEdit.propTypes = {
  admin: PropTypes.any
};
