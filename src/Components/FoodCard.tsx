import pizzaSlice from "../../assets/pizza.png";

const FoodCard = () => {
  return (
    <div className="" style={{ height: "10vh", width: "10vh" }}>
      <div className="inset-0 flex justify-center items-center">
        <div className="aspect-w-16 aspect-h-9 w-full h-full">
          <img src={pizzaSlice} alt="Pizza" className="object-cover" />
        </div>
      </div>
      <p className="text-center mt-2">Pizza</p>
    </div>
  );
};

export default FoodCard;
