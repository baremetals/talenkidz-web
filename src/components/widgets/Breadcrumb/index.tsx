import { Breadcrumbs, Crumb } from './styles';

const Breadcrumb = ({ type, loading, disabled, ...props }: any) => {
  return (
    <Breadcrumbs {...props} type={type} disabled={disabled || loading}>
         <Crumb>
          <a href="#">Home</a>
          </Crumb>
          <Crumb>
          <a href="#">Articles</a>
        </Crumb>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
