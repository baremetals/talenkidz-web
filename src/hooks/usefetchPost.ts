import { useState, useCallback, useEffect } from 'react';
import { GQDocument } from 'src/types';

type IfetchEntity = {
  limit: number;
  start: number;
  gQDocument: GQDocument;
};
export const useFetchPost = <T>(
  url: string,
  initialState: T,
  {
    limit,
    start,
    gQDocument,
  }: // props: IfetchEntity
  IfetchEntity
): T => {
  const [entity, setEntity] = useState<T>(initialState);

  const fetchData = useCallback(async () => {
    // console.log('Fetching really');
    const body = JSON.stringify({
      start,
      limit,
      gQDocument,
    });

    await fetch(url, {
      method: 'POST',
      body: body,
    })
      .then((res) => res.json())
      .then((data: T) => {
        // console.log(data);
        setEntity(data);
      })
      .finally()
      .catch((error) => {
        console.log(error);
      });
  }, [gQDocument, limit, start, url]);

  useEffect(() => {
    const unsubscribe = fetchData();
    return () => {
      unsubscribe;
    };
  }, [fetchData, gQDocument, limit, start]);

  // console.log(entity)
  return entity;
};
