export const filterArray = [
  {
    name: 'All',
    data: {
      filterBy: {},
      id: 'All',
      filterType: '',
    },
  },
  {
    name: 'Today',
    data: {
      filterBy: {},
      id: 'Today',
      filterType: 'today',
    },
  },
  {
    name: 'This week',
    data: {
      filterBy: {},
      id: 'This week',
      filterType: 'week',
    },
  },
  {
    name: 'This month',
    data: {
      filterBy: {},
      id: 'This month',
      filterType: 'month',
    },
  },
  {
    name: 'Online',
    //   handleFetchData(
    //     {
    //       venue: {
    //         ne: 'location',
    //       },
    //     },
    //     'Online'
    //   ),
    data: {
      filterBy: {
        venue: {
          ne: 'location',
        },
      },
      id: 'Online',
      filterType: '',
    },
  },
  {
    name: 'Free',
    data: {
      filterBy: {
        price: {
          eq: '0',
        },
      },
      id: 'Free',
      filterType: '',
    },
  },
];


export const actvityFilterArray = [
  {
    name: 'All',
    data: {
      filterBy: {},
      id: 'All',
      filterType: '',
    },
  },
  {
    name: 'Creative',
    data: {
      filterBy: {
        category: {
          slug: {
            eq: 'creative',
          },
        },
      },
      id: 'Creative',
      filterType: '',
    },
  },
  {
    name: 'Sports',
    data: {
      filterBy: {
        category: {
          slug: {
            eq: 'sports',
          },
        },
      },
      id: 'Sports',
      filterType: '',
    },
  },
  {
    name: 'Education',
    data: {
      filterBy: {
        category: {
          slug: {
            eq: 'education',
          },
        },
      },
      id: 'Education',
      filterType: '',
    },
  },
];

export const actvityCategoryFilterArray = [
  {
    name: 'Today',
    id: 'Today',
    filterType: 'today',
  },
  {
    name: 'This week',
    id: 'This week',
    filterType: 'week',
  },
  {
    name: 'This month',
    id: 'This month',
    filterType: 'month',
  },
  {
    name: 'Online',
    filterType: 'online',
    id: 'Online',
  },
  {
    name: 'Free',
    id: 'Free',
    filterType: 'free',
  },
];
