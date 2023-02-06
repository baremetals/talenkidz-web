import { useCallback, useEffect, useState } from 'react';
// import Link from 'next/link';

import Button from 'components/users/Auth/Button';
import { FieldAction, FieldBlock, FieldGroup, Title } from './cat.styles';

import { GQDocument, TCategory } from 'src/types';

// import {
//   articleReducer,
//   INITIAL_STATE as Article_State,
// } from 'components/content/Articles/articleReducer';
import { useAppDispatch } from 'src/app/hooks';
// import { articlesSelector } from 'src/features/articles/selectors';
import { setArticles } from 'src/features/articles/reducers';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface ICategory {
  entityDocument: GQDocument;
  // categories: CategoryEntity[];
}

// type TGetCats = {
//   data: TCategory[];
//   total: number
// };

const Categories: React.FC<ICategory> = ({ entityDocument }) => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  // const articleEntities = useAppSelector(articlesSelector);
  const [cats, setCats] = useState<TCategory[]>([]);
  // const [state] = useReducer(articleReducer, Article_State);
  const [categoryArray, setCategoryArray] = useState<string[]>([]);

  const categories = () => {
    fetch('/api/category')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCats(data.data);
      });
  };

  useEffect(() => {
    // console.log('i am running')
    const unsubscribe = categories();
    return () => {
      unsubscribe;
    };
  }, []);

  // const resetEntities = () => {
  //   dispatch(
  //     setArticles({
  //       articles: data?.data?.articles?.data,
  //       total: 12,
  //       articlesLength: data?.data?.articles?.meta?.pagination?.total,
  //     })
  //   );
  // }
  // console.log(state);
  // console.log('from the cats page', router.asPath);

  const handleFetchData = useCallback(async () => {
    if (categoryArray.length > 0) {
      const body = JSON.stringify({
        limit: 12,
        start: 0,
        gQDocument: entityDocument,
        categories: categoryArray,
      });

      await fetch('/api/entity/filtered', {
        method: 'POST',
        body: body,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data?.data);
          // console.log(
          //   'the array',
          //   data?.data?.articles?.meta?.pagination?.total
          // ); 
          dispatch(setArticles({
            articles: data?.data?.articles?.data,
              total: 12,
              articlesLength: data?.data?.articles?.meta?.pagination?.total,
          }));
        })
        .finally()
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('make a selection');
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

  // console.log('categoryArray', categoryArray);
  // console.log('catsArray', categoryArray);

  return (
    <FieldBlock>
      <Title>Choose the most inspiring fields for you</Title>
      <FieldGroup>
        <ul>
          <Link passHref href={router.asPath}>
            <li style={{ backgroundColor: '#000000', color: '#fff' }}>Reset</li>
          </Link>

          {cats.map((item, i) => (
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
      <FieldAction onClick={handleFetchData}>
        <Button
          content="Find selected ones "
          type="submit"
          disabled={false}
          loading={false}
        ></Button>
        {/* <Link href={'#'}>See more categories</Link> */}
      </FieldAction>
    </FieldBlock>
  );
};

export default Categories;
