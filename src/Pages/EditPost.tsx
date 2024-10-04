import { useState } from "react";

const EditPost = () => {
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

export default EditPost;
