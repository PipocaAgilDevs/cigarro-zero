import { useCallback, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import {
  Autocomplete,
  GoogleMap,
  InfoWindow,
  LoadScriptNext,
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

// São Paulo
const center = {
  lat: -23.55052,
  lng: -46.633308,
}; 

const libraries: "places"[] = ["places"];

export default function Map() {
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userLocation, setUserLocation] = useState<google.maps.LatLng | null>(null);
  const [searchLocation, setSearchLocation] = useState<MarkerType | null>(null);

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
        const searchResult: MarkerType = {
          lat: location.lat(),
          lng: location.lng(),
          name: place.name || "Local pesquisado",
          address: place.formatted_address || "Endereço não disponível",
          photos: place.photos || [],
        };

        setSearchLocation(searchResult); 
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          searchResult,
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
        location: userLocation || center, 
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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLatLng = new google.maps.LatLng(latitude, longitude);
          setUserLocation(userLatLng);
          if (map) {
            map.setCenter(userLatLng);
            fetchPostosDeSaude();
          }
        },
        (error) => {
          console.error("Erro ao obter a localização do usuário:", error);
          if (map) {
            map.setCenter(center);
            fetchPostosDeSaude();
          }
        }
      );
    } else {
      console.error("Geolocalização não é suportada pelo navegador.");
      if (map) {
        map.setCenter(center);
        fetchPostosDeSaude();
      }
    }
  }, [map]);

  return (
    <LoadScriptNext
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
    <section className="map__section">
      <h3 className="map__title">
        Encontre uma unidade de saúde perto de você
      </h3>
      <div className="map__container">
        <div className="search__container">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search__content">
              <input placeholder="Buscar" className="search__input" />
              <div className="search__icon">
                <IoIosSearch size={25} />
              </div>
            </div>
          </Autocomplete>
        </div>

        <GoogleMap
          mapContainerClassName="map"
          zoom={12}
          center={userLocation || center} 
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

          {searchLocation && (
            <Marker
              position={{ lat: searchLocation.lat, lng: searchLocation.lng }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              onClick={() => setSelectedMarker(searchLocation)}
            />
          )}

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
    </section>
  </LoadScriptNext>
  );
}
