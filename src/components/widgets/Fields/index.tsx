
import Button from 'components/users/Auth/Button';
import Link from 'next/link';
import { FieldBlock,Title,FieldGroup,FieldAction  } from './styles';

const Field = ({ ...props }: any) => {
  return (
    <FieldBlock>
      <Title>Choose the most inspiring fields for you</Title>
      <FieldGroup>
        <ul>
          <li className='active'>Upbringing</li>
          <li>Parents’ relations</li>
          <li>Movies </li>
          <li>Educational activities</li>
          <li>Education</li>
          <li>Self-development </li>
          <li className='active'>Upbringing</li>
          <li>Home pastime </li>
          <li>Upbringing</li>
          <li>Books</li>
          <li>Games</li>
          <li>Going out </li>
        </ul>
      </FieldGroup>
      <FieldAction>
          <Button
            content="Find selected ones "
            type="submit"
            disabled={false}
            loading={false}
          >
        </Button>
        <Link href={'#'}>See more categories</Link>
      </FieldAction>
    </FieldBlock>
  );
};

export default Field;
