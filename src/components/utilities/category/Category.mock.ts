import { ICategory } from '.';

const base: ICategory = {
  categories: [
    {
      id: '1',
      attributes: {
        colour: '#A0E4CB',
        name: 'drama',
        slug: 'drama',
      },
    },
    {
      id: '2',
      attributes: {
        colour: '#C060A1',
        name: 'education',
        slug: 'education',
      },
    },
    {
      id: '3',
      attributes: {
        colour: '#F49D1A',
        name: 'music',
        slug: 'music',
      },
    },
    {
      id: '4',
      attributes: {
        colour: '#0008C1',
        name: 'sports',
        slug: 'sports',
      },
    },
  ],
};

export const mockCategoryProps = {
  base,
};
