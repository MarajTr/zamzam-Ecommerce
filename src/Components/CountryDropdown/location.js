import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Shop's fixed location
const shopLocation = {
  lat: 23.709148915013436, // Replace with your shop's latitude
  lng: 90.47024986933683, // Replace with your shop's longitude
};

const Location = () => {
  const [userLocation, setUserLocation] = useState(null); // User's current location
  const [routePolyline, setRoutePolyline] = useState(null); // Route polyline
  const [showRoute, setShowRoute] = useState(false); // To toggle the route rendering

  // Fetch the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.warn("Geolocation error:", error);
        setUserLocation(null); // Keeps map centered on the shop
      }
    );
  }, []);

  // Fetch directions from user's location to the shop using an external service
  const fetchDirections = () => {
    if (!userLocation) {
      console.warn("User location is not available.");
      return;
    }

    // Using OpenRouteService API for route generation
    const apiKey = "YOUR_OPENROUTESERVICE_API_KEY"; // Get an API key from https://openrouteservice.org/
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userLocation.lng},${userLocation.lat}&end=${shopLocation.lng},${shopLocation.lat}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const coordinates = data.routes[0].geometry.coordinates;
        const latLngs = coordinates.map(([lng, lat]) => [lat, lng]); // Convert coordinates to Leaflet format
        setRoutePolyline(latLngs);
        setShowRoute(true); // Show the route on the map
      })
      .catch((err) => {
        console.error("Error fetching directions:", err);
      });
  };

  // Fit map bounds dynamically after adding a route
  const FitMapBounds = ({ polyline }) => {
    const map = useMap();

    useEffect(() => {
      if (polyline) {
        const bounds = L.latLngBounds(polyline);
        map.fitBounds(bounds);
      }
    }, [polyline, map]);

    return null;
  };

  return (
    <div>
      <h1>Find Your Way to Our Shop</h1>
      <button
        onClick={fetchDirections}
        style={{ margin: "10px", padding: "10px" }}
      >
        Show Route to Shop
      </button>
      <MapContainer
        center={shopLocation}
        zoom={13}
        style={{ height: "50vh", width: "100%" }}
        scrollWheelZoom={true}
      >
        {/* Tile Layer for the Map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Shop Marker */}
        <Marker position={shopLocation}>
          <Popup>Your Shop Location</Popup>
        </Marker>

        {/* User Marker */}
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>Your Location</Popup>
          </Marker>
        )}

        {/* Route Polyline */}
        {showRoute && routePolyline && (
          <>
            <FitMapBounds polyline={routePolyline} />
            <L.Polyline positions={routePolyline} color="blue" />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Location;
