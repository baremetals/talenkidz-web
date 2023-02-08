import Link from 'next/link';
import { Breadcrumbs, Crumb } from './styles';

type Props = {
  route: {
    name: string
    url: string
  }[]
}

const Breadcrumb = ({ route = [] }: Props) => {
  return (
    <Breadcrumbs >
      {route.map((item, i) => (
        <Crumb key={i}>
          <Link href={item.url}>{item.name}</Link>
        </Crumb>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
