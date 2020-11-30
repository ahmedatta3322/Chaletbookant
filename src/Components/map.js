import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "../Styling/map.css";
function GoogleMap(props) {
  const { langitude, latitude, chalets } = props;
  // console.log(chalets);
  return (
    <Map
      className="map"
      google={props.google}
      zoom={3}
      // style={{ position: "absolute", width: "97%", height: "233%" }}

      initialCenter={{
        lat: "35.41279457509518",
        lng: "24.237523291240844",
      }}
      // onClick={onMapClicked}
      // onDragend={centerMoved}
    >
      {chalets ? (
        chalets.map((chalet) => (
          <Marker
            onDragend={props.moveMarker}
            key={chalet.id}
            name={"Current location"}
            draggable={true}
            position={{
              lat: chalet.latitude,
              lng: chalet.langitude,
            }}
          />
        ))
      ) : (
        <Marker
          onDragend={props.moveMarker}
          name={"Current location"}
          draggable={true}
          position={{
            lat: latitude ? langitude : "35.41279457509518",
            lng: langitude ? langitude : "24.237523291240844",
          }}
        />
      )}

      {/* <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow> */}
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBEcZmqPVYHIVOd64eicSgsD5oeLdykFKA",
})(GoogleMap);
