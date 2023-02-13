import { useCallback, useEffect, useState } from 'react';
import { Entities } from 'src/types';
import useDebounce from './useDebounce';

export type SearchEntity = {
  searchValue: string;
  entities: Entities[];
}
export const useSearch = ({ searchValue, entities }: SearchEntity) => {
  const [data, setData] = useState<Entities[]>(entities);
  const debouncedValue = useDebounce(searchValue, 1000);
  const handleSearch = useCallback(async () => {
    if (debouncedValue !== '') {
      const filteredData = entities?.slice()?.filter((ent) => {
        const entity = ent?.attributes as Entities;
        return Object.values(entity)
          .join(' ')
          .toLowerCase()
          .includes(debouncedValue.toLowerCase());
      });
      setData(filteredData as Entities[]);
    }
  }, [debouncedValue, entities]);

  useEffect(() => {
    const unsubscribe = handleSearch();
    return () => {
      unsubscribe;
    };
  }, [handleSearch]);

  useEffect(() => {
    setData(entities);
  }, [entities])

  return data;
};