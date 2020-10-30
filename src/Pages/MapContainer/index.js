import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  aligncontent: "center",
  width: "400px",
  height: "400px",
};

export function MapContainer({ google }) {
  return (
    <div>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 52.078663,
          lng: 4.288788,
        }}
      />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAaFQdJ_TiTYqOdp3iphwsPNBoc3VK8Xls",
})(MapContainer);
