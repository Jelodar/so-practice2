import React from 'react';
import { HOME } from '../routes';
import { Link } from 'react-router-dom';

function DetailsPage() {
  return (
    <>
      <h1>Repo Details</h1>
      <div className="repo-details-wrapper">Repo Here</div>
      <Link to={HOME}>Back to Home</Link>
    </>
  );
}

export default DetailsPage;
