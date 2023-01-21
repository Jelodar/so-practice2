import React from 'react';
import RemoteReadme from './RemoteReadme';
import RemoteCommitInfo from './RemoteCommitInfo';
import './RepoDetails.css';

function RepoDetails(props: any): JSX.Element {
  const repo: any = Object.values(props.data).find(
    (r: any) => r.id === props.id
  );

  return (
    <div className="repo-details">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>
        Language: <b>{repo.language}</b>
      </p>
      <p>
        Forks: <b>{repo.forks_count}</b>
      </p>

      <RemoteCommitInfo repo={repo} />

      {repo.homepage && <a href={repo.homepage}>Link to Repo</a>}
      <br />
      <RemoteReadme repo={repo} />
    </div>
  );
}

export default RepoDetails;
