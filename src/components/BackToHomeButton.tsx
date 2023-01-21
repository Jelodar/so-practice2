import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../routes';
import './BackToHomeButton.css';
function BackToHomeButton() {
  return (
    <Link className="back-to-home-btn" to={HOME}>
      {' '}
      « Back to the list
    </Link>
  );
}

export default BackToHomeButton;
