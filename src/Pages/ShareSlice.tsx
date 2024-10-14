import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@mui/material";
import io from "socket.io-client";

import { SelectFriend, ShareSliceInput } from "../Components/ShareSliceInput";
// import { AddRoute1, AddRoute2 } from "../Components/AddRoute";

const socket = io("http://localhost:3000", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
});

const ShareSlice = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [radius, setRadius] = useState<number>(1000);
  const [ppl, setPpl] = useState<number>(0);

  const [selectedCrust, setSelectedCrust] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedSauce, setSelectedSauce] = useState<string>("");
  const [selectedCheese, setSelectedCheese] = useState<string>("");

  const [selectedVegToppings, setSelectedVegToppings] = useState<string[]>([]);
  const [selectedNonVegToppings, setSelectedNonVegToppings] = useState<
    string[]
  >([]);
  const [selectedVeganToppings, setSelectedVeganToppings] = useState<string[]>(
    []
  );

  useEffect(() => {
    // Connect to the WebSocket server
    socket.connect();

    // Emit a message when the component mounts (user connects)
    socket.emit("userConnected", { message: "User connected to ShareSlice" });

    // Listen for any messages from the server
    socket.on("message", (data) => {
      console.log("Received message from server:", data);
    });

    // Cleanup function
    return () => {
      socket.disconnect();
    };
  }, []);

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

  const position: LatLngExpression = [location.latitude, location.longitude];

  // Handle radius input change
  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); // Convert input to a number
    if (!isNaN(value)) {
      setRadius(value); // Update radius if it's a valid number
    }
  };
  const handleNumofppl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); // Convert input to a number
    if (!isNaN(value)) {
      setPpl(value); // Update radius if it's a valid number
    }
  };

  const crustOptions = ["Thin", "Thick", "Stuffed"];
  const sizeOptions = ["Regular", "Medium", "Large"];

  const toppingsOptions = {
    vegetarian: [
      "Corn & Cheese",
      "Onion & Capsicum",
      "Mushroom & Spinach",
      "Tomato & Basil",
    ],
    nonVegetarian: ["Chicken", "Pork", "Pepperoni", "Salami"],
    vegan: ["Bell Peppers", "Olives", "Mushrooms", "Artichokes"],
  };

  const sauceOptions = ["Tomato", "Pesto", "BBQ"];
  const cheeseOptions = ["Mozzarella", "Cheddar", "Regular"];

  const handleVegToppingsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const options = event.target.options;
    const selectedValues: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedVegToppings(selectedValues);
  };

  const handleNonVegToppingsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const options = event.target.options;
    const selectedValues: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedNonVegToppings(selectedValues);
  };

  const handleVeganToppingsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const options = event.target.options;
    const selectedValues: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedVeganToppings(selectedValues);
  };

  const handleFindSlice = () => {
    const pizzaPreferences = {
      crust: selectedCrust,
      size: selectedSize,
      sauce: selectedSauce,
      cheese: selectedCheese,
      vegToppings: selectedVegToppings,
      nonVegToppings: selectedNonVegToppings,
      veganToppings: selectedVeganToppings,
      people: ppl,
      radius: radius,
      location: location,
    };

    // Emit the pizza preferences to the server
    socket.emit("findSlice", pizzaPreferences);
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
        {/* <Marker position={userLocation}>
          <Popup>Your Location</Popup>
        </Marker>
        {matchLocation && (
          <Marker position={matchLocation}>
            <Popup>Match Location</Popup>
          </Marker>
        )}
        <Marker position={pizzaSpotLocation}>
          <Popup>Pizza Spot</Popup>
        </Marker>*/}
        {/* <AddRoute1 /> */}
        {/* <AddRoute2 /> */}
      </MapContainer>

      {/* Input for changing radius */}
      <div className="flex flex-col items-center justify-center pt-12">
        <div className="w-[70vw] flex flex-col items-start">
          <h2 className="font-semibold text-xl mb-4">Search Radius</h2>
          <label className="mb-2">Change radius (meters): </label>
          <input
            type="number"
            value={radius}
            onChange={handleRadiusChange}
            min={0}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>

      {/* <h2 className="font-semibold text-xl mb-4">Spot Selection</h2> */}

      <div className="flex flex-col items-center justify-center pt-12">
        {/* Number of People */}
        <SelectFriend numPeople={ppl} handleNumofppl={handleNumofppl} />
        {/* Slice Preference */}
        <div className=" flex flex-col items-start mt-6">
          <h2 className="font-semibold text-xl mb-4">Slice Preference</h2>

          {/* Crust Type Selection */}
          <ShareSliceInput
            selectedCrust={selectedCrust}
            setSelectedCrust={setSelectedCrust}
            crustOptions={crustOptions}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            sizeOptions={sizeOptions}
            selectedVegToppings={selectedVegToppings}
            selectedNonVegToppings={selectedNonVegToppings}
            selectedVeganToppings={selectedVeganToppings}
            toppingsOptions={toppingsOptions}
            selectedSauce={selectedSauce}
            setSelectedSauce={setSelectedSauce}
            sauceOptions={sauceOptions}
            selectedCheese={selectedCheese}
            setSelectedCheese={setSelectedCheese}
            cheeseOptions={cheeseOptions}
            handleVegToppingsChange={handleVegToppingsChange}
            handleNonVegToppingsChange={handleNonVegToppingsChange}
            handleVeganToppingsChange={handleVeganToppingsChange}
          />
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <Button
          variant="contained"
          sx={{ mt: 4, p: 2 }}
          onClick={handleFindSlice}
        >
          Find Slice
        </Button>
      </div>
      <div className="mb-40"></div>
    </>
  );
};

export default ShareSlice;
