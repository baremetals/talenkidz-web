import { useEffect, useState, useCallback } from 'react';

export const useFetchWithArgs = <T>(url: string, filterItem: string, initialState: T): T => {
  const [data, setData] = useState<T>(initialState);
  // console.log('why am i running')
  const entities = useCallback(async () => {
    const body = JSON.stringify({
      filterItem,
    });
    await fetch(url, {
      method: 'POST',
      body: body,
    })
      .then((res) => res.json())
      .then((data: T) => {
        setData(data);
      });
  }, [filterItem, url]);

  useEffect(() => {
    const unsubscribe = entities();
    return () => {
      unsubscribe;
    };
  }, [entities]);
  return data;
};
