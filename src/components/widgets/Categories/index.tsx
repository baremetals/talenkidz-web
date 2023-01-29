import Spinner from 'components/utilities/Spinner';
import Link from 'next/link';
import PageTitle from 'components/widgets/PageTitle';
import { Categorie , PageTitleBlock, CategorieList,CategorieRow,Categoriecolumn,LinkBlock } from './styles';

const Categories = ({ ...props }: any) => {
  return (
    <Categorie {...props} >
      <PageTitleBlock>
        <PageTitle text={[<span key={"TRENDING"}>TRENDING</span>, "CATEGORIES ON TALENTKIDS",]} />
      </PageTitleBlock>
      <CategorieList>
         <CategorieRow>
            <Categoriecolumn>Upbringing</Categoriecolumn>
            <Categoriecolumn>Parents’ relationships </Categoriecolumn>
            <Categoriecolumn>Child psychology</Categoriecolumn>
            <Categoriecolumn>Games</Categoriecolumn>
        </CategorieRow>
        <CategorieRow>
            <Categoriecolumn>Schooling</Categoriecolumn>
            <Categoriecolumn>Friends’ relationships </Categoriecolumn>
            <Categoriecolumn>Home pastime </Categoriecolumn>
            <Categoriecolumn>Books</Categoriecolumn>
          </CategorieRow>
      </CategorieList>
      <LinkBlock>
          <Link href={'#'}>See more categories</Link> 
      </LinkBlock>
    </Categorie>
  );
};

export default Categories;
