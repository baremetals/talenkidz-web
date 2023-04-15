import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useAppDispatch } from 'src/app/hooks';
import { useFetch } from 'src/hooks/useFetch';

// import { ICategory } from 'src/interfaces';
import { TCategory, TGetCats } from 'src/types';

import PageTitle from 'components/widgets/PageTitle';
import {
  Categorie,
  PageTitleBlock,
  CategorieList,
  CategorieRow,
  Categoriecolumn,
  LinkBlock,
} from '../cat.styles';


const ListCategory: React.FC = () => {
  // const router = useRouter();
  // const dispatch = useAppDispatch();
  const data = useFetch<TGetCats | null>('/api/category', null);
  // const articleEntities = useAppSelector(articlesSelector);
  const [cats, setCats] = useState<TCategory[] | undefined>(data?.data);
  // const [categoryArray, setCategoryArray] = useState<string[]>([]);
  // const [displayError, setDisplayError] = useState(true);
  // const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // console.log('i am running')
    const unsubscribe = setCats(data?.data);
    return () => {
      unsubscribe;
    };
  }, [data?.data]);
  return (
    <Categorie>
      <PageTitleBlock>
        <PageTitle
          text={[
            <span key={'TRENDING'}>TRENDING</span>,
            'CATEGORIES ON TALENTKIDS',
          ]}
        />
      </PageTitleBlock>
      <CategorieList>
        <CategorieRow>
          {cats?.map((item) => (
            <Categoriecolumn key={item?.id}>
              <Link href={`/events/${item?.attributes?.slug}`}>
                {item?.attributes?.description}
              </Link>
            </Categoriecolumn>
          ))}
        </CategorieRow>
      </CategorieList>
      <LinkBlock>
        {/* <Link href={'#'}>See more categories</Link> */}
      </LinkBlock>
    </Categorie>
  );
};

export default ListCategory;
