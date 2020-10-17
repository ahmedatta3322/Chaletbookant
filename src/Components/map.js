import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "../Styling/map.css";
function GoogleMap(props) {
  return (
    <div>
      <Map
        className="map"
        google={props.google}
        zoom={3}
        style={{ position: "absolute", width: "97%", height: "233%" }}
        center={{
          lat: "29.69843312500002",
          lng: "27.450745816193173",
        }}

        // onClick={onMapClicked}
        // onDragend={centerMoved}
      >
        <Marker
          //   onDragend={moveMarker}
          name={"Current location"}
          draggable={true}
          position={{
            lat: "29.69843312500002",
            lng: "27.450745816193173",
          }}
        />

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow> */}
      </Map>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBEcZmqPVYHIVOd64eicSgsD5oeLdykFKA",
})(GoogleMap);
