import React from 'react';
import CommitInfo from './CommitInfo';
import withDataFetch from '../HOC/withDataFetch';
import { REPO_USER_COMMITS_URL } from '../config';

export default function RemoteCommitInfo({ repo }: { repo: any }): JSX.Element {
  return withDataFetch({
    url: REPO_USER_COMMITS_URL.replace(':owner', repo.owner.login).replace(
      ':repo',
      repo.name
    ),
    dataComponent: CommitInfo,
    loadingComponent: LoadingCommitInfo,
    fallbackComponent: CommitInfoNotFound,
  })();
}

function LoadingCommitInfo() {
  return (
    <div className="generic-loading generic-loading_placeholder">
      <span className="spinner" />
      Checking if there is any commits...
    </div>
  );
}
function CommitInfoNotFound() {
  return (
    <div className="commit-info commit-info_error">
      No commits was found for this repository.
    </div>
  );
}
