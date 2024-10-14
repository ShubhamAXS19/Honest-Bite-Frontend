import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import SpotCard from "../Components/SpotCard";

const NearbySpot = () => {
  const [radius, setRadius] = useState(1000);
  const [spots, setSpot] = useState<[]>([]);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [loading, setLoading] = useState(false); // Set default to false

  useEffect(() => {
    getLocation();
  }, []);

  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); // Convert input to a number
    if (!isNaN(value)) {
      setRadius(value); // Update radius if it's a valid number
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude is :", latitude);
        console.log("Longitude is :", longitude);
        setLocation({
          latitude,
          longitude,
        });
        console.log("Location is:", location);
      });
    } else {
      toast.error("Please enable your location.", { duration: 3000 });
      console.error("Geolocation is not supported by this browser.");
    }

    console.log("hi");
  };

  const searchNearbySpot = async () => {
    setLoading(true); // Set loading to true when API call starts
    try {
      const response = await axios.get(
        `http://localhost:3000/v1/eat/hunger?lng=19.1005&lat=72.8441&distance=1000`
        // `http://localhost:3000/v1/eat/hunger?lng=${location?.longitude}&lat=${location?.latitude}&distance=${radius}`
      );
      console.log("Response is:", response.data);
      setSpot(response.data);
    } catch (error) {
      toast.error("An error occurred while fetching nearby spots", {
        duration: 3000,
      });
    } finally {
      setLoading(false); // Set loading to false when API call finishes
    }
  };

  return (
    <div className="px-8 py-4">
      <div className="flex flex-col ">
        <h1 className="font-bold text-xl">
          Please Provide a radius to find nearby spot
        </h1>
        <div className=" flex flex-col">
          {/* Title on the top left */}
          <h2 className="font-semibold text-lg mb-4">Search Radius</h2>

          {/* Input and Button in a row */}
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={radius}
              onChange={handleRadiusChange}
              min={0}
              className="border border-gray-300 rounded-lg p-2 h-[5vh] w-full"
            />
            <Button
              variant="contained"
              sx={{ height: "5vh" }}
              onClick={searchNearbySpot}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Searching..." : "Search"} {/* Show different text */}
            </Button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="pt-6">
          {spots.map((spot, index) => (
            <SpotCard key={index} postData={spot} />
          ))}
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default NearbySpot;
