import React from "react";
import { LoadScript} from "@react-google-maps/api";

type mapType = {
    children: React.ReactNode
}
const PlaceComponent = ({ children }: mapType) => {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API as string} libraries={["places"]}>
            {children}
        </LoadScript>
    );
};

export default PlaceComponent;
