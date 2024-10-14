import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FiPlus, FiX } from "react-icons/fi";
import { Button, TextField } from "@mui/material";

const ImageUploader = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string>("");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("");
  const [selectedMeal, setSelectedMeal] = useState<string>("");
  const [caption, setCaption] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [spotName, setSpotName] = useState<string>("");
  const mealOptions = ["Breakfast", "Lunch", "Dinner"];
  const dietaryOptions = [
    "Non-Veg",
    "Vegan",
    "Vegetarian",
    "Gluten-Free",
    "Keto",
    "Low-Carb",
  ];
  const cuisineOptions = [
    "Indian",
    "Italian",
    "Mexican",
    "Chinese",
    "Thai",
    "Japanese",
  ];

  const navigate = useNavigate();
  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!location.trim()) {
      toast.error("Location is required!");
      return;
    }
    try {
      const token =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA5NWEwMTU0ZjQ1ZTVjNDFjZGU2NGQiLCJlbWFpbCI6InN2NzczNDYwQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6InNodWJoYW0iLCJsYXN0TmFtZSI6InZpc2h3YWthcm1hIiwicG9zdHMiOltdLCJib29rbWFya3MiOltdLCJmYXYiOltdLCJjcmVhdGVkQXQiOiIyMDI0LTEwLTExVDE3OjAxOjUzLjI0NFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTEwLTExVDE3OjAyOjAyLjQ0NloiLCJpYXQiOjE3Mjg2NjYxMjYsImV4cCI6MTczMTI1ODEyNn0.Di31cZ0oLFdrz4P8SI4LS9y1fDDJCb7FW6q7Mq1Yq4eOm5XPLFmvRoL346jmhe2Y5o8XRoM8wLgT-aYfnqUhtRuFH8DcHyTz1ykRODU0MYEwYk-XPAzai7zu0920v2hnjIKrFPpuii0mmj7uBPjLK85FJJl_wOIO4UHkmbvNAv8";
      const formData = new FormData();

      // Append each file to formData
      selectedFiles.forEach((file) => {
        formData.append("img", file);
      });

      // Append other form data
      formData.append("caption", caption);
      formData.append("location", location);
      formData.append("Dietary", selectedDietary);
      formData.append("Cuisine", selectedCuisine);
      formData.append("mealType", selectedMeal);
      formData.append("name", spotName); // Add this line in your frontend code
      // Convert array to string for tags
      [selectedDietary, selectedCuisine, selectedMeal].forEach((tag) => {
        formData.append("tags", tag);
      });

      await toast.promise(
        axios.post("http://localhost:3000/v1/post/create-post", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }),
        {
          loading: "Creating Post...",
          success: () => {
            toast.success("Post Created.");
            toast("Redirecting to your profile page...", {
              duration: 3000,
              icon: "🚀",
            });
            setTimeout(() => {
              navigate("/userInfo");
            }, 2500);

            return "Post Created.";
          },
          error: (err) => {
            console.error(err);
            return "Something went wrong. Please try again.";
          },
        }
      );
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Store the actual files
      const newFiles = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);

      // Create preview URLs
      const newImages = newFiles.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    // Clean up the URL object to prevent memory leaks
    URL.revokeObjectURL(images[index]);

    // Remove the image and file from both states
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    return () => {
      images.forEach(URL.revokeObjectURL);
    };
  }, []);

  return (
    <>
      <form action="" onSubmit={handleCreatePost}>
        {/* Image Upload Section */}
        <div className="flex flex-col items-center justify-center pt-12">
          <label
            htmlFor="image-upload"
            className="relative flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer"
          >
            {images.length > 0 ? (
              <div className="relative">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Uploaded Preview ${index + 1}`}
                    className="w-[70vw] h-[60vh] object-cover rounded-lg"
                  />
                ))}
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button
                    onClick={() => handleRemoveImage(images.length - 1)}
                    className="bg-red-500 text-white rounded-full p-1 flex items-center"
                  >
                    <FiX size={20} />
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById("image-upload")?.click()
                    }
                    className="bg-blue-500 text-white rounded-full p-1 flex items-center"
                  >
                    <FiPlus size={20} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-[70vw] h-[60vh] flex flex-col items-center justify-center text-gray-400">
                <FiPlus size={40} />
                <span className="mt-2">Upload Image</span>
              </div>
            )}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            multiple
          />
        </div>

        {/* Post Description */}
        <div className="flex flex-col items-center justify-center pt-12">
          <TextField
            placeholder="Write a caption..."
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{
              width: "70vw",
              borderRadius: "8px",
              borderColor: "gray",
            }}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        {/* Spot Name Input */}
        <div className="flex flex-col items-center justify-center pt-12">
          <TextField
            placeholder="Spot Name"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              width: "70vw",
              borderRadius: "8px",
              borderColor: "gray",
            }}
            onChange={(e) => setSpotName(e.target.value)}
          />
        </div>
        {/* Location Input */}
        <div className="flex flex-col items-center justify-center pt-12">
          <TextField
            placeholder="Location"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              width: "70vw",
              borderRadius: "8px",
              borderColor: "gray",
            }}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Category Section */}
        <div className="flex flex-col items-center justify-center pt-12">
          {/* Dietary Preferences Dropdown */}
          <div className="w-[70vw]">
            <label className="block font-medium mb-2">
              Dietary Preferences
            </label>
            <select
              value={selectedDietary}
              onChange={(e) => setSelectedDietary(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Select Dietary Preference
              </option>
              {dietaryOptions.map((diet, index) => (
                <option key={index} value={diet}>
                  {diet}
                </option>
              ))}
            </select>
          </div>

          {/* Cuisine Dropdown */}
          <div className="w-[70vw] mt-6">
            <label className="block font-medium mb-2">Cuisine</label>
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Select Cuisine
              </option>
              {cuisineOptions.map((cuisine, index) => (
                <option key={index} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>

          {/* Meal Type Dropdown */}
          <div className="w-[70vw] mt-6">
            <label className="block font-medium mb-2">Meal Type</label>
            <select
              value={selectedMeal}
              onChange={(e) => setSelectedMeal(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Select Meal Type
              </option>
              {mealOptions.map((meal, index) => (
                <option key={index} value={meal}>
                  {meal}
                </option>
              ))}
            </select>
          </div>

          {/* Display Selected Tags */}
          <div className="mt-4 w-[70vw]">
            <h4 className="font-medium">Selected Tags:</h4>
            <div className="mt-2">
              {selectedDietary || selectedCuisine || selectedMeal ? (
                <>
                  {selectedDietary && (
                    <span className="inline-block bg-blue-500 text-white text-sm px-2 py-1 rounded mr-2">
                      {selectedDietary}
                    </span>
                  )}
                  {selectedCuisine && (
                    <span className="inline-block bg-green-500 text-white text-sm px-2 py-1 rounded mr-2">
                      {selectedCuisine}
                    </span>
                  )}
                  {selectedMeal && (
                    <span className="inline-block bg-red-500 text-white text-sm px-2 py-1 rounded mr-2">
                      {selectedMeal}
                    </span>
                  )}
                </>
              ) : (
                <p className="text-gray-500">No tags selected.</p>
              )}
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <Button variant="contained" sx={{ mt: 4, p: 2 }} type="submit">
            Create Post
          </Button>
        </div>
      </form>
      {/* Bottom Margin for Spacing */}
      <Toaster position="top-right" />
      <div className="mb-40"></div>
    </>
  );
};

export default ImageUploader;
