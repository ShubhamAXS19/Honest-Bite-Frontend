import { ShareSliceInputProps } from "../types/other";
import { SelectFriendProps } from "../types/other";

export const SelectFriend: React.FC<SelectFriendProps> = ({
  numPeople,
  handleNumofppl,
}) => {
  return (
    <div className="w-[70vw] flex flex-col items-start">
      <label className="mb-2">Select number of people</label>
      <input
        type="number"
        value={numPeople}
        onChange={handleNumofppl}
        min={0}
        className="w-full border border-gray-300 rounded-lg p-2"
      />
    </div>
  );
};

export const ShareSliceInput: React.FC<ShareSliceInputProps> = ({
  selectedCrust,
  setSelectedCrust,
  crustOptions,
  selectedSize,
  setSelectedSize,
  sizeOptions,
  selectedVegToppings,
  selectedNonVegToppings,
  selectedVeganToppings,
  toppingsOptions,
  selectedSauce,
  setSelectedSauce,
  sauceOptions,
  selectedCheese,
  setSelectedCheese,
  cheeseOptions,
  handleVegToppingsChange,
  handleNonVegToppingsChange,
  handleVeganToppingsChange,
}) => {
  return (
    <>
      {/* crust */}
      <div className=" w-[70vw] flex flex-col items-start mb-4">
        <label className="mb-2">Crust</label>
        <select
          value={selectedCrust}
          onChange={(e) => setSelectedCrust(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="" disabled>
            Select Crust
          </option>
          {crustOptions.map((crust: string, index: number) => (
            <option key={index} value={crust}>
              {crust}
            </option>
          ))}
        </select>
      </div>
      {/* size */}
      <div className="w-[70vw] flex flex-col items-start mb-4">
        <label className="mb-2">Size</label>
        <select
          value={selectedSize}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedSize(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="" disabled>
            Select Size
          </option>
          {sizeOptions.map((size: string, index: number) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Topping */}
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
          {toppingsOptions.vegetarian.map((topping: string, index: number) => (
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
          {toppingsOptions.nonVegetarian.map(
            (topping: string, index: number) => (
              <option key={index} value={topping}>
                {topping}
              </option>
            )
          )}
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
          {toppingsOptions.vegan.map((topping: string, index: number) => (
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedSauce(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="" disabled>
            Select Sauce
          </option>
          {sauceOptions.map((sauce: string, index: number) => (
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedCheese(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="" disabled>
            Select Cheese
          </option>
          {cheeseOptions.map((cheese: string, index: number) => (
            <option key={index} value={cheese}>
              {cheese}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
