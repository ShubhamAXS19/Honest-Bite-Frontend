import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ShareSlice = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [radius, setRadius] = useState(1000); // Radius in meters (1000 meters = 1 km)
  const [ppl, setPpl] = useState(0); // Radius in meters (1000 meters = 1 km)

  // Function to request the user's location
  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null); // Clear any previous errors
        },
        (error) => {
          setError(error.message); // Handle location error
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  // Render error message if there's an issue with fetching the location
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render a loading message while waiting for location
  if (!location) {
    return <p>Loading map...</p>;
  }

  const position = [location.latitude, location.longitude];

  // Handle radius input change
  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); // Convert input to a number
    if (!isNaN(value)) {
      setRadius(value); // Update radius if it's a valid number
    }
  };
  const handleNoofppl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); // Convert input to a number
    if (!isNaN(value)) {
      setRadius(value); // Update radius if it's a valid number
    }
  };

  return (
    <>
      <MapContainer
        center={position}
        zoom={15}
        className="leaflet-container"
        style={{ height: "70vh", width: "100vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>You</Popup>
        </Marker>
        <Circle
          center={position}
          radius={radius}
          color="blue"
          fillColor="blue"
          fillOpacity={0.2}
        />
      </MapContainer>

      {/* Input for changing radius */}
      <div style={{ padding: "10px" }}>
        <label>Change radius (meters): </label>
        <input
          type="number"
          value={radius}
          onChange={handleRadiusChange}
          min={0}
        />
      </div>

      {/* Input for selecting number of people */}
      <div style={{ padding: "10px" }}>
        <label>Select number of people </label>
        <input type="number" value={ppl} onChange={handleNoofppl} min={0} />
      </div>
      <div className="mb-40"></div>
    </>
  );
};

export default ShareSlice;
