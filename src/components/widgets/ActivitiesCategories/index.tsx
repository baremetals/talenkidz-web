import Spinner from 'components/utilities/Spinner';
import Link from 'next/link';
import PageTitle from 'components/widgets/PageTitle';
import { Categorie , PageTitleBlock, CategorieList,CategorieRow,Categoriecolumn,LinkBlock } from './styles';

const Categories = ({ ...props }: any) => {
  return (
    <Categorie {...props} >
      <PageTitleBlock>
        <PageTitle text={[<span key={"TRENDING"}>TRENDING</span>, "SPORT ACTIVITIES",]} />
      </PageTitleBlock>
      <CategorieList>
         <CategorieRow>
            <Categoriecolumn>Football</Categoriecolumn>
            <Categoriecolumn>Winter games  </Categoriecolumn>
            <Categoriecolumn>Board gaming </Categoriecolumn>
            <Categoriecolumn>Basketball</Categoriecolumn>
            <Categoriecolumn>Chess</Categoriecolumn>
            <Categoriecolumn>Swimming </Categoriecolumn>
            <Categoriecolumn>Cybersport </Categoriecolumn>
            <Categoriecolumn>Tennis</Categoriecolumn>
          </CategorieRow>
      </CategorieList>
      <LinkBlock>
          <Link href={'#'}>See more categories</Link> 
      </LinkBlock>
    </Categorie>
  );
};

export default Categories;
