import React from 'react';
import './CommitInfo.css';

const sortFunction = (a: any, b: any) =>
  new Date(b.commit.committer.date).getTime() -
  new Date(a.commit.committer.date).getTime();

export default function CommitInfo(props: any) {
  if (!Array.isArray(props.data)) {
    return (
      <div className="commit-info">
        {props.data?.message || 'Could not get the most recent commit.'}
      </div>
    );
  }
  const sortedCommits = props.data.sort(sortFunction);
  const mostRecentCommit = sortedCommits[0];

  return (
    <div className="commit-info commit-info_loaded">
      <div>
        Last Commit Date: <b>{mostRecentCommit.commit.committer.date}</b>
      </div>
      <div>
        Last Commit Author: <b>{mostRecentCommit.commit.committer.name}</b>
      </div>
      <div>
        Last Commit Message:
        <pre>
          <code>{mostRecentCommit.commit.message}</code>
        </pre>
      </div>
    </div>
  );
}
