
import { useEffect, useState } from 'react';

export const useFetchCategories = <T>(): T => {
  const [data, setData] = useState<T>();
  // console.log('why am i running')
  const categories = async () => {
    await fetch('/api/category')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    const unsubscribe = categories();
    return () => {
      unsubscribe;
    };
  }, []);
  return data as T;
};