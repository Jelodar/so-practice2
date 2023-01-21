import { useEffect, useState } from 'react';
import { ajax } from '../utils/ajax';

export interface IFetchResult {
  data: any;
  error?: string | null;
  isLoading: boolean;
}

export function useFetch(url: string, isJson = true): IFetchResult {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let didCancel = false;
    setIsLoading(true);

    (async () => {
      try {
        const res = await ajax(url, isJson);
        if (!didCancel) {
          setData(res);
          setIsLoading(false);
        }
      } catch (e: any) {
        if (!didCancel) {
          setError(e.message);
          setIsLoading(false);
        }
      }
    })();

    return () => {
      didCancel = true;
    };
  }, [url, isJson]);

  return {
    data,
    error,
    isLoading,
  };
}
