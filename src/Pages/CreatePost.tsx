import { useState, ChangeEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const ImageUploader = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

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
  const mealOptions = ["Breakfast", "Lunch", "Dinner"];
  const [selectedDietary, setSelectedDietary] = useState<string>("");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("");
  const [selectedMeal, setSelectedMeal] = useState<string>("");

  const handleDietaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDietary(e.target.value);
  };

  const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCuisine(e.target.value);
  };

  const handleMealChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMeal(e.target.value);
  };

  return (
    <>
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
        <textarea
          placeholder="Write a caption..."
          className="w-[70vw] h-20 border border-gray-300 rounded-lg p-2"
        ></textarea>
      </div>

      {/* Location Input */}
      <div className="flex flex-col items-center justify-center pt-12">
        <input
          type="text"
          placeholder="Location"
          className="w-[70vw] border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Category Section */}
      <div className="flex flex-col items-center justify-center pt-12">
        {/* Dietary Preferences Dropdown */}
        <div className="w-[70vw]">
          <label className="block font-medium mb-2">Dietary Preferences</label>
          <select
            value={selectedDietary}
            onChange={handleDietaryChange}
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
            onChange={handleCuisineChange}
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
            onChange={handleMealChange}
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

      {/* Bottom Margin for Spacing */}
      <div className="mb-40"></div>
    </>
  );
};

export default ImageUploader;