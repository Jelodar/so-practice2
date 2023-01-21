import React from 'react';
import { REPO_DETAILS } from '../routes';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>Repos</h1>
      <div>Repos listed here</div>
      <Link to={REPO_DETAILS}>Details</Link>
    </>
  );
}

export default HomePage;
