import React from 'react';
import { useNavigate } from 'react-router-dom';
import withDataFetch from '../HOC/withDataFetch';
import RepoListManager from '../components/RepoListManager';
import { REPO_DETAILS } from '../routes';
import { API_ENDPOINT } from '../config';

function RemoteRepoListManager(props: any) {
  return withDataFetch({
    dataComponent: RepoListManager,
    url: API_ENDPOINT,
    targetPropName: 'repos',
  })(props);
}

function HomePage(props: object): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <h1>Repo List:</h1>
      <div className="repos-container">
        <RemoteRepoListManager
          onSelect={(repo: any) =>
            navigate(REPO_DETAILS.replace(':id', repo.id))
          }
        />
      </div>
    </>
  );
}

export default HomePage;
