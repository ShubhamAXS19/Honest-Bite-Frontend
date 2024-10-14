type ToppingsOptions = {
  vegetarian: string[];
  nonVegetarian: string[];
  vegan: string[];
};

export interface ShareSliceInputProps {
  selectedCrust: string;
  setSelectedCrust: React.Dispatch<React.SetStateAction<string>>;
  crustOptions: string[];
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
  sizeOptions: string[];
  selectedVegToppings: string[];
  selectedNonVegToppings: string[];
  selectedVeganToppings: string[];
  toppingsOptions: ToppingsOptions;
  selectedSauce: string;
  setSelectedSauce: React.Dispatch<React.SetStateAction<string>>;
  sauceOptions: string[];
  selectedCheese: string;
  setSelectedCheese: React.Dispatch<React.SetStateAction<string>>;
  cheeseOptions: string[];
  handleVegToppingsChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleNonVegToppingsChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleVeganToppingsChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export interface SelectFriendProps {
  numPeople: number;
  handleNumofppl: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DataPoint {
  name: string;
  value: number;
}

export interface ChartData {
  // week: DataPoint[];
  // month: DataPoint[];
  // sixMonths: DataPoint[];
  year: DataPoint[];
}

export interface ChartProps {
  data: ChartData;
  title: string;
}
