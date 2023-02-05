import { useState, useCallback } from 'react';
import { useEffect } from 'react';
import {
  ArticleEntityResponseCollection,
  EventEntityResponseCollection,
  ListingEntityResponseCollection,
} from 'generated/graphql';
import { GQDocument } from 'src/types';

interface IfetchEntity {
  limit: number;
  start: number;
  gQDocument: GQDocument;
}

type AllEntitities =
  | ArticleEntityResponseCollection
  | EventEntityResponseCollection
  | ListingEntityResponseCollection;
  
type ReturnedEntity = {
  data: {
    articles: ArticleEntityResponseCollection;
    data: AllEntitities;
  };
};

export const useFetchEntities = ({
  limit,
  start,
  gQDocument,
}: IfetchEntity): ReturnedEntity => {
  const [entity, setEntity] = useState<ReturnedEntity>();

  const fetchData = useCallback(async () => {
    // console.log('Fetching really');
    const body = JSON.stringify({
      start,
      limit,
      gQDocument,
    });

    await fetch('/api/entity', {
      method: 'POST',
      body: body,
    })
      .then((res) => res.json())
      .then((data: ReturnedEntity) => {
        // console.log(data);
        setEntity(data);
      })
      .finally()
      .catch((error) => {
        console.log(error);
      });
      
  }, [gQDocument, limit, start]);

  useEffect(() => {
    const unsubscribe = fetchData();
    return () => {
      unsubscribe;
    };
  }, [fetchData, gQDocument, limit, start]);

  // console.log(entity)
  return entity as ReturnedEntity;
};
