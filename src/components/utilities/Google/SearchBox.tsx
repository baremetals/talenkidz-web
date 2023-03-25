import React, { useRef, useState } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

type searchType = {
  children?: React.ReactNode;
  onPlace: (_e: any) => void;
  //   handlePlaceChanged: (_e: any) => void;
};

// type refType = {
//     getPlaces: (e: any) => void
// }

const SearchBox = ({ onPlace }: searchType) => {
  const inputRef = useRef<HTMLInputElement | null | any>(null);

  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState({
    lat: 51.5072178,
    lng: -0.1275862,
  });

  const handlePlaceChanged = () => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const [place] = inputRef?.current?.getPlaces();
    if (place) {
      const address = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setLocation(address);
      console.log('the current: ', inputRef?.current);
      onPlace(place);
    }
  };
  return (
    <>
      <StandaloneSearchBox
        onLoad={(ref) => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged}
      >
        <input
          style={{ maxWidth: '100%', marginBottom: '.25rem', fontSize: '14px' }}
          type="text"
          className="form-control"
          placeholder="Location for offline activity"
        />
      </StandaloneSearchBox>
    </>
  );
};

export default SearchBox;
