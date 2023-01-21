import React from 'react';
import Markdown from 'react-markdown';
import withDataFetch from '../HOC/withDataFetch';
import { REPO_README_URL } from '../config';
import './RemoteReadme.css';

export default function RemoteReadme({ repo }: { repo: any }): JSX.Element {
  return withDataFetch({
    url: REPO_README_URL.replace(':full_name', repo.full_name),
    isJson: false,
    dataComponent: Readme,
    loadingComponent: LoadingReadme,
    fallbackComponent: ReadmeNotFound,
  })();
}

function Readme(props: any) {
  return (
    <div className="repo-readme repo-readme_loaded">
      <h1>README.md</h1>
      <div className="repo-readme_markdown">
        <Markdown>{props.data}</Markdown>
      </div>
    </div>
  );
}

function LoadingReadme() {
  return (
    <div className="repo-readme repo-readme_loading">
      Checking if README.md exists...
    </div>
  );
}
function ReadmeNotFound() {
  return (
    <div className="repo-readme repo-readme_error">
      No README.md for this repository.
    </div>
  );
}
