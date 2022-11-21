import React, { useState } from "react";
import { LoadScript, useLoadScript } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';

type mapType = {
    children: React.ReactNode
}

const PlaceComponent = ({ children }: mapType) => {

    const [libraries] = useState<Libraries>(['places']);
    // const { isLoaded, loadError } = useLoadScript({
    //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API as string,
    //   libraries
    // });
    
    return (
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API as string}
        libraries={libraries}
      >
        {children}
      </LoadScript>
    );
};

export default PlaceComponent;
