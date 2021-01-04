import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "../Styling/map.css";
import { Button } from "react-bootstrap";
function GoogleMap(props) {
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });
  const onMarkerClick = (props, marker, e) => {
    console.log(props.position);
    console.log(marker);
    console.log(e);
    const chalet = chalets.find(
      (c) =>
        c.langitude === props.position.lng && c.latitude === props.position.lat
    );
    console.log(chalet);
    setState({
      selectedPlace: chalet,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  const onMapClicked = (props) => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  const { langitude, latitude, chalets } = props;
  // console.log(chalets);
  return (
    <Map
      className="map"
      google={props.google}
      zoom={3}
      onClick={onMapClicked}
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
            onClick={onMarkerClick}
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
          onClick={onMarkerClick}
          onDragend={props.moveMarker}
          name={"Current location"}
          draggable={true}
          position={{
            lat: latitude ? langitude : "35.41279457509518",
            lng: langitude ? langitude : "24.237523291240844",
          }}
        />
      )}

      <InfoWindow marker={state.activeMarker} visible={state.showingInfoWindow}>
        <div>
          <h1>{state.selectedPlace.address}</h1>
          <Button className="active m-3 pl-4 pr-4 p-3 view text-white">
            <a
              variant="primary"
              className="active m-3 pl-4 pr-4 p-3 view text-white"
              href={`/viewchalet/${
                state.selectedPlace && state.selectedPlace.id
              }`}
            >
              Show Details
            </a>
          </Button>
          {/* <NavLink
            variant="primary"
            to={`/viewchalet/${state.selectedPlace.id}`}
          >
            Show Details
          </NavLink> */}
        </div>
      </InfoWindow>
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBEcZmqPVYHIVOd64eicSgsD5oeLdykFKA",
})(GoogleMap);
