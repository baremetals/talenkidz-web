import React, { useState } from 'react'

import { StandaloneSearchBox, LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '0.625rem'
}

type locationType = {
    lat: number
    lng: number
}
const GoogleLocationMap = ({ lat = 51.5072178, lng = -0.1275862 }: locationType) => {

    const location = {
        lat,
        lng
    }
  return (
    <>
          <GoogleMap
              zoom={10}
              center={location}
              id="map"
              mapContainerStyle={mapContainerStyle}
          >
              <Marker position={location} />
          </GoogleMap>
    </>
  )
}

export default GoogleLocationMap
