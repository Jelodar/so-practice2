import React, { useEffect, useState } from 'react';
import RepoCard from './RepoCard';
import { createFilter } from '../utils/repoFunctions';
import './RepoList.css';

interface Props {
  repos: any[];
  selectedLanguage: string;
  onSelect: (repo: any) => void;
}

function RepoList(props: Props): JSX.Element {
  const [filteredRepos, setFilteredRepos] = useState(props.repos);

  useEffect(() => {
    setFilteredRepos(
      props.repos.filter(createFilter('language')(props.selectedLanguage))
    );
  }, [props.repos, props.selectedLanguage]);

  const handleClick = (repo: any) => {
    props.onSelect(repo);
  };

  return (
    <div className="repo-list">
      {filteredRepos.map((repo: any) => (
        <RepoCard key={repo.id} repo={repo} onClick={handleClick} />
      ))}
    </div>
  );
}

export default RepoList;
