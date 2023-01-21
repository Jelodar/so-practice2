import React, { useState, useMemo } from 'react';
import RepoList from './RepoList';
import { sortByDate, getLanguages } from '../utils/repoFunctions';
import './RepoListManager.css';

function RepoListManager(props: any) {
  const repos = props.repos;
  const [filter, setFilter] = useState('');

  const allLanguages = useMemo(() => getLanguages(repos), [repos]);
  const sortedRepos = useMemo(() => repos.sort(sortByDate), [repos]);

  return (
    <div className="repo-list-container">
      <div className="language-filter-container">
        <button
          className={`filter-btn ${!filter ? 'active' : ''}`}
          onClick={() => setFilter('')}
        >
          All
        </button>
        {allLanguages.map((lang: any) => (
          <button
            className={`filter-btn ${filter === lang ? 'active' : ''}`}
            onClick={() => setFilter(lang)}
            key={lang}
          >
            {lang}
          </button>
        ))}
      </div>
      <RepoList
        repos={sortedRepos}
        onSelect={props.onSelect}
        selectedLanguage={filter}
      />
    </div>
  );
}

export default RepoListManager;
