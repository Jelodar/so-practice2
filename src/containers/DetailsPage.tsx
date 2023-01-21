import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RepoDetails from '../components/RepoDetails';
import BackToHomeButton from '../components/BackToHomeButton';
import withDataFetch, { IFallbackProps } from '../HOC/withDataFetch';
import { API_ENDPOINT } from '../config';

function RemoteRepoDetails(props: any) {
  return withDataFetch({
    url: API_ENDPOINT,
    dataComponent: RepoDetails,
    fallbackComponent: AutoFetchInASecond,
  })(props);
}

function AutoFetchInASecond(props: IFallbackProps) {
  useEffect(() => {
    const interval = setInterval(props.onRetry, 1000);
    return () => clearInterval(interval);
  }, [props.onRetry]);

  return (
    <div className="generic-loading_error">
      The attempt to fetch the resource failed. No worries, we are going to try
      again in just a second...
    </div>
  );
}

function DetailsPage(): JSX.Element {
  const params = useParams();
  const repoId = Number.parseInt(params.id || '', 10);
  return (
    <>
      <h1>Repo Details</h1>
      <div className="repo-details-wrapper">
        <RemoteRepoDetails id={repoId} />
      </div>
      <BackToHomeButton />
    </>
  );
}

export default DetailsPage;
