import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getCacheBustedUrl } from '../utils/ajax';

import './withDataFetch.css';

export interface IFallbackProps {
  onRetry: () => void;
  error: string;
}

interface IWrapperProps {
  url: string;
  isJson?: boolean;
  targetPropName?: string;
  dataComponent: React.FunctionComponent;
  fallbackComponent?: React.FunctionComponent<IFallbackProps>;
  loadingComponent?: React.FunctionComponent;
}

const withDataFetch = (wrapperProps: IWrapperProps) => (props?: any) => {
  const [targetUrl, setTargetUrl] = useState(wrapperProps.url);
  const { data, error, isLoading } = useFetch(
    targetUrl,
    wrapperProps.isJson !== false
  );

  function Fallback(p: IFallbackProps) {
    return (wrapperProps.fallbackComponent || DefaultFallbackComponent)(p);
  }
  function Loading(p?: any) {
    return (wrapperProps.loadingComponent || DefaultLoadingComponent)(p);
  }
  function DataComponent(p?: any) {
    return wrapperProps.dataComponent(p);
  }

  if (error || (data && data.error)) {
    return (
      <Fallback
        onRetry={() => setTargetUrl(getCacheBustedUrl(wrapperProps.url))}
        error={error || data?.error}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <DataComponent
      {...props}
      {...{ [wrapperProps.targetPropName || 'data']: data }}
    />
  );
};

function DefaultLoadingComponent(): JSX.Element {
  return (
    <div className="generic-loading generic-loading_placeholder">
      <p>
        <span className="spinner" />
        Loading...
      </p>
    </div>
  );
}

function DefaultFallbackComponent(props: IFallbackProps) {
  return (
    <div className="generic-loading generic-loading_error">
      <p>
        <b>Error: </b>
        {props.error}
      </p>
      <p>
        Sorry, we encountered a problem while trying to retrieve data from our
        servers. <br />
        No worries, we can always try again.
      </p>
      <button onClick={props.onRetry}>Retry</button>
    </div>
  );
}

export default withDataFetch;
