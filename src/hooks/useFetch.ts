import { useEffect, useReducer } from 'react';
import { ajax } from '../utils/ajax';

export interface IFetchResult {
  data: any;
  error?: string;
  isLoading: boolean;
}

const initialState: any = {
  data: null,
  error: null,
  isLoading: true,
};

const dataFetchReducer = (
  state: object,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error('Invalid action type: ' + action.type);
  }
};

export function useFetch(url: string, isJson = true): IFetchResult {
  const [state, dispatch] = import { useEffect, useReducer } from 'react';
  import { ajax } from '../utils/ajax';

  export interface IFetchResult {
    data: any;
    error?: string;
    isLoading: boolean;
  }

  const initialState: any = {
    data: null,
    error: null,
    isLoading: true,
  };

  const dataFetchReducer = (
    state: object,
    action: { type: string; payload?: any }
  ) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return { ...state, isLoading: true, error: null };
      case 'FETCH_SUCCESS':
        return { ...state, isLoading: false, data: action.payload };
      case 'FETCH_FAILURE':
        return { ...state, isLoading: false, error: action.payload };
      default:
        throw new Error('Invalid action type: ' + action.type);
    }
  };

  export function useFetch(url: string, isJson = true): IFetchResult {
    const [state, dispatch] = useReducer(dataFetchReducer, initialState);

    useEffect(() => {
      let didCancel = false;
      dispatch({ type: 'FETCH_INIT' });

      (async () => {
        try {
          const res = await ajax(url, isJson);
          if (!didCancel) {
            dispatch({ type: 'FETCH_SUCCESS', payload: res });
          }
        } catch (e: any) {
          if (!didCancel) {
            dispatch({ type: 'FETCH_FAILURE', payload: e.message });
          }
        }
      })();

      return () => {
        didCancel = true;
      };
    }, [url, isJson]);

    return {
      data: state.data,
      error: state.error,
      isLoading: state.isLoading,
    };
  }
  (dataFetchReducer, initialState);

  useEffect(() => {
    let didCancel = false;
    dispatch({ type: 'FETCH_INIT' });

    (async () => {
      try {
        const res = await ajax(url, isJson);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: res });
        }
      } catch (e: any) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE', payload: e.message });
        }
      }
    })();

    return () => {
      didCancel = true;
    };
  }, [url, isJson]);

  return {
    data: state.data,
    error: state.error,
    isLoading: state.isLoading,
  };
}
