import {
  Autocomplete,
  GoogleMap,
  InfoWindow,
  LoadScriptNext,
  Marker,
} from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "./styles.css";

interface MarkerType {
  lat: number;
  lng: number;
  name: string;
  address: string;
  photoUrl?: string;
}

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
          photoUrl: place.photos && place.photos[0]
            ? place.photos[0].getUrl({ maxWidth: 200 })
            : "",
        };

        setSearchLocation(searchResult);
        setMarkers((prevMarkers) => [...prevMarkers, searchResult]);

        map?.panTo(location);
        map?.setZoom(15);
      }
    }
  };

  // const fetchPostosDeSaude = () => {
  //   if (window.google && window.google.maps) {
  //     const placesService = new window.google.maps.places.PlacesService(
  //       document.createElement("div")
  //     );

  //     const request: google.maps.places.PlaceSearchRequest = {
  //       location: userLocation || center,
  //       radius: 3000,
  //       keyword: "Unidade Básica de Saúde",
  //     };

  //     placesService.nearbySearch(request, (results, status) => {
  //       if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
  //         const postos = results.map((place) => {
  //           const photoUrl = place.photos && place.photos[0]
  //             ? place.photos[0].getUrl({ maxWidth: 200 })
  //             : "";

  //           return {
  //             lat: place.geometry?.location?.lat() || 0,
  //             lng: place.geometry?.location?.lng() || 0,
  //             name: place.name || "UBS" || "Hospital",
  //             address: place.vicinity || "Endereço não disponível",
  //             photoUrl: photoUrl,
  //           };
  //         });
  //         setMarkers(postos);
  //       }
  //     });
  //   }
  // };

  const fetchPostosDeSaude = useCallback(() => {
    if (window.google && window.google.maps) {
      const placesService = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
  
      const keywords = ["Unidade Básica de Saúde", "Hospital"];
      const requests = keywords.map((keyword) => ({
        location: userLocation || center,
        radius: 3000,
        keyword: keyword,
      }));
  
      requests.forEach((request) => {
        placesService.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
            const postos = results.map((place) => {
              const photoUrl = place.photos && place.photos[0]
                ? place.photos[0].getUrl({ maxWidth: 200 })
                : "";
  
              return {
                lat: place.geometry?.location?.lat() || 0,
                lng: place.geometry?.location?.lng() || 0,
                name: place.name || "Local",
                address: place.vicinity || "Endereço não disponível",
                photoUrl: photoUrl,
              };
            });
            setMarkers((prevMarkers) => [...prevMarkers, ...postos]);
          }
        });
      });
    }
  }, [userLocation]);
  

  const onMapLoad = (mapInstance: google.maps.Map) => {
    console.log("Mapa carregado");
    setMap(mapInstance);
  
    const recenterControlDiv = document.createElement("div");
    recenterControlDiv.classList.add("custom-control");
  
    createRecenterControl(recenterControlDiv, mapInstance);
    mapInstance.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(recenterControlDiv);
  };
  
  const createRecenterControl = (controlDiv: HTMLElement, map: google.maps.Map) => {
    const controlUI = document.createElement("button");
    controlUI.textContent = "Início";
    controlUI.style.backgroundColor = "var(--primary200)";
    controlUI.style.color = "var(--white50)";
    controlUI.style.borderRadius = "3px";
    controlUI.style.cursor = "pointer";
    controlUI.style.padding = "8px 16px";
    controlUI.style.fontSize = "14px";
    controlUI.style.border = "none";
    controlUI.style.outline = "none"; 
    controlUI.style.margin = "0"; 
  
    controlDiv.appendChild(controlUI);
  
    controlUI.addEventListener("click", () => {
      if (map && userLocation) {
        map.panTo(userLocation);
        map.setZoom(15);
      } else {
        map.panTo(center);
        map.setZoom(15);
      }
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
        () => {
          if (map) {
            map.setCenter(center);
            fetchPostosDeSaude();
          }
        }
      );
    } else {
      if (map) {
        map.setCenter(center);
        fetchPostosDeSaude();
      }
    }
  }, [map]);

  const formatAddress = (address: string) => {
    return address.split(", ").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <LoadScriptNext googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
      <section className="map__section">
        <h3 className="map__title">Encontre uma unidade de saúde perto de você</h3>
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
            zoom={15}
            center={userLocation || center}
            onLoad={onMapLoad}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
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
                <div style={{ maxWidth: "250px" }}>
                  <h3 style={{ marginBottom: "5px" }}>{selectedMarker.name}</h3>
                  <p style={{ margin: "0 0 10px", fontSize: "12px", color: "#555" }}>
                    {formatAddress(selectedMarker.address)}
                  </p>
                  {selectedMarker.photoUrl && (
                    <img
                      src={selectedMarker.photoUrl}
                      alt={selectedMarker.name}
                      style={{
                        width: "100%",
                        height: "100px",
                        objectFit: "cover",
                        marginBottom: "10px",
                      }}
                    />
                  )}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedMarker.lat},${selectedMarker.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "12px",
                      color: "#4285F4",
                      textDecoration: "underline",
                    }}
                  >
                    Visualize no Google Maps
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </section>
    </LoadScriptNext>
  );
}
