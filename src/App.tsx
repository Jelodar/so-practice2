import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DetailsPage from './containers/DetailsPage';
import HomePage from './containers/HomePage';
import { HOME, REPO_DETAILS } from './routes';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={REPO_DETAILS} element={<DetailsPage />} />
        <Route path={HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export { App };
