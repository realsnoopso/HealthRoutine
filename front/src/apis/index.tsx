import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { getRoutines } from '@src/apis/routines';
import { getAllRecordsFromAPI, getRecordFromAPI } from './records';

const AXIOS = axios.create({
  baseURL: 'http://localhost:3000',
});

export function fetchData(url: string, config: AxiosRequestConfig) {
  try {
    return AXIOS.request({ url, ...config });
  } catch (err: any) {
    console.log(err.message);
  }
}

type FetchFunc = (props?: any) => Promise<any>;

export function useFetch(func: FetchFunc, props?: any): any {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    async function fetch() {
      const result = await func(props);
      setResponse(result);
    }
    fetch();
  }, [func, props]);
  return response;
}

export { getRoutines, getAllRecordsFromAPI, getRecordFromAPI };
