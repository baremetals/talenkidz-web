
import { useEffect, useState, useCallback } from 'react';

export const useFetch = <T>(url: string, initialState: T): T => {
  const [data, setData] = useState<T>(initialState);
  // console.log('why am i running')
  const entities = useCallback(async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data: T) => {
        setData(data);
      });
  }, [url]);

  useEffect(() => {
    const unsubscribe = entities();
    return () => {
      unsubscribe;
    };
  }, [entities]);
  return data;
};