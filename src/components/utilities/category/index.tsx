import Link from 'next/link';
import { CategoryEntity } from 'generated/graphql';
import Button from 'components/users/Auth/Button';
import { FieldAction, FieldBlock, FieldGroup, Title } from './cat.styles';

export interface ICategory {
  categories: CategoryEntity[];
}

const Categories: React.FC<ICategory> = ({ categories }) => {

  return (
    <FieldBlock>
      <Title>Choose the most inspiring fields for you</Title>
      <FieldGroup>
        <ul>
          <li className="active">Upbringing</li>
          {categories?.map((cat, i) => (
            <li key={i}>
              <Link href={`/articles/${cat?.attributes?.slug}`}>
                {cat?.attributes?.slug}
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
