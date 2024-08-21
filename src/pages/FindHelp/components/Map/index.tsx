import { useCallback, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import {
  Autocomplete,
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

import "./styles.css";

interface MarkerType {
  lat: number;
  lng: number;
  name: string;
  address: string;
  photos?: google.maps.places.PlacePhoto[];
  photoUrl?: string;
}

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

const libraries: "places"[] = ["places"];

export default function Map() {
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(
    (autocompleteInstance: google.maps.places.Autocomplete) => {
      setAutocomplete(autocompleteInstance);
    },
    [],
  );

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const location = place.geometry?.location;
      if (location) {
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          {
            lat: location.lat(),
            lng: location.lng(),
            name: place.name || "Local pesquisado",
            address: place.formatted_address || "Endereço não disponível",
            photos: place.photos || [],
          },
        ]);

        map?.panTo(location);
        map?.setZoom(15);
      } else {
        console.log("A localização do lugar não está disponível.");
      }
    } else {
      console.log("Autocomplete ainda não carregado");
    }
  };

  const fetchPostosDeSaude = () => {
    if (window.google && window.google.maps) {
      const placesService = new window.google.maps.places.PlacesService(
        document.createElement("div"),
      );

      const request: google.maps.places.PlaceSearchRequest = {
        location: center,
        radius: 5000,
        keyword: "Unidade Básica de Saúde",
      };

      placesService.nearbySearch(request, (results, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          results
        ) {
          const postos = results.map((place) => {
            const photoUrl =
              place.photos && place.photos[0]
                ? place.photos[0].getUrl({ maxWidth: 100 })
                : "";

            return {
              lat: place.geometry?.location?.lat() || 0,
              lng: place.geometry?.location?.lng() || 0,
              name: place.name || "UBS",
              address: place.vicinity || "Endereço não disponível",
              photoUrl: photoUrl,
            };
          });
          setMarkers(postos);
        } else {
          console.error("Erro ao buscar postos de saúde:", status);
        }
      });
    } else {
      console.error("Google Maps não carregado");
    }
  };

  useEffect(() => {
    if (map) {
      fetchPostosDeSaude();
    }
  }, [map]);

  const onMapLoad = (mapInstance: google.maps.Map) => {
    console.log("Mapa carregado");
    setMap(mapInstance);
    mapInstance.setOptions({
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: false,
    });
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAb48RVBUN2ZMMHtCXLTy7DeBnmCTAqawg"
      libraries={libraries}
    >
      <h3 className="map__title">
        Encontre uma unidade de saúde perto de você
      </h3>
      <div className="map">
        <div className="search">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search__wrapper">
              <input placeholder="Buscar" className="search__input" />
              <div className="search__icon">
                <IoIosSearch size={25} />
              </div>
            </div>
          </Autocomplete>
        </div>

        <GoogleMap
          mapContainerClassName="map__container"
          zoom={12}
          center={center}
          onLoad={onMapLoad}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              onClick={() => setSelectedMarker(marker)}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h3>{selectedMarker.name}</h3>
                <p>{selectedMarker.address}</p>
                {selectedMarker.photoUrl && (
                  <img
                    src={selectedMarker.photoUrl}
                    alt={selectedMarker.name}
                    style={{
                      width: "100%",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}
