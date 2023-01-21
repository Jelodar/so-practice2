import React from 'react';
import './RepoCard.css';

interface Props {
  repo: any;
  onClick: (repo: any) => void;
}

function RepoCard(props: Props): JSX.Element {
  return (
    <div className="repo-card" onClick={() => props.onClick(props.repo)}>
      <div className="repo-card-header">
        <h3 className="repo-card-title">{props.repo.name}</h3>
        <span className="repo-card-language">{props.repo.language}</span>
      </div>
      <div className="repo-card-body">
        <p className="repo-card-description">{props.repo.description}</p>
        <div className="repo-card-meta">
          <span className="repo-card-forks-count">
            Forks: <b>{props.repo.forks_count}</b>
          </span>
          <span className="repo-card-created-at">
            Created at: <b>{props.repo.created_at}</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
