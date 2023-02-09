import Spinner from 'components/utilities/Spinner';
import Link from 'next/link';
import PageTitle from 'components/widgets/PageTitle';
import { Categorie , PageTitleBlock, CategorieList,CategorieRow,Categoriecolumn,LinkBlock,TimeSlot,Time,PageTitleRow } from './styles';

const Categories = ({ ...props }: any) => {
  return (
    <Categorie {...props} >
      <PageTitleRow>
        <PageTitleBlock>
          <PageTitle text={[<span key={"TRENDING"}>TRENDING</span>, "SPORT ACTIVITIES",]} />
        </PageTitleBlock>
        <TimeSlot>
            <Time className='active'>Today</Time>
            <Time>This week</Time>
            <Time>This month</Time>
        </TimeSlot>
      </PageTitleRow>
      <CategorieList>
         <CategorieRow>
            <Categoriecolumn className='active'>Football</Categoriecolumn>
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
