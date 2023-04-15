import { useCallback, useEffect, useState } from 'react';
// import Link from 'next/link';

import Button from 'components/users/Auth/Button';
import { FieldAction, FieldBlock, FieldGroup, Title } from './cat.styles';
import { TCategory, TGetArticles, TGetCats } from 'src/types';


import { useAppDispatch } from 'src/app/hooks';
// import { articlesSelector } from 'src/features/articles/selectors';
import {
  setArticles,
} from 'src/features/articles/reducers';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useFetch } from 'src/hooks/useFetch';
import { fetchApi } from 'src/helpers';
import { ICategory } from 'src/interfaces';








const Categories: React.FC<ICategory> = ({ entityDocument }) => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const data = useFetch<TGetCats | null>('/api/category', null);
  // const articleEntities = useAppSelector(articlesSelector);
  const [cats, setCats] = useState<TCategory[] | undefined>(data?.data);
  const [categoryArray, setCategoryArray] = useState<string[]>([]);
  const [displayError, setDisplayError] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // console.log('i am running')
    const unsubscribe = setCats(data?.data);
    return () => {
      unsubscribe;
    };
  }, [data?.data]);

  const handleFetchData = useCallback(async () => {
    if (categoryArray.length > 0) {
      const body = JSON.stringify({
        limit: 12,
        start: 0,
        sort: 'createdAt:desc',
        gQDocument: entityDocument,
        filterBy: {
          category: {
            id: {
              in: categoryArray
            }
          }
        },
      });

      try {
        const res: TGetArticles = await fetchApi('/api/entity/filtered', body);
        // console.log(res?.data);
        dispatch(
          setArticles({
            articles: res?.data?.articles?.data,
            total: 12,
            articlesLength: res?.data?.articles?.meta?.pagination?.total,
          })
        );

      } catch (err: any) {
        setErrorMessage('Error! Please try again later');
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false);
          setErrorMessage('');
        }, 10000);
        console.log(err);
      }
    } else {
      // console.log('make a selection');
      setErrorMessage('Please select a category');
      setDisplayError(true);
      setTimeout(() => {
        setDisplayError(false);
        setErrorMessage('');
      }, 8000);
    }
  }, [categoryArray, dispatch, entityDocument]);

  const handleClick = useCallback(
    async (catId: string) => {
      if (categoryArray.includes(catId)) {
        const newArray = categoryArray.filter((c) => c !== catId);
        setCategoryArray(newArray);
      } else {
        setCategoryArray((prev) => [...prev, catId]);
      }
    },
    [categoryArray]
  );

  return (
    <FieldBlock>
      <Title>Choose the most inspiring fields for you</Title>
      <FieldGroup>
        <ul>
          <Link passHref href={router.asPath}>
            <li style={{ backgroundColor: '#000000', color: '#fff' }}>Reset</li>
          </Link>

          {cats?.map((item, i) => (
            <li
              key={i}
              onClick={() => handleClick(item?.id.toString() as string)}
              className={
                categoryArray.includes(item?.id.toString()) ? 'active' : ''
              }
            >
              {item?.attributes?.slug}
            </li>
          ))}
          <li
            style={{ backgroundColor: '#000000', color: '#fff' }}
            onClick={() => setCategoryArray([])}
          >
            Clear Selection
          </li>
        </ul>
      </FieldGroup>
      <FieldAction>
        <Button
          content="Find selected ones "
          type="button"
          disabled={false}
          loading={false}
          onClick={() => handleFetchData()}
        />
        {/* <Link href={'#'}>See more categories</Link> */}
        {displayError && <h5 style={{ color: 'red' }}>{errorMessage}</h5>}
      </FieldAction>
    </FieldBlock>
  );
};

export default Categories;
