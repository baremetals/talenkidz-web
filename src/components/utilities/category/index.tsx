import Link from 'next/link';
import { CategoryEntity } from 'generated/graphql';
import Button from 'components/users/Auth/Button';
import { FieldAction, FieldBlock, FieldGroup, Title } from './cat.styles';
// import { useFetchCategories } from 'src/hooks/useCategory';
import { useEffect, useState } from 'react';
import { TCategory } from 'src/types';

export interface ICategory {
  categories: CategoryEntity[];
}

// type TGetCats = {
//   data: TCategory[];
//   total: number
// };

const Categories: React.FC = () => {
  // const categories = useFetchCategories <TGetCats>();
  const [cats, setCats] = useState<TCategory[]>([]);
  // console.log(categories);

  // useEffect(() => {
  //   const getCats = () => {    
  //     setCats(categories.data);
  //     console.log(cats);
  //   };
  //   return () => {
  //     getCats()
  //   }
  // }, [cats])

  const categories = () => {
    fetch('/api/category')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setCats(data.data);
      });
  };

  useEffect(() => {
    const unsubscribe = categories();
    return () => {
      unsubscribe;
    };
  }, []);
  

  return (
    <FieldBlock>
      <Title>Choose the most inspiring fields for you</Title>
      <FieldGroup>
        <ul>
          <li className="active">Upbringing</li>
          {cats.map((item, i) => (
            <li key={i}>
              <Link href={`/articles/${item?.attributes?.slug}`}>
                {item?.attributes?.slug}
              </Link>
            </li>
          ))}
          <li className="active">Upbringing</li>
        </ul>
      </FieldGroup>
      <FieldAction>
        <Button
          content="Find selected ones "
          type="submit"
          disabled={false}
          loading={false}
        ></Button>
        <Link href={'#'}>See more categories</Link>
      </FieldAction>
    </FieldBlock>
  );
};

export default Categories;
