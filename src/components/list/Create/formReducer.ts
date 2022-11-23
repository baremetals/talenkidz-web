export const INITIAL_STATE = {
  name: '',
  street: '',
  town: '',
  postCode: '',
  longtitude: 0,
  latitude: 0,
  linkButtonText: 'Learn More',
  venue: 'location',
  showInput: false,
};

export const formReducer = (
  state: any,
  action: any
) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        // ...action.payload,
        name: action.payload.name,
        street: action.payload.street,
        town: action.payload.town,
        postCode: action.payload.postCode,
        longtitude: action.payload.longtitude,
        latitude: action.payload.latitude,
        showInput: true,
      };
    case 'SHOW_VALUE':
      return {
        ...state,
        name: action.payload.name,
        street: action.payload.street,
        town: action.payload.town,
        postCode: action.payload.postCode,
        longtitude: action.payload.longtitude,
        latitude: action.payload.latitude,
        linkButtonText: action.payload.linkButtonText,
        venue: action.payload.venue,
        showInput: true,
      };
    default:
      return {
        ...state
      }
  }
};