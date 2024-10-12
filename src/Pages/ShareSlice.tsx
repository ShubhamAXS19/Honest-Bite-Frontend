import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@mui/material";

const ShareSlice = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [radius, setRadius] = useState(1000);
  const [ppl, setPpl] = useState(0);

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
  const handleNumofppl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); // Convert input to a number
    if (!isNaN(value)) {
      setPpl(value); // Update radius if it's a valid number
    }
  };

  const crustOptions = ["Thin", "Thick", "Stuffed"];
  const sizeOptions = ["Regular", "Medium", "Large"];
  type ToppingsOptions = {
    vegetarian: string[];
    nonVegetarian: string[];
    vegan: string[];
  };

  const toppingsOptions: ToppingsOptions = {
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

  const handleCrustChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCrust(e.target.value);
  };
  const handleSauceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSauce(e.target.value);
  };
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };
  const handleCheeseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCheese(e.target.value);
  };
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
        <div className="w-[70vw] flex flex-col items-start">
          <label className="mb-2">Select number of people</label>
          <input
            type="number"
            value={ppl}
            onChange={handleNumofppl}
            min={0}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Slice Preference */}
        <div className=" flex flex-col items-start mt-6">
          <h2 className="font-semibold text-xl mb-4">Slice Preference</h2>

          {/* Crust Type Selection */}
          <div className=" w-[70vw] flex flex-col items-start mb-4">
            <label className="mb-2">Crust</label>
            <select
              value={selectedCrust}
              onChange={handleCrustChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="" disabled>
                Select Crust
              </option>
              {crustOptions.map((crust, index) => (
                <option key={index} value={crust}>
                  {crust}
                </option>
              ))}
            </select>
          </div>

          {/* Size Selection */}
          <div className="w-[70vw] flex flex-col items-start mb-4">
            <label className="mb-2">Size</label>
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="" disabled>
                Select Size
              </option>
              {sizeOptions.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Toppings Selection */}
          <div className="w-[70vw] flex flex-col items-start mb-4">
            <h3 className="font-semibold text-lg mb-2">Toppings</h3>

            <h4 className="font-medium mb-2">Vegetarian</h4>
            <select
              value={selectedVegToppings}
              onChange={handleVegToppingsChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="" disabled>
                Select Vegetarian Toppings
              </option>
              {toppingsOptions.vegetarian.map((topping, index) => (
                <option key={index} value={topping}>
                  {topping}
                </option>
              ))}
            </select>

            <h4 className="font-medium mb-2">Non-Vegetarian</h4>
            <select
              value={selectedNonVegToppings}
              onChange={handleNonVegToppingsChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="" disabled>
                Select Non-Vegetarian Toppings
              </option>
              {toppingsOptions.nonVegetarian.map((topping, index) => (
                <option key={index} value={topping}>
                  {topping}
                </option>
              ))}
            </select>

            <h4 className="font-medium mb-2">Vegan</h4>
            <select
              value={selectedVeganToppings}
              onChange={handleVeganToppingsChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="" disabled>
                Select Vegan Toppings
              </option>
              {toppingsOptions.vegan.map((topping, index) => (
                <option key={index} value={topping}>
                  {topping}
                </option>
              ))}
            </select>
          </div>

          {/* Sauce Preference */}
          <div className="w-[70vw] flex flex-col items-start mb-4">
            <label className="mb-2">Sauce</label>
            <select
              value={selectedSauce}
              onChange={handleSauceChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="" disabled>
                Select Sauce
              </option>
              {sauceOptions.map((sauce, index) => (
                <option key={index} value={sauce}>
                  {sauce}
                </option>
              ))}
            </select>
          </div>

          {/* Cheese Options */}
          <div className="w-[70vw] flex flex-col items-start">
            <label className="mb-2">Cheese</label>
            <select
              value={selectedCheese}
              onChange={handleCheeseChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="" disabled>
                Select Cheese
              </option>
              {cheeseOptions.map((cheese, index) => (
                <option key={index} value={cheese}>
                  {cheese}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <Button variant="contained" sx={{ mt: 4, p: 2 }}>
          Find Slice
        </Button>
      </div>
      <div className="mb-40"></div>
    </>
  );
};

export default ShareSlice;
