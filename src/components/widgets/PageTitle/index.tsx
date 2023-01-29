import Spinner from 'components/utilities/Spinner';

import { PageTitle } from './styles';

const PageTitles = ({ text, ...props }: any) => {
  return (
    <PageTitle {...props} >
      {text}
    </PageTitle>
  );
};

export default PageTitles;
