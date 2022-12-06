import { CategoryEntity } from 'generated/graphql';
import Image from 'next/image';
import Link from 'next/link';
import {
  WidgetPanel,
  WidgetPanelLink,
  WidgetPanelListing,
  WidgetPanelTitle,
} from 'styles/common.styles';

export interface ICategory {
  categories: CategoryEntity[];
}

const Categories: React.FC<ICategory> = ({ categories }) => {

  return (
    <WidgetPanel>
      <WidgetPanelTitle>Categories</WidgetPanelTitle>
      <WidgetPanelListing>
        {categories?.map((cat, i) => (
          <WidgetPanelLink key={i}>
            <Image
              src={('/checkbox.svg')}
              // src={'/checkbox.svg'}
              alt="checkboxes"
              width={20}
              height={20}
            />
            <Link href={`/articles/${cat?.attributes?.slug}`}>
              {cat?.attributes?.slug}
            </Link>
          </WidgetPanelLink>
        ))}
      </WidgetPanelListing>
    </WidgetPanel>
  );
};

export default Categories;
