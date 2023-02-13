import { useState, useCallback, useEffect } from 'react';
import { GQDocument } from 'src/types';

type IfetchEntity = {
  limit: number;
  start: number;
  gQDocument: GQDocument;
};
export const useFetchEntities = <T>(data: IfetchEntity, initialState: T) => {
  const [entity, setEntity] = useState<T>(initialState);

  const fetchData = useCallback(async () => {
    // console.log('Fetching really');
    const body = JSON.stringify({
      start: data.start,
      limit: data.limit,
      gQDocument: data.gQDocument,
    });

    await fetch('/api/entity', {
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
  }, [data.gQDocument, data.limit, data.start]);

  useEffect(() => {
    const unsubscribe = fetchData();
    return () => {
      unsubscribe;
    };
  }, [fetchData]);

  // console.log(entity)
  return entity;
};
