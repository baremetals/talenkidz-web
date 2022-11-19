import React, { useEffect, useRef, useState } from 'react'
import { StandaloneSearchBox, StandaloneSearchBoxProps } from "@react-google-maps/api";

type searchType = {
    children: React.ReactNode
    onPlace: (e: any) => void
}

type refType = {
    getPlaces: (e: any) => void
}
const SearchBox = ({ children, onPlace }: searchType) => {
    const inputRef = useRef<HTMLInputElement | null| any>(null);

    const [location, setLocation] = useState({
        lat: 51.5072178,
        lng: -0.1275862
    })


    const handlePlaceChanged = () => {
        // const [place] = inputRef?.current?.getPlaces();
        // if (place) {
        //     const address = {
        //         lat: place.geometry.location.lat(),
        //         lng: place.geometry.location.lng()
        //     }
        //     setLocation(address)
        //     console.log('the current: ', inputRef?.current)
        //     onPlace(place)
        // }
    }
  return (
    <>
          <StandaloneSearchBox
            //   onLoad={ref => inputRef.current = ref}
            //   onPlacesChanged={handlePlaceChanged}
          >
              <input
                  style={{ maxWidth: '300px', marginBottom: '.25rem', fontSize: '14px' }}
                  type="text"
                  className="form-control"
                  placeholder="Search Location"
              />
          </StandaloneSearchBox>
    </>
  )
}

export default SearchBox
